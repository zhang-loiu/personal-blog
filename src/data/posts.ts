import type { Post } from '@/types';

export const posts: Post[] = [
  {
    slug: 'my-blog-journey',
    title: '搭建个人博客的意义与实践',
    excerpt: '在这个信息过载的时代，拥有一个属于自己的数字空间，记录思考、分享心得，是一件多么有意义的事情。',
    date: '2024-05-20',
    tags: ['随笔', '技术'],
    readTime: 6,
    fileName: 'my-blog-journey.md',
  },
  {
    slug: 'learning-react-hooks',
    title: '深入理解 React Hooks：从 useState 到自定义 Hook',
    excerpt: 'React Hooks 彻底改变了我们编写组件的方式。本文带你深入理解 Hooks 的设计哲学和最佳实践。',
    date: '2024-05-10',
    tags: ['前端', 'React'],
    readTime: 12,
    fileName: 'learning-react-hooks.md',
  },
  {
    slug: 'reading-notes-2024',
    title: '2024 年上半年读书清单与心得',
    excerpt: '半年时间，读完了 15 本书，有小说、有哲学、有科技。分享几本让我印象深刻的作品。',
    date: '2024-04-28',
    tags: ['读书', '生活'],
    readTime: 8,
    fileName: 'reading-notes-2024.md',
  },
  {
    slug: 'minimalism-digital',
    title: '数字极简主义：减少干扰，专注创作',
    excerpt: '在信息爆炸的时代，我们需要学会主动选择，而不是被动接收。聊聊我的数字极简实践。',
    date: '2024-04-15',
    tags: ['生活', '效率'],
    readTime: 7,
    fileName: 'minimalism-digital.md',
  },
  {
    slug: 'typescript-patterns',
    title: 'TypeScript 实用模式：让类型系统为你服务',
    excerpt: '分享几个在实际项目中常用的 TypeScript 设计模式，让你的代码更安全、更优雅。',
    date: '2024-04-01',
    tags: ['前端', 'TypeScript'],
    readTime: 15,
    fileName: 'typescript-patterns.md',
  },
  {
    slug: 'morning-routine',
    title: '晨间仪式：如何让每天的开始更有意义',
    excerpt: '坚持了一年的晨间习惯，让我对生活有了全新的认识。分享我的日常仪式。',
    date: '2024-03-20',
    tags: ['生活', '效率'],
    readTime: 5,
    fileName: 'morning-routine.md',
  },
];

export function getAllPosts(): Post[] {
  return posts.sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find(post => post.slug === slug);
}

export function getAllTags(): string[] {
  const tags = new Set<string>();
  posts.forEach(post => post.tags.forEach(tag => tags.add(tag)));
  return Array.from(tags);
}

export function getPostsByTag(tag: string): Post[] {
  return getAllPosts().filter(post => post.tags.includes(tag));
}
