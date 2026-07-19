# SensorDeck 动效实施映射

> 将 Zendesk 动效模式应用到 SensorDeck 现有组件的具体实施方案

## 1. 全局动效令牌配置

### 1.1 更新 `src/app/globals.css`

在现有的 `globals.css` 中添加动效令牌：

```css
@layer base {
  :root {
    /* ========== 动效时长令牌 ========== */
    --duration-instant: 0.1s;     /* 100ms - 即时反馈 */
    --duration-fast: 0.25s;       /* 250ms - 快速交互 */
    --duration-normal: 0.4s;      /* 400ms - 标准动画 */
    --duration-slow: 0.6s;        /* 600ms - 大型转换 */
    
    /* ========== 缓动函数令牌 ========== */
    --ease-linear: linear;
    --ease-standard: ease-in-out;
    --ease-snappy: cubic-bezier(0.7, 0, 0.3, 1);      /* Zendesk 品牌曲线 */
    --ease-sensordeck: cubic-bezier(0.4, 0, 0.2, 1);  /* Material Design - 更适合科技感 */
    
    /* ========== 延迟令牌（用于错开动画）========== */
    --delay-stagger-1: 0s;
    --delay-stagger-2: 0.05s;
    --delay-stagger-3: 0.1s;
    --delay-stagger-4: 0.15s;
    --delay-stagger-5: 0.2s;
  }
}

/* ========== 实用动画类 ========== */
@layer utilities {
  /* 淡入向上 */
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
  
  /* 淡入缩放 */
  @keyframes fade-scale {
    from {
      opacity: 0;
      transform: scale(0.95);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
  
  /* 淡入 */
  @keyframes fade-in {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  
  /* 滑入（从下） */
  @keyframes slide-up {
    from {
      transform: translateY(100%);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
  
  /* 旋转动画（加载指示器）*/
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
  
  /* 实用类 */
  .animate-fade-up {
    animation: fade-up var(--duration-normal) var(--ease-sensordeck);
  }
  
  .animate-fade-scale {
    animation: fade-scale var(--duration-normal) var(--ease-sensordeck);
  }
  
  .animate-slide-up {
    animation: slide-up var(--duration-normal) var(--ease-snappy);
  }
  
  .animate-spin {
    animation: spin 1s linear infinite;
  }
}

/* ========== 减少动效模式 ========== */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

## 2. 组件映射方案

### 2.1 按钮组件 (`src/components/website/Button.tsx`)

#### 当前状态
- 有基础的悬停样式
- 缺少细腻的过渡动画

#### 改进方案

```tsx
// src/components/website/Button.tsx
export function Button({ variant = "primary", ...props }: ButtonProps) {
  return (
    <Link
      className={cn(
        // 基础样式
        "inline-flex items-center justify-center",
        "rounded-lg font-medium",
        "transition-all", // 改为 transition-all
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
        
        // 分层过渡（从 Zendesk 学习）
        "[transition-property:border-color,box-shadow,background-color,color,outline-color,transform]",
        "[transition-duration:0.25s,0.1s,0.25s,0.25s,0.1s,0.25s]",
        "[transition-timing-function:ease-in-out]",
        
        // Primary 变体
        variant === "primary" && [
          "bg-atlas-blue text-white",
          "border border-atlas-blue",
          "hover:bg-atlas-blue/90",
          "hover:shadow-[0_4px_12px_rgba(74,144,226,0.3)]", // 使用品牌色阴影
          "active:scale-[0.98]",
          "active:[transition-duration:0.1s]", // 激活状态加速
        ],
        
        // Secondary 变体
        variant === "secondary" && [
          "bg-transparent text-ink",
          "border border-border",
          "hover:bg-canvas-subtle",
          "hover:border-atlas-blue/30",
          "hover:shadow-[0_2px_8px_rgba(0,0,0,0.08)]",
          "active:scale-[0.98]",
        ],
        
        // Text 变体
        variant === "text" && [
          "bg-transparent text-atlas-blue",
          "border-0",
          "hover:text-atlas-blue/80",
          "hover:underline",
          "[transition-duration:0.1s]", // 文字按钮使用快速过渡
        ]
      )}
      {...props}
    />
  );
}
```

### 2.2 Hero 区块 (`src/app/page.tsx`)

#### 当前状态
- 有简单的 fadeInUp 动画
- 已使用 animation-delay

#### 优化方案

```tsx
// src/app/page.tsx - Hero Section
<section className="relative py-24 lg:py-32">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="mx-auto max-w-3xl text-center">
      {/* 标题 - 0ms 延迟 */}
      <h1
        className="
          font-semibold tracking-tight text-ink
          leading-[1.05] text-4xl sm:text-5xl lg:text-6xl
          opacity-0 animate-fade-up
        "
        style={{
          animation: 'fade-up 0.4s cubic-bezier(0.4, 0, 0.2, 1) both',
          animationDelay: '0ms'
        }}
      >
        {homeContent.heroTitle}
      </h1>
      
      {/* 副标题 - 100ms 延迟 */}
      <p
        className="
          mt-6 max-w-xl mx-auto
          text-base sm:text-lg leading-7 text-ink
          opacity-0
        "
        style={{
          animation: 'fade-up 0.4s cubic-bezier(0.4, 0, 0.2, 1) both',
          animationDelay: '100ms'
        }}
      >
        {homeContent.heroSubtitle}
      </p>
      
      {/* 价值主张 - 200ms 延迟 */}
      <p
        className="
          mt-5 text-sm sm:text-base
          font-semibold text-atlas-blue
          opacity-0
        "
        style={{
          animation: 'fade-up 0.4s cubic-bezier(0.4, 0, 0.2, 1) both',
          animationDelay: '200ms'
        }}
      >
        {homeContent.heroValueProposition}
      </p>
      
      {/* CTA 按钮 - 300ms 延迟 */}
      <div
        className="mt-8 flex flex-wrap gap-3 justify-center opacity-0"
        style={{
          animation: 'fade-up 0.4s cubic-bezier(0.4, 0, 0.2, 1) both',
          animationDelay: '300ms'
        }}
      >
        <Button href="/demo" variant="primary">
          {homeContent.ctas.primary}
        </Button>
        <Button href="/contact" variant="secondary">
          {homeContent.ctas.secondary}
        </Button>
      </div>
    </div>
  </div>
