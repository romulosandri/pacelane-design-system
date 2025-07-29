import React, { useState } from 'react';
import { useTheme } from '../../services/theme-context.jsx';
import { spacing } from '../tokens/spacing.js';
import { cornerRadius } from '../tokens/corner-radius.js';
import { textStyles } from '../styles/typography/typography-styles.js';
import { shadows, getShadow } from '../tokens/shadows.js';
import { stroke } from '../tokens/stroke.js';

const ButtonGroup = ({
  // Core variants
  type = 'default',             // 'default' (text + leading icon) | 'iconOnly'
  size = 'lg',                  // 'lg' | 'md' | 'sm' | 'xs' | '2xs'
  
  // Content
  items = [],                   // Array of button objects: [{ id, label?, leadIcon?, disabled?, onClick? }]
  
  // Standard props
  className,
  ...rest
}) => {
  const { colors } = useTheme();
  const [hoveredItem, setHoveredItem] = useState(null);
  const [pressedItem, setPressedItem] = useState(null);
  const [focusedItem, setFocusedItem] = useState(null);

  // Size configurations for button items
  const sizeConfig = {
    lg: {
      padding: { horizontal: spacing.spacing[14], vertical: spacing.spacing[10] },
      gap: spacing.spacing[6],
      iconSize: 18,
      textStyle: textStyles.sm.medium,
    },
    md: {
      padding: { horizontal: spacing.spacing[12], vertical: spacing.spacing[8] },
      gap: spacing.spacing[6],
      iconSize: 16,
      textStyle: textStyles.sm.medium,
    },
    sm: {
      padding: { horizontal: spacing.spacing[10], vertical: spacing.spacing[6] },
      gap: spacing.spacing[4],
      iconSize: 16,
      textStyle: textStyles.sm.medium,
    },
    xs: {
      padding: { horizontal: spacing.spacing[8], vertical: spacing.spacing[4] },
      gap: spacing.spacing[4],
      iconSize: 12,
      textStyle: textStyles.xs.medium,
    },
    '2xs': {
      padding: { horizontal: spacing.spacing[6], vertical: spacing.spacing[2] },
      gap: spacing.spacing[2],
      iconSize: 10,
      textStyle: textStyles.xs.medium,
    },
  };

  const currentSizeConfig = sizeConfig[size];

  // Container styles for ButtonGroup
  const containerStyles = {
    backgroundColor: colors.bg.state.secondary,
    border: `${stroke.default} solid ${colors.border.darker}`,
    borderRadius: cornerRadius.borderRadius.md,
    boxShadow: shadows.component.default,
    display: 'flex',
    alignItems: 'center',
    gap: 0,
    padding: 0,
    overflow: 'hidden',
    width: 'fit-content'
  };

  // Get button item styles based on state
  const getButtonItemStyles = (item, index, isHovered, isPressed, isFocused) => {
    const isLastItem = index === items.length - 1;
    
    let backgroundColor = colors.bg.state.ghost;
    let textColor = colors.text.subtle;
    let iconColor = colors.icon.muted;
    
    if (item.disabled) {
      backgroundColor = colors.bg.state.ghost;
      textColor = colors.text.muted;
      iconColor = colors.icon.disabled;
    } else if (isPressed) {
      backgroundColor = colors.bg.state.ghostPress;
      textColor = colors.text.subtle;
      iconColor = colors.icon.muted;
    } else if (isHovered) {
      backgroundColor = colors.bg.state.ghostHover;
      textColor = colors.text.subtle;
      iconColor = colors.icon.muted;
    }

    return {
      backgroundColor,
      color: textColor,
      border: 'none',
      borderRadius: 0,
      padding: `${currentSizeConfig.padding.vertical} ${currentSizeConfig.padding.horizontal}`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: type === 'default' ? currentSizeConfig.gap : 0,
      cursor: item.disabled ? 'not-allowed' : 'pointer',
      outline: 'none',
      position: 'relative',
      transition: 'all 0.15s ease-out',
      ...currentSizeConfig.textStyle,
    };
  };

  // Handle button item interactions
  const handleItemClick = (item, index) => {
    if (!item.disabled && item.onClick) {
      item.onClick(item, index);
    }
  };

  const handleKeyDown = (event, item, index) => {
    if ((event.key === 'Enter' || event.key === ' ') && !item.disabled) {
      event.preventDefault();
      handleItemClick(item, index);
    }
  };

  // Render icon with proper styling
  const renderIcon = (icon, iconColor) => {
    if (!icon) return null;
    
    return React.cloneElement(icon, {
      style: {
        width: currentSizeConfig.iconSize,
        height: currentSizeConfig.iconSize,
        color: iconColor,
        flexShrink: 0,
        transition: 'color 0.15s ease-out',
        ...icon.props.style,
      },
    });
  };

  return (
    <div
      style={containerStyles}
      className={className}
      role="group"
      {...rest}
    >
      {items.map((item, index) => {
        const isHovered = hoveredItem === index;
        const isPressed = pressedItem === index;
        const isFocused = focusedItem === index;
        const buttonStyles = getButtonItemStyles(item, index, isHovered, isPressed, isFocused);
        const isLastItem = index === items.length - 1;

        // Calculate icon color based on state
        let iconColor = colors.icon.muted;
        if (item.disabled) {
          iconColor = colors.icon.disabled;
        } else if (isPressed) {
          iconColor = colors.icon.muted;
        } else if (isHovered) {
          iconColor = colors.icon.muted;
        }

        return (
                    <React.Fragment key={item.id || index}>
            <button
            style={buttonStyles}
            disabled={item.disabled}
            onClick={() => handleItemClick(item, index)}
            onKeyDown={(e) => handleKeyDown(e, item, index)}
            onMouseEnter={() => !item.disabled && setHoveredItem(index)}
            onMouseLeave={() => setHoveredItem(null)}
            onMouseDown={() => !item.disabled && setPressedItem(index)}
            onMouseUp={() => setPressedItem(null)}
            onFocus={() => setFocusedItem(index)}
            onBlur={() => setFocusedItem(null)}
            tabIndex={item.disabled ? -1 : 0}
            aria-label={item.label || `Button ${index + 1}`}
            aria-disabled={item.disabled}
          >
            {/* Focus ring for accessibility */}
            {isFocused && (
              <div
                style={{
                  position: 'absolute',
                  inset: '-2px',
                  borderRadius: cornerRadius.borderRadius.sm,
                  boxShadow: getShadow('component.focus', colors, { focusType: 'default' }),
                  pointerEvents: 'none',
                }}
              />
            )}

            {/* Content */}
            {item.leadIcon && renderIcon(item.leadIcon, iconColor)}
            {type === 'default' && item.label && (
              <span style={{ userSelect: 'none' }}>
                {item.label}
              </span>
            )}
          </button>
          
          {/* Divider between items */}
          {!isLastItem && (
            <div
              style={{
                width: stroke.default,
                backgroundColor: colors.border.default,
                alignSelf: 'stretch',
              }}
            />
          )}
        </React.Fragment>
        );
      })}
    </div>
  );
};

export default ButtonGroup; 