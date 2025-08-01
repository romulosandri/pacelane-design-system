/**
 * Navigation Service
 * Handles navigation between pages and content management
 */

// Import mock data from data directory
import { mockContentItems, mockKnowledgeBase } from '../data/index.js';

// Navigation state management
let currentPage = 'home';
let currentContent = null;
let navigationListeners = [];

/**
 * Get current page
 */
export const getCurrentPage = () => currentPage;

/**
 * Get current content
 */
export const getCurrentContent = () => currentContent;

/**
 * Navigate to a specific page
 */
export const navigateTo = (page, content = null) => {
  currentPage = page;
  currentContent = content;
  
  // Notify all listeners
  navigationListeners.forEach(listener => {
    listener({ page, content });
  });
};

/**
 * Navigate to content editor with specific content
 */
export const navigateToContentEditor = (contentId) => {
  const content = mockContentItems.find(item => item.id === contentId);
  if (content) {
    navigateTo('content-editor', content);
  }
};

/**
 * Navigate back to home
 */
export const navigateToHome = () => {
  navigateTo('home', null);
};

/**
 * Subscribe to navigation changes
 */
export const subscribeToNavigation = (listener) => {
  navigationListeners.push(listener);
  
  // Return unsubscribe function
  return () => {
    navigationListeners = navigationListeners.filter(l => l !== listener);
  };
};

/**
 * Get all content items for history
 */
export const getContentHistory = () => {
  return mockContentItems.map(item => ({
    id: item.id,
    title: item.title,
    subtitle: item.subtitle,
    lastModified: item.lastModified
  }));
};

/**
 * Get knowledge base items
 */
export const getKnowledgeBase = () => {
  return mockKnowledgeBase;
};

/**
 * Delete knowledge base item
 */
export const deleteKnowledgeBaseItem = (itemId) => {
  // In a real app, this would make an API call
  console.log('Deleting knowledge base item:', itemId);
  // For now, just log - in real implementation, would update the knowledge base
};