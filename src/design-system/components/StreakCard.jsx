import React from 'react';
import PropTypes from 'prop-types';
import { Check } from 'lucide-react';
import { useTheme } from '../../services/theme-context.jsx';
import { spacing } from '../tokens/spacing.js';
import { cornerRadius } from '../tokens/corner-radius.js';
import { colors as primitiveColors } from '../tokens/primitive-colors.js';
import { typography } from '../tokens/typography.js';
import { getShadow } from '../tokens/shadows.js';
import { textStyles } from '../styles/typography/typography-styles.js';
import Bichaurinho from './Bichaurinho.jsx';

const StreakCard = ({ 
  streakDays = 15,
  currentMonthDays = 31,
  activeDays = 15,
  monthName = "January",
  weekdays = [
    { letter: 'M', active: true },
    { letter: 'T', active: true },
    { letter: 'W', active: false },
    { letter: 'T', active: true },
    { letter: 'F', active: true },
    { letter: 'S', active: false },
    { letter: 'S', active: false }
  ]
}) => {
  const { colors } = useTheme();

  // Create awesome serif text style for streak numbers
  const awesomeSerifStyle = {
    fontFamily: typography.fontFamily['awesome-serif'],
    fontSize: typography.desktop.size.lg,
    fontWeight: typography.desktop.weight.semibold,
    lineHeight: typography.desktop.lineHeight.leading7,
    letterSpacing: typography.desktop.letterSpacing.normal,
  };

  const awesomeSerif2xlBoldStyle = {
    fontFamily: typography.fontFamily['awesome-serif'],
    fontSize: typography.desktop.size['2xl'],
    fontWeight: typography.desktop.weight.bold,
    lineHeight: typography.desktop.lineHeight.leading8,
    letterSpacing: typography.desktop.letterSpacing.normal,
  };

  // Generate month progress lines
  const monthLines = Array.from({ length: currentMonthDays }, (_, index) => (
    <div
      key={index}
      style={{
        width: '3px',
        height: '18px',
        backgroundColor: index < activeDays 
          ? primitiveColors.emerald[500] // emerald accent
          : primitiveColors.transparentDark[10], // gray alpha 10
        borderRadius: cornerRadius.borderRadius['2xs'],
      }}
    />
  ));

  return (
    <div
      style={{
        width: '460px',
        display: 'flex',
        gap: spacing.spacing[12],
        padding: spacing.spacing[16],
        borderRadius: cornerRadius.borderRadius.xl,
        backgroundColor: colors.bg.default,
        border: `1px solid ${colors.border.default}`,
        boxShadow: getShadow('regular.card', colors, { withBorder: true }),
      }}
    >
      {/* Left Column */}
      <div
        style={{
          width: '90px',
          display: 'flex',
          flexDirection: 'column',
          gap: spacing.spacing[4],
          padding: `${spacing.spacing[16]} ${spacing.spacing[12]}`,
          borderRadius: cornerRadius.borderRadius.sm,
          backgroundColor: colors.bg.subtle,
          border: `1px solid ${colors.border.default}`,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Bichaurinho variant={34} size={40} />
        <div style={awesomeSerifStyle}>
          {streakDays} Days
        </div>
        <div 
          style={{
            ...textStyles.xs.normal,
            color: colors.text.subtle,
          }}
        >
          Streaks
        </div>
      </div>

      {/* Right Column */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: spacing.spacing[12],
        }}
      >
        {/* Row 1 - Month Progress */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: spacing.spacing[8],
          }}
        >
          {/* Days Number */}
          <div 
            style={{
              ...awesomeSerif2xlBoldStyle,
              color: colors.text.default,
            }}
          >
            {activeDays} Days
          </div>

          {/* Centered Circle */}
          <div
            style={{
              width: '4px',
              height: '4px',
              borderRadius: '50%',
              backgroundColor: colors.text.muted,
            }}
          />

          {/* Month Name */}
          <div 
            style={{
              ...textStyles.xs.medium,
              color: colors.text.subtle,
            }}
          >
            {monthName}
          </div>

          {/* Progress Lines */}
          <div
            style={{
              display: 'flex',
              gap: '2px',
              flex: 1,
              justifyContent: 'flex-end',
            }}
          >
            {monthLines}
          </div>
        </div>

        {/* Row 2 - Weekly Progress */}
        <div
          style={{
            display: 'flex',
            gap: spacing.spacing[6],
            padding: `${spacing.spacing[16]} ${spacing.spacing[12]}`,
            borderRadius: cornerRadius.borderRadius.sm,
            border: `1px solid ${colors.border.default}`,
            backgroundColor: colors.bg.subtle,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {weekdays.map((day, index) => (
            <div
              key={index}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: spacing.spacing[4],
              }}
            >
              {/* Circle with check or empty */}
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  backgroundColor: day.active 
                    ? primitiveColors.emerald[500] 
                    : colors.bg.default,
                  border: day.active 
                    ? 'none' 
                    : `1px solid ${colors.border.default}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {day.active && (
                  <Check 
                    size={16} 
                    color={primitiveColors.gray[0]} // white
                  />
                )}
              </div>

              {/* Day Letter */}
              <div 
                style={{
                  ...textStyles.xs.medium,
                  color: day.active ? colors.text.default : colors.text.muted,
                }}
              >
                {day.letter}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

StreakCard.propTypes = {
  streakDays: PropTypes.number,
  currentMonthDays: PropTypes.number,
  activeDays: PropTypes.number,
  monthName: PropTypes.string,
  weekdays: PropTypes.arrayOf(
    PropTypes.shape({
      letter: PropTypes.string.isRequired,
      active: PropTypes.bool.isRequired,
    })
  ),
};

export default StreakCard;