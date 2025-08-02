import React, { useState } from 'react';
import { useTheme } from '../../services/theme-context.jsx';
import { spacing } from '../../design-system/tokens/spacing.js';
import { cornerRadius } from '../../design-system/tokens/corner-radius.js';
import { getShadow } from '../../design-system/tokens/shadows.js';
import { typography } from '../../design-system/tokens/typography.js';
import TopNav from '../../design-system/components/TopNav.jsx';
import Button from '../../design-system/components/Button.jsx';
import ButtonGroup from '../../design-system/components/ButtonGroup.jsx';
import Checkbox from '../../design-system/components/Checkbox.jsx';
import ProgressBar from '../../design-system/components/ProgressBar.jsx';
import Bichaurinho from '../../design-system/components/Bichaurinho.jsx';
import { ArrowLeft, ArrowRight, ChevronDown } from 'lucide-react';

const OnboardingPacing = ({ onBack, onContinue }) => {
  const { colors } = useTheme();
  
  // State for pace selection
  const [selectedPace, setSelectedPace] = useState('moderate');
  
  // State for weekday selection
  const [selectedDays, setSelectedDays] = useState([]);
  
  // State for dropdowns
  const [dailySummaryTime, setDailySummaryTime] = useState('Evening (6-8 PM)');
  const [followUps, setFollowUps] = useState('Two more times the same day');
  const [recommendationsTime, setRecommendationsTime] = useState('Morning (8-10 AM)');
  const [contextSessionsTime, setContextSessionsTime] = useState('Weekly');

  const weekdays = [
    { id: 'monday', label: 'M', day: 'Monday' },
    { id: 'tuesday', label: 'T', day: 'Tuesday' },
    { id: 'wednesday', label: 'W', day: 'Wednesday' },
    { id: 'thursday', label: 'T', day: 'Thursday' },
    { id: 'friday', label: 'F', day: 'Friday' },
    { id: 'saturday', label: 'S', day: 'Saturday' },
    { id: 'sunday', label: 'S', day: 'Sunday' }
  ];

  const timeOptions = [
    'Morning (8-10 AM)',
    'Afternoon (12-2 PM)', 
    'Evening (6-8 PM)',
    'Night (8-10 PM)'
  ];

  const followUpOptions = [
    'No follow-ups',
    'One more time the same day',
    'Two more times the same day',
    'Next day if no response'
  ];

  const recommendationOptions = [
    'Morning (8-10 AM)',
    'Afternoon (12-2 PM)',
    'Evening (6-8 PM)',
    'Night (8-10 PM)'
  ];

  const contextOptions = [
    'Daily',
    'Every 3 days',
    'Weekly',
    'Bi-weekly',
    'Monthly'
  ];

  const paceOptions = [
    { id: 'light', label: 'Light' },
    { id: 'moderate', label: 'Moderate' },
    { id: 'hardcore', label: 'Hard Core' }
  ];

  const toggleDay = (dayId) => {
    setSelectedDays(prev => {
      if (prev.includes(dayId)) {
        return prev.filter(d => d !== dayId);
      } else {
        return [...prev, dayId];
      }
    });
  };

  const handleContinue = () => {
    const pacingData = {
      pace: selectedPace,
      selectedDays,
      dailySummaryTime,
      followUps,
      recommendationsTime,
      contextSessionsTime
    };
    
    onContinue(pacingData);
  };

  const canContinue = selectedDays.length > 0;

  const InnerSection = ({ title, subtitle, children }) => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: spacing.spacing[12],
        padding: spacing.spacing[16],
        border: `1px solid ${colors.border.default}`,
        borderRadius: cornerRadius.borderRadius.lg,
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: spacing.spacing[4] }}>
        <h3
          style={{
            fontFamily: typography.fontFamily.body,
            fontSize: typography.desktop.size.sm,
            fontWeight: typography.desktop.weight.semibold,
            color: colors.text.default,
            margin: 0,
          }}
        >
          {title}
        </h3>
        <p
          style={{
            fontFamily: typography.fontFamily.body,
            fontSize: typography.desktop.size.xs,
            fontWeight: typography.desktop.weight.normal,
            color: colors.text.subtle,
            margin: 0,
          }}
        >
          {subtitle}
        </p>
      </div>
      {children}
    </div>
  );

  const DropdownButton = ({ value, options, onChange, placeholder = "Select an option" }) => (
    <div style={{ position: 'relative' }}>
      <Button
        label={value || placeholder}
        style="secondary"
        size="sm"
        tailIcon={<ChevronDown size={14} />}
        onClick={() => {
          // In a real implementation, this would open a dropdown
          // For now, we'll cycle through options
          const currentIndex = options.indexOf(value);
          const nextIndex = (currentIndex + 1) % options.length;
          onChange(options[nextIndex]);
        }}
        className="w-full"
      />
    </div>
  );

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: colors.bg.default,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Top Navigation */}
      <TopNav />

      {/* Content Container with gradient background */}
      <div
        style={{
          flex: 1,
          position: 'relative',
          backgroundColor: colors.bg.default,
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: spacing.spacing[40],
          paddingTop: spacing.spacing[20],
          paddingBottom: '160px',
        }}
      >
        {/* Gradient background with 5% opacity */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'url(/src/assets/images/gradient-bg.svg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            opacity: 0.05,
            zIndex: 0,
          }}
        />

        {/* Content Column */}
        <div style={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: spacing.spacing[24],
          alignItems: 'center',
        }}>
          {/* Back Button */}
          <div style={{ alignSelf: 'flex-start', width: '400px' }}>
            <Button
              label="Go Back"
              style="dashed"
              size="xs"
              leadIcon={<ArrowLeft size={12} />}
              onClick={onBack}
            />
          </div>

          {/* Main Card */}
          <div
            style={{
              backgroundColor: colors.bg.card.default,
              borderRadius: cornerRadius.borderRadius.lg,
              border: `1px solid ${colors.border.darker}`,
              boxShadow: getShadow('regular.card', colors, { withBorder: true }),
              width: '400px',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {/* Main Container */}
            <div
              style={{
                padding: spacing.spacing[36],
                backgroundColor: colors.bg.card.default,
                borderBottom: `1px solid ${colors.border.default}`,
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Heading Container */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  gap: spacing.spacing[16],
                }}
              >
                {/* Bichaurinho */}
                <div>
                  <Bichaurinho variant={25} size={48} />
                </div>

                {/* Title and Subtitle Container */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: spacing.spacing[0],
                    alignItems: 'flex-start',
                  }}
                >
                  {/* Title */}
                  <h1
                    style={{
                      fontFamily: typography.fontFamily['awesome-serif'],
                      fontSize: typography.desktop.size['5xl'],
                      fontWeight: typography.desktop.weight.semibold,
                      lineHeight: typography.desktop.lineHeight['5xl'],
                      color: colors.text.default,
                      margin: 0,
                      textAlign: 'left',
                    }}
                  >
                    Your Pacing
                  </h1>

                  {/* Subtitle */}
                  <p
                    style={{
                      fontFamily: typography.fontFamily.body,
                      fontSize: typography.desktop.size.sm,
                      fontWeight: typography.desktop.weight.normal,
                      lineHeight: typography.desktop.lineHeight.sm,
                      color: colors.text.muted,
                      margin: 0,
                      textAlign: 'left',
                    }}
                  >
                    Tell us how often you want us to keep your pace
                  </p>
                </div>
              </div>

              {/* Pace Selection */}
              <div>
                <ButtonGroup
                  type="default"
                  size="md"
                  buttons={paceOptions.map(option => ({
                    label: option.label,
                    selected: selectedPace === option.id,
                    onClick: () => setSelectedPace(option.id)
                  }))}
                />
              </div>

              {/* Inner Sections */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: spacing.spacing[16],
                }}
              >
                {/* Frequency Section */}
                <InnerSection
                  title="Frequency"
                  subtitle="Define when you want to post"
                >
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: spacing.spacing[8],
                  }}>
                    {weekdays.map((day) => (
                      <div key={day.id} style={{ 
                        display: 'flex', 
                        flexDirection: 'column',
                        alignItems: 'center', 
                        gap: spacing.spacing[4] 
                      }}>
                        <Checkbox
                          checked={selectedDays.includes(day.id)}
                          onChange={() => toggleDay(day.id)}
                        />
                        <span
                          style={{
                            fontFamily: typography.fontFamily.body,
                            fontSize: typography.desktop.size.sm,
                            fontWeight: typography.desktop.weight.medium,
                            color: colors.text.default,
                          }}
                        >
                          {day.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </InnerSection>

                {/* Daily Summary Section */}
                <InnerSection
                  title="Daily Summary"
                  subtitle="Define when you want us to ask you about your day"
                >
                  <div style={{ display: 'flex', flexDirection: 'column', gap: spacing.spacing[16] }}>
                    <DropdownButton
                      value={dailySummaryTime}
                      options={timeOptions}
                      onChange={setDailySummaryTime}
                    />
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: spacing.spacing[8] }}>
                      <h4
                        style={{
                          fontFamily: typography.fontFamily.body,
                          fontSize: typography.desktop.size.sm,
                          fontWeight: typography.desktop.weight.semibold,
                          color: colors.text.default,
                          margin: 0,
                        }}
                      >
                        Follow-Ups
                      </h4>
                      <DropdownButton
                        value={followUps}
                        options={followUpOptions}
                        onChange={setFollowUps}
                      />
                      <p
                        style={{
                          fontFamily: typography.fontFamily.body,
                          fontSize: typography.desktop.size.xs,
                          fontWeight: typography.desktop.weight.normal,
                          color: colors.text.subtle,
                          margin: 0,
                        }}
                      >
                        Define how many follow-ups should we make in case you don't respond to our first message
                      </p>
                    </div>
                  </div>
                </InnerSection>

                {/* Recommendations Section */}
                <InnerSection
                  title="Recommendations"
                  subtitle="Define when you want us to send you your content recommendations"
                >
                  <DropdownButton
                    value={recommendationsTime}
                    options={recommendationOptions}
                    onChange={setRecommendationsTime}
                  />
                </InnerSection>

                {/* Context Sessions Section */}
                <InnerSection
                  title="Context Sessions"
                  subtitle="We will ask you a few questions to tailor your strategy and get more context around some topics"
                >
                  <DropdownButton
                    value={contextSessionsTime}
                    options={contextOptions}
                    onChange={setContextSessionsTime}
                  />
                </InnerSection>
              </div>
            </div>

            {/* Text Container */}
            <div
              style={{
                padding: `${spacing.spacing[24]} ${spacing.spacing[36]}`,
                backgroundColor: colors.bg.card.subtle,
                display: 'flex',
                flexDirection: 'column',
                gap: spacing.spacing[4],
              }}
            >
              <p
                style={{
                  fontFamily: typography.fontFamily.body,
                  fontSize: typography.desktop.size.sm,
                  fontWeight: typography.desktop.weight.normal,
                  lineHeight: typography.desktop.lineHeight.sm,
                  color: colors.text.muted,
                  margin: 0,
                  textAlign: 'center',
                }}
              >
                We'll ask a few questions to tailor your strategy.
              </p>
            </div>
          </div>

          {/* Progress Bar */}
          <div style={{ width: '400px' }}>
            <ProgressBar
              currentStep={6}
              totalSteps={7}
              showPercentage={false}
            />
          </div>
        </div>
      </div>

      {/* Button Container - Fixed overlay at bottom */}
      <div
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          height: '80px',
          backgroundColor: colors.bg.default,
          borderTop: `1px solid ${colors.border.default}`,
          padding: spacing.spacing[40],
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 10,
        }}
      >
        <div style={{ width: '280px' }}>
          <Button
            label="Continue"
            style="primary"
            size="lg"
            tailIcon={<ArrowRight size={16} />}
            onClick={handleContinue}
            disabled={!canContinue}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default OnboardingPacing;