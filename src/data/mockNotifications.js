/**
 * Mock Notifications Data
 * Sample notification data for development and demonstration purposes
 */

export const mockNotifications = [
  {
    id: 'content-published',
    type: 'success',
    title: 'Content Published Successfully',
    message: 'Your article "Marketing Strategy for Q4 2024" has been published and is now live.',
    timestamp: new Date(Date.now() - 15 * 60 * 1000), // 15 minutes ago
    read: false,
    actionable: true,
    action: {
      label: 'View Article',
      type: 'primary'
    },
    category: 'content'
  },
  {
    id: 'collaboration-invite',
    type: 'informative',
    title: 'New Collaboration Invite',
    message: 'Sarah Johnson invited you to collaborate on "Product Launch Plan". You have editor permissions.',
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
    read: false,
    actionable: true,
    action: {
      label: 'Accept Invite',
      type: 'primary'
    },
    category: 'collaboration'
  },
  {
    id: 'system-update',
    type: 'informative',
    title: 'System Update Complete',
    message: 'We\'ve updated the editor with new AI writing features and improved performance.',
    timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000), // 4 hours ago
    read: true,
    actionable: true,
    action: {
      label: 'See What\'s New',
      type: 'secondary'
    },
    category: 'system'
  },
  {
    id: 'storage-warning',
    type: 'warning',
    title: 'Storage Space Running Low',
    message: 'You\'re using 85% of your storage space. Consider upgrading your plan or removing unused files.',
    timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000), // 6 hours ago
    read: false,
    actionable: true,
    action: {
      label: 'Manage Storage',
      type: 'primary'
    },
    category: 'account'
  },
  {
    id: 'comment-mention',
    type: 'informative',
    title: 'You were mentioned in a comment',
    message: 'Alex Chen mentioned you in a comment on "User Research Findings": "Great insights @you! This aligns with our user interviews."',
    timestamp: new Date(Date.now() - 8 * 60 * 60 * 1000), // 8 hours ago
    read: true,
    actionable: true,
    action: {
      label: 'View Comment',
      type: 'secondary'
    },
    category: 'social'
  },
  {
    id: 'backup-complete',
    type: 'success',
    title: 'Weekly Backup Complete',
    message: 'Your content has been successfully backed up. All 24 documents are safely stored.',
    timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000), // 1 day ago
    read: true,
    actionable: false,
    category: 'system'
  },
  {
    id: 'payment-reminder',
    type: 'warning',
    title: 'Payment Due in 3 Days',
    message: 'Your Pro plan subscription will renew on December 15th for $29.99.',
    timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
    read: false,
    actionable: true,
    action: {
      label: 'Update Payment',
      type: 'primary'
    },
    category: 'billing'
  },
  {
    id: 'feature-suggestion',
    type: 'informative',
    title: 'New Feature: AI Writing Assistant',
    message: 'Try our new AI writing assistant to help improve your content flow and readability.',
    timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000), // 3 days ago
    read: true,
    actionable: true,
    action: {
      label: 'Try It Now',
      type: 'primary'
    },
    category: 'features'
  },
  {
    id: 'security-alert',
    type: 'destructive',
    title: 'Unusual Login Activity',
    message: 'We detected a login from a new device in San Francisco, CA. If this wasn\'t you, please secure your account.',
    timestamp: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000), // 4 days ago
    read: true,
    actionable: true,
    action: {
      label: 'Review Activity',
      type: 'destructive'
    },
    category: 'security'
  },
  {
    id: 'team-update',
    type: 'informative',
    title: 'Team Member Added',
    message: 'Maria Rodriguez has been added to your "Content Team" workspace with editor permissions.',
    timestamp: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000), // 5 days ago
    read: true,
    actionable: false,
    category: 'team'
  }
];

/**
 * Get notifications with optional filtering
 */
export const getNotifications = (filters = {}) => {
  let filtered = [...mockNotifications];
  
  if (filters.unreadOnly) {
    filtered = filtered.filter(notification => !notification.read);
  }
  
  if (filters.category && filters.category !== 'all') {
    filtered = filtered.filter(notification => notification.category === filters.category);
  }
  
  if (filters.type && filters.type !== 'all') {
    filtered = filtered.filter(notification => notification.type === filters.type);
  }
  
  return filtered.sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime());
};

/**
 * Get notification counts by category
 */
export const getNotificationCounts = () => {
  const total = mockNotifications.length;
  const unread = mockNotifications.filter(n => !n.read).length;
  const categories = mockNotifications.reduce((acc, notification) => {
    acc[notification.category] = (acc[notification.category] || 0) + 1;
    return acc;
  }, {});
  
  return {
    total,
    unread,
    categories
  };
};

/**
 * Mark notification as read
 */
export const markNotificationAsRead = (notificationId) => {
  const notification = mockNotifications.find(n => n.id === notificationId);
  if (notification) {
    notification.read = true;
  }
};

/**
 * Mark all notifications as read
 */
export const markAllNotificationsAsRead = () => {
  mockNotifications.forEach(notification => {
    notification.read = true;
  });
};

/**
 * Delete notification
 */
export const deleteNotification = (notificationId) => {
  const index = mockNotifications.findIndex(n => n.id === notificationId);
  if (index > -1) {
    mockNotifications.splice(index, 1);
  }
};