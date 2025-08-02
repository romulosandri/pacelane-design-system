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

// Icons
import { 
  Plus,
  Trash2,
  Check,
  Camera
} from 'lucide-react';

const ProfilePage = () => {
  const { colors } = useTheme();
  
  // State for active section in side menu
  const [activeSection, setActiveSection] = useState('personal');
  
  // Personal Information state
  const [personalInfo, setPersonalInfo] = useState({
    name: 'John Doe',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&fit=crop&crop=face',
    whatsapp: '+1 (555) 123-4567',
    bio: 'Passionate entrepreneur and content creator focused on building meaningful connections and sharing insights about modern business practices.',
    city: 'San Francisco',
    country: 'United States'
  });

  // Company Information state
  const [companyInfo, setCompanyInfo] = useState({
    name: 'Tech Innovations Inc.',
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

  // Saved states for each section
  const [savedStates, setSavedStates] = useState({
    personal: false,
    company: false,
    inspirations: false,
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

  // Component for avatar with edit button
  const AvatarWithEdit = ({ src, alt, onEdit }) => (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <img
        src={src}
        alt={alt}
        style={{
          width: '96px',
          height: '96px',
          borderRadius: cornerRadius.borderRadius.full,
          objectFit: 'cover',
          border: `2px solid ${colors.border.default}`,
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-4px',
          right: '-4px',
        }}
      >
        <Button
          style="secondary"
          size="2xs"
          leadIcon={<Camera size={12} />}
          onClick={onEdit}
        />
      </div>
    </div>
  );

  // Component for info card
  const InfoCard = ({ title, children }) => (
    <div
      style={{
        backgroundColor: colors.bg.card.subtle,
        border: `1px solid ${colors.border.default}`,
        borderRadius: cornerRadius.borderRadius.md,
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
        {title}
      </h4>
      {children}
    </div>
  );

  // Component for dynamic list management
  const DynamicList = ({ listType, title, placeholder, description }) => {
    const currentList = getCurrentList(listType);
    const setterFunction = getSetterFunction(listType);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: spacing.spacing[20] }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: spacing.spacing[4] }}>
          <h3 style={{ ...textStyles.lg.semibold, color: colors.text.default, margin: 0 }}>
            {title}
          </h3>
          {description && (
            <p style={{ ...textStyles.sm.normal, color: colors.text.subtle, margin: 0 }}>
              {description}
            </p>
          )}
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: spacing.spacing[16] }}>
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
          <DynamicList
            listType="inspirations"
            title="Inspirations"
            placeholder="Enter someone who inspires you..."
            description="Who are the people that inspire your work and thinking?"
          />
        );

      case 'goals':
        return (
          <DynamicList
            listType="goals"
            title="Goals"
            placeholder="Enter a goal..."
            description="What are your key objectives and aspirations?"
          />
        );

      case 'guides':
        return (
          <DynamicList
            listType="guides"
            title="Guides"
            placeholder="Enter a guiding principle..."
            description="What values and principles guide your content creation?"
          />
        );

      case 'pillars':
        return (
          <DynamicList
            listType="pillars"
            title="Pillars"
            placeholder="Enter a pillar..."
            description="What are the core pillars that define your approach?"
          />
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
                  padding: spacing.spacing[24],
                }}
              >
                <InfoCard title="Profile">
                  <div style={{ display: 'flex', alignItems: 'center', gap: spacing.spacing[16] }}>
                    <AvatarWithEdit
                      src={personalInfo.avatar}
                      alt={personalInfo.name}
                      onEdit={() => console.log('Edit avatar')}
                    />
                    <div style={{ flex: 1 }}>
                      <Input
                        placeholder="Full Name"
                        value={personalInfo.name}
                        onChange={(e) => handlePersonalInfoChange('name', e.target.value)}
                        style="default"
                      />
                    </div>
                  </div>
                </InfoCard>
              </div>

              {/* WhatsApp Card */}
              <div
                style={{
                  backgroundColor: colors.bg.card.default,
                  border: `1px solid ${colors.border.default}`,
                  borderRadius: cornerRadius.borderRadius.lg,
                  boxShadow: getShadow('regular.card', colors, { withBorder: true }),
                  padding: spacing.spacing[24],
                }}
              >
                <InfoCard title="WhatsApp Number">
                  <Input
                    placeholder="+1 (555) 123-4567"
                    value={personalInfo.whatsapp}
                    onChange={(e) => handlePersonalInfoChange('whatsapp', e.target.value)}
                    style="default"
                  />
                </InfoCard>
              </div>

              {/* Bio Card */}
              <div
                style={{
                  backgroundColor: colors.bg.card.default,
                  border: `1px solid ${colors.border.default}`,
                  borderRadius: cornerRadius.borderRadius.lg,
                  boxShadow: getShadow('regular.card', colors, { withBorder: true }),
                  padding: spacing.spacing[24],
                }}
              >
                <InfoCard title="Bio">
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
                </InfoCard>
              </div>

              {/* Address Card */}
              <div
                style={{
                  backgroundColor: colors.bg.card.default,
                  border: `1px solid ${colors.border.default}`,
                  borderRadius: cornerRadius.borderRadius.lg,
                  boxShadow: getShadow('regular.card', colors, { withBorder: true }),
                  padding: spacing.spacing[24],
                }}
              >
                <InfoCard title="Address">
                  <div style={{ display: 'flex', gap: spacing.spacing[12] }}>
                    <Input
                      placeholder="City"
                      value={personalInfo.city}
                      onChange={(e) => handlePersonalInfoChange('city', e.target.value)}
                      style="default"
                    />
                    <Input
                      placeholder="Country"
                      value={personalInfo.country}
                      onChange={(e) => handlePersonalInfoChange('country', e.target.value)}
                      style="default"
                    />
                  </div>
                </InfoCard>
              </div>

              {/* Save Button Card */}
              <div
                style={{
                  backgroundColor: colors.bg.card.default,
                  border: `1px solid ${colors.border.default}`,
                  borderRadius: cornerRadius.borderRadius.lg,
                  boxShadow: getShadow('regular.card', colors, { withBorder: true }),
                  padding: spacing.spacing[24],
                  display: 'flex',
                  justifyContent: 'flex-start',
                }}
              >
                <Button
                  label={savedStates.personal ? "Saved!" : "Save"}
                  style="primary"
                  size="sm"
                  leadIcon={savedStates.personal ? <Check size={16} /> : undefined}
                  onClick={() => handleSave('personal')}
                  disabled={savedStates.personal}
                />
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
                  padding: spacing.spacing[24],
                }}
              >
                <InfoCard title="Company Profile">
                  <div style={{ display: 'flex', alignItems: 'center', gap: spacing.spacing[16] }}>
                    <AvatarWithEdit
                      src={companyInfo.avatar}
                      alt={companyInfo.name}
                      onEdit={() => console.log('Edit company avatar')}
                    />
                    <div style={{ flex: 1 }}>
                      <Input
                        placeholder="Company Name"
                        value={companyInfo.name}
                        onChange={(e) => handleCompanyInfoChange('name', e.target.value)}
                        style="default"
                      />
                    </div>
                  </div>
                </InfoCard>
              </div>

              {/* About Company Card */}
              <div
                style={{
                  backgroundColor: colors.bg.card.default,
                  border: `1px solid ${colors.border.default}`,
                  borderRadius: cornerRadius.borderRadius.lg,
                  boxShadow: getShadow('regular.card', colors, { withBorder: true }),
                  padding: spacing.spacing[24],
                }}
              >
                <InfoCard title="About the Company">
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
                </InfoCard>
              </div>

              {/* Save Button Card */}
              <div
                style={{
                  backgroundColor: colors.bg.card.default,
                  border: `1px solid ${colors.border.default}`,
                  borderRadius: cornerRadius.borderRadius.lg,
                  boxShadow: getShadow('regular.card', colors, { withBorder: true }),
                  padding: spacing.spacing[24],
                  display: 'flex',
                  justifyContent: 'flex-start',
                }}
              >
                <Button
                  label={savedStates.company ? "Saved!" : "Save"}
                  style="primary"
                  size="sm"
                  leadIcon={savedStates.company ? <Check size={16} /> : undefined}
                  onClick={() => handleSave('company')}
                  disabled={savedStates.company}
                />
              </div>
            </>
          )}

          {(activeSection === 'inspirations' || activeSection === 'goals' || activeSection === 'guides' || activeSection === 'pillars') && (
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
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;