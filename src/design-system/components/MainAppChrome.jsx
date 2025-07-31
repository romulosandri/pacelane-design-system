import React, { useState } from 'react';
import { useTheme } from '../../services/theme-context.jsx';
import { spacing } from '../tokens/spacing.js';
import { textStyles } from '../styles/typography/typography-styles.js';

// Design System Components
import HomeSidebar from './HomeSidebar.jsx';

// Pages
import HomePage from '../../pages/HomePage.jsx';

/**
 * MainAppChrome component - Main application layout with sidebar navigation and content area
 * 
 * @param {Object} props
 * @param {string} [props.className] - Additional CSS classes
 */
const MainAppChrome = ({
  className = '',
  ...rest
}) => {
  const { colors } = useTheme();
  const [activeMenuItem, setActiveMenuItem] = useState('home');
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  // Handle menu item clicks from sidebar
  const handleMenuItemClick = (menuId) => {
    setActiveMenuItem(menuId);
  };

  // Handle sidebar toggle
  const handleSidebarToggle = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  // Handle other sidebar actions
  const handleCreateNewClick = () => {
    console.log('Create New clicked');
  };

  const handleThemeChange = (theme) => {
    console.log('Theme changed to:', theme);
  };

  const handleHelpClick = () => {
    console.log('Help clicked');
  };

  const handleAvatarClick = () => {
    console.log('Avatar clicked');
  };

  // Render content based on active menu item
  const renderContent = () => {
    switch (activeMenuItem) {
      case 'home':
        return <HomePage />;
      case 'profile':
        return (
          <div style={{ padding: spacing.spacing[32] }}>
            <h1 style={textStyles['2xl'].bold}>Profile</h1>
            <p style={textStyles.md.normal}>Profile page content coming soon...</p>
          </div>
        );
      case 'knowledge':
        return (
          <div style={{ padding: spacing.spacing[32] }}>
            <h1 style={textStyles['2xl'].bold}>Knowledge</h1>
            <p style={textStyles.md.normal}>Knowledge base content coming soon...</p>
          </div>
        );
      case 'calendar':
        return (
          <div style={{ padding: spacing.spacing[32] }}>
            <h1 style={textStyles['2xl'].bold}>Calendar</h1>
            <p style={textStyles.md.normal}>Calendar content coming soon...</p>
          </div>
        );
      case 'pacing':
        return (
          <div style={{ padding: spacing.spacing[32] }}>
            <h1 style={textStyles['2xl'].bold}>Pacing</h1>
            <p style={textStyles.md.normal}>Pacing tools content coming soon...</p>
          </div>
        );
      case 'notifications':
        return (
          <div style={{ padding: spacing.spacing[32] }}>
            <h1 style={textStyles['2xl'].bold}>Notifications</h1>
            <p style={textStyles.md.normal}>Notifications content coming soon...</p>
          </div>
        );
      case 'settings':
        return (
          <div style={{ padding: spacing.spacing[32] }}>
            <h1 style={textStyles['2xl'].bold}>Settings</h1>
            <p style={textStyles.md.normal}>Settings content coming soon...</p>
          </div>
        );
      default:
        return <HomePage />;
    }
  };

  // Main container styles
  const containerStyles = {
    display: 'flex',
    height: '100vh',
    backgroundColor: colors.bg.subtle,
  };

  // Content area styles
  const contentStyles = {
    flex: 1,
    backgroundColor: colors.bg.subtle,
    overflow: 'auto',
  };

  return (
    <div
      style={containerStyles}
      className={className}
      {...rest}
    >
      {/* Fixed Sidebar */}
      <HomeSidebar
        isCollapsed={isSidebarCollapsed}
        onToggleCollapsed={handleSidebarToggle}
        activeMenuItem={activeMenuItem}
        onMenuItemClick={handleMenuItemClick}
        onCreateNewClick={handleCreateNewClick}
        onThemeChange={handleThemeChange}
        onHelpClick={handleHelpClick}
        onAvatarClick={handleAvatarClick}
        userName="John Doe"
        userAvatar="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=48&h=48&fit=crop&crop=face"
      />

      {/* Content Area */}
      <main style={contentStyles} role="main">
        {renderContent()}
      </main>
    </div>
  );
};

export default MainAppChrome;