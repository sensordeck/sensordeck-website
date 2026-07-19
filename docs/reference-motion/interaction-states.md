# Zendesk 交互状态设计

> 记录各类交互元素的状态转换和动效处理

## 1. 按钮状态机

### 1.1 主要按钮 (Primary Button)

```
[Default] ─────hover─────▶ [Hover] ─────mousedown─────▶ [Active]
    ▲                         │                              │
    │                         │                              │
    └─────────────────────────┴──────────mouseup/leave──────┘
```

#### Default 状态
```css
.button-primary {
  background-color: var(--color-primary);
  border: 1px solid var(--color-primary);
  color: white;
  box-shadow: none;
  transform: scale(1);
  
  transition: 
    border-color 0.25s ease-in-out,
    box-shadow 0.1s ease-in-out,
    background-color 0.25s ease-in-out,
    color 0.25s ease-in-out,
    outline-color 0.1s ease-in-out,
    z-index 0.25s ease-in-out;
}
```

#### Hover 状态
```css
.button-primary:hover {
  background-color: var(--color-primary-dark);
  border-color: var(--color-primary-dark);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  /* 不改变 transform，避免按钮"跳动" */
}
```

**过渡时长**:
- `background-color`: 250ms
- `border-color`: 250ms  
- `box-shadow`: 100ms ← 更快，提供即时反馈

#### Active 状态
```css
.button-primary:active {
  transition-duration: 0.1s; /* 全部加速到 100ms */
  
  background-color: var(--color-primary-darker);
  transform: scale(0.98);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
```

**过渡时长**: 所有属性 100ms（快速反馈）

#### Focus 状态
```css
.button-primary:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
  /* outline-color 过渡 100ms */
}
```

### 1.2 次要按钮 (Secondary Button)

与主要按钮相同的状态机，但颜色和阴影强度不同：

```css
.button-secondary {
  background-color: transparent;
  border: 1px solid var(--color-gray-300);
  color: var(--color-text);
}

.button-secondary:hover {
  background-color: var(--color-gray-50);
  border-color: var(--color-gray-400);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.button-secondary:active {
  background-color: var(--color-gray-100);
  transform: scale(0.98);
}
```

### 1.3 文字按钮 (Text Button)

```css
.button-text {
  background-color: transparent;
  border: none;
  color: var(--color-primary);
  
  transition: color 0.1s ease-in-out;
}

.button-text:hover {
  color: var(--color-primary-dark);
  text-decoration: underline;
}

.button-text:active {
  color: var(--color-primary-darker);
}
```

**特点**: 仅 100ms 过渡，无阴影和变形

### 1.4 禁用状态

```css
.button:disabled,
.button[aria-disabled="true"] {
  opacity: 0.4;
  cursor: not-allowed;
  pointer-events: none;
  
  /* 保持过渡，但不响应交互 */
  transition: opacity 0.25s ease-in-out;
}
```

### 1.5 加载状态

```css
.button[data-loading="true"] {
  position: relative;
  color: transparent; /* 隐藏文字 */
  pointer-events: none;
}

.button[data-loading="true"]::after {
  content: "";
  position: absolute;
  width: 16px;
  height: 16px;
  border: 2px solid currentColor;
  border-right-color: transparent;
  border-radius: 50%;
  animation: button-spinner 0.6s linear infinite;
}

@keyframes button-spinner {
  to {
    transform: rotate(360deg);
  }
}
```

## 2. 链接状态

### 2.1 文本链接

```
[Default] ─────hover─────▶ [Hover] ─────mousedown─────▶ [Active]
    ▲                         │                              │
    │                         │                              │
    └─────────────────────────┴────────────mouseup───────────┘
```

