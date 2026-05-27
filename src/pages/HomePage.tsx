import { useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { LayoutGrid, ChevronDown, Megaphone } from 'lucide-react';
import { PostCard } from '@/components/PostCard';
import { Sidebar } from '@/components/Sidebar';
import { PetalAnimation } from '@/components/PetalAnimation';
import { getAllPosts, getAllTags, getPostsByTag } from '@/data/posts';

export function HomePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTag = searchParams.get('tag');

  const posts = useMemo(() => {
    if (activeTag) {
      return getPostsByTag(activeTag);
    }
    return getAllPosts();
  }, [activeTag]);

  const allTags = getAllTags();

  const scrollToContent = () => {
    const element = document.getElementById('main-content');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      <PetalAnimation />

      <section className="relative h-screen min-h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=beautiful%20coastal%20landscape%20painting%20with%20turquoise%20sea%20and%20golden%20beach%20dreamy%20atmosphere%20soft%20colors%20anime%20style&image_size=landscape_16_9"
            alt="Hero background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />
        </div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg animate-fade-in">
            相信技术的力量
          </h1>
          <p className="text-base md:text-lg text-white/90 font-serif">
            代码改变世界 · 记录成长点滴
          </p>
        </div>

        <div
          className="absolute bottom-[180px] left-1/2 -translate-x-1/2 z-10 cursor-pointer"
          onClick={scrollToContent}
        >
          <div className="flex flex-col items-center gap-2 text-white/80 text-xs animate-bounce">
            <span>SCROLL</span>
            <ChevronDown size={16} />
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-48 overflow-hidden">
          <div className="absolute bottom-0 left-0 w-[200%] h-full animate-[waveMove_8s_linear_infinite]">
            <svg viewBox="0 0 1440 200" preserveAspectRatio="none" className="w-full h-full">
              <path
                fill="#fff"
                d="M0,100 C200,180 400,20 600,100 C800,180 1000,20 1200,100 C1400,180 1440,100 1440,100 L1440,200 L0,200 Z"
              />
            </svg>
          </div>
          <div className="absolute bottom-0 left-0 w-[200%] h-full animate-[waveMove_6s_linear_infinite_reverse] opacity-60">
            <svg viewBox="0 0 1440 200" preserveAspectRatio="none" className="w-full h-full">
              <path
                fill="#fff"
                d="M0,120 C150,60 350,160 550,100 C750,40 950,160 1150,100 C1350,40 1440,120 1440,120 L1440,200 L0,200 Z"
              />
            </svg>
          </div>
          <div className="absolute bottom-0 left-0 w-[200%] h-full animate-[waveMove_10s_linear_infinite] opacity-40">
            <svg viewBox="0 0 1440 200" preserveAspectRatio="none" className="w-full h-full">
              <path
                fill="#fff"
                d="M0,80 C300,160 600,40 900,120 C1200,200 1440,80 1440,80 L1440,200 L0,200 Z"
              />
            </svg>
          </div>
        </div>
      </section>

      <main id="main-content" className="max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-12">
        <div className="grid md:grid-cols-[280px_1fr] gap-6 md:gap-8">
          <Sidebar />

          <section>
            <div className="bg-white rounded-2xl p-4 mb-6 border border-gray-100 shadow-sm">
              <div className="flex items-center gap-2 text-sm">
                <Megaphone size={16} className="text-red-400" />
                <span className="text-ink-600">欢迎光临 - Zoefeng 的个人博客</span>
              </div>
            </div>

            <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
              <h2 className="text-lg font-bold text-ink-800 flex items-center gap-2">
                <LayoutGrid size={18} className="text-red-400" />
                {activeTag ? `标签：${activeTag}` : '最新'}
              </h2>
              <Link
                to="/"
                className="text-sm text-red-400 hover:text-red-500 flex items-center gap-1 transition-colors"
              >
                <span>»</span>
                <span>MORE</span>
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
              {posts.map((post, index) => (
                <PostCard key={post.slug} post={post} index={index} />
              ))}
            </div>
          </section>
        </div>
      </main>

      <style>{`
        @keyframes waveMove {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
