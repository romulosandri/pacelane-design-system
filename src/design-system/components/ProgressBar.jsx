import React from 'react';
import { useTheme } from '../../services/theme-context.jsx';
import { spacing } from '../tokens/spacing.js';
import { cornerRadius } from '../tokens/corner-radius.js';

const ProgressBar = ({ 
  totalSteps = 7, 
  currentStep = 1, 
  width = 400,
  className = '',
  ...rest 
}) => {
  const { colors } = useTheme();
  
  // Debug logging to ensure colors are accessible
  console.log('ProgressBar colors:', colors);
  
  // Ensure currentStep is within valid range
  const validCurrentStep = Math.max(1, Math.min(currentStep, totalSteps));
  
  // Create array of steps
  const steps = Array.from({ length: totalSteps }, (_, index) => ({
    id: index + 1,
    isActive: index + 1 <= validCurrentStep
  }));

  return (
    <div
      className={`progress-bar ${className}`}
      style={{
        display: 'flex',
        gap: spacing.spacing[8],
        width: `${width}px`,
        height: '4px',
        padding: 0,
        ...rest.style
      }}
      {...rest}
    >
      {steps.map((step) => (
        <div
          key={step.id}
          className="progress-step"
          style={{
            flex: 1,
            height: '4px',
            backgroundColor: step.isActive 
              ? colors.bg.basic.blue.accent 
              : colors.bg.basic.gray.alpha10,
            borderRadius: cornerRadius.borderRadius.full,
            transition: 'background-color 0.2s ease-in-out'
          }}
        />
      ))}
    </div>
  );
};

export default ProgressBar;