import React, { useState } from 'react';
import { useTheme } from '../services/theme-context.jsx';
import { spacing } from '../design-system/tokens/spacing.js';
import { cornerRadius } from '../design-system/tokens/corner-radius.js';
import { getShadow } from '../design-system/tokens/shadows.js';
import { typography } from '../design-system/tokens/typography.js';
import { textStyles } from '../design-system/styles/typography/typography-styles.js';

// Design System Components
import Button from '../design-system/components/Button.jsx';
import Input from '../design-system/components/Input.jsx';
import SidebarMenuItem from '../design-system/components/SidebarMenuItem.jsx';
import Chips from '../design-system/components/Chips.jsx';

// Icons
import { 
  Plus,
  Trash2,
  Check,
  X,
  Sparkles,
  Info
} from 'lucide-react';

const ProfilePage = () => {
  const { colors } = useTheme();
  
  // State for active section in side menu
  const [activeSection, setActiveSection] = useState('personal');
  
  // Personal Information state
  const [personalInfo, setPersonalInfo] = useState({
    name: 'John Doe',
    profession: 'Senior Product Designer',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&fit=crop&crop=face',
    linkedinUrl: 'https://linkedin.com/in/johndoe',
    whatsapp: '+1 (555) 123-4567',
    bio: 'Passionate entrepreneur and content creator focused on building meaningful connections and sharing insights about modern business practices.',
    city: 'San Francisco',
    country: 'United States'
  });

  // Company Information state
  const [companyInfo, setCompanyInfo] = useState({
    name: 'Tech Innovations Inc.',
    industry: 'Technology & AI Solutions',
    avatar: 'https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=96&h=96&fit=crop',
    about: 'A forward-thinking technology company specializing in AI-driven solutions for modern businesses. We focus on creating tools that enhance productivity and foster innovation.'
  });

  // Dynamic lists state
  const [inspirations, setInspirations] = useState([
    { id: 1, value: 'Steve Jobs' },
    { id: 2, value: 'Marie Curie' },
    { id: 3, value: 'Elon Musk' }
  ]);

  const [goals, setGoals] = useState([
    { id: 1, value: 'Build a sustainable business' },
    { id: 2, value: 'Impact 1M+ people through content' },
    { id: 3, value: 'Develop thought leadership' }
  ]);

  const [guides, setGuides] = useState([
    { id: 1, value: 'Be authentic and transparent' },
    { id: 2, value: 'Focus on providing value' },
    { id: 3, value: 'Stay curious and keep learning' }
  ]);

  const [pillars, setPillars] = useState([
    { id: 1, value: 'Innovation' },
    { id: 2, value: 'Collaboration' },
    { id: 3, value: 'Continuous Learning' }
  ]);

  // New goal input state for chips interface
  const [newGoal, setNewGoal] = useState('');

  // New pillar input state for chips interface
  const [newPillar, setNewPillar] = useState('');

  // New guide input state for chips interface  
  const [newGuide, setNewGuide] = useState('');

  // Inspirations section new features
  const [targetPersona, setTargetPersona] = useState('Tech-savvy entrepreneurs and startup founders aged 28-45 who are passionate about innovation and building scalable businesses. They value efficiency, data-driven decisions, and staying ahead of industry trends.');
  
  const [competitors, setCompetitors] = useState([
    { id: 1, url: 'https://techcrunch.com' },
    { id: 2, url: 'https://ycombinator.com' },
    { id: 3, url: 'https://firstround.com' }
  ]);
  


  // Saved states for each section
  const [savedStates, setSavedStates] = useState({
    profile: false,
    whatsapp: false,
    bio: false,
    address: false,
    companyProfile: false,
    companyAbout: false,
    inspirations: false,
    targetPersona: false,
    competitors: false,
    goals: false,
    guides: false,
    pillars: false
  });

  // Side menu items
  const menuItems = [
    { 
      id: 'personal', 
      label: 'Personal Information'
    },
    { 
      id: 'company', 
      label: 'Company Information'
    },
    { 
      id: 'inspirations', 
      label: 'Inspirations'
    },
    { 
      id: 'goals', 
      label: 'Goals'
    },
    { 
      id: 'guides', 
      label: 'Guides'
    },
    { 
      id: 'pillars', 
      label: 'Pillars'
    }
  ];

  // Generic functions for managing dynamic lists
  const addListItem = (listType, setterFunction) => {
    const currentList = getCurrentList(listType);
    const newId = Math.max(...currentList.map(item => item.id)) + 1;
    setterFunction(prev => [...prev, { id: newId, value: '' }]);
  };

  const removeListItem = (listType, setterFunction, id) => {
    setterFunction(prev => prev.filter(item => item.id !== id));
  };

  const updateListItem = (listType, setterFunction, id, value) => {
    setterFunction(prev => 
      prev.map(item => 
        item.id === id ? { ...item, value } : item
      )
    );
  };

  const getCurrentList = (listType) => {
    switch (listType) {
      case 'inspirations': return inspirations;
      case 'goals': return goals;
      case 'guides': return guides;
      case 'pillars': return pillars;
      default: return [];
    }
  };

  const getSetterFunction = (listType) => {
    switch (listType) {
      case 'inspirations': return setInspirations;
      case 'goals': return setGoals;
      case 'guides': return setGuides;
      case 'pillars': return setPillars;
      default: return () => {};
    }
  };

  const handleSave = (sectionId) => {
    setSavedStates(prev => ({
      ...prev,
      [sectionId]: true
    }));
    
    // Reset saved state after 2 seconds
    setTimeout(() => {
      setSavedStates(prev => ({
        ...prev,
        [sectionId]: false
      }));
    }, 2000);
  };

  // Goals chips specific functions
  const addGoalChip = () => {
    if (newGoal.trim()) {
      const newId = Math.max(...goals.map(goal => goal.id), 0) + 1;
      setGoals(prev => [...prev, { id: newId, value: newGoal.trim() }]);
      setNewGoal('');
    }
  };

  const removeGoalChip = (goalId) => {
    setGoals(prev => prev.filter(goal => goal.id !== goalId));
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addGoalChip();
    }
  };

  // Pillars chips specific functions
  const addPillarChip = () => {
    if (newPillar.trim()) {
      const newId = Math.max(...pillars.map(pillar => pillar.id), 0) + 1;
      setPillars(prev => [...prev, { id: newId, value: newPillar.trim() }]);
      setNewPillar('');
    }
  };

  const removePillarChip = (pillarId) => {
    setPillars(prev => prev.filter(pillar => pillar.id !== pillarId));
  };

  const handlePillarKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addPillarChip();
    }
  };

  // Competitors management functions
  const removeCompetitor = (competitorId) => {
    setCompetitors(prev => prev.filter(comp => comp.id !== competitorId));
  };

  // Guides chips specific functions
  const addGuideChip = () => {
    if (newGuide.trim()) {
      const newId = Math.max(...guides.map(guide => guide.id), 0) + 1;
      setGuides(prev => [...prev, { id: newId, value: newGuide.trim() }]);
      setNewGuide('');
    }
  };

  const removeGuideChip = (guideId) => {
    setGuides(prev => prev.filter(guide => guide.id !== guideId));
  };

  const handleGuideKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addGuideChip();
    }
  };

  const handlePersonalInfoChange = (field, value) => {
    setPersonalInfo(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleCompanyInfoChange = (field, value) => {
    setCompanyInfo(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Component for display avatar (smaller, no edit)
  const Avatar = ({ src, alt, size = '64px' }) => (
    <img
      src={src}
      alt={alt}
      style={{
        width: size,
        height: size,
        borderRadius: cornerRadius.borderRadius.full,
        objectFit: 'cover',
        border: `2px solid ${colors.border.default}`,
      }}
    />
  );





  // Component for dynamic list management
  const DynamicList = ({ listType, title, placeholder, description }) => {
    const currentList = getCurrentList(listType);
    const setterFunction = getSetterFunction(listType);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: spacing.spacing[20] }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: spacing.spacing[4] }}>
          <h3 style={{ ...textStyles.sm.semibold, color: colors.text.default, margin: 0 }}>
            {title}
          </h3>
          {description && (
            <p style={{ ...textStyles.xs.normal, color: colors.text.subtle, margin: 0 }}>
              {description}
            </p>
          )}
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: spacing.spacing[8] }}>
          {currentList.map((item) => (
            <Input
              key={item.id}
              placeholder={placeholder}
              value={item.value}
              onChange={(e) => updateListItem(listType, setterFunction, item.id, e.target.value)}
              style="tail-action"
              tailAction={{
                icon: <Trash2 size={14} />,
                onClick: () => removeListItem(listType, setterFunction, item.id)
              }}
            />
          ))}
          
          <div style={{ marginTop: spacing.spacing[8] }}>
            <Button
              label={`Add ${title}`}
              style="secondary"
              size="sm"
              leadIcon={<Plus size={14} />}
              onClick={() => addListItem(listType, setterFunction)}
              className="w-full"
            />
          </div>
        </div>

        <div style={{ alignSelf: 'flex-start' }}>
          <Button
            label={savedStates[listType] ? "Saved!" : "Save"}
            style="primary"
            size="sm"
            leadIcon={savedStates[listType] ? <Check size={16} /> : undefined}
            onClick={() => handleSave(listType)}
            disabled={savedStates[listType]}
          />
        </div>
      </div>
    );
  };

  const renderSectionContent = () => {
    switch (activeSection) {
      case 'inspirations':
        return (
          <>
            {/* Inspirations List Card */}
            <div style={{ 
              backgroundColor: colors.bg.card.default,
              border: `1px solid ${colors.border.default}`,
              borderRadius: cornerRadius.borderRadius.lg,
              boxShadow: getShadow('regular.card', colors, { withBorder: true }),
              padding: spacing.spacing[24],
              marginBottom: spacing.spacing[24]
            }}>
              <DynamicList
                listType="inspirations"
                title="Inspirations"
                placeholder="Enter someone who inspires you..."
                description="Who are the people that inspire your work and thinking?"
              />
            </div>

            {/* Target Persona Card */}
            <div style={{ 
              backgroundColor: colors.bg.card.default,
              border: `1px solid ${colors.border.default}`,
              borderRadius: cornerRadius.borderRadius.lg,
              boxShadow: getShadow('regular.card', colors, { withBorder: true }),
              padding: spacing.spacing[24],
              display: 'flex',
              flexDirection: 'column',
              gap: spacing.spacing[16],
              marginBottom: spacing.spacing[24]
            }}>
              {/* Header */}
              <div>
                <h3 style={{ 
                  ...textStyles.sm.semibold, 
                  color: colors.text.default, 
                  margin: 0 
                }}>
                  Target Persona
                </h3>
                <p style={{ ...textStyles.xs.normal, color: colors.text.subtle, margin: 0 }}>
                  Describe your ideal audience and who you're creating content for
                </p>
              </div>

              {/* Textarea */}
              <textarea
                value={targetPersona}
                onChange={(e) => setTargetPersona(e.target.value)}
                placeholder="Describe your target persona..."
                rows={4}
                style={{
                  width: '100%',
                  padding: spacing.spacing[12],
                  border: `1px solid ${colors.border.default}`,
                  borderRadius: cornerRadius.borderRadius.md,
                  backgroundColor: colors.bg.input.default,
                  color: colors.text.default,
                  fontSize: textStyles.sm.normal.fontSize,
                  fontFamily: textStyles.sm.normal.fontFamily,
                  lineHeight: textStyles.sm.normal.lineHeight,
                  resize: 'vertical',
                  outline: 'none',
                  transition: 'border-color 0.15s ease-in-out',
                  boxSizing: 'border-box'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = colors.border.highlight;
                  e.target.style.boxShadow = getShadow('', colors, { focusType: 'input' });
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = colors.border.default;
                  e.target.style.boxShadow = 'none';
                }}
              />

              {/* Save Button */}
              <div style={{ alignSelf: 'flex-start' }}>
                <Button
                  label={savedStates.targetPersona ? "Saved!" : "Save"}
                  style="primary"
                  size="sm"
                  leadIcon={savedStates.targetPersona ? <Check size={16} /> : undefined}
                  onClick={() => handleSave('targetPersona')}
                  disabled={savedStates.targetPersona}
                />
              </div>
            </div>

            {/* Competitors Card */}
            <div style={{ 
              backgroundColor: colors.bg.card.default,
              border: `1px solid ${colors.border.default}`,
              borderRadius: cornerRadius.borderRadius.lg,
              boxShadow: getShadow('regular.card', colors, { withBorder: true }),
              padding: spacing.spacing[24],
              display: 'flex',
              flexDirection: 'column',
              gap: spacing.spacing[16]
            }}>
              {/* Header */}
              <div>
                <h3 style={{ 
                  ...textStyles.sm.semibold, 
                  color: colors.text.default, 
                  margin: 0 
                }}>
                  Competitors
                </h3>
                <p style={{ ...textStyles.xs.normal, color: colors.text.subtle, margin: 0 }}>
                  Keep track of competitor websites and industry leaders
                </p>
              </div>

              {/* Competitors List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: spacing.spacing[8] }}>
                {competitors.map((competitor) => (
                  <Input
                    key={competitor.id}
                    placeholder="Enter competitor website URL..."
                    value={competitor.url}
                    onChange={(e) => {
                      setCompetitors(prev => 
                        prev.map(comp => 
                          comp.id === competitor.id ? { ...comp, url: e.target.value } : comp
                        )
                      );
                    }}
                    style="tail-action"
                    tailAction={{
                      icon: <Trash2 size={14} />,
                      onClick: () => removeCompetitor(competitor.id)
                    }}
                  />
                ))}
                
                <div style={{ marginTop: spacing.spacing[8] }}>
                  <Button
                    label="Add Competitors"
                    style="secondary"
                    size="sm"
                    leadIcon={<Plus size={14} />}
                    onClick={() => {
                      const newId = Math.max(...competitors.map(comp => comp.id), 0) + 1;
                      setCompetitors(prev => [...prev, { id: newId, url: '' }]);
                    }}
                    className="w-full"
                  />
                </div>
              </div>

              {/* Save Button */}
              <div style={{ alignSelf: 'flex-start' }}>
                <Button
                  label={savedStates.competitors ? "Saved!" : "Save"}
                  style="primary"
                  size="sm"
                  leadIcon={savedStates.competitors ? <Check size={16} /> : undefined}
                  onClick={() => handleSave('competitors')}
                  disabled={savedStates.competitors}
                />
              </div>
            </div>
          </>
        );

      case 'goals':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: spacing.spacing[16] }}>
            {/* Header */}
            <div>
              <h3 style={{ 
                ...textStyles.sm.semibold, 
                color: colors.text.default, 
                margin: 0 
              }}>
                Goals
              </h3>
              <p style={{ ...textStyles.xs.normal, color: colors.text.subtle, margin: 0 }}>
                What are your key objectives and aspirations?
              </p>
            </div>

            {/* Chips Container */}
            <div style={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              gap: spacing.spacing[8],
              minHeight: '44px',
              alignItems: 'flex-start'
            }}>
              {goals.map((goal) => (
                <Chips
                  key={goal.id}
                  label={goal.value}
                  style="default"
                  size="lg"
                  selected={true}
                  leadingIcon={<X size={16} />}
                  onClick={() => removeGoalChip(goal.id)}
                />
              ))}
            </div>

            {/* Add New Goal Input */}
            <Input
              placeholder="Enter a new goal..."
              value={newGoal}
              onChange={(e) => setNewGoal(e.target.value)}
              onKeyPress={handleKeyPress}
              style="tail-action"
              tailAction={{
                icon: <Plus size={14} />,
                onClick: addGoalChip,
                disabled: !newGoal.trim()
              }}
            />

            {/* Divider */}
            <div style={{
              width: '100%',
              height: '1px',
              backgroundColor: colors.border.default
            }} />

            {/* Give me some ideas button */}
            <Button
              label="Give me some ideas"
              style="dashed"
              size="md"
              leadIcon={<Sparkles size={16} />}
              tailIcon={<Info size={16} />}
              onClick={() => console.log('Generate goal ideas')}
            />

            {/* Save Button */}
            <div style={{ alignSelf: 'flex-start' }}>
              <Button
                label={savedStates.goals ? "Saved!" : "Save"}
                style="primary"
                size="sm"
                leadIcon={savedStates.goals ? <Check size={16} /> : undefined}
                onClick={() => handleSave('goals')}
                disabled={savedStates.goals}
              />
            </div>
          </div>
        );

      case 'guides':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: spacing.spacing[16] }}>
            {/* Header */}
            <div>
              <h3 style={{ 
                ...textStyles.sm.semibold, 
                color: colors.text.default, 
                margin: 0 
              }}>
                Guides
              </h3>
              <p style={{ ...textStyles.xs.normal, color: colors.text.subtle, margin: 0 }}>
                What values and principles guide your content creation?
              </p>
            </div>

            {/* Chips Container */}
            <div style={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              gap: spacing.spacing[8],
              minHeight: '44px',
              alignItems: 'flex-start'
            }}>
              {guides.map((guide) => (
                <Chips
                  key={guide.id}
                  label={guide.value}
                  style="default"
                  size="lg"
                  selected={true}
                  leadingIcon={<X size={16} />}
                  onClick={() => removeGuideChip(guide.id)}
                />
              ))}
            </div>

            {/* Add New Guide Input */}
            <Input
              placeholder="Enter a new guide..."
              value={newGuide}
              onChange={(e) => setNewGuide(e.target.value)}
              onKeyPress={handleGuideKeyPress}
              style="tail-action"
              tailAction={{
                icon: <Plus size={14} />,
                onClick: addGuideChip,
                disabled: !newGuide.trim()
              }}
            />

            {/* Divider */}
            <div style={{
              width: '100%',
              height: '1px',
              backgroundColor: colors.border.default
            }} />

            {/* Give me some ideas button */}
            <Button
              label="Give me some ideas"
              style="dashed"
              size="md"
              leadIcon={<Sparkles size={16} />}
              tailIcon={<Info size={16} />}
              onClick={() => console.log('Generate guide ideas')}
            />

            {/* Save Button - Last element */}
            <div style={{ alignSelf: 'flex-start' }}>
              <Button
                label={savedStates.guides ? "Saved!" : "Save"}
                style="primary"
                size="sm"
                leadIcon={savedStates.guides ? <Check size={16} /> : undefined}
                onClick={() => handleSave('guides')}
                disabled={savedStates.guides}
              />
            </div>
          </div>
        );

      case 'pillars':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: spacing.spacing[16] }}>
            {/* Header */}
            <div>
              <h3 style={{ 
                ...textStyles.sm.semibold, 
                color: colors.text.default, 
                margin: 0 
              }}>
                Pillars
              </h3>
              <p style={{ ...textStyles.xs.normal, color: colors.text.subtle, margin: 0 }}>
                What are the core pillars that define your approach?
              </p>
            </div>

            {/* Chips Container */}
            <div style={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              gap: spacing.spacing[8],
              minHeight: '44px',
              alignItems: 'flex-start'
            }}>
              {pillars.map((pillar) => (
                <Chips
                  key={pillar.id}
                  label={pillar.value}
                  style="default"
                  size="lg"
                  selected={true}
                  leadingIcon={<X size={16} />}
                  onClick={() => removePillarChip(pillar.id)}
                />
              ))}
            </div>

            {/* Add New Pillar Input */}
            <Input
              placeholder="Enter a new pillar..."
              value={newPillar}
              onChange={(e) => setNewPillar(e.target.value)}
              onKeyPress={handlePillarKeyPress}
              style="tail-action"
              tailAction={{
                icon: <Plus size={14} />,
                onClick: addPillarChip,
                disabled: !newPillar.trim()
              }}
            />

            {/* Divider */}
            <div style={{
              width: '100%',
              height: '1px',
              backgroundColor: colors.border.default
            }} />

            {/* Give me some ideas button */}
            <Button
              label="Give me some ideas"
              style="dashed"
              size="md"
              leadIcon={<Sparkles size={16} />}
              tailIcon={<Info size={16} />}
              onClick={() => console.log('Generate pillar ideas')}
            />

            {/* Save Button */}
            <div style={{ alignSelf: 'flex-start' }}>
              <Button
                label={savedStates.pillars ? "Saved!" : "Save"}
                style="primary"
                size="sm"
                leadIcon={savedStates.pillars ? <Check size={16} /> : undefined}
                onClick={() => handleSave('pillars')}
                disabled={savedStates.pillars}
              />
            </div>
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
        <h1 style={titleStyle}>Profile Settings</h1>
        <p style={subtitleStyle}>
          Manage your personal information, company details, and content preferences
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
              onClick={() => setActiveSection(item.id)}
            />
          ))}
        </div>

        {/* Right Content Area - Cards Layout */}
        <div
          style={{
            flex: 1,
            maxWidth: '480px',
            display: 'flex',
            flexDirection: 'column',
            gap: spacing.spacing[20],
          }}
        >
          {activeSection === 'personal' && (
            <>
              {/* Profile Card */}
              <div
                style={{
                  backgroundColor: colors.bg.card.default,
                  border: `1px solid ${colors.border.default}`,
                  borderRadius: cornerRadius.borderRadius.lg,
                  boxShadow: getShadow('regular.card', colors, { withBorder: true }),
                  padding: spacing.spacing[20],
                  display: 'flex',
                  flexDirection: 'column',
                  gap: spacing.spacing[12],
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: spacing.spacing[16] }}>
                  <Avatar
                    src={personalInfo.avatar}
                    alt={personalInfo.name}
                    size="64px"
                  />
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: spacing.spacing[12] }}>
                    <div>
                      <h2 style={{
                        fontFamily: typography.fontFamily['awesome-serif'],
                        fontSize: typography.desktop.size['2xl'],
                        fontWeight: typography.desktop.weight.semibold,
                        lineHeight: typography.desktop.lineHeight.leading6,
                        letterSpacing: typography.desktop.letterSpacing.normal,
                        color: colors.text.default,
                        margin: 0,
                      }}>
                        {personalInfo.name}
                      </h2>
                      <p style={{
                        ...textStyles.sm.normal,
                        color: colors.text.subtle,
                        margin: 0,
                        marginTop: spacing.spacing[4],
                      }}>
                        {personalInfo.profession}
                      </p>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: spacing.spacing[8] }}>
                      <Input
                        placeholder="Full Name"
                        value={personalInfo.name}
                        onChange={(e) => handlePersonalInfoChange('name', e.target.value)}
                        style="default"
                      />
                      <Input
                        placeholder="Professional Title"
                        value={personalInfo.profession}
                        onChange={(e) => handlePersonalInfoChange('profession', e.target.value)}
                        style="default"
                      />
                      <Input
                        placeholder="LinkedIn URL"
                        value={personalInfo.linkedinUrl}
                        onChange={(e) => handlePersonalInfoChange('linkedinUrl', e.target.value)}
                        style="default"
                      />
                    </div>
                  </div>
                </div>
                <div style={{ alignSelf: 'flex-start' }}>
                  <Button
                    label={savedStates.profile ? "Saved!" : "Save"}
                    style="primary"
                    size="sm"
                    leadIcon={savedStates.profile ? <Check size={16} /> : undefined}
                    onClick={() => handleSave('profile')}
                    disabled={savedStates.profile}
                  />
                </div>
              </div>

              {/* WhatsApp Card */}
              <div
                style={{
                  backgroundColor: colors.bg.card.default,
                  border: `1px solid ${colors.border.default}`,
                  borderRadius: cornerRadius.borderRadius.lg,
                  boxShadow: getShadow('regular.card', colors, { withBorder: true }),
                  padding: spacing.spacing[20],
                  display: 'flex',
                  flexDirection: 'column',
                  gap: spacing.spacing[12],
                }}
              >
                <h4 style={{ 
                  ...textStyles.sm.semibold, 
                  color: colors.text.default, 
                  margin: 0 
                }}>
                  WhatsApp Number
                </h4>
                <Input
                  placeholder="+1 (555) 123-4567"
                  value={personalInfo.whatsapp}
                  onChange={(e) => handlePersonalInfoChange('whatsapp', e.target.value)}
                  style="default"
                />
                <div style={{ alignSelf: 'flex-start' }}>
                  <Button
                    label={savedStates.whatsapp ? "Saved!" : "Save"}
                    style="primary"
                    size="sm"
                    leadIcon={savedStates.whatsapp ? <Check size={16} /> : undefined}
                    onClick={() => handleSave('whatsapp')}
                    disabled={savedStates.whatsapp}
                  />
                </div>
              </div>

              {/* Bio Card */}
              <div
                style={{
                  backgroundColor: colors.bg.card.default,
                  border: `1px solid ${colors.border.default}`,
                  borderRadius: cornerRadius.borderRadius.lg,
                  boxShadow: getShadow('regular.card', colors, { withBorder: true }),
                  padding: spacing.spacing[20],
                  display: 'flex',
                  flexDirection: 'column',
                  gap: spacing.spacing[12],
                }}
              >
                <h4 style={{ 
                  ...textStyles.sm.semibold, 
                  color: colors.text.default, 
                  margin: 0 
                }}>
                  Bio
                </h4>
                <textarea
                  placeholder="Tell us about yourself..."
                  value={personalInfo.bio}
                  onChange={(e) => handlePersonalInfoChange('bio', e.target.value)}
                  style={{
                    ...textStyles.sm.normal,
                    color: colors.text.default,
                    backgroundColor: colors.bg.input.default,
                    border: `1px solid ${colors.border.default}`,
                    borderRadius: cornerRadius.borderRadius.sm,
                    padding: spacing.spacing[12],
                    resize: 'vertical',
                    minHeight: '80px',
                    fontFamily: 'inherit',
                  }}
                />
                <div style={{ alignSelf: 'flex-start' }}>
                  <Button
                    label={savedStates.bio ? "Saved!" : "Save"}
                    style="primary"
                    size="sm"
                    leadIcon={savedStates.bio ? <Check size={16} /> : undefined}
                    onClick={() => handleSave('bio')}
                    disabled={savedStates.bio}
                  />
                </div>
              </div>

              {/* Address Card */}
              <div
                style={{
                  backgroundColor: colors.bg.card.default,
                  border: `1px solid ${colors.border.default}`,
                  borderRadius: cornerRadius.borderRadius.lg,
                  boxShadow: getShadow('regular.card', colors, { withBorder: true }),
                  padding: spacing.spacing[20],
                  display: 'flex',
                  flexDirection: 'column',
                  gap: spacing.spacing[12],
                }}
              >
                <h4 style={{ 
                  ...textStyles.sm.semibold, 
                  color: colors.text.default, 
                  margin: 0 
                }}>
                  Address
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: spacing.spacing[12] }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: spacing.spacing[4] }}>
                    <label style={{
                      ...textStyles.xs.medium,
                      color: colors.text.default,
                      margin: 0
                    }}>
                      City
                    </label>
                    <Input
                      placeholder="Enter your city"
                      value={personalInfo.city}
                      onChange={(e) => handlePersonalInfoChange('city', e.target.value)}
                      style="default"
                    />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: spacing.spacing[4] }}>
                    <label style={{
                      ...textStyles.xs.medium,
                      color: colors.text.default,
                      margin: 0
                    }}>
                      Country
                    </label>
                    <Input
                      placeholder="Enter your country"
                      value={personalInfo.country}
                      onChange={(e) => handlePersonalInfoChange('country', e.target.value)}
                      style="default"
                    />
                  </div>
                </div>
                <div style={{ alignSelf: 'flex-start' }}>
                  <Button
                    label={savedStates.address ? "Saved!" : "Save"}
                    style="primary"
                    size="sm"
                    leadIcon={savedStates.address ? <Check size={16} /> : undefined}
                    onClick={() => handleSave('address')}
                    disabled={savedStates.address}
                  />
                </div>
              </div>


            </>
          )}

          {activeSection === 'company' && (
            <>
              {/* Company Profile Card */}
              <div
                style={{
                  backgroundColor: colors.bg.card.default,
                  border: `1px solid ${colors.border.default}`,
                  borderRadius: cornerRadius.borderRadius.lg,
                  boxShadow: getShadow('regular.card', colors, { withBorder: true }),
                  padding: spacing.spacing[20],
                  display: 'flex',
                  flexDirection: 'column',
                  gap: spacing.spacing[12],
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: spacing.spacing[16] }}>
                  <Avatar
                    src={companyInfo.avatar}
                    alt={companyInfo.name}
                    size="64px"
                  />
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: spacing.spacing[12] }}>
                    <div>
                      <h2 style={{
                        fontFamily: typography.fontFamily['awesome-serif'],
                        fontSize: typography.desktop.size['2xl'],
                        fontWeight: typography.desktop.weight.semibold,
                        lineHeight: typography.desktop.lineHeight.leading6,
                        letterSpacing: typography.desktop.letterSpacing.normal,
                        color: colors.text.default,
                        margin: 0,
                      }}>
                        {companyInfo.name}
                      </h2>
                      <p style={{
                        ...textStyles.sm.normal,
                        color: colors.text.subtle,
                        margin: 0,
                        marginTop: spacing.spacing[4],
                      }}>
                        {companyInfo.industry}
                      </p>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: spacing.spacing[8] }}>
                      <Input
                        placeholder="Company Name"
                        value={companyInfo.name}
                        onChange={(e) => handleCompanyInfoChange('name', e.target.value)}
                        style="default"
                      />
                      <Input
                        placeholder="Industry / Field"
                        value={companyInfo.industry}
                        onChange={(e) => handleCompanyInfoChange('industry', e.target.value)}
                        style="default"
                      />
                    </div>
                  </div>
                </div>
                <div style={{ alignSelf: 'flex-start' }}>
                  <Button
                    label={savedStates.companyProfile ? "Saved!" : "Save"}
                    style="primary"
                    size="sm"
                    leadIcon={savedStates.companyProfile ? <Check size={16} /> : undefined}
                    onClick={() => handleSave('companyProfile')}
                    disabled={savedStates.companyProfile}
                  />
                </div>
              </div>

              {/* About Company Card */}
              <div
                style={{
                  backgroundColor: colors.bg.card.default,
                  border: `1px solid ${colors.border.default}`,
                  borderRadius: cornerRadius.borderRadius.lg,
                  boxShadow: getShadow('regular.card', colors, { withBorder: true }),
                  padding: spacing.spacing[20],
                  display: 'flex',
                  flexDirection: 'column',
                  gap: spacing.spacing[12],
                }}
              >
                <h4 style={{ 
                  ...textStyles.sm.semibold, 
                  color: colors.text.default, 
                  margin: 0 
                }}>
                  About the Company
                </h4>
                <textarea
                  placeholder="Tell us about your company..."
                  value={companyInfo.about}
                  onChange={(e) => handleCompanyInfoChange('about', e.target.value)}
                  style={{
                    ...textStyles.sm.normal,
                    color: colors.text.default,
                    backgroundColor: colors.bg.input.default,
                    border: `1px solid ${colors.border.default}`,
                    borderRadius: cornerRadius.borderRadius.sm,
                    padding: spacing.spacing[12],
                    resize: 'vertical',
                    minHeight: '80px',
                    fontFamily: 'inherit',
                  }}
                />
                <div style={{ alignSelf: 'flex-start' }}>
                  <Button
                    label={savedStates.companyAbout ? "Saved!" : "Save"}
                    style="primary"
                    size="sm"
                    leadIcon={savedStates.companyAbout ? <Check size={16} /> : undefined}
                    onClick={() => handleSave('companyAbout')}
                    disabled={savedStates.companyAbout}
                  />
                </div>
              </div>


            </>
          )}

          {(activeSection === 'goals' || activeSection === 'guides' || activeSection === 'pillars') && (
            <div
              style={{
                backgroundColor: colors.bg.card.default,
                border: `1px solid ${colors.border.default}`,
                borderRadius: cornerRadius.borderRadius.lg,
                boxShadow: getShadow('regular.card', colors, { withBorder: true }),
                padding: spacing.spacing[24],
              }}
            >
              {renderSectionContent()}
            </div>
          )}

          {activeSection === 'inspirations' && (
            <>
              {renderSectionContent()}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;