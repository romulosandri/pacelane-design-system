import React from 'react';
import { useTheme } from '../../services/theme-context.jsx';
import { spacing } from '../tokens/spacing.js';
import { stroke } from '../tokens/stroke.js';
import Logo from './Logo.jsx';
import Button from './Button.jsx';
import ButtonGroup from './ButtonGroup.jsx';
import { Sun, Moon, Monitor, HelpCircle } from 'lucide-react';

/**
 * TopNav component - Primary navigation bar for the application
 * 
 * Features:
 * - Logo on the left side
 * - Actions container on the right with theme switcher and help button
 * - Theme-aware design that adapts to light/dark themes
 * - Uses design system tokens for consistent spacing, colors, and borders
 * 
 * @param {Object} props
 * @param {string} [props.className] - Additional CSS classes
 * @param {Function} [props.onHelpClick] - Callback for help button click
 */
const TopNav = ({ 
  className = '',
  onHelpClick,
  ...rest 
}) => {
  const { colors, themePreference, setTheme } = useTheme();

  // Theme switcher button group items
  const themeItems = [
    {
      id: 'light',
      leadIcon: <Sun />,
      label: 'Light',
      onClick: () => setTheme('light'),
    },
    {
      id: 'dark', 
      leadIcon: <Moon />,
      label: 'Dark',
      onClick: () => setTheme('dark'),
    },
    {
      id: 'system',
      leadIcon: <Monitor />,
      label: 'System',
      onClick: () => setTheme('system'),
    },
  ];

  // Handle help button click
  const handleHelpClick = () => {
    if (onHelpClick) {
      onHelpClick();
    } else {
      // Default help action - could open help modal, navigate to help page, etc.
      console.log('Help requested');
    }
  };

  // Container styles
  const containerStyles = {
    backgroundColor: colors.bg.default,
    borderBottom: `${stroke.default} solid ${colors.border.default}`,
    paddingLeft: spacing.spacing[40],
    paddingRight: spacing.spacing[40],
    height: '80px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    position: 'relative',
    zIndex: 10,
    boxSizing: 'border-box',
  };

  // Actions container styles
  const actionsContainerStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: spacing.spacing[16],
  };

  return (
    <nav
      style={containerStyles}
      className={className}
      role="navigation"
      aria-label="Main navigation"
      {...rest}
    >
      {/* Logo on the extreme left */}
      <Logo width={120} />
      
      {/* Actions container on the extreme right */}
      <div style={actionsContainerStyles}>
        {/* Theme switcher button group */}
        <ButtonGroup
          type="iconOnly"
          size="xs"
          items={themeItems}
          aria-label="Theme selector"
        />
        
        {/* Help button with dashed style */}
        <Button
          style="dashed"
          size="xs"
          leadIcon={<HelpCircle size={16} />}
          label="Help"
          onClick={handleHelpClick}
          aria-label="Get help"
        />
      </div>
    </nav>
  );
};

export default TopNav;