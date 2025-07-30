import React, { createContext, useContext, useState, useEffect } from 'react';
import { themes } from '../design-system/tokens/semantic-colors.js';

const ThemeContext = createContext();

export const ThemeProvider = ({ children, defaultTheme = 'system' }) => {
  const [themePreference, setThemePreference] = useState(() => {
    // Check localStorage for saved theme preference
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      return savedTheme || defaultTheme;
    }
    return defaultTheme;
  });

  // Determine the actual theme based on preference and system preference
  const [currentTheme, setCurrentTheme] = useState(() => {
    if (themePreference === 'system' && typeof window !== 'undefined') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return themePreference === 'system' ? 'light' : themePreference;
  });

  const [colors, setColors] = useState(themes[currentTheme]);

  // Update actual theme based on preference and system preference
  useEffect(() => {
    const updateThemeFromPreference = () => {
      if (themePreference === 'system' && typeof window !== 'undefined') {
        const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        setCurrentTheme(systemTheme);
      } else if (themePreference !== 'system') {
        setCurrentTheme(themePreference);
      }
    };

    updateThemeFromPreference();

    // Listen for system theme changes when using system preference
    if (themePreference === 'system' && typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleChange = (e) => {
        setCurrentTheme(e.matches ? 'dark' : 'light');
      };
      
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, [themePreference]);

  // Update colors and DOM when actual theme changes
  useEffect(() => {
    setColors(themes[currentTheme]);
    
    // Save theme preference to localStorage (not the resolved theme)
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', themePreference);
    }
    
    // Add theme class to document root for CSS usage
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('data-theme', currentTheme);
      document.documentElement.classList.remove('light', 'dark');
      document.documentElement.classList.add(currentTheme);
    }
  }, [currentTheme, themePreference]);

  const toggleTheme = () => {
    setThemePreference(prev => prev === 'light' ? 'dark' : 'light');
  };

  const setTheme = (theme) => {
    if (theme === 'system' || themes[theme]) {
      setThemePreference(theme);
    } else {
      console.warn(`Theme "${theme}" not found. Available themes:`, ['light', 'dark', 'system']);
    }
  };

  const value = {
    theme: currentTheme,                    // The actual resolved theme (light/dark)
    themePreference: themePreference,       // The user's preference (light/dark/system)
    colors,
    toggleTheme,
    setTheme,
    isDark: currentTheme === 'dark',
    isLight: currentTheme === 'light',
    isSystem: themePreference === 'system'
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