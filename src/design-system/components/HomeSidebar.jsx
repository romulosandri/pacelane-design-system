import React, { useState } from 'react';
import { useTheme } from '../../services/theme-context.jsx';
import { spacing } from '../tokens/spacing.js';
import { textStyles } from '../styles/typography/typography-styles.js';
import { stroke } from '../tokens/stroke.js';
import { cornerRadius } from '../tokens/corner-radius.js';

// Design System Components
import Button from './Button.jsx';
import ButtonGroup from './ButtonGroup.jsx';
import SidebarMenuItem from './SidebarMenuItem.jsx';
import Logo from './Logo.jsx';
import LogoSymbol from './LogoSymbol.jsx';

// Icons
import {
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  Plus,
  Home,
  User,
  BookOpen,
  Calendar,
  Clock,
  Bell,
  Settings,
  Sun,
  Moon,
  Monitor,
  HelpCircle
} from 'lucide-react';

/**
 * HomeSidebar component for navigation in the design system app
 * 
 * @param {Object} props
 * @param {boolean} [props.isCollapsed] - Whether the sidebar is in collapsed state
 * @param {function} [props.onToggleCollapsed] - Callback when collapse/expand is triggered
 * @param {string} [props.userName] - User's display name
 * @param {string} [props.userAvatar] - User's avatar image URL
 * @param {string} [props.activeMenuItem] - Currently active menu item
 * @param {function} [props.onMenuItemClick] - Callback when menu item is clicked
 * @param {function} [props.onCreateNewClick] - Callback when Create New button is clicked
 * @param {function} [props.onThemeChange] - Callback when theme is changed
 * @param {function} [props.onHelpClick] - Callback when Help button is clicked
 * @param {function} [props.onAvatarClick] - Callback when avatar container is clicked (for profile navigation)
 * @param {string} [props.className] - Additional CSS classes
 */
