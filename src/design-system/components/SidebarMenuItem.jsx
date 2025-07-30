import React, { useState } from 'react';
import { useTheme } from '../../services/theme-context.jsx';
import { spacing } from '../tokens/spacing.js';
import { cornerRadius } from '../tokens/corner-radius.js';
import { textStyles } from '../styles/typography/typography-styles.js';
import { shadows } from '../tokens/shadows.js';

const SidebarMenuItem = ({
  // Core variants
  variant = 'default',           // 'default' | 'iconOnly'
  state = 'default',             // 'default' | 'hover' | 'active'
  
  // Content
  label,                         // Text content (for default variant)
  leadIcon,                      // Leading icon component/element
  trailingIcon,                  // Trailing icon component/element (usually ChevronRight)
  
  // States
  disabled = false,
  
  // Standard props
  onClick,
  className,
  onMouseEnter,
  onMouseLeave,
  ...rest
}) => {
  const { colors } = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  // Determine effective state
  const effectiveState = disabled ? 'disabled' : (state === 'active' ? 'active' : (isHovered ? 'hover' : 'default'));

  // Get colors based on state
  const getBackgroundColor = () => {
    switch (effectiveState) {
      case 'active':
        return colors.bg.state.menuItemActive;
      case 'hover':
        return colors.bg.state.ghostHover;
      case 'disabled':
        return colors.bg.state.ghost;
      default:
        return colors.bg.state.ghost;
    }
  };

  const getTextColor = () => {
    if (disabled) return colors.text.muted;
    return effectiveState === 'active' ? colors.text.accent : colors.text.subtle;
  };

  const getIconColor = () => {
    if (disabled) return colors.icon.disabled;
    return effectiveState === 'active' ? colors.text.accent : colors.icon.subtle;
  };

  // Size configurations
  const sizeConfig = {
    default: {
      padding: { horizontal: spacing.spacing[12], vertical: spacing.spacing[6] },
      gap: spacing.spacing[6],
      iconSize: 18,
      width: 'auto',
      height: 'auto',
      minHeight: '32px'  // Based on padding + text line height (note: 12px horizontal padding)
    },
    iconOnly: {
      padding: { horizontal: spacing.spacing[6], vertical: spacing.spacing[6] },
      gap: spacing.spacing[6],
      iconSize: 18,
      width: spacing.spacing[40],
      height: spacing.spacing[40],
      minHeight: spacing.spacing[40]
    }
  };

  const config = sizeConfig[variant] || sizeConfig.default;

  // Handle mouse events
  const handleMouseEnter = (e) => {
    if (!disabled) {
      setIsHovered(true);
    }
    onMouseEnter?.(e);
  };

  const handleMouseLeave = (e) => {
    setIsHovered(false);
    onMouseLeave?.(e);
  };

  const handleClick = (e) => {
    if (!disabled) {
      onClick?.(e);
    }
  };

  // Clone icons with appropriate props
  const cloneIcon = (icon, key) => {
    if (!icon) return null;
    return React.cloneElement(icon, {
      key,
      size: config.iconSize,
      color: getIconColor(),
      style: {
        flexShrink: 0,
        ...icon.props?.style
      }
    });
  };

  const baseStyles = {
    // Layout
    display: 'flex',
    alignItems: 'center',
    justifyContent: variant === 'iconOnly' ? 'center' : 'flex-start',
    gap: config.gap,
    width: config.width,
    height: config.height,
    minHeight: config.minHeight,
    padding: `${config.padding.vertical} ${config.padding.horizontal}`,
    
    // Appearance
    backgroundColor: getBackgroundColor(),
    borderRadius: cornerRadius.borderRadius.sm,
    border: effectiveState === 'active' ? `1px solid ${colors.border.menuItem}` : 'none',
    outline: 'none',
    boxShadow: effectiveState === 'active' ? shadows.regular.card : 'none',
    
    // Typography
    ...(effectiveState === 'active' ? textStyles.sm.bold : textStyles.sm.medium),
    color: getTextColor(),
    textDecoration: 'none',
    
    // Cursor
    cursor: disabled ? 'not-allowed' : 'pointer',
    
    // User interaction
    userSelect: 'none',
    WebkitTapHighlightColor: 'transparent'
  };

  return (
    <button
      type="button"
      disabled={disabled}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={baseStyles}
      {...rest}
    >
      {/* Leading Icon */}
      {leadIcon && cloneIcon(leadIcon, 'lead-icon')}
      
      {/* Label (only for default variant) */}
      {variant === 'default' && label && (
        <span
          style={{
            flex: 1,
            textAlign: 'left',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap'
          }}
        >
          {label}
        </span>
      )}
      
      {/* Trailing Icon (only for default variant) */}
      {variant === 'default' && trailingIcon && cloneIcon(trailingIcon, 'trailing-icon')}
    </button>
  );
};

export default SidebarMenuItem;