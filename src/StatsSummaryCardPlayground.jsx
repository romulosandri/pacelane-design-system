import React from 'react';
import StatsSummaryCard from './design-system/components/StatsSummaryCard.jsx';
import { useTheme } from './services/theme-context.jsx';
import { spacing } from './design-system/tokens/spacing.js';

const StatsSummaryCardPlayground = () => {
  const { colors } = useTheme();

  // Example stats data
  const defaultStats = [
    { label: "Projects", value: "24" },
    { label: "Templates", value: "12" },
    { label: "Downloads", value: "156" }
  ];

  const businessStats = [
    { label: "Revenue", value: "$42k" },
    { label: "Clients", value: "18" },
    { label: "Growth", value: "+23%" }
  ];

  const performanceStats = [
    { label: "Speed", value: "98ms" },
    { label: "Uptime", value: "99.9%" },
    { label: "Users", value: "2.4k" }
  ];

  const engagementStats = [
    { label: "Views", value: "12.3k" },
    { label: "Likes", value: "1.8k" },
    { label: "Shares", value: "456" },
    { label: "Comments", value: "234" }
  ];

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: colors.bg.default,
        color: colors.text.default,
        padding: spacing.spacing[32],
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: spacing.spacing[48],
        }}
      >
        {/* Header */}
        <div>
          <h1
            style={{
              fontSize: '36px',
              fontWeight: 700,
              marginBottom: spacing.spacing[8],
              color: colors.text.default,
            }}
          >
            StatsSummaryCard Component
          </h1>
          <p
            style={{
              fontSize: '18px',
              color: colors.text.subtle,
              marginBottom: spacing.spacing[32],
            }}
          >
            A card component for displaying statistical information with customizable stats and labels.
          </p>
        </div>

        {/* Default Example */}
        <section>
          <h2
            style={{
              fontSize: '24px',
              fontWeight: 600,
              marginBottom: spacing.spacing[16],
              color: colors.text.default,
            }}
          >
            Default Stats
          </h2>
          <div style={{ maxWidth: '400px' }}>
            <StatsSummaryCard 
              title="Your Stats"
              stats={defaultStats}
            />
          </div>
        </section>

        {/* Business Stats Example */}
        <section>
          <h2
            style={{
              fontSize: '24px',
              fontWeight: 600,
              marginBottom: spacing.spacing[16],
              color: colors.text.default,
            }}
          >
            Business Metrics
          </h2>
          <div style={{ maxWidth: '400px' }}>
            <StatsSummaryCard 
              title="Business Overview"
              stats={businessStats}
            />
          </div>
        </section>

        {/* Performance Stats Example */}
        <section>
          <h2
            style={{
              fontSize: '24px',
              fontWeight: 600,
              marginBottom: spacing.spacing[16],
              color: colors.text.default,
            }}
          >
            Performance Metrics
          </h2>
          <div style={{ maxWidth: '400px' }}>
            <StatsSummaryCard 
              title="System Performance"
              stats={performanceStats}
            />
          </div>
        </section>

        {/* Four Stats Example */}
        <section>
          <h2
            style={{
              fontSize: '24px',
              fontWeight: 600,
              marginBottom: spacing.spacing[16],
              color: colors.text.default,
            }}
          >
            Engagement Stats (4 items)
          </h2>
          <div style={{ maxWidth: '600px' }}>
            <StatsSummaryCard 
              title="Content Engagement"
              stats={engagementStats}
            />
          </div>
        </section>

        {/* Custom Title Example */}
        <section>
          <h2
            style={{
              fontSize: '24px',
              fontWeight: 600,
              marginBottom: spacing.spacing[16],
              color: colors.text.default,
            }}
          >
            Custom Title
          </h2>
          <div style={{ maxWidth: '400px' }}>
            <StatsSummaryCard 
              title="Monthly Summary"
              stats={[
                { label: "Sales", value: "128" },
                { label: "Orders", value: "94" },
                { label: "Returns", value: "3" }
              ]}
            />
          </div>
        </section>

        {/* Grid Layout Example */}
        <section>
          <h2
            style={{
              fontSize: '24px',
              fontWeight: 600,
              marginBottom: spacing.spacing[16],
              color: colors.text.default,
            }}
          >
            Multiple Cards Layout
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: spacing.spacing[24],
            }}
          >
            <StatsSummaryCard 
              title="Team Productivity"
              stats={[
                { label: "Tasks", value: "47" },
                { label: "Completed", value: "43" },
                { label: "Pending", value: "4" }
              ]}
            />
            <StatsSummaryCard 
              title="Customer Satisfaction"
              stats={[
                { label: "Rating", value: "4.8" },
                { label: "Reviews", value: "127" },
                { label: "NPS", value: "+84" }
              ]}
            />
            <StatsSummaryCard 
              title="Financial Overview"
              stats={[
                { label: "Revenue", value: "$89k" },
                { label: "Profit", value: "$23k" },
                { label: "Margin", value: "26%" }
              ]}
            />
          </div>
        </section>

        {/* Component Features */}
        <section>
          <h2
            style={{
              fontSize: '24px',
              fontWeight: 600,
              marginBottom: spacing.spacing[16],
              color: colors.text.default,
            }}
          >
            Component Features
          </h2>
          <ul
            style={{
              fontSize: '16px',
              color: colors.text.subtle,
              lineHeight: 1.6,
              paddingLeft: spacing.spacing[20],
            }}
          >
            <li>Theme-aware design that adapts to light and dark modes</li>
            <li>Customizable title and stats data</li>
            <li>Automatic vertical dividers between stats</li>
            <li>Responsive layout that works with any number of stats</li>
            <li>Uses Awesome Serif font for stat values</li>
            <li>Follows all design system tokens and patterns</li>
            <li>Card-style layout with proper shadows and borders</li>
            <li>Centered alignment for optimal readability</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default StatsSummaryCardPlayground;