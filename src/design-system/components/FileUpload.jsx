import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../services/theme-context.jsx';
import { spacing } from '../tokens/spacing.js';
import { cornerRadius } from '../tokens/corner-radius.js';
import { textStyles } from '../styles/typography/typography-styles.js';
import { stroke } from '../tokens/stroke.js';

import Input from './Input.jsx';
import Divider from './Divider.jsx';
import downloadIcon from '../../assets/icons/download--T.svg';

const FileUpload = ({
  // Core props
  onFileSelect,
  onUrlSubmit,
  accept = '*/*',
  multiple = true,
  maxFiles = 10,
  maxTotalSize = 100 * 1024 * 1024, // 100MB in bytes
  
  // URL input props
  urlValue = '',
  onUrlChange,
  urlPlaceholder = 'Paste a website URL here',
  
  // State props
  disabled = false,
  className,
  ...rest
}) => {
  const { colors } = useTheme();
  const [isHovered, setIsHovered] = useState(false);
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef(null);
  
  // Handle file drop
  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    
    if (disabled) return;
    
    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      onFileSelect?.(files);
    }
  };
  
  // Handle drag over
  const handleDragOver = (e) => {
    e.preventDefault();
    if (!disabled) {
      setIsDragOver(true);
    }
  };
  
  // Handle drag leave
  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragOver(false);
  };
  
  // Handle click to browse with smart target detection
  const handleBrowseClick = (e) => {
    // Don't trigger file browser if click is on URL section or its children
    const clickedElement = e.target;
    const isUrlSection = clickedElement.closest('[data-upload-section="url"]');
    const isInputElement = clickedElement.tagName === 'INPUT' || 
                          clickedElement.tagName === 'BUTTON' ||
                          clickedElement.closest('form');
    
    // Only trigger file browser for clicks on designated upload areas
    if (!disabled && !isUrlSection && !isInputElement && fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  
  // Handle file input change
  const handleFileInputChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 0) {
      onFileSelect?.(files);
    }
    // Reset input to allow selecting the same file again
    e.target.value = '';
  };
  
  // Handle URL submission
  const handleUrlSubmit = (e) => {
    e.preventDefault();
    if (urlValue.trim()) {
      onUrlSubmit?.(urlValue.trim());
    }
  };
  
  // Get background color based on state
  const getBackgroundColor = () => {
    if (disabled) return colors.bg.state.secondary;
    if (isDragOver) return colors.bg.state.primaryHover;
    if (isHovered) return colors.bg.state.secondaryHover;
    return colors.bg.state.secondary;
  };
  
  // Get border color based on state
  const getBorderColor = () => {
    if (isDragOver) return colors.border.highlight;
    return colors.border.darker;
  };
  
  // Get box shadow based on state
  const getBoxShadow = () => {
    if (disabled) return 'none';
    if (isHovered || isDragOver) return 'inset 0 2px 4px rgba(0, 0, 0, 0.1)';
    return 'none';
  };
  
  // Download icon component
  const DownloadIcon = () => (
    <img
      src={downloadIcon}
      alt="Download"
      width="40"
      height="40"
      style={{
        width: 40,
        height: 40,
        flexShrink: 0,
      }}
    />
  );
  

  
  return (
    <div className={className} {...rest}>
      {/* Main upload area */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          padding: `${spacing.spacing[32]} ${spacing.spacing[24]}`,
          borderRadius: cornerRadius.borderRadius.sm,
          backgroundColor: getBackgroundColor(),
          border: `${stroke.default} dashed ${getBorderColor()}`,
          boxShadow: getBoxShadow(),
          cursor: disabled ? 'not-allowed' : 'pointer',
          transition: 'background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
          alignItems: 'center',
          textAlign: 'center',
        }}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onMouseEnter={() => !disabled && setIsHovered(true)}
        onMouseLeave={() => !disabled && setIsHovered(false)}
        onClick={handleBrowseClick}
      >
        {/* Hidden file input */}
        <input
          ref={fileInputRef}
          type="file"
          accept={accept}
          multiple={multiple}
          onChange={handleFileInputChange}
          disabled={disabled}
          style={{ display: 'none' }}
        />
        
        {/* Inner content with motion */}
        <motion.div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: spacing.spacing[12],
            alignItems: 'center',
            width: '100%',
          }}
          animate={{ scale: !disabled && (isHovered || isDragOver) ? 0.97 : 1 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        >
        
        {/* Upload icon */}
        <DownloadIcon />
        
        {/* Main upload text */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: spacing.spacing[4],
            alignItems: 'center',
          }}
        >
          <div style={{ ...textStyles.sm.medium }}>
            <span style={{ color: disabled ? colors.text.hint : colors.text.default }}>
              Drop your files here, or{' '}
            </span>
            <span style={{ color: disabled ? colors.text.hint : colors.text.informative }}>
              click to browse
            </span>
          </div>
          
          <div
            style={{
              ...textStyles.xs.normal,
              color: disabled ? colors.text.hint : colors.text.muted,
            }}
          >
            Up to {maxFiles} files, {Math.round(maxTotalSize / (1024 * 1024))}MB total limit
          </div>
        </div>
        
        {/* Divider */}
        <Divider maxWidth={400} />
        
        {/* URL section header */}
        <div
          data-upload-section="url"
          style={{
            ...textStyles.sm.medium,
            color: disabled ? colors.text.hint : colors.text.default,
          }}
        >
          Drop a link to a website
        </div>
        
        {/* URL input */}
        <div data-upload-section="url" style={{ width: '100%', maxWidth: 400 }}>
          <form onSubmit={handleUrlSubmit}>
            <Input
              size="sm"
              style="add-on"
              addOnPrefix="https://"
              value={urlValue}
              onChange={(e) => onUrlChange?.(e.target.value)}
              placeholder={urlPlaceholder}
              disabled={disabled}
              type="url"
            />
          </form>
        </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FileUpload;