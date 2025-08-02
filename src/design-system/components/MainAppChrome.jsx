import React, { useState, useEffect } from 'react';
import { useTheme } from '../../services/theme-context.jsx';
import { useAuth } from '../../services/auth-context.jsx';
import { spacing } from '../tokens/spacing.js';
import { textStyles } from '../styles/typography/typography-styles.js';
import { 
  subscribeToNavigation, 
  getCurrentPage, 
  getCurrentContent,
  navigateTo
} from '../../services/navigation.js';

// Design System Components
import HomeSidebar from './HomeSidebar.jsx';

// Pages
import HomePage from '../../pages/HomePage.jsx';
import ContentEditorPage from '../../pages/ContentEditorPage.jsx';
import KnowledgeBasePage from '../../pages/KnowledgeBasePage.jsx';
import NotificationsPage from '../../pages/NotificationsPage.jsx';
import PacingPage from '../../pages/PacingPage.jsx';
import ProfilePage from '../../pages/ProfilePage.jsx';
import HistoryPage from '../../pages/HistoryPage.jsx';
import PlanBillingPage from '../../pages/PlanBillingPage.jsx';

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
  const { signOut, user } = useAuth();
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [currentPage, setCurrentPage] = useState(getCurrentPage());
  const [currentContent, setCurrentContent] = useState(getCurrentContent());

  // Listen for navigation changes
  useEffect(() => {
    const unsubscribe = subscribeToNavigation(({ page, content }) => {
      setCurrentPage(page);
      setCurrentContent(content);
    });
    
    return unsubscribe;
  }, []);

  // Handle menu item clicks from sidebar
  const handleMenuItemClick = (menuId) => {
    // Use navigation service for proper page state management
    navigateTo(menuId);
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
    // For now, just sign out when avatar is clicked
    // Later this could show a dropdown menu with profile options
    signOut();
  };

  // Render content based on current page
  const renderContent = () => {
    // Render based on current page from navigation service
    switch (currentPage) {
      case 'content-editor':
        return <ContentEditorPage />;
      case 'home':
        return <HomePage />;
      case 'profile':
        return <ProfilePage />;
      case 'knowledge':
        return <KnowledgeBasePage />;
      case 'history':
        return <HistoryPage />;
      case 'pacing':
        return <PacingPage />;
      case 'notifications':
        return <NotificationsPage />;
      case 'plan-billing':
        return <PlanBillingPage />;
      default:
        return <HomePage />;
    }
  };

  // Determine if sidebar should be shown
  const showSidebar = currentPage !== 'content-editor';

  // Main container styles
  const containerStyles = {
    position: 'relative',
    height: '100vh',
    backgroundColor: colors.bg.subtle,
  };

  // Content area styles
  const contentStyles = {
    marginLeft: isSidebarCollapsed ? '72px' : '240px',
    width: isSidebarCollapsed ? 'calc(100% - 72px)' : 'calc(100% - 240px)',
    height: '100vh',
    backgroundColor: colors.bg.subtle,
    overflowY: 'scroll',
    scrollbarGutter: 'stable',
    transition: 'margin-left 0.3s cubic-bezier(0.4, 0.0, 0.2, 1), width 0.3s cubic-bezier(0.4, 0.0, 0.2, 1)',
  };

  return (
    <div
      style={containerStyles}
      className={className}
      {...rest}
    >
      {/* Fixed Sidebar - Only show when not on content editor page */}
      {showSidebar && (
        <HomeSidebar
          isCollapsed={isSidebarCollapsed}
          onToggleCollapsed={handleSidebarToggle}
          activeMenuItem={currentPage}
          onMenuItemClick={handleMenuItemClick}
          onCreateNewClick={handleCreateNewClick}
          onThemeChange={handleThemeChange}
          onHelpClick={handleHelpClick}
          onAvatarClick={handleAvatarClick}
          userName={user?.email || "User"}
          userAvatar="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=48&h=48&fit=crop&crop=face"
        />
      )}

      {/* Content Area */}
      <main style={contentStyles} role="main">
        {renderContent()}
      </main>
    </div>
  );
};

export default MainAppChrome;