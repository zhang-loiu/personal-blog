import { useMemo, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { TableOfContents } from '@/components/TableOfContents';
import { TagBadge } from '@/components/TagBadge';
import { getPostBySlug } from '@/data/posts';
import { getArticleContent } from '@/data/articles';

interface TocItem {
  id: string;
  text: string;
  level: number;
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\u4e00-\u9fa5]+/g, '-')
    .replace(/^-|-$/g, '');
}

function extractToc(content: string): TocItem[] {
  const headingRegex = /^(#{2,3})\s+(.+)$/gm;
  const toc: TocItem[] = [];
  let match;

  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length;
    const text = match[2].trim();
    toc.push({
      id: slugify(text),
      text,
      level,
    });
  }

  return toc;
}

export function PostPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const post = useMemo(() => {
    if (!slug) return null;
    return getPostBySlug(slug);
  }, [slug]);

  const content = useMemo(() => {
    if (!slug) return '';
    return getArticleContent(slug) || '';
  }, [slug]);

  const tocItems = useMemo(() => {
    return extractToc(content);
  }, [content]);

  useEffect(() => {
    if (post) {
      document.title = `${post.title} - Zoefeng's Blog`;
    }
    window.scrollTo(0, 0);
  }, [post]);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="font-display text-2xl text-ink-800 mb-4">文章不存在</h1>
          <button onClick={() => navigate('/')} className="btn-ghost">
            返回首页
          </button>
        </div>
      </div>
    );
  }

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('zh-CN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <TableOfContents items={tocItems} />

      <article className="container max-w-3xl mx-auto px-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-ink-500 hover:text-accent-600 transition-colors mb-8 animate-fade-in"
        >
          <ArrowLeft size={16} />
          返回首页
        </Link>

        <header className="mb-10 animate-slide-up">
          <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-ink-500">
            <span className="flex items-center gap-1">
              <Calendar size={14} />
              {formatDate(post.date)}
            </span>
            <span className="flex items-center gap-1">
              <Clock size={14} />
              {post.readTime} 分钟阅读
            </span>
          </div>

          <h1 className="font-display text-3xl md:text-4xl font-semibold text-ink-900 mb-6 text-balance">
            {post.title}
          </h1>

          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <TagBadge key={tag} tag={tag} size="md" />
            ))}
          </div>
        </header>

        <div className="divider mb-10" />

        <div className="prose-blog animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              h2: ({ children }) => {
                const text = String(children);
                return <h2 id={slugify(text)}>{children}</h2>;
              },
              h3: ({ children }) => {
                const text = String(children);
                return <h3 id={slugify(text)}>{children}</h3>;
              },
              code({ node, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || '');
                const inline = !match;
                if (!inline && match) {
                  const Highlighter = SyntaxHighlighter as any;
                  return (
                    <Highlighter
                      style={oneLight}
                      language={match[1]}
                      PreTag="div"
                      customStyle={{
                        margin: '1.5rem 0',
                        borderRadius: '0.25rem',
                        fontSize: '0.875rem',
                      }}
                      {...props}
                    >
                      {String(children).replace(/\n$/, '')}
                    </Highlighter>
                  );
                }
                return (
                  <code className={className} {...props}>
                    {children}
                  </code>
                );
              },
            }}
          >
            {content}
          </ReactMarkdown>
        </div>

        <div className="divider my-12" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link to="/" className="btn-ghost">
            <ArrowLeft className="mr-2" size={16} />
            浏览更多文章
          </Link>

          <p className="text-sm text-ink-400">
            感谢阅读，欢迎分享和讨论
          </p>
        </div>
      </article>
    </div>
  );
}
