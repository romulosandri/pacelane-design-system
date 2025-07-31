import React, { useState } from 'react';
import { ThemeProvider } from './services/theme-context.jsx';
import StatsSummaryCardPlayground from './StatsSummaryCardPlayground.jsx';
import StreakCardPlayground from './StreakCardPlayground.jsx';
import ButtonPlayground from './ButtonPlayground.jsx';
import ButtonGroupPlayground from './ButtonGroupPlayground.jsx';
import SuggestionCardPlayground from './SuggestionCardPlayground.jsx';
import TopNavPlayground from './TopNavPlayground.jsx';
import EditorNavPlayground from './EditorNavPlayground.jsx';
import Button from './design-system/components/Button.jsx';

function App() {
  const [currentView, setCurrentView] = useState('editornav'); // Start with EditorNav component

  return (
    <ThemeProvider>
      <div style={{ position: 'fixed', top: '1rem', right: '1rem', zIndex: 1000 }}>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          <Button
            label="EditorNav"
            style={currentView === 'editornav' ? 'primary' : 'secondary'}
            size="sm"
            onClick={() => setCurrentView('editornav')}
          />
          <Button
            label="TopNav"
            style={currentView === 'topnav' ? 'primary' : 'secondary'}
            size="sm"
            onClick={() => setCurrentView('topnav')}
          />
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
          <Button
            label="StreakCard"
            style={currentView === 'streakcard' ? 'primary' : 'secondary'}
            size="sm"
            onClick={() => setCurrentView('streakcard')}
          />
          <Button
            label="SuggestionCard"
            style={currentView === 'suggestioncard' ? 'primary' : 'secondary'}
            size="sm"
            onClick={() => setCurrentView('suggestioncard')}
          />
        </div>
      </div>
      
      {currentView === 'editornav' && <EditorNavPlayground />}
      {currentView === 'topnav' && <TopNavPlayground />}
      {currentView === 'statssummarycard' && <StatsSummaryCardPlayground />}
      {currentView === 'buttons' && <ButtonPlayground />}
      {currentView === 'buttongroup' && <ButtonGroupPlayground />}
      {currentView === 'streakcard' && <StreakCardPlayground />}
      {currentView === 'suggestioncard' && <SuggestionCardPlayground />}
    </ThemeProvider>
  );
}

export default App;
