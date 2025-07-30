import React from 'react';
import { useTheme } from '../../services/theme-context.jsx';
import { spacing } from '../tokens/spacing.js';
import { textStyles } from '../styles/typography/typography-styles.js';
import { stroke } from '../tokens/stroke.js';

const Divider = ({
  // Content
  label = 'or',
  
  // Layout
  maxWidth = 400,
  gap = spacing.spacing[12],
  
  // Style overrides
  className,
  style,
  ...rest
}) => {
  const { colors } = useTheme();
  
  return (
    <div
      className={className}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: gap,
        width: '100%',
        maxWidth: maxWidth,
        ...style,
      }}
      {...rest}
    >
      <div
        style={{
          flex: 1,
          height: stroke.default,
          backgroundColor: colors.border.default,
        }}
      />
      
      {label && (
        <span
          style={{
            ...textStyles.sm.medium,
            color: colors.text.muted,
            flexShrink: 0,
          }}
        >
          {label}
        </span>
      )}
      
      <div
        style={{
          flex: 1,
          height: stroke.default,
          backgroundColor: colors.border.default,
        }}
      />
    </div>
  );
};

export default Divider;