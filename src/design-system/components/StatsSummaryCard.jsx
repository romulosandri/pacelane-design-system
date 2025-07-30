import React from 'react';
import { useTheme } from '../../services/theme-context.jsx';
import { spacing } from '../tokens/spacing.js';
import { cornerRadius } from '../tokens/corner-radius.js';
import { shadows, getShadow } from '../tokens/shadows.js';
import { textStyles } from '../styles/typography/typography-styles.js';
import { typography } from '../tokens/typography.js';

const StatsSummaryCard = ({ 
  title = "Your Stats",
  stats = [
    { label: "Projects", value: "24" },
    { label: "Templates", value: "12" },
    { label: "Downloads", value: "156" }
  ],
  className = "",
  ...props 
}) => {
  const { colors } = useTheme();

  return (
    <div
      className={`stats-summary-card ${className}`}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: spacing.spacing[8],
        padding: `${spacing.spacing[8]} ${spacing.spacing[8]}`,
        borderRadius: cornerRadius.borderRadius.xl,
        backgroundColor: colors.bg.subtle,
        border: `1px solid ${colors.border.default}`,
        boxShadow: getShadow('regular.card', colors, { withBorder: true }),
      }}
      {...props}
    >
      {/* Title */}
      <div
        style={{
          ...textStyles.xs.semibold,
          color: colors.text.muted,
          textAlign: 'center',
        }}
      >
        {title}
      </div>

      {/* Stats Container */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: spacing.spacing[4],
          padding: `${spacing.spacing[16]} ${spacing.spacing[16]}`,
          borderRadius: cornerRadius.borderRadius.lg,
          backgroundColor: colors.bg.default,
          border: `1px solid ${colors.border.default}`,
        }}
      >
        {/* Stats Row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          {stats.map((stat, index) => (
            <React.Fragment key={index}>
              {/* Individual Stat */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: spacing.spacing[4],
                  padding: `${spacing.spacing[16]} ${spacing.spacing[12]}`,
                  flex: 1,
                  alignItems: 'center',
                  textAlign: 'center',
                }}
              >
                {/* Stat Label */}
                <div
                  style={{
                    ...textStyles.xs.normal,
                    color: colors.text.subtle,
                  }}
                >
                  {stat.label}
                </div>

                {/* Stat Value */}
                <div
                  style={{
                    fontSize: typography.desktop.size['2xl'],
                    fontWeight: typography.desktop.weight.bold,
                    fontFamily: typography.fontFamily['awesome-serif'],
                    lineHeight: typography.desktop.lineHeight['2xl'],
                    color: colors.text.default,
                  }}
                >
                  {stat.value}
                </div>
              </div>

              {/* Vertical Divider (except after last item) */}
              {index < stats.length - 1 && (
                <div
                  style={{
                    width: '1px',
                    height: spacing.spacing[32],
                    backgroundColor: colors.border.default,
                    flexShrink: 0,
                  }}
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSummaryCard;