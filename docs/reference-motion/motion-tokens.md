# Zendesk 动效设计令牌

> 将 Zendesk 的动效参数提炼为可复用的设计令牌（Design Tokens）

## 1. 时长令牌 (Duration Tokens)

```css
/* Zendesk 时长系统 */
:root {
  /* 即时反馈 - 用于必须瞬时响应的交互 */
  --duration-instant: 0.1s;        /* 100ms */
  
  /* 快速 - 用于标准交互 */
  --duration-fast: 0.25s;          /* 250ms */
  
  /* 标准 - 用于重要动画 */
  --duration-normal: 0.4s;         /* 400ms */
  
  /* 长 - 用于模态和大型转换 */
  --duration-slow: 400ms;          /* 400ms (与 normal 相同，但语义不同) */
}
```

### 使用指南

| 令牌 | 时长 | 使用场景 |
|-----|------|----------|
| `--duration-instant` | 100ms | box-shadow, outline, 视觉反馈 |
| `--duration-fast` | 250ms | 按钮悬停, 颜色变化, 边框 |
| `--duration-normal` | 400ms | 菜单展开, 内容滑入, 重要动画 |
| `--duration-slow` | 400ms | 模态弹窗, 覆盖层淡入 |

## 2. 缓动令牌 (Easing Tokens)

```css
:root {
  /* 线性 - 用于快速且恒定的动画 */
  --ease-linear: linear;
  
  /* 标准对称 - 用于大多数过渡 */
  --ease-standard: ease-in-out;
  
  /* 自定义缓动 - Zendesk 品牌曲线 */
  --ease-zendesk: cubic-bezier(0.7, 0, 0.3, 1);
  
  /* 可选：分解为语义化名称 */
  --ease-smooth: ease-in-out;
  --ease-snappy: cubic-bezier(0.7, 0, 0.3, 1);
}
```

### 缓动曲线特性

#### `cubic-bezier(0.7, 0, 0.3, 1)` 分析
- **P1 (0.7, 0)**: 快速启动
- **P2 (0.3, 1)**: 平滑减速
- **效果**: 类似 ease-out 但更夸张，提供"弹性"感觉
- **用途**: 滑入动画、展开动画、引人注目的转换

```
曲线对比:
ease-out:           快▶▶▶慢
cubic-bezier(0.7...): 很快▶▶▶▶▶▶很慢
```

#### 使用决策树

```
动画时长 < 150ms?
  ├─ YES → linear
  └─ NO  → 是否需要引起注意?
            ├─ YES → cubic-bezier(0.7, 0, 0.3, 1)
            └─ NO  → ease-in-out
```

## 3. 复合过渡令牌

### 3.1 按钮过渡

```css
/* 按钮默认状态过渡 */
:root {
  --transition-button-default: 
    border-color var(--duration-fast) var(--ease-standard),
    box-shadow var(--duration-instant) var(--ease-standard),
    background-color var(--duration-fast) var(--ease-standard),
    color var(--duration-fast) var(--ease-standard),
    outline-color var(--duration-instant) var(--ease-standard),
    z-index var(--duration-fast) var(--ease-standard);
}

/* 按钮激活状态过渡（更快） */
:root {
  --transition-button-active: 
    border-color var(--duration-instant) var(--ease-standard),
    background-color var(--duration-instant) var(--ease-standard),
    box-shadow var(--duration-instant) var(--ease-standard),
    color var(--duration-instant) var(--ease-standard),
    outline-color var(--duration-instant) var(--ease-standard),
    z-index var(--duration-fast) var(--ease-standard);
}
```

### 3.2 常用单属性过渡

```css
:root {
  /* 阴影过渡 - 快速反馈 */
  --transition-shadow: box-shadow var(--duration-instant) var(--ease-standard);
  
  /* 颜色过渡 - 快速平滑 */
  --transition-color: color var(--duration-instant) var(--ease-standard);
  
  /* 背景色过渡 - 标准速度 */
  --transition-background: background-color var(--duration-fast) var(--ease-standard);
  
  /* 边框过渡 - 标准速度 */
  --transition-border: border-color var(--duration-fast) var(--ease-standard);
  
  /* 布局过渡 - 手风琴等 */
  --transition-layout: 
    padding var(--duration-fast) var(--ease-standard),
    grid-template-rows var(--duration-fast) var(--ease-standard);
}
```

## 4. 动画令牌

### 4.1 淡入淡出

```css
@keyframes fade-in {
  0% {
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

@keyframes fade-out {
  0% {
    position: absolute;
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

:root {
  --animation-fade-in: fade-in var(--duration-normal) var(--ease-zendesk);
  --animation-fade-out: fade-out var(--duration-normal) var(--ease-zendesk);
}
```

### 4.2 滑入滑出

```css
@keyframes slide-up-in {
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes slide-down-out {
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(100%);
    opacity: 0;
  }
}

:root {
  --animation-slide-up: slide-up-in var(--duration-normal) var(--ease-zendesk);
  --animation-slide-down: slide-down-out var(--duration-normal) var(--ease-zendesk);
}
```

### 4.3 手风琴展开

```css
@keyframes accordion-expand {
  0% {
    border-radius: var(--accordion-radius, 12px);
    max-width: var(--content-max-width, 1440px);
  }
  80% {
    border-radius: var(--accordion-radius, 12px);
  }
  100% {
    border-radius: 0;
    max-width: 100%;
  }
}

:root {
  --animation-accordion-expand: accordion-expand var(--duration-normal) var(--ease-zendesk);
}
```

