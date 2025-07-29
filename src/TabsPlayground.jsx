import React, { useState } from 'react';
import { useTheme } from './services/theme-context.jsx';
import { Tabs, Button } from './design-system/components/index.js';
import { spacing } from './design-system/tokens/spacing.js';
import { textStyles } from './design-system/styles/typography/typography-styles.js';

// Sample icons for demonstration
const HomeIcon = () => (
  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.1L1 12h3v9h6v-6h4v6h6v-9h3L12 2.1z"/>
  </svg>
);

const UserIcon = () => (
  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
  </svg>
);

const SettingsIcon = () => (
  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.82,11.69,4.82,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z"/>
  </svg>
);

const TabsPlayground = () => {
  const { colors } = useTheme();
  
  // State for different tab groups
  const [pillDefaultTab, setPillDefaultTab] = useState('home');
  const [pillFixedTab, setPillFixedTab] = useState('profile');
  const [segmentedDefaultTab, setSegmentedDefaultTab] = useState('dashboard');
  const [segmentedFixedTab, setSegmentedFixedTab] = useState('analytics');

  // Sample tab data
  const simpleTabs = [
    { id: 'home', label: 'Home' },
    { id: 'profile', label: 'Profile' },
    { id: 'settings', label: 'Settings' },
    { id: 'billing', label: 'Billing' }
  ];

  const tabsWithIcons = [
    { id: 'dashboard', label: 'Dashboard', leadIcon: <HomeIcon /> },
    { id: 'users', label: 'Users', leadIcon: <UserIcon /> },
    { id: 'config', label: 'Config', leadIcon: <SettingsIcon /> },
    { id: 'disabled', label: 'Disabled', leadIcon: <SettingsIcon />, disabled: true }
  ];

  const longLabelTabs = [
    { id: 'analytics', label: 'Analytics Dashboard' },
    { id: 'user-management', label: 'User Management' },
    { id: 'system-configuration', label: 'System Configuration' },
    { id: 'reports-and-exports', label: 'Reports & Exports' }
  ];

  const PlaygroundSection = ({ title, children }) => (
    <div style={{ marginBottom: spacing.spacing[32] }}>
      <h3 style={{
        ...textStyles.lg.semibold,
        color: colors.text.default,
        marginBottom: spacing.spacing[16]
      }}>
        {title}
      </h3>
      <div style={{
        backgroundColor: colors.bg.card.default,
        border: `1px solid ${colors.border.default}`,
        borderRadius: '8px',
        padding: spacing.spacing[24]
      }}>
        {children}
      </div>
    </div>
  );

  const DemoRow = ({ label, children }) => (
    <div style={{ marginBottom: spacing.spacing[24] }}>
      <h4 style={{
        ...textStyles.sm.medium,
        color: colors.text.subtle,
        marginBottom: spacing.spacing[8]
      }}>
        {label}
      </h4>
      <div style={{ display: 'flex', alignItems: 'center', gap: spacing.spacing[16] }}>
        {children}
      </div>
    </div>
  );

  return (
    <div style={{
      padding: spacing.spacing[32],
      backgroundColor: colors.bg.default,
      minHeight: '100vh'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: spacing.spacing[48] }}>
          <h1 style={{
            ...textStyles['3xl'].bold,
            color: colors.text.default,
            marginBottom: spacing.spacing[8]
          }}>
            Tabs Component Playground
          </h1>
          <p style={{
            ...textStyles.lg.normal,
            color: colors.text.subtle
          }}>
            Explore all variants of the Tabs component including pill and segmented styles with different types and states.
          </p>
        </div>

        {/* Pill Tabs */}
        <PlaygroundSection title="Pill Tabs">
          <DemoRow label="Default Type (Hugged Width)">
            <div>
              <div style={{ marginBottom: spacing.spacing[8] }}>
                <span style={{ ...textStyles.xs.medium, color: colors.text.muted }}>
                  Simple tabs
                </span>
              </div>
              <Tabs
                style="pill"
                type="default"
                tabs={simpleTabs}
                activeTab={pillDefaultTab}
                onTabChange={setPillDefaultTab}
              />
            </div>
            
            <div>
              <div style={{ marginBottom: spacing.spacing[8] }}>
                <span style={{ ...textStyles.xs.medium, color: colors.text.muted }}>
                  With icons
                </span>
              </div>
              <Tabs
                style="pill"
                type="default"
                tabs={tabsWithIcons}
                activeTab={pillDefaultTab}
                onTabChange={setPillDefaultTab}
              />
            </div>
          </DemoRow>

          <DemoRow label="Fixed Type (Equal Width)">
            <div style={{ width: '400px' }}>
              <div style={{ marginBottom: spacing.spacing[8] }}>
                <span style={{ ...textStyles.xs.medium, color: colors.text.muted }}>
                  Simple tabs (400px container)
                </span>
              </div>
              <Tabs
                style="pill"
                type="fixed"
                tabs={simpleTabs}
                activeTab={pillFixedTab}
                onTabChange={setPillFixedTab}
              />
            </div>
            
            <div style={{ width: '500px' }}>
              <div style={{ marginBottom: spacing.spacing[8] }}>
                <span style={{ ...textStyles.xs.medium, color: colors.text.muted }}>
                  Long labels with ellipsis (500px container)
                </span>
              </div>
              <Tabs
                style="pill"
                type="fixed"
                tabs={longLabelTabs}
                activeTab={pillFixedTab}
                onTabChange={setPillFixedTab}
              />
            </div>
          </DemoRow>
        </PlaygroundSection>

        {/* Segmented Tabs */}
        <PlaygroundSection title="Segmented Tabs">
          <DemoRow label="Default Type (Hugged Width)">
            <div>
              <div style={{ marginBottom: spacing.spacing[8] }}>
                <span style={{ ...textStyles.xs.medium, color: colors.text.muted }}>
                  Simple tabs
                </span>
              </div>
              <Tabs
                style="segmented"
                type="default"
                tabs={simpleTabs}
                activeTab={segmentedDefaultTab}
                onTabChange={setSegmentedDefaultTab}
              />
            </div>
            
            <div>
              <div style={{ marginBottom: spacing.spacing[8] }}>
                <span style={{ ...textStyles.xs.medium, color: colors.text.muted }}>
                  With icons
                </span>
              </div>
              <Tabs
                style="segmented"
                type="default"
                tabs={tabsWithIcons}
                activeTab={segmentedDefaultTab}
                onTabChange={setSegmentedDefaultTab}
              />
            </div>
          </DemoRow>

          <DemoRow label="Fixed Type (Equal Width)">
            <div style={{ width: '400px' }}>
              <div style={{ marginBottom: spacing.spacing[8] }}>
                <span style={{ ...textStyles.xs.medium, color: colors.text.muted }}>
                  Simple tabs (400px container)
                </span>
              </div>
              <Tabs
                style="segmented"
                type="fixed"
                tabs={simpleTabs}
                activeTab={segmentedFixedTab}
                onTabChange={setSegmentedFixedTab}
              />
            </div>
            
            <div style={{ width: '500px' }}>
              <div style={{ marginBottom: spacing.spacing[8] }}>
                <span style={{ ...textStyles.xs.medium, color: colors.text.muted }}>
                  Long labels with ellipsis (500px container)
                </span>
              </div>
              <Tabs
                style="segmented"
                type="fixed"
                tabs={longLabelTabs}
                activeTab={segmentedFixedTab}
                onTabChange={setSegmentedFixedTab}
              />
            </div>
          </DemoRow>
        </PlaygroundSection>

        {/* Interactive Demo */}
        <PlaygroundSection title="Interactive Demo">
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr 1fr', 
            gap: spacing.spacing[24],
            alignItems: 'start'
          }}>
            <div>
              <h4 style={{
                ...textStyles.md.medium,
                color: colors.text.default,
                marginBottom: spacing.spacing[16]
              }}>
                Tab Content Demo
              </h4>
              <div style={{ marginBottom: spacing.spacing[16] }}>
                <Tabs
                  style="segmented"
                  type="default"
                  tabs={[
                    { id: 'overview', label: 'Overview', leadIcon: <HomeIcon /> },
                    { id: 'details', label: 'Details', leadIcon: <UserIcon /> },
                    { id: 'settings', label: 'Settings', leadIcon: <SettingsIcon /> }
                  ]}
                  activeTab={segmentedDefaultTab}
                  onTabChange={setSegmentedDefaultTab}
                />
              </div>
              
              {/* Content based on active tab */}
              <div style={{
                backgroundColor: colors.bg.subtle,
                border: `1px solid ${colors.border.default}`,
                borderRadius: '6px',
                padding: spacing.spacing[16],
                minHeight: '120px'
              }}>
                {segmentedDefaultTab === 'overview' && (
                  <div>
                    <h5 style={{ ...textStyles.sm.semibold, color: colors.text.default, marginBottom: spacing.spacing[8] }}>
                      Overview Content
                    </h5>
                    <p style={{ ...textStyles.sm.normal, color: colors.text.subtle }}>
                      This is the overview section with general information and key metrics.
                    </p>
                  </div>
                )}
                {segmentedDefaultTab === 'details' && (
                  <div>
                    <h5 style={{ ...textStyles.sm.semibold, color: colors.text.default, marginBottom: spacing.spacing[8] }}>
                      Details Content
                    </h5>
                    <p style={{ ...textStyles.sm.normal, color: colors.text.subtle }}>
                      Detailed information and specifications are displayed here.
                    </p>
                  </div>
                )}
                {segmentedDefaultTab === 'settings' && (
                  <div>
                    <h5 style={{ ...textStyles.sm.semibold, color: colors.text.default, marginBottom: spacing.spacing[8] }}>
                      Settings Content
                    </h5>
                    <p style={{ ...textStyles.sm.normal, color: colors.text.subtle }}>
                      Configuration options and preferences can be managed here.
                    </p>
                  </div>
                )}
              </div>
            </div>

            <div>
              <h4 style={{
                ...textStyles.md.medium,
                color: colors.text.default,
                marginBottom: spacing.spacing[16]
              }}>
                Component Features
              </h4>
              <ul style={{
                ...textStyles.sm.normal,
                color: colors.text.subtle,
                listStyle: 'none',
                padding: 0,
                margin: 0
              }}>
                <li style={{ marginBottom: spacing.spacing[8] }}>
                  ✓ Theme-aware (adapts to light/dark mode)
                </li>
                <li style={{ marginBottom: spacing.spacing[8] }}>
                  ✓ Two styles: pill and segmented
                </li>
                <li style={{ marginBottom: spacing.spacing[8] }}>
                  ✓ Two types: default (hugged) and fixed width
                </li>
                <li style={{ marginBottom: spacing.spacing[8] }}>
                  ✓ Icon support with smooth animations
                </li>
                <li style={{ marginBottom: spacing.spacing[8] }}>
                  ✓ Hover and focus states
                </li>
                <li style={{ marginBottom: spacing.spacing[8] }}>
                  ✓ Disabled state support
                </li>
                <li style={{ marginBottom: spacing.spacing[8] }}>
                  ✓ Keyboard navigation (Space/Enter)
                </li>
                <li style={{ marginBottom: spacing.spacing[8] }}>
                  ✓ Accessibility support (ARIA attributes)
                </li>
                <li style={{ marginBottom: spacing.spacing[8] }}>
                  ✓ Smooth motion animations
                </li>
                <li style={{ marginBottom: spacing.spacing[8] }}>
                  ✓ Text overflow handling for long labels
                </li>
              </ul>
            </div>
          </div>
        </PlaygroundSection>

        {/* Footer */}
        <div style={{ 
          borderTop: `1px solid ${colors.border.default}`,
          paddingTop: spacing.spacing[24],
          textAlign: 'center'
        }}>
          <p style={{
            ...textStyles.sm.normal,
            color: colors.text.muted
          }}>
            Tabs component built with Pacelane Design System tokens and patterns
          </p>
        </div>
      </div>
    </div>
  );
};

export default TabsPlayground; 