import React from 'react';
import { motion } from 'framer-motion';

const LoadingSpinner = ({ size = 18, color = 'currentColor' }) => (
  <motion.svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    style={{ color }}
    animate={{ rotate: 360 }}
    transition={{
      duration: 1,
      repeat: Infinity,
      ease: "linear"
    }}
  >
    <motion.circle
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
      fill="none"
      opacity="0.3"
    />
    <motion.circle
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
      fill="none"
      strokeDasharray="63"
      strokeDashoffset="63"
      animate={{
        strokeDashoffset: [63, 0, 63],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  </motion.svg>
);

export default LoadingSpinner; 