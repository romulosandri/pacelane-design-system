import React, { useState } from 'react';
import { useTheme } from '../services/theme-context.jsx';
import { useAuth } from '../services/auth-context.jsx';
import { spacing } from '../design-system/tokens/spacing.js';
import { cornerRadius } from '../design-system/tokens/corner-radius.js';
import { textStyles } from '../design-system/styles/typography/typography-styles.js';
import { getShadow } from '../design-system/tokens/shadows.js';

// Design System Components
import Logo from '../design-system/components/Logo.jsx';
import Bichaurinho from '../design-system/components/Bichaurinho.jsx';
import Input from '../design-system/components/Input.jsx';
import Button from '../design-system/components/Button.jsx';
import Divider from '../design-system/components/Divider.jsx';

// Icons
import { FcGoogle } from 'react-icons/fc';

// Background
import gradientBg from '../assets/images/gradient-bg.svg';

/**
 * SignUpPage component - Registration page with centered card layout
 * 
 * Features:
 * - Centered card layout on full screen
 * - Name, email, password, and confirm password fields
 * - Google sign up option
 * - Gradient background with 20% opacity
 * - Responsive design using design system tokens
 */
const SignUpPage = ({ onSwitchToSignIn }) => {
    const { colors } = useTheme();
    const { signUp, signUpWithGoogle } = useAuth();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    // Handle email sign up
    const handleSignUp = async (e) => {
        e.preventDefault();
        if (!name || !email || !password || !confirmPassword) return;
        
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        setIsLoading(true);

        // Simulate API call delay
        setTimeout(() => {
            signUp(name, email, password);
            setIsLoading(false);
        }, 1000);
    };

    // Handle Google sign up
    const handleGoogleSignUp = () => {
        signUpWithGoogle();
    };

    // Page container styles - full screen layout aligned to top
    const pageContainerStyles = {
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: spacing.spacing[40],
        boxSizing: 'border-box',
        position: 'relative',
    };

    // Background gradient container - full screen behind content
    const backgroundStyles = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 1,
        overflow: 'hidden',
        pointerEvents: 'none',
    };

    // Background image styles
    const backgroundImageStyles = {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        objectPosition: 'center',
        opacity: 0.2,
    };

    // Main content container styles
    const contentContainerStyles = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: spacing.spacing[32],
        maxWidth: '400px',
        width: '100%',
        position: 'relative',
        zIndex: 5,
    };

    // Card styles - main card containing the form
    const cardStyles = {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: colors.bg.default,
        border: `1px solid ${colors.border.default}`,
        borderRadius: cornerRadius.borderRadius.lg,
        boxShadow: getShadow('regular.card', colors, { withBorder: true }),
        overflow: 'hidden',
    };

    // Form container styles - main content area
    const formContainerStyles = {
        display: 'flex',
        flexDirection: 'column',
        gap: spacing.spacing[24],
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

    return (
        <div style={pageContainerStyles}>
            {/* Background Gradient */}
            <div style={backgroundStyles}>
                <img 
                    src={gradientBg} 
                    alt="" 
                    style={backgroundImageStyles}
                    aria-hidden="true"
                />
            </div>
            
            {/* Main Content */}
            <div style={contentContainerStyles}>
                {/* Logo */}
                <Logo width={120} />

                {/* Main Card */}
                <div style={cardStyles}>
                    {/* Form Container */}
                    <div style={formContainerStyles}>
                        {/* Heading Container */}
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: spacing.spacing[4] }}>
                            {/* Bichaurinho 16 */}
                            <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                                <Bichaurinho variant={16} size={32} />
                            </div>

                            <h1 style={{
                                ...textStyles['2xl'].semibold,
                                color: colors.text.default,
                                fontFamily: 'Awesome Serif VAR, ui-serif, Georgia, serif',
                                margin: 0
                            }}>
                                Create Account
                            </h1>

                            {/* Subtitle */}
                            <p style={{
                                ...textStyles.sm.normal,
                                color: colors.text.muted,
                                margin: 0,
                                textAlign: 'left'
                            }}>
                                Join us today! Please fill in your details to get started.
                            </p>
                        </div>

                        {/* Form Section */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: spacing.spacing[20], width: '100%' }}>
                            {/* Email and Password Form Container */}
                            <form onSubmit={handleSignUp} style={{ display: 'flex', flexDirection: 'column', gap: spacing.spacing[16], width: '100%' }}>
                                <Input
                                    type="text"
                                    label="Full name"
                                    placeholder="Enter your full name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                    size="lg"
                                />

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
                                    placeholder="Create a password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    size="lg"
                                />

                                <Input
                                    type="password"
                                    label="Confirm password"
                                    placeholder="Confirm your password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    required
                                    size="lg"
                                />

                                {/* Sign Up Button */}
                                <Button
                                    label="Create Account"
                                    style="primary"
                                    size="lg"
                                    onClick={handleSignUp}
                                    loading={isLoading}
                                    disabled={!name || !email || !password || !confirmPassword}
                                    className="w-full"
                                />
                            </form>

                            {/* Divider */}
                            <Divider label="or" maxWidth={400} />

                            {/* Google Sign Up Button */}
                            <div style={{ width: '100%' }}>
                                <Button
                                    label="Sign Up with Google"
                                    style="secondary"
                                    size="lg"
                                    leadIcon={<FcGoogle size={18} />}
                                    onClick={handleGoogleSignUp}
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
                            Already have an account?{' '}
                            <span 
                                style={{ color: colors.text.informative, cursor: 'pointer' }}
                                onClick={onSwitchToSignIn}
                            >
                                Sign In
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUpPage;