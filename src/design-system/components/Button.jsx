import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../services/theme-context.jsx';
import { spacing } from '../tokens/spacing.js';
import { cornerRadius } from '../tokens/corner-radius.js';
import { textStyles } from '../styles/typography/typography-styles.js';
import { shadows, getShadow } from '../tokens/shadows.js';
import LoadingSpinner from './LoadingSpinner.jsx';

const Button = ({
  // Core variants
  variant = 'default',           // 'default' | 'iconOnly'
  style = 'primary',            // 'primary' | 'secondary' | 'dashed' | 'soft' | 'ghost' | 'ghostMuted' | 'destructive'
  size = 'lg',                  // 'lg' | 'md' | 'sm' | 'xs' | '2xs'
  
  // Content
  label,                        // Text content
  leadIcon,                     // Lead icon component/element
  tailIcon,                     // Tail icon component/element
  
  // States
  disabled = false,
  loading = false,
  
  // Standard props
  onClick,
  className,
  onMouseEnter,
  onMouseLeave,
  onMouseDown,
  onMouseUp,
  onFocus,
  onBlur,
  ...rest
}) => {
  const { colors } = useTheme();
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  // Size configurations
  const sizeConfig = {
    lg: {
      padding: { horizontal: spacing.spacing[14], vertical: spacing.spacing[10] },
      gap: spacing.spacing[6],
      iconSize: 18,
      textStyle: textStyles.sm.medium,
      borderRadius: cornerRadius.borderRadius.sm
    },
    md: {
      padding: { horizontal: spacing.spacing[12], vertical: spacing.spacing[8] },
      gap: spacing.spacing[6],
      iconSize: 16,
      textStyle: textStyles.sm.medium,
      borderRadius: cornerRadius.borderRadius.sm
    },
    sm: {
      padding: { horizontal: spacing.spacing[10], vertical: spacing.spacing[6] },
      gap: spacing.spacing[4],
      iconSize: 16,
      textStyle: textStyles.sm.medium,
      borderRadius: cornerRadius.borderRadius.sm
    },
    xs: {
      padding: { horizontal: spacing.spacing[8], vertical: spacing.spacing[4] },
      gap: spacing.spacing[4],
      iconSize: 12,
      textStyle: textStyles.xs.medium,
      borderRadius: cornerRadius.borderRadius.xs
    },
    '2xs': {
      padding: { horizontal: spacing.spacing[6], vertical: spacing.spacing[2] },
      gap: spacing.spacing[2],
      iconSize: 10,
      textStyle: textStyles.xs.medium,
      borderRadius: cornerRadius.borderRadius.xs
    },
  };

  // Get style configuration for current style + state
  const getStyleConfig = () => {
    const primaryConfig = {
      default: {
        backgroundColor: colors.bg.state.primary,
        color: colors.text.white.default,
        borderColor: 'transparent',
        shadow: shadows.component.default
      },
      hover: {
        backgroundColor: colors.bg.state.primaryHover,
        color: colors.text.white.default,
        borderColor: 'transparent',
        shadow: shadows.component.default
      },
      press: {
        backgroundColor: colors.bg.state.primaryPress,
        color: colors.text.white.default,
        borderColor: 'transparent',
        shadow: shadows.component.default
      },
      focus: {
        backgroundColor: colors.bg.state.primary,
        color: colors.text.white.default,
        borderColor: 'transparent',
        shadow: getShadow('component.focus', colors, { focusType: 'default' })
      },
      loading: {
        backgroundColor: colors.bg.state.primaryLoading,
        color: colors.text.white.default,
        borderColor: 'transparent',
        shadow: shadows.component.default
      },
      disabled: {
        backgroundColor: colors.bg.state.disabled,
        color: colors.text.hint,
        borderColor: colors.border.default,
        shadow: 'none'
      }
    };

    const secondaryConfig = {
      default: {
        backgroundColor: colors.bg.state.secondary,
        color: colors.text.default,
        borderColor: colors.border.default,
        shadow: shadows.component.default
      },
      hover: {
        backgroundColor: colors.bg.state.secondaryHover,
        color: colors.text.default,
        borderColor: colors.border.default,
        shadow: shadows.component.default
      },
      press: {
        backgroundColor: colors.bg.state.secondaryPress,
        color: colors.text.default,
        borderColor: colors.border.default,
        shadow: shadows.component.default
      },
      focus: {
        backgroundColor: colors.bg.state.secondary,
        color: colors.text.default,
        borderColor: colors.border.default,
        shadow: getShadow('component.focus', colors, { focusType: 'default' })
      },
      loading: {
        backgroundColor: colors.bg.state.secondaryLoading,
        color: colors.text.default,
        borderColor: colors.border.default,
        shadow: shadows.component.default
      },
      disabled: {
        backgroundColor: colors.bg.state.disabled,
        color: colors.text.hint,
        borderColor: colors.border.default,
        shadow: 'none'
      }
    };

    const dashedConfig = {
      default: {
        backgroundColor: colors.bg.state.secondary,
        color: colors.text.default,
        borderColor: colors.border.darker,
        shadow: 'none'
      },
      hover: {
        backgroundColor: colors.bg.state.secondaryHover,
        color: colors.text.default,
        borderColor: colors.border.darker,
        shadow: 'none'
      },
      press: {
        backgroundColor: colors.bg.state.secondaryPress,
        color: colors.text.default,
        borderColor: colors.border.darker,
        shadow: 'none'
      },
      focus: {
        backgroundColor: colors.bg.state.secondary,
        color: colors.text.default,
        borderColor: colors.border.darker,
        shadow: getShadow('component.focus', colors, { focusType: 'default' })
      },
      loading: {
        backgroundColor: colors.bg.state.secondaryLoading,
        color: colors.text.default,
        borderColor: colors.border.darker,
        shadow: 'none'
      },
      disabled: {
        backgroundColor: colors.bg.state.disabled,
        color: colors.text.hint,
        borderColor: colors.border.default,
        shadow: 'none'
      }
    };

    const softConfig = {
      default: {
        backgroundColor: colors.bg.state.soft,
        color: colors.text.muted,
        borderColor: 'transparent',
        shadow: 'none'
      },
      hover: {
        backgroundColor: colors.bg.state.softHover,
        color: colors.text.muted,
        borderColor: 'transparent',
        shadow: 'none'
      },
      press: {
        backgroundColor: colors.bg.state.softPress,
        color: colors.text.muted,
        borderColor: 'transparent',
        shadow: 'none'
      },
      focus: {
        backgroundColor: colors.bg.state.soft,
        color: colors.text.muted,
        borderColor: 'transparent',
        shadow: getShadow('component.focus', colors, { focusType: 'default' })
      },
      loading: {
        backgroundColor: colors.bg.state.softLoading,
        color: colors.text.muted,
        borderColor: 'transparent',
        shadow: 'none'
      },
      disabled: {
        backgroundColor: colors.bg.state.disabled,
        color: colors.text.hint,
        borderColor: 'transparent',
        shadow: 'none'
      }
    };

    const ghostConfig = {
      default: {
        backgroundColor: colors.bg.state.ghost,
        color: colors.text.default,
        borderColor: 'transparent',
        shadow: 'none'
      },
      hover: {
        backgroundColor: colors.bg.state.ghostHover,
        color: colors.text.default,
        borderColor: 'transparent',
        shadow: 'none'
      },
      press: {
        backgroundColor: colors.bg.state.ghostPress,
        color: colors.text.default,
        borderColor: 'transparent',
        shadow: 'none'
      },
      focus: {
        backgroundColor: colors.bg.state.ghost,
        color: colors.text.default,
        borderColor: 'transparent',
        shadow: getShadow('component.focus', colors, { focusType: 'default' })
      },
      loading: {
        backgroundColor: colors.bg.state.ghostLoading,
        color: colors.text.default,
        borderColor: 'transparent',
        shadow: 'none'
      },
      disabled: {
        backgroundColor: colors.bg.state.disabled,
        color: colors.text.hint,
        borderColor: 'transparent',
        shadow: 'none'
      }
    };

    const ghostMutedConfig = {
      default: {
        backgroundColor: colors.bg.state.ghost,
        color: colors.text.muted,
        borderColor: 'transparent',
        shadow: 'none'
      },
      hover: {
        backgroundColor: colors.bg.state.ghostHover,
        color: colors.text.muted,
        borderColor: 'transparent',
        shadow: 'none'
      },
      press: {
        backgroundColor: colors.bg.state.ghostPress,
        color: colors.text.muted,
        borderColor: 'transparent',
        shadow: 'none'
      },
      focus: {
        backgroundColor: colors.bg.state.ghost,
        color: colors.text.muted,
        borderColor: 'transparent',
        shadow: getShadow('component.focus', colors, { focusType: 'default' })
      },
      loading: {
        backgroundColor: colors.bg.state.ghostLoading,
        color: colors.text.muted,
        borderColor: 'transparent',
        shadow: 'none'
      },
      disabled: {
        backgroundColor: colors.bg.state.disabled,
        color: colors.text.hint,
        borderColor: 'transparent',
        shadow: 'none'
      }
    };

    const destructiveConfig = {
      default: {
        backgroundColor: colors.bg.state.destructive,
        color: colors.text.white.default,
        borderColor: 'transparent',
        shadow: shadows.component.default
      },
      hover: {
        backgroundColor: colors.bg.state.destructiveHover,
        color: colors.text.white.default,
        borderColor: 'transparent',
        shadow: shadows.component.default
      },
      press: {
        backgroundColor: colors.bg.state.destructivePress,
        color: colors.text.white.default,
        borderColor: 'transparent',
        shadow: shadows.component.default
      },
      focus: {
        backgroundColor: colors.bg.state.destructive,
        color: colors.text.white.default,
        borderColor: 'transparent',
        shadow: getShadow('component.destructiveFocus', colors, { focusType: 'destructive' })
      },
      loading: {
        backgroundColor: colors.bg.state.destructiveLoading,
        color: colors.text.white.default,
        borderColor: 'transparent',
        shadow: shadows.component.default
      },
      disabled: {
        backgroundColor: colors.bg.state.disabled,
        color: colors.text.hint,
        borderColor: colors.border.default,
        shadow: 'none'
      }
    };

    const styleConfigs = { primary: primaryConfig, secondary: secondaryConfig, dashed: dashedConfig, soft: softConfig, ghost: ghostConfig, ghostMuted: ghostMutedConfig, destructive: destructiveConfig };
    return styleConfigs[style] || primaryConfig;
  };

  // Determine current state
  const getCurrentState = () => {
    if (disabled) return 'disabled';
    if (loading) return 'loading';
    if (isFocused) return 'focus';
    if (isPressed) return 'press';
    if (isHovered) return 'hover';
    return 'default';
  };

  const currentState = getCurrentState();
  const styleConfig = getStyleConfig();
  const currentStyles = styleConfig[currentState];
  const sizeStyles = sizeConfig[size];

  // Handle variant-specific logic
  const isIconOnly = variant === 'iconOnly';
  const shouldShowText = !isIconOnly && label;

  // Calculate final styles
  const buttonStyles = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: sizeStyles.gap,
    padding: isIconOnly 
      ? `${sizeStyles.padding.vertical} ${sizeStyles.padding.vertical}` // Square for icon-only
      : `${sizeStyles.padding.vertical} ${sizeStyles.padding.horizontal}`,
    border: currentStyles.borderColor !== 'transparent' 
      ? `1px ${style === 'dashed' ? 'dashed' : 'solid'} ${currentStyles.borderColor}` 
      : '1px solid transparent',
    borderRadius: sizeStyles.borderRadius,
    backgroundColor: currentStyles.backgroundColor,
    color: currentStyles.color,
    boxShadow: currentStyles.shadow,
    cursor: disabled ? 'not-allowed' : 'pointer',
    outline: 'none',
    userSelect: 'none',
    transition: 'all 0.15s ease-in-out',
    textDecoration: 'none',
    boxSizing: 'border-box',
    ...sizeStyles.textStyle,
    // Add text shadow for the "small drop shadow" requirement
    textShadow: currentState !== 'disabled' ? '0 1px 2px rgba(0, 0, 0, 0.1)' : 'none',
  };

  // Event handlers
  const handleMouseEnter = (e) => {
    if (!disabled && !loading) setIsHovered(true);
    onMouseEnter?.(e);
  };

  const handleMouseLeave = (e) => {
    setIsHovered(false);
    setIsPressed(false);
    onMouseLeave?.(e);
  };

  const handleMouseDown = (e) => {
    if (!disabled && !loading) setIsPressed(true);
    onMouseDown?.(e);
  };

  const handleMouseUp = (e) => {
    setIsPressed(false);
    onMouseUp?.(e);
  };

  const handleFocus = (e) => {
    if (!disabled && !loading) setIsFocused(true);
    onFocus?.(e);
  };

  const handleBlur = (e) => {
    setIsFocused(false);
    onBlur?.(e);
  };

  const handleClick = (e) => {
    if (disabled || loading) return;
    onClick?.(e);
  };

  // Icon color based on current state and style
  const getIconColor = () => {
    if (currentState === 'disabled') return colors.icon.disabled;
    
    switch (style) {
      case 'secondary':
      case 'dashed':
      case 'soft':
      case 'ghost':
      case 'ghostMuted':
        return colors.icon.muted;
      case 'primary':
      case 'destructive':
      default:
        return colors.icon.white.default;
    }
  };
  
  const iconColor = getIconColor();

  // Simple transitions for colors only
  const transition = {
    backgroundColor: {
      duration: 0.15,
      ease: "easeOut",
    },
    borderColor: {
      duration: 0.15,
      ease: "easeOut",
    },
    boxShadow: {
      duration: 0.15,
      ease: "easeOut",
    }
  };

  return (
    <motion.button
      style={buttonStyles}
      className={className}
      transition={transition}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onFocus={handleFocus}
      onBlur={handleBlur}
      disabled={disabled || loading}
      aria-disabled={disabled || loading}
      {...rest}
    >
      <AnimatePresence mode="wait">
        {loading && (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            <LoadingSpinner 
              size={sizeStyles.iconSize} 
              color={iconColor}
            />
          </motion.div>
        )}
        
        {!loading && leadIcon && (
          <motion.span
            key="leadIcon"
            style={{ color: iconColor, display: 'flex', alignItems: 'center' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            {typeof leadIcon === 'string' ? (
              <svg width={sizeStyles.iconSize} height={sizeStyles.iconSize} viewBox="0 0 24 24" fill="currentColor">
                <path d={leadIcon} />
              </svg>
            ) : (
              leadIcon
            )}
          </motion.span>
        )}
      </AnimatePresence>
      
      {shouldShowText && (
        <span>
          {loading ? 'Loading...' : label}
        </span>
      )}
      
      <AnimatePresence>
        {!loading && tailIcon && (
          <motion.span
            key="tailIcon"
            style={{ color: iconColor, display: 'flex', alignItems: 'center' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            {typeof tailIcon === 'string' ? (
              <svg width={sizeStyles.iconSize} height={sizeStyles.iconSize} viewBox="0 0 24 24" fill="currentColor">
                <path d={tailIcon} />
              </svg>
            ) : (
              tailIcon
            )}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default Button; 