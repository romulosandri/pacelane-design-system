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
  Menu,
  X,
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
    const themes = ['light', 'dark', 'system'];
    const selectedTheme = themes[index];
    setTheme(selectedTheme);
    onThemeChange?.(selectedTheme);
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

  // Theme selector items
  const themeItems = [
    { id: 'light', leadIcon: <Sun />, onClick: handleThemeSelect },
    { id: 'dark', leadIcon: <Moon />, onClick: handleThemeSelect },
    { id: 'system', leadIcon: <Monitor />, onClick: handleThemeSelect },
  ];

  // Sidebar container styles
  const sidebarStyles = {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    width: isCollapsed ? 'fit-content' : '280px',
    backgroundColor: colors.bg.state.ghost,
    borderRight: `${stroke.default} solid ${colors.border.default}`,
    transition: 'none', // No motion as requested
  };

  // Header container (Logo + Toggle)
  const headerContainerStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 'auto',
    padding: `${spacing.spacing[12]} ${spacing.spacing[16]}`,
    backgroundColor: colors.bg.state.ghost,
    borderBottom: `${stroke.default} solid ${colors.border.default}`,
  };

  // Avatar container styles (clickable button)
  const avatarContainerStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: isCollapsed ? 0 : spacing.spacing[12],
    padding: `${spacing.spacing[12]} ${spacing.spacing[16]}`,
    backgroundColor: isAvatarHovered ? colors.bg.state.ghostHover : colors.bg.state.ghost,
    border: 'none',
    borderBottom: `${stroke.default} solid ${colors.border.default}`,
    width: '100%',
    cursor: 'pointer',
    transition: 'background-color 0.15s ease-out',
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
    gap: spacing.spacing[2],
    padding: `${spacing.spacing[12]} ${spacing.spacing[16]} 0`,
    backgroundColor: colors.bg.state.ghost,
  };

  // Menu container styles
  const menuContainerStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: spacing.spacing[4],
    padding: spacing.spacing[16],
    backgroundColor: colors.bg.state.ghost,
    flex: 1,
  };

  // Actions container styles
  const actionsContainerStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 'auto',
    padding: spacing.spacing[16],
    backgroundColor: colors.bg.state.ghost,
    borderTop: `${stroke.default} solid ${colors.border.default}`,
  };

  return (
    <nav
      style={sidebarStyles}
      className={className}
      role="navigation"
      aria-label="Main navigation"
      {...rest}
    >
      {/* Header Container - Logo + Toggle */}
      <div style={headerContainerStyles}>
        {isCollapsed ? (
          <LogoSymbol size={24} />
        ) : (
          <Logo width={120} />
        )}
        
        <Button
          variant="iconOnly"
          style="ghost"
          size="sm"
          leadIcon={isCollapsed ? <Menu size={16} /> : <X size={16} />}
          onClick={onToggleCollapsed}
          aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        />
      </div>

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
              whiteSpace: 'nowrap'
            }}>
              {userName}
            </span>
            <ChevronDown size={16} color={colors.icon.muted} />
          </>
        )}
      </button>

      {/* Button Container - Create New */}
      {!isCollapsed && (
        <div style={buttonContainerStyles}>
          <Button
            label="Create New"
            style="secondary"
            size="sm"
            leadIcon={<Plus size={16} />}
            onClick={onCreateNewClick}
          />
        </div>
      )}

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
        {/* Theme Selector Button Group */}
        <ButtonGroup
          type="iconOnly"
          size={isCollapsed ? "sm" : "xs"}
          items={themeItems}
        />

        {/* Help Button */}
        {isCollapsed ? (
          <Button
            variant="iconOnly"
            style="ghost"
            size="xs"
            leadIcon={<HelpCircle size={12} />}
            onClick={onHelpClick}
            aria-label="Help"
          />
        ) : (
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