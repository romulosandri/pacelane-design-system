import React, { useState } from 'react';
import { useTheme } from '../../services/theme-context.jsx';
import { spacing } from '../tokens/spacing.js';
import { cornerRadius } from '../tokens/corner-radius.js';
import { textStyles } from '../styles/typography/typography-styles.js';
import { getShadow } from '../tokens/shadows.js';

const Chips = ({
  // Core variants
  style = 'default',            // 'default' | 'soft' | 'ghost' | 'ghostMuted'
  size = 'lg',                  // 'lg' | 'md' | 'sm'
  
  // Content
  label,                        // Text content
  leadingIcon,                  // Leading icon component/element
  
  // States
  selected = false,
  disabled = false,
  
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
      padding: { horizontal: spacing.spacing[10], vertical: spacing.spacing[6] },
      gap: spacing.spacing[4],
      iconSize: 16,
      textStyle: textStyles.sm.medium,
      borderRadius: cornerRadius.borderRadius.full
    },
    md: {
      padding: { horizontal: spacing.spacing[8], vertical: spacing.spacing[4] },
      gap: spacing.spacing[4],
      iconSize: 14,
      textStyle: textStyles.sm.medium,
      borderRadius: cornerRadius.borderRadius.full
    },
    sm: {
      padding: { horizontal: spacing.spacing[6], vertical: spacing.spacing[4] },
      gap: spacing.spacing[4],
      iconSize: 12,
      textStyle: textStyles.xs.medium,
      borderRadius: cornerRadius.borderRadius.full
    },
  };

  // Get style configuration for current style + state
  const getStyleConfig = () => {
    const defaultConfig = {
      default: {
        backgroundColor: colors.bg.state.secondary,
        color: colors.text.muted,
        borderColor: colors.border.darker,
        shadow: 'none'
      },
      hover: {
        backgroundColor: colors.bg.state.secondaryHover,
        color: colors.text.subtle,
        borderColor: colors.border.darker,
        shadow: 'none'
      },
      press: {
        backgroundColor: colors.bg.state.secondaryPress,
        color: colors.text.subtle,
        borderColor: colors.border.darker,
        shadow: 'none'
      },
      focus: {
        backgroundColor: colors.bg.state.secondary,
        color: colors.text.muted,
        borderColor: colors.border.darker,
        shadow: getShadow('', colors, { focusType: 'misc' })
      },
      selected: {
        backgroundColor: colors.bg.badge.blue,
        color: colors.bg.basic.blue.strong,
        borderColor: colors.border.blue,
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
        shadow: getShadow('', colors, { focusType: 'misc' })
      },
      selected: {
        backgroundColor: colors.bg.badge.blue,
        color: colors.bg.basic.blue.strong,
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
        shadow: getShadow('', colors, { focusType: 'misc' })
      },
      selected: {
        backgroundColor: colors.bg.badge.blue,
        color: colors.bg.basic.blue.strong,
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
        shadow: getShadow('', colors, { focusType: 'misc' })
      },
      selected: {
        backgroundColor: colors.bg.badge.blue,
        color: colors.bg.basic.blue.strong,
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

    const styleConfigs = { 
      default: defaultConfig, 
      soft: softConfig, 
      ghost: ghostConfig, 
      ghostMuted: ghostMutedConfig 
    };
    return styleConfigs[style] || defaultConfig;
  };

  // Determine current state
  const getCurrentState = () => {
    if (disabled) return 'disabled';
    if (selected) return 'selected';
    if (isFocused) return 'focus';
    if (isPressed) return 'press';
    if (isHovered) return 'hover';
    return 'default';
  };

  const currentState = getCurrentState();
  const styleConfig = getStyleConfig();
  const currentStyles = styleConfig[currentState];
  const sizeStyles = sizeConfig[size];

  // Calculate final styles
  const chipStyles = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: sizeStyles.gap,
    padding: `${sizeStyles.padding.vertical} ${sizeStyles.padding.horizontal}`,
    border: currentStyles.borderColor !== 'transparent' 
      ? `1px solid ${currentStyles.borderColor}` 
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
    ...sizeStyles.textStyle,
  };

  // Event handlers
  const handleMouseEnter = (e) => {
    if (!disabled) setIsHovered(true);
    onMouseEnter?.(e);
  };

  const handleMouseLeave = (e) => {
    setIsHovered(false);
    setIsPressed(false);
    onMouseLeave?.(e);
  };

  const handleMouseDown = (e) => {
    if (!disabled) setIsPressed(true);
    onMouseDown?.(e);
  };

  const handleMouseUp = (e) => {
    setIsPressed(false);
    onMouseUp?.(e);
  };

  const handleFocus = (e) => {
    if (!disabled) setIsFocused(true);
    onFocus?.(e);
  };

  const handleBlur = (e) => {
    setIsFocused(false);
    onBlur?.(e);
  };

  const handleClick = (e) => {
    if (disabled) return;
    onClick?.(e);
  };

  // Icon color based on current state and style
  const getIconColor = () => {
    if (currentState === 'disabled') return colors.icon.disabled;
    if (currentState === 'selected') return colors.bg.basic.blue.accent;
    
    switch (style) {
      case 'default':
      case 'soft':
      case 'ghost':
      case 'ghostMuted':
      default:
        return colors.icon.muted;
    }
  };
  
  const iconColor = getIconColor();

  return (
    <div
      style={chipStyles}
      className={className}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onFocus={handleFocus}
      onBlur={handleBlur}
      disabled={disabled}
      aria-disabled={disabled}
      tabIndex={disabled ? -1 : 0}
      role="button"
      {...rest}
    >
      {leadingIcon && (
        <span
          style={{ color: iconColor, display: 'flex', alignItems: 'center' }}
        >
          {typeof leadingIcon === 'string' ? (
            <svg width={sizeStyles.iconSize} height={sizeStyles.iconSize} viewBox="0 0 24 24" fill="currentColor">
              <path d={leadingIcon} />
            </svg>
          ) : (
            leadingIcon
          )}
        </span>
      )}
      
      {label && (
        <span>
          {label}
        </span>
      )}
    </div>
  );
};

export default Chips; 