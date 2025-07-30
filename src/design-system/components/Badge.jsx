import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useTheme } from '../../services/theme-context.jsx';
import { spacing } from '../tokens/spacing.js';
import { cornerRadius } from '../tokens/corner-radius.js';
import { textStyles } from '../styles/typography/typography-styles.js';
import { stroke } from '../tokens/stroke.js';

const Badge = ({
  // Core variants
  variant = 'default',         // 'default' | 'dot' | 'icon'
  size = 'lg',                 // 'sm' | 'lg'
  color = 'green',             // 'green' | 'orange' | 'red'
  
  // Visual options
  border = false,              // Add border
  closeIcon = false,           // Show close icon
  
  // Content
  label,                       // Text content (for default variant)
  icon,                        // Icon component (for icon variant)
  
  // Callbacks
  onClose,                     // Close icon click handler
  onClick,                     // Badge click handler
  
  // Standard props
  className,
  ...rest
}) => {
  const { colors } = useTheme();
  const [isCloseHovered, setIsCloseHovered] = useState(false);

  // Size configurations
  const sizeConfig = {
    lg: {
      // All variants (default, dot, icon) have text
      padding: { horizontal: spacing.spacing[8], vertical: spacing.spacing[4] },
      gap: spacing.spacing[4],
      textStyle: textStyles.xs.medium,
      borderRadius: cornerRadius.borderRadius.sm,
      iconSize: 12,
      dotSize: spacing.spacing[6], // 6px solid dot
      closeIconSize: 14
    },
    sm: {
      // All variants (default, dot, icon) have text
      padding: { horizontal: spacing.spacing[6], vertical: spacing.spacing[2] },
      gap: spacing.spacing[2],
      textStyle: textStyles.xs.medium,
      borderRadius: cornerRadius.borderRadius.xs,
      iconSize: 10,
      dotSize: spacing.spacing[4], // 4px solid dot
      closeIconSize: 12
    }
  };

  // Color configurations
  const getColorConfig = () => {
    const colorMap = {
      green: {
        backgroundColor: colors.bg.badge.green,
        textColor: colors.bg.basic.green.strong,
        borderColor: colors.border.green,
        semanticBorderColor: colors.border.success
      },
      orange: {
        backgroundColor: colors.bg.badge.orange,
        textColor: colors.bg.basic.orange.strong,
        borderColor: colors.border.orange,
        semanticBorderColor: colors.border.warning
      },
      red: {
        backgroundColor: colors.bg.badge.red,
        textColor: colors.bg.basic.red.strong,
        borderColor: colors.border.red,
        semanticBorderColor: colors.border.destructive
      }
    };
    
    return colorMap[color];
  };

  const currentSizeConfig = sizeConfig[size];
  const colorConfig = getColorConfig();

  // Base styles for all variants
  const baseStyles = {
    display: 'inline-flex',
    alignItems: 'center',
    position: 'relative',
    backgroundColor: colorConfig.backgroundColor,
    border: border ? `${stroke.default} solid ${colorConfig.borderColor}` : 'none',
    cursor: onClick ? 'pointer' : 'default',
    transition: 'all 0.2s ease',
    padding: `${currentSizeConfig.padding.vertical} ${currentSizeConfig.padding.horizontal}`,
    gap: currentSizeConfig.gap,
    borderRadius: currentSizeConfig.borderRadius,
    color: colorConfig.textColor,
    ...currentSizeConfig.textStyle,
  };

  // Variant-specific rendering
  const renderBadge = () => {
    return (
      <motion.div
        style={baseStyles}
        whileHover={onClick ? { scale: 1.02 } : {}}
        whileTap={onClick ? { scale: 0.98 } : {}}
        onClick={onClick}
        className={className}
        {...rest}
      >
        {/* Render dot or icon before label */}
        {variant === 'dot' && (
          <div
            style={{
              width: currentSizeConfig.dotSize,
              height: currentSizeConfig.dotSize,
              borderRadius: cornerRadius.borderRadius.full,
              backgroundColor: colorConfig.textColor,
              flexShrink: 0,
            }}
          />
        )}
        
        {variant === 'icon' && icon && (
          React.cloneElement(icon, { 
            size: currentSizeConfig.iconSize,
            color: colorConfig.textColor 
          })
        )}
        
        {/* Label text (required for all variants) */}
        {label}
        
        {/* Close icon (optional) */}
        {closeIcon && onClose && (
          <motion.button
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: spacing.spacing[2],
              marginLeft: spacing.spacing[2],
              marginRight: `-${spacing.spacing[2]}`,
              backgroundColor: 'transparent',
              border: 'none',
              borderRadius: cornerRadius.borderRadius.xs,
              cursor: 'pointer',
              color: isCloseHovered ? colorConfig.textColor : colors.icon.muted,
              transition: 'all 0.15s ease',
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onMouseEnter={() => setIsCloseHovered(true)}
            onMouseLeave={() => setIsCloseHovered(false)}
            onClick={(e) => {
              e.stopPropagation();
              onClose?.();
            }}
            aria-label="Remove badge"
          >
            <X size={currentSizeConfig.closeIconSize} />
          </motion.button>
        )}
      </motion.div>
    );
  };

  return renderBadge();
};

export default Badge;