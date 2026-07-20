# GSAP + React 实现指南

## 概述

本文档详细说明如何使用 GSAP 和 React 实现卡片动画,包括代码结构、最佳实践和常见问题。

## 技术栈

```json
{
  "框架": "Next.js 16.2 + React 19",
  "动画库": "GSAP 3.12 + @gsap/react 2.1",
  "样式": "Tailwind CSS 4",
  "语言": "TypeScript 5"
}
```

## 依赖安装

```bash
npm install gsap @gsap/react
```

**package.json 片段:**

```json
{
  "dependencies": {
    "gsap": "^3.12.5",
    "@gsap/react": "^2.1.1"
  }
}
```

## 核心组件实现

### 文件结构

```
src/
├── components/
│   └── website/
│       └── AnimatedCard.tsx    # 主组件 (206 行)
└── app/
    └── animation-demo/
        └── page.tsx            # 演示页面 (35 行)
```

### AnimatedCard.tsx - 完整实现

```typescript
'use client';

import { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

// 注册 useGSAP 插件 (必须在组件外执行一次)
gsap.registerPlugin(useGSAP);

interface AnimatedCardProps {
  lines?: string[];        // 卡片显示的内容行
  autoPlay?: boolean;      // 是否隐藏控制按钮
  className?: string;      // 外层容器额外类名
}

export default function AnimatedCard({
  lines = ['🎵 正在播放', 'Bohemian Rhapsody', 'Queen • A Night at the Opera'],
  autoPlay = false,
  className = ''
}: AnimatedCardProps) {
  // Refs
  const containerRef = useRef<HTMLDivElement>(null);      // 作用域容器
  const backgroundRef = useRef<HTMLDivElement>(null);     // 背景层
  
  // State
  const [isExpanded, setIsExpanded] = useState(true);     // 展开/收起状态
  const [isAnimating, setIsAnimating] = useState(false);  // 动画进行中锁

  // useGSAP hook (自动清理)
  const { contextSafe } = useGSAP({ scope: containerRef });

  // 展开动画 (淡出) - 5.0s
  const expandCard = contextSafe(() => {
    if (!containerRef.current || !backgroundRef.current || isAnimating) return;

    setIsAnimating(true);
    const lineElements = containerRef.current.querySelectorAll('.card-content-line');
    const timeline = gsap.timeline({
      onComplete: () => {
        setIsExpanded(false);
        setIsAnimating(false);
      }
    });

    // 2.0s: 第一行淡出 (200ms, ease-out)
    timeline.to(lineElements[0], {
      opacity: 0,
      duration: 0.2,
      ease: 'power2.out'
    }, 2.0);  // 绝对时间点

    // 3.85s: 第二行淡出 (150ms, ease-out)
    timeline.to(lineElements[1], {
      opacity: 0,
      duration: 0.15,
      ease: 'power2.out'
    }, 3.85);

    // 4.5s: 背景和剩余内容快速淡出 (500ms, ease-in)
    timeline.to(backgroundRef.current, {
      opacity: 0,
      duration: 0.5,
      ease: 'power2.in'
    }, 4.5);

    timeline.to(Array.from(lineElements).slice(2), {
      opacity: 0,
      duration: 0.5,
      ease: 'power2.in'
    }, 4.5);  // 与背景同时开始
  });

  // 收起动画 (淡入) - 1.4s
  const collapseCard = contextSafe(() => {
    if (!containerRef.current || !backgroundRef.current || isAnimating) return;

    setIsAnimating(true);
    const lineElements = containerRef.current.querySelectorAll('.card-content-line');
    const timeline = gsap.timeline({
      onComplete: () => {
        setIsExpanded(true);
        setIsAnimating(false);
      }
    });

    // 设置初始透明状态
    gsap.set(backgroundRef.current, { opacity: 0 });
    gsap.set(lineElements, { opacity: 0 });

    // 0s: 背景快速淡入 (100ms, ease-out)
    timeline.to(backgroundRef.current, {
      opacity: 1,
      duration: 0.1,
      ease: 'power2.out'
    }, 0);

    // 1.0s: 内容逐行淡入 (每行 100ms, 间隔 100ms)
    lineElements.forEach((line, index) => {
      timeline.to(line, {
        opacity: 1,
        duration: 0.1,
        ease: 'power2.out'
      }, 1.0 + (index * 0.1));
    });
  });

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {/* 卡片主体 - 固定底部中央 */}
      <div
        className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md px-6"
        style={{ zIndex: 50 }}
      >
        <div
          ref={backgroundRef}
          className="rounded-xl bg-black/80 backdrop-blur-sm p-5 shadow-2xl"
        >
          {lines.map((text, index) => (
            <div
              key={index}
              className={`card-content-line ${
                index === 0 ? 'text-xs text-white/60 mb-2' :
                index === 1 ? 'text-lg font-semibold text-white mb-1' :
                'text-sm text-white/80'
              }`}
            >
              {text}
            </div>
          ))}
        </div>
      </div>

      {/* 控制按钮 - 仅在非自动播放模式显示 */}
      {!autoPlay && (
        <div className="fixed top-20 left-6 z-[60] flex gap-3">
          <button
            onClick={expandCard}
            disabled={!isExpanded || isAnimating}
            className={`
              px-4 py-2 rounded-lg text-sm font-semibold
              transition-all duration-200
              ${isExpanded && !isAnimating
                ? 'bg-atlas-blue text-white hover:bg-atlas-blue-dark shadow-md'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }
            `}
          >
            展开 (淡出)
          </button>
          <button
            onClick={collapseCard}
            disabled={isExpanded || isAnimating}
            className={`
              px-4 py-2 rounded-lg text-sm font-semibold
              transition-all duration-200
              ${!isExpanded && !isAnimating
                ? 'bg-green-600 text-white hover:bg-green-700 shadow-md'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }
            `}
          >
            收起 (淡入)
          </button>
        </div>
      )}
    </div>
  );
}
```

