import type { TimelineItem, Skill, SocialLink } from '@/types';

export const profile = {
  name: 'Zoefeng',
  nameEn: 'Zhang Xiaofeng',
  title: '全栈开发者 / 终生学习者',
  bio: '热爱代码，喜欢阅读，享受思考。在技术与人文的交汇处寻找生活的意义。相信持续学习是对抗焦虑的最好方式。',
  avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=minimalist%20portrait%20illustration%20of%20a%20young%20developer%20with%20soft%20warm%20lighting%20elegant%20simple%20style&image_size=square',
  email: 'zoefeng@example.com',
  location: '中国',
};

export const timeline: TimelineItem[] = [
  {
    year: '2024',
    title: '开始写作之旅',
    description: '搭建个人博客，开始定期记录学习笔记和生活感悟。',
  },
  {
    year: '2023',
    title: '转向全栈开发',
    description: '从单纯的前端开发转向全栈，深入学习了 Node.js、数据库设计和系统架构。',
  },
  {
    year: '2021',
    title: '成为前端工程师',
    description: '正式开始了自己的职业编程之路，专注于 React 和 TypeScript 生态。',
  },
  {
    year: '2019',
    title: '爱上编程',
    description: '第一次接触编程，被代码创造世界的魔力深深吸引。',
  },
];

export const skills: Skill[] = [
  { name: 'React', level: 'expert' },
  { name: 'TypeScript', level: 'advanced' },
  { name: 'Node.js', level: 'intermediate' },
  { name: 'Python', level: 'intermediate' },
  { name: 'PostgreSQL', level: 'intermediate' },
  { name: 'Docker', level: 'beginner' },
  { name: 'Vue', level: 'intermediate' },
  { name: 'Tailwind CSS', level: 'advanced' },
];

export const socialLinks: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com/zhang-loiu', icon: 'github' },
  { name: 'Email', url: 'mailto:zoefeng@example.com', icon: 'mail' },
];

export const tagColors: Record<string, string> = {
  '随笔': 'bg-amber-50 text-amber-700 border-amber-200',
  '技术': 'bg-blue-50 text-blue-700 border-blue-200',
  '前端': 'bg-emerald-50 text-emerald-700 border-emerald-200',
  'React': 'bg-cyan-50 text-cyan-700 border-cyan-200',
  '读书': 'bg-rose-50 text-rose-700 border-rose-200',
  '生活': 'bg-orange-50 text-orange-700 border-orange-200',
  '效率': 'bg-violet-50 text-violet-700 border-violet-200',
  'TypeScript': 'bg-sky-50 text-sky-700 border-sky-200',
};
