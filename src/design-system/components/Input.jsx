import React, { useState, useRef, forwardRef } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../services/theme-context.jsx';
import { spacing } from '../tokens/spacing.js';
import { cornerRadius } from '../tokens/corner-radius.js';
import { textStyles } from '../styles/typography/typography-styles.js';
import { shadows, getShadow } from '../tokens/shadows.js';
import { stroke } from '../tokens/stroke.js';

const Input = forwardRef(({
  // Core variants
  size = 'lg',                    // 'lg' | 'sm'
  style = 'default',             // 'default' | 'add-on' | 'tail-action'
  
  // Content
  value,
  placeholder,
  label,
  caption,
  required = false,
  
  // Icons and add-ons
  leadIcon,                      // Leading icon component/element
  tailIcon,                      // Trailing icon component/element (not used with tail-action style)
  addOnPrefix,                   // For add-on style: prefix text (e.g., "https://")
  addOnSuffix,                   // For add-on style: suffix text (e.g., ".com")
  tailAction,                    // For tail-action style: { label?, icon?, onClick } object
  
  // States
  disabled = false,
  failed = false,
  
  // Standard props
  onChange,
  onFocus,
  onBlur,
  onClick,
  className,
  type = 'text',
  id,
  name,
  ...rest
}, ref) => {
  const { colors } = useTheme();
  const [isFocused, setIsFocused] = useState(false);
  const [isTailActionHovered, setIsTailActionHovered] = useState(false);
  const inputRef = useRef(null);
  
  // Use forwarded ref or fallback to internal ref
  const finalRef = ref || inputRef;
  
  // Determine if input has value (filled state)
  const isFilled = value && value.length > 0;
  
  // Size configurations
  const sizeConfig = {
    lg: {
      height: 36,
      padding: { horizontal: spacing.spacing[8], vertical: spacing.spacing[8] },
      gap: spacing.spacing[6],
      iconSize: 18,
    },
    sm: {
      height: 32,
      padding: { horizontal: spacing.spacing[8], vertical: spacing.spacing[8] },
      gap: spacing.spacing[6],
      iconSize: 18,
    }
  };
  
  const config = sizeConfig[size];
  
  // Style configurations for different input styles
  const getBackgroundColor = () => {
    if (disabled) return colors.bg.input.disabled;
    return colors.bg.input.default;
  };
  
  const getTextColor = () => {
    if (disabled) return colors.text.hint;
    if (!value && placeholder) return colors.text.muted; // placeholder state
    return colors.text.default;
  };
  
  const getBorderColor = () => {
    if (failed) return colors.border.destructive;
    if (isFocused) return colors.border.highlight;
    return colors.border.default;
  };
  
  const getBoxShadow = () => {
    if (isFocused && !disabled) {
      return getShadow('component.default', colors, { 
        focusType: failed ? 'destructive' : 'input'
      });
    }
    return getShadow('component.default', colors, { withBorder: true });
  };
  
  // Event handlers
  const handleFocus = (e) => {
    setIsFocused(true);
    onFocus?.(e);
  };
  
  const handleBlur = (e) => {
    setIsFocused(false);
    onBlur?.(e);
  };
  
  const handleInputChange = (e) => {
    onChange?.(e);
  };
  
  const handleContainerClick = () => {
    if (!disabled && finalRef.current) {
      finalRef.current.focus();
    }
  };
  
  // Base input styles
  const inputBaseStyles = {
    ...textStyles.sm.normal,
    width: '100%',
    height: '100%',
    border: 'none',
    outline: 'none',
    backgroundColor: 'transparent',
    color: getTextColor(),
    '::placeholder': {
      color: colors.text.muted,
    }
  };
  
  // Container base styles
  const containerBaseStyles = {
    display: 'flex',
    alignItems: 'center',
    height: config.height,
    backgroundColor: getBackgroundColor(),
    borderRadius: cornerRadius.borderRadius.md,
    border: `${stroke.default} solid ${getBorderColor()}`,
    boxShadow: getBoxShadow(),
    cursor: disabled ? 'not-allowed' : 'text',
    transition: 'all 0.15s ease-in-out',
  };
  
  // Render different input styles
  const renderDefaultInput = () => (
    <motion.div
      style={{
        ...containerBaseStyles,
        padding: `${config.padding.vertical} ${config.padding.horizontal}`,
        gap: config.gap,
      }}
      onClick={handleContainerClick}
      whileTap={!disabled ? { scale: 0.995 } : {}}
    >
      {leadIcon && (
        <div 
          style={{ 
            display: 'flex', 
            alignItems: 'center',
            width: config.iconSize,
            height: config.iconSize,
            color: disabled ? colors.icon.disabled : colors.icon.muted,
            flexShrink: 0
          }}
        >
          {leadIcon}
        </div>
      )}
      
      <input
        ref={finalRef}
        type={type}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        onChange={handleInputChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        style={inputBaseStyles}
        id={id}
        name={name}
        {...rest}
      />
      
      {tailIcon && (
        <div 
          style={{ 
            display: 'flex', 
            alignItems: 'center',
            width: config.iconSize,
            height: config.iconSize,
            color: disabled ? colors.icon.disabled : colors.icon.muted,
            flexShrink: 0
          }}
        >
          {tailIcon}
        </div>
      )}
    </motion.div>
  );
  
  const renderAddOnInput = () => (
    <motion.div
      style={{
        ...containerBaseStyles,
        padding: 0,
        overflow: 'hidden',
      }}
      onClick={handleContainerClick}
      whileTap={!disabled ? { scale: 0.995 } : {}}
    >
      {addOnPrefix && (
        <div style={{
          display: 'flex',
          alignItems: 'center',
          padding: `${config.padding.vertical} ${spacing.spacing[12]}`,
          backgroundColor: colors.bg.ghost,
          borderRight: `${stroke.default} solid ${colors.border.darker}`,
          color: colors.text.muted,
          ...textStyles.sm.normal,
          flexShrink: 0,
        }}>
          {addOnPrefix}
        </div>
      )}
      
      <div style={{
        display: 'flex',
        alignItems: 'center',
        flex: 1,
        padding: `${config.padding.vertical} ${config.padding.horizontal}`,
        gap: config.gap,
      }}>
        {leadIcon && (
          <div 
            style={{ 
              display: 'flex', 
              alignItems: 'center',
              width: config.iconSize,
              height: config.iconSize,
              color: disabled ? colors.icon.disabled : colors.icon.muted,
              flexShrink: 0
            }}
          >
            {leadIcon}
          </div>
        )}
        
        <input
          ref={finalRef}
          type={type}
          value={value}
          placeholder={placeholder}
          disabled={disabled}
          onChange={handleInputChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          style={inputBaseStyles}
          id={id}
          name={name}
          {...rest}
        />
        
        {tailIcon && (
          <div 
            style={{ 
              display: 'flex', 
              alignItems: 'center',
              width: config.iconSize,
              height: config.iconSize,
              color: disabled ? colors.icon.disabled : colors.icon.muted,
              flexShrink: 0
            }}
          >
            {tailIcon}
          </div>
        )}
      </div>
      
      {addOnSuffix && (
        <div style={{
          display: 'flex',
          alignItems: 'center',
          padding: `${config.padding.vertical} ${spacing.spacing[12]}`,
          backgroundColor: colors.bg.ghost,
          borderLeft: `${stroke.default} solid ${colors.border.darker}`,
          color: colors.text.muted,
          ...textStyles.sm.normal,
          flexShrink: 0,
        }}>
          {addOnSuffix}
        </div>
      )}
    </motion.div>
  );
  
  const renderTailActionInput = () => (
    <motion.div
      style={{
        ...containerBaseStyles,
        padding: 0,
        overflow: 'hidden',
      }}
      onClick={handleContainerClick}
      whileTap={!disabled ? { scale: 0.995 } : {}}
    >
      <div style={{
        display: 'flex',
        alignItems: 'center',
        flex: 1,
        padding: `${config.padding.vertical} ${config.padding.horizontal}`,
        gap: config.gap,
      }}>
        {leadIcon && (
          <div 
            style={{ 
              display: 'flex', 
              alignItems: 'center',
              width: config.iconSize,
              height: config.iconSize,
              color: disabled ? colors.icon.disabled : colors.icon.muted,
              flexShrink: 0
            }}
          >
            {leadIcon}
          </div>
        )}
        
        <input
          ref={finalRef}
          type={type}
          value={value}
          placeholder={placeholder}
          disabled={disabled}
          onChange={handleInputChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          style={inputBaseStyles}
          id={id}
          name={name}
          {...rest}
        />
      </div>
      
      {tailAction && (
        <div 
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: `${config.padding.vertical} ${spacing.spacing[12]}`,
            backgroundColor: !disabled && isTailActionHovered ? colors.bg.state.ghostHover : colors.bg.ghost,
            borderLeft: `${stroke.default} solid ${colors.border.darker}`,
            cursor: disabled ? 'not-allowed' : 'pointer',
            transition: 'background-color 0.15s ease-in-out',
            gap: spacing.spacing[6],
          }}
          onClick={!disabled ? tailAction.onClick : undefined}
          onMouseEnter={() => {
            if (!disabled) {
              setIsTailActionHovered(true);
            }
          }}
          onMouseLeave={() => {
            if (!disabled) {
              setIsTailActionHovered(false);
            }
          }}
        >
          {tailAction.icon && (
            <div 
              style={{ 
                display: 'flex', 
                alignItems: 'center',
                width: config.iconSize,
                height: config.iconSize,
                color: disabled ? colors.icon.disabled : colors.icon.muted,
                flexShrink: 0
              }}
            >
              {tailAction.icon}
            </div>
          )}
          
          {tailAction.label && (
            <span 
              style={{
                ...textStyles.sm.normal,
                color: disabled ? colors.text.hint : colors.text.default,
              }}
            >
              {tailAction.label}
            </span>
          )}
        </div>
      )}
    </motion.div>
  );
  
  // Choose which input style to render
  const renderInput = () => {
    switch (style) {
      case 'add-on':
        return renderAddOnInput();
      case 'tail-action':
        return renderTailActionInput();
      default:
        return renderDefaultInput();
    }
  };
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: spacing.spacing[4] }}>
      {label && (
        <label 
          htmlFor={id}
          style={{
            ...textStyles.sm.medium,
            color: colors.text.default,
            cursor: disabled ? 'not-allowed' : 'pointer',
          }}
        >
          {label}
          {required && (
            <span style={{ color: colors.text.destructive, marginLeft: spacing.spacing[4] }}>
              *
            </span>
          )}
        </label>
      )}
      
      {renderInput()}
      
      {caption && (
        <div 
          style={{
            ...textStyles.xs.normal,
            color: failed ? colors.text.destructive : colors.text.muted,
          }}
        >
          {caption}
        </div>
      )}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;