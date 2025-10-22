import { ReactNode } from 'react';

interface IconBadgeProps {
  icon: ReactNode;
  gradientFrom?: string;
  gradientTo?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function IconBadge({
  icon,
  gradientFrom = 'from-primary-500',
  gradientTo = 'to-accent-600',
  size = 'md',
  className = '',
}: IconBadgeProps) {
  const sizeClasses = {
    sm: 'w-10 h-10',
    md: 'w-12 h-12',
    lg: 'w-14 h-14',
  };

  const iconSizeClasses = {
    sm: 'w-5 h-5',
    md: 'w-6 h-6',
    lg: 'w-7 h-7',
  };

  return (
    <div className={`${sizeClasses[size]} bg-gradient-to-br ${gradientFrom} ${gradientTo} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 ${className}`}>
      <div className={iconSizeClasses[size]}>
        {icon}
      </div>
    </div>
  );
}
