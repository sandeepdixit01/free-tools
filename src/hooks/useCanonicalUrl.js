/**
 * useCanonicalUrl Hook
 *
 * Generates dynamic canonical URLs based on current location
 * Works in all environments (dev, preview, production)
 *
 * @returns {string} Canonical URL for current page
 *
 * @example
 * const canonical = useCanonicalUrl();
 * // Returns: "http://localhost:5173/tools/image-resizer" (dev)
 * // Returns: "https://yourdomain.com/tools/image-resizer" (production)
 */

import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';

export const useCanonicalUrl = () => {
  const location = useLocation();

  const canonical = useMemo(() => {
    // Get current origin (protocol + domain + port)
    const baseUrl = window.location.origin;

    // Get current pathname
    const pathname = location.pathname;

    // Combine to create canonical URL
    return `${baseUrl}${pathname}`;
  }, [location.pathname]);

  return canonical;
};

export default useCanonicalUrl;
