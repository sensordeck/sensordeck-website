# SensorDeck Website

Official website for SensorDeck.

## Tech Stack

- **Framework**: Next.js 16.2.10 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS v4
- **React**: 19.2.4

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

访问 http://localhost:3000 查看开发环境。

## Deployment

### Vercel (推荐)

1. 将代码推送到 GitHub
2. 在 Vercel 导入仓库：https://vercel.com/new
3. 选择 `sensordeck/sensordeck-website` 仓库
4. 使用默认配置（Vercel 自动检测 Next.js）
5. 点击 "Deploy"

部署后：
- 生产环境：自动部署 `main` 分支
- 预览环境：每个 PR 自动生成预览链接
- 自定义域名：在 Vercel Project Settings → Domains 添加 `sensordeck.tech`

### 手动部署

```bash
# 构建生产版本
npm run build

# 启动生产服务器
npm start
```

或使用 Docker：

```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 项目结构

```
sensordeck-website/
├── src/
│   ├── app/              # Next.js App Router 页面
│   │   ├── page.tsx      # Home 页面
│   │   ├── layout.tsx    # 根布局
│   │   └── globals.css   # 全局样式
│   ├── components/       # React 组件
│   │   └── website/      # 网站组件（Header, Footer, Button, Card, Section）
│   └── content/          # 内容数据
│       ├── zh/           # 中文内容
│       └── en/           # 英文内容
├── public/               # 静态资源
│   └── logos/            # Logo 图片
├── DESIGN.md             # 设计规范（权威文档）
└── README.md
```

## Documentation

完整设计规范和约束见 [DESIGN.md](DESIGN.md)。

Deployment trigger: 2026-07-18
