import React from 'react';
import { useTheme } from '../../services/theme-context.jsx';
import { spacing } from '../tokens/spacing.js';
import { stroke } from '../tokens/stroke.js';
import { textStyles } from '../styles/typography/typography-styles.js';
import Button from './Button.jsx';
import { ArrowLeft, Edit, Save } from 'lucide-react';

/**
 * EditorNav component - Navigation bar for editor interfaces
 * 
 * Features:
 * - Go Back button on the left with arrow icon
 * - Title in center with edit button
 * - Save Draft button on the right
 * - 64px height with proper spacing and theme-aware design
 * 
 * @param {Object} props
 * @param {string} [props.className] - Additional CSS classes
 * @param {string} [props.title] - Title text to display
 * @param {Function} [props.onGoBack] - Callback for go back button click
 * @param {Function} [props.onEditTitle] - Callback for edit title button click
 * @param {Function} [props.onSaveDraft] - Callback for save draft button click
 * @param {boolean} [props.canSave] - Whether the save button should be enabled
 */
const EditorNav = ({ 
  className = '',
  title = 'Untitled Document',
  onGoBack,
  onEditTitle,
  onSaveDraft,
  canSave = true,
  ...rest 
}) => {
  const { colors } = useTheme();

  // Handle go back button click
  const handleGoBack = () => {
    if (onGoBack) {
      onGoBack();
    } else {
      // Default back action - could use router history, etc.
      console.log('Go back requested');
    }
  };

  // Handle edit title button click
  const handleEditTitle = () => {
    if (onEditTitle) {
      onEditTitle();
    } else {
      // Default edit action - could open title editor modal, etc.
      console.log('Edit title requested');
    }
  };

  // Handle save draft button click
  const handleSaveDraft = () => {
    if (onSaveDraft) {
      onSaveDraft();
    } else {
      // Default save action
      console.log('Save draft requested');
    }
  };

  // Container styles
  const containerStyles = {
    backgroundColor: colors.bg.default,
    borderBottom: `${stroke.default} solid ${colors.border.default}`,
    paddingLeft: spacing.spacing[40],
    paddingRight: spacing.spacing[40],
    paddingTop: spacing.spacing[16],
    paddingBottom: spacing.spacing[16],
    height: '64px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    position: 'relative',
    zIndex: 10,
    boxSizing: 'border-box',
  };

  // Title container styles
  const titleContainerStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: spacing.spacing[8],
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
  };

  // Title text styles
  const titleTextStyles = {
    ...textStyles.md.medium,
    color: colors.text.default,
    margin: 0,
    userSelect: 'none',
  };

  return (
    <nav
      style={containerStyles}
      className={className}
      role="navigation"
      aria-label="Editor navigation"
      {...rest}
    >
      {/* Go Back button on the left */}
      <Button
        style="dashed"
        size="xs"
        leadIcon={<ArrowLeft size={16} />}
        label="Go Back"
        onClick={handleGoBack}
        aria-label="Go back to previous page"
      />
      
      {/* Title in center with edit button */}
      <div style={titleContainerStyles}>
        <h1 style={titleTextStyles}>{title}</h1>
        <Button
          variant="iconOnly"
          style="ghost"
          size="xs"
          leadIcon={<Edit size={16} />}
          onClick={handleEditTitle}
          aria-label="Edit title"
        />
      </div>
      
      {/* Save Draft button on the right */}
      <Button
        style="primary"
        size="xs"
        leadIcon={<Save size={16} />}
        label="Save Draft"
        onClick={handleSaveDraft}
        disabled={!canSave}
        aria-label="Save draft"
      />
    </nav>
  );
};

export default EditorNav;