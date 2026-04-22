/**
 * Google Analytics Tracker Component
 *
 * Wrapper component that tracks page views for all routes.
 * Uses the usePageTracking hook to send GA4 events on route changes.
 */

import { usePageTracking } from '../hooks/usePageTracking';

const GATracker = ({ children }) => {
  usePageTracking();
  return children;
};

export default GATracker;
