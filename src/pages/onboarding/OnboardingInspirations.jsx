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

const OnboardingInspirations = ({ onBack, onContinue }) => {
  const { colors } = useTheme();

  // Initialize with one required benchmark field
  const [benchmarks, setBenchmarks] = useState([
    { id: 1, value: '', isRequired: true }
  ]);

  const addBenchmark = () => {
    const newId = Math.max(...benchmarks.map(b => b.id)) + 1;
    setBenchmarks(prev => [...prev, { id: newId, value: '', isRequired: false }]);
  };

  const removeBenchmark = (id) => {
    setBenchmarks(prev => prev.filter(benchmark => benchmark.id !== id));
  };

  const updateBenchmark = (id, value) => {
    setBenchmarks(prev =>
      prev.map(benchmark =>
        benchmark.id === id ? { ...benchmark, value } : benchmark
      )
    );
  };

  const handleContinue = () => {
    // Validate required field (first benchmark)
    const requiredBenchmark = benchmarks.find(b => b.isRequired);
    if (!requiredBenchmark?.value.trim()) {
      return; // Don't proceed if required field is empty
    }

    // Filter out empty benchmarks and trim values
    const validBenchmarks = benchmarks
      .filter(b => b.value.trim())
      .map(b => b.value.trim());

    onContinue({
      inspirations: validBenchmarks,
    });
  };

  // Check if required field is filled
  const requiredBenchmark = benchmarks.find(b => b.isRequired);
  const canContinue = requiredBenchmark?.value.trim();

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
                  <Bichaurinho variant={6} size={48} />
                </div>

                {/* Title and Subtitle Container - 0px gap between title and subtitle */}
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
                    Inspirations
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
                    Tell us what are the profiles on LinkedIn that you admire, and want to be more like
                  </p>
                </div>
              </div>

              {/* Benchmark Fields Container */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: spacing.spacing[16],
                }}
              >
                {/* Dynamic Benchmark Input Fields */}
                {benchmarks.map((benchmark, index) => (
                  <Input
                    key={benchmark.id}
                    label={index === 0 ? "LinkedIn Profile" : `LinkedIn Profile ${index + 1}`}
                    placeholder="https://linkedin.com/in/profile-name"
                    value={benchmark.value}
                    onChange={(e) => updateBenchmark(benchmark.id, e.target.value)}
                    required={benchmark.isRequired}
                    style={!benchmark.isRequired ? "tail-action" : "default"}
                    tailAction={!benchmark.isRequired ? {
                      icon: <Trash2 size={14} />,
                      onClick: () => removeBenchmark(benchmark.id)
                    } : undefined}
                  />
                ))}

                {/* Add Benchmark Button */}
                <div style={{ marginTop: spacing.spacing[8] }}>
                  <Button
                    label="Add Benchmark"
                    style="secondary"
                    size="sm"
                    leadIcon={<Plus size={14} />}
                    onClick={addBenchmark}
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
              currentStep={2}
              totalSteps={4}
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

export default OnboardingInspirations;