import React from 'react';
import { useTheme } from '../../services/theme-context.jsx';
import { spacing } from '../tokens/spacing.js';
import { textStyles } from '../styles/typography/typography-styles.js';
import { cornerRadius } from '../tokens/corner-radius.js';
import { getShadow } from '../tokens/shadows.js';

// Design System Components
import Badge from './Badge.jsx';

/**
 * Get relative time string (e.g., "2 hours ago")
 */
const getRelativeTime = (timestamp) => {
  const now = new Date();
  const diff = now.getTime() - timestamp.getTime();
  
  const minutes = Math.floor(diff / (1000 * 60));
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  
  if (minutes < 60) {
    return minutes <= 1 ? 'Just now' : `${minutes} minutes ago`;
  } else if (hours < 24) {
    return hours === 1 ? '1 hour ago' : `${hours} hours ago`;
  } else if (days < 7) {
    return days === 1 ? '1 day ago' : `${days} days ago`;
  } else {
    return timestamp.toLocaleDateString();
  }
};

/**
 * NotificationItem component - Individual notification card
 * 
 * @param {Object} props
 * @param {Object} props.notification - Notification data object
 * @param {Function} props.onRead - Callback when notification is marked as read
 */
const NotificationItem = ({ notification, onRead }) => {
  const { colors } = useTheme();
  
  const containerStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: spacing.spacing[12],
    paddingTop: spacing.spacing[16],
    paddingBottom: spacing.spacing[16],
    paddingLeft: spacing.spacing[24],
    paddingRight: spacing.spacing[24],
    backgroundColor: notification.read ? colors.bg.subtle : colors.bg.card.default,
    borderRadius: cornerRadius.borderRadius.md,
    border: notification.read ? 'none' : `1px solid ${colors.border.default}`,
    boxShadow: notification.read ? 'none' : getShadow('card', colors, { withBorder: false }),
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    position: 'relative'
  };
  
  const headerStyles = {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: spacing.spacing[12]
  };
  
  const contentStyles = {
    display: 'flex',
    alignItems: 'flex-start',
    gap: spacing.spacing[12],
    flex: 1
  };
  
  const textContainerStyles = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: spacing.spacing[4]
  };
  
  const titleRowStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: spacing.spacing[12]
  };
  
  const titleStyles = {
    ...textStyles.md.semibold,
    color: colors.text.default,
    margin: 0
  };
  
  const messageStyles = {
    ...textStyles.sm.normal,
    color: colors.text.subtle,
    margin: 0,
    lineHeight: '1.5'
  };
  
  const categoryStyles = {
    marginTop: spacing.spacing[8]
  };
  
  const timestampStyles = {
    ...textStyles.xs.normal,
    color: colors.text.muted
  };
  
  const unreadDotStyles = {
    width: '8px',
    height: '8px',
    borderRadius: cornerRadius.borderRadius.full,
    backgroundColor: colors.bg.state.brand,
    position: 'absolute',
    top: spacing.spacing[12],
    right: spacing.spacing[12]
  };
  
  const handleMarkAsRead = () => {
    if (!notification.read) {
      onRead(notification.id);
    }
  };
  
  return (
    <div style={containerStyles} onClick={handleMarkAsRead}>
      {!notification.read && <div style={unreadDotStyles} />}
      
      <div style={headerStyles}>
        <div style={contentStyles}>
          <div style={textContainerStyles}>
            <div style={titleRowStyles}>
              <h3 style={titleStyles}>{notification.title}</h3>
              <span style={timestampStyles}>
                {getRelativeTime(notification.timestamp)}
              </span>
            </div>
            <p style={messageStyles}>{notification.message}</p>
            
            {notification.category && (
              <div style={categoryStyles}>
                <Badge 
                  variant="soft" 
                  size="sm"
                  style={{ textTransform: 'capitalize' }}
                >
                  {notification.category}
                </Badge>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationItem;