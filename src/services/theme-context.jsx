import React, { createContext, useContext, useState, useEffect } from 'react';
import { themes } from '../design-system/tokens/semantic-colors.js';

const ThemeContext = createContext();

export const ThemeProvider = ({ children, defaultTheme = 'light' }) => {
  const [currentTheme, setCurrentTheme] = useState(() => {
    // Check localStorage for saved theme preference
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      return savedTheme || defaultTheme;
    }
    return defaultTheme;
  });

  const [colors, setColors] = useState(themes[currentTheme]);

  // Update colors when theme changes
  useEffect(() => {
    setColors(themes[currentTheme]);
    
    // Save theme preference to localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', currentTheme);
    }
    
    // Add theme class to document root for CSS usage
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('data-theme', currentTheme);
      document.documentElement.classList.remove('light', 'dark');
      document.documentElement.classList.add(currentTheme);
    }
  }, [currentTheme]);

  const toggleTheme = () => {
    setCurrentTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const setTheme = (theme) => {
    if (themes[theme]) {
      setCurrentTheme(theme);
    } else {
      console.warn(`Theme "${theme}" not found. Available themes:`, Object.keys(themes));
    }
  };

  const value = {
    theme: currentTheme,
    colors,
    toggleTheme,
    setTheme,
    isDark: currentTheme === 'dark',
    isLight: currentTheme === 'light'
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// Higher-order component for theme-aware components
export const withTheme = (Component) => {
  return function ThemedComponent(props) {
    const theme = useTheme();
    return <Component {...props} theme={theme} />;
  };
};

export default ThemeProvider; 