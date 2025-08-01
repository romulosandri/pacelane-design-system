import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  // For now, we'll use a simple state. Later this can be connected to a real auth provider
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [needsOnboarding, setNeedsOnboarding] = useState(false);
  const [onboardingStep, setOnboardingStep] = useState(1);
  const [onboardingData, setOnboardingData] = useState({});
  const [user, setUser] = useState(null);

  const signIn = (email, password) => {
    // Mock sign in logic - for now just set as authenticated
    setIsAuthenticated(true);
    setNeedsOnboarding(false);
    setOnboardingStep(1);
    setUser({ email });
  };

  const signInWithGoogle = () => {
    // Mock Google sign in logic
    setIsAuthenticated(true);
    setNeedsOnboarding(false);
    setOnboardingStep(1);
    setUser({ email: 'user@gmail.com', provider: 'google' });
  };

  const signUp = (name, email, password) => {
    // Mock sign up logic - set as needing onboarding, not fully authenticated yet
    setIsAuthenticated(false);
    setNeedsOnboarding(true);
    setOnboardingStep(1);
    setOnboardingData({});
    setUser({ name, email });
  };

  const signUpWithGoogle = () => {
    // Mock Google sign up logic - set as needing onboarding, not fully authenticated yet
    setIsAuthenticated(false);
    setNeedsOnboarding(true);
    setOnboardingStep(1);
    setOnboardingData({});
    setUser({ name: 'User', email: 'user@gmail.com', provider: 'google' });
  };

  const nextOnboardingStep = (stepData = {}) => {
    // Save data from current step and move to next
    setOnboardingData(prev => ({ ...prev, ...stepData }));
    setOnboardingStep(prev => prev + 1);
  };

  const previousOnboardingStep = () => {
    // Go back to previous onboarding step
    setOnboardingStep(prev => Math.max(1, prev - 1));
  };

  const completeOnboarding = (finalData = {}) => {
    // Complete the onboarding flow and fully authenticate the user
    const completedData = { ...onboardingData, ...finalData };
    console.log('Onboarding completed with data:', completedData);
    
    setNeedsOnboarding(false);
    setIsAuthenticated(true);
    setOnboardingStep(1);
    setOnboardingData({});
    
    // In a real app, you'd save this data to your backend
    setUser(prev => ({ ...prev, onboardingData: completedData }));
  };

  const signOut = () => {
    setIsAuthenticated(false);
    setNeedsOnboarding(false);
    setOnboardingStep(1);
    setOnboardingData({});
    setUser(null);
  };

  const value = {
    isAuthenticated,
    needsOnboarding,
    onboardingStep,
    onboardingData,
    user,
    signIn,
    signInWithGoogle,
    signUp,
    signUpWithGoogle,
    nextOnboardingStep,
    previousOnboardingStep,
    completeOnboarding,
    signOut,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};