```css
.link {
  color: var(--color-primary);
  text-decoration: none;
  position: relative;
  
  transition: color 0.1s ease-in-out;
}

/* 下划线效果 */
.link::after {
  content: "";
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: currentColor;
  
  transition: width 0.25s ease-in-out;
}

.link:hover {
  color: var(--color-primary-dark);
}

.link:hover::after {
  width: 100%;
}

.link:active {
  color: var(--color-primary-darker);
}

.link:visited {
  color: var(--color-primary-visited);
}
```

**下划线动画**: 从左向右展开，250ms

### 2.2 导航链接

```css
.nav-link {
  position: relative;
  padding: 8px 16px;
  
  transition: color 0.1s ease-in-out;
}

/* 激活指示器 */
.nav-link::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: var(--color-primary);
  transform: scaleX(0);
  
  transition: transform 0.25s cubic-bezier(0.7, 0, 0.3, 1);
}

.nav-link:hover::before {
  transform: scaleX(1);
}

.nav-link[aria-current="page"]::before {
  transform: scaleX(1);
}
```

## 3. 卡片交互状态

### 3.1 可点击卡片

```
[Rest] ─────hover─────▶ [Hover] ─────mousedown─────▶ [Active]
  ▲                        │                             │
  │                        │                             │
  └────────────────────────┴──────────mouseup/leave─────┘
```

```css
.card-interactive {
  background-color: white;
  border: 1px solid var(--color-gray-200);
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  
  transition: 
    box-shadow 0.1s ease-in-out,
    transform 0.25s ease-in-out,
    border-color 0.25s ease-in-out;
  
  cursor: pointer;
}

.card-interactive:hover {
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  transform: translateY(-4px);
  border-color: var(--color-primary);
}

.card-interactive:active {
  transition-duration: 0.1s;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.10);
}
```

**"浮起"效果**:
- Hover: 向上移动 4px，阴影增强
- Active: 向上移动减少到 2px，模拟"按下"

### 3.2 选中状态卡片

```css
.card-interactive[aria-selected="true"] {
  border-color: var(--color-primary);
  background-color: var(--color-primary-light);
  box-shadow: 0 0 0 3px var(--color-primary-alpha-20);
}
```

## 4. 输入框状态

### 4.1 文本输入框

```
[Default] ─────focus─────▶ [Focus] ─────blur─────▶ [Default]
    │                         │                         │
    └─────────────error/success─────────────────────────┘
```

```css
.input {
  border: 1px solid var(--color-gray-300);
  background-color: white;
  
  transition: 
    border-color 0.25s ease-in-out,
    box-shadow 0.1s ease-in-out,
    background-color 0.25s ease-in-out;
}

.input:hover {
  border-color: var(--color-gray-400);
}

.input:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px var(--color-primary-alpha-20);
}

.input[aria-invalid="true"] {
  border-color: var(--color-error);
}

.input[aria-invalid="true"]:focus {
  box-shadow: 0 0 0 3px var(--color-error-alpha-20);
}

.input:disabled {
  background-color: var(--color-gray-50);
  cursor: not-allowed;
  opacity: 0.6;
}
```

### 4.2 选择框 (Select)

```css
.select {
  /* 与 input 相同的过渡 */
  transition: 
    border-color 0.25s ease-in-out,
    box-shadow 0.1s ease-in-out;
}

/* 下拉箭头旋转动画 */
.select-trigger[data-state="open"] .select-icon {
  transform: rotate(180deg);
  transition: transform 0.25s ease-in-out;
}
```

### 4.3 复选框/单选框

```css
.checkbox {
  border: 2px solid var(--color-gray-400);
  background-color: white;
  
  transition: 
    border-color 0.1s ease-in-out,
    background-color 0.1s ease-in-out;
}

.checkbox:hover {
  border-color: var(--color-primary);
}

.checkbox[data-state="checked"] {
  background-color: var(--color-primary);
  border-color: var(--color-primary);
}

/* 勾选标记淡入 */
.checkbox-indicator {
  opacity: 0;
  transform: scale(0.5);
  transition: 
    opacity 0.1s ease-in-out,
    transform 0.1s ease-in-out;
}

.checkbox[data-state="checked"] .checkbox-indicator {
  opacity: 1;
  transform: scale(1);
}
```

## 5. 下拉菜单状态

### 5.1 菜单触发器

```css
.dropdown-trigger {
  transition: background-color 0.25s ease-in-out;
}

.dropdown-trigger:hover {
  background-color: var(--color-gray-50);
}

.dropdown-trigger[data-state="open"] {
  background-color: var(--color-gray-100);
}
```

### 5.2 菜单内容

```
[Closed] ─────click─────▶ [Opening] ─────400ms─────▶ [Open]
    ▲                                                    │
    │                                                    │
    └─────────400ms─────[Closing]◀─────click/outside────┘
```

```css
.dropdown-content {
  /* 初始状态：不可见 */
  opacity: 0;
  transform: translateY(100%);
  pointer-events: none;
}

.dropdown-content[data-state="open"] {
  animation: dropdown-open 0.4s cubic-bezier(0.7, 0, 0.3, 1) forwards;
  pointer-events: auto;
}

.dropdown-content[data-state="closed"] {
  animation: dropdown-close 0.4s cubic-bezier(0.7, 0, 0.3, 1) forwards;
}

@keyframes dropdown-open {
  from {
    opacity: 0;
    transform: translateY(100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes dropdown-close {
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(100%);
  }
}
```

### 5.3 菜单项

```css
.dropdown-item {
  transition: background-color 0.1s ease-in-out;
}

.dropdown-item:hover {
  background-color: var(--color-gray-50);
}

.dropdown-item:active {
  background-color: var(--color-gray-100);
}

.dropdown-item[data-highlighted="true"] {
  background-color: var(--color-primary-light);
}
```

## 6. 模态弹窗状态

```
[Closed] ─────trigger─────▶ [Opening] ─────400ms─────▶ [Open]
    ▲                                                      │
    │                                                      │
    └─────────400ms─────[Closing]◀─────close/ESC/outside──┘
```

### 6.1 背景遮罩

```css
.modal-overlay {
  opacity: 0;
  pointer-events: none;
}

.modal-overlay[data-state="open"] {
  animation: overlay-fade-in 400ms ease-in-out forwards;
  pointer-events: auto;
}

.modal-overlay[data-state="closed"] {
  animation: overlay-fade-out 400ms ease-in-out forwards;
}

@keyframes overlay-fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes overlay-fade-out {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
```

### 6.2 模态内容

```css
.modal-content {
  opacity: 0;
  transform: scale(0.95) translateY(-20px);
}

.modal-content[data-state="open"] {
  animation: modal-content-enter 400ms ease-in-out forwards;
}

.modal-content[data-state="closed"] {
  animation: modal-content-exit 400ms ease-in-out forwards;
}

@keyframes modal-content-enter {
  from {
    opacity: 0;
    transform: scale(0.95) translateY(-20px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

@keyframes modal-content-exit {
  from {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
  to {
    opacity: 0;
    transform: scale(0.95) translateY(-20px);
  }
}
```

## 7. 手风琴状态

```
[Collapsed] ─────click─────▶ [Expanding] ─────400ms─────▶ [Expanded]
     ▲                                                          │
     │                                                          │
     └─────────400ms─────[Collapsing]◀─────────click───────────┘
```

### 7.1 手风琴头部

```css
.accordion-trigger {
  transition: background-color 0.1s ease-in-out;
}

.accordion-trigger:hover {
  background-color: var(--color-gray-50);
}

.accordion-trigger[data-state="open"] {
  /* 可选：高亮激活的手风琴 */
  background-color: var(--color-primary-light);
}

/* 箭头图标旋转 */
.accordion-trigger .icon {
  transition: transform 0.25s ease-in-out;
}

.accordion-trigger[data-state="open"] .icon {
  transform: rotate(180deg);
}
```

