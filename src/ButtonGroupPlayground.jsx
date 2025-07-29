import React, { useState } from 'react';
import { useTheme } from './services/theme-context.jsx';
import { spacing } from './design-system/tokens/spacing.js';
import { cornerRadius } from './design-system/tokens/corner-radius.js';
import { textStyles } from './design-system/styles/typography/typography-styles.js';
import ButtonGroup from './design-system/components/ButtonGroup.jsx';

// Sample icons for demonstration
const PlayIcon = () => (
  <svg viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
  </svg>
);

const PauseIcon = () => (
  <svg viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
  </svg>
);

const StopIcon = () => (
  <svg viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1H8z" clipRule="evenodd" />
  </svg>
);

const CopyIcon = () => (
  <svg viewBox="0 0 20 20" fill="currentColor">
    <path d="M8 2a1 1 0 000 2h2a1 1 0 100-2H8z" />
    <path d="M3 5a2 2 0 012-2 3 3 0 003 3h6a3 3 0 003-3 2 2 0 012 2v6h-4.586l1.293-1.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L13.586 13H18v3a2 2 0 01-2 2H5a2 2 0 01-2-2V5zM15 11h2v2h-2v-2z" />
  </svg>
);

const EditIcon = () => (
  <svg viewBox="0 0 20 20" fill="currentColor">
    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
  </svg>
);

const DeleteIcon = () => (
  <svg viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
  </svg>
);

const BoldIcon = () => (
  <svg viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M5 4a1 1 0 011-1h5.5a2.5 2.5 0 010 5H6v2h4.5a2.5 2.5 0 010 5H6a1 1 0 01-1-1V4zm2 1v3h4.5a.5.5 0 000-1H7zm0 5v3h4.5a.5.5 0 000-1H7z" clipRule="evenodd" />
  </svg>
);

const ItalicIcon = () => (
  <svg viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M8 2a1 1 0 00-1 1v.5a.5.5 0 001 0V4h1.5l-2 12H6a.5.5 0 000 1h1a1 1 0 001-1v-.5a.5.5 0 00-1 0V15h1.5l2-12H12a.5.5 0 000-1H8z" clipRule="evenodd" />
  </svg>
);

const UnderlineIcon = () => (
  <svg viewBox="0 0 20 20" fill="currentColor">
    <path d="M6 3a1 1 0 011-1h2a1 1 0 110 2H8v5a2 2 0 104 0V4h-1a1 1 0 110-2h2a1 1 0 110 2h-1v5a4 4 0 11-8 0V4H6a1 1 0 01-1-1z" />
    <path d="M4 17a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1z" />
  </svg>
);

const LeftAlignIcon = () => (
  <svg viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h8a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h8a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
  </svg>
);

const CenterAlignIcon = () => (
  <svg viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M2 4a1 1 0 011-1h14a1 1 0 110 2H3a1 1 0 01-1-1zm2 4a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zm-2 4a1 1 0 011-1h14a1 1 0 110 2H3a1 1 0 01-1-1zm2 4a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1z" clipRule="evenodd" />
  </svg>
);

const RightAlignIcon = () => (
  <svg viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm4 4a1 1 0 011-1h8a1 1 0 110 2H8a1 1 0 01-1-1zm-4 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm4 4a1 1 0 011-1h8a1 1 0 110 2H8a1 1 0 01-1-1z" clipRule="evenodd" />
  </svg>
);

