import { Search, Star, FileText, Folder, Eye } from 'lucide-react';
import { profile, skills } from '@/data/profile';

export function Sidebar() {
  return (
    <aside className="space-y-5">
      <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-2xl p-6 text-center border border-sky-100">
        <div className="w-24 h-24 rounded-full bg-white mx-auto mb-4 flex items-center justify-center shadow-lg overflow-hidden border-4 border-white">
          <img
            src={profile.avatar}
            alt={profile.name}
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="text-xl font-bold text-ink-800 mb-1">{profile.name}</h3>
        <p className="text-sm text-ink-500 mb-4">{profile.title}</p>
        
        <div className="flex justify-around">
          <div className="text-center">
            <div className="text-2xl font-bold text-ink-800">6</div>
            <div className="text-xs text-ink-500 mt-1">文章</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-ink-800">7</div>
            <div className="text-xs text-ink-500 mt-1">分类</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-ink-800">27K</div>
            <div className="text-xs text-ink-500 mt-1">访问量</div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
        <h4 className="text-sm font-bold text-ink-800 mb-3 flex items-center gap-2">
          <Search size={16} className="text-red-400" />
          搜索
        </h4>
        <div className="flex items-center gap-2 px-4 py-2.5 bg-gray-50 rounded-full border border-gray-200">
          <Search size={16} className="text-gray-400" />
          <input
            type="text"
            placeholder="搜索文章..."
            className="flex-1 bg-transparent outline-none text-sm text-ink-700 placeholder-gray-400"
          />
        </div>
      </div>

      <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
        <h4 className="text-sm font-bold text-ink-800 mb-3 flex items-center gap-2">
          <Star size={16} className="text-yellow-400" />
          推荐位
        </h4>
        <div className="rounded-xl overflow-hidden cursor-pointer group">
          <img
            src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=dreamy%20digital%20art%20with%20warm%20sunset%20colors%20and%20soft%20lighting%20aesthetic&image_size=landscape_4_3"
            alt="推荐"
            className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>

      <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
        <h4 className="text-sm font-bold text-ink-800 mb-3 flex items-center gap-2">
          <Folder size={16} className="text-blue-400" />
          技能标签
        </h4>
        <div className="flex flex-wrap gap-2">
          {skills.slice(0, 8).map((skill) => (
            <span
              key={skill.name}
              className="px-3 py-1 bg-gray-50 rounded-full text-xs text-ink-600 border border-gray-100 hover:bg-gray-100 cursor-pointer transition-colors"
            >
              {skill.name}
            </span>
          ))}
        </div>
      </div>
    </aside>
  );
}