## 关键技术点详解

### 1. useGSAP Hook

```typescript
const { contextSafe } = useGSAP({ scope: containerRef });
```

**作用:**
- 自动清理动画 (组件卸载时调用 `timeline.kill()`)
- 提供 `contextSafe` 包装器,防止卸载后执行回调
- 限定选择器作用域 (`.card-content-line` 只在 `containerRef` 内查找)

**vs useEffect:**

| 特性 | useGSAP | useEffect + gsap.context() |
|------|---------|---------------------------|
| **自动清理** | ✅ 内置 | ⚠️ 需手动 `ctx.revert()` |
| **contextSafe** | ✅ 自动 | ⚠️ 需手动包装 |
| **代码量** | 少 (1 行) | 多 (5+ 行) |
| **推荐度** | 首选 | 备选 |

### 2. Timeline 绝对时间定位

```typescript
timeline.to(element, { ... }, 2.0);   // 从 2.0s 开始
timeline.to(element, { ... }, 3.85);  // 从 3.85s 开始
```

**vs 相对时间:**

```typescript
// ❌ 相对时间 (难以调整)
timeline.to(el1, { ... }, '+=0');      // 从当前时间开始
timeline.to(el2, { ... }, '+=1.85');   // 相对于 el1 结束后 1.85s
timeline.to(el3, { ... }, '+=0.65');   // 相对于 el2 结束后 0.65s

// ✅ 绝对时间 (清晰直观)
timeline.to(el1, { ... }, 2.0);
timeline.to(el2, { ... }, 3.85);
timeline.to(el3, { ... }, 4.5);
```

**优势:**
- 每个时间点独立调整,不影响其他
- 直接对应视频时间轴
- 调试时可用 `timeline.time(2.0)` 跳转

### 3. contextSafe 包装器

```typescript
const expandCard = contextSafe(() => {
  // 即使组件已卸载,这里的代码也不会执行
  gsap.to(element, { ... });
});
```

**问题场景:**

```typescript
// ❌ 不使用 contextSafe
const expandCard = () => {
  setTimeout(() => {
    gsap.to(element, { ... });  // 如果组件已卸载,会报错
  }, 1000);
};

// ✅ 使用 contextSafe
const expandCard = contextSafe(() => {
  setTimeout(() => {
    gsap.to(element, { ... });  // 组件卸载后自动跳过
  }, 1000);
});
```

### 4. 状态锁机制

```typescript
const [isAnimating, setIsAnimating] = useState(false);

const expandCard = contextSafe(() => {
  if (isAnimating) return;  // 防止重复触发
  setIsAnimating(true);
  
  const timeline = gsap.timeline({
    onComplete: () => setIsAnimating(false)
  });
  // ...
});
```

**目的**: 防止动画进行中点击按钮导致的冲突

### 5. gsap.set 初始化

