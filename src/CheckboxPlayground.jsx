import React, { useState } from 'react';
import { useTheme } from './services/theme-context.jsx';
import { spacing } from './design-system/tokens/spacing.js';
import { cornerRadius } from './design-system/tokens/corner-radius.js';
import { textStyles } from './design-system/styles/typography/typography-styles.js';
import { getShadow } from './design-system/tokens/shadows.js';
import { Checkbox, Button } from './design-system/components/index.js';

const CheckboxPlayground = () => {
  const { colors } = useTheme();
  
  // State for interactive examples
  const [basicChecked, setBasicChecked] = useState(false);
  const [indeterminateChecked, setIndeterminateChecked] = useState(false);
  const [formData, setFormData] = useState({
    newsletter: true,
    notifications: false,
    analytics: false,
    marketing: false
  });

  // Handler for form checkboxes
  const handleFormChange = (field) => (e) => {
    setFormData(prev => ({
      ...prev,
      [field]: e.target.checked
    }));
  };

  return (
    <div 
      style={{ 
        padding: spacing.spacing[32],
        backgroundColor: colors.bg.default,
        color: colors.text.default,
        minHeight: '100vh'
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: spacing.spacing[48] }}>
        <h1 style={{ ...textStyles['4xl'].bold, marginBottom: spacing.spacing[8] }}>
          Checkbox Component
        </h1>
        <p style={{ ...textStyles.lg.normal, color: colors.text.subtle }}>
          Comprehensive checkbox component with multiple states, variants, and smooth animations
        </p>
      </div>

      {/* All States Demo */}
      <section style={{ marginBottom: spacing.spacing[64] }}>
        <h2 style={{ ...textStyles['2xl'].semibold, marginBottom: spacing.spacing[24] }}>
          All States & Variants
        </h2>
        
        <div 
          style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: spacing.spacing[32],
            padding: spacing.spacing[24],
            backgroundColor: colors.bg.card.default,
            borderRadius: cornerRadius.borderRadius.lg,
            boxShadow: getShadow('regular.card', colors, { withBorder: true })
          }}
        >
          {/* Unchecked States */}
          <div>
            <h3 style={{ ...textStyles.lg.medium, marginBottom: spacing.spacing[16] }}>
              Unchecked States
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: spacing.spacing[16] }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: spacing.spacing[12] }}>
                <Checkbox 
                  checked={false}
                  onChange={() => {}}
                />
                <span style={textStyles.sm.normal}>Default unchecked</span>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: spacing.spacing[12] }}>
                <Checkbox 
                  checked={false}
                  disabled={true}
                  onChange={() => {}}
                />
                <span style={{ ...textStyles.sm.normal, color: colors.text.muted }}>
                  Disabled unchecked
                </span>
              </div>
            </div>
          </div>

          {/* Checked States */}
          <div>
            <h3 style={{ ...textStyles.lg.medium, marginBottom: spacing.spacing[16] }}>
              Checked States
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: spacing.spacing[16] }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: spacing.spacing[12] }}>
                <Checkbox 
                  checked={true}
                  onChange={() => {}}
                />
                <span style={textStyles.sm.normal}>Default checked</span>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: spacing.spacing[12] }}>
                <Checkbox 
                  checked={true}
                  disabled={true}
                  onChange={() => {}}
                />
                <span style={{ ...textStyles.sm.normal, color: colors.text.muted }}>
                  Disabled checked
                </span>
              </div>
            </div>
          </div>

          {/* Indeterminate States */}
          <div>
            <h3 style={{ ...textStyles.lg.medium, marginBottom: spacing.spacing[16] }}>
              Indeterminate States
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: spacing.spacing[16] }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: spacing.spacing[12] }}>
                <Checkbox 
                  indeterminate={true}
                  onChange={() => {}}
                />
                <span style={textStyles.sm.normal}>Default indeterminate</span>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: spacing.spacing[12] }}>
                <Checkbox 
                  indeterminate={true}
                  disabled={true}
                  onChange={() => {}}
                />
                <span style={{ ...textStyles.sm.normal, color: colors.text.muted }}>
                  Disabled indeterminate
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Examples */}
      <section style={{ marginBottom: spacing.spacing[64] }}>
        <h2 style={{ ...textStyles['2xl'].semibold, marginBottom: spacing.spacing[24] }}>
          Interactive Examples
        </h2>
        
        <div 
          style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: spacing.spacing[32]
          }}
        >
          {/* Basic Toggle */}
          <div 
            style={{ 
              padding: spacing.spacing[24],
              backgroundColor: colors.bg.card.default,
              borderRadius: cornerRadius.borderRadius.lg,
              boxShadow: getShadow('regular.card', colors, { withBorder: true })
            }}
          >
            <h3 style={{ ...textStyles.lg.medium, marginBottom: spacing.spacing[16] }}>
              Basic Toggle
            </h3>
            <div style={{ display: 'flex', alignItems: 'center', gap: spacing.spacing[12] }}>
              <Checkbox 
                checked={basicChecked}
                onChange={(e) => setBasicChecked(e.target.checked)}
                id="basic-checkbox"
              />
              <label 
                htmlFor="basic-checkbox"
                style={{ ...textStyles.sm.normal, cursor: 'pointer' }}
              >
                I agree to the terms and conditions
              </label>
            </div>
            <p style={{ 
              ...textStyles.xs.normal, 
              color: colors.text.muted,
              marginTop: spacing.spacing[8] 
            }}>
              Status: {basicChecked ? 'Checked' : 'Unchecked'}
            </p>
          </div>

          {/* Indeterminate Toggle */}
          <div 
            style={{ 
              padding: spacing.spacing[24],
              backgroundColor: colors.bg.card.default,
              borderRadius: cornerRadius.borderRadius.lg,
              boxShadow: getShadow('regular.card', colors, { withBorder: true })
            }}
          >
            <h3 style={{ ...textStyles.lg.medium, marginBottom: spacing.spacing[16] }}>
              Indeterminate State
            </h3>
            <div style={{ display: 'flex', alignItems: 'center', gap: spacing.spacing[12] }}>
              <Checkbox 
                indeterminate={!indeterminateChecked}
                checked={indeterminateChecked}
                onChange={(e) => setIndeterminateChecked(e.target.checked)}
                id="indeterminate-checkbox"
              />
              <label 
                htmlFor="indeterminate-checkbox"
                style={{ ...textStyles.sm.normal, cursor: 'pointer' }}
              >
                Mixed selection state
              </label>
            </div>
            <p style={{ 
              ...textStyles.xs.normal, 
              color: colors.text.muted,
              marginTop: spacing.spacing[8] 
            }}>
              Status: {indeterminateChecked ? 'Checked' : 'Indeterminate'}
            </p>
          </div>
        </div>
      </section>

      {/* Form Example */}
      <section style={{ marginBottom: spacing.spacing[64] }}>
        <h2 style={{ ...textStyles['2xl'].semibold, marginBottom: spacing.spacing[24] }}>
          Form Integration
        </h2>
        
        <div 
          style={{ 
            padding: spacing.spacing[32],
            backgroundColor: colors.bg.card.default,
            borderRadius: cornerRadius.borderRadius.lg,
            boxShadow: getShadow('regular.card', colors, { withBorder: true }),
            maxWidth: '500px'
          }}
        >
          <h3 style={{ ...textStyles.lg.medium, marginBottom: spacing.spacing[24] }}>
            Email Preferences
          </h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: spacing.spacing[20] }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: spacing.spacing[12] }}>
              <Checkbox 
                checked={formData.newsletter}
                onChange={handleFormChange('newsletter')}
                id="newsletter"
              />
              <div>
                <label 
                  htmlFor="newsletter"
                  style={{ ...textStyles.sm.medium, cursor: 'pointer', display: 'block' }}
                >
                  Newsletter Subscription
                </label>
                <p style={{ ...textStyles.xs.normal, color: colors.text.muted }}>
                  Receive our weekly newsletter with updates and tips
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: spacing.spacing[12] }}>
              <Checkbox 
                checked={formData.notifications}
                onChange={handleFormChange('notifications')}
                id="notifications"
              />
              <div>
                <label 
                  htmlFor="notifications"
                  style={{ ...textStyles.sm.medium, cursor: 'pointer', display: 'block' }}
                >
                  Push Notifications
                </label>
                <p style={{ ...textStyles.xs.normal, color: colors.text.muted }}>
                  Get notified about important updates
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: spacing.spacing[12] }}>
              <Checkbox 
                checked={formData.analytics}
                onChange={handleFormChange('analytics')}
                id="analytics"
              />
              <div>
                <label 
                  htmlFor="analytics"
                  style={{ ...textStyles.sm.medium, cursor: 'pointer', display: 'block' }}
                >
                  Analytics & Performance
                </label>
                <p style={{ ...textStyles.xs.normal, color: colors.text.muted }}>
                  Help us improve by sharing usage data
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: spacing.spacing[12] }}>
              <Checkbox 
                checked={formData.marketing}
                onChange={handleFormChange('marketing')}
                id="marketing"
              />
              <div>
                <label 
                  htmlFor="marketing"
                  style={{ ...textStyles.sm.medium, cursor: 'pointer', display: 'block' }}
                >
                  Marketing Communications
                </label>
                <p style={{ ...textStyles.xs.normal, color: colors.text.muted }}>
                  Receive promotional emails and special offers
                </p>
              </div>
            </div>
          </div>

          <div style={{ 
            marginTop: spacing.spacing[32],
            paddingTop: spacing.spacing[24],
            borderTop: `1px solid ${colors.border.default}`
          }}>
            <Button 
              label="Save Preferences"
              style="primary"
              size="md"
              onClick={() => {
                console.log('Form data:', formData);
                alert('Preferences saved!');
              }}
            />
          </div>
        </div>
      </section>

      {/* Accessibility Features */}
      <section>
        <h2 style={{ ...textStyles['2xl'].semibold, marginBottom: spacing.spacing[24] }}>
          Accessibility Features
        </h2>
        
        <div 
          style={{ 
            padding: spacing.spacing[24],
            backgroundColor: colors.bg.card.default,
            borderRadius: cornerRadius.borderRadius.lg,
            boxShadow: getShadow('regular.card', colors, { withBorder: true })
          }}
        >
          <ul style={{ 
            ...textStyles.sm.normal, 
            color: colors.text.subtle,
            listStyle: 'disc',
            paddingLeft: spacing.spacing[20],
            lineHeight: '1.6'
          }}>
            <li>Full keyboard navigation support (Tab, Space)</li>
            <li>Screen reader compatible with proper ARIA attributes</li>
            <li>Focus indicators with theme-aware styling</li>
            <li>Support for indeterminate state (aria-checked="mixed")</li>
            <li>Proper label association and form integration</li>
            <li>Enhanced hover animations with motion preferences respect</li>
            <li>Consistent 16px touch target for mobile accessibility</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default CheckboxPlayground;