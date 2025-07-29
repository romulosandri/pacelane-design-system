/**
 * Shadow Design Tokens
 * Use these with the `style` prop: style={{ boxShadow: shadows.card }}
 * For theme-aware shadows with borders/highlights, use the getShadow helper function
 */

export const shadows = {
  // REGULAR SHADOWS
  regular: {
    // Card shadow with inner and drop shadow combination
    card: `inset 0 -1px 0 0 rgb(0 0 0 / 0.1), 0 1px 2px 0 rgb(0 0 0 / 0.05)`,
    
    // Modal small shadow with multiple layers (without border)
    modalSm: `0 1px 1px -0.5px rgb(0 0 0 / 0.04), 0 3px 3px -1.5px rgb(0 0 0 / 0.04), 0 6px 6px -3px rgb(0 0 0 / 0.04), 0 12px 12px -6px rgb(0 0 0 / 0.04)`,
    
    // Modal medium shadow with multiple layers (without border)
    modalMd: `0 1px 1px -0.5px rgb(0 0 0 / 0.04), 0 3px 3px 0 rgb(0 0 0 / 0.04), 0 6px 6px 0 rgb(0 0 0 / 0.04), 0 12px 12px 0 rgb(0 0 0 / 0.04)`,
    
    // Modal large shadow with multiple layers (without border)
    modalLg: `0 1px 1px -0.5px rgb(0 0 0 / 0.04), 0 3px 3px 0 rgb(0 0 0 / 0.04), 0 6px 6px 0 rgb(0 0 0 / 0.04), 0 12px 12px 0 rgb(0 0 0 / 0.04), 0 16px 16px 0 rgb(0 0 0 / 0.04)`,
  },

  // COMPONENT SHADOWS
  component: {
    // Default component shadow (slightly lighter inner shadow than card)
    default: `inset 0 -1px 0 0 rgb(0 0 0 / 0.08), 0 1px 2px 0 rgb(0 0 0 / 0.05)`,
    
    // Switch handle shadow with stronger shadows
    switchHandle: `0 1px 2px -1px rgb(0 0 0 / 0.08), 0 1px 3px 0 rgb(0 0 0 / 0.08)`,
    
    // Focus shadow base (inner + drop, without focus ring)
    focus: `inset 0 -1px 0 0 rgb(0 0 0 / 0.1), 0 1px 2px 0 rgb(0 0 0 / 0.05)`,
    
    // Destructive focus shadow base (same as focus, without destructive ring)
    destructiveFocus: `inset 0 -1px 0 0 rgb(0 0 0 / 0.1), 0 1px 2px 0 rgb(0 0 0 / 0.05)`,
  },

  // Backward compatibility - keep top-level card and modalSm
  card: `inset 0 -1px 0 0 rgb(0 0 0 / 0.1), 0 1px 2px 0 rgb(0 0 0 / 0.05)`,
  modalSm: `0 1px 1px -0.5px rgb(0 0 0 / 0.04), 0 3px 3px -1.5px rgb(0 0 0 / 0.04), 0 6px 6px -3px rgb(0 0 0 / 0.04), 0 12px 12px -6px rgb(0 0 0 / 0.04)`,
};

/**
 * Helper function to get theme-aware shadows with borders and focus rings
 * Use this when you need shadows that include theme colors
 * 
 * @param {string} shadowType - Shadow type from shadows object
 * @param {Object} colors - Theme colors object from useTheme()
 * @param {Object} options - Additional options
 * @returns {string} Complete shadow with theme-aware colors
 */
export const getShadow = (shadowType, colors, options = {}) => {
  // Legacy support for old function signature (string borderColor)
  if (typeof colors === 'string') {
    const borderColor = colors;
    const borderShadow = `0 0 0 1px ${borderColor}`;
    
    switch (shadowType) {
      case 'card':
        return `${shadows.card}, ${borderShadow}`;
      case 'modalSm':
        return `${shadows.modalSm}, ${borderShadow}`;
      default:
        return shadows[shadowType] || 'none';
    }
  }

  // New function signature with full options
  const { 
    withBorder = true,
    focusType = null, // 'default', 'destructive', 'misc', 'input'
  } = options;

  let baseShadow = '';
  
  // Get base shadow
  if (shadowType.includes('.')) {
    // Handle nested paths like 'regular.card' or 'component.focus'
    const [category, type] = shadowType.split('.');
    baseShadow = shadows[category]?.[type] || '';
  } else {
    // Handle direct paths like 'card' or 'modalSm'
    baseShadow = shadows[shadowType] || '';
  }

  const shadowParts = [];
  
  // Add base shadow if it exists
  if (baseShadow) {
    shadowParts.push(baseShadow);
  }

  // Add border for modal shadows and other border-needing shadows
  if (withBorder && (shadowType.includes('modal') || shadowType === 'card')) {
    shadowParts.push(`0 0 0 1px ${colors.border.default}`);
  }

  // Add focus ring shadows
  if (focusType) {
    switch (focusType) {
      case 'default':
        shadowParts.push(`0 0 0 1px ${colors.bg.default}`);
        shadowParts.push(`0 0 0 3px ${colors.border.highlight}`);
        break;
      
      case 'destructive':
        shadowParts.push(`0 0 0 1px ${colors.bg.default}`);
        shadowParts.push(`0 0 0 3px ${colors.border.highlightDestructive}`);
        break;
      
      case 'misc':
        shadowParts.push(`0 0 0 1px ${colors.bg.default}`);
        shadowParts.push(`0 0 3px 3px ${colors.border.highlight}`);
        break;
      
      case 'input':
        shadowParts.push(`0 0 0 1px ${colors.border.inputHighlight}`);
        shadowParts.push(`0 0 0 3px ${colors.border.default}`);
        break;
    }
  }

  return shadowParts.join(', ');
}; 