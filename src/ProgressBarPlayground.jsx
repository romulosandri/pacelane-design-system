import React, { useState } from 'react';
import { useTheme } from './services/theme-context.jsx';
import ProgressBar from './design-system/components/ProgressBar.jsx';
import Button from './design-system/components/Button.jsx';
import { spacing } from './design-system/tokens/spacing.js';
import { textStyles } from './design-system/styles/typography/typography-styles.js';

const ProgressBarPlayground = () => {
  const { theme, toggleTheme, colors } = useTheme();
  const [onboardingStep, setOnboardingStep] = useState(3);
  const [checkoutStep, setCheckoutStep] = useState(2);
  const [customStep, setCustomStep] = useState(1);

  const sectionStyle = {
    marginBottom: spacing.spacing[48],
    padding: spacing.spacing[24],
    backgroundColor: colors.bg.card.default,
    borderRadius: '12px',
    border: `1px solid ${colors.border.default}`,
  };

  const headingStyle = {
    ...textStyles['2xl'].semibold,
    color: colors.text.default,
    marginBottom: spacing.spacing[16],
  };

  const subheadingStyle = {
    ...textStyles.lg.medium,
    color: colors.text.default,
    marginBottom: spacing.spacing[12],
  };

  const codeStyle = {
    ...textStyles.sm.normal,
    fontFamily: 'monospace',
    backgroundColor: colors.bg.muted,
    color: colors.text.subtle,
    padding: spacing.spacing[8],
    borderRadius: '4px',
    marginBottom: spacing.spacing[16],
  };

  const buttonGroupStyle = {
    display: 'flex',
    gap: spacing.spacing[8],
    marginTop: spacing.spacing[16],
    marginBottom: spacing.spacing[24],
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: colors.bg.default,
      color: colors.text.default,
      padding: spacing.spacing[24],
    }}>
      {/* Header */}
      <div style={sectionStyle}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: spacing.spacing[16],
        }}>
          <h1 style={{
            ...textStyles['4xl'].bold,
            color: colors.text.default,
            margin: 0,
          }}>
            Progress Bar Component
          </h1>
          <Button
            label={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} Theme`}
            style="secondary"
            size="sm"
            onClick={toggleTheme}
          />
        </div>
        <p style={{
          ...textStyles.lg.normal,
          color: colors.text.subtle,
          margin: 0,
        }}>
          A flexible stepper progress bar component with theme support and smooth transitions.
        </p>
      </div>

      {/* Onboarding Example */}
      <div style={sectionStyle}>
        <h2 style={headingStyle}>Onboarding Progress (7 Steps)</h2>
        <p style={{
          ...textStyles.md.normal,
          color: colors.text.subtle,
          marginBottom: spacing.spacing[16],
        }}>
          Current step: {onboardingStep} of 7
        </p>
        
        <ProgressBar 
          totalSteps={7} 
          currentStep={onboardingStep} 
          width={400}
        />
        
        <div style={buttonGroupStyle}>
          <Button
            label="Previous"
            style="secondary"
            size="sm"
            disabled={onboardingStep <= 1}
            onClick={() => setOnboardingStep(Math.max(1, onboardingStep - 1))}
          />
          <Button
            label="Next"
            style="primary"
            size="sm"
            disabled={onboardingStep >= 7}
            onClick={() => setOnboardingStep(Math.min(7, onboardingStep + 1))}
          />
          <Button
            label="Reset"
            style="ghost"
            size="sm"
            onClick={() => setOnboardingStep(1)}
          />
        </div>

        <div style={codeStyle}>
          {`<ProgressBar totalSteps={7} currentStep={${onboardingStep}} width={400} />`}
        </div>
      </div>

      {/* Checkout Example */}
      <div style={sectionStyle}>
        <h2 style={headingStyle}>Checkout Process (4 Steps)</h2>
        <p style={{
          ...textStyles.md.normal,
          color: colors.text.subtle,
          marginBottom: spacing.spacing[16],
        }}>
          Current step: {checkoutStep} of 4
        </p>
        
        <ProgressBar 
          totalSteps={4} 
          currentStep={checkoutStep} 
          width={320}
        />
        
        <div style={buttonGroupStyle}>
          <Button
            label="Previous"
            style="secondary"
            size="sm"
            disabled={checkoutStep <= 1}
            onClick={() => setCheckoutStep(Math.max(1, checkoutStep - 1))}
          />
          <Button
            label="Next"
            style="primary"
            size="sm"
            disabled={checkoutStep >= 4}
            onClick={() => setCheckoutStep(Math.min(4, checkoutStep + 1))}
          />
        </div>

        <div style={codeStyle}>
          {`<ProgressBar totalSteps={4} currentStep={${checkoutStep}} width={320} />`}
        </div>
      </div>

      {/* Custom Width Example */}
      <div style={sectionStyle}>
        <h2 style={headingStyle}>Custom Configuration</h2>
        <p style={{
          ...textStyles.md.normal,
          color: colors.text.subtle,
          marginBottom: spacing.spacing[16],
        }}>
          Customizable number of steps and progress
        </p>
        
        <ProgressBar 
          totalSteps={10} 
          currentStep={customStep} 
          width={600}
        />
        
        <div style={buttonGroupStyle}>
          <Button
            label="Previous"
            style="secondary"
            size="sm"
            disabled={customStep <= 1}
            onClick={() => setCustomStep(Math.max(1, customStep - 1))}
          />
          <Button
            label="Next"
            style="primary"
            size="sm"
            disabled={customStep >= 10}
            onClick={() => setCustomStep(Math.min(10, customStep + 1))}
          />
          <Button
            label="Complete"
            style="primary"
            size="sm"
            onClick={() => setCustomStep(10)}
          />
        </div>

        <div style={codeStyle}>
          {`<ProgressBar totalSteps={10} currentStep={${customStep}} width={600} />`}
        </div>
      </div>

      {/* Different Sizes */}
      <div style={sectionStyle}>
        <h2 style={headingStyle}>Different Configurations</h2>
        
        <div style={{ marginBottom: spacing.spacing[24] }}>
          <h3 style={subheadingStyle}>3 Steps - Narrow</h3>
          <ProgressBar totalSteps={3} currentStep={2} width={200} />
          <div style={codeStyle}>
            {`<ProgressBar totalSteps={3} currentStep={2} width={200} />`}
          </div>
        </div>

        <div style={{ marginBottom: spacing.spacing[24] }}>
          <h3 style={subheadingStyle}>5 Steps - Default Width</h3>
          <ProgressBar totalSteps={5} currentStep={3} />
          <div style={codeStyle}>
            {`<ProgressBar totalSteps={5} currentStep={3} /> // width defaults to 400px`}
          </div>
        </div>

        <div style={{ marginBottom: spacing.spacing[24] }}>
          <h3 style={subheadingStyle}>8 Steps - Wide</h3>
          <ProgressBar totalSteps={8} currentStep={5} width={800} />
          <div style={codeStyle}>
            {`<ProgressBar totalSteps={8} currentStep={5} width={800} />`}
          </div>
        </div>
      </div>

      {/* API Documentation */}
      <div style={sectionStyle}>
        <h2 style={headingStyle}>API Documentation</h2>
        
        <div style={{
          ...textStyles.md.normal,
          color: colors.text.default,
          lineHeight: '1.6',
        }}>
          <h3 style={subheadingStyle}>Props</h3>
          <ul style={{ paddingLeft: spacing.spacing[20] }}>
            <li style={{ marginBottom: spacing.spacing[8] }}>
              <strong>totalSteps</strong> (number, default: 7) - Total number of steps in the progress bar
            </li>
            <li style={{ marginBottom: spacing.spacing[8] }}>
              <strong>currentStep</strong> (number, default: 1) - Current active step (1-based)
            </li>
            <li style={{ marginBottom: spacing.spacing[8] }}>
              <strong>width</strong> (number, default: 400) - Total width of the progress bar in pixels
            </li>
            <li style={{ marginBottom: spacing.spacing[8] }}>
              <strong>className</strong> (string, default: '') - Additional CSS class name
            </li>
          </ul>

          <h3 style={subheadingStyle}>Features</h3>
          <ul style={{ paddingLeft: spacing.spacing[20] }}>
            <li style={{ marginBottom: spacing.spacing[8] }}>✅ Theme-aware (automatically adapts to light/dark themes)</li>
            <li style={{ marginBottom: spacing.spacing[8] }}>✅ Smooth color transitions</li>
            <li style={{ marginBottom: spacing.spacing[8] }}>✅ Flexible step count</li>
            <li style={{ marginBottom: spacing.spacing[8] }}>✅ Customizable width</li>
            <li style={{ marginBottom: spacing.spacing[8] }}>✅ Uses design system tokens</li>
            <li style={{ marginBottom: spacing.spacing[8] }}>✅ Fully rounded corners (pill-shaped steps)</li>
            <li style={{ marginBottom: spacing.spacing[8] }}>✅ Consistent 8px gap between steps</li>
          </ul>

          <h3 style={subheadingStyle}>Design Specifications</h3>
          <ul style={{ paddingLeft: spacing.spacing[20] }}>
            <li style={{ marginBottom: spacing.spacing[8] }}>Height: 4px (fixed)</li>
            <li style={{ marginBottom: spacing.spacing[8] }}>Gap: 8px between steps</li>
            <li style={{ marginBottom: spacing.spacing[8] }}>Active color: Blue accent (theme-aware)</li>
            <li style={{ marginBottom: spacing.spacing[8] }}>Inactive color: Gray alpha 10% (theme-aware)</li>
            <li style={{ marginBottom: spacing.spacing[8] }}>Border radius: Full (pill-shaped)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProgressBarPlayground;