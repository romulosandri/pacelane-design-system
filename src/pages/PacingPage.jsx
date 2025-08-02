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

  const SideMenuItem = ({ item, isActive, onClick }) => (
    <button
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: spacing.spacing[12],
        padding: spacing.spacing[16],
        backgroundColor: isActive ? colors.bg.state.ghost : 'transparent',
        border: 'none',
        borderRadius: cornerRadius.borderRadius.md,
        width: '100%',
        textAlign: 'left',
        cursor: 'pointer',
        transition: 'background-color 0.15s ease-out',
      }}
      onClick={() => onClick(item.id)}
      onMouseEnter={(e) => {
        if (!isActive) {
          e.target.style.backgroundColor = colors.bg.state.ghostHover;
        }
      }}
      onMouseLeave={(e) => {
        if (!isActive) {
          e.target.style.backgroundColor = 'transparent';
        }
      }}
    >
      <div style={{ color: isActive ? colors.icon.default : colors.icon.muted }}>
        {item.icon}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: spacing.spacing[2], flex: 1 }}>
        <span style={{ 
          ...textStyles.sm.medium, 
          color: isActive ? colors.text.default : colors.text.subtle 
        }}>
          {item.label}
        </span>
        <span style={{ 
          ...textStyles.xs.normal, 
          color: colors.text.muted 
        }}>
          {item.description}
        </span>
      </div>
    </button>
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

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: colors.bg.subtle,
        marginLeft: '240px', // Account for sidebar width
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: spacing.spacing[32],
          paddingBottom: spacing.spacing[20],
          borderBottom: `1px solid ${colors.border.default}`,
          backgroundColor: colors.bg.default,
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: spacing.spacing[8] }}>
          <h1 style={{ 
            ...textStyles['3xl'].bold, 
            color: colors.text.default, 
            margin: 0 
          }}>
            Pacing Settings
          </h1>
          <p style={{ 
            ...textStyles.lg.normal, 
            color: colors.text.muted, 
            margin: 0 
          }}>
            Customize when and how often we engage with you for optimal productivity
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          gap: spacing.spacing[32],
          padding: spacing.spacing[32],
        }}
      >
        {/* Left Side Menu */}
        <div
          style={{
            width: '280px',
            display: 'flex',
            flexDirection: 'column',
            gap: spacing.spacing[8],
          }}
        >
          <h2 style={{ 
            ...textStyles.sm.semibold, 
            color: colors.text.default, 
            margin: 0,
            marginBottom: spacing.spacing[8]
          }}>
            Settings Categories
          </h2>
          
          {menuItems.map((item) => (
            <SideMenuItem
              key={item.id}
              item={item}
              isActive={activeSection === item.id}
              onClick={setActiveSection}
            />
          ))}
        </div>

        {/* Right Content Card */}
        <div
          style={{
            flex: 1,
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