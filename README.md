# Zoefeng 个人博客

一个优雅的个人博客网站，采用现代化设计风格，参考 poetize.cn 的美学设计。

## 技术栈

- **前端框架**: React 18 + TypeScript
- **构建工具**: Vite
- **样式方案**: Tailwind CSS
- **路由管理**: React Router DOM
- **图标库**: Lucide React
- **Markdown 渲染**: react-markdown + remark-gfm
- **代码高亮**: react-syntax-highlighter

## 功能特性

- 🎨 **优雅设计**: 参考 poetize.cn 的文学气息设计风格
- 🌸 **动画效果**: 花瓣飘落动画、波浪动画、卡片悬停效果
- 📱 **响应式布局**: 完美适配桌面端和移动端
- 📝 **Markdown 支持**: 文章使用 Markdown 格式，支持代码高亮
- 🏷️ **标签分类**: 按标签筛选文章
- 📋 **目录导航**: 文章详情页自动生成目录
- 🚀 **快速部署**: 支持 GitHub Pages 部署

## 项目结构

```
personal-blog/
├── src/
│   ├── components/          # 通用组件
│   │   ├── Header.tsx       # 头部导航
│   │   ├── Footer.tsx       # 页脚
│   │   ├── PostCard.tsx     # 文章卡片
│   │   ├── Sidebar.tsx      # 侧边栏
│   │   ├── TagBadge.tsx     # 标签徽章
│   │   ├── Timeline.tsx     # 时间线组件
│   │   ├── TableOfContents.tsx  # 目录导航
│   │   └── PetalAnimation.tsx   # 花瓣动画
│   ├── pages/               # 页面组件
│   │   ├── HomePage.tsx     # 首页
│   │   ├── PostPage.tsx     # 文章详情页
│   │   └── AboutPage.tsx    # 关于页
│   ├── data/                # 静态数据
│   │   ├── posts.ts         # 文章元数据
│   │   ├── articles.ts      # 文章内容
│   │   └── profile.ts       # 个人信息
│   ├── types/               # 类型定义
│   ├── styles/              # 全局样式
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── public/
│   ├── 404.html             # 路由重定向
│   └── CNAME                # 自定义域名
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── tailwind.config.js
```

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览构建结果
npm run preview
```

## 部署到 GitHub Pages

1. 确保你已经在 GitHub 上创建了仓库
2. 配置自定义域名（可选）：修改 `public/CNAME` 文件
3. 运行部署命令：

```bash
npm run deploy
```

4. 在 GitHub 仓库设置中，将 Pages 源设置为 `gh-pages` 分支

## 自定义内容

### 添加新文章

在 `src/data/articles.ts` 中添加文章内容，在 `src/data/posts.ts` 中添加文章元数据。

### 修改个人信息

编辑 `src/data/profile.ts` 文件，修改个人信息、技能、时间线等。

### 修改主题颜色

编辑 `tailwind.config.js` 文件中的颜色配置。

## License

MIT