const ButtonGroupPlayground = () => {
  const { colors } = useTheme();
  const [selectedAction, setSelectedAction] = useState('play');
  const [selectedAlignment, setSelectedAlignment] = useState('left');

  // Page styles
  const pageStyles = {
    backgroundColor: colors.bg.default,
    color: colors.text.default,
    minHeight: '100vh',
    padding: spacing.spacing[24],
    ...textStyles.md.normal,
  };

  const sectionStyles = {
    marginBottom: spacing.spacing[48],
  };

  const titleStyles = {
    ...textStyles['2xl'].semibold,
    color: colors.text.default,
    marginBottom: spacing.spacing[16],
  };

  const subtitleStyles = {
    ...textStyles.lg.medium,
    color: colors.text.default,
    marginBottom: spacing.spacing[12],
  };

  const descriptionStyles = {
    ...textStyles.md.normal,
    color: colors.text.subtle,
    marginBottom: spacing.spacing[24],
  };

  const codeBlockStyles = {
    backgroundColor: colors.bg.card.subtle,
    color: colors.text.default,
    padding: spacing.spacing[16],
    borderRadius: cornerRadius.borderRadius.md,
    border: `1px solid ${colors.border.default}`,
    fontFamily: 'JetBrains Mono, monospace',
    fontSize: '14px',
    marginTop: spacing.spacing[12],
    overflow: 'auto',
  };

  const exampleContainerStyles = {
    backgroundColor: colors.bg.card.default,
    padding: spacing.spacing[24],
    borderRadius: cornerRadius.borderRadius.lg,
    border: `1px solid ${colors.border.default}`,
    marginBottom: spacing.spacing[16],
  };

  const gridStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: spacing.spacing[16],
    marginBottom: spacing.spacing[24],
  };

  const itemGridStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: spacing.spacing[12],
  };

  // Button group configurations
  const mediaControls = [
    { id: 'play', label: 'Play', leadIcon: <PlayIcon />, onClick: (item) => setSelectedAction(item.id) },
    { id: 'pause', label: 'Pause', leadIcon: <PauseIcon />, onClick: (item) => setSelectedAction(item.id) },
    { id: 'stop', label: 'Stop', leadIcon: <StopIcon />, onClick: (item) => setSelectedAction(item.id) },
  ];

  const editActions = [
    { id: 'copy', label: 'Copy', leadIcon: <CopyIcon />, onClick: () => console.log('Copy clicked') },
    { id: 'edit', label: 'Edit', leadIcon: <EditIcon />, onClick: () => console.log('Edit clicked') },
    { id: 'delete', label: 'Delete', leadIcon: <DeleteIcon />, disabled: true, onClick: () => console.log('Delete clicked') },
  ];

  const textFormatting = [
    { id: 'bold', label: 'Bold', leadIcon: <BoldIcon />, onClick: () => console.log('Bold clicked') },
    { id: 'italic', label: 'Italic', leadIcon: <ItalicIcon />, onClick: () => console.log('Italic clicked') },
    { id: 'underline', label: 'Underline', leadIcon: <UnderlineIcon />, onClick: () => console.log('Underline clicked') },
  ];

  const alignmentControls = [
    { id: 'left', leadIcon: <LeftAlignIcon />, onClick: (item) => setSelectedAlignment(item.id) },
    { id: 'center', leadIcon: <CenterAlignIcon />, onClick: (item) => setSelectedAlignment(item.id) },
    { id: 'right', leadIcon: <RightAlignIcon />, onClick: (item) => setSelectedAlignment(item.id) },
  ];

  const iconOnlyActions = [
    { id: 'copy', leadIcon: <CopyIcon />, onClick: () => console.log('Copy clicked') },
    { id: 'edit', leadIcon: <EditIcon />, onClick: () => console.log('Edit clicked') },
    { id: 'delete', leadIcon: <DeleteIcon />, disabled: true, onClick: () => console.log('Delete clicked') },
  ];

  return (
    <div style={pageStyles}>
      <div style={titleStyles}>ButtonGroup Component Playground</div>
      <div style={descriptionStyles}>
        Comprehensive demonstrations of the ButtonGroup component with all variants, sizes, and interactive states.
      </div>

      {/* Basic Examples */}
      <div style={sectionStyles}>
        <div style={subtitleStyles}>Basic Examples</div>
        <div style={descriptionStyles}>
          Basic ButtonGroup usage with different content types and interactions.
        </div>

        <div style={exampleContainerStyles}>
          <div style={{ marginBottom: spacing.spacing[16] }}>
            <div style={{ ...textStyles.sm.medium, marginBottom: spacing.spacing[8] }}>Media Controls (Default Type)</div>
            <ButtonGroup
              type="default"
              size="lg"
              items={mediaControls}
            />
            <div style={{ ...textStyles.xs.normal, color: colors.text.muted, marginTop: spacing.spacing[8] }}>
              Selected: {selectedAction}
            </div>
          </div>

          <div style={{ marginBottom: spacing.spacing[16] }}>
            <div style={{ ...textStyles.sm.medium, marginBottom: spacing.spacing[8] }}>Edit Actions (With Disabled Item)</div>
            <ButtonGroup
              type="default"
              size="lg"
              items={editActions}
            />
          </div>

          <div style={{ marginBottom: spacing.spacing[16] }}>
            <div style={{ ...textStyles.sm.medium, marginBottom: spacing.spacing[8] }}>Text Formatting</div>
            <ButtonGroup
              type="default"
              size="md"
              items={textFormatting}
            />
          </div>

          <div>
            <div style={{ ...textStyles.sm.medium, marginBottom: spacing.spacing[8] }}>Alignment Controls (Icon Only)</div>
            <ButtonGroup
              type="iconOnly"
              size="md"
              items={alignmentControls}
            />
            <div style={{ ...textStyles.xs.normal, color: colors.text.muted, marginTop: spacing.spacing[8] }}>
              Selected alignment: {selectedAlignment}
            </div>
          </div>
        </div>

        <div style={codeBlockStyles}>
{`// Basic usage examples
const mediaControls = [
  { id: 'play', label: 'Play', leadIcon: <PlayIcon />, onClick: (item) => setSelectedAction(item.id) },
  { id: 'pause', label: 'Pause', leadIcon: <PauseIcon />, onClick: (item) => setSelectedAction(item.id) },
  { id: 'stop', label: 'Stop', leadIcon: <StopIcon />, onClick: (item) => setSelectedAction(item.id) },
];

<ButtonGroup
  type="default"
  size="lg"
  items={mediaControls}
/>

// Icon-only alignment controls
<ButtonGroup
  type="iconOnly"
  size="md"
  items={alignmentControls}
/>`}
        </div>
      </div>

      {/* Size Variants */}
      <div style={sectionStyles}>
        <div style={subtitleStyles}>Size Variants</div>
        <div style={descriptionStyles}>
          ButtonGroup component in all available sizes: lg, md, sm, xs, and 2xs.
        </div>

        <div style={exampleContainerStyles}>
          <div style={gridStyles}>
            <div style={itemGridStyles}>
              <div style={{ ...textStyles.sm.medium, marginBottom: spacing.spacing[8] }}>Large (lg)</div>
              <ButtonGroup
                type="default"
                size="lg"
                items={mediaControls.slice(0, 3)}
              />
            </div>

            <div style={itemGridStyles}>
              <div style={{ ...textStyles.sm.medium, marginBottom: spacing.spacing[8] }}>Medium (md)</div>
              <ButtonGroup
                type="default"
                size="md"
                items={mediaControls.slice(0, 3)}
              />
            </div>

            <div style={itemGridStyles}>
              <div style={{ ...textStyles.sm.medium, marginBottom: spacing.spacing[8] }}>Small (sm)</div>
              <ButtonGroup
                type="default"
                size="sm"
                items={mediaControls.slice(0, 3)}
              />
            </div>

            <div style={itemGridStyles}>
              <div style={{ ...textStyles.sm.medium, marginBottom: spacing.spacing[8] }}>Extra Small (xs)</div>
              <ButtonGroup
                type="default"
                size="xs"
                items={mediaControls.slice(0, 3)}
              />
            </div>

            <div style={itemGridStyles}>
              <div style={{ ...textStyles.sm.medium, marginBottom: spacing.spacing[8] }}>2X Small (2xs)</div>
              <ButtonGroup
                type="default"
                size="2xs"
                items={mediaControls.slice(0, 3)}
              />
            </div>
          </div>
        </div>

        <div style={codeBlockStyles}>
{`// Size variants
<ButtonGroup type="default" size="lg" items={items} />
<ButtonGroup type="default" size="md" items={items} />
<ButtonGroup type="default" size="sm" items={items} />
<ButtonGroup type="default" size="xs" items={items} />
<ButtonGroup type="default" size="2xs" items={items} />`}
        </div>
      </div>

      {/* Icon-Only Variants */}
      <div style={sectionStyles}>
        <div style={subtitleStyles}>Icon-Only Type</div>
        <div style={descriptionStyles}>
          ButtonGroup with icon-only type for compact interfaces where space is limited.
        </div>

        <div style={exampleContainerStyles}>
          <div style={gridStyles}>
            <div style={itemGridStyles}>
              <div style={{ ...textStyles.sm.medium, marginBottom: spacing.spacing[8] }}>Large Icon-Only</div>
              <ButtonGroup
                type="iconOnly"
                size="lg"
                items={iconOnlyActions}
              />
            </div>

            <div style={itemGridStyles}>
              <div style={{ ...textStyles.sm.medium, marginBottom: spacing.spacing[8] }}>Medium Icon-Only</div>
              <ButtonGroup
                type="iconOnly"
                size="md"
                items={iconOnlyActions}
              />
            </div>

            <div style={itemGridStyles}>
              <div style={{ ...textStyles.sm.medium, marginBottom: spacing.spacing[8] }}>Small Icon-Only</div>
              <ButtonGroup
                type="iconOnly"
                size="sm"
                items={iconOnlyActions}
              />
            </div>
          </div>
        </div>

        <div style={codeBlockStyles}>
{`// Icon-only button groups
const iconOnlyActions = [
  { id: 'copy', leadIcon: <CopyIcon />, onClick: () => console.log('Copy') },
  { id: 'edit', leadIcon: <EditIcon />, onClick: () => console.log('Edit') },
  { id: 'delete', leadIcon: <DeleteIcon />, disabled: true },
];

<ButtonGroup
  type="iconOnly"
  size="md"
  items={iconOnlyActions}
/>`}
        </div>
      </div>

      {/* Interactive States */}
      <div style={sectionStyles}>
        <div style={subtitleStyles}>Interactive States</div>
        <div style={descriptionStyles}>
          ButtonGroup handles hover, press, focus, and disabled states with smooth transitions and accessibility features.
        </div>

        <div style={exampleContainerStyles}>
          <div style={gridStyles}>
            <div style={itemGridStyles}>
              <div style={{ ...textStyles.sm.medium, marginBottom: spacing.spacing[8] }}>Normal State</div>
              <ButtonGroup
                type="default"
                size="md"
                items={[
                  { id: 'normal1', label: 'Normal', leadIcon: <PlayIcon />, onClick: () => console.log('Normal 1') },
                  { id: 'normal2', label: 'Normal', leadIcon: <PauseIcon />, onClick: () => console.log('Normal 2') },
                ]}
              />
            </div>

            <div style={itemGridStyles}>
              <div style={{ ...textStyles.sm.medium, marginBottom: spacing.spacing[8] }}>With Disabled Items</div>
              <ButtonGroup
                type="default"
                size="md"
                items={[
                  { id: 'active', label: 'Active', leadIcon: <PlayIcon />, onClick: () => console.log('Active') },
                  { id: 'disabled', label: 'Disabled', leadIcon: <PauseIcon />, disabled: true },
                  { id: 'active2', label: 'Active', leadIcon: <StopIcon />, onClick: () => console.log('Active 2') },
                ]}
              />
            </div>

            <div style={itemGridStyles}>
              <div style={{ ...textStyles.sm.medium, marginBottom: spacing.spacing[8] }}>Mixed States (Icon-Only)</div>
              <ButtonGroup
                type="iconOnly"
                size="md"
                items={[
                  { id: 'enabled1', leadIcon: <CopyIcon />, onClick: () => console.log('Copy') },
                  { id: 'disabled1', leadIcon: <EditIcon />, disabled: true },
                  { id: 'enabled2', leadIcon: <DeleteIcon />, onClick: () => console.log('Delete') },
                ]}
              />
            </div>
          </div>
        </div>

        <div style={codeBlockStyles}>
{`// Interactive states
const mixedStates = [
  { id: 'active', label: 'Active', leadIcon: <PlayIcon />, onClick: handleClick },
  { id: 'disabled', label: 'Disabled', leadIcon: <PauseIcon />, disabled: true },
  { id: 'active2', label: 'Active', leadIcon: <StopIcon />, onClick: handleClick },
];

<ButtonGroup
  type="default"
  size="md"
  items={mixedStates}
/>`}
        </div>
      </div>

      {/* Real-World Examples */}
      <div style={sectionStyles}>
        <div style={subtitleStyles}>Real-World Examples</div>
        <div style={descriptionStyles}>
          Practical examples showing how ButtonGroup can be used in real applications.
        </div>

        <div style={exampleContainerStyles}>
          <div style={{ marginBottom: spacing.spacing[24] }}>
            <div style={{ ...textStyles.md.medium, marginBottom: spacing.spacing[12] }}>Toolbar Example</div>
            <div style={{ display: 'flex', gap: spacing.spacing[12], flexWrap: 'wrap' }}>
              <ButtonGroup
                type="iconOnly"
                size="sm"
                items={[
                  { id: 'undo', leadIcon: <EditIcon />, onClick: () => console.log('Undo') },
                  { id: 'redo', leadIcon: <CopyIcon />, onClick: () => console.log('Redo') },
                ]}
              />
              <ButtonGroup
                type="iconOnly"
                size="sm"
                items={textFormatting}
              />
              <ButtonGroup
                type="iconOnly"
                size="sm"
                items={alignmentControls}
              />
            </div>
          </div>

          <div style={{ marginBottom: spacing.spacing[24] }}>
            <div style={{ ...textStyles.md.medium, marginBottom: spacing.spacing[12] }}>Media Player Controls</div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <ButtonGroup
                type="iconOnly"
                size="lg"
                items={[
                  { id: 'prev', leadIcon: <StopIcon />, onClick: () => console.log('Previous') },
                  { id: 'play', leadIcon: <PlayIcon />, onClick: () => console.log('Play') },
                  { id: 'next', leadIcon: <PauseIcon />, onClick: () => console.log('Next') },
                ]}
              />
            </div>
          </div>

          <div>
            <div style={{ ...textStyles.md.medium, marginBottom: spacing.spacing[12] }}>Pagination Controls</div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <ButtonGroup
                type="default"
                size="sm"
                items={[
                  { id: 'prev', label: 'Previous', onClick: () => console.log('Previous page') },
                  { id: 'next', label: 'Next', onClick: () => console.log('Next page') },
                ]}
              />
            </div>
          </div>
        </div>

        <div style={codeBlockStyles}>
{`// Real-world toolbar example
<div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
  <ButtonGroup type="iconOnly" size="sm" items={undoRedoActions} />
  <ButtonGroup type="iconOnly" size="sm" items={textFormatting} />
  <ButtonGroup type="iconOnly" size="sm" items={alignmentControls} />
</div>

// Media player controls
<ButtonGroup
  type="iconOnly"
  size="lg"
  items={mediaControls}
/>

// Pagination
<ButtonGroup
  type="default"
  size="sm"
  items={paginationControls}
/>`}
        </div>
      </div>

      {/* API Reference */}
      <div style={sectionStyles}>
        <div style={subtitleStyles}>API Reference</div>
        <div style={descriptionStyles}>
          Complete API documentation for the ButtonGroup component.
        </div>

        <div style={exampleContainerStyles}>
          <div style={codeBlockStyles}>
{`// ButtonGroup Props
interface ButtonGroupProps {
  // Core variants
  type?: 'default' | 'iconOnly';  // Type of buttons in group
  size?: 'lg' | 'md' | 'sm' | 'xs' | '2xs';  // Size of all buttons
  
  // Content
  items: ButtonItem[];  // Array of button configurations
  
  // Standard props
  className?: string;
  ...rest  // Other HTML div props
}

// ButtonItem Interface
interface ButtonItem {
  id: string | number;     // Unique identifier
  label?: string;          // Button text (for 'default' type)
  leadIcon?: ReactElement; // Leading icon
  disabled?: boolean;      // Disabled state
  onClick?: (item: ButtonItem, index: number) => void;  // Click handler
}

// Usage
<ButtonGroup
  type="default"
  size="md"
  items={[
    {
      id: 'action1',
      label: 'Action',
      leadIcon: <Icon />,
      disabled: false,
      onClick: (item, index) => handleClick(item, index)
    }
  ]}
/>`}
          </div>
        </div>
      </div>

      {/* Design System Integration */}
      <div style={sectionStyles}>
        <div style={subtitleStyles}>Design System Integration</div>
        <div style={descriptionStyles}>
          ButtonGroup is fully integrated with the Pacelane Design System tokens and theming.
        </div>

        <div style={exampleContainerStyles}>
          <div style={codeBlockStyles}>
{`// Design System Features
✅ Theme-aware colors (works with light/dark themes)
✅ Uses design system spacing tokens
✅ Uses design system typography styles
✅ Uses design system corner radius tokens
✅ Uses design system shadow tokens
✅ Uses design system stroke/border tokens
✅ Motion animations with Framer Motion
✅ Full accessibility support (ARIA, keyboard navigation)
✅ Focus rings for keyboard users
✅ Proper disabled states

// Import from design system
import { ButtonGroup } from 'src/design-system/components';

// Always use semantic colors for theme compatibility
const { colors } = useTheme();

// All styling follows design system patterns:
- Container: bg.state.secondary, border.darker, component.default shadow
- Items: bg.state.ghost with hover/press states
- Typography: Matches Button component text styles
- Icons: Properly sized and colored per design system`}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ButtonGroupPlayground; 