## 5. 延迟令牌 (Delay Tokens)

```css
:root {
  /* 错开动画的标准延迟 */
  --delay-stagger-1: 0s;
  --delay-stagger-2: 0.05s;   /* 50ms */
  --delay-stagger-3: 0.1s;    /* 100ms */
  --delay-stagger-4: 0.15s;   /* 150ms */
  --delay-stagger-5: 0.2s;    /* 200ms */
  
  /* 序列动画延迟 */
  --delay-sequential-1: 0.1s;
  --delay-sequential-2: 0.2s;
  --delay-sequential-3: 0.3s;
  --delay-sequential-4: 0.4s;
}
```

## 6. 使用示例

### 6.1 按钮组件

```css
.button {
  /* 使用复合过渡令牌 */
  transition: var(--transition-button-default);
}

.button:active,
.button[aria-pressed="true"] {
  /* 激活状态使用更快的过渡 */
  transition: var(--transition-button-active);
}

.button:hover {
  /* 悬停时只需改变样式，过渡自动生效 */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}
```

### 6.2 模态弹窗

```css
.modal-overlay {
  animation: var(--animation-fade-in);
}

.modal-overlay[data-state="closing"] {
  animation: var(--animation-fade-out);
}
```

### 6.3 下拉菜单

```css
.dropdown-menu {
  animation: var(--animation-slide-up);
}

.dropdown-menu[data-state="closing"] {
  animation: var(--animation-slide-down);
}
```

### 6.4 错开列表项

```css
.list-item:nth-child(1) { animation-delay: var(--delay-stagger-1); }
.list-item:nth-child(2) { animation-delay: var(--delay-stagger-2); }
.list-item:nth-child(3) { animation-delay: var(--delay-stagger-3); }
.list-item:nth-child(4) { animation-delay: var(--delay-stagger-4); }
.list-item:nth-child(5) { animation-delay: var(--delay-stagger-5); }
```

## 7. 响应式动效令牌

```css
@media (prefers-reduced-motion: reduce) {
  :root {
    /* 尊重用户的减少动效偏好 */
    --duration-instant: 0.01s;
    --duration-fast: 0.01s;
    --duration-normal: 0.01s;
    --duration-slow: 0.01s;
    
    /* 或完全禁用动画 */
    --animation-fade-in: none;
    --animation-fade-out: none;
    --animation-slide-up: none;
    --animation-slide-down: none;
  }
}

@media (max-width: 768px) {
  :root {
    /* 移动端可选择性减少动画时长 */
    --duration-normal: 0.3s;  /* 从 0.4s 减少到 0.3s */
  }
}
```

## 8. SensorDeck 适配建议

### 8.1 保留的令牌

```css
:root {
  /* 直接采用 Zendesk 的时长系统 */
  --duration-instant: 0.1s;
  --duration-fast: 0.25s;
  --duration-normal: 0.4s;
  
  /* 采用分层过渡策略 */
  --transition-button-default: /* ... */;
  --transition-button-active: /* ... */;
}
```

### 8.2 需要调整的令牌

```css
:root {
  /* 为 SensorDeck 的科技感调整缓动 */
  --ease-sensordeck: cubic-bezier(0.4, 0, 0.2, 1);  /* Material Design */
  /* 或 */
  --ease-sensordeck: cubic-bezier(0.25, 0.46, 0.45, 0.94);  /* easeOutQuad */
  
  /* Zendesk 的缓动可以作为替代选项 */
  --ease-zendesk: cubic-bezier(0.7, 0, 0.3, 1);
}
```

### 8.3 新增的令牌

```css
:root {
  /* 为技术可视化添加特殊时长 */
  --duration-data-visualization: 0.8s;  /* 数据图表动画 */
  --duration-chart-enter: 1.2s;          /* 图表入场 */
  
  /* 为滚动视差添加缓动 */
  --ease-parallax: cubic-bezier(0.22, 1, 0.36, 1);
}
```

## 9. 令牌命名约定

### 9.1 命名模式

```
--<category>-<property>-<variant>-<state>

category: duration | ease | transition | animation | delay
property: button | modal | dropdown | shadow | color | etc.
variant: default | active | hover | focus | etc.
state: fast | slow | instant | normal | etc.
```

### 9.2 示例

```css
--duration-fast              /* 时长类别 - fast 变体 */
--ease-zendesk              /* 缓动类别 - zendesk 变体 */
--transition-button-default /* 过渡类别 - 按钮属性 - 默认变体 */
--animation-slide-up        /* 动画类别 - 滑动属性 - 向上变体 */
--delay-stagger-2           /* 延迟类别 - 错开属性 - 第2项 */
```

## 10. 总结

Zendesk 的动效令牌系统特点：

✅ **简洁**: 仅 3-4 个时长级别  
✅ **一致**: 全站使用相同的令牌  
✅ **分层**: 不同属性使用不同时长  
✅ **品牌化**: 自定义缓动曲线提供独特感觉  
✅ **性能优先**: 动画化 GPU 加速属性 (transform, opacity)

这套令牌系统可以直接应用到 SensorDeck，只需根据品牌调性微调缓动曲线。
