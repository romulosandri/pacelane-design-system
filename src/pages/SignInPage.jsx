import React, { useState } from 'react';
import { useTheme } from '../services/theme-context.jsx';
import { useAuth } from '../services/auth-context.jsx';
import { spacing } from '../design-system/tokens/spacing.js';
import { cornerRadius } from '../design-system/tokens/corner-radius.js';
import { textStyles } from '../design-system/styles/typography/typography-styles.js';
import { colors as primitiveColors } from '../design-system/tokens/primitive-colors.js';
import { shadows, getShadow } from '../design-system/tokens/shadows.js';

// Design System Components
import Logo from '../design-system/components/Logo.jsx';
import Bichaurinho from '../design-system/components/Bichaurinho.jsx';
import Input from '../design-system/components/Input.jsx';
import Button from '../design-system/components/Button.jsx';
import ButtonGroup from '../design-system/components/ButtonGroup.jsx';
import Divider from '../design-system/components/Divider.jsx';

// Icons
import { Sun, Moon, Monitor } from 'lucide-react';

// Google Icon Component
const GoogleIcon = ({ size = 16 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
);

/**
 * SignInPage component - Authentication page with two-column layout
 * 
 * Features:
 * - Left column: Logo, sign in form, and theme switcher
 * - Right column: Decorative background
 * - Email/password and Google sign in options
 * - Theme switcher with sun, moon, and monitor icons
 * - Responsive design using design system tokens
 */
const SignInPage = () => {
    const { colors, themePreference, setTheme } = useTheme();
    const { signIn, signInWithGoogle } = useAuth();

    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    // Handle email sign in
    const handleSignIn = async (e) => {
        e.preventDefault();
        if (!email) return;

        setIsLoading(true);

        // Simulate API call delay
        setTimeout(() => {
            signIn(email);
            setIsLoading(false);
        }, 1000);
    };

    // Handle Google sign in
    const handleGoogleSignIn = () => {
        signInWithGoogle();
    };

    // Theme switcher items
    const themeItems = [
        {
            id: 'light',
            leadIcon: <Sun />,
            onClick: () => setTheme('light'),
        },
        {
            id: 'dark',
            leadIcon: <Moon />,
            onClick: () => setTheme('dark'),
        },
        {
            id: 'system',
            leadIcon: <Monitor />,
            onClick: () => setTheme('system'),
        },
    ];

      // Page container styles
  const pageContainerStyles = {
    height: '100vh',
    width: '100vw',
    display: 'flex',
    backgroundColor: colors.bg.subtle,
  };

    // Left column styles (50% width, 720px container)
    const leftColumnStyles = {
        width: '50%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: spacing.spacing[40],
        boxSizing: 'border-box',
    };

    // 400px centered container styles
    const contentContainerStyles = {
        width: '400px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: spacing.spacing[24],
    };

    // Card styles - single card containing both form and text sections
    const cardStyles = {
        width: '400px',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: colors.bg.default,
        border: `1px solid ${colors.border.default}`,
        borderRadius: cornerRadius.borderRadius.lg,
        boxShadow: getShadow('regular.card', colors, { withBorder: true }),
        overflow: 'hidden', // Ensure rounded corners are maintained
    };

    // Form container styles - main content area
    const formContainerStyles = {
        display: 'flex',
        flexDirection: 'column',
        gap: spacing.spacing[24], // 24px gap between major sections
        padding: spacing.spacing[36],
    };

    // Text container styles - bottom section  
    const textContainerStyles = {
        display: 'flex',
        flexDirection: 'column',
        gap: spacing.spacing[4],
        paddingLeft: spacing.spacing[36],
        paddingRight: spacing.spacing[36],
        paddingTop: spacing.spacing[24],
        paddingBottom: spacing.spacing[24],
        backgroundColor: colors.bg.card.subtle,
        borderTop: `1px solid ${colors.border.default}`,
    };

    // Right column styles (50% width)
    const rightColumnStyles = {
        width: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '60px',
        boxSizing: 'border-box',
    };

    // Right column inner container styles
    const rightContainerStyles = {
        width: '100%',
        height: '100%',
        backgroundColor: primitiveColors.cyan[100], // D5EFF6 equivalent
        borderRadius: cornerRadius.borderRadius['3xl'],
        position: 'relative',
        overflow: 'hidden',
    };

    return (
        <div style={pageContainerStyles}>
            {/* Left Column */}
            <div style={leftColumnStyles}>
                <div style={contentContainerStyles}>
                    {/* Logo */}
                    <Logo width={120} />

                    {/* Main Card */}
                    <div style={cardStyles}>
                        {/* Form Container */}
                        <div style={formContainerStyles}>


                            {/* Heading Container */}
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: spacing.spacing[4] }}>
                                {/* Bichaurinho 31 */}
                                <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                                    <Bichaurinho variant={31} size={32} />
                                </div>

                                <h1 style={{
                                    ...textStyles['2xl'].semibold,
                                    color: colors.text.default,
                                    fontFamily: 'Awesome Serif VAR, ui-serif, Georgia, serif',
                                    margin: 0
                                }}>
                                    Sign In
                                </h1>

                                {/* Subtitle */}
                                <p style={{
                                    ...textStyles.sm.normal,
                                    color: colors.text.muted,
                                    margin: 0,
                                    textAlign: 'left'
                                }}>
                                    Welcome back! Please enter your details.
                                </p>
                            </div>

                            {/* Form Section */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: spacing.spacing[20], width: '100%' }}>
                                {/* Email Input and Primary Button Container */}
                                <form onSubmit={handleSignIn} style={{ display: 'flex', flexDirection: 'column', gap: spacing.spacing[8], width: '100%' }}>
                                    <Input
                                        type="email"
                                        label="Email address"
                                        placeholder="Enter your email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        size="lg"
                                    />

                                    {/* Sign In Button */}
                                    <Button
                                        label="Sign In"
                                        style="primary"
                                        size="lg"
                                        onClick={handleSignIn}
                                        loading={isLoading}
                                        disabled={!email}
                                        className="w-full"
                                    />
                                </form>

                                {/* Divider */}
                                <Divider label="or" maxWidth={400} />

                                {/* Google Sign In Button */}
                                <div style={{ width: '100%' }}>
                                    <Button
                                        label="Sign In with Google"
                                        style="secondary"
                                        size="lg"
                                        leadIcon={<GoogleIcon size={18} />}
                                        onClick={handleGoogleSignIn}
                                        className="w-full"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Text Container */}
                        <div style={textContainerStyles}>
                            <p style={{
                                ...textStyles.sm.normal,
                                color: colors.text.muted,
                                margin: 0,
                                textAlign: 'center'
                            }}>
                                Don't have an account?{' '}
                                <span style={{ color: colors.text.informative, cursor: 'pointer' }}>
                                    Sign Up
                                </span>
                            </p>
                        </div>
                    </div>

                    {/* Theme Switcher */}
                    <ButtonGroup
                        type="iconOnly"
                        size="sm"
                        items={themeItems}
                    />
                </div>
            </div>

                  {/* Right Column */}
      <div style={rightColumnStyles}>
        <div style={rightContainerStyles}>
          {/* Sign In Bichaurinho - positioned bottom right */}
          <img 
            src="/src/assets/images/signin-bichaurinho.svg"
            alt="Sign in illustration"
            style={{
              position: 'absolute',
              bottom: '-150px', // Partially outside container
              right: '-100px', // Partially outside container
              width: '800px',
              height: '800px',
              objectFit: 'contain',
            }}
          />
        </div>
      </div>
        </div>
    );
};

export default SignInPage;