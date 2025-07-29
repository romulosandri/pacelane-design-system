import React, { useState } from 'react';
import { useTheme } from './services/theme-context.jsx';
import Chips from './design-system/components/Chips.jsx';
import Button from './design-system/components/Button.jsx';

// Sample trailing icons as SVG paths
const sampleIcons = {
  close: "M18 6L6 18M6 6l12 12",
  arrow: "M9 5l7 7-7 7",
  check: "M20 6L9 17l-5-5",
  star: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
};

const ChipsPlayground = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [selectedChips, setSelectedChips] = useState({});

  const handleChipClick = (chipId) => {
    setSelectedChips(prev => ({
      ...prev,
      [chipId]: !prev[chipId]
    }));
  };

  // Create a simple icon component
  const IconComponent = ({ iconPath, size = 16 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d={iconPath} />
    </svg>
  );

  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      {/* Header */}
      <div style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1>Chips Playground</h1>
        <Button 
          label={`Switch to ${isDarkMode ? 'Light' : 'Dark'} Mode`}
          style="secondary"
          size="sm"
          onClick={toggleTheme}
        />
      </div>

      {/* Default Style Variants - LG Size */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ marginBottom: '1rem' }}>Default Style - Large Size (as specified)</h2>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
          <Chips
            label="Default State"
            trailingIcon={<IconComponent iconPath={sampleIcons.close} />}
            size="lg"
            style="default"
          />
          <Chips
            label="Selected State"
            trailingIcon={<IconComponent iconPath={sampleIcons.check} />}
            size="lg"
            style="default"
            selected={true}
          />
          <Chips
            label="Disabled State"
            trailingIcon={<IconComponent iconPath={sampleIcons.close} />}
            size="lg"
            style="default"
            disabled={true}
          />
          <Chips
            label="Interactive"
            trailingIcon={<IconComponent iconPath={sampleIcons.star} />}
            size="lg"
            style="default"
            selected={selectedChips.interactive1}
            onClick={() => handleChipClick('interactive1')}
          />
        </div>
        <p style={{ marginTop: '0.5rem', fontSize: '14px', opacity: 0.7 }}>
          Hover, focus, and click to see all interaction states
        </p>
      </section>

      {/* All Style Variants */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ marginBottom: '1rem' }}>All Style Variants - Large Size</h2>
        <div style={{ display: 'grid', gap: '1rem' }}>
          {['default', 'soft', 'ghost', 'ghostMuted'].map(style => (
            <div key={style} style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <span style={{ minWidth: '100px', fontSize: '14px', textTransform: 'capitalize' }}>{style}:</span>
              <Chips
                label="Normal"
                trailingIcon={<IconComponent iconPath={sampleIcons.close} />}
                size="lg"
                style={style}
              />
              <Chips
                label="Selected"
                trailingIcon={<IconComponent iconPath={sampleIcons.check} />}
                size="lg"
                style={style}
                selected={true}
              />
              <Chips
                label="Interactive"
                trailingIcon={<IconComponent iconPath={sampleIcons.arrow} />}
                size="lg"
                style={style}
                selected={selectedChips[`${style}_interactive`]}
                onClick={() => handleChipClick(`${style}_interactive`)}
              />
            </div>
          ))}
        </div>
      </section>

      {/* All Size Variants */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ marginBottom: '1rem' }}>All Size Variants - Default Style</h2>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
          {['lg', 'md', 'sm'].map(size => (
            <div key={size} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center' }}>
              <Chips
                label={`${size.toUpperCase()} Size`}
                trailingIcon={<IconComponent iconPath={sampleIcons.star} />}
                size={size}
                style="default"
                selected={selectedChips[`size_${size}`]}
                onClick={() => handleChipClick(`size_${size}`)}
              />
              <span style={{ fontSize: '12px', opacity: 0.7 }}>{size}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Different Icon Types */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ marginBottom: '1rem' }}>Different Trailing Icons</h2>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          {Object.entries(sampleIcons).map(([iconName, iconPath]) => (
            <Chips
              key={iconName}
              label={iconName.charAt(0).toUpperCase() + iconName.slice(1)}
              trailingIcon={<IconComponent iconPath={iconPath} />}
              size="lg"
              style="default"
              selected={selectedChips[`icon_${iconName}`]}
              onClick={() => handleChipClick(`icon_${iconName}`)}
            />
          ))}
        </div>
      </section>

      {/* Color System Verification */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ marginBottom: '1rem' }}>Color System Verification</h2>
        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <h3 style={{ fontSize: '16px', marginBottom: '0.5rem' }}>Default Style States</h3>
            <Chips label="Default" trailingIcon={<IconComponent iconPath={sampleIcons.close} />} style="default" />
            <Chips label="Selected" trailingIcon={<IconComponent iconPath={sampleIcons.check} />} style="default" selected={true} />
            <Chips label="Disabled" trailingIcon={<IconComponent iconPath={sampleIcons.close} />} style="default" disabled={true} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <h3 style={{ fontSize: '16px', marginBottom: '0.5rem' }}>Soft Style States</h3>
            <Chips label="Default" trailingIcon={<IconComponent iconPath={sampleIcons.close} />} style="soft" />
            <Chips label="Selected" trailingIcon={<IconComponent iconPath={sampleIcons.check} />} style="soft" selected={true} />
            <Chips label="Disabled" trailingIcon={<IconComponent iconPath={sampleIcons.close} />} style="soft" disabled={true} />
          </div>
        </div>
      </section>

      {/* Usage Instructions */}
      <section style={{ marginBottom: '3rem', padding: '1rem', border: '1px solid', borderRadius: '8px', opacity: 0.8 }}>
        <h3 style={{ marginBottom: '1rem' }}>Usage Instructions</h3>
        <pre style={{ fontSize: '12px', overflow: 'auto' }}>
{`import Chips from 'src/design-system/components/Chips.jsx';

// Basic usage
<Chips 
  label="Chip Text"
  trailingIcon={<IconComponent />}
  style="default"    // 'default' | 'soft' | 'ghost' | 'ghostMuted'
  size="lg"         // 'lg' | 'md' | 'sm'
  selected={false}
  onClick={handleClick}
/>

// Available variants:
- Style: default, soft, ghost, ghostMuted
- State: default, hover, press, focused, selected, disabled
- Size: lg (16px icon), md (14px icon), sm (12px icon)

// For lg size (as specified):
- gap: 4px, padding: 10px horizontal, 6px vertical
- Icon size: 16px, Text style: sm/medium
- Theme-aware colors with proper focus states`}
        </pre>
      </section>
    </div>
  );
};

export default ChipsPlayground; 