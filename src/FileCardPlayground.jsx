import React from 'react';
import { useTheme } from './services/theme-context.jsx';
import { spacing } from './design-system/tokens/spacing.js';
import { textStyles } from './design-system/styles/typography/typography-styles.js';
import { FileCard } from './design-system/components/index.js';

const FileCardPlayground = () => {
  const { colors } = useTheme();

  // Mock file data with different types and statuses
  const fileData = [
    {
      id: 1,
      title: 'main.jsx',
      subtitle: '2 hours ago',
      fileType: 'code',
      status: 'ready',
      fileSize: '2.4 KB'
    },
    {
      id: 2,
      title: 'design-guidelines.pdf',
      subtitle: '1 day ago',
      fileType: 'pdf',
      status: 'ready',
      fileSize: '1.2 MB'
    },
    {
      id: 3,
      title: 'demo-video.mp4',
      subtitle: 'Just now',
      fileType: 'video',
      status: 'uploading',
      fileSize: '45.8 MB'
    },
    {
      id: 4,
      title: 'ui-mockups.fig',
      subtitle: '3 days ago',
      fileType: 'design',
      status: 'ready',
      fileSize: '8.3 MB'
    },
    {
      id: 5,
      title: 'hero-image.png',
      subtitle: '5 minutes ago',
      fileType: 'image',
      status: 'error',
      fileSize: '425 KB'
    },
    {
      id: 6,
      title: 'compressed-archive.zip',
      subtitle: '1 week ago',
      fileType: 'default',
      status: 'ready',
      fileSize: '12.7 MB'
    },
    {
      id: 7,
      title: 'component-library.js',
      subtitle: '30 minutes ago',
      fileType: 'code',
      status: 'uploading',
      fileSize: '156 KB'
    },
    {
      id: 8,
      title: 'tutorial-screenshot.jpg',
      subtitle: '2 days ago',
      fileType: 'image',
      status: 'ready',
      fileSize: '89 KB'
    }
  ];

  const handleMenuAction = (action, fileId) => {
    console.log(`${action} action triggered for file ${fileId}`);
  };

  const handleFileClick = (fileId) => {
    console.log(`File clicked: ${fileId}`);
  };

  return (
    <div style={{ 
      padding: spacing.spacing[32],
      backgroundColor: colors.bg.default,
      minHeight: '100vh'
    }}>
      {/* Header */}
      <div style={{ marginBottom: spacing.spacing[48] }}>
        <h1 style={{
          ...textStyles['4xl'].bold,
          color: colors.text.default,
          margin: 0,
          marginBottom: spacing.spacing[8]
        }}>
          FileCard Component
        </h1>
        <p style={{
          ...textStyles.lg.normal,
          color: colors.text.muted,
          margin: 0,
          marginBottom: spacing.spacing[24]
        }}>
          File cards with different types and status indicators.
        </p>
        
        {/* Legend */}
        <div style={{
          padding: spacing.spacing[20],
          backgroundColor: colors.bg.card.default,
          borderRadius: '8px',
          border: `1px solid ${colors.border.default}`
        }}>
          <h3 style={{
            ...textStyles.md.semibold,
            color: colors.text.default,
            margin: 0,
            marginBottom: spacing.spacing[12]
          }}>
            Status Legend
          </h3>
          <div style={{
            display: 'flex',
            gap: spacing.spacing[24],
            flexWrap: 'wrap'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: spacing.spacing[8] }}>
              <div style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: '#4FC660'
              }} />
              <span style={{ ...textStyles.sm.normal, color: colors.text.default }}>Ready to use</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: spacing.spacing[8] }}>
              <div style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: '#F97316'
              }} />
              <span style={{ ...textStyles.sm.normal, color: colors.text.default }}>Uploading...</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: spacing.spacing[8] }}>
              <div style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: '#EF4444'
              }} />
              <span style={{ ...textStyles.sm.normal, color: colors.text.default }}>Error</span>
            </div>
          </div>
        </div>
      </div>

      {/* File Cards Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
        gap: spacing.spacing[32],
        maxWidth: '1200px'
      }}>
        {fileData.map((file) => (
          <FileCard
            key={file.id}
            title={file.title}
            subtitle={file.subtitle}
            fileType={file.fileType}
            status={file.status}
            fileSize={file.fileSize}
            onClick={() => handleFileClick(file.id)}
            onMenuAction={(action) => handleMenuAction(action, file.id)}
          />
        ))}
      </div>

      {/* Usage Examples */}
      <div style={{ 
        marginTop: spacing.spacing[64],
        padding: spacing.spacing[24],
        backgroundColor: colors.bg.card.subtle,
        borderRadius: '8px',
        border: `1px solid ${colors.border.default}`
      }}>
        <h2 style={{
          ...textStyles['2xl'].semibold,
          color: colors.text.default,
          margin: 0,
          marginBottom: spacing.spacing[16]
        }}>
          Usage Examples
        </h2>
        
        <div style={{
          backgroundColor: colors.bg.card.default,
          padding: spacing.spacing[20],
          borderRadius: '6px',
          fontFamily: 'monospace',
          fontSize: '14px',
          color: colors.text.default,
          overflowX: 'auto'
        }}>
          <pre style={{ margin: 0 }}>{`// Basic usage
<FileCard
  title="document.pdf"
  subtitle="2 hours ago"
  fileType="pdf"
  status="ready"
  fileSize="1.2 MB"
  onClick={handleFileClick}
  onMenuAction={handleMenuAction}
/>

// File types: 'code' | 'pdf' | 'video' | 'design' | 'image' | 'default'
// Status: 'ready' | 'uploading' | 'error'`}</pre>
        </div>
      </div>
    </div>
  );
};

export default FileCardPlayground;