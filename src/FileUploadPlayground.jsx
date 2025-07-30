import React, { useState } from 'react';
import { ThemeProvider } from './services/theme-context.jsx';
import FileUpload from './design-system/components/FileUpload.jsx';
import { spacing } from './design-system/tokens/spacing.js';

const FileUploadPlayground = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [urlValue, setUrlValue] = useState('');
  const [submittedUrl, setSubmittedUrl] = useState('');

  const handleFileSelect = (files) => {
    setSelectedFiles(files);
    console.log('Files selected:', files);
  };

  const handleUrlSubmit = (url) => {
    setSubmittedUrl(url);
    setUrlValue(''); // Clear input after submission
    console.log('URL submitted:', url);
  };

  const handleUrlChange = (value) => {
    setUrlValue(value);
  };

  const clearFiles = () => {
    setSelectedFiles([]);
  };

  const clearUrl = () => {
    setSubmittedUrl('');
  };

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
            FileUpload Component Playground
          </h1>
          <p style={{ 
            fontSize: '16px',
            color: '#666',
            marginBottom: spacing.spacing[24]
          }}>
            Test the file upload area with file dropping, click to browse, and URL submission functionality.
          </p>
        </div>

        {/* Main FileUpload Component */}
        <div>
          <h2 style={{ 
            fontSize: '20px', 
            fontWeight: 500, 
            marginBottom: spacing.spacing[16]
          }}>
            File Upload Area
          </h2>
          
          <FileUpload
            onFileSelect={handleFileSelect}
            onUrlSubmit={handleUrlSubmit}
            urlValue={urlValue}
            onUrlChange={handleUrlChange}
            accept="*/*"
            multiple={true}
            maxFiles={10}
            maxTotalSize={100 * 1024 * 1024} // 100MB
            urlPlaceholder="Paste a website URL here"
          />
        </div>

        {/* Selected Files Display */}
        {selectedFiles.length > 0 && (
          <div style={{
            padding: spacing.spacing[16],
            backgroundColor: '#f8f9fa',
            borderRadius: '8px',
            border: '1px solid #e9ecef'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: spacing.spacing[12]
            }}>
              <h3 style={{ 
                fontSize: '18px', 
                fontWeight: 500,
                margin: 0
              }}>
                Selected Files ({selectedFiles.length})
              </h3>
              <button
                onClick={clearFiles}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#dc3545',
                  cursor: 'pointer',
                  fontSize: '14px',
                  textDecoration: 'underline'
                }}
              >
                Clear Files
              </button>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: spacing.spacing[8] }}>
              {selectedFiles.map((file, index) => (
                <div key={index} style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: spacing.spacing[8],
                  backgroundColor: 'white',
                  borderRadius: '4px',
                  border: '1px solid #dee2e6'
                }}>
                  <div>
                    <div style={{ fontWeight: 500, fontSize: '14px' }}>
                      {file.name}
                    </div>
                    <div style={{ color: '#6c757d', fontSize: '12px' }}>
                      {(file.size / 1024).toFixed(1)} KB • {file.type || 'Unknown type'}
                    </div>
                  </div>
                  <div style={{ color: '#6c757d', fontSize: '12px' }}>
                    {new Date(file.lastModified).toLocaleDateString()}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Submitted URL Display */}
        {submittedUrl && (
          <div style={{
            padding: spacing.spacing[16],
            backgroundColor: '#e8f4fd',
            borderRadius: '8px',
            border: '1px solid #bee5eb'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: spacing.spacing[8]
            }}>
              <h3 style={{ 
                fontSize: '18px', 
                fontWeight: 500,
                margin: 0
              }}>
                Submitted URL
              </h3>
              <button
                onClick={clearUrl}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#dc3545',
                  cursor: 'pointer',
                  fontSize: '14px',
                  textDecoration: 'underline'
                }}
              >
                Clear URL
              </button>
            </div>
            
            <div style={{
              padding: spacing.spacing[12],
              backgroundColor: 'white',
              borderRadius: '4px',
              border: '1px solid #bee5eb',
              fontFamily: 'monospace',
              fontSize: '14px',
              wordBreak: 'break-all'
            }}>
              {submittedUrl}
            </div>
          </div>
        )}

        {/* Disabled State Example */}
        <div>
          <h2 style={{ 
            fontSize: '20px', 
            fontWeight: 500, 
            marginBottom: spacing.spacing[16]
          }}>
            Disabled State
          </h2>
          
          <FileUpload
            disabled={true}
            onFileSelect={handleFileSelect}
            onUrlSubmit={handleUrlSubmit}
            urlValue=""
            onUrlChange={() => {}}
          />
        </div>

        {/* Usage Instructions */}
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
            How to Test
          </h3>
          
          <ul style={{ margin: 0, paddingLeft: spacing.spacing[20] }}>
            <li style={{ marginBottom: spacing.spacing[8] }}>
              <strong>File Drop:</strong> Drag and drop files from your computer onto the upload area
            </li>
            <li style={{ marginBottom: spacing.spacing[8] }}>
              <strong>Click to Browse:</strong> Click anywhere on the upload area to open file browser
            </li>
            <li style={{ marginBottom: spacing.spacing[8] }}>
              <strong>URL Input:</strong> Enter a website URL in the input field and press Enter
            </li>
            <li style={{ marginBottom: spacing.spacing[8] }}>
              <strong>Hover Effects:</strong> Hover over the upload area to see background color changes
            </li>
            <li>
              <strong>Disabled State:</strong> The second upload area shows the disabled state
            </li>
          </ul>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default FileUploadPlayground;