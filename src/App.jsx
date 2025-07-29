import React, { useState } from 'react';
import { ThemeProvider } from './services/theme-context.jsx';
import ButtonPlayground from './ButtonPlayground.jsx';
import ChipsPlayground from './ChipsPlayground.jsx';
import TabsPlayground from './TabsPlayground.jsx';
import Button from './design-system/components/Button.jsx';

function App() {
  const [currentView, setCurrentView] = useState('tabs'); // Start with tabs to showcase new component

  return (
    <ThemeProvider>
      <div style={{ position: 'fixed', top: '1rem', right: '1rem', zIndex: 1000 }}>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <Button
            label="Buttons"
            style={currentView === 'buttons' ? 'primary' : 'secondary'}
            size="sm"
            onClick={() => setCurrentView('buttons')}
          />
          <Button
            label="Chips"
            style={currentView === 'chips' ? 'primary' : 'secondary'}
            size="sm"
            onClick={() => setCurrentView('chips')}
          />
          <Button
            label="Tabs"
            style={currentView === 'tabs' ? 'primary' : 'secondary'}
            size="sm"
            onClick={() => setCurrentView('tabs')}
          />
        </div>
      </div>
      
      {currentView === 'buttons' && <ButtonPlayground />}
      {currentView === 'chips' && <ChipsPlayground />}
      {currentView === 'tabs' && <TabsPlayground />}
    </ThemeProvider>
  );
}

export default App;
