import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { useTheme } from '../../services/theme-context.jsx';
import { spacing } from '../../design-system/tokens/spacing.js';
import { cornerRadius } from '../../design-system/tokens/corner-radius.js';
import { getShadow } from '../../design-system/tokens/shadows.js';
import { typography } from '../../design-system/tokens/typography.js';
import { colors as primitiveColors } from '../../design-system/tokens/primitive-colors.js';
import TopNav from '../../design-system/components/TopNav.jsx';
import Button from '../../design-system/components/Button.jsx';
import Bichaurinho from '../../design-system/components/Bichaurinho.jsx';

// Confetti piece component
const ConfettiPiece = ({ delay, duration, left, color }) => {
  return (
    <div
      style={{
        position: 'absolute',
        top: '-24px',
        left: `${left}%`,
        width: '24px',
        height: '12px',
        backgroundColor: color,
        borderRadius: '4px',
        animation: `confetti-fall ${duration}s linear ${delay}s infinite`,
        zIndex: 1,
      }}
    />
  );
};

const OnboardingReady = ({ onContinue }) => {
  const { colors } = useTheme();
  const [confettiPieces, setConfettiPieces] = useState([]);

  // Generate confetti pieces
  useEffect(() => {
    const confettiColors = [
      primitiveColors.blue[500],    // Blue
      primitiveColors.green[500],   // Green
      primitiveColors.orange[500],  // Orange
      primitiveColors.red[500],     // Red
      primitiveColors.violet[500],  // Purple
      primitiveColors.cyan[500],    // Cyan
      primitiveColors.emerald[500], // Emerald (instead of lime)
      primitiveColors.rose[500],    // Rose
    ];

    const pieces = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      delay: Math.random() * 3,
      duration: 3 + Math.random() * 2,
      left: Math.random() * 100,
      color: confettiColors[Math.floor(Math.random() * confettiColors.length)],
    }));

    setConfettiPieces(pieces);
  }, []);

  const handleContinue = () => {
    onContinue();
  };

  return (
    <div
      style={{
        height: '100vh',
        backgroundColor: colors.bg.default,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Confetti Animation Styles */}
      <style>
        {`
          @keyframes confetti-fall {
            0% {
              transform: translateY(-10px) rotate(0deg);
              opacity: 1;
            }
            100% {
              transform: translateY(100vh) rotate(360deg);
              opacity: 0;
            }
          }
        `}
      </style>

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

      {/* Confetti Container */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          pointerEvents: 'none',
          zIndex: 1,
        }}
      >
        {confettiPieces.map((piece) => (
          <ConfettiPiece
            key={piece.id}
            delay={piece.delay}
            duration={piece.duration}
            left={piece.left}
            color={piece.color}
          />
        ))}
      </div>

      {/* Top Navigation - Positioned absolutely */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, zIndex: 3 }}>
        <TopNav />
      </div>

      {/* Content Container */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          position: 'relative',
          zIndex: 2,
        }}
      >
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
                  <Bichaurinho variant={10} size={48} />
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
                    You Are Ready!
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
                    We have scanned your network and connected the dots about what you prefer for your content.
                  </p>
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
              Now let's get this party started!
            </p>
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
            label="Let's Go!"
            style="primary"
            size="lg"
            tailIcon={<ArrowRight size={16} />}
            onClick={handleContinue}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default OnboardingReady;