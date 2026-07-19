# Zendesk 区块动画时间线

> 记录 Zendesk 各个区块的动画编排和时间线设计

## 1. 首屏加载时间线 (Hero Section)

### 时间线概览

```
0ms    ┌─ 页面加载完成
       │
0-400ms│  Hero 内容淡入
       │  ├─ 0ms: 标题开始淡入
       │  ├─ 100ms: 副标题开始淡入  
       │  └─ 200ms: CTA 按钮开始淡入
       │
400ms  └─ 首屏动画完成
```

### 实现方式

Zendesk 的首屏动画使用 CSS animation，未发现明显的错开延迟（stagger），各元素可能同时淡入。

**推测实现**:
```css
.hero-title {
  animation: fade-in 0.4s cubic-bezier(0.7, 0, 0.3, 1);
}

.hero-subtitle {
  animation: fade-in 0.4s cubic-bezier(0.7, 0, 0.3, 1);
  animation-delay: 0.1s;
}

.hero-cta {
  animation: fade-in 0.4s cubic-bezier(0.7, 0, 0.3, 1);
  animation-delay: 0.2s;
}
```

## 2. 导航栏滚动时间线

### 初始状态 (scroll = 0)

```css
header {
  position: fixed;
  top: 0;
  background-color: transparent; /* 或浅色 */
  box-shadow: none;
  padding: 24px 0;
  height: 80px;
}
```

### 滚动后状态 (scroll > 50px)

根据提取的数据，Zendesk 的导航栏在滚动时**保持相对静态**，未发现明显的缩小或背景变化动画。

**如果要实现滚动变化**，推荐时间线：

```
Scroll > 50px
    │
    ├─ 0ms: 触发状态变化
    │   ├─ height: 80px → 60px (0.25s ease-in-out)
    │   ├─ padding: 24px → 16px (0.25s ease-in-out)
    │   ├─ background: transparent → rgba(255,255,255,0.98) (0.25s ease-in-out)
    │   └─ box-shadow: none → 0 2px 8px rgba(0,0,0,0.08) (0.1s ease-in-out)
    │
    250ms: 过渡完成
```

**实现**:
```css
header {
  transition: 
    height 0.25s ease-in-out,
    padding 0.25s ease-in-out,
    background-color 0.25s ease-in-out,
    box-shadow 0.1s ease-in-out;
}

header.scrolled {
  height: 60px;
  padding: 16px 0;
  background-color: rgba(255, 255, 255, 0.98);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}
```

## 3. 下拉菜单时间线

### 打开动画

```
Click/Hover
    │
    ├─ 0ms: data-is-open="true"
    │   ├─ Overlay 淡入 (0.4s cubic-bezier(0.7, 0, 0.3, 1))
    │   └─ Menu 滑入 (0.4s cubic-bezier(0.7, 0, 0.3, 1))
    │
    400ms: 动画完成，菜单完全可见
```

**关键帧**:
```css
@keyframes menu-open {
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
```

### 关闭动画

```
Click Outside / ESC
    │
    ├─ 0ms: data-is-open="false"
    │   ├─ Overlay 淡出 (0.4s cubic-bezier(0.7, 0, 0.3, 1) reverse)
    │   └─ Menu 滑出 (0.4s cubic-bezier(0.7, 0, 0.3, 1) reverse)
    │
    400ms: 动画完成，元素移除或 display: none
```

**使用 `animation-direction: reverse` 实现关闭**。

## 4. 手风琴展开时间线

### 展开动画

```
Click Accordion Header
    │
    ├─ 0ms: 触发展开
    │   ├─ Content opacity: 0 → 1 (0.4s)
    │   ├─ Content padding: 0 → var(--padding) (0.25s)
    │   ├─ Grid rows: 0fr → 1fr (0.25s)
    │   └─ Border radius: var(--radius) → 0 (0.4s)
    │       └─ 注意: 80% 前保持圆角，最后 20% 快速变直角
    │
    400ms: 展开完成
```

**关键设计**:

- **Grid animation**: 使用 `grid-template-rows: 0fr → 1fr` 实现高度动画
- **Border radius timing**: 80% 时才开始改变圆角，让用户先看到内容展开
- **Padding + Grid**: 同时动画化，避免内容挤压感

```css
.accordion-content {
  display: grid;
  grid-template-rows: 0fr;
  transition: 
    grid-template-rows 0.25s ease-in-out,
    padding 0.25s ease-in-out;
}

.accordion-content[data-open="true"] {
  grid-template-rows: 1fr;
  padding: var(--accordion-padding);
}

.accordion-wrapper[data-open="true"] {
  animation: accordion-expand 0.4s cubic-bezier(0.7, 0, 0.3, 1);
}
```

