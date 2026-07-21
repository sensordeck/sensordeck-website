# SensorDeck 网站全量安全审查与红蓝队对抗测试报告

> [!CAUTION]
> **发现 1 项 High 风险问题：Demo 页面把人员姓名、真实企业名称、机器人序列号、部署位置、运行时数据集 ID 和事故细节编译进匿名可下载的客户端 JavaScript。若这些记录并非完整合成数据，应立即下线并启动数据泄露响应。**

## 1. 执行摘要

- 审查日期：2026-07-21
- 审查基线：`5b12f54 chore: add .codegraph to gitignore`
- 技术栈：Next.js 16.2.10、React 19.2.4、TypeScript 5.9.3、Tailwind CSS 4.3.3
- 应用形态：公开内容网站，包含本地交互 Demo 和基于 `mailto:` 的联系表单
- 发现数量：

| 严重程度 | 数量 |
| --- | ---: |
| Critical | 0 |
| High | 1 |
| Medium | 3 |
| Low | 5 |
| Info | 5 |

### 整体安全态势

整体风险评估为 **中等，带 1 项需立即核实的高风险数据暴露**。

应用的传统 Web 攻击面较小：当前没有 API Route、Server Action、数据库、认证、Cookie 会话、文件上传、浏览器持久化或用户生成 HTML。React 默认转义被完整保留，未发现 `dangerouslySetInnerHTML`、DOM HTML 注入、动态代码执行、任意网络请求、开放重定向或客户端令牌存储。

主要风险集中在：

1. Demo 使用生产风格数据，并把部分字段公开编译到客户端 bundle。
2. 应用代码中未配置 CSP、点击劫持防护和完整的安全响应头基线。
3. 联系流程处理个人信息，但缺少公开隐私告知、保留期限和数据权利说明。
4. 依赖锁文件全部绑定第三方镜像，且当前环境无法完成 `npm audit`，缺少可证明的持续依赖审计闭环。

### 优先修复建议

1. **P0：**确认 Demo 数据是否 100% 合成；若含真实数据，立即删除、清理 Git 历史、重新构建并清除 CDN 缓存。
2. **P1：**部署 nonce-based CSP、`frame-ancestors`、`X-Content-Type-Options`、`Referrer-Policy`、`Permissions-Policy`，关闭 `X-Powered-By`。
3. **P1：**补充隐私告知并统一/验证 `sensordeck.tech` 与 `sensordeck.com` 邮件域的所有权和邮件安全配置。
4. **P1：**在可访问官方 npm registry 的 CI 中执行 `npm ci`、`npm audit`、SBOM 和依赖更新检查。
5. **P2：**为联系表单增加长度上限、标准 `autocomplete` 属性和自动化安全回归测试。

---

## 2. 审查范围与方法

### 2.1 已执行

- 全仓库文件、路由、客户端组件和公开资源盘点
- OWASP Top 10 和 Next.js/React 专项静态审查
- 高风险 API 与数据源/危险 sink 搜索
- 当前工作树与 275 个 Git 提交的密钥模式扫描
- `package.json`、`package-lock.json` 和本地依赖树检查
- `npm run lint`
- `npx tsc --noEmit`
- `npm run build`
- 生产 bundle 中敏感字符串和 sourcemap 检查
- 编译后 Proxy 中间件的直接调用与恶意路径测试
- Contact 表单 XSS、CRLF、超长输入和验证绕过模拟
- 相关 Next.js、React Server Components 官方安全公告核对

### 2.2 工具限制

1. `npm audit --json` 因沙箱无法解析 `registry.npmmirror.com` 而失败，不能把该结果解释为“0 漏洞”。
2. 沙箱禁止监听本地端口，`next start` 在 `0.0.0.0:3010` 和 `127.0.0.1:3010` 均返回 `EPERM`。因此无法直接抓取完整运行时 HTTP 响应头。
3. 仓库中没有 CDN、WAF、Vercel、Cloudflare、nginx 或其他生产边缘配置。应用代码中缺失的响应头可能由外部基础设施补充，必须在生产环境再次验证。
4. `.codegraph/` 索引存在，但 CodeGraph MCP 请求连续被取消。本次以逐文件审查、构建产物和可执行中间件测试补足。
5. 未安装 Gitleaks、TruffleHog、Semgrep、OSV-Scanner、Trivy、Grype 或 Snyk。

### 2.3 攻击面与信任边界

| 攻击面 | 输入来源 | 当前处理 | 风险结论 |
| --- | --- | --- | --- |
| `[lang]` 动态路由 | URL 路径 | `isValidLocale()` allowlist | 安全 |
| Proxy 本地化重定向 | URL 路径、Host 相关头 | 修改同源 `request.nextUrl.pathname` | 未发现开放重定向 |
| Contact 表单 | 用户姓名、邮箱、公司、消息 | `encodeURIComponent` 后写入 `mailto:` | 无服务器端注入；缺少长度上限 |
| Demo 页面 | 本地 JSON 和硬编码内容 | 导入 Client Component | 存在信息暴露 |
| 外部文档链接 | 源码常量 | `noopener noreferrer` 或 `noreferrer` | 安全 |
| 图片 | 本地 `public/` 资源 | 无远程图片域 | 无图片代理 SSRF |
| npm 供应链 | 第三方镜像包 | lockfile v3 + SHA-512 integrity | 完整性存在，审计可用性不足 |

