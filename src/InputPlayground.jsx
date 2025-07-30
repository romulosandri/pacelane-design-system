import React, { useState } from 'react';
import { useTheme } from './services/theme-context.jsx';
import Input from './design-system/components/Input.jsx';
import { spacing } from './design-system/tokens/spacing.js';
import { textStyles } from './design-system/styles/typography/typography-styles.js';

// Sample icons as SVG paths
const ICONS = {
  search: 'M21 21l-6-6m2-5a7 7 0 1 1-14 0 7 7 0 0 1 14 0z',
  mail: 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22 6l-10 7L2 6',
  user: 'M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8z',
  lock: 'M19 11H5m14 0a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2m14 0V9a6 6 0 0 0-12 0v2',
  eye: 'M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z M12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z',
  calendar: 'M19 4h-1V2m0 2v2m-12-2h1V2m0 2v2m-5 4h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z',
  credit: 'M21 4H3a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zM3 10h18',
  trash: 'M3 6h18m-2 0v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m-6 5v6m4-6v6'
};

const Icon = ({ name, size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d={ICONS[name]} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const InputPlayground = () => {
  const { theme, toggleTheme, colors } = useTheme();
  
  // State for different input examples
  const [values, setValues] = useState({
    basic: '',
    withIcon: '',
    email: '',
    password: '',
    search: '',
    url: '',
    disabled: 'This is disabled',
    failed: 'invalid@email',
    required: '',
    withCaption: ''
  });

  const handleInputChange = (key) => (e) => {
    setValues(prev => ({
      ...prev,
      [key]: e.target.value
    }));
  };

  const handleSearchSubmit = () => {
    console.log('Search submitted:', values.search);
  };

  const handleUrlGo = () => {
    console.log('Navigate to:', `https://${values.url}.com`);
  };

  const sectionStyle = {
    marginBottom: spacing.spacing[48],
    padding: spacing.spacing[24],
    backgroundColor: colors.bg.card.default,
    borderRadius: '12px',
    border: `1px solid ${colors.border.default}`,
  };

  const headingStyle = {
    ...textStyles['2xl'].semibold,
    color: colors.text.default,
    marginBottom: spacing.spacing[24],
  };

  const subHeadingStyle = {
    ...textStyles.lg.medium,
    color: colors.text.default,
    marginBottom: spacing.spacing[16],
  };

  const gridStyle = {
    display: 'grid',
    gap: spacing.spacing[24],
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  };

  const demoGroupStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: spacing.spacing[12],
  };

  return (
    <div style={{ 
      padding: spacing.spacing[32], 
      minHeight: '100vh',
      backgroundColor: colors.bg.default 
    }}>
      {/* Header */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: spacing.spacing[48],
        padding: spacing.spacing[24],
        backgroundColor: colors.bg.card.default,
        borderRadius: '12px',
        border: `1px solid ${colors.border.default}`,
      }}>
        <h1 style={headingStyle}>Input Component Playground</h1>
        <button
          onClick={toggleTheme}
          style={{
            padding: `${spacing.spacing[8]} ${spacing.spacing[16]}`,
            backgroundColor: colors.bg.state.secondary,
            color: colors.text.default,
            border: `1px solid ${colors.border.default}`,
            borderRadius: '6px',
            cursor: 'pointer',
            ...textStyles.sm.medium,
          }}
        >
          Toggle to {theme === 'light' ? 'Dark' : 'Light'} Theme
        </button>
      </div>

      {/* Size Variants */}
      <div style={sectionStyle}>
        <h2 style={headingStyle}>Size Variants</h2>
        <div style={gridStyle}>
          <div style={demoGroupStyle}>
            <h3 style={subHeadingStyle}>Large (36px height)</h3>
            <Input
              size="lg"
              placeholder="Large input field"
              label="Large Size"
              value={values.basic}
              onChange={handleInputChange('basic')}
            />
          </div>
          <div style={demoGroupStyle}>
            <h3 style={subHeadingStyle}>Small (32px height)</h3>
            <Input
              size="sm"
              placeholder="Small input field"
              label="Small Size"
              value={values.basic}
              onChange={handleInputChange('basic')}
            />
          </div>
        </div>
      </div>

      {/* Style Variants */}
      <div style={sectionStyle}>
        <h2 style={headingStyle}>Style Variants</h2>
        
        <div style={demoGroupStyle}>
          <h3 style={subHeadingStyle}>Default Style</h3>
          <div style={gridStyle}>
            <Input
              placeholder="Enter your name"
              label="Full Name"
              leadIcon={<Icon name="user" />}
              value={values.withIcon}
              onChange={handleInputChange('withIcon')}
            />
            <Input
              placeholder="Enter your email"
              label="Email Address"
              leadIcon={<Icon name="mail" />}
              tailIcon={<Icon name="user" />}
              value={values.email}
              onChange={handleInputChange('email')}
            />
          </div>
        </div>

        <div style={demoGroupStyle}>
          <h3 style={subHeadingStyle}>Add-on Style</h3>
          <div style={gridStyle}>
            <Input
              style="add-on"
              addOnPrefix="https://"
              addOnSuffix=".com"
              placeholder="yoursite"
              label="Website URL"
              value={values.url}
              onChange={handleInputChange('url')}
            />
            <Input
              style="add-on"
              size="sm"
              addOnPrefix="$"
              placeholder="0.00"
              label="Price"
              leadIcon={<Icon name="credit" />}
            />
          </div>
        </div>

        <div style={demoGroupStyle}>
          <h3 style={subHeadingStyle}>Tail Action Style</h3>
          <div style={gridStyle}>
            <Input
              style="tail-action"
              placeholder="Search anything..."
              label="Search with Icon + Text"
              leadIcon={<Icon name="search" />}
              value={values.search}
              onChange={handleInputChange('search')}
              tailAction={{
                label: "Search",
                icon: <Icon name="search" />,
                onClick: handleSearchSubmit
              }}
            />
            <Input
              style="tail-action"
              size="sm"
              placeholder="Enter URL"
              label="Text Only Action"
              value={values.url}
              onChange={handleInputChange('url')}
              tailAction={{
                label: "Go",
                onClick: handleUrlGo
              }}
            />
            <Input
              style="tail-action"
              placeholder="Enter command"
              label="Icon Only Action"
              tailAction={{
                icon: <Icon name="settings" />,
                onClick: () => console.log('Settings clicked')
              }}
            />
            <Input
              style="tail-action"
              placeholder="Enter item to delete"
              label="Delete Action"
              tailAction={{
                icon: <Icon name="trash" />,
                onClick: () => console.log('Delete clicked')
              }}
            />
          </div>
        </div>
      </div>

      {/* States */}
      <div style={sectionStyle}>
        <h2 style={headingStyle}>Input States</h2>
        <div style={gridStyle}>
          <div style={demoGroupStyle}>
            <h3 style={subHeadingStyle}>Default State</h3>
            <Input
              placeholder="Type something..."
              label="Normal Input"
            />
          </div>
          
          <div style={demoGroupStyle}>
            <h3 style={subHeadingStyle}>Filled State</h3>
            <Input
              value="This field has content"
              label="Filled Input"
              onChange={handleInputChange('filled')}
            />
          </div>
          
          <div style={demoGroupStyle}>
            <h3 style={subHeadingStyle}>Failed State</h3>
            <Input
              value={values.failed}
              onChange={handleInputChange('failed')}
              failed={true}
              label="Email"
              caption="Please enter a valid email address"
              leadIcon={<Icon name="mail" />}
            />
          </div>
          
          <div style={demoGroupStyle}>
            <h3 style={subHeadingStyle}>Disabled State</h3>
            <Input
              value={values.disabled}
              disabled={true}
              label="Disabled Input"
              caption="This field is disabled"
              leadIcon={<Icon name="lock" />}
            />
          </div>
        </div>
      </div>

      {/* Form Examples */}
      <div style={sectionStyle}>
        <h2 style={headingStyle}>Form Examples</h2>
        
        <div style={demoGroupStyle}>
          <h3 style={subHeadingStyle}>User Registration Form</h3>
          <div style={{ display: 'grid', gap: spacing.spacing[16], gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
            <Input
              label="First Name"
              placeholder="Enter your first name"
              required={true}
              leadIcon={<Icon name="user" />}
              value={values.required}
              onChange={handleInputChange('required')}
            />
            <Input
              label="Last Name"
              placeholder="Enter your last name"
              required={true}
              leadIcon={<Icon name="user" />}
            />
            <Input
              label="Email Address"
              type="email"
              placeholder="you@example.com"
              required={true}
              leadIcon={<Icon name="mail" />}
              caption="We'll never share your email"
              value={values.withCaption}
              onChange={handleInputChange('withCaption')}
            />
            <Input
              label="Password"
              type="password"
              placeholder="Create a password"
              required={true}
              leadIcon={<Icon name="lock" />}
              tailIcon={<Icon name="eye" />}
              caption="Must be at least 8 characters"
            />
          </div>
        </div>

        <div style={demoGroupStyle}>
          <h3 style={subHeadingStyle}>Search & Actions</h3>
          <div style={{ display: 'grid', gap: spacing.spacing[16], gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
            <Input
              style="tail-action"
              placeholder="Search products, categories, or brands..."
              leadIcon={<Icon name="search" />}
              tailAction={{
                label: "Search",
                icon: <Icon name="search" />
              }}
            />
            <Input
              style="add-on"
              addOnPrefix="https://"
              addOnSuffix=".vercel.app"
              placeholder="my-awesome-site"
              label="Deploy URL"
              caption="Your site will be available at this URL"
            />
          </div>
        </div>

        <div style={demoGroupStyle}>
          <h3 style={subHeadingStyle}>Different Input Types</h3>
          <div style={{ display: 'grid', gap: spacing.spacing[16], gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
            <Input
              type="date"
              label="Birth Date"
              leadIcon={<Icon name="calendar" />}
            />
            <Input
              type="time"
              label="Appointment Time"
              leadIcon={<Icon name="calendar" />}
            />
            <Input
              type="number"
              placeholder="0"
              label="Age"
              leadIcon={<Icon name="user" />}
            />
            <Input
              type="tel"
              placeholder="+1 (555) 123-4567"
              label="Phone Number"
              leadIcon={<Icon name="user" />}
            />
          </div>
        </div>
      </div>

      {/* Complex Examples */}
      <div style={sectionStyle}>
        <h2 style={headingStyle}>Complex Examples</h2>
        
        <div style={{ display: 'grid', gap: spacing.spacing[24], gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))' }}>
          <div style={demoGroupStyle}>
            <h3 style={subHeadingStyle}>E-commerce Checkout</h3>
            <Input
              style="add-on"
              addOnPrefix="$"
              placeholder="0.00"
              label="Gift Card Amount"
              size="lg"
              leadIcon={<Icon name="credit" />}
            />
            <Input
              style="tail-action"
              placeholder="SAVE20"
              label="Promo Code"
              size="lg"
              tailAction={{
                label: "Apply"
              }}
            />
          </div>
          
          <div style={demoGroupStyle}>
            <h3 style={subHeadingStyle}>Developer Tools</h3>
            <Input
              style="add-on"
              addOnPrefix="git clone"
              placeholder="repository-name"
              addOnSuffix=".git"
              label="Repository URL"
              size="sm"
            />
            <Input
              style="tail-action"
              placeholder="npm start"
              label="Terminal Command"
              size="sm"
              tailAction={{
                label: "Run"
              }}
            />
          </div>
        </div>
      </div>

      {/* Interactive Demo */}
      <div style={sectionStyle}>
        <h2 style={headingStyle}>Interactive Demo</h2>
        <div style={demoGroupStyle}>
          <p style={{ ...textStyles.sm.normal, color: colors.text.muted, marginBottom: spacing.spacing[16] }}>
            Try typing in the inputs below to see different states and behaviors:
          </p>
          <div style={{ display: 'grid', gap: spacing.spacing[16], gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
            <Input
              placeholder="Start typing to see filled state..."
              label="Dynamic State Demo"
              leadIcon={<Icon name="user" />}
              caption="Watch the colors change as you type and focus"
            />
            <Input
              style="tail-action"
              placeholder="Type and click the action"
              tailAction={{
                label: "Action",
                onClick: () => alert('Action clicked!')
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputPlayground;