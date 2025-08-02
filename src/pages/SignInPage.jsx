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
import Divider from '../design-system/components/Divider.jsx';

// Icons
import { FcGoogle } from 'react-icons/fc';

/**
 * SignInPage component - Authentication page with two-column layout
 * 
 * Features:
 * - Left column: Logo and sign in form
 * - Right column: Decorative background
 * - Email/password and Google sign in options
 * - Solid background using design system tokens
 * - Responsive design using design system tokens
 */
const SignInPage = ({ onSwitchToSignUp }) => {
    const { colors } = useTheme();
    const { signIn, signInWithGoogle } = useAuth();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    // Handle email sign in
    const handleSignIn = async (e) => {
        e.preventDefault();
        if (!email || !password) return;

        setIsLoading(true);

        // Simulate API call delay
        setTimeout(() => {
            signIn(email, password);
            setIsLoading(false);
        }, 1000);
    };

    // Handle Google sign in
    const handleGoogleSignIn = () => {
        signInWithGoogle();
    };

    // Page container styles
    const pageContainerStyles = {
        height: '100vh',
        width: '100%',
        display: 'flex',
        position: 'relative',
        backgroundColor: colors.bg.default,
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
        position: 'relative',
        zIndex: 5,
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
        padding: '24px',
        boxSizing: 'border-box',
        position: 'relative',
        zIndex: 5,
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
                                {/* Email and Password Form Container */}
                                <form onSubmit={handleSignIn} style={{ display: 'flex', flexDirection: 'column', gap: spacing.spacing[16], width: '100%' }}>
                                    <Input
                                        type="email"
                                        label="Email address"
                                        placeholder="Enter your email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        size="lg"
                                    />

                                    <Input
                                        type="password"
                                        label="Password"
                                        placeholder="Enter your password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
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
                                        disabled={!email || !password}
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
                                         leadIcon={<FcGoogle size={18} />}
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
                                <span 
                                    style={{ color: colors.text.informative, cursor: 'pointer' }}
                                    onClick={onSwitchToSignUp}
                                >
                                    Sign Up
                                </span>
                            </p>
                        </div>
                    </div>
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