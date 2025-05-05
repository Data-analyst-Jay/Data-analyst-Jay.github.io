
import React from 'react';
import { cn } from '@/lib/utils';

interface CTAButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  className?: string;
  href?: string;
}

const CTAButton: React.FC<CTAButtonProps> = ({
  variant = 'primary',
  children,
  className,
  href,
  ...props
}) => {
  const buttonClasses = cn(
    variant === 'primary' ? 'btn-primary' : 'btn-secondary',
    className
  );

  if (href) {
    return (
      <a href={href} className={buttonClasses}>
        {children}
      </a>
    );
  }

  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
};

export default CTAButton;
