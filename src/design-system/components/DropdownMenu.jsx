import React, { useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../services/theme-context.jsx';
import { spacing } from '../tokens/spacing.js';
import { cornerRadius } from '../tokens/corner-radius.js';
import { textStyles } from '../styles/typography/typography-styles.js';
import { getShadow } from '../tokens/shadows.js';

const DropdownMenu = ({
  // Core props
  isOpen = false,
  onClose,
  
  // Items configuration
  items = [], // Array of { label, action, type: 'default' | 'destructive' }
  
  // Positioning
  position = 'bottom-right', // 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left'
  
  // Styling
  minWidth = '120px',
  
  // Standard props
  className = '',
  style = {},
  ...rest
}) => {
  const { colors } = useTheme();
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        onClose?.();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen, onClose]);

  // Handle item click
  const handleItemClick = (item) => {
    onClose?.();
    if (item.onClick) {
      item.onClick();
    }
  };

  // Position styles
  const getPositionStyles = () => {
    const baseStyles = {
      position: 'absolute',
      zIndex: 50,
    };

    switch (position) {
      case 'bottom-right':
        return {
          ...baseStyles,
          top: '100%',
          right: 0,
          marginTop: spacing.spacing[4],
        };
      case 'bottom-left':
        return {
          ...baseStyles,
          top: '100%',
          left: 0,
          marginTop: spacing.spacing[4],
        };
      case 'top-right':
        return {
          ...baseStyles,
          bottom: '100%',
          right: 0,
          marginBottom: spacing.spacing[4],
        };
      case 'top-left':
        return {
          ...baseStyles,
          bottom: '100%',
          left: 0,
          marginBottom: spacing.spacing[4],
        };
      default:
        return {
          ...baseStyles,
          top: '100%',
          right: 0,
          marginTop: spacing.spacing[4],
        };
    }
  };

  // Animation variants
  const menuVariants = {
    hidden: {
      opacity: 0,
      y: position.includes('top') ? 8 : -8,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
    },
    exit: {
      opacity: 0,
      y: position.includes('top') ? 8 : -8,
      scale: 0.95,
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={dropdownRef}
          className={className}
          style={{
            ...getPositionStyles(),
            minWidth,
            backgroundColor: colors.bg.default,
            borderRadius: cornerRadius.borderRadius.md,
            boxShadow: getShadow('regular.modalMd', colors, { withBorder: true }),
            overflow: 'hidden',
            ...style,
          }}
          variants={menuVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: 0.15 }}
          {...rest}
        >
          {items.map((item, index) => {
            const isDestructive = item.type === 'destructive';
            
            return (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  handleItemClick(item);
                }}
                style={{
                  width: '100%',
                  padding: `${spacing.spacing[8]} ${spacing.spacing[12]}`,
                  border: 'none',
                  backgroundColor: 'transparent',
                  color: isDestructive ? colors.text.destructive : colors.text.default,
                  textAlign: 'left',
                  cursor: 'pointer',
                  ...textStyles.sm.normal,
                  transition: 'background-color 0.15s ease-in-out',
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = colors.bg.subtle;
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                }}
              >
                {item.label}
              </button>
            );
          })}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DropdownMenu;