import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '../../services/theme-context.jsx';
import { spacing } from '../tokens/spacing.js';
import { cornerRadius } from '../tokens/corner-radius.js';
import { shadows, getShadow } from '../tokens/shadows.js';
import { textStyles } from '../styles/typography/typography-styles.js';
import { typography } from '../tokens/typography.js';
import { stroke } from '../tokens/stroke.js';
import Bichaurinho from './Bichaurinho.jsx';
import addBoxIcon from '../../assets/icons/add-box-L.svg';

const TemplateCard = ({ 
  variant = 'default', 
  title = 'Template Title',
  description = 'Template description text goes here',
  bichaurinhoVariant = 1,
  onClick,
  className = '',
  style = {},
  ...props
}) => {
  const { colors } = useTheme();

  // Custom text style for title using awesome-serif font
  const titleStyle = {
    fontFamily: typography.fontFamily['awesome-serif'],
    fontSize: typography.desktop.size.xl,
    fontWeight: typography.desktop.weight.medium,
    lineHeight: typography.desktop.lineHeight.leading8,
    letterSpacing: typography.desktop.letterSpacing.normal,
    color: colors.text.default,
  };

  // Base card styles
  const baseCardStyles = {
    width: '240px',
    height: '180px',
    padding: spacing.spacing[16],
    borderRadius: cornerRadius.borderRadius.xl,
    backgroundColor: colors.bg.default,
    cursor: onClick ? 'pointer' : 'default',
    transition: 'all 0.2s cubic-bezier(0.2, 0, 0.2, 1)',
    transform: 'scale(1)',
    display: 'flex',
    flexDirection: 'column',
    gap: spacing.spacing[12],
  };

  // Variant-specific styles
  const getVariantStyles = () => {
    switch (variant) {
      case 'empty':
        return {
          ...baseCardStyles,
          border: `${stroke.default} dashed ${colors.border.darker}`,
          boxShadow: 'none',
          alignItems: 'center',
          justifyContent: 'center',
          gap: spacing.spacing[8],
        };
      
      case 'hover':
        return {
          ...baseCardStyles,
          border: `${stroke.default} solid ${colors.border.default}`,
          boxShadow: getShadow('regular.modalSm', colors, { withBorder: false }),
        };
      
      default: // 'default'
        return {
          ...baseCardStyles,
          border: `${stroke.default} solid ${colors.border.default}`,
          boxShadow: getShadow('regular.card', colors, { withBorder: false }),
        };
    }
  };

  // Hover styles for interactive cards
  const getHoverStyles = () => {
    if (!onClick) return {};
    
    return {
      ':hover': {
        boxShadow: variant === 'empty' 
          ? 'none' 
          : getShadow('regular.modalSm', colors, { withBorder: false }),
      }
    };
  };

  // Render empty state
  if (variant === 'empty') {
    return (
      <div
        style={{...getVariantStyles(), ...style}}
        onClick={onClick}
        className={className}
        onMouseEnter={(e) => {
          if (onClick) {
            e.target.style.transform = 'scale(1.02)';
          }
        }}
        onMouseLeave={(e) => {
          if (onClick) {
            e.target.style.transform = 'scale(1)';
          }
        }}
        onMouseDown={(e) => {
          if (onClick) {
            e.target.style.transform = 'scale(0.98)';
          }
        }}
        onMouseUp={(e) => {
          if (onClick) {
            e.target.style.transform = 'scale(1.02)';
          }
        }}
        onTouchStart={(e) => {
          if (onClick) {
            e.target.style.transform = 'scale(0.98)';
          }
        }}
        onTouchEnd={(e) => {
          if (onClick) {
            e.target.style.transform = 'scale(1)';
          }
        }}
        onKeyDown={(e) => {
          if (onClick && (e.key === 'Enter' || e.key === ' ')) {
            e.preventDefault();
            e.target.style.transform = 'scale(0.98)';
          }
        }}
        onKeyUp={(e) => {
          if (onClick && (e.key === 'Enter' || e.key === ' ')) {
            e.preventDefault();
            e.target.style.transform = 'scale(1.02)';
            onClick();
          }
        }}
        tabIndex={onClick ? 0 : -1}
        {...props}
      >
        <img 
          src={addBoxIcon} 
          alt="Add template" 
          style={{ 
            width: '48px', 
            height: '48px',
            opacity: 0.6,
            pointerEvents: 'none',
            userSelect: 'none',
          }} 
        />
        <span 
          style={{
            ...textStyles.sm.medium,
            color: colors.text.subtle,
            pointerEvents: 'none',
            userSelect: 'none',
          }}
        >
          Start from Scratch
        </span>
      </div>
    );
  }

  // Render default/hover state
  return (
    <div
      style={{
        ...getVariantStyles(),
        ...style,
        ...(onClick && {
          ':hover': {
            boxShadow: getShadow('regular.modalSm', colors, { withBorder: false }),
          }
        })
      }}
      onClick={onClick}
      className={className}
      onMouseEnter={(e) => {
        if (onClick) {
          e.target.style.transform = 'scale(1.02)';
          if (variant !== 'empty') {
            e.target.style.boxShadow = getShadow('regular.modalSm', colors, { withBorder: false });
          }
        }
      }}
      onMouseLeave={(e) => {
        if (onClick) {
          e.target.style.transform = 'scale(1)';
          if (variant === 'default') {
            e.target.style.boxShadow = getShadow('regular.card', colors, { withBorder: false });
          }
        }
      }}
      onMouseDown={(e) => {
        if (onClick) {
          e.target.style.transform = 'scale(0.98)';
        }
      }}
      onMouseUp={(e) => {
        if (onClick) {
          e.target.style.transform = 'scale(1.02)';
        }
      }}
      onTouchStart={(e) => {
        if (onClick) {
          e.target.style.transform = 'scale(0.98)';
        }
      }}
      onTouchEnd={(e) => {
        if (onClick) {
          e.target.style.transform = 'scale(1)';
        }
      }}
      onKeyDown={(e) => {
        if (onClick && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          e.target.style.transform = 'scale(0.98)';
        }
      }}
      onKeyUp={(e) => {
        if (onClick && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          e.target.style.transform = 'scale(1.02)';
          onClick();
        }
      }}
      tabIndex={onClick ? 0 : -1}
      {...props}
    >
      {/* Bichaurinho */}
      <div style={{ pointerEvents: 'none' }}>
        <Bichaurinho 
          variant={bichaurinhoVariant} 
          size={28} 
        />
      </div>
      
      {/* Text Container */}
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: spacing.spacing[8],
        flex: 1,
        pointerEvents: 'none',
      }}>
        {/* Title */}
        <h3 style={{
          ...titleStyle,
          margin: 0,
          pointerEvents: 'none',
          userSelect: 'none',
        }}>
          {title}
        </h3>
        
        {/* Description */}
        <p style={{
          ...textStyles.sm.normal,
          color: colors.text.subtle,
          margin: 0,
          pointerEvents: 'none',
          userSelect: 'none',
        }}>
          {description}
        </p>
      </div>
    </div>
  );
};

TemplateCard.propTypes = {
  variant: PropTypes.oneOf(['default', 'hover', 'empty']),
  title: PropTypes.string,
  description: PropTypes.string,
  bichaurinhoVariant: PropTypes.oneOf([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
    17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32
  ]),
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default TemplateCard;