### 折叠动画

直接反向执行展开动画。

## 5. 模态弹窗时间线

### 打开时间线

```
Open Modal
    │
    ├─ 0ms: 开始动画
    │   ├─ Backdrop 淡入
    │   │   └─ opacity: 0 → 0.5 (400ms ease-in-out)
    │   │
    │   └─ Modal 内容淡入 + 缩放
    │       ├─ opacity: 0 → 1 (400ms ease-in-out)
    │       └─ scale: 0.95 → 1 (400ms ease-in-out)
    │
    400ms: 动画完成
```

**实现**:
```css
.modal-backdrop {
  animation: onetrust-fade-in 400ms ease-in-out;
}

@keyframes onetrust-fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* 可选：添加缩放效果 */
.modal-content {
  animation: modal-content-enter 400ms ease-in-out;
}

@keyframes modal-content-enter {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
```

### 关闭时间线

反向执行打开动画，时长保持 400ms。

## 6. 卡片悬停时间线

### 标准卡片悬停

```
Hover Start
    │
    ├─ 0ms: 触发悬停
    │   ├─ box-shadow: none → 0 8px 24px rgba(0,0,0,0.12) (0.1s ease-in-out)
    │   ├─ transform: translateY(0) → translateY(-4px) (0.25s ease-in-out)
    │   └─ border-color: gray-200 → blue-500 (0.25s ease-in-out)
    │
    250ms: 悬停动画完成
```

**关键**:
- `box-shadow` 使用更快的 0.1s，提供即时反馈
- `transform` 使用 0.25s，平滑提升
- 组合 shadow + transform 创造"浮起"效果

```css
.card {
  transition: 
    box-shadow 0.1s ease-in-out,
    transform 0.25s ease-in-out,
    border-color 0.25s ease-in-out;
}

.card:hover {
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  transform: translateY(-4px);
  border-color: var(--color-primary);
}
```

### Hover Out

```
Hover End
    │
    ├─ 0ms: 鼠标移开
    │   └─ 所有属性恢复原值（使用相同的过渡时长）
    │
    250ms: 恢复完成
```

## 7. 按钮交互时间线

### 悬停 (Hover)

```
Hover
  │
  ├─ 0ms: 触发
  │   ├─ background-color (0.25s ease-in-out)
  │   ├─ border-color (0.25s ease-in-out)
  │   ├─ color (0.25s ease-in-out)
  │   ├─ box-shadow (0.1s ease-in-out) ← 更快
  │   └─ outline-color (0.1s ease-in-out) ← 更快
  │
  250ms: 悬停动画完成
```

### 按下 (Active)

```
Click/Touch
  │
  ├─ 0ms: 触发激活状态
  │   └─ 所有属性使用 0.1s (更快的反馈)
  │       ├─ background-color (0.1s ease-in-out)
  │       ├─ border-color (0.1s ease-in-out)
  │       ├─ box-shadow (0.1s ease-in-out)
  │       └─ transform: scale(0.98) (0.1s ease-in-out)
  │
  100ms: 按下动画完成
```

### 释放 (Release)

```
Release
  │
  ├─ 0ms: 释放
  │   └─ 恢复到悬停状态（如果鼠标还在按钮上）
  │       或恢复到默认状态（如果鼠标已离开）
  │
  100-250ms: 恢复完成
```

**完整实现**:
```css
.button {
  transition: 
    border-color 0.25s ease-in-out,
    box-shadow 0.1s ease-in-out,
    background-color 0.25s ease-in-out,
    color 0.25s ease-in-out,
    outline-color 0.1s ease-in-out,
    transform 0.1s ease-in-out;
}

.button:hover {
  background-color: var(--color-primary-dark);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.button:active {
  transition-duration: 0.1s; /* 所有属性加速 */
  transform: scale(0.98);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
```

## 8. 列表项错开入场时间线

虽然 Zendesk 未明显使用错开动画，但这是常见的设计模式：

```
Page Load / Scroll Into View
    │
    ├─ 0ms: Item 1 开始淡入
    │   └─ animation: fade-up 0.4s cubic-bezier(0.7, 0, 0.3, 1)
    │
    ├─ 50ms: Item 2 开始淡入 (delay: 50ms)
    │
    ├─ 100ms: Item 3 开始淡入 (delay: 100ms)
    │
    ├─ 150ms: Item 4 开始淡入 (delay: 150ms)
    │
    └─ 550ms: 最后一项动画完成 (150ms delay + 400ms animation)
```

