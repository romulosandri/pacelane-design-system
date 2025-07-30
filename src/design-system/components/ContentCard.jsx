import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../services/theme-context.jsx';
import { spacing } from '../tokens/spacing.js';
import { cornerRadius } from '../tokens/corner-radius.js';
import { textStyles } from '../styles/typography/typography-styles.js';
import { shadows, getShadow } from '../tokens/shadows.js';
import Button from './Button.jsx';

// Three dots (ellipsis) icon component
const EllipsisIcon = ({ color, size = 16 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="3" cy="8" r="1.5" fill={color} />
    <circle cx="8" cy="8" r="1.5" fill={color} />
    <circle cx="13" cy="8" r="1.5" fill={color} />
  </svg>
);

// Mock LinkedIn content for demonstration
const mockContent = `🚀 Just launched a new feature that improves user engagement by 40%! 

After months of research and development, our team has successfully implemented a revolutionary approach to user experience design. The key insights we discovered:

• User-centered design isn't just a buzzword - it's the foundation of successful products
• Iterative testing and feedback loops are crucial for continuous improvement  
• Small changes can have massive impact when properly executed
• Data-driven decisions lead to better outcomes than assumptions

The journey wasn't easy, but seeing the positive impact on our users makes every challenge worth it. Special thanks to my incredible team who made this possible! 

What challenges are you currently facing in your product development? I'd love to hear your thoughts and experiences in the comments below.

#ProductDevelopment #UXDesign #Innovation #TeamWork #TechLeadership #UserExperience #DigitalTransformation`;

const ContentCard = ({
  // Core variants
  variant = 'gradient',          // 'gradient' | 'image'
  
  // Content
  title = 'Content Title',
  subtitle = 'Last edited',
  content = mockContent,
  image,                         // Image URL for image variant
  
  // Interaction handlers
  onMenuAction,                  // Function called with action type ('delete' | 'move')
  onClick,                       // Card click handler
  
  // Standard props
  className = '',
  style = {},
  ...rest
}) => {
  const { colors } = useTheme();
  const [isHovered, setIsHovered] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current && 
        !dropdownRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Get first 5 lines of content
  const displayContent = content.split('\n').slice(0, 5).join('\n');

  // Handle dropdown menu actions
  const handleMenuAction = (action) => {
    setShowDropdown(false);
    if (onMenuAction) {
      onMenuAction(action);
    }
  };

  // Handle mouse events
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  // Cover background styles
  const coverBackground = variant === 'image' && image 
    ? {
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }
    : {
        background: `linear-gradient(to bottom, ${colors.bg.default}, ${colors.bg.subtle})`
      };

  // Animation variants for the text card tilt
  const textCardVariants = {
    default: { 
      rotateZ: 0,
      transition: { 
        type: "spring",
        stiffness: 400,
        damping: 30 
      }
    },
    hover: { 
      rotateZ: -18,
      transition: { 
        type: "spring",
        stiffness: 400,
        damping: 30 
      }
    }
  };

  // Shadow styles
  const coverShadow = isHovered 
    ? getShadow('regular.modalMd', colors, { withBorder: true })
    : getShadow('regular.card', colors, { withBorder: true });

  return (
    <motion.div
      className={className}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: spacing.spacing[12],
        ...style
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      {...rest}
    >
      {/* Cover */}
      <motion.div
        style={{
          position: 'relative',
          width: '360px',
          height: '240px',
          borderRadius: cornerRadius.borderRadius.md,
          overflow: 'hidden',
          ...coverBackground,
          boxShadow: coverShadow,
          transition: 'box-shadow 0.2s ease-in-out'
        }}
      >
        {/* Text Card */}
        <motion.div
          variants={textCardVariants}
          animate={isHovered ? 'hover' : 'default'}
          style={{
            position: 'absolute',
            top: spacing.spacing[20],
            left: '50%',
            transform: 'translateX(-50%)',
            width: '280px',
            height: '328px',
            padding: spacing.spacing[20],
            borderRadius: cornerRadius.borderRadius.lg,
            backgroundColor: colors.bg.default,
            borderWidth: '1px',
            borderStyle: 'solid',
            borderColor: colors.border.default,
            color: colors.text.default,
            overflow: 'hidden'
          }}
        >
          <div
            style={{
              ...textStyles.md.normal,
              lineHeight: '1.5',
              whiteSpace: 'pre-line',
              wordWrap: 'break-word'
            }}
          >
            {displayContent}
          </div>
        </motion.div>

        {/* More Options Button (appears on hover) */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.15 }}
              style={{
                position: 'absolute',
                top: spacing.spacing[16],
                right: spacing.spacing[16],
              }}
            >
              <div style={{ position: 'relative' }}>
                <div ref={buttonRef}>
                  <Button
                    variant="iconOnly"
                    style="secondary"
                    size="xs"
                    leadIcon={<EllipsisIcon color="currentColor" size={12} />}
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowDropdown(!showDropdown);
                    }}
                  />
                </div>
                
                {/* Dropdown Menu */}
                <AnimatePresence>
                  {showDropdown && (
                    <motion.div
                      ref={dropdownRef}
                      initial={{ opacity: 0, y: -8, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -8, scale: 0.95 }}
                      transition={{ duration: 0.15 }}
                      style={{
                        position: 'absolute',
                        top: '100%',
                        right: 0,
                        marginTop: spacing.spacing[4],
                        minWidth: '120px',
                        backgroundColor: colors.bg.default,
                        borderRadius: cornerRadius.borderRadius.md,
                        boxShadow: getShadow('regular.modalMd', colors, { withBorder: true }),
                        zIndex: 50,
                        overflow: 'hidden'
                      }}
                    >
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleMenuAction('move');
                        }}
                        style={{
                          width: '100%',
                          padding: `${spacing.spacing[8]} ${spacing.spacing[12]}`,
                          border: 'none',
                          backgroundColor: 'transparent',
                          color: colors.text.default,
                          textAlign: 'left',
                          cursor: 'pointer',
                          ...textStyles.sm.normal,
                          transition: 'background-color 0.15s ease-in-out',
                          ':hover': {
                            backgroundColor: colors.bg.subtle
                          }
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.backgroundColor = colors.bg.subtle;
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.backgroundColor = 'transparent';
                        }}
                      >
                        Move
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleMenuAction('delete');
                        }}
                        style={{
                          width: '100%',
                          padding: `${spacing.spacing[8]} ${spacing.spacing[12]}`,
                          border: 'none',
                          backgroundColor: 'transparent',
                          color: colors.text.destructive,
                          textAlign: 'left',
                          cursor: 'pointer',
                          ...textStyles.sm.normal,
                          transition: 'background-color 0.15s ease-in-out'
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.backgroundColor = colors.bg.subtle;
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.backgroundColor = 'transparent';
                        }}
                      >
                        Delete
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Container */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: spacing.spacing[4]
        }}
      >
        {/* Title */}
        <h3
          style={{
            ...textStyles.lg.medium,
            color: colors.text.default,
            margin: 0
          }}
        >
          {title}
        </h3>
        
        {/* Subtitle */}
        <p
          style={{
            ...textStyles.sm.normal,
            color: colors.text.muted,
            margin: 0
          }}
        >
          {subtitle}
        </p>
      </div>
    </motion.div>
  );
};

export default ContentCard;