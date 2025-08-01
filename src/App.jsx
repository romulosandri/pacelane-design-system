import React from 'react';
import { ThemeProvider } from './services/theme-context.jsx';
import { AuthProvider, useAuth } from './services/auth-context.jsx';
import MainAppChrome from './design-system/components/MainAppChrome.jsx';
import SignInPage from './pages/SignInPage.jsx';

// Inner component that uses auth context
const AppContent = () => {
  const { isAuthenticated } = useAuth();
  
  return isAuthenticated ? <MainAppChrome /> : <SignInPage />;
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
