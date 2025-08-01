import React from 'react';
import { useTheme } from '../services/theme-context.jsx';
import { navigateToContentEditor } from '../services/navigation.js';
import { spacing } from '../design-system/tokens/spacing.js';
import { textStyles } from '../design-system/styles/typography/typography-styles.js';
import { typography } from '../design-system/tokens/typography.js';

// Design System Components
import Button from '../design-system/components/Button.jsx';
import StreakCard from '../design-system/components/StreakCard.jsx';
import StatsSummaryCard from '../design-system/components/StatsSummaryCard.jsx';
import SuggestionCard from '../design-system/components/SuggestionCard.jsx';
import TemplateCard from '../design-system/components/TemplateCard.jsx';
import ContentCard from '../design-system/components/ContentCard.jsx';
import Input from '../design-system/components/Input.jsx';

// Icons
import { ChevronRight, Search } from 'lucide-react';

/**
 * HomePage component - Landing page for the application
 */
const HomePage = () => {
  const { colors } = useTheme();

  // Main container styles
  const containerStyles = {
    paddingTop: spacing.spacing[80],
    paddingBottom: spacing.spacing[160],
    paddingLeft: spacing.spacing[32],
    paddingRight: spacing.spacing[32],
    width: '840px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    gap: spacing.spacing[32],
  };

  // Welcome heading style using awesome serif font
  const welcomeHeadingStyle = {
    fontFamily: typography.fontFamily['awesome-serif'],
    fontSize: typography.desktop.size['5xl'],
    fontWeight: typography.desktop.weight.semibold,
    lineHeight: typography.desktop.lineHeight.leading7,
    letterSpacing: typography.desktop.letterSpacing.normal,
    color: colors.text.default,
  };

  // Row styles for cards/content
  const rowStyles = {
    display: 'flex',
    flexDirection: 'row',
    gap: spacing.spacing[16],
  };

  // Section header row styles
  const sectionHeaderStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  };

  // Templates row styles
  const templatesRowStyles = {
    display: 'flex',
    flexDirection: 'row',
    gap: spacing.spacing[12],
    width: '100%',
  };

  // Content grid styles (2 columns)
  const contentGridStyles = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: spacing.spacing[24],
  };

  return (
    <div style={containerStyles}>
      {/* Welcome Heading */}
      <h1 style={welcomeHeadingStyle}>
        Welcome, Simon!
      </h1>

      {/* Streak Card and Stats Card Row */}
      <div style={rowStyles}>
        <StreakCard />
        <div style={{ flex: 1 }}>
          <StatsSummaryCard />
        </div>
      </div>

      {/* Suggestion Card */}
      <SuggestionCard 
        title="For Today"
        description="Let's build your next project with our curated templates and resources."
        contentCards={[
          {
            variant: 'gradient',
            title: 'Daily Standup Notes',
            subtitle: 'Suggested for today',
            onClick: () => navigateToContentEditor('team-meeting-notes')
          },
          {
            variant: 'image', 
            title: 'Project Review',
            subtitle: 'Due today',
            onClick: () => navigateToContentEditor('product-roadmap')
          }
        ]}
        onCalendarClick={() => console.log('Calendar clicked')}
        onGenerateClick={() => console.log('Generate clicked')}
        style={{ width: '100%' }}
      />

      {/* Let's get started section */}
      <div style={sectionHeaderStyles}>
        <h2 style={{ 
          ...textStyles.md.semibold, 
          color: colors.text.subtle 
        }}>
          Let's get started!
        </h2>
        <Button
          label="see all templates"
          style="secondary"
          size="xs"
          tailIcon={<ChevronRight size={12} />}
          onClick={() => console.log('See all templates clicked')}
        />
      </div>

      {/* Template Cards Row */}
      <div style={templatesRowStyles}>
        <TemplateCard 
          variant="empty"
          onClick={() => console.log('Empty template clicked')}
          style={{ flex: 1, width: '100%' }}
        />
        <TemplateCard 
          variant="default"
          title="Research Template"
          description="Perfect for organizing research notes and findings"
          bichaurinhoVariant={3}
          onClick={() => console.log('Research template clicked')}
          style={{ flex: 1, width: '100%' }}
        />
        <TemplateCard 
          variant="default"
          title="Project Planner"
          description="Comprehensive planning tool for your projects"
          bichaurinhoVariant={7}
          onClick={() => console.log('Project planner clicked')}
          style={{ flex: 1, width: '100%' }}
        />
      </div>

      {/* Your History section */}
      <div style={sectionHeaderStyles}>
        <h2 style={{ 
          ...textStyles.md.semibold, 
          color: colors.text.subtle 
        }}>
          Your History
        </h2>
        <Input
          size="sm"
          placeholder="Search..."
          leadIcon={<Search size={16} />}
          style="default"
        />
      </div>

      {/* Content Cards Grid */}
      <div style={contentGridStyles}>
        <ContentCard 
          variant="gradient"
          title="Marketing Strategy"
          subtitle="Last edited 2 hours ago"
          onClick={() => navigateToContentEditor('marketing-strategy')}
        />
        <ContentCard 
          variant="image"
          title="Design System"
          subtitle="Last edited yesterday"
          onClick={() => navigateToContentEditor('design-system')}
        />
        <ContentCard 
          variant="gradient"
          title="User Research"
          subtitle="Last edited 3 days ago"
          onClick={() => navigateToContentEditor('user-research')}
        />
        <ContentCard 
          variant="image"
          title="Product Roadmap"
          subtitle="Last edited 1 week ago"
          onClick={() => navigateToContentEditor('product-roadmap')}
        />
        <ContentCard 
          variant="gradient"
          title="Team Meeting Notes"
          subtitle="Last edited 2 weeks ago"
          onClick={() => navigateToContentEditor('team-meeting-notes')}
        />
        <ContentCard 
          variant="image"
          title="Competitive Analysis"
          subtitle="Last edited 1 month ago"
          onClick={() => navigateToContentEditor('competitive-analysis')}
        />
      </div>
    </div>
  );
};

export default HomePage;