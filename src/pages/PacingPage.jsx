import React, { useState } from 'react';
import { useTheme } from '../services/theme-context.jsx';
import { spacing } from '../design-system/tokens/spacing.js';
import { cornerRadius } from '../design-system/tokens/corner-radius.js';
import { getShadow } from '../design-system/tokens/shadows.js';
import { typography } from '../design-system/tokens/typography.js';
import { textStyles } from '../design-system/styles/typography/typography-styles.js';

// Design System Components
import Button from '../design-system/components/Button.jsx';
import ButtonGroup from '../design-system/components/ButtonGroup.jsx';
import Checkbox from '../design-system/components/Checkbox.jsx';
import SidebarMenuItem from '../design-system/components/SidebarMenuItem.jsx';

// Icons
import { ChevronDown, Clock, Calendar, Bell, MessageSquare, Check } from 'lucide-react';

const PacingPage = () => {
  const { colors } = useTheme();
  
  // State for active section in side menu
  const [activeSection, setActiveSection] = useState('frequency');
  
  // State for each section's data
  const [selectedDays, setSelectedDays] = useState(['monday', 'wednesday', 'friday']);
  const [dailySummaryTime, setDailySummaryTime] = useState('Evening (6-8 PM)');
  const [followUps, setFollowUps] = useState('Two more times the same day');
  const [recommendationsTime, setRecommendationsTime] = useState('Morning (8-10 AM)');
  const [contextSessionsTime, setContextSessionsTime] = useState('Weekly');

  // Saved states for each section
  const [savedStates, setSavedStates] = useState({
    frequency: false,
    dailySummary: false,
    recommendations: false,
    contextSessions: false
  });

  const weekdays = [
    { id: 'monday', label: 'M', day: 'Monday' },
    { id: 'tuesday', label: 'T', day: 'Tuesday' },
    { id: 'wednesday', label: 'W', day: 'Wednesday' },
    { id: 'thursday', label: 'T', day: 'Thursday' },
    { id: 'friday', label: 'F', day: 'Friday' },
    { id: 'saturday', label: 'S', day: 'Saturday' },
    { id: 'sunday', label: 'S', day: 'Sunday' }
  ];

  const timeOptions = [
    'Morning (8-10 AM)',
    'Afternoon (12-2 PM)', 
    'Evening (6-8 PM)',
    'Night (8-10 PM)'
  ];

  const followUpOptions = [
    'No follow-ups',
    'One more time the same day',
    'Two more times the same day',
    'Next day if no response'
  ];

  const recommendationOptions = [
    'Morning (8-10 AM)',
    'Afternoon (12-2 PM)',
    'Evening (6-8 PM)',
    'Night (8-10 PM)'
  ];

  const contextOptions = [
    'Daily',
    'Every 3 days',
    'Weekly',
    'Bi-weekly',
    'Monthly'
  ];

  // Side menu items
  const menuItems = [
    { 
      id: 'frequency', 
      label: 'Frequency', 
      icon: <Calendar size={16} />,
      description: 'Define when you want to post'
    },
    { 
      id: 'dailySummary', 
      label: 'Daily Summary', 
      icon: <MessageSquare size={16} />,
      description: 'Set when we ask about your day'
    },
    { 
      id: 'recommendations', 
      label: 'Recommendations', 
      icon: <Bell size={16} />,
      description: 'Schedule content suggestions'
    },
    { 
      id: 'contextSessions', 
      label: 'Context Sessions', 
      icon: <Clock size={16} />,
      description: 'Set strategy review frequency'
    }
  ];

  const toggleDay = (dayId) => {
    setSelectedDays(prev => {
      if (prev.includes(dayId)) {
        return prev.filter(d => d !== dayId);
      } else {
        return [...prev, dayId];
      }
    });
  };

  const handleSave = (sectionId) => {
    setSavedStates(prev => ({
      ...prev,
      [sectionId]: true
    }));
    
    // Reset saved state after 2 seconds to show the save feedback
    setTimeout(() => {
      setSavedStates(prev => ({
        ...prev,
        [sectionId]: false
      }));
    }, 2000);
  };

  const DropdownButton = ({ value, options, onChange, placeholder = "Select an option" }) => (
    <div style={{ position: 'relative' }}>
      <Button
        label={value || placeholder}
        style="secondary"
        size="sm"
        tailIcon={<ChevronDown size={14} />}
        onClick={() => {
          // In a real implementation, this would open a dropdown
          // For now, we'll cycle through options
          const currentIndex = options.indexOf(value);
          const nextIndex = (currentIndex + 1) % options.length;
          onChange(options[nextIndex]);
        }}
        className="w-full"
      />
    </div>
  );



  const renderSectionContent = () => {
    switch (activeSection) {
      case 'frequency':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: spacing.spacing[20] }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: spacing.spacing[4] }}>
              <h3 style={{ ...textStyles.lg.semibold, color: colors.text.default, margin: 0 }}>
                Frequency
              </h3>
              <p style={{ ...textStyles.sm.normal, color: colors.text.subtle, margin: 0 }}>
                Define when you want to post
              </p>
            </div>
            
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: spacing.spacing[8],
            }}>
              {weekdays.map((day) => (
                <div key={day.id} style={{ 
                  display: 'flex', 
                  flexDirection: 'column',
                  alignItems: 'center', 
                  gap: spacing.spacing[4] 
                }}>
                  <Checkbox
                    checked={selectedDays.includes(day.id)}
                    onChange={() => toggleDay(day.id)}
                  />
                  <span style={{ ...textStyles.sm.medium, color: colors.text.default }}>
                    {day.label}
                  </span>
                </div>
              ))}
            </div>

            <Button
              label={savedStates.frequency ? "Saved!" : "Save Changes"}
              style="primary"
              size="sm"
              leadIcon={savedStates.frequency ? <Check size={16} /> : undefined}
              onClick={() => handleSave('frequency')}
              disabled={savedStates.frequency}
            />
          </div>
        );

      case 'dailySummary':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: spacing.spacing[20] }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: spacing.spacing[4] }}>
              <h3 style={{ ...textStyles.lg.semibold, color: colors.text.default, margin: 0 }}>
                Daily Summary
              </h3>
              <p style={{ ...textStyles.sm.normal, color: colors.text.subtle, margin: 0 }}>
                Define when you want us to ask you about your day
              </p>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: spacing.spacing[16] }}>
              <DropdownButton
                value={dailySummaryTime}
                options={timeOptions}
                onChange={setDailySummaryTime}
              />
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: spacing.spacing[8] }}>
                <h4 style={{ ...textStyles.sm.semibold, color: colors.text.default, margin: 0 }}>
                  Follow-Ups
                </h4>
                <DropdownButton
                  value={followUps}
                  options={followUpOptions}
                  onChange={setFollowUps}
                />
                <p style={{ ...textStyles.xs.normal, color: colors.text.subtle, margin: 0 }}>
                  Define how many follow-ups should we make in case you don't respond to our first message
                </p>
              </div>
            </div>

            <Button
              label={savedStates.dailySummary ? "Saved!" : "Save Changes"}
              style="primary"
              size="sm"
              leadIcon={savedStates.dailySummary ? <Check size={16} /> : undefined}
              onClick={() => handleSave('dailySummary')}
              disabled={savedStates.dailySummary}
            />
          </div>
        );

      case 'recommendations':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: spacing.spacing[20] }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: spacing.spacing[4] }}>
              <h3 style={{ ...textStyles.lg.semibold, color: colors.text.default, margin: 0 }}>
                Recommendations
              </h3>
              <p style={{ ...textStyles.sm.normal, color: colors.text.subtle, margin: 0 }}>
                Define when you want us to send you your content recommendations
              </p>
            </div>
            
            <DropdownButton
              value={recommendationsTime}
              options={recommendationOptions}
              onChange={setRecommendationsTime}
            />

            <Button
              label={savedStates.recommendations ? "Saved!" : "Save Changes"}
              style="primary"
              size="sm"
              leadIcon={savedStates.recommendations ? <Check size={16} /> : undefined}
              onClick={() => handleSave('recommendations')}
              disabled={savedStates.recommendations}
            />
          </div>
        );

      case 'contextSessions':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: spacing.spacing[20] }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: spacing.spacing[4] }}>
              <h3 style={{ ...textStyles.lg.semibold, color: colors.text.default, margin: 0 }}>
                Context Sessions
              </h3>
              <p style={{ ...textStyles.sm.normal, color: colors.text.subtle, margin: 0 }}>
                We will ask you a few questions to tailor your strategy and get more context around some topics
              </p>
            </div>
            
            <DropdownButton
              value={contextSessionsTime}
              options={contextOptions}
              onChange={setContextSessionsTime}
            />

            <Button
              label={savedStates.contextSessions ? "Saved!" : "Save Changes"}
              style="primary"
              size="sm"
              leadIcon={savedStates.contextSessions ? <Check size={16} /> : undefined}
              onClick={() => handleSave('contextSessions')}
              disabled={savedStates.contextSessions}
            />
          </div>
        );

      default:
        return null;
    }
  };

  // Main container styles - 840px width, center aligned, gap: 48 for more space between sections
  const containerStyles = {
    paddingTop: spacing.spacing[80],
    paddingBottom: spacing.spacing[160],
    paddingLeft: spacing.spacing[32],
    paddingRight: spacing.spacing[32],
    width: '840px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    gap: spacing.spacing[48],
  };

  // Title style using awesome serif font, 4xl semi bold (following KnowledgeBasePage pattern)
  const titleStyle = {
    fontFamily: typography.fontFamily['awesome-serif'],
    fontSize: typography.desktop.size['4xl'],
    fontWeight: typography.desktop.weight.semibold,
    lineHeight: typography.desktop.lineHeight.leading7,
    letterSpacing: typography.desktop.letterSpacing.normal,
    color: colors.text.default,
    margin: 0,
  };

  // Subtitle style - sm medium, text subtle (following KnowledgeBasePage pattern)
  const subtitleStyle = {
    ...textStyles.sm.medium,
    color: colors.text.subtle,
    margin: 0,
    marginTop: spacing.spacing[8],
  };

  return (
    <div style={containerStyles}>
      {/* Header Section */}
      <div>
        <h1 style={titleStyle}>Pacing Settings</h1>
        <p style={subtitleStyle}>
          Customize when and how often we engage with you for optimal productivity
        </p>
      </div>

      {/* Main Content Layout */}
      <div
        style={{
          display: 'flex',
          gap: spacing.spacing[32],
          width: '100%',
        }}
      >
        {/* Left Side Menu */}
        <div
          style={{
            width: '280px',
            display: 'flex',
            flexDirection: 'column',
            gap: spacing.spacing[8],
            flex: 'none', // Prevent shrinking
          }}
        >
          {menuItems.map((item) => (
            <SidebarMenuItem
              key={item.id}
              variant="default"
              state={activeSection === item.id ? 'active' : 'default'}
              label={item.label}
              leadIcon={item.icon}
              onClick={() => setActiveSection(item.id)}
            />
          ))}
        </div>

        {/* Right Content Card - max 400px width */}
        <div
          style={{
            maxWidth: '400px',
            width: '100%',
            backgroundColor: colors.bg.card.default,
            border: `1px solid ${colors.border.default}`,
            borderRadius: cornerRadius.borderRadius.lg,
            boxShadow: getShadow('regular.card', colors, { withBorder: true }),
            padding: spacing.spacing[24],
            height: 'fit-content',
          }}
        >
          {renderSectionContent()}
        </div>
      </div>
    </div>
  );
};

export default PacingPage;