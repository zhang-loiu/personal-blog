export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  coverImage?: string;
  readTime: number;
  fileName: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

export interface Skill {
  name: string;
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}
