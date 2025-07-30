import React, { useState } from 'react';
import { ThemeProvider } from './services/theme-context.jsx';
import StatsSummaryCardPlayground from './StatsSummaryCardPlayground.jsx';
import ButtonPlayground from './ButtonPlayground.jsx';
import ButtonGroupPlayground from './ButtonGroupPlayground.jsx';
import Button from './design-system/components/Button.jsx';

function App() {
  const [currentView, setCurrentView] = useState('statssummarycard'); // Start with stats summary card

  return (
    <ThemeProvider>
      <div style={{ position: 'fixed', top: '1rem', right: '1rem', zIndex: 1000 }}>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          <Button
            label="StatsSummaryCard"
            style={currentView === 'statssummarycard' ? 'primary' : 'secondary'}
            size="sm"
            onClick={() => setCurrentView('statssummarycard')}
          />
          <Button
            label="Buttons"
            style={currentView === 'buttons' ? 'primary' : 'secondary'}
            size="sm"
            onClick={() => setCurrentView('buttons')}
          />
          <Button
            label="ButtonGroup"
            style={currentView === 'buttongroup' ? 'primary' : 'secondary'}
            size="sm"
            onClick={() => setCurrentView('buttongroup')}
          />
        </div>
      </div>
      
      {currentView === 'statssummarycard' && <StatsSummaryCardPlayground />}
      {currentView === 'buttons' && <ButtonPlayground />}
      {currentView === 'buttongroup' && <ButtonGroupPlayground />}
    </ThemeProvider>
  );
}

export default App;
