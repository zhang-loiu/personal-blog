import { useState, useEffect } from 'react';
import { ChevronRight, List, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TocItem {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  items: TocItem[];
}

export function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-80px 0px -80% 0px',
        threshold: 0.1,
      }
    );

    items.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [items]);

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsOpen(false);
  };

  if (items.length === 0) return null;

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 lg:hidden z-40 p-3 bg-ink-800 text-white rounded-full shadow-lg hover:bg-ink-700 transition-colors"
        aria-label="Open table of contents"
      >
        <List size={20} />
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-50 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <nav
        className={cn(
          'fixed right-6 top-24 w-56 max-h-[calc(100vh-120px)] overflow-y-auto transition-transform duration-300 z-50',
          'hidden lg:block',
          isOpen && 'lg:hidden block translate-x-0'
        )}
      >
        <div className="bg-white border border-paper-200 rounded-sm shadow-sm p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold text-ink-800 flex items-center gap-2">
              <List size={16} />
              目录
            </h3>
            <button
              onClick={() => setIsOpen(false)}
              className="lg:hidden p-1 text-ink-500 hover:text-ink-800"
            >
              <X size={16} />
            </button>
          </div>

          <ul className="space-y-1">
            {items.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToHeading(item.id)}
                  className={cn(
                    'w-full text-left text-sm py-1.5 px-2 rounded transition-all duration-200 flex items-center gap-1',
                    item.level === 3 && 'pl-4',
                    activeId === item.id
                      ? 'text-accent-600 bg-accent-50 font-medium'
                      : 'text-ink-500 hover:text-ink-800 hover:bg-paper-100'
                  )}
                >
                  {item.level > 1 && <ChevronRight size={12} className="flex-shrink-0" />}
                  <span className="line-clamp-2">{item.text}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}
