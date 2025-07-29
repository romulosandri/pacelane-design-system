import React from 'react';

const LoadingSpinner = ({ size = 18, color = 'currentColor' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className="animate-spin"
    style={{ color }}
  >
    <circle
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
      strokeDasharray="32"
      strokeDashoffset="32"
      strokeLinecap="round"
      opacity="0.3"
    >
      <animate
        attributeName="stroke-dasharray"
        dur="2s"
        values="0 32;16 16;0 32;0 32"
        repeatCount="indefinite"
      />
      <animate
        attributeName="stroke-dashoffset"
        dur="2s"
        values="0;-16;-32;-32"
        repeatCount="indefinite"
      />
    </circle>
  </svg>
);

export default LoadingSpinner; 