---

## 3. 漏洞详细列表

## SD-H01：生产风格人员和设备运行数据进入公开客户端 bundle

- 严重程度：**High**
- OWASP：A02 Cryptographic Failures / Sensitive Data Exposure
- CWE：CWE-200 Exposure of Sensitive Information
- CVSS 3.1：**7.5** `AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:N/A:N`
- CVSS 前提：数据包含真实或可关联到真实主体的信息。若全部字段均为经批准的合成数据，可降级为 Info。

### 受影响位置

- `src/data/demo/ref.json:2`
- `src/data/demo/ref.json:4`
- `src/data/demo/ref.json:7`
- `src/data/demo/ref.json:9`
- `src/data/demo/ref.json:12`
- `src/data/demo/ref.json:15`
- `src/data/demo/ref.json:19`
- `src/data/demo/ref.json:26`
- `src/data/demo/ref.json:31`
- `src/data/demo/ref.json:32`
- `src/data/demo/robot.json:2`
- `src/data/demo/robot.json:4`
- `src/data/demo/robot.json:5`
- `src/data/demo/robot.json:6`
- `src/data/demo/robot.json:9`
- `src/data/demo/agent.json:2`
- `src/data/demo/agent.json:3`
- `src/data/demo/agent.json:7`
- `src/data/demo/evidence-pack.json:22`
- `src/app/[lang]/demo/investigation/InvestigationDemoClient.tsx:1`
- `src/app/[lang]/demo/investigation/InvestigationDemoClient.tsx:8`
- `src/app/[lang]/demo/investigation/InvestigationDemoClient.tsx:74`
- `src/app/[lang]/demo/sensor-fae/SensorFaeDemoClient.tsx:1`
- `src/app/[lang]/demo/sensor-fae/SensorFaeDemoClient.tsx:8`
- `src/app/[lang]/demo/sensor-fae/SensorFaeDemoClient.tsx:46`
- `src/app/[lang]/demo/sensor-fae/SensorFaeDemoClient.tsx:48`
- `src/app/[lang]/demo/tier1/Tier1DemoClient.tsx:1`
- `src/app/[lang]/demo/tier1/Tier1DemoClient.tsx:8`
- `src/app/[lang]/demo/tier1/Tier1DemoClient.tsx:9`
- `src/app/[lang]/demo/tier1/Tier1DemoClient.tsx:160`
- `src/app/[lang]/demo/tier1/Tier1DemoClient.tsx:194`
- `src/app/[lang]/demo/tier1/Tier1DemoClient.tsx:347`

### 证据

数据文件包含：

- `Pudu Robotics`
- `PUDU-T300-7F3A-0021`
- `张江科技园 A 楼 3 层`
- `RD-7F3A-0716-0815`
- `Wang Kai`
- `Hesai FAE`
- 事故发生时间、运行窗口、故障表现、传感器型号、固件和运行环境
- 源文件还包含 `wang.kai@hesaitech.com`

生产构建确认以下值进入匿名客户端 chunk：

```text
.next/static/chunks/app/[lang]/demo/investigation/page-*.js
  PUDU-T300-7F3A-0021
  张江科技园 A 楼 3 层
  RD-7F3A-0716-0815

.next/static/chunks/app/[lang]/demo/sensor-fae/page-*.js
  Wang Kai
  Hesai FAE
  PUDU-T300-7F3A-0021
  张江科技园 A 楼 3 层
  RD-7F3A-0716-0815
```

`wang.kai@hesaitech.com` 当前被生产 tree-shaking 从客户端 chunk 移除，但仍存在于源代码和 Git 历史；若代码仓库公开或被更宽泛地分发，该邮箱仍会泄露。

### 利用场景

匿名攻击者无需登录即可：

1. 访问 Demo 页面并下载页面 chunk。
2. 搜索机器人序列号、地点、客户名称、人员名称或运行时 ID。
3. 将故障和部署信息与真实企业、员工、供应商关系关联。
4. 用于定向钓鱼、供应商冒充、客户关系推断或工业设备情报收集。

### PoC

```bash
npm run build
rg -n \
  'PUDU-T300-7F3A-0021|张江科技园 A 楼 3 层|RD-7F3A-0716-0815|Wang Kai|Hesai FAE' \
  .next/static/chunks/app
```

### 修复建议

1. 在发布前完成数据来源确认和书面批准。
2. 只使用明确标记的合成实体，例如 `Example Robotics`、`Demo User` 和 `.invalid` 邮件域。
3. 删除可关联的客户名称、人员姓名、位置、序列号、时间和内部 ID。
4. 在 CI 中扫描客户端 bundle，而不仅扫描源文件。
5. 若数据真实：
   - 立即下线受影响 Demo；
   - 清理 Git 历史；
   - 重新构建并清除 CDN 缓存；
   - 评估通知数据主体、客户、安全团队和隐私负责人；
   - 评估序列号、内部 ID、支持流程和邮件身份是否需要更换或监控。

安全示例：

```json
{
  "ref_id": "DEMO-REF-0001",
  "created_by": {
    "name": "Demo User",
    "role": "Support Engineer",
    "customer": "Example Robotics"
  },
  "robot_sn": "DEMO-ROBOT-0001",
  "environment": {
    "location": "Example Facility",
    "conditions": "Synthetic indoor scenario"
  },
  "sensor_fae": {
    "name": "Demo FAE",
    "vendor": "Example Sensor Vendor",
    "email": "demo@example.invalid"
  }
}
```

