import { Link } from 'react-router-dom';
import { tagColors } from '@/data/profile';
import { cn } from '@/lib/utils';

interface TagBadgeProps {
  tag: string;
  clickable?: boolean;
  size?: 'sm' | 'md';
}

export function TagBadge({ tag, clickable = true, size = 'sm' }: TagBadgeProps) {
  const colorClass = tagColors[tag] || 'bg-paper-100 text-ink-600 border-paper-200';
  const sizeClass = size === 'sm' ? 'px-2 py-0.5 text-xs' : 'px-3 py-1 text-sm';

  const baseClasses = cn(
    'inline-block border rounded transition-all duration-200',
    colorClass,
    sizeClass,
    clickable && 'hover:shadow-sm cursor-pointer'
  );

  if (clickable) {
    return (
      <Link to={`/?tag=${tag}`} className={baseClasses}>
        #{tag}
      </Link>
    );
  }

  return <span className={baseClasses}>#{tag}</span>;
}
