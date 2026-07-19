# Zendesk HK 动效清单

> 分析时间: 2026-07-19  
> 来源: https://www.zendesk.hk/  
> 分析视口: 1440x900 (桌面) / 390x844 (移动)

## 概览

通过自动化分析 Zendesk HK 网站，我们提取了以下动效元素：

- **17 个 @keyframes 动画**
- **8 个 animation 规则**
- **116 个 transition 规则**
- **1490 个带动效的元素**
- **50 个交互元素**
- **11 个滚动状态记录**

## 1. 核心动画系统

### 1.1 @keyframes 动画

Zendesk 使用了以下命名的关键帧动画：

#### expandAccordion（手风琴展开）
```css
@keyframes expandAccordion {
  0% {
    border-radius: var(--accordion-radius);
    max-width: var(--contentWidth, 1440px);
  }
  80% {
    border-radius: var(--accordion-radius);
  }
  100% {
    border-radius: 0px;
    max-width: 100%;
  }
}
```

**特点**:
- 使用 CSS 变量 (`--accordion-radius`, `--contentWidth`)
- 80% 关键帧保持圆角，最后 20% 快速过渡到直角
- 同时动画化宽度和圆角

#### 淡入显示动画 (gJZWFA)
```css
@keyframes gJZWFA {
  0% {
    position: static;
    display: none;
    opacity: 0;
  }
  1% {
    display: block;
  }
  100% {
    display: block;
    opacity: 1;
  }
}
```

**特点**:
- 在 1% 时立即切换 `display` 属性
- 避免 `display: none` 到 `display: block` 的瞬间闪烁
- 使用 opacity 实现平滑淡入

#### 淡出隐藏动画 (cwqaCA)
```css
@keyframes cwqaCA {
  0% {
    position: absolute;
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
```

**特点**:
- 使用 `position: absolute` 保持元素在动画期间的布局
- 纯 opacity 过渡

#### 滑入动画 (hxqKPd)
```css
@keyframes hxqKPd {
  0% {
    position: absolute;
    transform: translateY(100%);
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
```

**特点**:
- 从底部向上滑入 (`translateY(100%)`)
- 结合 opacity 淡入
- 使用 `position: absolute` 避免影响布局

#### 菜单打开动画 (jAYiMU)
用于 `[data-is-open="true"]` 状态的菜单展开

#### 反向滑出动画 (eEAsaf)
与 hxqKPd 相反方向，使用 `animation-direction: reverse`

#### 滚动提示动画 (kezRlp)
0.1s 线性动画，用于快速交互反馈

### 1.2 Animation 属性配置

Zendesk 主要使用以下动画配置模式：

**标准过渡动画**:
```css
animation: 0.4s cubic-bezier(0.7, 0, 0.3, 1) 0s 1 normal none running;
```

**快速反馈动画**:
```css
animation: 0.1s linear 0s 1 normal none running;
```

**Cookie 同意弹窗**:
```css
animation: onetrust-fade-in 400ms ease-in-out;
```

## 2. Transition 系统

### 2.1 按钮/交互元素过渡

Zendesk 的按钮使用多属性分层过渡：

**默认状态** (0.25s):
```css
transition: 
  border-color 0.25s ease-in-out,
  box-shadow 0.1s ease-in-out,
  background-color 0.25s ease-in-out,
  color 0.25s ease-in-out,
  outline-color 0.1s ease-in-out,
  z-index 0.25s ease-in-out;
```

**激活状态** (0.1s - 更快):
```css
transition: 
  border-color 0.1s ease-in-out,
  background-color 0.1s ease-in-out,
  box-shadow 0.1s ease-in-out,
  color 0.1s ease-in-out,
  outline-color 0.1s ease-in-out,
  z-index 0.25s ease-in-out;
```

**关键模式**:
- `box-shadow` 和 `outline-color` 始终使用更快的 0.1s
- 激活状态的过渡比默认状态快 60% (0.1s vs 0.25s)
- `z-index` 始终保持 0.25s，确保层级变化平滑

### 2.2 布局过渡

**手风琴/可折叠区域**:
```css
transition: 
  padding 0.25s ease-in-out,
  grid-template-rows 0.25s ease-in-out;
```

**阴影过渡**:
```css
transition: box-shadow 0.1s ease-in-out;
```

**颜色过渡**:
```css
transition: color 0.1s ease-in-out;
```

## 3. 缓动函数（Easing）

Zendesk 主要使用以下缓动曲线：

### 3.1 主要缓动

