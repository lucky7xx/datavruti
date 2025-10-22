import { ReactNode } from 'react';

interface GlowCardProps {
  children: ReactNode;
  gradientFrom?: string;
  gradientVia?: string;
  gradientTo?: string;
  className?: string;
  glowOpacity?: number;
}

export default function GlowCard({
  children,
  gradientFrom = 'from-primary-600',
  gradientVia = 'via-accent-600',
  gradientTo = 'to-secondary-600',
  className = '',
  glowOpacity = 20,
}: GlowCardProps) {
  return (
    <div className="group relative">
      <div
        className={`absolute -inset-1 bg-gradient-to-r ${gradientFrom} ${gradientVia} ${gradientTo} rounded-2xl opacity-0 group-hover:opacity-100 blur transition-all duration-500`}
      ></div>
      <div
        className={`relative bg-white rounded-2xl p-8 md:p-10 shadow-lg hover:shadow-xl transition-all duration-500 border border-neutral-100 ${className}`}
      >
        {children}
      </div>
    </div>
  );
}
