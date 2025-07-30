import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MoreHorizontal } from 'lucide-react';
import { useTheme } from '../../services/theme-context.jsx';
import { spacing } from '../tokens/spacing.js';
import { cornerRadius } from '../tokens/corner-radius.js';
import { textStyles } from '../styles/typography/typography-styles.js';
import { shadows, getShadow } from '../tokens/shadows.js';
import Button from './Button.jsx';
import DropdownMenu from './DropdownMenu.jsx';

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



  // Get first 5 lines of content
  const displayContent = content.split('\n').slice(0, 5).join('\n');

  // Dropdown menu items
  const dropdownItems = [
    {
      label: 'Move',
      onClick: () => onMenuAction?.('move')
    },
    {
      label: 'Delete',
      type: 'destructive',
      onClick: () => onMenuAction?.('delete')
    }
  ];

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
      rotateZ: 18,
      scale: 0.90,
      transition: { 
        type: "spring",
        stiffness: 400,
        damping: 30 
      }
    }
  };

  // Shadow styles  
  const coverShadow = isHovered 
    ? getShadow('regular.modalMd', colors, { withBorder: false })
    : getShadow('regular.card', colors, { withBorder: false });

  const textCardShadow = isHovered 
    ? getShadow('regular.modalLg', colors, { withBorder: true })
    : getShadow('regular.modalSm', colors, { withBorder: true });

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
          border: `1px solid ${colors.border.darker}`,
          boxShadow: coverShadow,
          transition: 'box-shadow 0.2s ease-in-out',
          display: 'flex',
          justifyContent: 'center',
          paddingTop: spacing.spacing[28],
          cursor: onClick ? 'pointer' : 'default'
        }}
        onClick={onClick}
      >
        {/* Text Card */}
        <motion.div
          variants={textCardVariants}
          animate={isHovered ? 'hover' : 'default'}
          style={{
            width: '280px',
            height: '328px',
            padding: spacing.spacing[20],
            borderRadius: cornerRadius.borderRadius.lg,
            backgroundColor: colors.bg.default,
            color: colors.text.default,
            overflow: 'hidden',
            boxShadow: textCardShadow,
            transition: 'box-shadow 0.2s ease-in-out'
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
                <Button
                  variant="iconOnly"
                  style="secondary"
                  size="xs"
                  leadIcon={<MoreHorizontal size={12} />}
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowDropdown(!showDropdown);
                  }}
                />
                
                {/* Dropdown Menu */}
                <DropdownMenu
                  isOpen={showDropdown}
                  onClose={() => setShowDropdown(false)}
                  items={dropdownItems}
                  position="bottom-right"
                />
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