### 7.2 手风琴内容

```css
.accordion-content {
  display: grid;
  grid-template-rows: 0fr;
  overflow: hidden;
  
  transition: 
    grid-template-rows 0.25s ease-in-out,
    padding 0.25s ease-in-out;
}

.accordion-content[data-state="open"] {
  grid-template-rows: 1fr;
  padding: var(--accordion-padding);
}

/* 内部内容淡入 */
.accordion-content > * {
  opacity: 0;
  transition: opacity 0.25s ease-in-out;
}

.accordion-content[data-state="open"] > * {
  opacity: 1;
  transition-delay: 0.1s; /* 延迟淡入，等待高度动画 */
}
```

## 8. 切换开关 (Toggle/Switch)

```
[Off] ─────click─────▶ [On]
  ▲                      │
  │                      │
  └─────────click────────┘
```

```css
.switch {
  background-color: var(--color-gray-300);
  transition: background-color 0.25s ease-in-out;
}

.switch[data-state="checked"] {
  background-color: var(--color-primary);
}

.switch-thumb {
  transform: translateX(0);
  transition: transform 0.25s cubic-bezier(0.7, 0, 0.3, 1);
}

.switch[data-state="checked"] .switch-thumb {
  transform: translateX(20px); /* 根据实际宽度调整 */
}
```

## 9. 滑块 (Slider)

```css
.slider-thumb {
  transform: scale(1);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  
  transition: 
    transform 0.1s ease-in-out,
    box-shadow 0.1s ease-in-out;
}

.slider-thumb:hover {
  transform: scale(1.1);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
}

.slider-thumb:active {
  transform: scale(1.2);
  box-shadow: 0 0 0 8px var(--color-primary-alpha-20);
}

.slider-thumb:focus-visible {
  box-shadow: 0 0 0 8px var(--color-primary-alpha-30);
}
```

## 10. 工具提示 (Tooltip)

```css
.tooltip {
  opacity: 0;
  transform: translateY(4px);
  pointer-events: none;
  
  transition: 
    opacity 0.1s ease-in-out,
    transform 0.1s ease-in-out;
}

.tooltip[data-state="open"] {
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
  
  /* 延迟显示，避免鼠标快速划过时闪烁 */
  transition-delay: 0.3s;
}

.tooltip[data-state="closed"] {
  /* 立即隐藏，无延迟 */
  transition-delay: 0s;
}
```

## 11. 减少动效模式 (Reduced Motion)

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    /* 禁用所有动画和过渡 */
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
  
  /* 保留必要的状态指示 */
  .button:hover,
  .link:hover {
    /* 仍然改变颜色，但无过渡 */
  }
}
```

## 12. 总结：交互状态设计原则

### ✅ Zendesk 的优秀实践

1. **分层时长**: 快速反馈（shadow 100ms）+ 平滑过渡（color 250ms）
2. **激活加速**: Active 状态使用更快的过渡（100ms vs 250ms）
3. **视觉一致性**: 所有相同类型的元素使用相同的状态过渡
4. **GPU 加速**: 优先使用 transform 和 opacity
5. **焦点可见**: 清晰的 focus-visible 样式，保持无障碍访问

### 📋 对 SensorDeck 的建议

#### 直接采用
- 分层过渡时长策略
- cubic-bezier(0.7, 0, 0.3, 1) 用于重要动画
- 卡片"浮起"效果 (translateY + box-shadow)
- Grid 动画用于手风琴

#### 需要调整
- 添加 prefers-reduced-motion 支持（Zendesk 缺失）
- 考虑为数据可视化元素添加特殊的交互状态
- 为深色模式调整阴影和颜色过渡

#### 新增特性
- 为 3D WebGL 元素设计独立的交互反馈
- 为实时数据流添加"脉冲"动画状态
- 为告警/通知添加紧急程度分级的动效
