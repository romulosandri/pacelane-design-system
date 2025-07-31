import React from 'react';
import { Calendar, Sparkles, Info } from 'lucide-react';
import { useTheme } from '../../services/theme-context.jsx';
import { spacing } from '../tokens/spacing.js';
import { cornerRadius } from '../tokens/corner-radius.js';
import { textStyles } from '../styles/typography/typography-styles.js';
import { shadows, getShadow } from '../tokens/shadows.js';
import Button from './Button.jsx';
import Bichaurinho from './Bichaurinho.jsx';
import ContentCard from './ContentCard.jsx';
import Divider from './Divider.jsx';

const SuggestionCard = ({
  // Content
  title = 'Suggestion Title',
  description = 'Suggestion description goes here',
  contentCards = [],
  
  // Handlers
  onCalendarClick,
  onGenerateClick,
  
  // Standard props
  className = '',
  style = {},
  ...rest
}) => {
  const { colors } = useTheme();

  return (
    <div
      className={className}
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap: spacing.spacing[20],
        padding: spacing.spacing[24],
        backgroundColor: colors.bg.default,
        borderRadius: cornerRadius.borderRadius.xl,
        border: `1px solid ${colors.border.default}`,
        boxShadow: getShadow('regular.card', colors, { withBorder: true }),
        width: '840px',
        ...style
      }}
      {...rest}
    >
      {/* Left: Bichaurinho */}
      <Bichaurinho variant={16} size={48} />

      {/* Right: Content Column */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: spacing.spacing[14],
          flex: 1,
          minWidth: 0
        }}
      >
        {/* Title and Calendar Button */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: spacing.spacing[8]
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: spacing.spacing[8]
            }}
          >
            <span
              style={{
                ...textStyles['2xl'].semibold,
                fontFamily: 'Awesome Serif VAR',
                color: colors.text.default
              }}
            >
              {title}
            </span>
            <Button
              size="xs"
              style="dashed"
              label="See Calendar"
              leadIcon={<Calendar size={12} />}
              onClick={onCalendarClick}
            />
          </div>

          {/* Description Box */}
          <div
            style={{
              padding: `${spacing.spacing[8]} ${spacing.spacing[12]}`,
              borderRadius: cornerRadius.borderRadius.md,
              backgroundColor: '#E1E7FD33',
              border: `1px solid ${colors.border.indigo}`,
              ...textStyles.sm.normal,
              color: colors.bg.basic.indigo.contrast
            }}
          >
            {description}
          </div>
        </div>

        {/* Content Cards Row */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: spacing.spacing[20],
            width: '100%'
          }}
        >
          {contentCards.map((card, index) => (
            <div
              key={index}
              style={{
                flex: 1,
                minWidth: 0
              }}
            >
              <ContentCard 
                {...card} 
                style={{ width: '100%' }}
              />
            </div>
          ))}
        </div>

        {/* Divider */}
        <div
          style={{
            width: '100%',
            height: '1px',
            backgroundColor: colors.border.default
          }}
        />

        {/* Generate Button */}
        <Button
          style="dashed"
          size="md"
          label="Generate New Ideas"
          leadIcon={<Sparkles size={16} />}
          tailIcon={<Info size={16} />}
          onClick={onGenerateClick}
          fullWidth
        />
      </div>
    </div>
  );
};

export default SuggestionCard;