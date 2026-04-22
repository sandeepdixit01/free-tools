/**
 * Google Analytics 4 Page Tracking Hook
 * 
 * Tracks SPA route changes and sends page_view events to GA4.
 * Works with react-router-dom's useLocation hook.
 * 
 * Usage: Call once in App component or router wrapper
 * 
 * @requires window.gtag to be initialized (done in index.html)
 */

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const GA_MEASUREMENT_ID = 'G-XQXXMHDC0C';

export const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    // Check if gtag is available (GA script loaded)
    if (typeof window.gtag === 'function') {
      // Send page_view event to GA4
      window.gtag('config', GA_MEASUREMENT_ID, {
        page_path: location.pathname + location.search,
      });

      // Optional: Log in development for debugging
      if (process.env.NODE_ENV === 'development') {
        console.log('GA4 Page View:', location.pathname + location.search);
      }
    }
  }, [location]);
};

export default usePageTracking;

