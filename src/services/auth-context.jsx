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
  const [user, setUser] = useState(null);

  const signIn = (email, password) => {
    // Mock sign in logic - for now just set as authenticated
    setIsAuthenticated(true);
    setUser({ email });
  };

  const signInWithGoogle = () => {
    // Mock Google sign in logic
    setIsAuthenticated(true);
    setUser({ email: 'user@gmail.com', provider: 'google' });
  };

  const signUp = (name, email, password) => {
    // Mock sign up logic - for now just set as authenticated
    setIsAuthenticated(true);
    setUser({ name, email });
  };

  const signUpWithGoogle = () => {
    // Mock Google sign up logic
    setIsAuthenticated(true);
    setUser({ name: 'User', email: 'user@gmail.com', provider: 'google' });
  };

  const signOut = () => {
    setIsAuthenticated(false);
    setUser(null);
  };

  const value = {
    isAuthenticated,
    user,
    signIn,
    signInWithGoogle,
    signUp,
    signUpWithGoogle,
    signOut,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};