</section>
```

### 2.3 特性卡片（如有）

#### 实现方案

```tsx
// src/components/website/FeatureCard.tsx
export function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <div
      className={cn(
        "group relative rounded-2xl border border-border bg-canvas p-8",
        "cursor-pointer",
        // 分层过渡
        "transition-[box-shadow,transform,border-color]",
        "duration-[100ms,250ms,250ms]",
        "ease-in-out",
        // 悬停效果（Zendesk 风格）
        "hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)]",
        "hover:-translate-y-1",
        "hover:border-atlas-blue/30",
        // 激活效果
        "active:transition-duration-[100ms]",
        "active:-translate-y-0.5",
        "active:shadow-[0_4px_12px_rgba(0,0,0,0.10)]"
      )}
    >
      {/* 图标 */}
      <div className="mb-4 text-atlas-blue transition-transform duration-250 ease-in-out group-hover:scale-110">
        {icon}
      </div>
      
      {/* 标题 */}
      <h3 className="text-lg font-semibold text-ink mb-2">
        {title}
      </h3>
      
      {/* 描述 */}
      <p className="text-sm text-ink/70">
        {description}
      </p>
    </div>
  );
}
```

### 2.4 导航栏 (`src/components/website/Header.tsx`)

#### 当前状态
- 固定在顶部
- 无滚动触发的样式变化

#### 添加滚动动画

```tsx
// src/components/website/Header.tsx
"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50",
        "transition-all duration-250 ease-in-out",
        // 默认状态
        !isScrolled && [
          "py-6",
          "bg-transparent",
        ],
        // 滚动后状态
        isScrolled && [
          "py-4",
          "bg-canvas/95 backdrop-blur-md",
          "shadow-[0_2px_8px_rgba(0,0,0,0.08)]",
        ]
      )}
    >
      {/* Header 内容 */}
    </header>
  );
}
```

### 2.5 滚动触发动画（通用 Hook）

创建一个 Intersection Observer Hook：

```tsx
// src/hooks/useScrollReveal.ts
"use client";

import { useEffect, useRef, useState } from "react";

