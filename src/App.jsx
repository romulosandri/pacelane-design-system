import React from 'react';
import { ThemeProvider } from './services/theme-context.jsx';
import MainAppChrome from './design-system/components/MainAppChrome.jsx';

function App() {
  return (
    <ThemeProvider>
      <MainAppChrome />
    </ThemeProvider>
  );
}

export default App;
