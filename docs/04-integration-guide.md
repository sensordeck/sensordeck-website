# 集成到现有项目的方案

## 集成位置建议

### 方案 1: Demo 页面交互演示

在 `/demo` 页面顶部添加交互式动画区域。

**优势:**
- 展示技术能力
- 用户可直接操作
- 与演示场景契合

**集成位置:** `/src/app/demo/page.tsx` Hero 下方

```typescript
// 在 Demo Hero 和 Demo Context 之间插入
<Section id="demo-hero" className="bg-white">
  {/* 现有 Hero 内容 */}
</Section>

{/* 新增: 交互式动画演示 */}
<Section id="animation-demo" className="bg-surface-blue border-t border-atlas-blue/25">
  <div className="max-w-4xl">
    <Eyebrow>交互式演示</Eyebrow>
    <h2 className="mt-4 text-2xl font-semibold">精确时序动画</h2>
    <p className="mt-3 text-muted">
      基于视频逆向工程的毫秒级时序控制 (GSAP Timeline)
    </p>
  </div>
  <AnimatedCard className="mt-8" />
</Section>

<Section id="demo-context" className="bg-surface">
  {/* 现有演示场景 */}
</Section>
```

### 方案 2: 首页技术能力展示

在首页 Platform Capabilities 区域添加动画卡片。

**优势:**
- 视觉亮点
- 展示精细打磨
- 符合技术叙事

**集成位置:** `/src/app/page.tsx` Platform Section

```typescript
<Section id="platform" className="bg-white">
  <SectionHeading {...} />
  
  {/* 在现有 4 个卡片网格上方添加 */}
  <div className="mt-8 border border-atlas-blue/25 bg-surface-blue p-6 rounded-lg">
    <div className="flex items-center justify-between mb-4">
      <div>
        <span className="text-xs font-mono text-sensor-tan">技术演示</span>
        <h3 className="mt-2 text-lg font-semibold">毫秒级时序控制</h3>
      </div>
      <AnimatedCard
        lines={['Runtime Evidence', 'EP-C03', 'Pudu T300']}
        className="scale-75 origin-right"
      />
    </div>
  </div>

  <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
    {/* 现有 4 个能力卡片 */}
  </div>
</Section>
```

### 方案 3: 独立技术展示页

创建 `/technology/animations` 页面专门展示动画能力。

**优势:**
- 不干扰现有流程
- 可展示多个动画
- 便于迭代

**新建文件:** `/src/app/technology/animations/page.tsx`

```typescript
import AnimatedCard from '@/components/website/AnimatedCard';
import Header from '@/components/website/Header';
import Footer from '@/components/website/Footer';
import Section from '@/components/website/Section';

export default function AnimationsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Section className="bg-surface">
          <h1 className="text-4xl font-bold">动画技术展示</h1>
          <p className="mt-4 text-muted">
            基于视频逆向工程的精确时序复刻
          </p>
          <AnimatedCard className="mt-12" />
        </Section>
      </main>
      <Footer />
    </div>
  );
}
```

**导航链接添加:** `/src/components/website/Header.tsx`

```typescript
{
  label: '技术',
  href: '/technology',
  subMenu: [
    { label: '技术架构', href: '/technology' },
    { label: '动画展示', href: '/technology/animations' } // 新增
  ]
}
```

## 最小侵入式集成 (推荐)

在现有 Demo 页面添加轻量级展示区:

### 步骤 1: 修改 demo/page.tsx

```typescript
// 顶部导入
import AnimatedCard from '@/components/website/AnimatedCard';

// 在 Demo Context 下方插入
<Section id="demo-context" className="bg-surface">
  {/* 现有演示场景 */}
</Section>

{/* 新增区域 */}
<Section id="tech-preview" className="bg-white">
  <div className="border border-border bg-surface p-6 rounded-lg">
    <div className="flex items-start justify-between gap-8">
      <div className="flex-1">
        <span className="font-mono text-xs text-sensor-tan">技术预览</span>
        <h3 className="mt-3 text-xl font-semibold">精确时序动画</h3>
        <p className="mt-3 text-sm text-muted leading-7">
          通过视频逆向工程提取动画参数,使用 GSAP Timeline 实现毫秒级时序控制。
          展开动画 5.0s (3阶段分层淡出) / 收起动画 1.4s (快速响应)。
        </p>
        <a
          href="/animation-demo"
          className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-atlas-blue"
        >
          查看独立演示页 →
        </a>
      </div>
      <div className="w-80 shrink-0">
        <AnimatedCard
          lines={['🎵 播放中', 'Atlas Demo', 'Sensordeck']}
          autoPlay={false}
        />
      </div>
    </div>
  </div>
</Section>
```

