import React, { useState } from 'react';
import { Star, Heart, CheckCircle } from 'lucide-react';
import Badge from './design-system/components/Badge.jsx';
import { useTheme } from './services/theme-context.jsx';
import { spacing } from './design-system/tokens/spacing.js';
import { cornerRadius } from './design-system/tokens/corner-radius.js';
import { textStyles } from './design-system/styles/typography/typography-styles.js';

const BadgePlayground = () => {
  const { colors } = useTheme();
  const [notifications, setNotifications] = useState({
    green: true,
    orange: true,
    red: true
  });

  const handleRemoveNotification = (color) => {
    setNotifications(prev => ({ ...prev, [color]: false }));
  };

  const resetNotifications = () => {
    setNotifications({ green: true, orange: true, red: true });
  };

  const sectionStyle = {
    marginBottom: spacing.spacing[48],
    padding: spacing.spacing[24],
    backgroundColor: colors.bg.card.default,
    borderRadius: cornerRadius.borderRadius.lg,
    border: `1px solid ${colors.border.default}`
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: spacing.spacing[24],
    marginTop: spacing.spacing[16]
  };

  const demoGroupStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: spacing.spacing[12]
  };

  const badgeRowStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: spacing.spacing[8],
    flexWrap: 'wrap'
  };

  return (
    <div style={{ 
      padding: spacing.spacing[32], 
      backgroundColor: colors.bg.default,
      color: colors.text.default,
      minHeight: '100vh'
    }}>
      <div style={{ marginBottom: spacing.spacing[32] }}>
        <h1 style={{ 
          ...textStyles['4xl'].bold,
          color: colors.text.default,
          marginBottom: spacing.spacing[8]
        }}>
          Badge Component
        </h1>
        <p style={{ 
          ...textStyles.lg.normal,
          color: colors.text.subtle,
          marginBottom: spacing.spacing[16]
        }}>
          Comprehensive badge component with text labels and optional dot indicators or icons. Supports multiple sizes, colors, and interactive features.
        </p>
      </div>

      {/* Default Variant */}
      <section style={sectionStyle}>
        <h2 style={{ 
          ...textStyles['2xl'].semibold,
          color: colors.text.default,
          marginBottom: spacing.spacing[16]
        }}>
          Default Variant
        </h2>
        
        <div style={gridStyle}>
          <div style={demoGroupStyle}>
            <h3 style={{ ...textStyles.md.medium, color: colors.text.subtle }}>Large Size</h3>
            <div style={badgeRowStyle}>
              <Badge variant="default" size="lg" color="green" label="Success" />
              <Badge variant="default" size="lg" color="orange" label="Warning" />
              <Badge variant="default" size="lg" color="red" label="Error" />
            </div>
          </div>

          <div style={demoGroupStyle}>
            <h3 style={{ ...textStyles.md.medium, color: colors.text.subtle }}>Small Size</h3>
            <div style={badgeRowStyle}>
              <Badge variant="default" size="sm" color="green" label="Success" />
              <Badge variant="default" size="sm" color="orange" label="Warning" />
              <Badge variant="default" size="sm" color="red" label="Error" />
            </div>
          </div>

          <div style={demoGroupStyle}>
            <h3 style={{ ...textStyles.md.medium, color: colors.text.subtle }}>With Border</h3>
            <div style={badgeRowStyle}>
              <Badge variant="default" size="lg" color="green" label="Success" border />
              <Badge variant="default" size="lg" color="orange" label="Warning" border />
              <Badge variant="default" size="lg" color="red" label="Error" border />
            </div>
          </div>

          <div style={demoGroupStyle}>
            <h3 style={{ ...textStyles.md.medium, color: colors.text.subtle }}>With Close Icon</h3>
            <div style={badgeRowStyle}>
              {notifications.green && (
                <Badge 
                  variant="default" 
                  size="lg" 
                  color="green" 
                  label="Success" 
                  closeIcon 
                  onClose={() => handleRemoveNotification('green')}
                />
              )}
              {notifications.orange && (
                <Badge 
                  variant="default" 
                  size="lg" 
                  color="orange" 
                  label="Warning" 
                  closeIcon 
                  onClose={() => handleRemoveNotification('orange')}
                />
              )}
              {notifications.red && (
                <Badge 
                  variant="default" 
                  size="lg" 
                  color="red" 
                  label="Error" 
                  closeIcon 
                  onClose={() => handleRemoveNotification('red')}
                />
              )}
              {(!notifications.green || !notifications.orange || !notifications.red) && (
                <button 
                  onClick={resetNotifications}
                  style={{
                    padding: `${spacing.spacing[4]} ${spacing.spacing[8]}`,
                    backgroundColor: colors.bg.state.secondary,
                    color: colors.text.subtle,
                    border: `1px solid ${colors.border.default}`,
                    borderRadius: cornerRadius.borderRadius.sm,
                    cursor: 'pointer',
                    ...textStyles.xs.medium
                  }}
                >
                  Reset
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Dot Variant */}
      <section style={sectionStyle}>
        <h2 style={{ 
          ...textStyles['2xl'].semibold,
          color: colors.text.default,
          marginBottom: spacing.spacing[16]
        }}>
          Dot Variant
        </h2>
        <p style={{ 
          ...textStyles.md.normal,
          color: colors.text.subtle,
          marginBottom: spacing.spacing[16]
        }}>
          Solid dot indicator followed by text label
        </p>
        
        <div style={gridStyle}>
          <div style={demoGroupStyle}>
            <h3 style={{ ...textStyles.md.medium, color: colors.text.subtle }}>Large Size</h3>
            <div style={badgeRowStyle}>
              <Badge variant="dot" size="lg" color="green" label="Success" />
              <Badge variant="dot" size="lg" color="orange" label="Warning" />
              <Badge variant="dot" size="lg" color="red" label="Error" />
            </div>
          </div>

          <div style={demoGroupStyle}>
            <h3 style={{ ...textStyles.md.medium, color: colors.text.subtle }}>Small Size</h3>
            <div style={badgeRowStyle}>
              <Badge variant="dot" size="sm" color="green" label="Success" />
              <Badge variant="dot" size="sm" color="orange" label="Warning" />
              <Badge variant="dot" size="sm" color="red" label="Error" />
            </div>
          </div>

          <div style={demoGroupStyle}>
            <h3 style={{ ...textStyles.md.medium, color: colors.text.subtle }}>With Border</h3>
            <div style={badgeRowStyle}>
              <Badge variant="dot" size="lg" color="green" label="Success" border />
              <Badge variant="dot" size="lg" color="orange" label="Warning" border />
              <Badge variant="dot" size="lg" color="red" label="Error" border />
            </div>
          </div>

          <div style={demoGroupStyle}>
            <h3 style={{ ...textStyles.md.medium, color: colors.text.subtle }}>Status Indicators</h3>
            <div style={badgeRowStyle}>
              <Badge variant="dot" size="sm" color="green" label="Online" />
              <Badge variant="dot" size="sm" color="orange" label="Away" />
              <Badge variant="dot" size="sm" color="red" label="Offline" />
            </div>
          </div>
        </div>
      </section>

      {/* Icon Variant */}
      <section style={sectionStyle}>
        <h2 style={{ 
          ...textStyles['2xl'].semibold,
          color: colors.text.default,
          marginBottom: spacing.spacing[16]
        }}>
          Icon Variant
        </h2>
        <p style={{ 
          ...textStyles.md.normal,
          color: colors.text.subtle,
          marginBottom: spacing.spacing[16]
        }}>
          Icon followed by text label
        </p>
        
        <div style={gridStyle}>
          <div style={demoGroupStyle}>
            <h3 style={{ ...textStyles.md.medium, color: colors.text.subtle }}>Large Size</h3>
            <div style={badgeRowStyle}>
              <Badge variant="icon" size="lg" color="green" icon={<CheckCircle />} label="Verified" />
              <Badge variant="icon" size="lg" color="orange" icon={<Star />} label="Featured" />
              <Badge variant="icon" size="lg" color="red" icon={<Heart />} label="Favorite" />
            </div>
          </div>

          <div style={demoGroupStyle}>
            <h3 style={{ ...textStyles.md.medium, color: colors.text.subtle }}>Small Size</h3>
            <div style={badgeRowStyle}>
              <Badge variant="icon" size="sm" color="green" icon={<CheckCircle />} label="Verified" />
              <Badge variant="icon" size="sm" color="orange" icon={<Star />} label="Featured" />
              <Badge variant="icon" size="sm" color="red" icon={<Heart />} label="Favorite" />
            </div>
          </div>

          <div style={demoGroupStyle}>
            <h3 style={{ ...textStyles.md.medium, color: colors.text.subtle }}>With Border</h3>
            <div style={badgeRowStyle}>
              <Badge variant="icon" size="lg" color="green" icon={<CheckCircle />} label="Verified" border />
              <Badge variant="icon" size="lg" color="orange" icon={<Star />} label="Featured" border />
              <Badge variant="icon" size="lg" color="red" icon={<Heart />} label="Favorite" border />
            </div>
          </div>

          <div style={demoGroupStyle}>
            <h3 style={{ ...textStyles.md.medium, color: colors.text.subtle }}>Interactive</h3>
            <div style={badgeRowStyle}>
              <Badge 
                variant="icon" 
                size="lg" 
                color="green" 
                icon={<CheckCircle />} 
                label="Verified"
                onClick={() => alert('Verified badge clicked!')}
              />
              <Badge 
                variant="icon" 
                size="lg" 
                color="orange" 
                icon={<Star />} 
                label="Featured"
                onClick={() => alert('Featured badge clicked!')}
              />
              <Badge 
                variant="icon" 
                size="lg" 
                color="red" 
                icon={<Heart />} 
                label="Favorite"
                onClick={() => alert('Favorite badge clicked!')}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section style={sectionStyle}>
        <h2 style={{ 
          ...textStyles['2xl'].semibold,
          color: colors.text.default,
          marginBottom: spacing.spacing[16]
        }}>
          Real-world Use Cases
        </h2>
        
        <div style={gridStyle}>
          <div style={demoGroupStyle}>
            <h3 style={{ ...textStyles.md.medium, color: colors.text.subtle }}>Notification Badges</h3>
            <div style={badgeRowStyle}>
              <div style={{ position: 'relative', display: 'inline-block' }}>
                <div style={{
                  padding: spacing.spacing[12],
                  backgroundColor: colors.bg.state.secondary,
                  borderRadius: cornerRadius.borderRadius.md,
                  ...textStyles.sm.medium,
                  color: colors.text.default
                }}>
                  Messages
                </div>
                <div style={{ position: 'absolute', top: '-6px', right: '-6px' }}>
                  <Badge variant="default" size="sm" color="red" label="3" />
                </div>
              </div>
              
              <div style={{ position: 'relative', display: 'inline-block' }}>
                <div style={{
                  padding: spacing.spacing[12],
                  backgroundColor: colors.bg.state.secondary,
                  borderRadius: cornerRadius.borderRadius.md,
                  ...textStyles.sm.medium,
                  color: colors.text.default
                }}>
                  Notifications
                </div>
                <div style={{ position: 'absolute', top: '-6px', right: '-6px' }}>
                  <Badge variant="dot" size="sm" color="red" label="New" />
                </div>
              </div>
            </div>
          </div>

          <div style={demoGroupStyle}>
            <h3 style={{ ...textStyles.md.medium, color: colors.text.subtle }}>Status Tags</h3>
            <div style={badgeRowStyle}>
              <Badge variant="default" size="sm" color="green" label="Active" />
              <Badge variant="default" size="sm" color="orange" label="Pending" />
              <Badge variant="default" size="sm" color="red" label="Inactive" />
            </div>
          </div>

          <div style={demoGroupStyle}>
            <h3 style={{ ...textStyles.md.medium, color: colors.text.subtle }}>Category Labels</h3>
            <div style={badgeRowStyle}>
              <Badge variant="default" size="lg" color="green" label="Environment" closeIcon onClose={() => {}} />
              <Badge variant="default" size="lg" color="orange" label="Technology" closeIcon onClose={() => {}} />
              <Badge variant="default" size="lg" color="red" label="Business" closeIcon onClose={() => {}} />
            </div>
          </div>

          <div style={demoGroupStyle}>
            <h3 style={{ ...textStyles.md.medium, color: colors.text.subtle }}>Achievement Badges</h3>
            <div style={badgeRowStyle}>
              <Badge variant="icon" size="lg" color="green" icon={<CheckCircle />} label="Completed" border />
              <Badge variant="icon" size="lg" color="orange" icon={<Star />} label="Expert" border />
              <Badge variant="icon" size="lg" color="red" icon={<Heart />} label="Loved" border />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BadgePlayground;