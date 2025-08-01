import React, { useState, useEffect } from 'react';
import { useTheme } from '../services/theme-context.jsx';
import { 
  getCurrentContent, 
  navigateToHome, 
  getContentHistory, 
  getKnowledgeBase,
  deleteKnowledgeBaseItem,
  subscribeToNavigation,
  navigateToContentEditor
} from '../services/navigation.js';
import { spacing } from '../design-system/tokens/spacing.js';
import { stroke } from '../design-system/tokens/stroke.js';
import { cornerRadius } from '../design-system/tokens/corner-radius.js';
import { textStyles } from '../design-system/styles/typography/typography-styles.js';
import { getShadow, shadows } from '../design-system/tokens/shadows.js';

// Design System Components
import EditorNav from '../design-system/components/EditorNav.jsx';
import Button from '../design-system/components/Button.jsx';
import ButtonGroup from '../design-system/components/ButtonGroup.jsx';
import SidebarMenuItem from '../design-system/components/SidebarMenuItem.jsx';
import Input from '../design-system/components/Input.jsx';
import Bichaurinho from '../design-system/components/Bichaurinho.jsx';

// Icons
import { 
  FileText, 
  Folder, 
  FolderOpen,
  MoreHorizontal, 
  Trash2, 
  Clock,
  Sun,
  Moon,
  Monitor,
  HelpCircle,
  Send,
  User
} from 'lucide-react';

/**
 * ContentEditorPage component - Main content editing interface
 */