### 误报/降级条件

只有在以下条件全部满足时才建议降级：

- 所有人名、公司、邮箱、设备、位置、时间、故障和 ID 都是合成的；
- 不对应真实客户、员工、供应商或部署；
- 已由法务/隐私和业务负责人批准公开；
- 文件头或数据 schema 明确标注 `synthetic: true`；
- 有自动化测试防止未来导入真实数据。

---

## SD-M01：应用代码中缺少 CSP、点击劫持防护和安全响应头基线

- 严重程度：**Medium**
- OWASP：A05 Security Misconfiguration
- CWE：CWE-693 Protection Mechanism Failure
- CVSS 3.1：**4.3** `AV:N/AC:L/PR:N/UI:R/S:U/C:L/I:N/A:N`

### 受影响位置

- `next.config.ts:3`
- `src/proxy.ts:13`
- `src/proxy.ts:17`

### 描述

`next.config.ts` 仅配置图片质量。仓库中未发现：

- `Content-Security-Policy`
- `frame-ancestors`
- `X-Frame-Options`
- `X-Content-Type-Options`
- `Referrer-Policy`
- `Permissions-Policy`
- `Cross-Origin-Opener-Policy`

当前仓库也没有可供审查的 CDN/边缘部署配置。

### 利用场景

- 页面可被第三方站点嵌入时，攻击者可构造点击劫持界面。
- 未来出现 XSS sink 或第三方脚本被攻破时，没有 CSP 限制脚本、对象、框架和外连范围。
- 缺少 `nosniff`、Referrer 和 Permissions Policy 会扩大浏览器默认行为带来的信息泄露面。

当前站点没有高价值状态变更，因此点击劫持的即时业务影响有限；Contact 页面仍可能被用于诱导用户打开预填邮件。

### PoC/验证

应用代码静态验证：

```bash
rg -n \
  'Content-Security-Policy|frame-ancestors|X-Frame-Options|X-Content-Type-Options|Referrer-Policy|Permissions-Policy' \
  next.config.ts src
```

结果为空。

生产环境必须补充：

```bash
curl -sI https://<production-host>/en/contact
```

### 修复建议

先在 `next.config.ts` 添加不会破坏 Next.js 运行的基础响应头：

```ts
import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=(), usb=()",
  },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
```

CSP 应先使用 `Content-Security-Policy-Report-Only` 验证，再切换为强制策略。Next.js App Router 需要为框架脚本生成每请求 nonce；不要为了兼容直接加入宽泛的 `unsafe-eval`。建议目标策略：

```text
default-src 'self';
script-src 'self' 'nonce-<per-request-value>' 'strict-dynamic';
style-src-elem 'self' 'nonce-<per-request-value>';
style-src-attr 'unsafe-inline';
img-src 'self' data:;
font-src 'self';
connect-src 'self';
object-src 'none';
base-uri 'self';
form-action 'self' mailto:;
frame-ancestors 'none';
```

### 误报说明

如果生产 CDN/WAF 已设置等价或更严格策略，则应用层问题可降级，但应保留自动化运行时验证，避免平台迁移时丢失控制。

---

## SD-M02：联系流程缺少完整的个人信息处理告知与治理信息

- 严重程度：**Medium（合规）**
- OWASP：A02 Sensitive Data Exposure / Privacy
- GDPR：Articles 5、12、13、15-22、32
- CVSS：不适用

### 受影响位置

- `src/app/[lang]/contact/ContactFormClient.tsx:15`
- `src/app/[lang]/contact/ContactFormClient.tsx:58`
- `src/content/en/contact.ts:29`
- `src/content/en/contact.ts:33`
- `src/content/en/contact.ts:37`
- `src/content/zh/contact.ts:29`
- `src/content/zh/contact.ts:33`
- `src/content/zh/contact.ts:37`

### 描述

联系表单处理姓名、工作邮箱、公司、职位、组织类型、设备规模和自由文本消息。页面明确说明会打开邮件草稿，但未提供：

- 数据控制者身份和隐私联系方式
- 处理目的和法律依据
- 保留期限
- 邮件系统或服务提供商等处理者信息
- 跨境传输说明
- 数据主体访问、更正、删除和投诉权利
- 不应在自由文本中提交敏感或受限信息的提示
- 隐私政策链接

即使网站服务器不接收数据，用户发送邮件后仍发生个人数据处理。

### 利用/风险场景

- 用户在消息中提交设备故障、客户环境、日志或联系人信息。
- 数据通过邮件系统长期保留或跨区域传输。
- 缺少明确告知使数据最小化、删除请求和事件响应难以执行。

### 修复建议

1. 在提交按钮附近增加简短隐私告知和隐私政策链接。
2. 明确数据仅用于销售/技术联系，不要求提交密码、密钥、日志原文、个人身份号码或受限客户数据。
3. 定义邮箱保留期限、访问权限、删除流程和跨境传输机制。
4. 使用角色邮箱而不是个人邮箱接收联系请求。
5. 对收件邮箱启用 MFA、反钓鱼、防转发和审计日志。
6. 记录数据处理活动和第三方邮件处理者。

---

## SD-M03：供应链审计不可复现，全部锁文件来源绑定第三方镜像