### 步骤 2: 调整按钮位置 (避免遮挡 Header)

```typescript
// AnimatedCard.tsx
{!autoPlay && (
  <div className="absolute top-4 right-4 flex gap-2">  {/* 从 fixed 改为 absolute */}
    <button ... />
  </div>
)}
```

## 样式适配

### 与现有设计系统对齐

确保颜色和间距一致:

```typescript
// AnimatedCard.tsx 样式调整
className="
  rounded-xl 
  bg-black/80           // 保持
  backdrop-blur-sm      // 保持
  p-5                   // 改为 p-6 对齐其他卡片
  shadow-2xl            // 改为 shadow-lg 更柔和
  border                // 新增
  border-border         // 新增,使用项目 token
"
```

### 响应式调整

```typescript
<div className="
  fixed bottom-0 left-1/2 -translate-x-1/2
  w-full max-w-md       // 桌面端
  px-6                  // 移动端
  sm:max-w-lg          // 平板
  lg:max-w-xl          // 大屏
">
```

## 性能考虑

### 代码分割

仅在需要时加载 GSAP:

```typescript
// demo/page.tsx
import dynamic from 'next/dynamic';

const AnimatedCard = dynamic(
  () => import('@/components/website/AnimatedCard'),
  {
    ssr: false,
    loading: () => (
      <div className="h-32 bg-gray-100 animate-pulse rounded-lg" />
    )
  }
);
```

### Bundle 大小分析

```bash
npm run build
# 查看 GSAP 体积影响

# GSAP core: ~50KB gzipped
# @gsap/react: ~2KB gzipped
# 总增量: ~52KB
```

## 可访问性 (A11y)

### 键盘控制

```typescript
<button
  onClick={expandCard}
  onKeyDown={(e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      expandCard();
    }
  }}
  aria-label="展开卡片动画"
  aria-pressed={!isExpanded}
>
```

### 减少动画偏好

```typescript
useGSAP(() => {
  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;

  if (prefersReducedMotion) {
    // 禁用动画,直接切换状态
    gsap.set(elements, { opacity: isExpanded ? 1 : 0 });
  }
}, { dependencies: [isExpanded] });
```

### ARIA 实时区域

```typescript
<div
  role="region"
  aria-live="polite"
  aria-label="动画演示区域"
>
  <AnimatedCard />
</div>
```

## 分阶段部署

### 阶段 1: 仅文档 (已完成)

- ✅ `/docs/` 目录
- ✅ 4 个 Markdown 文档
- ✅ 独立演示页 `/animation-demo`

### 阶段 2: 软集成 (可选)

- 在 Demo 页面添加"技术预览"卡片
- 链接到独立演示页
- 不影响现有流程

### 阶段 3: 深度集成 (未来)

- 多个页面使用
- 自定义内容变体
- 与实际数据联动

## 回滚方案

如需移除:

```bash
# 1. 删除组件
rm src/components/website/AnimatedCard.tsx

# 2. 删除演示页
rm -rf src/app/animation-demo

# 3. 卸载依赖
npm uninstall gsap @gsap/react

# 4. 删除文档
rm -rf docs/

# 5. 恢复页面 (如有修改)
git checkout src/app/demo/page.tsx
```

## 后续扩展

### 1. 多个动画变体

```typescript
<AnimatedCard variant="music" />
<AnimatedCard variant="notification" />
<AnimatedCard variant="alert" />
```

### 2. 自定义触发条件

```typescript
<AnimatedCard
  trigger="scroll"  // 滚动触发
  threshold={0.5}   // 50% 可见时
/>
```

### 3. 与数据联动

```typescript
<AnimatedCard
  lines={evidencePack.summary}
  onExpand={() => trackEvent('ep_expand')}
/>
```

## 文档维护

所有文档位于 `/docs/`:

1. `README.md` - 索引
2. `01-video-analysis.md` - 测量方法
3. `02-animation-parameters.md` - 参数详解
4. `03-implementation-guide.md` - 实现指南
5. `04-integration-guide.md` - 本文档

**更新频率:** 按需更新,版本号同步组件