interface UseScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export function useScrollReveal({
  threshold = 0.1,
  rootMargin = "0px 0px -50px 0px",
  triggerOnce = true,
}: UseScrollRevealOptions = {}) {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );
    
    observer.observe(element);
    
    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, triggerOnce]);
  
  return { ref, isVisible };
}
```

#### 使用示例

```tsx
// 在任意区块中使用
function FeatureSection() {
  const { ref, isVisible } = useScrollReveal();
  
  return (
    <section
      ref={ref}
      className={cn(
        "opacity-0 translate-y-5 transition-all duration-400",
        isVisible && "opacity-100 translate-y-0"
      )}
    >
      {/* 区块内容 */}
    </section>
  );
}
```

## 3. 输入组件映射

### 3.1 联系表单输入框 (`src/app/contact/page.tsx`)

```tsx
// 在表单输入框中添加过渡
<input
  type="text"
  className={cn(
    "w-full rounded-lg border border-border bg-canvas px-4 py-2.5",
    "text-ink placeholder:text-ink/40",
    "focus:outline-none",
    // Zendesk 风格的分层过渡
    "transition-[border-color,box-shadow,background-color]",
    "duration-[250ms,100ms,250ms]",
    "ease-in-out",
    // 悬停状态
    "hover:border-border-emphasis",
    // 焦点状态
    "focus:border-atlas-blue",
    "focus:ring-[3px] focus:ring-atlas-blue/20",
    // 错误状态
    "data-[invalid=true]:border-error",
    "data-[invalid=true]:focus:ring-error/20"
  )}
/>
```

### 3.2 选择框 (Select)

```tsx
<select
  className={cn(
    "w-full rounded-lg border border-border bg-canvas px-4 py-2.5",
    "text-ink appearance-none",
    "transition-[border-color,box-shadow]",
    "duration-[250ms,100ms]",
    "ease-in-out",
    "hover:border-border-emphasis",
    "focus:outline-none focus:border-atlas-blue",
    "focus:ring-[3px] focus:ring-atlas-blue/20"
  )}
>
  {/* Options */}
</select>
```

## 4. 模态/对话框组件（如需要）

```tsx
// src/components/ui/Modal.tsx
"use client";

