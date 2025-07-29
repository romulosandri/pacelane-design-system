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
        <h2 style={headingStyle}>Secondary & Dashed Styles - All States</h2>
        <p style={{
          ...textStyles.md.normal,
          color: colors.text.subtle,
          marginBottom: spacing.spacing[24]
        }}>
          Secondary buttons with borders and shadows vs. Dashed buttons with dashed borders and no shadows.
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
      </div>

      {/* Interactive Examples */}
      <div style={sectionStyle}>
        <h2 style={headingStyle}>Interactive Examples</h2>
        
        <h3 style={subHeadingStyle}>Different Sizes (Primary vs Secondary vs Dashed)</h3>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: spacing.spacing[12],
          marginBottom: spacing.spacing[12],
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
          marginBottom: spacing.spacing[12],
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
          marginBottom: spacing.spacing[24],
          flexWrap: 'wrap'
        }}>
          <Button label="2XS" size="2xs" style="dashed" onClick={() => handleButtonClick('Dashed 2XS')} />
          <Button label="XS" size="xs" style="dashed" onClick={() => handleButtonClick('Dashed XS')} />
          <Button label="SM" size="sm" style="dashed" onClick={() => handleButtonClick('Dashed SM')} />
          <Button label="MD" size="md" style="dashed" onClick={() => handleButtonClick('Dashed MD')} />
          <Button label="LG" size="lg" style="dashed" onClick={() => handleButtonClick('Dashed LG')} />
        </div>

        <h3 style={subHeadingStyle}>With Icons (Primary, Secondary & Dashed)</h3>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: spacing.spacing[12],
          marginBottom: spacing.spacing[12],
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
          marginBottom: spacing.spacing[12],
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
          marginBottom: spacing.spacing[24],
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

        <h3 style={subHeadingStyle}>States in Action (Primary, Secondary & Dashed)</h3>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: spacing.spacing[12],
          marginBottom: spacing.spacing[8],
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
          marginBottom: spacing.spacing[8],
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