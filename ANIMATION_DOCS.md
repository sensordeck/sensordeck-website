# 卡片动画实现文档

## 概述

基于视频逆向工程分析,实现了精确复刻原始动画时序的 React 组件。

## 动画参数 (从视频分析得出)

### 展开动画 (淡出) - 5.8s

| 时间点 | 动作 | 时长 | 缓动 |
|--------|------|------|------|
| 0-2.0s | 静态初始状态 | 2.0s | - |
| 2.0-2.2s | 第一行淡出 | 0.2s | power2.out |
| 2.2-3.85s | 静态 | 1.65s | - |
| 3.85-4.0s | 第二行淡出 | 0.15s | power2.out |
| 4.5-5.0s | 背景+剩余内容淡出 | 0.5s | power2.in |
| 5.0s+ | 完全透明 | - | - |

### 收起动画 (淡入) - 1.4s

| 时间点 | 动作 | 时长 | 缓动 |
|--------|------|------|------|
| 0-0.1s | 背景淡入 | 0.1s | power2.out |
| 0.1-1.0s | 静态半透明 | 0.9s | - |
| 1.0-1.4s | 内容逐行淡入 (100ms间隔) | 0.4s | power2.out |

## 核心发现

1. **无位移**: 卡片Y坐标固定,不存在垂直滑动
2. **纯透明度**: 所有变化通过 opacity 实现
3. **分层控制**: 背景和内容行独立控制
4. **不对称时序**: 淡出慢 (5s),淡入快 (1.4s)

## 技术实现

### 技术栈

- **框架**: Next.js 16.2 + React 19
- **动画库**: GSAP 3.12 + @gsap/react 2.1
- **样式**: Tailwind CSS 4

### 关键特性

- ✅ `useGSAP` hook 自动清理,防止内存泄漏
- ✅ `contextSafe` 包装回调,避免组件卸载后执行
- ✅ Timeline 精确控制绝对时间点
- ✅ 禁用重复触发 (`isAnimating` 状态锁)

### 文件结构

```
src/
├── components/website/
│   └── AnimatedCard.tsx          # 主组件
└── app/
    └── animation-demo/
        └── page.tsx               # 演示页面
```

## 使用方法

### 基础用法

```tsx
import AnimatedCard from '@/components/website/AnimatedCard';

<AnimatedCard
  lines={[
    '🎵 正在播放',
    'Bohemian Rhapsody',
    'Queen • A Night at the Opera'
  ]}
/>
```

### Props API

| Prop | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `lines` | `string[]` | 3行示例文本 | 卡片显示的内容行 |
| `autoPlay` | `boolean` | `false` | 是否隐藏手动控制按钮 |
| `className` | `string` | `''` | 外层容器额外类名 |

## 运行演示

```bash
cd /Users/unknown_liang/Desktop/Code/sensordeck-website
npm run dev
```

访问: http://localhost:3000/animation-demo

## 与现有设计系统集成

### 颜色变量

组件已使用 Tailwind 配置中的设计 token:
- `atlas-blue` - 主按钮颜色
- `bg-black/80` - 卡片背景 (80% 不透明度)
- `backdrop-blur-sm` - 毛玻璃效果

### 响应式

- 移动端: `max-w-md` (448px)
- 桌面端: 固定底部中央,左右各 24px 内边距

## 调整建议

### 修改时序

在 `AnimatedCard.tsx` 中调整 timeline 的第三个参数 (绝对时间点):

```typescript
// 2.0s → 1.5s (提前触发)
timeline.to(lineElements[0], {
  opacity: 0,
  duration: 0.2,
  ease: 'power2.out'
}, 1.5); // 从 2.0 改为 1.5
```

### 修改缓动

GSAP 可用缓动函数:
- `power1/2/3/4.in/out/inOut` - 渐进式加速/减速
- `back.in/out/inOut` - 带回弹效果
- `elastic.in/out/inOut` - 弹性效果
- `expo.in/out/inOut` - 指数曲线

### 添加更多行

直接在 `lines` prop 中添加:

```tsx
<AnimatedCard
  lines={[
    '第一行',
    '第二行',
    '第三行',
    '第四行' // 新增
  ]}
/>
```

## 与原视频的对应关系

| 视频时间 | 组件时间 | 动作 |
|---------|---------|------|
| 2.18s | 2.0s | 第一行淡出开始 |
| 5.02s | 5.0s | 完全透明 |
| 16.92s | 0s (触发收起) | 背景淡入开始 |
| 18.42s | 1.4s | 完全可见 |

组件使用相对时间 (从触发开始计算),而视频使用绝对时间戳。

## 测量数据来源

所有时序参数来自逐帧分析:
- 源视频: `/Users/unknown_liang/Movies/2026-07-20 14-26-27.mov`
- 帧率: 60fps
- 总帧数: 1219
- 测量方法: OpenCV 内容占比 + Laplacian 锐度检测
- 数据精度: ±5帧 (±83ms)