import { useEffect } from "react";
import { cn } from "@/lib/utils";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export function Modal({ isOpen, onClose, children }: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);
  
  if (!isOpen) return null;
  
  return (
    <>
      {/* 背景遮罩 */}
      <div
        className={cn(
          "fixed inset-0 bg-black/50 z-50",
          "animate-[fade-in_0.4s_ease-in-out]"
        )}
        onClick={onClose}
      />
      
      {/* 模态内容 */}
      <div
        className={cn(
          "fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50",
          "bg-canvas rounded-2xl shadow-2xl",
          "max-w-lg w-full max-h-[90vh] overflow-auto",
          "animate-[fade-scale_0.4s_ease-in-out]"
        )}
      >
        {children}
      </div>
    </>
  );
}
```

## 5. 实施优先级

### Phase 1: 基础令牌（高优先级）
- [ ] 添加动效令牌到 `globals.css`
- [ ] 添加关键帧动画到 `globals.css`
- [ ] 添加 `prefers-reduced-motion` 支持

### Phase 2: 交互组件（高优先级）
- [ ] 更新 `Button` 组件的过渡效果
- [ ] 更新表单输入框的过渡效果
- [ ] 添加 Header 滚动动画

### Phase 3: 页面动画（中优先级）
- [ ] 优化 Hero 区块的错开动画
- [ ] 创建 `useScrollReveal` Hook
- [ ] 为主要区块添加滚动触发动画

### Phase 4: 高级组件（低优先级）
- [ ] 创建 Modal 组件（如需要）
- [ ] 创建 Dropdown 组件（如需要）
- [ ] 创建 Accordion 组件（如需要）

## 6. 性能检查清单

### 在实施后验证：

- [ ] 所有动画使用 `transform` 和 `opacity`（GPU 加速）
- [ ] 避免动画化 `width`/`height`（除非使用 Grid）
- [ ] 复杂动画添加 `will-change: transform, opacity`
- [ ] Chrome DevTools Performance 分析，确保 60fps
- [ ] 测试 `prefers-reduced-motion` 模式
- [ ] 测试移动端性能（使用 Chrome DevTools 节流）

## 7. 测试场景

### 浏览器测试
- [ ] Chrome (最新版)
- [ ] Safari (最新版)
- [ ] Firefox (最新版)
- [ ] 移动 Safari (iOS)
- [ ] 移动 Chrome (Android)

### 交互测试
- [ ] 按钮悬停和点击流畅
- [ ] 表单输入焦点状态清晰
- [ ] 滚动动画不卡顿
- [ ] 快速滚动时动画不堆叠
- [ ] 键盘导航正常工作

### 无障碍测试
- [ ] `prefers-reduced-motion` 生效
- [ ] 焦点指示器清晰可见
- [ ] 屏幕阅读器可以正常朗读内容
- [ ] 键盘可以访问所有交互元素

## 8. 迁移注意事项

### ⚠️ 潜在问题

1. **Tailwind CSS 类冲突**
   - 问题：内联 style 和 Tailwind 类可能冲突
   - 解决：优先使用 Tailwind，复杂动画用内联 style

2. **动画堆叠**
   - 问题：快速触发动画可能堆叠
   - 解决：使用 `animation-fill-mode: both` 和状态管理

3. **性能问题**
   - 问题：过多动画同时运行导致卡顿
   - 解决：限制同时运行的动画数量，使用 `will-change` 优化

4. **Server vs Client**
   - 问题：动画依赖客户端状态（滚动、悬停）
   - 解决：在需要动画的组件顶部添加 `"use client"`

## 9. 代码审查清单

在合并 PR 前检查：

- [ ] 所有动画令牌使用 CSS 变量，不使用硬编码值
- [ ] 复杂组件有 JSDoc 注释说明动画行为
- [ ] 添加了对应的 Storybook 故事（如适用）
- [ ] 性能分析通过，无明显掉帧
- [ ] 无障碍测试通过
- [ ] 代码符合项目的 ESLint 规则

## 10. 持续优化

### 监控指标

- **Core Web Vitals**
  - LCP (Largest Contentful Paint) < 2.5s
  - FID (First Input Delay) < 100ms
  - CLS (Cumulative Layout Shift) < 0.1

- **动画性能**
  - 所有动画保持 60fps
  - 无 forced reflow
  - 无 layout thrashing

### 未来增强

- [ ] 为数据可视化添加专门的动画库（D3.js, Framer Motion）
- [ ] 考虑添加 Lenis 平滑滚动库
- [ ] 探索 View Transitions API（Chrome 111+）
- [ ] 为 3D 元素添加 Three.js 动画集成

---

## 完整示例：更新后的 Button 组件

```tsx
// src/components/website/Button.tsx
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps {
  href?: string;
  variant?: "primary" | "secondary" | "text";
  size?: "sm" | "md" | "lg";
  className?: string;
  children: React.ReactNode;
}

export function Button({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  const Component = href ? Link : "button";
  
  return (
    <Component
      href={href}
      className={cn(
        // 基础样式
        "inline-flex items-center justify-center",
        "rounded-lg font-medium",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-atlas-blue focus-visible:ring-offset-2",
        
        // Zendesk 风格的分层过渡
        "[transition-property:border-color,box-shadow,background-color,color,outline-color,transform]",
        "[transition-duration:0.25s,0.1s,0.25s,0.25s,0.1s,0.25s]",
        "[transition-timing-function:ease-in-out]",
        
        // 大小变体
        size === "sm" && "text-sm px-3 py-1.5",
        size === "md" && "text-base px-4 py-2.5",
        size === "lg" && "text-lg px-6 py-3",
        
        // Primary 变体
        variant === "primary" && [
          "bg-atlas-blue text-white border border-atlas-blue",
          "hover:bg-atlas-blue/90 hover:shadow-[0_4px_12px_rgba(74,144,226,0.3)]",
          "active:scale-[0.98] active:[transition-duration:0.1s]",
        ],
        
        // Secondary 变体
        variant === "secondary" && [
          "bg-transparent text-ink border border-border",
          "hover:bg-canvas-subtle hover:border-atlas-blue/30",
          "hover:shadow-[0_2px_8px_rgba(0,0,0,0.08)]",
          "active:scale-[0.98]",
        ],
        
        // Text 变体
        variant === "text" && [
          "bg-transparent text-atlas-blue border-0",
          "hover:text-atlas-blue/80 hover:underline",
          "[transition-duration:0.1s]",
        ],
        
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
```

这个实施映射提供了完整的路线图，从全局配置到具体组件，从高优先级到低优先级，确保动效系统能够有序、高质量地集成到 SensorDeck 项目中。