```typescript
// 收起动画开始前,先设置初始状态
gsap.set(backgroundRef.current, { opacity: 0 });
gsap.set(lineElements, { opacity: 0 });
```

**vs CSS 初始化:**

```css
/* ❌ CSS (需要切换 class) */
.card-hidden { opacity: 0; }

/* ✅ gsap.set (即时生效) */
gsap.set(element, { opacity: 0 });
```

### 6. 数组切片

```typescript
// 背景淡出时,同时淡出第 3 行及以后的内容
timeline.to(Array.from(lineElements).slice(2), {
  opacity: 0,
  duration: 0.5,
  ease: 'power2.in'
}, 4.5);
```

**slice(2)**: 跳过前 2 行 (index 0, 1),从 index 2 开始

## Next.js 特殊处理

### 1. 'use client' 指令

```typescript
'use client';  // 必须在文件顶部

import { useRef, useState } from 'react';
```

**原因**: GSAP 依赖浏览器 API (DOM), 不能在服务端渲染 (SSR) 时运行

### 2. 动态导入 (可选优化)

```typescript
// 如果组件只在特定页面使用,可以动态导入减少首屏 bundle
import dynamic from 'next/dynamic';

const AnimatedCard = dynamic(
  () => import('@/components/website/AnimatedCard'),
  { ssr: false }  // 禁用 SSR
);
```

## Tailwind 集成

### 使用设计 Token

```typescript
className="bg-atlas-blue"  // 项目自定义颜色
```

**tailwind.config.js 配置 (假设):**

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        'atlas-blue': '#0066cc',
        'atlas-blue-dark': '#0052a3'
      }
    }
  }
};
```

### 固定定位 + 居中

```typescript
className="fixed bottom-0 left-1/2 -translate-x-1/2"
```

**等价 CSS:**

```css
position: fixed;
bottom: 0;
left: 50%;
transform: translateX(-50%);
```

### 响应式宽度

```typescript
className="w-full max-w-md"  // 移动端全宽,桌面端最大 448px
```

## 性能优化

### 1. GPU 加速属性

GSAP 自动使用 GPU 加速属性 (`opacity`, `transform`):

```typescript
// ✅ GPU 加速 (60fps)
gsap.to(element, { opacity: 0 });

// ❌ 非 GPU 加速 (可能卡顿)
gsap.to(element, { width: 0 });
```

### 2. will-change 提示

```typescript
<div style={{ willChange: 'opacity' }}>
```

**作用**: 提前告诉浏览器该元素会变化,优化渲染

### 3. 避免 Layout Thrashing

```typescript
// ❌ 坏实践: 在循环中读写 DOM
lineElements.forEach(el => {
  const height = el.offsetHeight;  // 读 (触发 reflow)
  el.style.opacity = '0';          // 写 (触发 repaint)
});

// ✅ 好实践: 批量操作
gsap.set(lineElements, { opacity: 0 });  // GSAP 内部优化
```

## 调试技巧

### 1. Timeline 时间控制

```typescript
const timeline = gsap.timeline();

// 跳转到 2.0s
timeline.time(2.0);

// 暂停
timeline.pause();

// 继续
timeline.resume();

// 反向播放
timeline.reverse();
```

### 2. Chrome DevTools 动画面板

1. 打开 DevTools → **More tools** → **Animations**
2. 触发动画
3. 查看时间轴,逐帧播放

### 3. GSAP DevTools (付费插件)

```typescript
import { GSDevTools } from 'gsap/GSDevTools';
gsap.registerPlugin(GSDevTools);

GSDevTools.create();  // 显示可视化控制面板
```

### 4. Console 日志

```typescript
timeline.to(element, {
  opacity: 0,
  onStart: () => console.log('开始淡出'),
  onUpdate: () => console.log('进度:', timeline.progress()),
  onComplete: () => console.log('淡出完成')
});
```

## 常见问题

### Q1: 动画不触发?

**检查清单:**
1. ✅ `gsap.registerPlugin(useGSAP)` 是否在组件外调用?
2. ✅ `ref` 是否正确绑定到 DOM 元素?
3. ✅ `containerRef.current` 是否为 null?
4. ✅ 选择器 `.card-content-line` 是否匹配到元素?

**调试:**

```typescript
const expandCard = contextSafe(() => {
  console.log('containerRef:', containerRef.current);  // 应该是 div 元素
  const lines = containerRef.current?.querySelectorAll('.card-content-line');
  console.log('找到的行数:', lines?.length);  // 应该 > 0
});
```

### Q2: 组件卸载后报错 "Can't perform update on unmounted component"?

**原因**: 没有使用 `contextSafe` 包装回调

**修复:**

```typescript
// ❌ 错误
const expandCard = () => {
  timeline.to(element, {
    onComplete: () => setIsExpanded(false)  // 卸载后执行会报错
  });
};

// ✅ 正确
const expandCard = contextSafe(() => {
  timeline.to(element, {
    onComplete: () => setIsExpanded(false)  // 自动跳过
  });
});
```

### Q3: 动画播放一半被打断?

**原因**: Timeline 没有在重新触发前清理

**修复:**

```typescript
const timelineRef = useRef<gsap.core.Timeline | null>(null);

const expandCard = contextSafe(() => {
  // 先清理上一个 timeline
  if (timelineRef.current) {
    timelineRef.current.kill();
  }
  
  timelineRef.current = gsap.timeline({ ... });
});
```

### Q4: Next.js 开发环境热重载后动画失效?

**原因**: Strict Mode 导致组件 mount 两次

**临时禁用 (仅开发环境):**

```typescript
// next.config.js
module.exports = {
  reactStrictMode: false  // 不推荐,仅调试用
};
```

**正确做法**: 确保 `useGSAP` 的 cleanup 正确执行,开发环境会自动恢复

### Q5: 缓动函数不生效?

**检查拼写:**

```typescript
ease: 'power2.out'   // ✅ 正确
ease: 'Power2.Out'   // ❌ 错误 (大小写敏感)
ease: 'ease-out'     // ❌ 错误 (CSS 语法,GSAP 不支持)
```

**可用缓动:** `power1-4`, `back`, `elastic`, `expo`, `circ`, `sine`, `none`

## 扩展功能

### 1. 自动播放循环

```typescript
useGSAP(() => {
  if (autoPlay) {
    const loop = gsap.timeline({ repeat: -1, yoyo: true });
    loop.add(expandCard);
    loop.add(collapseCard);
  }
}, { dependencies: [autoPlay] });
```

### 2. 手势控制

```typescript
import { Draggable } from 'gsap/Draggable';
gsap.registerPlugin(Draggable);

useGSAP(() => {
  Draggable.create(cardRef.current, {
    type: 'y',
    onDragEnd: function() {
      if (this.y < -50) expandCard();
      else if (this.y > 50) collapseCard();
    }
  });
}, { scope: containerRef });
```

### 3. 滚动触发

```typescript
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

useGSAP(() => {
  ScrollTrigger.create({
    trigger: containerRef.current,
    start: 'top center',
    onEnter: () => collapseCard(),
    onLeaveBack: () => expandCard()
  });
}, { scope: containerRef });
```

## 测试

### 单元测试 (Jest + React Testing Library)

```typescript
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import AnimatedCard from './AnimatedCard';

test('点击展开按钮后隐藏', async () => {
  render(<AnimatedCard lines={['测试']} />);
  
  const expandBtn = screen.getByText('展开 (淡出)');
  fireEvent.click(expandBtn);
  
  await waitFor(() => {
    expect(screen.queryByText('测试')).not.toBeVisible();
  }, { timeout: 6000 });  // 5s 动画 + 1s 余量
});
```

### E2E 测试 (Playwright)

```typescript
test('卡片动画流畅播放', async ({ page }) => {
  await page.goto('/animation-demo');
  
  // 点击展开
  await page.click('button:has-text("展开")');
  
  // 等待动画完成
  await page.waitForTimeout(5500);
  
  // 验证透明
  const card = page.locator('.card-content-line').first();
  await expect(card).toHaveCSS('opacity', '0');
});
```

## 总结

**核心要点:**
1. ✅ 使用 `useGSAP` 而非 `useEffect`
2. ✅ 用 `contextSafe` 包装所有回调
3. ✅ 用绝对时间 (`2.0`, `3.85`) 而非相对时间 (`+=1.85`)
4. ✅ Next.js 组件必须 `'use client'`
5. ✅ 用 `isAnimating` 状态锁防止重复触发

**性能:**
- GPU 加速 (opacity, transform)
- 60fps 流畅播放
- 无 Layout Thrashing

**兼容性:**
- ✅ Chrome/Edge/Safari/Firefox (现代浏览器)
- ✅ iOS Safari / Android Chrome
- ⚠️ IE11 需要 polyfill (不推荐)
