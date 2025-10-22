interface AnimatedBackgroundProps {
  variant?: 'subtle' | 'vibrant';
  className?: string;
}

export default function AnimatedBackground({
  variant = 'subtle',
  className = '',
}: AnimatedBackgroundProps) {
  const opacity = variant === 'vibrant' ? '20' : '8';

  return (
    <>
      {/* Gradient overlay */}
      <div className={`absolute inset-0 bg-gradient-to-b from-slate-900/50 via-transparent to-slate-900/50 ${className}`}></div>

      {/* Animated orbs */}
      <div className={`absolute top-0 right-1/4 w-96 h-96 bg-primary-500/${opacity} rounded-full blur-3xl ${variant === 'vibrant' ? 'animate-blob' : ''}`}></div>
      <div className={`absolute bottom-0 left-1/4 w-96 h-96 bg-accent-500/${opacity} rounded-full blur-3xl ${variant === 'vibrant' ? 'animate-blob animation-delay-2000' : ''}`}></div>
      {variant === 'vibrant' && (
        <div className={`absolute top-1/2 left-1/2 w-96 h-96 bg-secondary-500/15 rounded-full blur-3xl animate-blob animation-delay-4000`}></div>
      )}
    </>
  );
}
