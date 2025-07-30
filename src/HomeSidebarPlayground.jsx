import React, { useState } from 'react';
import { ThemeProvider, useTheme } from './services/theme-context.jsx';
import HomeSidebar from './design-system/components/HomeSidebar.jsx';
import { spacing } from './design-system/tokens/spacing.js';

const PlaygroundContent = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState('home');
  const { themePreference, theme } = useTheme();

  const handleToggleCollapsed = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleMenuItemClick = (itemId) => {
    setActiveMenuItem(itemId);
    console.log('Menu item clicked:', itemId);
  };

  const handleCreateNewClick = () => {
    console.log('Create New clicked');
  };

  const handleThemeChange = (theme) => {
    console.log('Theme changed:', theme);
  };

  const handleHelpClick = () => {
    console.log('Help clicked');
  };

  const handleAvatarClick = () => {
    console.log('Avatar clicked - navigating to profile page');
  };

  return (
    <div style={{ 
      display: 'flex', 
      height: '100vh',
      fontFamily: 'Inter, system-ui, sans-serif'
    }}>
        {/* HomeSidebar */}
        <HomeSidebar
          isCollapsed={isCollapsed}
          onToggleCollapsed={handleToggleCollapsed}
          userName="Alex Johnson"
          userAvatar="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=48&h=48&fit=crop&crop=face"
          activeMenuItem={activeMenuItem}
          onMenuItemClick={handleMenuItemClick}
          onCreateNewClick={handleCreateNewClick}
          onThemeChange={handleThemeChange}
          onHelpClick={handleHelpClick}
          onAvatarClick={handleAvatarClick}
        />

        {/* Main Content Area */}
        <div style={{ 
          flex: 1, 
          padding: spacing.spacing[32],
          backgroundColor: '#f8f9fa',
          display: 'flex',
          flexDirection: 'column',
          gap: spacing.spacing[24]
        }}>
          <div>
            <h1 style={{ 
              fontSize: '32px', 
              fontWeight: 600, 
              margin: 0, 
              marginBottom: spacing.spacing[8],
              color: '#1a1a1a'
            }}>
              HomeSidebar Playground
            </h1>
            <p style={{ 
              fontSize: '16px', 
              color: '#666', 
              margin: 0,
              lineHeight: 1.5
            }}>
              Interactive demo of the HomeSidebar component with both open and collapsed states.
            </p>
          </div>

          <div style={{ 
            backgroundColor: 'white', 
            padding: spacing.spacing[24], 
            borderRadius: '8px',
            border: '1px solid #e5e7eb',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
          }}>
            <h2 style={{ 
              fontSize: '20px', 
              fontWeight: 600, 
              margin: 0, 
              marginBottom: spacing.spacing[16],
              color: '#1a1a1a'
            }}>
              Current State
            </h2>
            
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: spacing.spacing[16]
            }}>
              <div>
                <strong>Sidebar State:</strong>
                <div style={{ 
                  marginTop: spacing.spacing[4],
                  padding: spacing.spacing[8],
                  backgroundColor: '#f3f4f6',
                  borderRadius: '4px',
                  fontFamily: 'monospace'
                }}>
                  {isCollapsed ? 'Collapsed' : 'Open'}
                </div>
              </div>
              
              <div>
                <strong>Active Menu Item:</strong>
                <div style={{ 
                  marginTop: spacing.spacing[4],
                  padding: spacing.spacing[8],
                  backgroundColor: '#f3f4f6',
                  borderRadius: '4px',
                  fontFamily: 'monospace'
                }}>
                  {activeMenuItem}
                </div>
              </div>
              
              <div>
                <strong>Theme Preference:</strong>
                <div style={{ 
                  marginTop: spacing.spacing[4],
                  padding: spacing.spacing[8],
                  backgroundColor: '#f3f4f6',
                  borderRadius: '4px',
                  fontFamily: 'monospace'
                }}>
                  {themePreference}
                </div>
              </div>
              
              <div>
                <strong>Resolved Theme:</strong>
                <div style={{ 
                  marginTop: spacing.spacing[4],
                  padding: spacing.spacing[8],
                  backgroundColor: '#f3f4f6',
                  borderRadius: '4px',
                  fontFamily: 'monospace'
                }}>
                  {theme}
                </div>
              </div>
            </div>
          </div>

          <div style={{ 
            backgroundColor: 'white', 
            padding: spacing.spacing[24], 
            borderRadius: '8px',
            border: '1px solid #e5e7eb',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
          }}>
            <h2 style={{ 
              fontSize: '20px', 
              fontWeight: 600, 
              margin: 0, 
              marginBottom: spacing.spacing[16],
              color: '#1a1a1a'
            }}>
              Features Demonstrated
            </h2>
            
            <ul style={{ 
              margin: 0, 
              paddingLeft: spacing.spacing[20],
              color: '#4b5563',
              lineHeight: 1.6
            }}>
              <li>Collapsed and open states with different layouts</li>
              <li>Logo switching between full logotype and symbol</li>
              <li>Clickable avatar container with hover state (for profile navigation)</li>
              <li>Create New button (hidden in collapsed state)</li>
              <li>Main navigation menu items (Home, Profile, Knowledge, Calendar, Pacing)</li>
              <li>Secondary menu items (Notifications, Settings)</li>
              <li>Fully functional theme selector (Light, Dark, System) - try clicking the theme buttons!</li>
              <li>Help button with different styles in each state</li>
              <li>Full keyboard navigation and accessibility</li>
              <li>Theme-aware colors throughout</li>
            </ul>
          </div>

          <div style={{ 
            backgroundColor: 'white', 
            padding: spacing.spacing[24], 
            borderRadius: '8px',
            border: '1px solid #e5e7eb',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
          }}>
            <h2 style={{ 
              fontSize: '20px', 
              fontWeight: 600, 
              margin: 0, 
              marginBottom: spacing.spacing[16],
              color: '#1a1a1a'
            }}>
              Theme System
            </h2>
            
            <div style={{ 
              padding: spacing.spacing[16],
              backgroundColor: '#f0f9ff',
              borderRadius: '6px',
              border: '1px solid #0ea5e9',
              marginBottom: spacing.spacing[16]
            }}>
              <p style={{ 
                margin: 0, 
                fontSize: '14px', 
                color: '#0c4a6e',
                lineHeight: 1.5
              }}>
                <strong>Try the theme selector!</strong> Click the sun, moon, or monitor icons in the sidebar to switch themes:
                <br />• <strong>Sun:</strong> Light theme
                <br />• <strong>Moon:</strong> Dark theme  
                <br />• <strong>Monitor:</strong> System preference (follows your OS theme and changes automatically)
                <br /><br />
                Your selection is saved to localStorage and will persist across browser sessions.
              </p>
            </div>
          </div>

          <div style={{ 
            backgroundColor: 'white', 
            padding: spacing.spacing[24], 
            borderRadius: '8px',
            border: '1px solid #e5e7eb',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
          }}>
            <h2 style={{ 
              fontSize: '20px', 
              fontWeight: 600, 
              margin: 0, 
              marginBottom: spacing.spacing[16],
              color: '#1a1a1a'
            }}>
              Design System Usage
            </h2>
            
            <div style={{ 
              padding: spacing.spacing[16],
              backgroundColor: '#f9fafb',
              borderRadius: '6px',
              border: '1px solid #e5e7eb'
            }}>
              <p style={{ 
                margin: 0, 
                fontSize: '14px', 
                color: '#6b7280',
                lineHeight: 1.5
              }}>
                This component follows all design system patterns including:
                <br />• Using design system tokens for spacing, colors, typography, and borders
                <br />• Leveraging existing components (Button, ButtonGroup, SidebarMenuItem, Logo)
                <br />• Using Lucide React icons throughout
                <br />• Following semantic color patterns for theme compatibility
                <br />• Implementing proper accessibility patterns
                <br />• Full theme system with persistence and system preference detection
                <br />• Theme preference saved to localStorage and restored on reload
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

const HomeSidebarPlayground = () => {
  return (
    <ThemeProvider>
      <PlaygroundContent />
    </ThemeProvider>
  );
};

export default HomeSidebarPlayground;