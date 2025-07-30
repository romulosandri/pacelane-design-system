import React from 'react';
import { ThemeProvider } from './services/theme-context.jsx';
import Divider from './design-system/components/Divider.jsx';
import { spacing } from './design-system/tokens/spacing.js';

const DividerPlayground = () => {
  return (
    <ThemeProvider>
      <div style={{ 
        padding: spacing.spacing[32],
        maxWidth: 800,
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        gap: spacing.spacing[32]
      }}>
        <div>
          <h1 style={{ 
            fontSize: '32px', 
            fontWeight: 600, 
            marginBottom: spacing.spacing[8]
          }}>
            Divider Component Playground
          </h1>
          <p style={{ 
            fontSize: '16px',
            color: '#666',
            marginBottom: spacing.spacing[24]
          }}>
            Test the reusable divider component with different configurations.
          </p>
        </div>

        {/* Default Divider */}
        <div>
          <h2 style={{ 
            fontSize: '20px', 
            fontWeight: 500, 
            marginBottom: spacing.spacing[16]
          }}>
            Default Divider (400px max width)
          </h2>
          
          <div style={{
            padding: spacing.spacing[24],
            backgroundColor: '#f8f9fa',
            borderRadius: '8px',
            border: '1px solid #e9ecef',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            <Divider />
          </div>
        </div>

        {/* Custom Label */}
        <div>
          <h2 style={{ 
            fontSize: '20px', 
            fontWeight: 500, 
            marginBottom: spacing.spacing[16]
          }}>
            Custom Label
          </h2>
          
          <div style={{
            padding: spacing.spacing[24],
            backgroundColor: '#f8f9fa',
            borderRadius: '8px',
            border: '1px solid #e9ecef',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: spacing.spacing[16]
          }}>
            <Divider label="and" />
            <Divider label="but" />
            <Divider label="then" />
          </div>
        </div>

        {/* Different Max Widths */}
        <div>
          <h2 style={{ 
            fontSize: '20px', 
            fontWeight: 500, 
            marginBottom: spacing.spacing[16]
          }}>
            Different Max Widths
          </h2>
          
          <div style={{
            padding: spacing.spacing[24],
            backgroundColor: '#f8f9fa',
            borderRadius: '8px',
            border: '1px solid #e9ecef',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: spacing.spacing[16]
          }}>
            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: spacing.spacing[8] }}>
              <span style={{ fontSize: '14px', color: '#666' }}>200px max width</span>
              <Divider maxWidth={200} />
            </div>
            
            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: spacing.spacing[8] }}>
              <span style={{ fontSize: '14px', color: '#666' }}>300px max width</span>
              <Divider maxWidth={300} />
            </div>
            
            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: spacing.spacing[8] }}>
              <span style={{ fontSize: '14px', color: '#666' }}>500px max width</span>
              <Divider maxWidth={500} />
            </div>
            
            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: spacing.spacing[8] }}>
              <span style={{ fontSize: '14px', color: '#666' }}>No max width (100%)</span>
              <Divider maxWidth="none" style={{ maxWidth: 'none' }} />
            </div>
          </div>
        </div>

        {/* Different Gaps */}
        <div>
          <h2 style={{ 
            fontSize: '20px', 
            fontWeight: 500, 
            marginBottom: spacing.spacing[16]
          }}>
            Different Gaps
          </h2>
          
          <div style={{
            padding: spacing.spacing[24],
            backgroundColor: '#f8f9fa',
            borderRadius: '8px',
            border: '1px solid #e9ecef',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: spacing.spacing[16]
          }}>
            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: spacing.spacing[8] }}>
              <span style={{ fontSize: '14px', color: '#666' }}>Small gap (8px)</span>
              <Divider gap={spacing.spacing[8]} />
            </div>
            
            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: spacing.spacing[8] }}>
              <span style={{ fontSize: '14px', color: '#666' }}>Default gap (12px)</span>
              <Divider />
            </div>
            
            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: spacing.spacing[8] }}>
              <span style={{ fontSize: '14px', color: '#666' }}>Large gap (20px)</span>
              <Divider gap={spacing.spacing[20]} />
            </div>
          </div>
        </div>

        {/* No Label Divider */}
        <div>
          <h2 style={{ 
            fontSize: '20px', 
            fontWeight: 500, 
            marginBottom: spacing.spacing[16]
          }}>
            No Label (Line Only)
          </h2>
          
          <div style={{
            padding: spacing.spacing[24],
            backgroundColor: '#f8f9fa',
            borderRadius: '8px',
            border: '1px solid #e9ecef',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            <Divider label="" />
          </div>
        </div>

        {/* Usage Examples */}
        <div style={{
          padding: spacing.spacing[20],
          backgroundColor: '#f8f9fa',
          borderRadius: '8px',
          border: '1px solid #e9ecef'
        }}>
          <h3 style={{ 
            fontSize: '18px', 
            fontWeight: 500,
            marginBottom: spacing.spacing[12]
          }}>
            Component Usage
          </h3>
          
          <pre style={{
            backgroundColor: '#fff',
            padding: spacing.spacing[16],
            borderRadius: '4px',
            border: '1px solid #dee2e6',
            overflow: 'auto',
            fontSize: '14px',
            fontFamily: 'monospace'
          }}>
{`// Default divider with "or" label and 400px max width
<Divider />

// Custom label
<Divider label="and" />

// Different max width
<Divider maxWidth={300} />

// Different gap between line and text
<Divider gap={spacing.spacing[8]} />

// Line only (no label)
<Divider label="" />

// Full width (no max width)
<Divider maxWidth="none" style={{ maxWidth: 'none' }} />`}
          </pre>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default DividerPlayground;