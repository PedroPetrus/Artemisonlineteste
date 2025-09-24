
import React from 'react';

const ArtemisLogo: React.FC<{ className?: string }> = ({ className = "h-10" }) => {
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <svg viewBox="0 0 150 100" className="h-full w-auto">
        <defs>
          <linearGradient id="blue-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: '#3B82F6', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#2563EB', stopOpacity: 1 }} />
          </linearGradient>
          <linearGradient id="red-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: '#EF4444', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#DC2626', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        
        {/* 'A' Shape */}
        <path d="M 75 10 L 40 90 L 55 90 L 65 65 L 85 65 L 95 90 L 110 90 Z" fill="#8D7B68" />
        <path d="M 70 50 L 80 50 L 75 38 Z" fill="#111827"/>

        {/* Sphere */}
        <circle cx="95" cy="20" r="10" fill="#D1D5DB" />
        
        {/* Red Swoosh */}
        <path d="M 30 70 Q 75 40, 115 65" stroke="url(#red-grad)" strokeWidth="8" fill="none" />

        {/* Blue Swoosh */}
        <path d="M 35 85 C 60 95, 90 95, 115 85" stroke="url(#blue-grad)" strokeWidth="8" fill="none" />
      </svg>
      <span className="text-2xl font-bold tracking-wider text-artemis-white">ARTEMIS</span>
    </div>
  );
};

export default ArtemisLogo;
