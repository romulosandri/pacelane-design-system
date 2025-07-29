import React from 'react';
import { ThemeProvider } from './services/theme-context.jsx';
import ButtonPlayground from './ButtonPlayground.jsx';

function App() {
  return (
    <ThemeProvider>
      <ButtonPlayground />
    </ThemeProvider>
  );
}

export default App;
