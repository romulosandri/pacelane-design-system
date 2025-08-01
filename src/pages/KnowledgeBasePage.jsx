import React, { useState } from 'react';
import { useTheme } from '../services/theme-context.jsx';
import { spacing } from '../design-system/tokens/spacing.js';
import { textStyles } from '../design-system/styles/typography/typography-styles.js';
import { typography } from '../design-system/tokens/typography.js';
import { mockKnowledgeBase } from '../data/mockKnowledgeBase.js';

// Design System Components
import Button from '../design-system/components/Button.jsx';
import FileCard from '../design-system/components/FileCard.jsx';
import FileUpload from '../design-system/components/FileUpload.jsx';
import Input from '../design-system/components/Input.jsx';
import Tabs from '../design-system/components/Tabs.jsx';
import DropdownMenu from '../design-system/components/DropdownMenu.jsx';

// Icons
import { Search, ChevronDown } from 'lucide-react';

/**
 * KnowledgeBasePage component - Knowledge base file management page
 */
const KnowledgeBasePage = () => {
  const { colors } = useTheme();
  
  // State management
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('lastAdded');
  const [showSortDropdown, setShowSortDropdown] = useState(false);
  const [urlInput, setUrlInput] = useState('');

  // Main container styles - 1080px width, center aligned, gap: 24
  const containerStyles = {
    paddingTop: spacing.spacing[80],
    paddingBottom: spacing.spacing[160],
    paddingLeft: spacing.spacing[32],
    paddingRight: spacing.spacing[32],
    width: '840px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    gap: spacing.spacing[24],
  };

  // Title style using awesome serif font, 4xl semi bold
  const titleStyle = {
    fontFamily: typography.fontFamily['awesome-serif'],
    fontSize: typography.desktop.size['4xl'],
    fontWeight: typography.desktop.weight.semibold,
    lineHeight: typography.desktop.lineHeight.leading7,
    letterSpacing: typography.desktop.letterSpacing.normal,
    color: colors.text.default,
    margin: 0,
  };

  // Subtitle style - sm medium, text subtle
  const subtitleStyle = {
    ...textStyles.sm.medium,
    color: colors.text.subtle,
    margin: 0,
    marginTop: spacing.spacing[8],
  };

  // Filter tabs configuration
  const filterTabs = [
    { id: 'all', label: 'All' },
    { id: 'files', label: 'Files' },
    { id: 'images', label: 'Images' },
    { id: 'audio', label: 'Audio' },
    { id: 'links', label: 'Links' },
  ];

  // Sort dropdown options
  const sortOptions = [
    { label: 'Last Added', onClick: () => setSortBy('lastAdded') },
    { label: 'Name A-Z', onClick: () => setSortBy('nameAsc') },
    { label: 'Name Z-A', onClick: () => setSortBy('nameDesc') },
    { label: 'Size (Largest)', onClick: () => setSortBy('sizeLarge') },
    { label: 'Size (Smallest)', onClick: () => setSortBy('sizeSmall') },
  ];

  // Transform mock data to flat file list for FileCard component
  const getAllFiles = () => {
    const files = [];
    
    const processItem = (item) => {
      if (item.type === 'file') {
        // Map fileType to FileCard expected types
        let cardFileType = 'default';
        switch (item.fileType) {
          case 'pdf':
            cardFileType = 'pdf';
            break;
          case 'video':
            cardFileType = 'video';
            break;
          case 'zip':
            cardFileType = 'zip';
            break;
          case 'excel':
          case 'document':
            cardFileType = 'default';
            break;
          default:
            cardFileType = 'default';
        }
        
        files.push({
          id: item.id,
          title: item.name,
          subtitle: `${item.size} • ${item.lastModified.toLocaleDateString()}`,
          fileType: cardFileType,
          status: 'ready',
          fileSize: item.size,
        });
      } else if (item.children) {
        item.children.forEach(processItem);
      }
    };
    
    mockKnowledgeBase.forEach(processItem);
    return files;
  };

  // Filter files based on active tab
  const getFilteredFiles = () => {
    const allFiles = getAllFiles();
    
    if (activeTab === 'all') return allFiles;
    
    return allFiles.filter(file => {
      switch (activeTab) {
        case 'files':
          return ['default', 'code', 'zip'].includes(file.fileType);
        case 'images':
          return file.fileType === 'image';
        case 'audio':
          return file.fileType === 'audio';
        case 'links':
          return file.fileType === 'link';
        default:
          return true;
      }
    });
  };

  // File upload handlers
  const handleFileSelect = (files) => {
    console.log('Files selected:', files);
    // Handle file upload logic here
  };

  const handleUrlSubmit = (url) => {
    console.log('URL submitted:', url);
    setUrlInput('');
    // Handle URL submission logic here
  };

  const handleFileAction = (action, fileId) => {
    console.log(`Action: ${action} on file: ${fileId}`);
    // Handle file actions (delete, move, download)
  };

  // Grid styles for file cards - 2 columns
  const gridStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: spacing.spacing[20],
    width: '100%',
  };

  // Row styles for tabs and search
  const controlRowStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: spacing.spacing[24],
    width: '100%',
  };

  // Right section styles for search and dropdown
  const rightSectionStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: spacing.spacing[12],
  };

  return (
    <div style={containerStyles}>
      {/* Header Section */}
      <div>
        <h1 style={titleStyle}>Knowledge Base</h1>
        <p style={subtitleStyle}>
          Organize and access all your project files, documents, and resources in one place
        </p>
      </div>

      {/* File Upload Area */}
      <FileUpload
        onFileSelect={handleFileSelect}
        onUrlSubmit={handleUrlSubmit}
        urlValue={urlInput}
        onUrlChange={setUrlInput}
        urlPlaceholder="Paste a website URL or document link here"
        accept="*/*"
        multiple={true}
        maxFiles={20}
      />

      {/* Controls Row - Tabs and Search */}
      <div style={controlRowStyles}>
        {/* Left: Tab Bar */}
        <Tabs
          style="segmented"
          type="default"
          tabs={filterTabs}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />

        {/* Right: Search and Sort */}
        <div style={rightSectionStyles}>
          {/* Search Input */}
          <div style={{ width: '280px' }}>
            <Input
              size="lg"
              style="default"
              placeholder="Search files..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              leadIcon={<Search size={16} />}
            />
          </div>

          {/* Sort Dropdown */}
          <div style={{ position: 'relative' }}>
            <Button
              label={`${sortOptions.find(opt => 
                (sortBy === 'lastAdded' && opt.label === 'Last Added') ||
                (sortBy === 'nameAsc' && opt.label === 'Name A-Z') ||
                (sortBy === 'nameDesc' && opt.label === 'Name Z-A') ||
                (sortBy === 'sizeLarge' && opt.label === 'Size (Largest)') ||
                (sortBy === 'sizeSmall' && opt.label === 'Size (Smallest)')
              )?.label || 'Last Added'}`}
              style="secondary"
              size="sm"
              tailIcon={<ChevronDown size={12} />}
              onClick={() => setShowSortDropdown(!showSortDropdown)}
            />
            
            <DropdownMenu
              isOpen={showSortDropdown}
              onClose={() => setShowSortDropdown(false)}
              items={sortOptions}
              position="bottom-right"
              minWidth="160px"
            />
          </div>
        </div>
      </div>

      {/* File Grid - 2 columns */}
      <div style={gridStyles}>
        {getFilteredFiles()
          .filter(file => 
            searchQuery === '' || 
            file.title.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .map((file) => (
            <FileCard
              key={file.id}
              variant="gradient"
              title={file.title}
              subtitle={file.subtitle}
              fileType={file.fileType}
              status={file.status}
              fileSize={file.fileSize}
              onMenuAction={(action) => handleFileAction(action, file.id)}
              onClick={() => console.log(`Clicked file: ${file.id}`)}
            />
          ))}
      </div>

      {/* Empty state when no files match */}
      {getFilteredFiles().filter(file => 
        searchQuery === '' || 
        file.title.toLowerCase().includes(searchQuery.toLowerCase())
      ).length === 0 && (
        <div style={{
          textAlign: 'center',
          padding: spacing.spacing[48],
          color: colors.text.muted,
        }}>
          <p style={textStyles.lg.medium}>No files found</p>
          <p style={textStyles.sm.normal}>
            {searchQuery ? 'Try adjusting your search or filter' : 'Upload some files to get started'}
          </p>
        </div>
      )}
    </div>
  );
};

export default KnowledgeBasePage;