- 严重程度：**Medium**
- OWASP：A06 Vulnerable and Outdated Components
- CWE：CWE-1104 Use of Unmaintained Third-Party Components
- CVSS：不适用；这是控制和可验证性缺口，而非已确认 CVE

### 受影响位置

- `package-lock.json:31`
- `package-lock.json:33`
- `package.json:5`

### 证据

- lockfile 版本：3
- package 条目：441
- 远程 registry 条目：441
- 缺少 integrity 的远程条目：0
- 441 个下载地址全部指向 `registry.npmmirror.com`
- 当前 npm registry：`https://registry.npmmirror.com`
- 仓库中没有 `.npmrc`，registry 行为依赖开发机/CI 外部配置
- 仓库中没有 GitHub Actions 或其他可见 CI 依赖扫描

`npm audit --json` 原始输出：

```text
npm warn audit request to https://registry.npmmirror.com/-/npm/v1/security/advisories/bulk failed,
reason: getaddrinfo ENOTFOUND registry.npmmirror.com
npm error audit endpoint returned an error
{
  "message": "request to https://registry.npmmirror.com/-/npm/v1/security/advisories/bulk failed, reason: getaddrinfo ENOTFOUND registry.npmmirror.com",
  "error": {
    "summary": "",
    "detail": ""
  }
}
```

`npm outdated --json` 同样因 DNS `ENOTFOUND` 失败。

### 风险

- 审计结果依赖未记录的开发机全局 npm 配置。
- 第三方镜像不可用时，构建和漏洞审计同时失效。
- SHA-512 integrity 能防止与 lockfile 不匹配的内容替换，但不能替代漏洞数据库、来源治理、签名和 CI 证明。
- 当前无法对全部传递依赖给出“无已知漏洞”的结论。

### 修复建议

1. 在 CI 中显式使用受信任 registry，并执行：

```bash
npm ci --ignore-scripts
npm audit --audit-level=high
npm outdated
npm sbom --sbom-format=cyclonedx
```

2. 如业务必须使用镜像：
   - 在仓库或 CI 中显式记录镜像策略；
   - 定期与官方 registry 元数据比对；
   - 为镜像建立可用性和完整性监控；
   - 使用 Dependabot/Renovate 或等价更新流程。
3. 对安装脚本包单独审批。当前 lockfile 中声明安装脚本的包包括 `fsevents`、`sharp`、`unrs-resolver`。
4. CI 构建使用 `npm ci`，禁止漂移安装。

---

## SD-L01：Contact 表单缺少输入长度上限

- 严重程度：**Low**
- OWASP：A04 Insecure Design / Input Validation
- CWE：CWE-400 Uncontrolled Resource Consumption
- CVSS：不适用；当前影响局限于提交者本地浏览器和邮件客户端

### 受影响位置

- `src/app/[lang]/contact/ContactFormClient.tsx:45`
- `src/app/[lang]/contact/ContactFormClient.tsx:55`
- `src/app/[lang]/contact/ContactFormClient.tsx:187`
- `src/app/[lang]/contact/ContactFormClient.tsx:314`

### 描述

所有文本输入和 `textarea` 都没有 `maxLength`。测试中 1,000,000 个字符可以生成约 1,000,065 字符的 `mailto:` URL。

### 风险

- 页面状态、字符串拼接和 URL 生成产生不必要内存占用。
- 浏览器或本地邮件客户端可能卡顿、拒绝处理或截断内容。
- 如果未来改为后端提交，这一问题会升级为服务端资源消耗、日志污染和邮件滥用风险。

### 修复建议

建议上限：

| 字段 | 建议上限 |
| --- | ---: |
| 姓名 | 100 |
| 邮箱 | 254 |
| 公司 | 200 |
| 职位 | 120 |
| 设备规模 | 100 |
| 消息 | 4,000 |

同时在提交函数中做二次校验，不要只依赖 HTML 属性。

---

## SD-L02：联系邮箱使用 `.tech` 与 `.com` 两套域名，存在信任和误投风险

- 严重程度：**Low；若 `.com` 不受 SensorDeck 控制则升级为 High**
- OWASP：A04 Insecure Design / Social Engineering Surface
- CWE：CWE-346 Origin Validation Error（条件性）
- CVSS：待域名所有权确认

### 受影响位置

- `src/app/[lang]/contact/ContactFormClient.tsx:75`
- `src/content/en/contact.ts:71`
- `src/content/en/contact.ts:77`
- `src/content/zh/contact.ts:71`
- `src/content/zh/contact.ts:77`

### 描述

表单邮件发送到：

```text
contact@sensordeck.tech
```

页面同时公布：

```text
sales.china@sensordeck.com
sales.usa@sensordeck.com
```

仓库无法证明两个域名均由同一主体控制，也无法验证 SPF、DKIM、DMARC、MTA-STS 和 TLS-RPT。

### 风险

- 用户可能把个人信息或客户技术信息发送到错误或未受控域。
- 品牌域不一致增加钓鱼、相似域和供应商冒充成功率。

### 修复建议

1. 确认并记录两个域名的所有权。
2. 尽量统一公开联系邮箱域。
3. 为所有发信域配置 SPF、DKIM 和强 DMARC 策略。
4. 监控相似域注册和品牌冒用。
5. 在发布流程中加入邮件地址域 allowlist 测试。

---

## SD-L03：Next.js 默认技术指纹未关闭

- 严重程度：**Low**
- OWASP：A05 Security Misconfiguration
- CWE：CWE-200 Information Exposure
- CVSS 3.1：**2.6** `AV:N/AC:H/PR:N/UI:N/S:U/C:L/I:N/A:N`

### 受影响位置

- `next.config.ts:3`

### 描述

未设置 `poweredByHeader: false`。Next.js 16.2.10 默认 `poweredByHeader: true`，框架会对 HTML 响应设置：

```text
X-Powered-By: Next.js
```

生产客户端框架 chunk 中还可检索到 `16.2.10`。客户端框架版本并不能完全隐藏，因此关闭响应头只能减少低成本指纹，不应被当作核心防护。

### 修复建议

```ts
const nextConfig: NextConfig = {
  poweredByHeader: false,
};
```

---

## SD-L04：Demo 表单控件存在可访问性关联缺失

- 严重程度：**Low（a11y 合规）**
- WCAG：1.3.1、3.3.2、4.1.2
- CVSS：不适用

### 受影响位置

- `src/app/[lang]/demo/tier1/Tier1DemoClient.tsx:95`
- `src/app/[lang]/demo/tier1/Tier1DemoClient.tsx:98`
- `src/app/[lang]/demo/sensor-fae/SensorFaeDemoClient.tsx:196`
- `src/app/[lang]/demo/sensor-fae/SensorFaeDemoClient.tsx:197`
- `src/app/[lang]/demo/sensor-fae/SensorFaeDemoClient.tsx:229`
- `src/app/[lang]/demo/sensor-fae/SensorFaeDemoClient.tsx:230`

### 描述

部分 `<label>` 没有 `htmlFor`，对应控件也没有 `id`。屏幕阅读器和语音控制可能无法可靠建立标签与输入的关系。

### 修复建议

为每个控件增加稳定的 `id`/`name`，并使用 `htmlFor` 关联。对多步骤 Demo 的状态变化增加 `aria-live` 或可感知的步骤标题。

正面结果：正式 Contact 表单的文本输入、选择框和消息框均有 `label`/`htmlFor` 关联。

---

## SD-L05：本地安装树存在未记录的 extraneous 包

- 严重程度：**Low**
- OWASP：A06 Vulnerable and Outdated Components
- CVSS：不适用

### 证据

`npm ls --depth=0` 报告：

```text
@emnapi/core@1.10.0 extraneous
@emnapi/runtime@1.11.2 extraneous
@emnapi/wasi-threads@1.2.1 extraneous
@napi-rs/wasm-runtime@1.1.6 extraneous
@tybys/wasm-util@0.10.3 extraneous
```

这些包不在根依赖声明中。它们可能是可选原生依赖安装后的残留，不代表生产 `npm ci` 一定包含同样漂移。

### 修复建议

- 使用干净容器执行 `npm ci` 并检查 `npm ls --all`。
- CI 将 `npm ls` 的 invalid/extraneous 状态视为失败。
- 不提交或复用开发机 `node_modules`。

---

## 4. 信息级观察与通过项

## SD-I01：未发现高风险 XSS sink

全仓库未发现应用代码使用：

- `dangerouslySetInnerHTML`
- `innerHTML` / `outerHTML`
- `insertAdjacentHTML`
- `document.write`
- `DOMParser` 后插入 DOM
- `eval`
- `new Function`
- 字符串形式 `setTimeout` / `setInterval`
- 字符串事件处理器

生产 bundle 中相关字符串来自 React/Next.js 框架实现，不是 SensorDeck 应用调用。

## SD-I02：未发现服务端状态变更面

当前不存在：

- `app/**/route.ts`
- `pages/api/**`
- Server Actions
- 数据库客户端或 SQL
- 认证、授权、会话 Cookie
- 文件上传
- CORS 配置
- 后端邮件发送

因此 SQL 注入、CSRF、IDOR、认证绕过、权限提升、SSR F、服务端速率限制和竞态条件当前不适用。

注意：如果未来新增 API，`src/proxy.ts:38` 明确跳过 `/api`，不能把该 Proxy 当作 API 认证或授权边界。

## SD-I03：路由和重定向测试通过

`isValidLocale()` 仅允许 `zh` 和 `en`。动态内容导入前均验证 locale，未发现路径穿越。

编译后 Proxy 测试结果：

| 输入 | 结果 |
| --- | --- |
| `/` | `307 Location: /zh` |
| `/contact` | `307 Location: /zh/contact` |
| `/en/contact` | 继续同源请求 |
| `/%2F%2Fevil.example/path` | `307 Location: /zh/%2F%2Fevil.example/path` |
| `/\evil.example/path` | `307 Location: /zh//evil.example/path` |
| Host / X-Forwarded-Host 欺骗 | `307 Location: /zh/contact` |
| 查询参数 `next=https://evil.example` | 保留为普通查询参数，不参与跳转 |

所有 `Location` 均为相对同源路径，开放重定向测试失败。

## SD-I04：生产客户端 sourcemap 未公开

生产构建后：

```text
.next/static 下 *.map 数量：0
```

`.next/dev` 中存在开发 sourcemap，这是本地开发产物且 `.next` 已被 Git 忽略。部署流程必须只发布生产构建，不应上传 `.next/dev`。