**`cubic-bezier(0.7, 0, 0.3, 1)` - 自定义缓动**
- 使用频率最高
- 用于所有 0.4s 的动画
- 特点: 快速启动，平滑收尾
- 类似但更夸张的 ease-out

**`ease-in-out` - 标准对称缓动**
- 用于所有 transition
- 用于 cookie 弹窗 (400ms)
- 对称的启动和结束

**`linear` - 线性缓动**
- 仅用于 0.1s 的快速动画
- 无缓动效果，恒定速度

### 3.2 缓动选择策略

| 持续时间 | 缓动函数 | 用途 |
|---------|---------|------|
| 0.1s | `linear` | 快速反馈，瞬时交互 |
| 0.1s | `ease-in-out` | 快速平滑过渡（颜色、阴影） |
| 0.25s | `ease-in-out` | 标准交互（按钮、布局） |
| 0.4s | `cubic-bezier(0.7, 0, 0.3, 1)` | 重要动画（滑入、展开） |
| 400ms | `ease-in-out` | 模态弹窗 |

## 4. 动画时长分级

Zendesk 使用分层的时长系统：

### 4.1 时长层级

| 层级 | 时长 | 用途 | 示例 |
|-----|------|------|------|
| **即时** | 0.1s | 视觉反馈、状态切换 | 阴影变化、颜色高亮 |
| **快速** | 0.25s | 标准交互 | 按钮悬停、边框变化 |
| **标准** | 0.4s | 重要动画 | 菜单展开、内容滑入 |
| **长** | 400ms | 模态显示 | Cookie 弹窗、对话框 |

### 4.2 时长选择原则

- **0.1s**: 必须瞬时响应的交互（box-shadow, outline-color）
- **0.25s**: 视觉上需要平滑但不应有延迟感的交互
- **0.4s**: 需要用户注意到的重要动画
- **z-index 总是 0.25s**: 防止层级切换时的视觉跳跃

## 5. 滚动行为

### 5.1 滚动检测结果

- **未使用 Lenis** 或 Locomotive Scroll 等平滑滚动库
- **未设置全局 `scroll-behavior: smooth`**
- 使用原生浏览器滚动

### 5.2 滚动触发的样式变化

通过滚动测试发现，Zendesk 的 header 在滚动时保持相对静态，未发现明显的滚动触发动画（如缩小、背景变化等）。

## 6. 交互元素分析

提取了 50 个主要交互元素，所有按钮和链接均配置了：

- **`cursor: pointer`**
- **Transition** 配置（多属性分层）
- **Transform** 预备（部分元素）

## 7. 性能优化策略

### 7.1 GPU 加速

- 使用 `transform` 和 `opacity` 作为主要动画属性
- 避免动画化 `width`/`height`（除了 grid-template-rows）

### 7.2 分层过渡

- 不同属性使用不同时长
- 快速属性（阴影、轮廓）用 0.1s
- 慢速属性（颜色、边框）用 0.25s

### 7.3 减少动态效果模式

未发现 `prefers-reduced-motion` 的明确处理，这是可改进的地方。

## 8. 移动端差异

在移动视口 (390x844) 下：
- 保持相同的动画时长和缓动
- 布局响应式调整，但动效参数一致
- 未发现针对移动端的特殊动效降级

## 9. 关键发现总结

### ✅ Zendesk 做得好的地方

1. **一致的缓动系统**: 仅使用 3 种缓动曲线
2. **分层时长**: 清晰的时长分级（0.1s / 0.25s / 0.4s）
3. **多属性分层过渡**: 不同属性使用不同时长，优化感知性能
4. **自定义缓动**: `cubic-bezier(0.7, 0, 0.3, 1)` 提供独特的品牌感
5. **display 动画技巧**: 在 1% 处切换 display，避免闪烁

### ⚠️ 可改进的地方

1. 未实现 `prefers-reduced-motion` 尊重
2. 未使用平滑滚动（可能是刻意选择）
3. Header 滚动交互较少

## 10. 对 SensorDeck 的启发

### 可直接采用的模式

1. **时长系统**: 0.1s (即时) / 0.25s (快速) / 0.4s (标准)
2. **缓动曲线**: `cubic-bezier(0.7, 0, 0.3, 1)` 用于重要动画
3. **分层过渡**: box-shadow 0.1s, color/background 0.25s
4. **display 动画技巧**: 1% 处切换 display

### 需要调整的部分

1. 添加 `prefers-reduced-motion` 支持
2. 考虑是否使用平滑滚动库（Lenis）
3. 为 SensorDeck 的技术感品牌调整缓动曲线