const HomeSidebar = ({
  isCollapsed = false,
  onToggleCollapsed,
  userName = 'John Doe',
  userAvatar = 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=48&h=48&fit=crop&crop=face',
  activeMenuItem = 'home',
  onMenuItemClick,
  onCreateNewClick,
  onThemeChange,
  onHelpClick,
  onAvatarClick,
  className = '',
  ...rest
}) => {
  const { colors, themePreference, setTheme } = useTheme();
  const [isAvatarHovered, setIsAvatarHovered] = useState(false);

  // Handle theme selection
  const handleThemeSelect = (item, index) => {
    const themes = isCollapsed ? ['light', 'dark'] : ['light', 'dark', 'system'];
    const selectedTheme = themes[index];
    setTheme(selectedTheme);
    onThemeChange?.(selectedTheme);
  };

  // Handle theme toggle for collapsed state
  const handleThemeToggle = () => {
    const newTheme = themePreference === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    onThemeChange?.(newTheme);
  };

  // Menu items configuration
  const mainMenuItems = [
    { id: 'home', label: 'Home', icon: <Home />, section: 'main' },
    { id: 'profile', label: 'Profile', icon: <User />, section: 'main' },
    { id: 'knowledge', label: 'Knowledge', icon: <BookOpen />, section: 'main' },
    { id: 'calendar', label: 'Calendar', icon: <Calendar />, section: 'main' },
    { id: 'pacing', label: 'Pacing', icon: <Clock />, section: 'main' },
  ];

  const secondaryMenuItems = [
    { id: 'notifications', label: 'Notifications', icon: <Bell />, section: 'secondary' },
    { id: 'settings', label: 'Settings', icon: <Settings />, section: 'secondary' },
  ];

  // Theme selector items (conditional based on collapsed state)
  const themeItems = isCollapsed ? [
    { id: 'light', leadIcon: <Sun />, onClick: handleThemeSelect },
    { id: 'dark', leadIcon: <Moon />, onClick: handleThemeSelect },
  ] : [
    { id: 'light', leadIcon: <Sun />, onClick: handleThemeSelect },
    { id: 'dark', leadIcon: <Moon />, onClick: handleThemeSelect },
    { id: 'system', leadIcon: <Monitor />, onClick: handleThemeSelect },
  ];

  // Sidebar container styles
  const sidebarStyles = {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    width: isCollapsed ? '72px' : '280px',
    backgroundColor: colors.bg.sidebar.subtle,
    borderRight: `${stroke.default} solid ${colors.border.default}`,
    transition: 'width 0.3s cubic-bezier(0.4, 0.0, 0.2, 1)', // Smooth width transition
    position: 'relative', // For floating toggle button positioning
  };

  // Header container (Logo only)
  const headerContainerStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: isCollapsed ? 'center' : 'flex-start',
    padding: `${spacing.spacing[12]} ${spacing.spacing[16]}`,
    backgroundColor: colors.bg.sidebar.subtle,
    borderBottom: `${stroke.default} solid ${colors.border.default}`,
    transition: 'justify-content 0.3s cubic-bezier(0.4, 0.0, 0.2, 1)',
  };

  // Floating toggle button styles
  const floatingToggleStyles = {
    position: 'absolute',
    top: spacing.spacing[12],
    right: `-${spacing.spacing[16]}`, // Half outside the sidebar
    zIndex: 10,
    backgroundColor: colors.bg.default,
    border: `${stroke.default} solid ${colors.border.default}`,
    borderRadius: cornerRadius.borderRadius.full,
    padding: spacing.spacing[8],
    cursor: 'pointer',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  };

  // Avatar container styles (clickable button)
  const avatarContainerStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: isCollapsed ? 'center' : 'flex-start',
    gap: isCollapsed ? 0 : spacing.spacing[12],
    padding: `${spacing.spacing[12]} ${spacing.spacing[16]}`,
    backgroundColor: isAvatarHovered ? colors.bg.state.ghostHover : colors.bg.sidebar.subtle,
    border: 'none',
    borderBottom: `${stroke.default} solid ${colors.border.default}`,
    width: '100%',
    cursor: 'pointer',
    transition: 'background-color 0.15s ease-out, justify-content 0.3s cubic-bezier(0.4, 0.0, 0.2, 1), gap 0.3s cubic-bezier(0.4, 0.0, 0.2, 1)',
    outline: 'none', // Remove focus outline as requested
  };

  // Avatar image styles
  const avatarImageStyles = {
    width: '24px',
    height: '24px',
    borderRadius: cornerRadius.borderRadius.sm,
    border: `${stroke.default} solid ${colors.border.default}`,
    objectFit: 'cover',
  };

  // Button container styles
  const buttonContainerStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: isCollapsed ? 'center' : 'stretch',
    gap: spacing.spacing[2],
    padding: `${spacing.spacing[12]} ${spacing.spacing[16]} ${spacing.spacing[12]}`,
    backgroundColor: colors.bg.sidebar.subtle,
    overflow: 'visible',
    transition: 'align-items 0.3s cubic-bezier(0.4, 0.0, 0.2, 1)',
  };

  // Menu container styles
  const menuContainerStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: spacing.spacing[4],
    padding: `${spacing.spacing[8]} ${spacing.spacing[16]} ${spacing.spacing[16]}`,
    backgroundColor: colors.bg.sidebar.subtle,
    flex: 1,
    overflow: 'visible',
  };

  // Actions container styles
  const actionsContainerStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: isCollapsed ? 'center' : 'space-between',
    gap: isCollapsed ? 0 : 'auto',
    padding: spacing.spacing[16],
    backgroundColor: colors.bg.sidebar.subtle,
    borderTop: `${stroke.default} solid ${colors.border.default}`,
    transition: 'justify-content 0.3s cubic-bezier(0.4, 0.0, 0.2, 1)',
  };

  return (
    <nav
      style={sidebarStyles}
      className={className}
      role="navigation"
      aria-label="Main navigation"
      {...rest}
    >
      {/* Header Container - Logo Only */}
      <div style={headerContainerStyles}>
        {isCollapsed ? (
          <LogoSymbol size={24} />
        ) : (
          <Logo width={120} />
        )}
      </div>

      {/* Floating Toggle Button */}
      <button
        style={floatingToggleStyles}
        onClick={onToggleCollapsed}
        aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        type="button"
      >
        {isCollapsed ? <ChevronRight size={16} color={colors.icon.default} /> : <ChevronLeft size={16} color={colors.icon.default} />}
      </button>

      {/* Avatar Container */}
      <button
        style={avatarContainerStyles}
        onClick={onAvatarClick}
        onMouseEnter={() => setIsAvatarHovered(true)}
        onMouseLeave={() => setIsAvatarHovered(false)}
        aria-label={isCollapsed ? `View ${userName}'s profile` : `View profile`}
        type="button"
      >
        <img
          src={userAvatar}
          alt={`${userName}'s avatar`}
          style={avatarImageStyles}
        />
        
        {!isCollapsed && (
          <>
            <span style={{ 
              ...textStyles.sm.medium, 
              color: colors.text.default,
              flex: 1,
              textAlign: 'left',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              opacity: isCollapsed ? 0 : 1,
              transition: 'opacity 0.3s cubic-bezier(0.4, 0.0, 0.2, 1)',
            }}>
              {userName}
            </span>
            <ChevronDown 
              size={16} 
              color={colors.icon.muted}
              style={{
                opacity: isCollapsed ? 0 : 1,
                transition: 'opacity 0.3s cubic-bezier(0.4, 0.0, 0.2, 1)',
              }}
            />
          </>
        )}
      </button>

      {/* Button Container - Create New */}
      <div style={buttonContainerStyles}>
        <Button
          label={isCollapsed ? undefined : "Create New"}
          variant={isCollapsed ? "iconOnly" : "default"}
          style="secondary"
          size="sm"
          leadIcon={<Plus size={16} />}
          onClick={onCreateNewClick}
          aria-label={isCollapsed ? "Create New" : undefined}
        />
      </div>

      {/* Sidebar Menu Items Container */}
      <div style={menuContainerStyles}>
        {/* Main Menu Items */}
        {mainMenuItems.map((item) => (
          <SidebarMenuItem
            key={item.id}
            variant={isCollapsed ? 'iconOnly' : 'default'}
            state={activeMenuItem === item.id ? 'active' : 'default'}
            label={item.label}
            leadIcon={item.icon}
            onClick={() => onMenuItemClick?.(item.id)}
            aria-label={isCollapsed ? item.label : undefined}
          />
        ))}

        {/* Spacer */}
        <div style={{ flex: 1 }} />

        {/* Secondary Menu Items */}
        {secondaryMenuItems.map((item) => (
          <SidebarMenuItem
            key={item.id}
            variant={isCollapsed ? 'iconOnly' : 'default'}
            state={activeMenuItem === item.id ? 'active' : 'default'}
            label={item.label}
            leadIcon={item.icon}
            onClick={() => onMenuItemClick?.(item.id)}
            aria-label={isCollapsed ? item.label : undefined}
          />
        ))}
      </div>

      {/* Actions Container */}
      <div style={actionsContainerStyles}>
        {/* Theme Selector */}
        {isCollapsed ? (
          <Button
            variant="iconOnly"
            style="ghost"
            size="xs"
            leadIcon={themePreference === 'light' ? <Moon size={12} /> : <Sun size={12} />}
            onClick={handleThemeToggle}
            aria-label={themePreference === 'light' ? 'Switch to dark theme' : 'Switch to light theme'}
          />
        ) : (
          <ButtonGroup
            type="iconOnly"
            size="xs"
            items={themeItems}
          />
        )}

        {/* Help Button - Only show when expanded */}
        {!isCollapsed && (
          <Button
            label="Help"
            style="dashed"
            size="xs"
            leadIcon={<HelpCircle size={12} />}
            onClick={onHelpClick}
          />
        )}
      </div>
    </nav>
  );
};

export default HomeSidebar;