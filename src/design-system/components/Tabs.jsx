import React, { useState } from 'react';
import { useTheme } from '../../services/theme-context.jsx';
import { spacing } from '../tokens/spacing.js';
import { cornerRadius } from '../tokens/corner-radius.js';
import { textStyles } from '../styles/typography/typography-styles.js';
import { shadows, getShadow } from '../tokens/shadows.js';

const Tabs = ({
  // Core variants
  style = 'pill',               // 'pill' | 'segmented'
  type = 'default',             // 'default' (hugged width) | 'fixed' (equal width)
  
  // Content
  tabs = [],                    // Array of tab objects: [{ id, label, leadIcon, disabled }]
  activeTab,                    // Currently active tab id
  onTabChange,                  // Callback when tab changes: (tabId) => void
  
  // Standard props
  className,
  ...rest
}) => {
  const { colors } = useTheme();
  const [hoveredTab, setHoveredTab] = useState(null);
  const [focusedTab, setFocusedTab] = useState(null);

  // Tab styling configuration
  const tabConfig = {
    gap: spacing.spacing[4],
    padding: { 
      horizontal: spacing.spacing[10], 
      vertical: spacing.spacing[6] 
    },
    textStyle: textStyles.sm.medium,
    borderRadius: cornerRadius.borderRadius.full
  };

  // Get style configuration for individual tabs
  const getTabStyles = (tab, isActive, isHovered, isFocused) => {
    if (isActive) {
      return {
        backgroundColor: colors.bg.state.secondary,
        color: colors.text.default,
        borderColor: colors.border.darker,
        boxShadow: shadows.component.default,
        border: `1px solid ${colors.border.darker}`
      };
    }
    
    if (isHovered) {
      return {
        backgroundColor: colors.bg.state.ghostHover || colors.bg.state.ghost,
        color: colors.text.subtle,
        borderColor: 'transparent',
        boxShadow: 'none',
        border: '1px solid transparent'
      };
    }
    
    return {
      backgroundColor: colors.bg.state.ghost,
      color: colors.text.muted,
      borderColor: 'transparent',
      boxShadow: 'none',
      border: '1px solid transparent'
    };
  };

  // Container styles for segmented tabs
  const getContainerStyles = () => {
    if (style === 'segmented') {
      return {
        backgroundColor: colors.bg.state.soft,
        padding: spacing.spacing[2],
        borderRadius: cornerRadius.borderRadius.full,
        gap: spacing.spacing[2],
        display: 'flex',
        alignItems: 'center',
        width: type === 'fixed' ? '100%' : 'fit-content'
      };
    }
    
    return {
      display: 'flex',
      alignItems: 'center',
      gap: spacing.spacing[4],
      width: type === 'fixed' ? '100%' : 'fit-content'
    };
  };

  const handleTabClick = (tab) => {
    if (!tab.disabled && onTabChange) {
      onTabChange(tab.id);
    }
  };

  const handleKeyDown = (event, tab) => {
    if ((event.key === 'Enter' || event.key === ' ') && !tab.disabled) {
      event.preventDefault();
      handleTabClick(tab);
    }
  };

  return (
    <div
      style={getContainerStyles()}
      className={className}
      {...rest}
    >
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        const isHovered = hoveredTab === tab.id;
        const isFocused = focusedTab === tab.id;
        const tabStyles = getTabStyles(tab, isActive, isHovered, isFocused);

        return (
          <button
            key={tab.id}
            disabled={tab.disabled}
            onClick={() => handleTabClick(tab)}
            onMouseEnter={() => !tab.disabled && setHoveredTab(tab.id)}
            onMouseLeave={() => setHoveredTab(null)}
            onFocus={() => !tab.disabled && setFocusedTab(tab.id)}
            onBlur={() => setFocusedTab(null)}
            onKeyDown={(e) => handleKeyDown(e, tab)}
            style={{
              // Base styles
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: tabConfig.gap,
              paddingLeft: tabConfig.padding.horizontal,
              paddingRight: tabConfig.padding.horizontal,
              paddingTop: tabConfig.padding.vertical,
              paddingBottom: tabConfig.padding.vertical,
              borderRadius: tabConfig.borderRadius,
              cursor: tab.disabled ? 'not-allowed' : 'pointer',
              outline: 'none',
              userSelect: 'none',
              fontFamily: tabConfig.textStyle.fontFamily,
              fontSize: tabConfig.textStyle.fontSize,
              fontWeight: tabConfig.textStyle.fontWeight,
              lineHeight: tabConfig.textStyle.lineHeight,
              letterSpacing: tabConfig.textStyle.letterSpacing,
              
              // Dynamic styles
              ...tabStyles,
              
              // Fixed width behavior
              ...(type === 'fixed' && {
                flex: 1,
                minWidth: 0
              }),
              
              // Disabled styles
              ...(tab.disabled && {
                opacity: 0.5,
                cursor: 'not-allowed'
              })
            }}
            aria-pressed={isActive}
            aria-disabled={tab.disabled}
            role="tab"
            tabIndex={tab.disabled ? -1 : 0}
          >
            {/* Lead Icon */}
            {tab.leadIcon && (
              <span
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '14px',
                  color: 'currentColor'
                }}
              >
                {tab.leadIcon}
              </span>
            )}
            
            {/* Label */}
            <span
              style={{
                whiteSpace: 'nowrap',
                overflow: type === 'fixed' ? 'hidden' : 'visible',
                textOverflow: type === 'fixed' ? 'ellipsis' : 'clip'
              }}
            >
              {tab.label}
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default Tabs; 