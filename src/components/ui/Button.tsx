import React from 'react';
import { BUSINESS_INFO } from '../../config';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  as?: 'button' | 'a';
  href?: string;
  children: React.ReactNode;
  className?: string;
  target?: string;
  rel?: string;
}

export function Button({ 
  variant = 'primary', 
  size = 'md', 
  as = 'button', 
  href, 
  children, 
  className = '', 
  ...props 
}: ButtonProps) {
  const baseClasses = "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-sm";
  
  const variants = {
    primary: "bg-rrose-primary text-white hover:bg-rrose-primary-light hover:shadow-lg hover:-translate-y-0.5",
    secondary: "bg-rrose-secondary text-rrose-text hover:bg-[#c9a795] hover:shadow-lg hover:-translate-y-0.5",
    outline: "border border-rrose-primary text-rrose-primary hover:bg-rrose-primary hover:text-white",
    ghost: "text-rrose-primary hover:bg-rrose-primary/5",
  };
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };
  
  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;
  
  if (as === 'a' && href) {
    return (
      <a href={href} className={classes} {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }
  
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
