import React from 'react';
import { useTheme } from '../services/theme-context.jsx';
import { spacing } from '../design-system/tokens/spacing.js';
import { textStyles } from '../design-system/styles/typography/typography-styles.js';
import { cornerRadius } from '../design-system/tokens/corner-radius.js';
import { shadows, getShadow } from '../design-system/tokens/shadows.js';

// Design System Components
import Button from '../design-system/components/Button.jsx';
import Bichaurinho from '../design-system/components/Bichaurinho.jsx';

// Icons
import { Plus, BookOpen, Calendar, Clock, User } from 'lucide-react';

/**
 * HomePage component - Landing page for the application
 */
const HomePage = () => {
  const { colors } = useTheme();

  // Container styles
  const containerStyles = {
    padding: spacing.spacing[32],
    maxWidth: '1200px',
    margin: '0 auto',
  };

  // Hero section styles
  const heroStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: spacing.spacing[48],
    marginBottom: spacing.spacing[48],
  };

  // Hero content styles
  const heroContentStyles = {
    flex: 1,
  };

  // Card grid styles
  const cardGridStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: spacing.spacing[24],
    marginBottom: spacing.spacing[48],
  };

  // Quick action card styles
  const cardStyles = {
    padding: spacing.spacing[24],
    backgroundColor: colors.bg.card.default,
    borderRadius: cornerRadius.borderRadius.lg,
    boxShadow: getShadow('regular.card', colors, { withBorder: true }),
    display: 'flex',
    flexDirection: 'column',
    gap: spacing.spacing[16],
  };

  // Icon container styles
  const iconContainerStyles = {
    width: '48px',
    height: '48px',
    borderRadius: cornerRadius.borderRadius.md,
    backgroundColor: colors.bg.state.soft,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <div style={containerStyles}>
      {/* Hero Section */}
      <section style={heroStyles}>
        <div style={heroContentStyles}>
          <h1 style={{ 
            ...textStyles['4xl'].bold, 
            color: colors.text.default,
            marginBottom: spacing.spacing[16] 
          }}>
            Welcome to Pacelane
          </h1>
          <p style={{ 
            ...textStyles.lg.normal, 
            color: colors.text.subtle,
            marginBottom: spacing.spacing[24],
            lineHeight: '1.6'
          }}>
            Your personal productivity companion designed to help you manage knowledge, 
            track progress, and maintain a sustainable pace in your learning journey.
          </p>
          <Button
            label="Get Started"
            style="primary"
            size="lg"
            leadIcon={<Plus size={20} />}
            onClick={() => console.log('Get started clicked')}
          />
        </div>
        
        {/* Mascot */}
        <div>
          <Bichaurinho variant={1} size={200} />
        </div>
      </section>

      {/* Quick Actions Grid */}
      <section>
        <h2 style={{ 
          ...textStyles['2xl'].semibold, 
          color: colors.text.default,
          marginBottom: spacing.spacing[24] 
        }}>
          Quick Actions
        </h2>
        
        <div style={cardGridStyles}>
          {/* Knowledge Card */}
          <div style={cardStyles}>
            <div style={iconContainerStyles}>
              <BookOpen size={24} color={colors.icon.default} />
            </div>
            <div>
              <h3 style={{ 
                ...textStyles.lg.semibold, 
                color: colors.text.default,
                marginBottom: spacing.spacing[8] 
              }}>
                Manage Knowledge
              </h3>
              <p style={{ 
                ...textStyles.sm.normal, 
                color: colors.text.subtle,
                marginBottom: spacing.spacing[16] 
              }}>
                Organize your learning materials, notes, and insights in one place.
              </p>
              <Button
                label="Explore Knowledge"
                style="secondary"
                size="sm"
                onClick={() => console.log('Knowledge clicked')}
              />
            </div>
          </div>

          {/* Calendar Card */}
          <div style={cardStyles}>
            <div style={iconContainerStyles}>
              <Calendar size={24} color={colors.icon.default} />
            </div>
            <div>
              <h3 style={{ 
                ...textStyles.lg.semibold, 
                color: colors.text.default,
                marginBottom: spacing.spacing[8] 
              }}>
                Plan Your Schedule
              </h3>
              <p style={{ 
                ...textStyles.sm.normal, 
                color: colors.text.subtle,
                marginBottom: spacing.spacing[16] 
              }}>
                Set goals, schedule study sessions, and track your progress over time.
              </p>
              <Button
                label="View Calendar"
                style="secondary"
                size="sm"
                onClick={() => console.log('Calendar clicked')}
              />
            </div>
          </div>

          {/* Pacing Card */}
          <div style={cardStyles}>
            <div style={iconContainerStyles}>
              <Clock size={24} color={colors.icon.default} />
            </div>
            <div>
              <h3 style={{ 
                ...textStyles.lg.semibold, 
                color: colors.text.default,
                marginBottom: spacing.spacing[8] 
              }}>
                Monitor Pacing
              </h3>
              <p style={{ 
                ...textStyles.sm.normal, 
                color: colors.text.subtle,
                marginBottom: spacing.spacing[16] 
              }}>
                Track your learning velocity and maintain a sustainable pace.
              </p>
              <Button
                label="Check Pacing"
                style="secondary"
                size="sm"
                onClick={() => console.log('Pacing clicked')}
              />
            </div>
          </div>

          {/* Profile Card */}
          <div style={cardStyles}>
            <div style={iconContainerStyles}>
              <User size={24} color={colors.icon.default} />
            </div>
            <div>
              <h3 style={{ 
                ...textStyles.lg.semibold, 
                color: colors.text.default,
                marginBottom: spacing.spacing[8] 
              }}>
                Update Profile
              </h3>
              <p style={{ 
                ...textStyles.sm.normal, 
                color: colors.text.subtle,
                marginBottom: spacing.spacing[16] 
              }}>
                Customize your preferences and manage your account settings.
              </p>
              <Button
                label="Edit Profile"
                style="secondary"
                size="sm"
                onClick={() => console.log('Profile clicked')}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;