**实现**:
```css
@keyframes fade-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.list-item {
  animation: fade-up 0.4s cubic-bezier(0.7, 0, 0.3, 1) both;
}

.list-item:nth-child(1) { animation-delay: 0ms; }
.list-item:nth-child(2) { animation-delay: 50ms; }
.list-item:nth-child(3) { animation-delay: 100ms; }
.list-item:nth-child(4) { animation-delay: 150ms; }
.list-item:nth-child(5) { animation-delay: 200ms; }
```

**错开规则**:
- **延迟间隔**: 50ms（快速） 或 100ms（标准）
- **最大总时长**: 不超过 1s（避免用户等待）
- **最大项数**: 限制错开动画的项数在 5-8 个以内

## 9. Intersection Observer 触发时间线

对于滚动触发的动画：

```
Element Enters Viewport
    │
    ├─ 0ms: IntersectionObserver 回调触发
    │   └─ 添加 .visible 类或 data-visible="true"
    │
    ├─ 0-400ms: CSS 动画执行
    │   └─ 根据区块类型使用不同的动画
    │       ├─ 标题: fade-up
    │       ├─ 卡片: fade-in + scale
    │       └─ 图片: fade-in
    │
    400ms: 动画完成
```

**JavaScript 触发**:
```javascript
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px' // 提前 50px 触发
});

document.querySelectorAll('.animate-on-scroll').forEach(el => {
  observer.observe(el);
});
```

**CSS**:
```css
.animate-on-scroll {
  opacity: 0;
  transform: translateY(20px);
  transition: 
    opacity 0.4s cubic-bezier(0.7, 0, 0.3, 1),
    transform 0.4s cubic-bezier(0.7, 0, 0.3, 1);
}

.animate-on-scroll.visible {
  opacity: 1;
  transform: translateY(0);
}
```

## 10. 综合示例：产品特性区块

完整的区块动画编排：

```
Section Enters Viewport
    │
    ├─ 0ms: 标题淡入
    │   └─ .section-title.visible
    │
    ├─ 100ms: 副标题淡入 (delay: 100ms)
    │   └─ .section-subtitle.visible
    │
    ├─ 200ms: 特性卡片开始错开淡入
    │   ├─ Card 1: delay 200ms
    │   ├─ Card 2: delay 250ms
    │   ├─ Card 3: delay 300ms
    │   └─ Card 4: delay 350ms
    │
    750ms: 所有动画完成 (350ms + 400ms)
```

**实现**:
```css
.section-title,
.section-subtitle,
.feature-card {
  opacity: 0;
  transform: translateY(20px);
  transition: 
    opacity 0.4s cubic-bezier(0.7, 0, 0.3, 1),
    transform 0.4s cubic-bezier(0.7, 0, 0.3, 1);
}

.section-title.visible {
  opacity: 1;
  transform: translateY(0);
}

.section-subtitle.visible {
  opacity: 1;
  transform: translateY(0);
  transition-delay: 0.1s;
}

.feature-card.visible:nth-child(1) { transition-delay: 0.2s; }
.feature-card.visible:nth-child(2) { transition-delay: 0.25s; }
.feature-card.visible:nth-child(3) { transition-delay: 0.3s; }
.feature-card.visible:nth-child(4) { transition-delay: 0.35s; }
```

## 11. 性能优化：时间线设计原则

### ✅ 好的实践

1. **总时长控制**: 单个区块的完整时间线不超过 1s
2. **关键路径优先**: 主要内容先动画，装饰性元素后动画
3. **GPU 加速**: 使用 `transform` 和 `opacity`，避免 `width`/`height`
4. **will-change**: 对复杂动画使用 `will-change: transform, opacity`

### ⚠️ 避免的问题

1. **过长的错开**: 不要让用户等待超过 1s 才看到所有内容
2. **过多的同时动画**: 不要让超过 20 个元素同时运动
3. **布局抖动**: 避免动画化触发 reflow 的属性
4. **无限循环**: 慎用 `infinite` 动画，可能分散注意力

## 12. SensorDeck 应用建议

### 直接采用

- 0.4s 的标准动画时长
- cubic-bezier(0.7, 0, 0.3, 1) 缓动
- 50-100ms 的错开延迟
- IntersectionObserver 触发机制

### 调整方向

- 考虑为技术可视化添加更长的时间线（数据图表可能需要 0.8-1.2s）
- 为 WebGL 3D 元素设计独立的时间线
- 考虑 parallax 滚动效果的时间线（Zendesk 未使用）
