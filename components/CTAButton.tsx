import Link from 'next/link';

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'outline-light';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  type?: 'button' | 'submit';
  onClick?: () => void;
}

export default function CTAButton({
  href,
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  type = 'button',
  onClick,
}: CTAButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center text-center font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95';

  const variantClasses = {
    primary: 'bg-gradient-to-r from-primary-600 via-secondary-600 to-primary-700 text-white hover:from-primary-700 hover:via-secondary-700 hover:to-primary-800 shadow-lg hover:shadow-2xl hover:shadow-secondary-500/50',
    secondary: 'bg-gradient-to-r from-secondary-600 to-secondary-700 text-white hover:from-secondary-700 hover:to-secondary-800 shadow-lg hover:shadow-xl hover:shadow-secondary-500/40',
    outline: 'border-2 border-accent-600 text-accent-600 hover:bg-accent-50 hover:border-accent-700 shadow-sm hover:shadow-md',
    'outline-light': 'border-2 border-white text-white hover:bg-white/10 backdrop-blur-sm hover:shadow-lg hover:shadow-white/20',
  };

  const sizeClasses = {
    sm: 'px-5 py-2.5 text-sm',
    md: 'px-7 py-3.5 text-base',
    lg: 'px-10 py-4 text-lg',
  };

  const widthClass = fullWidth ? 'w-full' : '';

  const className = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass}`;

  if (onClick) {
    return (
      <button type={type} onClick={onClick} className={className}>
        {children}
      </button>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