const ContentEditorPage = () => {
  const { colors, themePreference, setTheme } = useTheme();
  const [currentContent, setCurrentContent] = useState(null);
  const [contentHistory] = useState(getContentHistory());
  const [knowledgeBase] = useState(getKnowledgeBase());
  const [expandedFolders, setExpandedFolders] = useState(new Set());
  const [sidebarSplit, setSidebarSplit] = useState(50); // Percentage for knowledge base section
  const [chatMessage, setChatMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([
    {
      id: 1,
      type: 'bot',
      message: 'Hi! I\'m here to help you with your content. Ask me anything about writing, editing, or improving your work!',
      timestamp: new Date(Date.now() - 5 * 60 * 1000)
    }
  ]);

  // Load current content on mount and listen for navigation changes
  useEffect(() => {
    setCurrentContent(getCurrentContent());
    
    const unsubscribe = subscribeToNavigation(({ content }) => {
      if (content) {
        setCurrentContent(content);
      }
    });
    
    return unsubscribe;
  }, []);

  // Handle theme selection
  const handleThemeSelect = (item, index) => {
    const themes = ['light', 'dark', 'system'];
    const selectedTheme = themes[index];
    setTheme(selectedTheme);
  };

  // Handle content selection from history
  const handleContentSelect = (contentId) => {
    navigateToContentEditor(contentId);
  };

  // Handle folder toggle
  const toggleFolder = (folderId) => {
    const newExpanded = new Set(expandedFolders);
    if (newExpanded.has(folderId)) {
      newExpanded.delete(folderId);
    } else {
      newExpanded.add(folderId);
    }
    setExpandedFolders(newExpanded);
  };

  // Handle knowledge base item deletion
  const handleDeleteKnowledgeItem = (itemId) => {
    deleteKnowledgeBaseItem(itemId);
  };

  // Handle chat message send
  const handleSendMessage = () => {
    if (chatMessage.trim()) {
      const newMessage = {
        id: chatHistory.length + 1,
        type: 'user',
        message: chatMessage.trim(),
        timestamp: new Date()
      };
      
      setChatHistory([...chatHistory, newMessage]);
      setChatMessage('');
      
      // Simulate bot response after a delay
      setTimeout(() => {
        const botResponse = {
          id: chatHistory.length + 2,
          type: 'bot',
          message: 'Thanks for your message! I\'m here to help with your content. While I\'m still learning, I can assist with writing tips, content structure, and editing suggestions.',
          timestamp: new Date()
        };
        setChatHistory(prev => [...prev, botResponse]);
      }, 1000);
    }
  };

  // Handle key press in chat input
  const handleChatKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // Page container styles
  const pageStyles = {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    backgroundColor: colors.bg.default,
  };

  // Main content area styles (below nav)
  const mainContentStyles = {
    display: 'flex',
    flex: 1,
    overflow: 'hidden',
  };

  // Left sidebar styles
  const leftSidebarStyles = {
    width: '280px',
    backgroundColor: colors.bg.sidebar.subtle,
    borderRight: `${stroke.default} solid ${colors.border.default}`,
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
  };

  // Sidebar section styles
  const sidebarSectionStyles = {
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
  };

  // Section header styles
  const sectionHeaderStyles = {
    padding: `${spacing.spacing[12]} ${spacing.spacing[16]}`,
    borderBottom: `${stroke.default} solid ${colors.border.default}`,
    backgroundColor: colors.bg.sidebar.subtle,
  };

  // Section content styles
  const sectionContentStyles = {
    flex: 1,
    overflow: 'auto',
    padding: spacing.spacing[8],
  };

  // Resizer handle styles
  const resizerStyles = {
    height: '4px',
    backgroundColor: colors.border.default,
    cursor: 'row-resize',
    position: 'relative',
    zIndex: 1,
  };

  // Sidebar bottom actions styles
  const sidebarActionsStyles = {
    padding: spacing.spacing[16],
    borderTop: `${stroke.default} solid ${colors.border.default}`,
    backgroundColor: colors.bg.sidebar.subtle,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: spacing.spacing[8],
  };

  // Center editor styles
  const centerEditorStyles = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: colors.bg.default,
    overflow: 'hidden',
  };

  // Editor content styles
  const editorContentStyles = {
    flex: 1,
    padding: `${spacing.spacing[40]} ${spacing.spacing[64]}`,
    overflow: 'auto',
    maxWidth: '800px',
    margin: '0 auto',
    width: '100%',
  };

  // Right chat sidebar styles
  const rightSidebarStyles = {
    width: '320px',
    backgroundColor: colors.bg.sidebar.subtle,
    borderLeft: `${stroke.default} solid ${colors.border.default}`,
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
  };

  // Chat header styles
  const chatHeaderStyles = {
    padding: `${spacing.spacing[16]} ${spacing.spacing[20]}`,
    borderBottom: `${stroke.default} solid ${colors.border.default}`,
    backgroundColor: colors.bg.sidebar.subtle,
  };

  // Chat messages area styles
  const chatMessagesStyles = {
    flex: 1,
    overflow: 'auto',
    padding: spacing.spacing[16],
    display: 'flex',
    flexDirection: 'column',
    gap: spacing.spacing[12],
  };

  // Chat input area styles
  const chatInputAreaStyles = {
    padding: spacing.spacing[16],
    borderTop: `${stroke.default} solid ${colors.border.default}`,
    backgroundColor: colors.bg.sidebar.subtle,
  };

  // User message bubble styles
  const userMessageStyles = {
    alignSelf: 'flex-end',
    maxWidth: '80%',
    backgroundColor: colors.bg.subtle,
    border: `${stroke.default} solid ${colors.border.default}`,
    borderRadius: cornerRadius.borderRadius.lg,
    padding: spacing.spacing[12],
    display: 'flex',
    gap: spacing.spacing[8],
    alignItems: 'flex-start',
  };

  // Bot message bubble styles
  const botMessageStyles = {
    alignSelf: 'flex-start',
    maxWidth: '80%',
    backgroundColor: 'transparent',
    borderRadius: cornerRadius.borderRadius.lg,
    padding: spacing.spacing[12],
    display: 'flex',
    gap: spacing.spacing[8],
    alignItems: 'flex-start',
  };

  // Avatar styles
  const avatarStyles = {
    width: '24px',
    height: '24px',
    borderRadius: cornerRadius.borderRadius.sm,
    backgroundColor: colors.bg.state.secondary,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  };

  // Theme selector items
  const themeItems = [
    { id: 'light', leadIcon: <Sun />, onClick: handleThemeSelect },
    { id: 'dark', leadIcon: <Moon />, onClick: handleThemeSelect },
    { id: 'system', leadIcon: <Monitor />, onClick: handleThemeSelect },
  ];

  // Render knowledge base item
  const renderKnowledgeItem = (item, level = 0) => {
    if (item.type === 'folder') {
      const isExpanded = expandedFolders.has(item.id);
      return (
        <div key={item.id}>
          <SidebarMenuItem
            variant="default"
            label={item.name}
            leadIcon={isExpanded ? <FolderOpen /> : <Folder />}
            onClick={() => toggleFolder(item.id)}
            style={{ paddingLeft: `${12 + level * 16}px` }}
          />
          {isExpanded && item.children && (
            <div>
              {item.children.map(child => renderKnowledgeItem(child, level + 1))}
            </div>
          )}
        </div>
      );
    } else {
      return (
        <div key={item.id} style={{ position: 'relative', paddingLeft: `${12 + level * 16}px` }}>
          <SidebarMenuItem
            variant="default"
            label={item.name}
            leadIcon={<FileText />}
            onClick={() => console.log('File clicked:', item.name)}
          />
        </div>
      );
    }
  };

  if (!currentContent) {
    return (
      <div style={pageStyles}>
        <EditorNav 
          title="Content Editor"
          onGoBack={navigateToHome}
        />
        <div style={{ 
          flex: 1, 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          color: colors.text.muted
        }}>
          Select a content item to start editing
        </div>
      </div>
    );
  }

  return (
    <div style={pageStyles}>
      {/* Editor Navigation */}
      <EditorNav 
        title={currentContent.title}
        onGoBack={navigateToHome}
        onSaveDraft={() => console.log('Save draft')}
      />
      
      {/* Main Content Area */}
      <div style={mainContentStyles}>
        {/* Left Sidebar - Knowledge Base & Content History */}
        <div style={leftSidebarStyles}>
          {/* Knowledge Base Section */}
          <div style={{ 
            ...sidebarSectionStyles, 
            height: `${sidebarSplit}%` 
          }}>
            <div style={sectionHeaderStyles}>
              <h3 style={{ 
                ...textStyles.sm.semibold, 
                color: colors.text.default,
                margin: 0 
              }}>
                Knowledge Base
              </h3>
            </div>
            <div style={sectionContentStyles}>
              {knowledgeBase.map(item => renderKnowledgeItem(item))}
            </div>
          </div>
          
          {/* Resizer Handle */}
          <div style={resizerStyles} />
          
          {/* Content History Section */}
          <div style={{ 
            ...sidebarSectionStyles, 
            height: `${100 - sidebarSplit}%` 
          }}>
            <div style={sectionHeaderStyles}>
              <h3 style={{ 
                ...textStyles.sm.semibold, 
                color: colors.text.default,
                margin: 0 
              }}>
                Content History
              </h3>
            </div>
            <div style={sectionContentStyles}>
              {contentHistory.map(content => (
                <SidebarMenuItem
                  key={content.id}
                  variant="default"
                  state={currentContent.id === content.id ? 'active' : 'default'}
                  label={content.title}
                  leadIcon={<Clock />}
                  onClick={() => handleContentSelect(content.id)}
                />
              ))}
            </div>
          </div>
          
          {/* Sidebar Actions */}
          <div style={sidebarActionsStyles}>
            <ButtonGroup
              type="iconOnly"
              size="xs"
              items={themeItems}
            />
            <Button
              label="Help"
              style="dashed"
              size="xs"
              leadIcon={<HelpCircle size={12} />}
              onClick={() => console.log('Help clicked')}
            />
          </div>
        </div>
        
        {/* Center Content Editor */}
        <div style={centerEditorStyles}>
          <div style={editorContentStyles}>
            {/* Title */}
            <h1 style={{ 
              ...textStyles['4xl'].bold,
              color: colors.text.default,
              marginBottom: spacing.spacing[24],
              marginTop: 0,
            }}>
              {currentContent.title}
            </h1>
            
            {/* Content */}
            <div style={{
              ...textStyles.md.normal,
              color: colors.text.default,
              lineHeight: '1.6',
              whiteSpace: 'pre-wrap',
            }}>
              {currentContent.content}
            </div>
          </div>
        </div>
        
        {/* Right Sidebar - Chat Bot */}
        <div style={rightSidebarStyles}>
          {/* Chat Header */}
          <div style={chatHeaderStyles}>
            <h3 style={{ 
              ...textStyles.sm.semibold, 
              color: colors.text.default,
              margin: 0 
            }}>
              AI Assistant
            </h3>
          </div>
          
          {/* Chat Messages */}
          <div style={chatMessagesStyles}>
            {chatHistory.map(message => (
              <div
                key={message.id}
                style={message.type === 'user' ? userMessageStyles : botMessageStyles}
              >
                <div style={avatarStyles}>
                  {message.type === 'user' ? (
                    <User size={12} color={colors.icon.muted} />
                  ) : (
                    <Bichaurinho variant={12} size={24} />
                  )}
                </div>
                <div style={{
                  ...textStyles.sm.normal,
                  color: colors.text.default,
                  flex: 1,
                }}>
                  {message.message}
                </div>
              </div>
            ))}
          </div>
          
          {/* Chat Input */}
          <div style={chatInputAreaStyles}>
            <div style={{ display: 'flex', gap: spacing.spacing[8] }}>
              <div style={{ flex: 1 }}>
                <Input
                  placeholder="Ask me anything..."
                  value={chatMessage}
                  onChange={(e) => setChatMessage(e.target.value)}
                  onKeyPress={handleChatKeyPress}
                  style="default"
                  size="sm"
                />
              </div>
              <Button
                variant="iconOnly"
                style="primary"
                size="sm"
                leadIcon={<Send size={16} />}
                onClick={handleSendMessage}
                disabled={!chatMessage.trim()}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentEditorPage;