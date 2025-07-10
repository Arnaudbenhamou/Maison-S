import React from 'react';
import { motion } from 'framer-motion';

interface AccessibleButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  target?: string;
  rel?: string;
  className?: string;
  'aria-label'?: string;
  'aria-describedby'?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  children,
  onClick,
  href,
  target,
  rel,
  className = '',
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  disabled = false,
  type = 'button'
}) => {
  const baseClasses = `
    inline-flex items-center justify-center
    px-8 py-3 rounded-full
    font-medium text-center
    transition-all duration-300
    focus:outline-none focus:ring-2 focus:ring-sealiah-eucalyptus focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
    ${className}
  `;

  const motionProps = {
    whileHover: disabled ? {} : { scale: 1.05 },
    whileTap: disabled ? {} : { scale: 0.95 },
    transition: { duration: 0.2 }
  };

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={rel}
        className={baseClasses}
        aria-label={ariaLabel}
        aria-describedby={ariaDescribedBy}
        onMouseDown={(e) => e.preventDefault()} // Empêche le focus au clic
        {...motionProps}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseClasses}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      onMouseDown={(e) => e.preventDefault()} // Empêche le focus au clic
      {...motionProps}
    >
      {children}
    </motion.button>
  );
};

export default AccessibleButton;