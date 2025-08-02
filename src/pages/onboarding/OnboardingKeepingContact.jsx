import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useTheme } from '../../services/theme-context.jsx';
import { spacing } from '../../design-system/tokens/spacing.js';
import { cornerRadius } from '../../design-system/tokens/corner-radius.js';
import { getShadow } from '../../design-system/tokens/shadows.js';
import { typography } from '../../design-system/tokens/typography.js';
import { textStyles } from '../../design-system/styles/typography/typography-styles.js';
import TopNav from '../../design-system/components/TopNav.jsx';
import Button from '../../design-system/components/Button.jsx';
import Bichaurinho from '../../design-system/components/Bichaurinho.jsx';
import ProgressBar from '../../design-system/components/ProgressBar.jsx';
import Input from '../../design-system/components/Input.jsx';

const OnboardingKeepingContact = ({ onContinue, onBack }) => {
  const { colors } = useTheme();
  const [phone, setPhone] = useState('');

  const handleContinue = () => {
    if (phone.trim()) {
      onContinue({ phone: phone.trim() });
    }
  };

  const canContinue = phone.trim().length > 0;

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: colors.bg.default,
        position: 'relative',
      }}
    >
      {/* Background Gradient Overlay */}
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

      {/* Top Navigation */}
      <TopNav />

      {/* Content Container */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          paddingBottom: '160px',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Content Column */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: spacing.spacing[24],
            paddingTop: spacing.spacing[40],
          }}
        >
          {/* Back Button Container */}
          <div style={{ width: '400px' }}>
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
              width: '400px',
              backgroundColor: colors.bg.card.default,
              borderRadius: cornerRadius.borderRadius.md,
              border: `1px solid ${colors.border.darker}`,
              boxShadow: getShadow('regular.card', colors, { withBorder: true }),
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
                }}
              >
                {/* Bichaurinho */}
                <div>
                  <Bichaurinho variant={11} size={48} />
                </div>

                {/* Title and Subtitle Container - 24px gap between title/subtitle and WhatsApp section */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: spacing.spacing[24],
                    alignItems: 'flex-start',
                    width: '100%',
                  }}
                >
                  {/* Title and Subtitle */}
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
                      Keeping Contact
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
                      Tell us how we can keep in touch
                    </p>
                  </div>

                  {/* WhatsApp Section */}
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: spacing.spacing[8],
                      width: '100%',
                    }}
                  >
                    {/* WhatsApp Title */}
                    <h3
                      style={{
                        ...textStyles.sm.medium,
                        color: colors.text.default,
                        margin: 0,
                      }}
                    >
                      WhatsApp
                    </h3>

                    {/* WhatsApp Subtitle */}
                    <p
                      style={{
                        ...textStyles.xs.normal,
                        color: colors.text.subtle,
                        margin: 0,
                        lineHeight: '1.5',
                      }}
                    >
                      We will send you messages with drafts, and suggestions of content based on your Content Plan.
                    </p>

                    {/* Phone Input */}
                    <Input
                      placeholder="Enter your phone number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      type="tel"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Text Container */}
            <div
              style={{
                padding: spacing.spacing[24],
                backgroundColor: colors.bg.subtle,
                borderTop: `1px solid ${colors.border.default}`,
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

          {/* Progress Bar Container */}
          <div style={{ width: '400px' }}>
            <ProgressBar currentStep={7} totalSteps={7} />
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

export default OnboardingKeepingContact;