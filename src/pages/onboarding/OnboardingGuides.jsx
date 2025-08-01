import React, { useState } from 'react';
import { useTheme } from '../../services/theme-context.jsx';
import { spacing } from '../../design-system/tokens/spacing.js';
import { cornerRadius } from '../../design-system/tokens/corner-radius.js';
import { getShadow } from '../../design-system/tokens/shadows.js';
import { typography } from '../../design-system/tokens/typography.js';
import TopNav from '../../design-system/components/TopNav.jsx';
import Button from '../../design-system/components/Button.jsx';
import Input from '../../design-system/components/Input.jsx';
import ProgressBar from '../../design-system/components/ProgressBar.jsx';
import Bichaurinho from '../../design-system/components/Bichaurinho.jsx';
import { ArrowLeft, ArrowRight, Plus, Trash2 } from 'lucide-react';

const OnboardingGuides = ({ onBack, onContinue }) => {
  const { colors } = useTheme();
  
  // Initialize with three pre-filled principles
  const [principles, setPrinciples] = useState([
    { id: 1, value: 'Be Honest About Your Challenges' },
    { id: 2, value: 'Promote Ideas, Not Just Myself' },
    { id: 3, value: 'Avoid Buzzwords, and Empty Phrases' }
  ]);

  const addPrinciple = () => {
    const newId = Math.max(...principles.map(p => p.id)) + 1;
    setPrinciples(prev => [...prev, { id: newId, value: '' }]);
  };

  const removePrinciple = (id) => {
    setPrinciples(prev => prev.filter(principle => principle.id !== id));
  };

  const updatePrinciple = (id, value) => {
    setPrinciples(prev => 
      prev.map(principle => 
        principle.id === id ? { ...principle, value } : principle
      )
    );
  };

  const handleContinue = () => {
    // Filter out empty principles and trim values
    const validPrinciples = principles
      .filter(p => p.value.trim())
      .map(p => p.value.trim());
    
    onContinue({
      guides: validPrinciples,
    });
  };

  // No validation needed - all fields are optional
  const canContinue = true;

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
          alignItems: 'center',
          justifyContent: 'center',
          padding: spacing.spacing[40],
          paddingBottom: '160px', // Account for button container height
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
              {/* Heading Container - 16px gap between bichaurinho and title/subtitle */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  gap: spacing.spacing[16],
                  marginBottom: spacing.spacing[32],
                }}
              >
                {/* Bichaurinho */}
                <div>
                  <Bichaurinho variant={30} size={48} />
                </div>

                {/* Title and Subtitle Container - 12px gap between title and subtitle */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: spacing.spacing[12],
                    alignItems: 'flex-start',
                  }}
                >
                  {/* Title */}
                  <h1
                    style={{
                      fontFamily: typography.fontFamily['awesome-serif'],
                      fontSize: typography.desktop.size['5xl'],
                      fontWeight: typography.desktop.weight.semibold,
                      lineHeight: '0.9',
                      color: colors.text.default,
                      margin: 0,
                      textAlign: 'left',
                    }}
                  >
                    What Are<br />Your Guides?
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
                    What values guide the way you want to create content? (For example: be authentic, share your experience, avoid hype)
                  </p>
                </div>
              </div>

              {/* Principles Fields Container */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: spacing.spacing[16],
                }}
              >
                {/* Dynamic Principle Input Fields */}
                {principles.map((principle, index) => (
                  <Input
                    key={principle.id}
                    placeholder="Enter a guiding principle..."
                    value={principle.value}
                    onChange={(e) => updatePrinciple(principle.id, e.target.value)}
                    style="tail-action"
                    tailAction={{
                      icon: <Trash2 size={14} />,
                      onClick: () => removePrinciple(principle.id)
                    }}
                  />
                ))}

                {/* Add Principles Button */}
                <div style={{ marginTop: spacing.spacing[8] }}>
                  <Button
                    label="Add Principles"
                    style="secondary"
                    size="sm"
                    leadIcon={<Plus size={14} />}
                    onClick={addPrinciple}
                    className="w-full"
                  />
                </div>
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
              currentStep={5}
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

export default OnboardingGuides;