import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MoreHorizontal } from 'lucide-react';
import { useTheme } from '../../services/theme-context.jsx';
import { spacing } from '../tokens/spacing.js';
import { cornerRadius } from '../tokens/corner-radius.js';
import { textStyles } from '../styles/typography/typography-styles.js';
import { shadows, getShadow } from '../tokens/shadows.js';
import Button from './Button.jsx';
import DropdownMenu from './DropdownMenu.jsx';
import Badge from './Badge.jsx';

// File icon imports
import FileIconCode from '../../assets/icons/File Icons-1.svg';
import FileIconPDF from '../../assets/icons/File Icons-2.svg';
import FileIconVideo from '../../assets/icons/File Icons-3.svg';
import FileIconDesign from '../../assets/icons/File Icons-4.svg';
import FileIconImage from '../../assets/icons/File Icons-5.svg';
import FileIconDefault from '../../assets/icons/File Icons.svg';

const FileCard = ({
  // Core variants
  variant = 'gradient',          // 'gradient' | 'image'
  
  // Content
  title = 'File Name',
  subtitle = 'Last modified',
  fileType = 'default',         // 'code' | 'pdf' | 'video' | 'design' | 'image' | 'default'
  status = 'ready',             // 'ready' | 'uploading' | 'error'
  fileSize,                     // Optional file size display
  image,                        // Image URL for image variant
  
  // Interaction handlers
  onMenuAction,                 // Function called with action type ('delete' | 'move' | 'download')
  onClick,                      // Card click handler
  
  // Standard props
  className = '',
  style = {},
  ...rest
}) => {
  const { colors } = useTheme();
  const [isHovered, setIsHovered] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  // File type to icon mapping
  const getFileIcon = () => {
    const iconMap = {
      code: FileIconCode,
      pdf: FileIconPDF,
      video: FileIconVideo,
      design: FileIconDesign,
      image: FileIconImage,
      default: FileIconDefault
    };
    return iconMap[fileType] || FileIconDefault;
  };

  // Status badge configuration
  const getStatusConfig = () => {
    const statusMap = {
      ready: {
        color: 'green',
        label: 'Ready to use'
      },
      uploading: {
        color: 'orange',
        label: 'Uploading...'
      },
      error: {
        color: 'red',
        label: 'Error'
      }
    };
    return statusMap[status] || statusMap.ready;
  };

  // Dropdown menu items
  const dropdownItems = [
    {
      label: 'Download',
      onClick: () => onMenuAction?.('download')
    },
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

  // Animation variants for the file icon
  const fileIconVariants = {
    default: { 
      scale: 1,
      y: 0,
      transition: { 
        type: "spring",
        stiffness: 400,
        damping: 30 
      }
    },
    hover: { 
      scale: 1.05,
      y: -4,
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

  const statusConfig = getStatusConfig();

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
          alignItems: 'center',
          cursor: onClick ? 'pointer' : 'default'
        }}
        onClick={onClick}
      >
        {/* File Icon */}
        <motion.div
          variants={fileIconVariants}
          animate={isHovered ? 'hover' : 'default'}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <img
            src={getFileIcon()}
            alt={`${fileType} file icon`}
            style={{
              width: '80px',
              height: '80px',
              filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1))'
            }}
          />
        </motion.div>

        {/* Status Badge (positioned in top-left) */}
        <div
          style={{
            position: 'absolute',
            top: spacing.spacing[16],
            left: spacing.spacing[16],
          }}
        >
          <Badge
            variant="dot"
            size="sm"
            color={statusConfig.color}
            label={statusConfig.label}
          />
        </div>

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
        {/* Title and File Size */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <h3
            style={{
              ...textStyles.lg.medium,
              color: colors.text.default,
              margin: 0,
              flex: 1,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap'
            }}
          >
            {title}
          </h3>
          {fileSize && (
            <span
              style={{
                ...textStyles.sm.normal,
                color: colors.text.muted,
                marginLeft: spacing.spacing[8],
                flexShrink: 0
              }}
            >
              {fileSize}
            </span>
          )}
        </div>
        
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

export default FileCard;