import React, { useState } from 'react';
import { ThemeProvider } from './services/theme-context.jsx';
import { AuthProvider, useAuth } from './services/auth-context.jsx';
import MainAppChrome from './design-system/components/MainAppChrome.jsx';
import SignInPage from './pages/SignInPage.jsx';
import SignUpPage from './pages/SignUpPage.jsx';
import { OnboardingWelcome, OnboardingProfile, OnboardingInspirations, OnboardingGoals, OnboardingPillars, OnboardingGuides, OnboardingPacing } from './pages/onboarding/index.js';

// Inner component that uses auth context
const AppContent = () => {
  const { 
    isAuthenticated, 
    needsOnboarding, 
    onboardingStep,
    nextOnboardingStep,
    previousOnboardingStep,
    completeOnboarding 
  } = useAuth();
  const [showSignUp, setShowSignUp] = useState(false);
  
  // If user is fully authenticated, show main app
  if (isAuthenticated) {
    return <MainAppChrome />;
  }
  
  // If user needs onboarding (just signed up), show onboarding flow
  if (needsOnboarding) {
    switch (onboardingStep) {
      case 1:
        return (
          <OnboardingWelcome 
            key="onboarding-welcome"
            onContinue={() => nextOnboardingStep()} 
          />
        );
      case 2:
        return (
          <OnboardingProfile 
            key="onboarding-profile"
            onBack={previousOnboardingStep}
            onContinue={(data) => nextOnboardingStep(data)}
          />
        );
      case 3:
        return (
          <OnboardingInspirations 
            key="onboarding-inspirations"
            onBack={previousOnboardingStep}
            onContinue={(data) => nextOnboardingStep(data)}
          />
        );
      case 4:
        return (
          <OnboardingGoals 
            key="onboarding-goals"
            onBack={previousOnboardingStep}
            onContinue={(data) => nextOnboardingStep(data)}
          />
        );
      case 5:
        return (
          <OnboardingGuides 
            key="onboarding-guides"
            onBack={previousOnboardingStep}
            onContinue={(data) => nextOnboardingStep(data)}
          />
        );
      case 6:
        return (
          <OnboardingPillars 
            key="onboarding-pillars"
            onBack={previousOnboardingStep}
            onContinue={(data) => nextOnboardingStep(data)}
          />
        );
      case 7:
        return (
          <OnboardingPacing 
            key="onboarding-pacing"
            onBack={previousOnboardingStep}
            onContinue={(data) => completeOnboarding(data)}
          />
        );
      default:
        // If somehow we get to an invalid step, go back to step 1
        return (
          <OnboardingWelcome 
            key="onboarding-welcome-fallback"
            onContinue={() => nextOnboardingStep()} 
          />
        );
    }
  }
  
  // Otherwise show sign in/up flow
  return showSignUp ? 
    <SignUpPage onSwitchToSignIn={() => setShowSignUp(false)} /> : 
    <SignInPage onSwitchToSignUp={() => setShowSignUp(true)} />;
};

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
