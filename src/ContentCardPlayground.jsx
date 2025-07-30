import React from 'react';
import { useTheme } from './services/theme-context.jsx';
import { spacing } from './design-system/tokens/spacing.js';
import { textStyles } from './design-system/styles/typography/typography-styles.js';
import ContentCard from './design-system/components/ContentCard.jsx';

const ContentCardPlayground = () => {
  const { colors } = useTheme();

  // Sample image URL for the image variant
  const sampleImage = "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=400&h=240&q=80";

  // Handle menu actions
  const handleMenuAction = (action, cardTitle) => {
    console.log(`${action} action clicked for: ${cardTitle}`);
    alert(`${action.charAt(0).toUpperCase() + action.slice(1)} action clicked for: ${cardTitle}`);
  };

  // Handle card clicks
  const handleCardClick = (cardTitle) => {
    console.log(`Card clicked: ${cardTitle}`);
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: colors.bg.default,
        padding: spacing.spacing[40],
        display: 'flex',
        flexDirection: 'column',
        gap: spacing.spacing[32],
      }}
    >
      {/* Header */}
      <div>
        <h1 style={{ ...textStyles['4xl'].bold, color: colors.text.default, margin: 0 }}>
          Content Card Component
        </h1>
        <p style={{ ...textStyles.lg.normal, color: colors.text.muted, marginTop: spacing.spacing[8] }}>
          Interactive content cards with hover animations, dropdown menus, and support for image or gradient backgrounds.
        </p>
      </div>

      {/* Content Cards Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
          gap: spacing.spacing[32],
          alignItems: 'start'
        }}
      >
        {/* Gradient Variant */}
        <div>
          <h2 style={{ ...textStyles['2xl'].semibold, color: colors.text.default, marginBottom: spacing.spacing[16] }}>
            Gradient Background
          </h2>
          <ContentCard
            variant="gradient"
            title="Product Design Innovation"
            subtitle="Last edited 2 hours ago"
            onMenuAction={(action) => handleMenuAction(action, 'Product Design Innovation')}
            onClick={() => handleCardClick('Product Design Innovation')}
          />
        </div>

        {/* Image Variant */}
        <div>
          <h2 style={{ ...textStyles['2xl'].semibold, color: colors.text.default, marginBottom: spacing.spacing[16] }}>
            Image Background
          </h2>
          <ContentCard
            variant="image"
            image={sampleImage}
            title="Tech Leadership Insights"
            subtitle="Last edited yesterday"
            onMenuAction={(action) => handleMenuAction(action, 'Tech Leadership Insights')}
            onClick={() => handleCardClick('Tech Leadership Insights')}
          />
        </div>

        {/* Custom Content */}
        <div>
          <h2 style={{ ...textStyles['2xl'].semibold, color: colors.text.default, marginBottom: spacing.spacing[16] }}>
            Custom Content
          </h2>
          <ContentCard
            variant="gradient"
            title="UX Research Findings"
            subtitle="Last edited 3 days ago"
            content={`📊 New research reveals fascinating insights about user behavior!

Our latest study uncovered some surprising patterns:

• Users prefer progressive disclosure over all-at-once information
• Micro-interactions significantly improve perceived performance
• Accessibility features benefit everyone, not just users with disabilities

Key takeaway: Small details make the biggest difference in user experience.

What's your experience with user research? Share your insights!

#UXResearch #UserExperience #Design #Research #UserBehavior`}
            onMenuAction={(action) => handleMenuAction(action, 'UX Research Findings')}
            onClick={() => handleCardClick('UX Research Findings')}
          />
        </div>

        {/* Another Image Example */}
        <div>
          <h2 style={{ ...textStyles['2xl'].semibold, color: colors.text.default, marginBottom: spacing.spacing[16] }}>
            Image with Different Content
          </h2>
          <ContentCard
            variant="image"
            image="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=400&h=240&q=80"
            title="Team Collaboration Best Practices"
            subtitle="Last edited 1 week ago"
            content={`🤝 Building high-performing teams requires intentional effort and the right strategies.

After working with diverse teams for years, here are the most effective practices:

• Clear communication channels and regular check-ins
• Defined roles and responsibilities for each team member
• Psychological safety where everyone feels heard
• Shared goals and celebration of wins together

Remote work has changed the game, but these fundamentals remain constant.

What team practices have worked best for you?

#TeamWork #Leadership #RemoteWork #Collaboration #Management`}
            onMenuAction={(action) => handleMenuAction(action, 'Team Collaboration Best Practices')}
            onClick={() => handleCardClick('Team Collaboration Best Practices')}
          />
        </div>
      </div>

      {/* Usage Instructions */}
      <div
        style={{
          marginTop: spacing.spacing[48],
          padding: spacing.spacing[24],
          backgroundColor: colors.bg.card.default,
          borderRadius: '12px',
          border: `1px solid ${colors.border.default}`
        }}
      >
        <h3 style={{ ...textStyles.xl.semibold, color: colors.text.default, marginBottom: spacing.spacing[16] }}>
          Features
        </h3>
        <ul style={{ ...textStyles.md.normal, color: colors.text.default, lineHeight: '1.6' }}>
          <li><strong>Variants:</strong> Gradient background or custom image background</li>
          <li><strong>Hover Effects:</strong> Enhanced shadow and -18° tilt animation on text card</li>
          <li><strong>Interactive Menu:</strong> Three-dots button appears on hover with dropdown options</li>
          <li><strong>Motion:</strong> Smooth spring animations using Framer Motion</li>
          <li><strong>Theme Aware:</strong> Automatically adapts to light and dark themes</li>
          <li><strong>Responsive Content:</strong> Shows first 5 lines of content with proper overflow</li>
          <li><strong>Accessibility:</strong> Proper focus management and keyboard navigation</li>
        </ul>
      </div>
    </div>
  );
};

export default ContentCardPlayground;