## SD-I05：密钥、客户端存储和外链检查通过

- 当前文件和 Git 历史未命中常见 API Key、Token、密码或私钥模式。
- 无 `.env*`、PEM、P12、PFX 或 credential 文件被 Git 跟踪。
- `.env` 和 `.env.*` 已被 `.gitignore` 忽略。
- 未使用 `localStorage`、`sessionStorage`、IndexedDB 或 `document.cookie`。
- 未使用 iframe 或 `postMessage`。
- 所有 `target="_blank"` 外链均设置 `noopener noreferrer` 或 `noreferrer`。
- Next Image 未配置远程域，未发现图片代理 SSRF。
- 未发现不安全随机数、时间比较、正则表达式 DoS 或 prototype pollution 路径。

TypeScript 配置启用 `strict: true`，但 `allowJs: true` 和 `skipLibCheck: true` 会降低依赖和 JavaScript 文件的类型覆盖。当前未形成可利用漏洞，建议在维护周期内收紧。

---

## 5. 红队测试结果

### 5.1 测试矩阵

| 攻击向量 | Payload/方法 | 结果 | 结论 |
| --- | --- | --- | --- |
| URL 反射 XSS | `/<script>alert(1)</script>` | 编码后同源重定向，未进入 HTML sink | 失败 |
| 查询参数 XSS | `?x=<script>alert(1)</script>` | 仅保留在 URL，无读取/渲染代码 | 失败 |
| DOM XSS | Contact 字段 `<img src=x onerror=alert(1)>` | 经 URI 编码进入 `mailto body`，不渲染 | 失败 |
| `javascript:` 导航 | 传给 `localizeHref` | 转为 `/zh/javascript:...` 相对路径 | 失败 |
| Protocol-relative 开放重定向 | `//evil.example/path`、编码变体 | 最终 `Location` 仍为 `/zh/...` | 失败 |
| Host 头开放重定向 | 伪造 `Host` / `X-Forwarded-Host` | 返回相对 `/zh/contact` | 失败 |
| CRLF 邮件头注入 | `\r\nBcc: victim@example.com` | 编码为 `%0D%0ABcc%3A...` 且位于 `body` | 未发现跨字段注入 |
| 双编码 CRLF | `%0D%0ABcc...` | `%` 再编码为 `%25` | 失败 |
| 客户端验证绕过 | 直接调用提交逻辑/修改 DOM | 可绕过 `required`，但只打开本地邮件草稿 | 成功但无服务端影响 |
| 超长输入 | 1,000,000 字符 | 生成约 1,000,065 字符 mailto URL | 成功，Low 本地 DoS |
| 敏感数据提取 | 搜索生产客户端 chunk | 提取序列号、地点、运行时 ID、人员名称 | **成功，High** |
| 公共 sourcemap | 搜索 `.next/static/*.map` | 0 个 | 失败 |
| 点击劫持 | 配置审查 | 应用代码无 frame 防护 | 可能成功，需生产头验证 |
| SQLi/IDOR/CSRF/Auth bypass | 枚举服务端接口 | 无接口、认证或数据库 | 不适用 |
| Race condition | 枚举并发状态变更 | 无服务端状态变更 | 不适用 |
| Rate limit bypass | 枚举可滥用端点 | 无后端 Contact/API 端点 | 不适用 |

### 5.2 成功攻击链

#### 攻击链 A：公开 Demo 数据情报收集

```text
匿名访问 Demo
  -> 浏览器加载 Client Component chunk
  -> 搜索设备/地点/客户/人员/运行时 ID
  -> 关联真实企业和供应商
  -> 定向钓鱼、供应商冒充或运营情报收集
```

#### 攻击链 B：潜在点击劫持

```text
攻击者站点嵌入 SensorDeck 页面
  -> 透明覆盖诱导点击
  -> 用户触发“打开邮件草稿”或外部导航
```

该链是否可用取决于生产边缘是否已设置 `frame-ancestors` 或 `X-Frame-Options`。

### 5.3 已验证的安全控制

- React JSX 默认转义
- locale allowlist
- 同源相对重定向
- `encodeURIComponent` 编码 Contact 字段
- 外链 `noopener`/`noreferrer`
- 无客户端敏感 token 存储
- 生产客户端 sourcemap 默认关闭
- lockfile SHA-512 integrity 完整

---

## 6. 依赖安全报告

### 6.1 直接依赖

| 包 | 安装版本 | 结论 |
| --- | --- | --- |
| `next` | 16.2.10 | 已高于 2026 年相关 Next.js 公告的修复版本 |
| `react` | 19.2.4 | npm 已有 19.2.7；建议升级补丁版本 |
| `react-dom` | 19.2.4 | npm 已有 19.2.7；与 React 同步升级 |
| `@gsap/react` | 2.1.2 | 未发现适用的直接安全公告；完整审计受限 |
| `gsap` | 3.15.0 | 未发现适用的直接安全公告；完整审计受限 |
| `lucide-react` | 1.25.0 | 未发现适用的直接安全公告；完整审计受限 |
| `@playwright/test` | 1.61.1 | 仅开发依赖；未发现适用的直接安全公告 |
| `playwright` | 1.61.1 | 与 `@playwright/test` 重复声明，建议确认是否都需要 |
| `tailwindcss` | 4.3.3 | 未发现适用的直接安全公告；完整审计受限 |
| `typescript` | 5.9.3 | npm 存在 7.x，但属于大版本升级，不是本次安全必需更新 |

