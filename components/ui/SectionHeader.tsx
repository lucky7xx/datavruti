import { ReactNode } from 'react';

interface SectionHeaderProps {
  badge?: string;
  title: string | ReactNode;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

export default function SectionHeader({
  badge,
  title,
  subtitle,
  align = 'center',
  className = '',
}: SectionHeaderProps) {
  const alignmentClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
  };

  return (
    <div className={`flex flex-col ${alignmentClasses[align]} ${className}`}>
      {badge && (
        <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-primary-100 to-accent-100 rounded-full text-sm font-semibold text-primary-700 mb-4">
          {badge}
        </span>
      )}
      {typeof title === 'string' ? (
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-neutral-900 via-primary-800 to-neutral-900 bg-clip-text text-transparent mb-4">
          {title}
        </h2>
      ) : (
        title
      )}
      {subtitle && (
        <p className="text-lg text-neutral-600 max-w-3xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
