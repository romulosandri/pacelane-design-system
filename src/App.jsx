import React, { useState } from 'react';
import { ThemeProvider } from './services/theme-context.jsx';
import ButtonPlayground from './ButtonPlayground.jsx';
import ChipsPlayground from './ChipsPlayground.jsx';
import TabsPlayground from './TabsPlayground.jsx';
import ButtonGroupPlayground from './ButtonGroupPlayground.jsx';
import CheckboxPlayground from './CheckboxPlayground.jsx';
import InputPlayground from './InputPlayground.jsx';
import ProgressBarPlayground from './ProgressBarPlayground.jsx';
import ContentCardPlayground from './ContentCardPlayground.jsx';
import FileCardPlayground from './FileCardPlayground.jsx';
import BadgePlayground from './BadgePlayground.jsx';
import FileUploadPlayground from './FileUploadPlayground.jsx';
import DividerPlayground from './DividerPlayground.jsx';
import SidebarMenuItemPlayground from './SidebarMenuItemPlayground.jsx';
import HomeSidebarPlayground from './HomeSidebarPlayground.jsx';
import Button from './design-system/components/Button.jsx';

function App() {
  const [currentView, setCurrentView] = useState('homesidebar'); // Start with homesidebar to showcase new component

  return (
    <ThemeProvider>
      <div style={{ position: 'fixed', top: '1rem', right: '1rem', zIndex: 1000 }}>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
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
          <Button
            label="ButtonGroup"
            style={currentView === 'buttongroup' ? 'primary' : 'secondary'}
            size="sm"
            onClick={() => setCurrentView('buttongroup')}
          />
          <Button
            label="Checkbox"
            style={currentView === 'checkbox' ? 'primary' : 'secondary'}
            size="sm"
            onClick={() => setCurrentView('checkbox')}
          />
          <Button
            label="Input"
            style={currentView === 'input' ? 'primary' : 'secondary'}
            size="sm"
            onClick={() => setCurrentView('input')}
          />
          <Button
            label="ProgressBar"
            style={currentView === 'progressbar' ? 'primary' : 'secondary'}
            size="sm"
            onClick={() => setCurrentView('progressbar')}
          />
          <Button
            label="ContentCard"
            style={currentView === 'contentcard' ? 'primary' : 'secondary'}
            size="sm"
            onClick={() => setCurrentView('contentcard')}
          />
          <Button
            label="FileCard"
            style={currentView === 'filecard' ? 'primary' : 'secondary'}
            size="sm"
            onClick={() => setCurrentView('filecard')}
          />
          <Button
            label="Badge"
            style={currentView === 'badge' ? 'primary' : 'secondary'}
            size="sm"
            onClick={() => setCurrentView('badge')}
          />
          <Button
            label="FileUpload"
            style={currentView === 'fileupload' ? 'primary' : 'secondary'}
            size="sm"
            onClick={() => setCurrentView('fileupload')}
          />
          <Button
            label="Divider"
            style={currentView === 'divider' ? 'primary' : 'secondary'}
            size="sm"
            onClick={() => setCurrentView('divider')}
          />
          <Button
            label="SidebarMenuItem"
            style={currentView === 'sidebarmenuitem' ? 'primary' : 'secondary'}
            size="sm"
            onClick={() => setCurrentView('sidebarmenuitem')}
          />
          <Button
            label="HomeSidebar"
            style={currentView === 'homesidebar' ? 'primary' : 'secondary'}
            size="sm"
            onClick={() => setCurrentView('homesidebar')}
          />
        </div>
      </div>
      
      {currentView === 'buttons' && <ButtonPlayground />}
      {currentView === 'chips' && <ChipsPlayground />}
      {currentView === 'tabs' && <TabsPlayground />}
      {currentView === 'buttongroup' && <ButtonGroupPlayground />}
      {currentView === 'checkbox' && <CheckboxPlayground />}
      {currentView === 'input' && <InputPlayground />}
      {currentView === 'progressbar' && <ProgressBarPlayground />}
      {currentView === 'contentcard' && <ContentCardPlayground />}
      {currentView === 'filecard' && <FileCardPlayground />}
      {currentView === 'badge' && <BadgePlayground />}
      {currentView === 'fileupload' && <FileUploadPlayground />}
      {currentView === 'divider' && <DividerPlayground />}
      {currentView === 'sidebarmenuitem' && <SidebarMenuItemPlayground />}
      {currentView === 'homesidebar' && <HomeSidebarPlayground />}
    </ThemeProvider>
  );
}

export default App;
