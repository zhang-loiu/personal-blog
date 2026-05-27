import { Link } from 'react-router-dom';
import { Calendar, Eye, MessageCircle } from 'lucide-react';
import type { Post } from '@/types';

const coverImages = [
  'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20workspace%20with%20computer%20coding%20programming%20warm%20lighting%20aesthetic&image_size=landscape_4_3',
  'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=artificial%20intelligence%20ai%20technology%20futuristic%20blue%20purple%20glow&image_size=landscape_4_3',
  'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=books%20and%20coffee%20reading%20corner%20cozy%20atmosphere%20warm%20light&image_size=landscape_4_3',
  'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=minimalist%20desk%20setup%20zen%20style%20simple%20clean%20white&image_size=landscape_4_3',
  'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=typescript%20code%20editor%20syntax%20highlighting%20developer%20screen&image_size=landscape_4_3',
  'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=morning%20sunlight%20window%20peaceful%20meditation%20calm%20scene&image_size=landscape_4_3',
];

interface PostCardProps {
  post: Post;
  index: number;
}

export function PostCard({ post, index }: PostCardProps) {
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('zh-CN', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    });
  };

  const imageIndex = index % coverImages.length;
  const heat = Math.floor(Math.random() * 200) + 50;
  const comments = Math.floor(Math.random() * 15) + 1;

  return (
    <article
      className="group cursor-pointer animate-slide-up"
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      <Link
        to={`/post/${post.slug}`}
        className="block bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
      >
        <div className="relative h-40 overflow-hidden">
          <img
            src={coverImages[imageIndex]}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>

        <div className="p-4">
          <div className="flex items-center gap-2 text-xs text-gray-400 mb-2">
            <Calendar size={12} />
            <span>发布于 {formatDate(post.date)}</span>
          </div>

          <h3 className="text-base font-bold text-ink-800 mb-3 line-clamp-2 leading-snug group-hover:text-red-500 transition-colors">
            {post.title}
          </h3>

          <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
            <span className="flex items-center gap-1">
              <Eye size={12} className="text-red-400" />
              {heat} 热度
            </span>
            <span className="flex items-center gap-1">
              <MessageCircle size={12} className="text-red-400" />
              {comments} 评论
            </span>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 bg-gray-50 rounded-full text-[10px] text-gray-500"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </article>
  );
}
