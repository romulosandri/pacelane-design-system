import React, { useState, useMemo } from 'react';
import { useTheme } from '../services/theme-context.jsx';
import { spacing } from '../design-system/tokens/spacing.js';
import { textStyles } from '../design-system/styles/typography/typography-styles.js';
import { typography } from '../design-system/tokens/typography.js';
import { 
  getNotifications, 
  getNotificationCounts, 
  markNotificationAsRead, 
  markAllNotificationsAsRead
} from '../data/index.js';

// Design System Components
import Button from '../design-system/components/Button.jsx';
import Tabs from '../design-system/components/Tabs.jsx';
import Input from '../design-system/components/Input.jsx';
import DropdownMenu from '../design-system/components/DropdownMenu.jsx';
import NotificationItem from '../design-system/components/NotificationItem.jsx';

// Icons
import { 
  Search, 
  ChevronDown, 
  CheckCheck,
  Info
} from 'lucide-react';



/**
 * NotificationsPage component - Notifications management page
 */
const NotificationsPage = () => {
  const { colors } = useTheme();
  
  // State management
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('newest');
  const [showSortDropdown, setShowSortDropdown] = useState(false);
  const [notifications, setNotifications] = useState(() => getNotifications());
  
  // Get notification counts for tab badges
  const notificationCounts = useMemo(() => getNotificationCounts(), [notifications]);
  
  // Filter and sort notifications
  const filteredNotifications = useMemo(() => {
    let filtered = getNotifications({
      unreadOnly: activeTab === 'unread',
      category: activeTab === 'all' || activeTab === 'unread' ? undefined : activeTab
    });
    
    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(notification => 
        notification.title.toLowerCase().includes(query) ||
        notification.message.toLowerCase().includes(query) ||
        notification.category.toLowerCase().includes(query)
      );
    }
    
    // Apply sorting
    if (sortBy === 'oldest') {
      filtered.sort((a, b) => a.timestamp.getTime() - b.timestamp.getTime());
    } else {
      filtered.sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime());
    }
    
    return filtered;
  }, [activeTab, searchQuery, sortBy, notifications]);
  
  // Main container styles
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
  
  // Title style using awesome serif font
  const titleStyle = {
    fontFamily: typography.fontFamily['awesome-serif'],
    fontSize: typography.desktop.size['4xl'],
    fontWeight: typography.desktop.weight.semibold,
    lineHeight: typography.desktop.lineHeight.leading7,
    letterSpacing: typography.desktop.letterSpacing.normal,
    color: colors.text.default,
    margin: 0
  };
  
  // Header actions style
  const headerActionsStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: spacing.spacing[16],
    flexWrap: 'wrap'
  };
  
  // Search and filter row style
  const searchFilterStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: spacing.spacing[16],
    flexWrap: 'wrap'
  };
  
  // Notifications list style
  const notificationsListStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: spacing.spacing[12]
  };
  
  // Empty state style
  const emptyStateStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: spacing.spacing[16],
    padding: spacing.spacing[48],
    textAlign: 'center'
  };
  
  // Tab items with badges
  const tabItems = [
    { 
      id: 'all', 
      label: 'All', 
      badge: notificationCounts.total > 0 ? notificationCounts.total.toString() : null 
    },
    { 
      id: 'unread', 
      label: 'Unread', 
      badge: notificationCounts.unread > 0 ? notificationCounts.unread.toString() : null 
    },
    { id: 'content', label: 'Content' },
    { id: 'collaboration', label: 'Team' },
    { id: 'system', label: 'System' },
    { id: 'account', label: 'Account' }
  ];
  
  // Sort options
  const sortOptions = [
    { label: 'Newest first', value: 'newest' },
    { label: 'Oldest first', value: 'oldest' }
  ];
  
  // Event handlers
  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };
  
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };
  
  const handleSortChange = (item, index) => {
    setSortBy(sortOptions[index].value);
    setShowSortDropdown(false);
  };
  
  const handleMarkAsRead = (notificationId) => {
    markNotificationAsRead(notificationId);
    setNotifications(getNotifications());
  };
  
  const handleMarkAllAsRead = () => {
    markAllNotificationsAsRead();
    setNotifications(getNotifications());
  };
  

  
  return (
    <div style={containerStyles}>
      {/* Page Header */}
      <div>
        <h1 style={titleStyle}>Notifications</h1>
        <p style={{
          ...textStyles.sm.medium,
          color: colors.text.subtle,
          margin: 0,
          marginTop: spacing.spacing[8],
        }}>
          Stay updated with the latest activity and important updates
        </p>
      </div>
      
      {/* Header Actions */}
      <div style={headerActionsStyle}>
        <div style={searchFilterStyle}>
          <Input
            placeholder="Search notifications..."
            value={searchQuery}
            onChange={handleSearchChange}
            leadIcon={<Search size={16} />}
            style={{ minWidth: '300px' }}
          />
          
          <DropdownMenu
            trigger={
              <Button
                style="secondary"
                size="md"
                label={`Sort: ${sortOptions.find(opt => opt.value === sortBy)?.label}`}
                tailIcon={<ChevronDown size={12} />}
              />
            }
            items={sortOptions.map(option => option.label)}
            onItemClick={handleSortChange}
            isOpen={showSortDropdown}
            onOpenChange={setShowSortDropdown}
          />
        </div>
        
        {notificationCounts.unread > 0 && (
          <Button
            style="secondary"
            size="md"
            label="Mark all as read"
            leadIcon={<CheckCheck size={16} />}
            onClick={handleMarkAllAsRead}
          />
        )}
      </div>
      
      {/* Tabs */}
      <Tabs
        items={tabItems}
        activeTab={activeTab}
        onTabChange={handleTabChange}
      />
      
      {/* Notifications List */}
      {filteredNotifications.length > 0 ? (
        <div style={notificationsListStyle}>
          {filteredNotifications.map((notification) => (
            <NotificationItem
              key={notification.id}
              notification={notification}
              onRead={handleMarkAsRead}
            />
          ))}
        </div>
      ) : (
        <div style={emptyStateStyle}>
          <Info size={48} color={colors.icon.muted} />
          <div>
            <h3 style={{ ...textStyles.lg.semibold, color: colors.text.default, margin: 0 }}>
              {searchQuery 
                ? 'No notifications found' 
                : activeTab === 'unread' 
                  ? 'No unread notifications' 
                  : 'No notifications yet'
              }
            </h3>
            <p style={{ ...textStyles.md.normal, color: colors.text.subtle, margin: spacing.spacing[8] + 'px 0 0 0' }}>
              {searchQuery 
                ? 'Try adjusting your search terms or filters' 
                : activeTab === 'unread' 
                  ? 'All caught up! Check back later for new updates.' 
                  : 'When you receive notifications, they\'ll appear here.'
              }
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationsPage;