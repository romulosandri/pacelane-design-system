import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Minus } from 'lucide-react';
import { useTheme } from '../../services/theme-context.jsx';
import { cornerRadius } from '../tokens/corner-radius.js';
import { getShadow } from '../tokens/shadows.js';

const Checkbox = ({
  // Core props
  checked = false,
  indeterminate = false,
  disabled = false,
  
  // Event handlers
  onChange,
  onFocus,
  onBlur,
  
  // Standard props
  id,
  name,
  value,
  className = "",
  ...rest
}) => {
  const { colors } = useTheme();
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  // Base shadows for checkbox
  const baseShadows = {
    // Drop shadow: x:0, y:1, blur:2, spread:0, color: 000000 4%
    dropShadow: '0 1px 2px 0 rgb(0 0 0 / 0.04)',
    // Inner shadow: x:0, y:-1, blur:0, spread:0, color:000000 5%
    innerShadow: 'inset 0 -1px 0 0 rgb(0 0 0 / 0.05)',
    // Inner shadow for checked state: x:0, y:1, blur:0, spread:0, color: FFFFFF 25%
    innerShadowChecked: 'inset 0 1px 0 0 rgb(255 255 255 / 0.25)'
  };

  // Get current state styling
  const getCheckboxStyles = () => {
    const isChecked = checked || indeterminate;
    
    // Disabled states
    if (disabled) {
      if (isChecked) {
        return {
          backgroundColor: colors.bg.checkbox.disabled,
          borderColor: 'transparent',
          boxShadow: 'none', // No shadow for disabled-checked
          iconColor: colors.icon.disabled
        };
      } else {
        return {
          backgroundColor: colors.bg.checkbox.disabled,
          borderColor: colors.border.default,
          boxShadow: `${baseShadows.innerShadow}, ${baseShadows.dropShadow}`,
          iconColor: colors.icon.disabled
        };
      }
    }

    // Checked states
    if (isChecked) {
      if (isFocused) {
        return {
          backgroundColor: colors.bg.checkbox.active,
          borderColor: 'transparent',
          boxShadow: getShadow('component.focus', colors, { 
            withBorder: false, 
            focusType: 'misc' 
          }) + `, ${baseShadows.innerShadowChecked}, ${baseShadows.dropShadow}`,
          iconColor: colors.icon.white.default
        };
      } else if (isHovered) {
        return {
          backgroundColor: colors.bg.checkbox.activeHover,
          borderColor: 'transparent',
          boxShadow: `${baseShadows.innerShadowChecked}, ${baseShadows.dropShadow}`,
          iconColor: colors.icon.white.default
        };
      } else {
        return {
          backgroundColor: colors.bg.checkbox.active,
          borderColor: 'transparent',
          boxShadow: `${baseShadows.innerShadowChecked}, ${baseShadows.dropShadow}`,
          iconColor: colors.icon.white.default
        };
      }
    }

    // Unchecked states
    if (isFocused) {
      return {
        backgroundColor: colors.bg.checkbox.default,
        borderColor: colors.border.darker,
        boxShadow: getShadow('component.focus', colors, { 
          withBorder: false, 
          focusType: 'misc' 
        }) + `, ${baseShadows.innerShadow}, ${baseShadows.dropShadow}`,
        iconColor: colors.icon.disabled // For hover preview icon
      };
    } else if (isHovered) {
      return {
        backgroundColor: colors.bg.checkbox.default,
        borderColor: colors.border.darker,
        boxShadow: `${baseShadows.innerShadow}, ${baseShadows.dropShadow}`,
        iconColor: colors.icon.disabled // Show preview icon on hover
      };
    } else {
      return {
        backgroundColor: colors.bg.checkbox.default,
        borderColor: colors.border.darker,
        boxShadow: `${baseShadows.innerShadow}, ${baseShadows.dropShadow}`,
        iconColor: colors.icon.disabled
      };
    }
  };

  const styles = getCheckboxStyles();
  
  // Handle change events
  const handleChange = (e) => {
    if (disabled) return;
    onChange?.(e);
  };

  const handleFocus = (e) => {
    setIsFocused(true);
    onFocus?.(e);
  };

  const handleBlur = (e) => {
    setIsFocused(false);
    onBlur?.(e);
  };

  // Motion variants for enhanced animations
  const motionVariants = {
    default: { 
      scale: 1,
      transition: { duration: 0.2, ease: "easeOut" }
    },
    hover: { 
      scale: 1.1,
      transition: { duration: 0.2, ease: "easeOut" }
    },
    press: { 
      scale: 0.92,
      transition: { duration: 0.1, ease: "easeOut" }
    }
  };

  // Icon animation variants with dramatic entrance
  const iconVariants = {
    hidden: { 
      scale: 0.3, 
      opacity: 0,
      rotate: -180,
      transition: { duration: 0.2, ease: "easeIn" }
    },
    visible: { 
      scale: 1, 
      opacity: 1,
      rotate: 0,
      transition: { 
        duration: 0.4, 
        ease: "easeOut",
        type: "spring",
        stiffness: 280,
        damping: 18,
        // Stagger the animations for more complex entrance
        scale: { delay: 0.05 },
        opacity: { duration: 0.3 },
        rotate: { duration: 0.35, ease: "easeOut" }
      }
    },
    preview: { 
      scale: 0.6, 
      opacity: 0.25,
      rotate: -15,
      transition: { duration: 0.25, ease: "easeOut" }
    }
  };

  // Determine icon state
  const getIconState = () => {
    const isChecked = checked || indeterminate;
    
    if (isChecked) {
      return 'visible';
    } else if (isHovered && !disabled) {
      return 'preview';
    } else {
      return 'hidden';
    }
  };

  return (
    <motion.label
      className={`inline-flex items-center ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'} ${className}`}
      onMouseEnter={() => !disabled && setIsHovered(true)}
      onMouseLeave={() => !disabled && setIsHovered(false)}
      variants={motionVariants}
      initial="default"
      animate={disabled ? "default" : isHovered ? "hover" : "default"}
      whileTap={disabled ? "default" : "press"}
      {...rest}
    >
      <motion.div
        className="relative flex items-center justify-center"
        style={{
          width: '16px',
          height: '16px',
          borderRadius: cornerRadius.borderRadius.sm,
          backgroundColor: styles.backgroundColor,
          borderWidth: '1px',
          borderStyle: 'solid',
          borderColor: styles.borderColor,
          boxShadow: styles.boxShadow,
          transition: 'all 0.15s ease-out'
        }}
      >
        {/* Hidden native checkbox for accessibility */}
        <input
          type="checkbox"
          checked={checked}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          disabled={disabled}
          id={id}
          name={name}
          value={value}
          className="absolute inset-0 w-full h-full opacity-0 cursor-inherit"
          style={{ margin: 0 }}
          aria-checked={indeterminate ? 'mixed' : checked}
        />
        
        {/* Icon container */}
        <motion.div
          className="flex items-center justify-center"
          variants={iconVariants}
          animate={getIconState()}
        >
          {indeterminate ? (
            <Minus 
              size={12}
              color={styles.iconColor}
              className="flex-shrink-0"
            />
          ) : (
            <Check 
              size={12}
              color={styles.iconColor}
              className="flex-shrink-0"
            />
          )}
        </motion.div>
      </motion.div>
    </motion.label>
  );
};

export default Checkbox;