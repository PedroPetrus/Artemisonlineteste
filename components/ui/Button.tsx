
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'danger';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseClasses = 'px-4 py-2 rounded-md font-semibold transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-artemis-dark-2';
  
  const variantClasses = {
    primary: 'bg-artemis-blue text-white hover:bg-blue-500 focus:ring-artemis-blue',
    secondary: 'bg-artemis-gray text-white hover:bg-gray-600 focus:ring-artemis-gray',
    danger: 'bg-red-600 text-white hover:bg-red-500 focus:ring-red-600',
  };

  return (
    <button className={`${baseClasses} ${variantClasses[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