### 6.2 已核对的相关安全公告

| 公告/CVE | 受影响范围摘要 | 本项目状态 |
| --- | --- | --- |
| CVE-2026-29057 / GHSA-vp5m-2vq3-vqcg | Next.js 16.0.0-16.2.3；16.2.4 修复 | 16.2.10，不受影响 |
| GHSA-h27x-g6w4-24gq | Next.js 16.0.0-16.2.4；16.2.5 修复 | 16.2.10，不受影响 |
| GHSA-ffhc-5mcf-pf4q | Next.js 16.0.0-16.2.5；16.2.6 修复 | 16.2.10，不受影响 |
| GHSA-mq59-m269-xvcx | Next.js 16.0.0-16.2.5；16.2.6 修复 | 16.2.10，不受影响 |
| CVE-2025-66478 | 较旧 Next.js React2Shell 受影响版本 | 16.2.10 高于修复基线 |
| CVE-2026-23870 / GHSA-rv78-f8rc-xrxh | `react-server-dom-*` 19.0.0-19.2.6 | lockfile 无独立 RSC 包；Next 16.2.10 使用其已更新的编译内置实现 |

注意：

- CVE-2026-23870 针对 `react-server-dom-webpack`、`react-server-dom-parcel`、`react-server-dom-turbopack`，不是顶层 `react` 或 `react-dom` 包本身。
- Next 16.2.10 内置 RSC 的 peer 标记为 2026-03-17 的 React 19.3 canary，并高于相关 Next.js 修复版本。
- 由于 `npm audit` 无法运行，不能排除其他传递依赖公告。

### 6.3 package-lock 完整性

通过项：

- lockfile v3
- 441/441 远程包条目都有 SHA-512 integrity
- `next`、`react`、`react-dom` 在 `package.json` 中精确固定

风险项：

- 所有远程包 URL 均指向第三方镜像
- 多数其他依赖使用 `^`，但 `npm ci` 会按 lockfile 固定版本
- 当前本地 `node_modules` 有 extraneous 包
- 没有仓库内可见的持续依赖扫描配置

### 6.4 需要更新的包

P1 建议：

```text
react      19.2.4 -> 19.2.7
react-dom  19.2.4 -> 19.2.7
```

P2 评估：

```text
typescript 5.9.3 -> 7.x
```

TypeScript 大版本升级需先确认 Next.js、ESLint 和现有构建链兼容性。

---

## 7. OWASP Top 10 覆盖结论

| 类别 | 结论 |
| --- | --- |
| A01 Broken Access Control | 当前无受保护资源、API 或对象访问；不适用 |
| A02 Cryptographic Failures | 无加密/凭据处理；发现 Demo 数据暴露和隐私治理问题 |
| A03 Injection | 未发现 XSS、SQL、命令、模板或 DOM 注入路径 |
| A04 Insecure Design | Contact 无长度上限；邮箱域和隐私流程需治理 |
| A05 Security Misconfiguration | 缺少 CSP/点击劫持/安全头；默认框架指纹 |
| A06 Vulnerable Components | Next 当前版本高于相关修复线；完整 npm audit 未完成 |
| A07 Identification/Auth Failures | 无认证功能；不适用 |
| A08 Software/Data Integrity Failures | lockfile integrity 完整；registry 和 CI 审计可复现性不足 |
| A09 Logging/Monitoring Failures | 无后端业务事件；部署层监控不可见 |
| A10 SSRF | 无用户可控服务器端 fetch 或远程图片域；未发现 |

---

## 8. Next.js 专项检查

| 检查项 | 状态 | 说明 |
| --- | --- | --- |
| API Routes | 通过/不适用 | 无 API Route |
| Server Actions | 通过/不适用 | 无 `"use server"` |
| Server/Client 边界 | 有风险 | Demo JSON 被 Client Component 导入 |
| 环境变量 | 通过 | 无 `process.env` / `NEXT_PUBLIC_*`；无 tracked `.env` |
| Proxy | 通过 | locale allowlist，同源相对重定向 |
| Proxy API 覆盖 | Info | matcher 跳过 `/api`，未来不能作为 API auth 边界 |
| 图片配置 | 通过 | 仅本地图片，无远程图片 SSRF |
| CSP | 缺失 | 应用代码未配置 |
| 安全响应头 | 缺失 | 应用代码未配置 |
| Source maps | 通过 | 生产客户端无公开 map |
| 生产构建 | 通过 | `next build --webpack` 成功 |
| 错误堆栈 | 未完全验证 | 生产服务无法在沙箱监听；未发现自定义堆栈输出 |
| `X-Powered-By` | Low | 默认启用 |

---

## 9. 合规性检查

### 9.1 GDPR/数据隐私

主要问题：

- Demo 数据可能与真实员工、客户和部署关联。
- Contact 流程没有完整 Article 13 告知。
- 没有公开保留期限、删除流程或隐私联系人。
- 自由文本可能收集超出销售联系所需的设备/事故信息。
- 两套邮件域可能造成处理主体和数据流不清晰。

建议：

- 为 Demo 建立合成数据标准和发布审批。
- 发布隐私政策和联系表单短告知。
- 定义邮件保留、访问控制、DLP、删除和跨境传输流程。
- 建立数据主体请求流程。
- 不在公开演示中使用可关联到真实企业和设备的标识符。

