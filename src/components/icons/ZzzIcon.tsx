import React from 'react';

interface ZzzIconProps {
  className?: string;
}

export const ZzzIcon: React.FC<ZzzIconProps> = ({ className = '' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.25"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M3 16h7l-7 6h7" />
    <path d="M11 8h6l-6 6h6" />
    <path d="M18 2h4l-4 4h4" />
  </svg>
);
