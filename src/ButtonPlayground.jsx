import React, { useState } from 'react';
import { useTheme } from './services/theme-context.jsx';
import Button from './design-system/components/Button.jsx';
import { spacing } from './design-system/tokens/spacing.js';
import { textStyles } from './design-system/styles/typography/typography-styles.js';

// Some sample icons as SVG paths
const ICONS = {
  heart: 'M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z',
  download: 'M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4m4-5l5 5 5-5m-5 5V3',
  settings: 'M12 1L9 9l-8 3 8 3 3 8 3-8 8-3-8-3-3-8z',
  user: 'M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8z',
  plus: 'M12 5v14m-7-7h14'
};

const Icon = ({ name, size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d={ICONS[name]} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ButtonPlayground = () => {
  const { theme, toggleTheme, colors } = useTheme();
  const [clickCount, setClickCount] = useState(0);

  const handleButtonClick = (buttonName) => {
    setClickCount(prev => prev + 1);
    console.log(`${buttonName} clicked! Total clicks: ${clickCount + 1}`);
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
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: spacing.spacing[16],
    marginBottom: spacing.spacing[24],
  };

  const buttonGroupStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: spacing.spacing[8],
  };

  const labelStyle = {
    ...textStyles.sm.medium,
    color: colors.text.subtle,
    textAlign: 'center',
  };

  return (
    <div style={{ 
      padding: spacing.spacing[32],
      backgroundColor: colors.bg.default,
      minHeight: '100vh',
      color: colors.text.default 
    }}>
      {/* Header */}
      <div style={{ marginBottom: spacing.spacing[32], textAlign: 'center' }}>
        <h1 style={{
          ...textStyles['4xl'].bold,
          color: colors.text.default,
          marginBottom: spacing.spacing[16],
        }}>
          Button Component Playground
        </h1>
        
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center',
          gap: spacing.spacing[16],
          marginBottom: spacing.spacing[16] 
        }}>
          <span style={textStyles.lg.medium}>Current Theme: {theme}</span>
          <Button
            label="Toggle Theme"
            onClick={toggleTheme}
            size="md"
            leadIcon={<Icon name="settings" size={16} />}
          />
        </div>
        
        <p style={{
          ...textStyles.lg.normal,
          color: colors.text.subtle,
          maxWidth: '600px',
          margin: '0 auto',
        }}>
          Interactive playground to test all button states and variants. Total clicks: {clickCount}
        </p>
      </div>

      {/* Primary Large States - All the specified variants */}
      <div style={sectionStyle}>
        <h2 style={headingStyle}>Primary Large - All States</h2>
        <p style={{
          ...textStyles.md.normal,
          color: colors.text.subtle,
          marginBottom: spacing.spacing[24]
        }}>
          These are the exact variants you specified. Hover, click, and focus to see different states.
        </p>
        
        <div style={gridStyle}>
          <div style={buttonGroupStyle}>
            <Button
              label="Default"
              onClick={() => handleButtonClick('Primary Default')}
              size="lg"
              style="primary"
            />
            <span style={labelStyle}>Default State</span>
          </div>

          <div style={buttonGroupStyle}>
            <Button
              label="With Lead Icon"
              leadIcon={<Icon name="heart" size={18} />}
              onClick={() => handleButtonClick('Primary with Icon')}
              size="lg"
              style="primary"
            />
            <span style={labelStyle}>Hover for Hover State</span>
          </div>

          <div style={buttonGroupStyle}>
            <Button
              label="With Tail Icon"
              tailIcon={<Icon name="download" size={18} />}
              onClick={() => handleButtonClick('Primary with Tail')}
              size="lg"
              style="primary"
            />
            <span style={labelStyle}>Click for Press State</span>
          </div>

          <div style={buttonGroupStyle}>
            <Button
              label="Focus Me"
              onClick={() => handleButtonClick('Primary Focus')}
              size="lg"
              style="primary"
            />
            <span style={labelStyle}>Tab to focus</span>
          </div>

          <div style={buttonGroupStyle}>
            <Button
              label="Loading..."
              loading={true}
              size="lg"
              style="primary"
            />
            <span style={labelStyle}>Loading State</span>
          </div>

          <div style={buttonGroupStyle}>
            <Button
              label="Disabled"
              disabled={true}
              size="lg"
              style="primary"
            />
            <span style={labelStyle}>Disabled State</span>
          </div>
        </div>
      </div>

      {/* Secondary Style Examples */}
      <div style={sectionStyle}>
        <h2 style={headingStyle}>All Button Styles - Complete Design System</h2>
        <p style={{
          ...textStyles.md.normal,
          color: colors.text.subtle,
          marginBottom: spacing.spacing[24]
        }}>
          Secondary (default text, muted icons, solid borders + shadows), Dashed (default text, muted icons, dashed borders, no shadows), Soft (muted text & icons, no borders, no shadows, subtle backgrounds), Ghost (default text, muted icons, no borders, no shadows, minimal backgrounds), Ghost Muted (muted text & icons, no borders, no shadows, minimal backgrounds), and Destructive (white text & icons, no borders, shadows, red backgrounds).
        </p>
        
        <div style={gridStyle}>
          <div style={buttonGroupStyle}>
            <Button
              label="Default"
              onClick={() => handleButtonClick('Secondary Default')}
              size="lg"
              style="secondary"
            />
            <span style={labelStyle}>Secondary Default</span>
          </div>

          <div style={buttonGroupStyle}>
            <Button
              label="With Lead Icon"
              leadIcon={<Icon name="user" size={18} />}
              onClick={() => handleButtonClick('Secondary with Icon')}
              size="lg"
              style="secondary"
            />
            <span style={labelStyle}>Hover for Hover State</span>
          </div>

          <div style={buttonGroupStyle}>
            <Button
              label="With Tail Icon"
              tailIcon={<Icon name="plus" size={18} />}
              onClick={() => handleButtonClick('Secondary with Tail')}
              size="lg"
              style="secondary"
            />
            <span style={labelStyle}>Click for Press State</span>
          </div>

          <div style={buttonGroupStyle}>
            <Button
              label="Focus Me"
              onClick={() => handleButtonClick('Secondary Focus')}
              size="lg"
              style="secondary"
            />
            <span style={labelStyle}>Tab to focus</span>
          </div>

          <div style={buttonGroupStyle}>
            <Button
              label="Loading..."
              loading={true}
              size="lg"
              style="secondary"
            />
            <span style={labelStyle}>Loading State</span>
          </div>

          <div style={buttonGroupStyle}>
            <Button
              label="Disabled"
              disabled={true}
              size="lg"
              style="secondary"
            />
            <span style={labelStyle}>Disabled State</span>
          </div>
        </div>

        <h3 style={subHeadingStyle}>Dashed Style (No Shadows, Dashed Borders)</h3>
        <div style={gridStyle}>
          <div style={buttonGroupStyle}>
            <Button
              label="Default"
              onClick={() => handleButtonClick('Dashed Default')}
              size="lg"
              style="dashed"
            />
            <span style={labelStyle}>Dashed Default</span>
          </div>

          <div style={buttonGroupStyle}>
            <Button
              label="With Lead Icon"
              leadIcon={<Icon name="user" size={18} />}
              onClick={() => handleButtonClick('Dashed with Icon')}
              size="lg"
              style="dashed"
            />
            <span style={labelStyle}>Hover for Hover State</span>
          </div>

          <div style={buttonGroupStyle}>
            <Button
              label="With Tail Icon"
              tailIcon={<Icon name="plus" size={18} />}
              onClick={() => handleButtonClick('Dashed with Tail')}
              size="lg"
              style="dashed"
            />
            <span style={labelStyle}>Click for Press State</span>
          </div>

          <div style={buttonGroupStyle}>
            <Button
              label="Focus Me"
              onClick={() => handleButtonClick('Dashed Focus')}
              size="lg"
              style="dashed"
            />
            <span style={labelStyle}>Tab to focus</span>
          </div>

          <div style={buttonGroupStyle}>
            <Button
              label="Loading..."
              loading={true}
              size="lg"
              style="dashed"
            />
            <span style={labelStyle}>Loading State</span>
          </div>

          <div style={buttonGroupStyle}>
            <Button
              label="Disabled"
              disabled={true}
              size="lg"
              style="dashed"
            />
            <span style={labelStyle}>Disabled State</span>
          </div>
        </div>

        <h3 style={subHeadingStyle}>Soft Style (No Borders, Subtle Backgrounds)</h3>
        <div style={gridStyle}>
          <div style={buttonGroupStyle}>
            <Button
              label="Default"
              onClick={() => handleButtonClick('Soft Default')}
              size="lg"
              style="soft"
            />
            <span style={labelStyle}>Soft Default</span>
          </div>

          <div style={buttonGroupStyle}>
            <Button
              label="With Lead Icon"
              leadIcon={<Icon name="user" size={18} />}
              onClick={() => handleButtonClick('Soft with Icon')}
              size="lg"
              style="soft"
            />
            <span style={labelStyle}>Hover for Hover State</span>
          </div>

          <div style={buttonGroupStyle}>
            <Button
              label="With Tail Icon"
              tailIcon={<Icon name="plus" size={18} />}
              onClick={() => handleButtonClick('Soft with Tail')}
              size="lg"
              style="soft"
            />
            <span style={labelStyle}>Click for Press State</span>
          </div>

          <div style={buttonGroupStyle}>
            <Button
              label="Focus Me"
              onClick={() => handleButtonClick('Soft Focus')}
              size="lg"
              style="soft"
            />
            <span style={labelStyle}>Tab to focus</span>
          </div>

          <div style={buttonGroupStyle}>
            <Button
              label="Loading..."
              loading={true}
              size="lg"
              style="soft"
            />
            <span style={labelStyle}>Loading State</span>
          </div>

          <div style={buttonGroupStyle}>
            <Button
              label="Disabled"
              disabled={true}
              size="lg"
              style="soft"
            />
            <span style={labelStyle}>Disabled State</span>
          </div>
        </div>

        <h3 style={subHeadingStyle}>Ghost Style (No Borders, No Shadows, Minimal Backgrounds)</h3>
        <div style={gridStyle}>
          <div style={buttonGroupStyle}>
            <Button
              label="Default"
              onClick={() => handleButtonClick('Ghost Default')}
              size="lg"
              style="ghost"
            />
            <span style={labelStyle}>Ghost Default</span>
          </div>

          <div style={buttonGroupStyle}>
            <Button
              label="With Lead Icon"
              leadIcon={<Icon name="user" size={18} />}
              onClick={() => handleButtonClick('Ghost with Icon')}
              size="lg"
              style="ghost"
            />
            <span style={labelStyle}>Hover for Hover State</span>
          </div>

          <div style={buttonGroupStyle}>
            <Button
              label="With Tail Icon"
              tailIcon={<Icon name="plus" size={18} />}
              onClick={() => handleButtonClick('Ghost with Tail')}
              size="lg"
              style="ghost"
            />
            <span style={labelStyle}>Click for Press State</span>
          </div>

          <div style={buttonGroupStyle}>
            <Button
              label="Focus Me"
              onClick={() => handleButtonClick('Ghost Focus')}
              size="lg"
              style="ghost"
            />
            <span style={labelStyle}>Tab to focus</span>
          </div>

          <div style={buttonGroupStyle}>
            <Button
              label="Loading..."
              loading={true}
              size="lg"
              style="ghost"
            />
            <span style={labelStyle}>Loading State</span>
          </div>

          <div style={buttonGroupStyle}>
            <Button
              label="Disabled"
              disabled={true}
              size="lg"
              style="ghost"
            />
            <span style={labelStyle}>Disabled State</span>
          </div>
        </div>

        <h3 style={subHeadingStyle}>Ghost Muted Style (Same as Ghost but Muted Text)</h3>
        <div style={gridStyle}>
          <div style={buttonGroupStyle}>
            <Button
              label="Default"
              onClick={() => handleButtonClick('Ghost Muted Default')}
              size="lg"
              style="ghostMuted"
            />
            <span style={labelStyle}>Ghost Muted Default</span>
          </div>

          <div style={buttonGroupStyle}>
            <Button
              label="With Lead Icon"
              leadIcon={<Icon name="user" size={18} />}
              onClick={() => handleButtonClick('Ghost Muted with Icon')}
              size="lg"
              style="ghostMuted"
            />
            <span style={labelStyle}>Hover for Hover State</span>
          </div>

          <div style={buttonGroupStyle}>
            <Button
              label="With Tail Icon"
              tailIcon={<Icon name="plus" size={18} />}
              onClick={() => handleButtonClick('Ghost Muted with Tail')}
              size="lg"
              style="ghostMuted"
            />
            <span style={labelStyle}>Click for Press State</span>
          </div>

          <div style={buttonGroupStyle}>
            <Button
              label="Focus Me"
              onClick={() => handleButtonClick('Ghost Muted Focus')}
              size="lg"
              style="ghostMuted"
            />
            <span style={labelStyle}>Tab to focus</span>
          </div>

          <div style={buttonGroupStyle}>
            <Button
              label="Loading..."
              loading={true}
              size="lg"
              style="ghostMuted"
            />
            <span style={labelStyle}>Loading State</span>
          </div>

          <div style={buttonGroupStyle}>
            <Button
              label="Disabled"
              disabled={true}
              size="lg"
              style="ghostMuted"
            />
            <span style={labelStyle}>Disabled State</span>
          </div>
        </div>

        <h3 style={subHeadingStyle}>Destructive Style (White Text & Icons, Red Backgrounds)</h3>
        <div style={gridStyle}>
          <div style={buttonGroupStyle}>
            <Button
              label="Delete"
              onClick={() => handleButtonClick('Destructive Default')}
              size="lg"
              style="destructive"
            />
            <span style={labelStyle}>Destructive Default</span>
          </div>

          <div style={buttonGroupStyle}>
            <Button
              label="Remove"
              leadIcon={<Icon name="user" size={18} />}
              onClick={() => handleButtonClick('Destructive with Icon')}
              size="lg"
              style="destructive"
            />
            <span style={labelStyle}>Hover for Hover State</span>
          </div>

          <div style={buttonGroupStyle}>
            <Button
              label="Clear All"
              tailIcon={<Icon name="plus" size={18} />}
              onClick={() => handleButtonClick('Destructive with Tail')}
              size="lg"
              style="destructive"
            />
            <span style={labelStyle}>Click for Press State</span>
          </div>

          <div style={buttonGroupStyle}>
            <Button
              label="Focus Me"
              onClick={() => handleButtonClick('Destructive Focus')}
              size="lg"
              style="destructive"
            />
            <span style={labelStyle}>Tab to focus</span>
          </div>

          <div style={buttonGroupStyle}>
            <Button
              label="Loading..."
              loading={true}
              size="lg"
              style="destructive"
            />
            <span style={labelStyle}>Loading State</span>
          </div>

          <div style={buttonGroupStyle}>
            <Button
              label="Disabled"
              disabled={true}
              size="lg"
              style="destructive"
            />
            <span style={labelStyle}>Disabled State</span>
          </div>
        </div>
      </div>

      {/* Interactive Examples */}
      <div style={sectionStyle}>
        <h2 style={headingStyle}>Interactive Examples</h2>
        
        <h3 style={subHeadingStyle}>Different Sizes (All Styles)</h3>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: spacing.spacing[12],
          marginBottom: spacing.spacing[8],
          flexWrap: 'wrap'
        }}>
          <Button label="2XS" size="2xs" onClick={() => handleButtonClick('Primary 2XS')} />
          <Button label="XS" size="xs" onClick={() => handleButtonClick('Primary XS')} />
          <Button label="SM" size="sm" onClick={() => handleButtonClick('Primary SM')} />
          <Button label="MD" size="md" onClick={() => handleButtonClick('Primary MD')} />
          <Button label="LG" size="lg" onClick={() => handleButtonClick('Primary LG')} />
        </div>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: spacing.spacing[12],
          marginBottom: spacing.spacing[8],
          flexWrap: 'wrap'
        }}>
          <Button label="2XS" size="2xs" style="secondary" onClick={() => handleButtonClick('Secondary 2XS')} />
          <Button label="XS" size="xs" style="secondary" onClick={() => handleButtonClick('Secondary XS')} />
          <Button label="SM" size="sm" style="secondary" onClick={() => handleButtonClick('Secondary SM')} />
          <Button label="MD" size="md" style="secondary" onClick={() => handleButtonClick('Secondary MD')} />
          <Button label="LG" size="lg" style="secondary" onClick={() => handleButtonClick('Secondary LG')} />
        </div>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: spacing.spacing[12],
          marginBottom: spacing.spacing[8],
          flexWrap: 'wrap'
        }}>
          <Button label="2XS" size="2xs" style="dashed" onClick={() => handleButtonClick('Dashed 2XS')} />
          <Button label="XS" size="xs" style="dashed" onClick={() => handleButtonClick('Dashed XS')} />
          <Button label="SM" size="sm" style="dashed" onClick={() => handleButtonClick('Dashed SM')} />
          <Button label="MD" size="md" style="dashed" onClick={() => handleButtonClick('Dashed MD')} />
          <Button label="LG" size="lg" style="dashed" onClick={() => handleButtonClick('Dashed LG')} />
        </div>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: spacing.spacing[12],
          marginBottom: spacing.spacing[8],
          flexWrap: 'wrap'
        }}>
          <Button label="2XS" size="2xs" style="soft" onClick={() => handleButtonClick('Soft 2XS')} />
          <Button label="XS" size="xs" style="soft" onClick={() => handleButtonClick('Soft XS')} />
          <Button label="SM" size="sm" style="soft" onClick={() => handleButtonClick('Soft SM')} />
          <Button label="MD" size="md" style="soft" onClick={() => handleButtonClick('Soft MD')} />
          <Button label="LG" size="lg" style="soft" onClick={() => handleButtonClick('Soft LG')} />
        </div>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: spacing.spacing[12],
          marginBottom: spacing.spacing[8],
          flexWrap: 'wrap'
        }}>
          <Button label="2XS" size="2xs" style="ghost" onClick={() => handleButtonClick('Ghost 2XS')} />
          <Button label="XS" size="xs" style="ghost" onClick={() => handleButtonClick('Ghost XS')} />
          <Button label="SM" size="sm" style="ghost" onClick={() => handleButtonClick('Ghost SM')} />
          <Button label="MD" size="md" style="ghost" onClick={() => handleButtonClick('Ghost MD')} />
          <Button label="LG" size="lg" style="ghost" onClick={() => handleButtonClick('Ghost LG')} />
        </div>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: spacing.spacing[12],
          marginBottom: spacing.spacing[8],
          flexWrap: 'wrap'
        }}>
          <Button label="2XS" size="2xs" style="ghostMuted" onClick={() => handleButtonClick('Ghost Muted 2XS')} />
          <Button label="XS" size="xs" style="ghostMuted" onClick={() => handleButtonClick('Ghost Muted XS')} />
          <Button label="SM" size="sm" style="ghostMuted" onClick={() => handleButtonClick('Ghost Muted SM')} />
          <Button label="MD" size="md" style="ghostMuted" onClick={() => handleButtonClick('Ghost Muted MD')} />
          <Button label="LG" size="lg" style="ghostMuted" onClick={() => handleButtonClick('Ghost Muted LG')} />
        </div>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: spacing.spacing[12],
          marginBottom: spacing.spacing[24],
          flexWrap: 'wrap'
        }}>
          <Button label="2XS" size="2xs" style="destructive" onClick={() => handleButtonClick('Destructive 2XS')} />
          <Button label="XS" size="xs" style="destructive" onClick={() => handleButtonClick('Destructive XS')} />
          <Button label="SM" size="sm" style="destructive" onClick={() => handleButtonClick('Destructive SM')} />
          <Button label="MD" size="md" style="destructive" onClick={() => handleButtonClick('Destructive MD')} />
          <Button label="LG" size="lg" style="destructive" onClick={() => handleButtonClick('Destructive LG')} />
        </div>

        <h3 style={subHeadingStyle}>With Icons (All Styles)</h3>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: spacing.spacing[12],
          marginBottom: spacing.spacing[8],
          flexWrap: 'wrap'
        }}>
          <Button 
            label="Save" 
            leadIcon={<Icon name="heart" />}
            onClick={() => handleButtonClick('Save Primary')} 
          />
          <Button 
            label="Download" 
            tailIcon={<Icon name="download" />}
            onClick={() => handleButtonClick('Download Primary')} 
          />
          <Button 
            label="Settings" 
            leadIcon={<Icon name="settings" />}
            tailIcon={<Icon name="user" />}
            onClick={() => handleButtonClick('Settings Primary')} 
          />
        </div>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: spacing.spacing[12],
          marginBottom: spacing.spacing[8],
          flexWrap: 'wrap'
        }}>
          <Button 
            label="Save" 
            leadIcon={<Icon name="heart" />}
            style="secondary"
            onClick={() => handleButtonClick('Save Secondary')} 
          />
          <Button 
            label="Download" 
            tailIcon={<Icon name="download" />}
            style="secondary"
            onClick={() => handleButtonClick('Download Secondary')} 
          />
          <Button 
            label="Settings" 
            leadIcon={<Icon name="settings" />}
            tailIcon={<Icon name="user" />}
            style="secondary"
            onClick={() => handleButtonClick('Settings Secondary')} 
          />
        </div>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: spacing.spacing[12],
          marginBottom: spacing.spacing[8],
          flexWrap: 'wrap'
        }}>
          <Button 
            label="Save" 
            leadIcon={<Icon name="heart" />}
            style="dashed"
            onClick={() => handleButtonClick('Save Dashed')} 
          />
          <Button 
            label="Download" 
            tailIcon={<Icon name="download" />}
            style="dashed"
            onClick={() => handleButtonClick('Download Dashed')} 
          />
          <Button 
            label="Settings" 
            leadIcon={<Icon name="settings" />}
            tailIcon={<Icon name="user" />}
            style="dashed"
            onClick={() => handleButtonClick('Settings Dashed')} 
          />
        </div>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: spacing.spacing[12],
          marginBottom: spacing.spacing[8],
          flexWrap: 'wrap'
        }}>
          <Button 
            label="Save" 
            leadIcon={<Icon name="heart" />}
            style="soft"
            onClick={() => handleButtonClick('Save Soft')} 
          />
          <Button 
            label="Download" 
            tailIcon={<Icon name="download" />}
            style="soft"
            onClick={() => handleButtonClick('Download Soft')} 
          />
          <Button 
            label="Settings" 
            leadIcon={<Icon name="settings" />}
            tailIcon={<Icon name="user" />}
            style="soft"
            onClick={() => handleButtonClick('Settings Soft')} 
          />
        </div>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: spacing.spacing[12],
          marginBottom: spacing.spacing[8],
          flexWrap: 'wrap'
        }}>
          <Button 
            label="Save" 
            leadIcon={<Icon name="heart" />}
            style="ghost"
            onClick={() => handleButtonClick('Save Ghost')} 
          />
          <Button 
            label="Download" 
            tailIcon={<Icon name="download" />}
            style="ghost"
            onClick={() => handleButtonClick('Download Ghost')} 
          />
          <Button 
            label="Settings" 
            leadIcon={<Icon name="settings" />}
            tailIcon={<Icon name="user" />}
            style="ghost"
            onClick={() => handleButtonClick('Settings Ghost')} 
          />
        </div>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: spacing.spacing[12],
          marginBottom: spacing.spacing[8],
          flexWrap: 'wrap'
        }}>
          <Button 
            label="Save" 
            leadIcon={<Icon name="heart" />}
            style="ghostMuted"
            onClick={() => handleButtonClick('Save Ghost Muted')} 
          />
          <Button 
            label="Download" 
            tailIcon={<Icon name="download" />}
            style="ghostMuted"
            onClick={() => handleButtonClick('Download Ghost Muted')} 
          />
          <Button 
            label="Settings" 
            leadIcon={<Icon name="settings" />}
            tailIcon={<Icon name="user" />}
            style="ghostMuted"
            onClick={() => handleButtonClick('Settings Ghost Muted')} 
          />
        </div>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: spacing.spacing[12],
          marginBottom: spacing.spacing[24],
          flexWrap: 'wrap'
        }}>
          <Button 
            label="Delete" 
            leadIcon={<Icon name="heart" />}
            style="destructive"
            onClick={() => handleButtonClick('Delete Destructive')} 
          />
          <Button 
            label="Remove" 
            tailIcon={<Icon name="download" />}
            style="destructive"
            onClick={() => handleButtonClick('Remove Destructive')} 
          />
          <Button 
            label="Clear All" 
            leadIcon={<Icon name="settings" />}
            tailIcon={<Icon name="user" />}
            style="destructive"
            onClick={() => handleButtonClick('Clear All Destructive')} 
          />
        </div>

        <h3 style={subHeadingStyle}>Icon Only Buttons</h3>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: spacing.spacing[12],
          marginBottom: spacing.spacing[24],
          flexWrap: 'wrap'
        }}>
          <Button 
            variant="iconOnly"
            leadIcon={<Icon name="heart" />}
            size="lg"
            onClick={() => handleButtonClick('Heart Icon')} 
          />
          <Button 
            variant="iconOnly"
            leadIcon={<Icon name="download" />}
            size="md"
            onClick={() => handleButtonClick('Download Icon')} 
          />
          <Button 
            variant="iconOnly"
            leadIcon={<Icon name="settings" />}
            size="sm"
            onClick={() => handleButtonClick('Settings Icon')} 
          />
          <Button 
            variant="iconOnly"
            leadIcon={<Icon name="plus" />}
            size="xs"
            onClick={() => handleButtonClick('Plus Icon')} 
          />
        </div>

        <h3 style={subHeadingStyle}>States in Action (All Styles)</h3>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: spacing.spacing[12],
          marginBottom: spacing.spacing[6],
          flexWrap: 'wrap'
        }}>
          <Button 
            label="Click Me!"
            onClick={() => handleButtonClick('Interactive Primary')}
            leadIcon={<Icon name="user" />}
          />
          <Button 
            label="Loading Example"
            loading={clickCount % 3 === 0 && clickCount > 0}
            onClick={() => handleButtonClick('Loading Toggle Primary')}
          />
          <Button 
            label="Disabled Example"
            disabled={clickCount % 5 === 0 && clickCount > 0}
            onClick={() => handleButtonClick('Disabled Toggle Primary')}
          />
        </div>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: spacing.spacing[12],
          marginBottom: spacing.spacing[6],
          flexWrap: 'wrap'
        }}>
          <Button 
            label="Click Me!"
            style="secondary"
            onClick={() => handleButtonClick('Interactive Secondary')}
            leadIcon={<Icon name="user" />}
          />
          <Button 
            label="Loading Example"
            style="secondary"
            loading={clickCount % 4 === 0 && clickCount > 0}
            onClick={() => handleButtonClick('Loading Toggle Secondary')}
          />
          <Button 
            label="Disabled Example"
            style="secondary"
            disabled={clickCount % 6 === 0 && clickCount > 0}
            onClick={() => handleButtonClick('Disabled Toggle Secondary')}
          />
        </div>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: spacing.spacing[12],
          marginBottom: spacing.spacing[6],
          flexWrap: 'wrap'
        }}>
          <Button 
            label="Click Me!"
            style="dashed"
            onClick={() => handleButtonClick('Interactive Dashed')}
            leadIcon={<Icon name="user" />}
          />
          <Button 
            label="Loading Example"
            style="dashed"
            loading={clickCount % 7 === 0 && clickCount > 0}
            onClick={() => handleButtonClick('Loading Toggle Dashed')}
          />
          <Button 
            label="Disabled Example"
            style="dashed"
            disabled={clickCount % 8 === 0 && clickCount > 0}
            onClick={() => handleButtonClick('Disabled Toggle Dashed')}
          />
        </div>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: spacing.spacing[12],
          marginBottom: spacing.spacing[6],
          flexWrap: 'wrap'
        }}>
          <Button 
            label="Click Me!"
            style="soft"
            onClick={() => handleButtonClick('Interactive Soft')}
            leadIcon={<Icon name="user" />}
          />
          <Button 
            label="Loading Example"
            style="soft"
            loading={clickCount % 9 === 0 && clickCount > 0}
            onClick={() => handleButtonClick('Loading Toggle Soft')}
          />
          <Button 
            label="Disabled Example"
            style="soft"
            disabled={clickCount % 10 === 0 && clickCount > 0}
            onClick={() => handleButtonClick('Disabled Toggle Soft')}
          />
        </div>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: spacing.spacing[12],
          marginBottom: spacing.spacing[6],
          flexWrap: 'wrap'
        }}>
          <Button 
            label="Click Me!"
            style="ghost"
            onClick={() => handleButtonClick('Interactive Ghost')}
            leadIcon={<Icon name="user" />}
          />
          <Button 
            label="Loading Example"
            style="ghost"
            loading={clickCount % 11 === 0 && clickCount > 0}
            onClick={() => handleButtonClick('Loading Toggle Ghost')}
          />
          <Button 
            label="Disabled Example"
            style="ghost"
            disabled={clickCount % 12 === 0 && clickCount > 0}
            onClick={() => handleButtonClick('Disabled Toggle Ghost')}
          />
        </div>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: spacing.spacing[12],
          marginBottom: spacing.spacing[6],
          flexWrap: 'wrap'
        }}>
          <Button 
            label="Click Me!"
            style="ghostMuted"
            onClick={() => handleButtonClick('Interactive Ghost Muted')}
            leadIcon={<Icon name="user" />}
          />
          <Button 
            label="Loading Example"
            style="ghostMuted"
            loading={clickCount % 13 === 0 && clickCount > 0}
            onClick={() => handleButtonClick('Loading Toggle Ghost Muted')}
          />
          <Button 
            label="Disabled Example"
            style="ghostMuted"
            disabled={clickCount % 14 === 0 && clickCount > 0}
            onClick={() => handleButtonClick('Disabled Toggle Ghost Muted')}
          />
        </div>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: spacing.spacing[12],
          flexWrap: 'wrap'
        }}>
          <Button 
            label="Delete!"
            style="destructive"
            onClick={() => handleButtonClick('Interactive Destructive')}
            leadIcon={<Icon name="user" />}
          />
          <Button 
            label="Loading Example"
            style="destructive"
            loading={clickCount % 15 === 0 && clickCount > 0}
            onClick={() => handleButtonClick('Loading Toggle Destructive')}
          />
          <Button 
            label="Disabled Example"
            style="destructive"
            disabled={clickCount % 16 === 0 && clickCount > 0}
            onClick={() => handleButtonClick('Disabled Toggle Destructive')}
          />
        </div>
      </div>

      {/* Theme Testing */}
      <div style={sectionStyle}>
        <h2 style={headingStyle}>Theme Testing</h2>
        <p style={{
          ...textStyles.md.normal,
          color: colors.text.subtle,
          marginBottom: spacing.spacing[24]
        }}>
          These buttons show how the design system handles theme switching.
          All colors and shadows automatically adapt to light/dark themes.
        </p>
        
        <h3 style={subHeadingStyle}>Primary Style Theme Adaptation</h3>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: spacing.spacing[16],
          marginBottom: spacing.spacing[24],
        }}>
          <Button 
            label={`${theme} Theme`}
            onClick={toggleTheme}
            leadIcon={<Icon name="settings" />}
          />
          <Button 
            label="Test Hover"
            onClick={() => handleButtonClick('Theme Test Primary')}
            tailIcon={<Icon name="heart" />}
          />
          <Button 
            label="Test Focus"
            onClick={() => handleButtonClick('Focus Test Primary')}
          />
          <Button 
            loading={true}
            label="Loading..."
          />
        </div>

        <h3 style={subHeadingStyle}>Secondary Style Theme Adaptation</h3>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: spacing.spacing[16],
          marginBottom: spacing.spacing[24],
        }}>
          <Button 
            label={`${theme} Theme`}
            style="secondary"
            onClick={toggleTheme}
            leadIcon={<Icon name="settings" />}
          />
          <Button 
            label="Test Hover"
            style="secondary"
            onClick={() => handleButtonClick('Theme Test Secondary')}
            tailIcon={<Icon name="heart" />}
          />
          <Button 
            label="Test Focus"
            style="secondary"
            onClick={() => handleButtonClick('Focus Test Secondary')}
          />
          <Button 
            loading={true}
            style="secondary"
            label="Loading..."
          />
        </div>

        <h3 style={subHeadingStyle}>Dashed Style Theme Adaptation</h3>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: spacing.spacing[16],
          marginBottom: spacing.spacing[24],
        }}>
          <Button 
            label={`${theme} Theme`}
            style="dashed"
            onClick={toggleTheme}
            leadIcon={<Icon name="settings" />}
          />
          <Button 
            label="Test Hover"
            style="dashed"
            onClick={() => handleButtonClick('Theme Test Dashed')}
            tailIcon={<Icon name="heart" />}
          />
          <Button 
            label="Test Focus"
            style="dashed"
            onClick={() => handleButtonClick('Focus Test Dashed')}
          />
          <Button 
            loading={true}
            style="dashed"
            label="Loading..."
          />
        </div>

        <h3 style={subHeadingStyle}>Soft Style Theme Adaptation</h3>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: spacing.spacing[16],
          marginBottom: spacing.spacing[24],
        }}>
          <Button 
            label={`${theme} Theme`}
            style="soft"
            onClick={toggleTheme}
            leadIcon={<Icon name="settings" />}
          />
          <Button 
            label="Test Hover"
            style="soft"
            onClick={() => handleButtonClick('Theme Test Soft')}
            tailIcon={<Icon name="heart" />}
          />
          <Button 
            label="Test Focus"
            style="soft"
            onClick={() => handleButtonClick('Focus Test Soft')}
          />
          <Button 
            loading={true}
            style="soft"
            label="Loading..."
          />
        </div>

        <h3 style={subHeadingStyle}>Ghost Style Theme Adaptation</h3>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: spacing.spacing[16],
          marginBottom: spacing.spacing[24],
        }}>
          <Button 
            label={`${theme} Theme`}
            style="ghost"
            onClick={toggleTheme}
            leadIcon={<Icon name="settings" />}
          />
          <Button 
            label="Test Hover"
            style="ghost"
            onClick={() => handleButtonClick('Theme Test Ghost')}
            tailIcon={<Icon name="heart" />}
          />
          <Button 
            label="Test Focus"
            style="ghost"
            onClick={() => handleButtonClick('Focus Test Ghost')}
          />
          <Button 
            loading={true}
            style="ghost"
            label="Loading..."
          />
        </div>

        <h3 style={subHeadingStyle}>Ghost Muted Style Theme Adaptation</h3>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: spacing.spacing[16],
          marginBottom: spacing.spacing[24],
        }}>
          <Button 
            label={`${theme} Theme`}
            style="ghostMuted"
            onClick={toggleTheme}
            leadIcon={<Icon name="settings" />}
          />
          <Button 
            label="Test Hover"
            style="ghostMuted"
            onClick={() => handleButtonClick('Theme Test Ghost Muted')}
            tailIcon={<Icon name="heart" />}
          />
          <Button 
            label="Test Focus"
            style="ghostMuted"
            onClick={() => handleButtonClick('Focus Test Ghost Muted')}
          />
          <Button 
            loading={true}
            style="ghostMuted"
            label="Loading..."
          />
        </div>

        <h3 style={subHeadingStyle}>Destructive Style Theme Adaptation</h3>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: spacing.spacing[16],
        }}>
          <Button 
            label={`${theme} Theme`}
            style="destructive"
            onClick={toggleTheme}
            leadIcon={<Icon name="settings" />}
          />
          <Button 
            label="Test Hover"
            style="destructive"
            onClick={() => handleButtonClick('Theme Test Destructive')}
            tailIcon={<Icon name="heart" />}
          />
          <Button 
            label="Test Focus"
            style="destructive"
            onClick={() => handleButtonClick('Focus Test Destructive')}
          />
          <Button 
            loading={true}
            style="destructive"
            label="Loading..."
          />
        </div>
      </div>

      {/* Footer */}
      <div style={{ textAlign: 'center', marginTop: spacing.spacing[48] }}>
        <p style={{
          ...textStyles.sm.normal,
          color: colors.text.muted
        }}>
          Built with Pacelane Design System • Button Component Playground
        </p>
      </div>
    </div>
  );
};

export default ButtonPlayground; 