### 9.2 可访问性安全

通过项：

- 正式 Contact 表单标签关联正确。
- 交互按钮多数使用原生 `button`。
- 外链和图像有可读文本/alt。
- 菜单支持 Escape 关闭。

问题：

- Demo 中部分 label 与控件未程序化关联。
- 多步骤和动态结果缺少明确的 `aria-live` 状态通知。
- 不能在本环境执行浏览器级 axe/Lighthouse 测试。

### 9.3 行业最佳实践对比

| 实践 | 当前状态 |
| --- | --- |
| OWASP ASVS L1 输入/输出编码 | 基本满足 |
| OWASP ASVS 安全响应头 | 未满足 |
| 数据最小化 | Demo 未满足 |
| 密钥管理 | 当前满足 |
| SBOM | 未配置 |
| 自动依赖扫描 | 仓库中不可见 |
| 可复现安装 | lockfile 存在；registry 策略未固化 |
| CSP 报告与监控 | 未配置 |
| 合成测试数据治理 | 未配置 |
| 安全回归测试 | 未配置 |

---

## 10. 修复优先级路线图

### P0：立即修复

1. 确认 `src/data/demo/*` 和 Demo 组件中的所有名称、客户、邮箱、序列号、地点、时间和故障是否为合成数据。
2. 如果任何数据真实：
   - 下线 Demo；
   - 删除数据和硬编码名称；
   - 清理 Git 历史；
   - 清除 CDN/浏览器缓存；
   - 启动隐私和客户通知评估。
3. 将所有 Demo 实体替换为明显合成的名称和 `.invalid` 邮件域。

### P1：短期修复

1. 关闭 `poweredByHeader`。
2. 部署安全响应头和 nonce-based CSP，先 Report-Only。
3. 配置 `frame-ancestors 'none'` 或明确的嵌入 allowlist。
4. 增加 Contact 隐私告知和隐私政策。
5. 确认 `.tech`/`.com` 域名所有权，统一公开邮件域并检查 SPF/DKIM/DMARC。
6. 升级 `react` 和 `react-dom` 到 19.2.7。
7. 在官方 registry 可用的 CI 中完成 `npm audit` 和 SBOM。

### P2：中期改进

1. 为 Contact 字段增加长度限制和二次校验。
2. 为表单增加正确的 `autocomplete` 属性。
3. 修复 Demo label/id 和动态状态可访问性。
4. 增加安全测试：
   - 所有 HTML 响应安全头断言；
   - Proxy 开放重定向 payload；
   - 客户端 bundle 敏感词扫描；
   - 禁止危险 DOM sink；
   - 所有 `_blank` 链接必须有 `noopener`/`noreferrer`。
5. CI 使用干净 `npm ci` 并拒绝 invalid/extraneous 依赖树。

### P3：长期增强

1. 建立 Dependabot/Renovate 和安全公告响应 SLA。
2. 生成 CycloneDX/SPDX SBOM 并保存构建证明。
3. 引入 Gitleaks 和 Semgrep/CodeQL。
4. 部署 CSP 上报、边缘安全头监控和定期外部扫描。
5. 建立合成数据发布策略、隐私审批和数据泄露演练。
6. 每次新增 API、认证、上传或 Server Action 时重新执行威胁建模。

---

## 11. 验证结果

| 命令 | 结果 |
| --- | --- |
| `npm run lint` | 通过，0 errors，2 warnings |
| `npx tsc --noEmit` | 通过 |
| `npm run build` | 通过，Next.js 16.2.10 生产构建成功 |
| `npm audit --json` | 失败：registry DNS `ENOTFOUND` |
| `npm outdated --json` | 失败：registry DNS `ENOTFOUND` |
| `npm ls --all` | 完成，发现 5 个 extraneous 包 |
| Git 历史密钥模式扫描 | 未发现命中 |
| 生产客户端 sourcemap 扫描 | 0 个 |
| 生产客户端敏感数据扫描 | 命中，见 SD-H01 |
| 编译后 Proxy 恶意重定向测试 | 未发现开放重定向 |
| 本地 `next start` | 环境阻止监听端口，`EPERM` |

ESLint 警告：

```text
scripts/analyze-zendesk-motion.mjs:98:18
  'e' is defined but never used

src/app/[lang]/company/page.tsx:24:5
  'mission' is assigned a value but never used
```

---

## 12. 发布前验收清单

- [ ] Demo 数据已被证明为合成数据或完成替换
- [ ] 生产 bundle 不再包含客户、人员、设备和地点标识符
- [ ] CDN 缓存已清除
- [ ] CSP Report-Only 无关键违规
- [ ] CSP 已切换为强制模式
- [ ] `frame-ancestors`/`X-Frame-Options` 已验证
- [ ] `nosniff`、Referrer Policy、Permissions Policy 已验证
- [ ] `X-Powered-By` 已关闭
- [ ] Contact 隐私告知和政策已上线
- [ ] 邮件域所有权和 SPF/DKIM/DMARC 已验证
- [ ] React/React DOM 已升级并回归测试
- [ ] 官方 registry 上 `npm audit` 已完成
- [ ] SBOM 已生成并归档
- [ ] 生产站点已执行浏览器级 a11y 和安全头扫描

