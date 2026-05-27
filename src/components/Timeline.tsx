import type { TimelineItem } from '@/types';

interface TimelineProps {
  items: TimelineItem[];
}

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative">
      <div className="absolute left-4 top-0 bottom-0 w-px bg-paper-200" />
      
      <div className="space-y-8">
        {items.map((item, index) => (
          <div
            key={index}
            className="relative pl-12 animate-slide-up"
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <div className="absolute left-2 top-1 w-5 h-5 rounded-full bg-accent-500 border-4 border-paper-50" />
            
            <div className="card p-5">
              <span className="inline-block text-sm font-medium text-accent-600 mb-2">
                {item.year}
              </span>
              <h3 className="text-lg font-serif font-semibold text-ink-800 mb-2">
                {item.title}
              </h3>
              <p className="text-ink-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
