import React, { useState } from 'react';
import { useTheme } from '../services/theme-context.jsx';
import { spacing } from '../design-system/tokens/spacing.js';
import { cornerRadius } from '../design-system/tokens/corner-radius.js';
import { getShadow } from '../design-system/tokens/shadows.js';
import { textStyles } from '../design-system/styles/typography/typography-styles.js';
import { typography } from '../design-system/tokens/typography.js';

// Design System Components
import Button from '../design-system/components/Button.jsx';
import ButtonGroup from '../design-system/components/ButtonGroup.jsx';
import Input from '../design-system/components/Input.jsx';
import Badge from '../design-system/components/Badge.jsx';
import Bichaurinho from '../design-system/components/Bichaurinho.jsx';

// Icons
import { 
  Search, 
  Filter, 
  Calendar,
  Clock,
  FileText,
  Trash2,
  MoreHorizontal,
  Download,
  Eye
} from 'lucide-react';

const HistoryPage = () => {
  const { colors } = useTheme();
  
  // State for search and filters
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedItems, setSelectedItems] = useState([]);

  // Mock history data
  const historyItems = [
    {
      id: 1,
      type: 'content',
      title: 'LinkedIn Post - Product Launch Announcement',
      description: 'Created announcement post for new AI features launch',
      date: '2024-01-15',
      time: '2:30 PM',
      status: 'published',
      engagement: { views: 1247, likes: 89, comments: 23 }
    },
    {
      id: 2,
      type: 'content',
      title: 'Blog Article - "The Future of Remote Work"',
      description: 'Comprehensive guide on remote work trends and best practices',
      date: '2024-01-12',
      time: '10:15 AM',
      status: 'draft',
      wordCount: 2340
    },
    {
      id: 3,
      type: 'template',
      title: 'Email Newsletter Template',
      description: 'Created reusable template for weekly product updates',
      date: '2024-01-10',
      time: '4:45 PM',
      status: 'saved',
      usageCount: 7
    },
    {
      id: 4,
      type: 'knowledge',
      title: 'Competitor Analysis - Q1 2024',
      description: 'Research document on market competitors and positioning',
      date: '2024-01-08',
      time: '11:20 AM',
      status: 'archived',
      pages: 15
    },
    {
      id: 5,
      type: 'content',
      title: 'Twitter Thread - Industry Insights',
      description: '8-part thread about emerging technology trends',
      date: '2024-01-05',
      time: '3:15 PM',
      status: 'published',
      engagement: { views: 3401, likes: 156, retweets: 42 }
    },
    {
      id: 6,
      type: 'session',
      title: 'Content Planning Session',
      description: 'Brainstorming session for Q1 content calendar',
      date: '2024-01-03',
      time: '9:00 AM',
      status: 'completed',
      duration: '45 min'
    }
  ];

  // Filter options
  const filterOptions = [
    { id: 'all', label: 'All', leadIcon: <FileText size={12} /> },
    { id: 'content', label: 'Content', leadIcon: <FileText size={12} /> },
    { id: 'template', label: 'Templates', leadIcon: <FileText size={12} /> },
    { id: 'knowledge', label: 'Knowledge', leadIcon: <FileText size={12} /> },
    { id: 'session', label: 'Sessions', leadIcon: <Clock size={12} /> }
  ];

  // Filter items based on active filter and search
  const filteredItems = historyItems.filter(item => {
    const matchesFilter = activeFilter === 'all' || item.type === activeFilter;
    const matchesSearch = searchQuery === '' || 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  // Handle filter selection
  const handleFilterSelect = (item, index) => {
    setActiveFilter(filterOptions[index].id);
  };

  // Get type badge variant
  const getTypeBadgeVariant = (type) => {
    switch (type) {
      case 'content': return 'blue';
      case 'template': return 'teal';
      case 'knowledge': return 'purple';
      case 'session': return 'orange';
      default: return 'gray';
    }
  };

  // Get status badge variant
  const getStatusBadgeVariant = (status) => {
    switch (status) {
      case 'published': return 'green';
      case 'draft': return 'yellow';
      case 'saved': return 'blue';
      case 'archived': return 'gray';
      case 'completed': return 'green';
      default: return 'gray';
    }
  };

  // Format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    });
  };

  // Main container styles
  const containerStyles = {
    paddingTop: spacing.spacing[40],
    paddingBottom: spacing.spacing[160],
    paddingLeft: spacing.spacing[32],
    paddingRight: spacing.spacing[32],
    width: '840px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    gap: spacing.spacing[32],
  };

  // Header styles
  const headerStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: spacing.spacing[24],
  };

  // Page title style
  const pageTitleStyle = {
    fontFamily: typography.fontFamily['awesome-serif'],
    fontSize: typography.desktop.size['4xl'],
    fontWeight: typography.desktop.weight.semibold,
    lineHeight: typography.desktop.lineHeight.leading9,
    color: colors.text.default,
    margin: 0,
  };

  // Controls row styles
  const controlsRowStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: spacing.spacing[16],
  };

  // Search container styles
  const searchContainerStyles = {
    flex: 1,
    maxWidth: '400px',
  };

  // History item card styles
  const historyItemStyles = {
    backgroundColor: colors.bg.card.default,
    border: `1px solid ${colors.border.default}`,
    borderRadius: cornerRadius.borderRadius.lg,
    padding: spacing.spacing[20],
    boxShadow: getShadow('regular.card', colors, { withBorder: true }),
    display: 'flex',
    flexDirection: 'column',
    gap: spacing.spacing[16],
    transition: 'all 0.15s ease-out',
    cursor: 'pointer',
  };

  // History item header styles
  const itemHeaderStyles = {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: spacing.spacing[12],
  };

  // History item content styles
  const itemContentStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: spacing.spacing[8],
    flex: 1,
  };

  // History item metadata styles
  const itemMetadataStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: spacing.spacing[12],
    marginTop: spacing.spacing[4],
  };

  // Empty state styles
  const emptyStateStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.spacing[24],
    padding: spacing.spacing[80],
    textAlign: 'center',
  };

  return (
    <div style={containerStyles}>
      {/* Header */}
      <div style={headerStyles}>
        <h1 style={pageTitleStyle}>
          History
        </h1>
        
        {/* Controls Row */}
        <div style={controlsRowStyles}>
          {/* Search */}
          <div style={searchContainerStyles}>
            <Input
              placeholder="Search your history..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              leadIcon={<Search size={16} />}
              size="md"
            />
          </div>
          
          {/* Filter Buttons */}
          <ButtonGroup
            type="default"
            size="sm"
            items={filterOptions.map(filter => ({
              ...filter,
              onClick: handleFilterSelect
            }))}
          />
        </div>
      </div>

      {/* Results Count */}
      <div style={{ 
        ...textStyles.sm.medium, 
        color: colors.text.subtle,
        margin: `${spacing.spacing[4]} 0`
      }}>
        {filteredItems.length} {filteredItems.length === 1 ? 'item' : 'items'} found
      </div>

      {/* History Items */}
      {filteredItems.length > 0 ? (
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: spacing.spacing[16] 
        }}>
          {filteredItems.map((item) => (
            <div
              key={item.id}
              style={historyItemStyles}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-1px)';
                e.currentTarget.style.boxShadow = getShadow('regular.modalSm', colors, { withBorder: true });
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = getShadow('regular.card', colors, { withBorder: true });
              }}
            >
              {/* Item Header */}
              <div style={itemHeaderStyles}>
                <div style={itemContentStyles}>
                  {/* Title and Badges */}
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: spacing.spacing[8],
                    flexWrap: 'wrap'
                  }}>
                    <h3 style={{ 
                      ...textStyles.md.semibold, 
                      color: colors.text.default, 
                      margin: 0,
                      flex: 1,
                      minWidth: 0
                    }}>
                      {item.title}
                    </h3>
                    <Badge 
                      label={item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                      variant={getTypeBadgeVariant(item.type)}
                      size="sm"
                    />
                    <Badge 
                      label={item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                      variant={getStatusBadgeVariant(item.status)}
                      size="sm"
                    />
                  </div>
                  
                  {/* Description */}
                  <p style={{ 
                    ...textStyles.sm.normal, 
                    color: colors.text.subtle, 
                    margin: 0,
                    lineHeight: '1.5'
                  }}>
                    {item.description}
                  </p>
                  
                  {/* Metadata */}
                  <div style={itemMetadataStyles}>
                    <div style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: spacing.spacing[4] 
                    }}>
                      <Calendar size={12} color={colors.icon.muted} />
                      <span style={{ 
                        ...textStyles.xs.normal, 
                        color: colors.text.muted 
                      }}>
                        {formatDate(item.date)}
                      </span>
                    </div>
                    
                    <div style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: spacing.spacing[4] 
                    }}>
                      <Clock size={12} color={colors.icon.muted} />
                      <span style={{ 
                        ...textStyles.xs.normal, 
                        color: colors.text.muted 
                      }}>
                        {item.time}
                      </span>
                    </div>

                    {/* Type-specific metadata */}
                    {item.engagement && (
                      <div style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: spacing.spacing[8] 
                      }}>
                        <span style={{ 
                          ...textStyles.xs.normal, 
                          color: colors.text.muted 
                        }}>
                          {item.engagement.views} views • {item.engagement.likes} likes
                        </span>
                      </div>
                    )}
                    
                    {item.wordCount && (
                      <span style={{ 
                        ...textStyles.xs.normal, 
                        color: colors.text.muted 
                      }}>
                        {item.wordCount.toLocaleString()} words
                      </span>
                    )}
                    
                    {item.usageCount && (
                      <span style={{ 
                        ...textStyles.xs.normal, 
                        color: colors.text.muted 
                      }}>
                        Used {item.usageCount} times
                      </span>
                    )}
                    
                    {item.duration && (
                      <span style={{ 
                        ...textStyles.xs.normal, 
                        color: colors.text.muted 
                      }}>
                        {item.duration}
                      </span>
                    )}
                  </div>
                </div>
                
                {/* Actions */}
                <Button
                  variant="iconOnly"
                  style="ghost"
                  size="sm"
                  leadIcon={<MoreHorizontal size={16} />}
                  onClick={(e) => {
                    e.stopPropagation();
                    // Handle actions menu
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Empty State */
        <div style={emptyStateStyles}>
          <Bichaurinho variant={9} size={120} />
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: spacing.spacing[8],
            alignItems: 'center'
          }}>
            <h3 style={{ 
              ...textStyles.lg.semibold, 
              color: colors.text.default, 
              margin: 0 
            }}>
              No history found
            </h3>
            <p style={{ 
              ...textStyles.md.normal, 
              color: colors.text.subtle, 
              margin: 0,
              maxWidth: '400px'
            }}>
              {searchQuery 
                ? `No items match "${searchQuery}". Try adjusting your search or filters.`
                : 'Start creating content to see your history here.'
              }
            </p>
          </div>
          {searchQuery && (
            <Button
              label="Clear Search"
              style="secondary"
              size="sm"
              onClick={() => setSearchQuery('')}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default HistoryPage;