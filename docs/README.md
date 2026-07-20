# 卡片动画逆向工程与实现文档

## 文档索引

本目录包含基于视频逆向工程的卡片动画完整技术文档:

1. **[01-video-analysis.md](./01-video-analysis.md)** - 视频分析方法与测量数据
2. **[02-animation-parameters.md](./02-animation-parameters.md)** - 动画参数详解
3. **[03-implementation-guide.md](./03-implementation-guide.md)** - GSAP + React 实现指南
4. **[04-integration-guide.md](./04-integration-guide.md)** - 集成到现有项目的方案

## 快速开始

```bash
# 查看演示页面
npm run dev
# 访问 http://localhost:3000/animation-demo
```

## 核心发现

- **无位移动画**: 卡片固定在底部,纯透明度变化
- **分层控制**: 背景和内容行独立淡入淡出
- **精确时序**: 展开 5.8s (分三阶段) / 收起 1.4s (快速响应)
- **不对称设计**: 淡出慢 (给用户消化时间) / 淡入快 (响应迅速)

## 技术栈

- **分析工具**: ffmpeg, OpenCV (cv2), Python 3
- **实现框架**: Next.js 16.2 + React 19
- **动画库**: GSAP 3.12 + @gsap/react 2.1
- **样式系统**: Tailwind CSS 4

## 文件位置

```
sensordeck-website/
├── docs/                              # 本文档目录
│   ├── 01-video-analysis.md
│   ├── 02-animation-parameters.md
│   ├── 03-implementation-guide.md
│   └── 04-integration-guide.md
├── src/
│   ├── components/website/
│   │   └── AnimatedCard.tsx           # 主组件实现
│   └── app/
│       └── animation-demo/
│           └── page.tsx               # 独立演示页面
└── ANIMATION_DOCS.md                  # 根目录快速参考
```

## 项目背景

原始视频来自设计原型,展示了一个音乐播放卡片的展开/收起动画。通过逐帧分析 (60fps, 1219帧),精确测量了每个关键时间点的透明度变化,使用 GSAP Timeline 完美复刻了原始时序。

## 测量精度

- **帧率**: 60fps
- **时间精度**: ±5帧 (±83ms)
- **测量方法**: 内容占比 (content ratio) + Laplacian 锐度检测
- **数据点**: 展开 70 个采样点 / 收起 30 个采样点

## 下一步

1. 阅读 [01-video-analysis.md](./01-video-analysis.md) 了解分析方法
2. 查看 [02-animation-parameters.md](./02-animation-parameters.md) 了解具体参数
3. 参考 [03-implementation-guide.md](./03-implementation-guide.md) 进行开发
4. 使用 [04-integration-guide.md](./04-integration-guide.md) 集成到项目

## 联系信息

- 项目: Sensordeck Website
- 实现时间: 2026-07-20
- 技术负责人: 梁杰铭
