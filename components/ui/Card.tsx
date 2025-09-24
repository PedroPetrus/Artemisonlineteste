
import React from 'react';

interface CardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ title, children, className = '' }) => {
  return (
    <div className={`bg-artemis-dark-2 rounded-lg shadow-lg p-6 ${className}`}>
      <h3 className="text-xl font-bold text-artemis-light-blue mb-4">{title}</h3>
      <div>{children}</div>
    </div>
  );
};

export default Card;
