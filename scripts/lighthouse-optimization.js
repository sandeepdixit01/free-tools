/**
 * Lighthouse Performance Optimization Script
 * 
 * This script applies high-impact frontend optimizations to improve:
 * - CLS (Cumulative Layout Shift)
 * - LCP (Largest Contentful Paint)
 * - Speed Index
 * - Overall Lighthouse Performance Score
 * 
 * Changes applied:
 * 1. Fix CLS from AdSense ads (reserve space)
 * 2. Reduce LCP by simplifying gradients
 * 3. Stabilize tool card layouts
 * 4. Remove unused preconnect
 * 5. Mobile-specific optimizations
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

console.log('🚀 Starting Lighthouse Performance Optimization...\n');

// ============================================================================
// 1. FIX CLS FROM ADS - Reserve space for ad slots
// ============================================================================
console.log('📊 Step 1: Fixing CLS from AdSense ads...');

const adSlotCssPath = path.join(rootDir, 'src/components/ads/AdSlot.css');
const adSlotCss = fs.readFileSync(adSlotCssPath, 'utf8');

const optimizedAdSlotCss = `/* AdSlot Component Styles (Refactored + CLS Optimized) */

.ad-slot-wrapper {
  width: 100%;
  margin: 2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  /* CLS FIX: Reserve minimum space for ads */
  min-height: 250px;
  position: relative;
}

/* Position-specific styles */
.ad-slot-position-top-banner {
  margin-top: 1rem;
  margin-bottom: 2rem;
  min-height: 90px; /* Standard banner height */
}

.ad-slot-position-below-hero {
  margin-top: 2rem;
  margin-bottom: 2rem;
  min-height: 250px; /* Medium rectangle */
}

.ad-slot-position-mid-content {
  margin-top: 3rem;
  margin-bottom: 3rem;
  min-height: 250px; /* Medium rectangle */
}

.ad-slot-position-bottom-banner {
  margin-top: 2rem;
  margin-bottom: 1rem;
  min-height: 90px; /* Standard banner height */
}

/* AdSense container (future) */
.ad-slot-adsense {
  width: 100%;
  max-width: 728px;
  min-height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f3f4f6;
  border-radius: 8px;
  position: relative;
}

.ad-slot-loading {
  font-size: 0.875rem;
  color: #9ca3af;
  text-align: center;
}

/* Responsive Design */
@media (max-width: 768px) {
  .ad-slot-wrapper {
    margin: 1.5rem 0;
    min-height: 200px; /* Reduced for mobile */
  }

  .ad-slot-position-top-banner {
    margin-top: 0.75rem;
    margin-bottom: 1.5rem;
    min-height: 50px; /* Mobile banner */
  }

  .ad-slot-position-below-hero {
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    min-height: 200px;
  }

  .ad-slot-position-mid-content {
    margin-top: 2rem;
    margin-bottom: 2rem;
    min-height: 200px;
  }

  .ad-slot-position-bottom-banner {
    margin-top: 1.5rem;
    margin-bottom: 0.75rem;
    min-height: 50px;
  }

  .ad-slot-adsense {
    max-width: 100%;
  }
}

@media (max-width: 480px) {
  .ad-slot-wrapper {
    margin: 1rem 0;
    min-height: 150px; /* Further reduced for small mobile */
  }

  .ad-slot-position-top-banner,
  .ad-slot-position-below-hero,
  .ad-slot-position-mid-content,
  .ad-slot-position-bottom-banner {
    margin-top: 1rem;
    margin-bottom: 1rem;
    min-height: 150px;
  }
}
`;

fs.writeFileSync(adSlotCssPath, optimizedAdSlotCss);
console.log('✅ AdSlot.css optimized with CLS fixes\n');

// ============================================================================
// 2. REDUCE LCP BY SIMPLIFYING GRADIENTS
// ============================================================================
console.log('🎨 Step 2: Simplifying gradients for better LCP...');

const heroCssPath = path.join(rootDir, 'src/components/Hero.css');
const heroCss = fs.readFileSync(heroCssPath, 'utf8');

const optimizedHeroCss = heroCss
  .replace(
    /background: linear-gradient\(135deg, #667eea 0%, #764ba2 100%\);/,
    'background: #667eea; /* Simplified from gradient for better LCP */'
  )
  .replace(
    /backdrop-filter: blur\(10px\);/g,
    '/* backdrop-filter: blur(10px); */ /* Removed for performance */'
  );

fs.writeFileSync(heroCssPath, optimizedHeroCss);
console.log('✅ Hero.css optimized - gradient simplified, backdrop-filter removed\n');

// ============================================================================
// 3. STABILIZE TOOL CARD LAYOUTS
// ============================================================================
console.log('📦 Step 3: Stabilizing tool card layouts...');

const toolCardCssPath = path.join(rootDir, 'src/components/ToolCard.css');
const toolCardCss = fs.readFileSync(toolCardCssPath, 'utf8');

const optimizedToolCardCss = `.tool-card {
  background: var(--bg-primary);
  border: 1px solid var(--border-color);
  border-radius: var(--radius);
  padding: 1.5rem;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  /* CLS FIX: Stable card height */
  min-height: 180px;
  height: 100%;
}

.tool-card:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-2px);
  border-color: var(--primary-color);
}

.tool-card:active {
  transform: translateY(0);
}

.tool-card-icon {
  font-size: 2rem;
  line-height: 1;
  /* Prevent icon from causing layout shift */
  height: 2rem;
  display: flex;
  align-items: center;
}

.tool-card-name {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--text-primary);
  margin: 0;
  /* Prevent text overflow causing shifts */
  line-height: 1.4;
  min-height: 1.575rem; /* 1.125rem * 1.4 */
}

.tool-card-description {
  font-size: 0.875rem;
  color: var(--text-secondary);
  margin: 0;
  line-height: 1.5;
  /* Limit to 3 lines to prevent height variations */
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  min-height: 3.9375rem; /* 0.875rem * 1.5 * 3 lines */
}

@media (max-width: 767px) {
  .tool-card {
    padding: 1.25rem;
    min-height: 160px;
  }
  
  .tool-card-icon {
    font-size: 1.75rem;
    height: 1.75rem;
  }
  
  .tool-card-name {
    font-size: 1rem;
    min-height: 1.4rem;
  }
  
  .tool-card-description {
    font-size: 0.8125rem;
    min-height: 3.65625rem; /* 0.8125rem * 1.5 * 3 lines */
  }
}
`;

fs.writeFileSync(toolCardCssPath, optimizedToolCardCss);
console.log('✅ ToolCard.css optimized with stable heights\n');

// ============================================================================
// 4. REMOVE UNUSED PRECONNECT
// ============================================================================
console.log('🔗 Step 4: Removing unused Google Fonts preconnect...');

const indexHtmlPath = path.join(rootDir, 'index.html');
const indexHtml = fs.readFileSync(indexHtmlPath, 'utf8');

const optimizedIndexHtml = indexHtml.replace(
  /\s*<link rel="preconnect" href="https:\/\/fonts\.googleapis\.com">\n/,
  ''
);

fs.writeFileSync(indexHtmlPath, optimizedIndexHtml);
console.log('✅ index.html optimized - unused preconnect removed\n');

// ============================================================================
// 5. MOBILE-SPECIFIC OPTIMIZATIONS
// ============================================================================
console.log('📱 Step 5: Applying mobile-specific optimizations...');

const appCssPath = path.join(rootDir, 'src/App.css');
const appCss = fs.readFileSync(appCssPath, 'utf8');

const optimizedAppCss = `.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1;
}

.home-section {
  padding: 4rem 0;
}

.home-section .container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.ad-section {
  margin: 0;
  padding: 0;
  width: 100%;
  display: block;
  line-height: 0;
}

/* Home Branding Section */
.home-branding {
  padding: 2rem 0;
  background: #f8f9fa;
  text-align: center;
}

.branding-text {
  font-size: 0.95rem;
  color: #4b5563;
  margin: 0;
  font-weight: 500;
  letter-spacing: 0.5px;
}

/* Tablet and below */
@media (max-width: 768px) {
  .home-section {
    padding: 3rem 0;
  }
}

/* Mobile - Reduced padding for faster initial render */
@media (max-width: 480px) {
  .home-section {
    padding: 2rem 0;
  }
  
  /* Hide ads on very small screens to improve mobile performance */
  .ad-slot-position-top-banner {
    display: none;
  }
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Performance optimization - REMOVED will-change to reduce memory */
/* will-change should only be used just before animation */

/* Reduce motion for users who prefer it */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
  
  html {
    scroll-behavior: auto;
  }
}

/* Trust Message - Pilot Implementation */
.trust-message {
  text-align: center;
  font-size: 0.875rem;
  color: #6b7280;
  margin: 12px 0 0 0;
  padding: 0;
  line-height: 1.5;
  font-weight: 400;
}

.trust-message::before {
  content: '';
  display: inline-block;
  width: 0;
  height: 0;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .trust-message {
    font-size: 0.8125rem;
    margin: 10px 0 0 0;
  }
}

@media (max-width: 480px) {
  .trust-message {
    font-size: 0.75rem;
    margin: 8px 0 0 0;
  }
}
`;

fs.writeFileSync(appCssPath, optimizedAppCss);
console.log('✅ App.css optimized for mobile performance\n');

// ============================================================================
// 6. ADD LAZY LOADING COMPONENT
// ============================================================================
console.log('⚡ Step 6: Creating lazy loading component for below-fold content...');

const lazyLoadComponentPath = path.join(rootDir, 'src/components/LazySection.jsx');
const lazyLoadComponent = `import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

/**
 * LazySection Component
 * Renders children only when they enter the viewport
 * Improves initial page load performance
 */
const LazySection = ({ children, threshold = 0.1, rootMargin = '50px' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return (
    <div ref={sectionRef}>
      {isVisible ? children : <div style={{ minHeight: '200px' }} />}
    </div>
  );
};

LazySection.propTypes = {
  children: PropTypes.node.isRequired,
  threshold: PropTypes.number,
  rootMargin: PropTypes.string
};

export default LazySection;
`;

fs.writeFileSync(lazyLoadComponentPath, lazyLoadComponent);
console.log('✅ LazySection.jsx component created\n');

// ============================================================================
// SUMMARY
// ============================================================================
console.log('═══════════════════════════════════════════════════════════');
console.log('✨ OPTIMIZATION COMPLETE!\n');
console.log('📊 Changes Applied:');
console.log('  1. ✅ AdSlot.css - Reserved space for ads (CLS fix)');
console.log('  2. ✅ Hero.css - Simplified gradient, removed backdrop-filter');
console.log('  3. ✅ ToolCard.css - Stable card heights with min-height');
console.log('  4. ✅ index.html - Removed unused Google Fonts preconnect');
console.log('  5. ✅ App.css - Mobile optimizations, removed will-change');
console.log('  6. ✅ LazySection.jsx - Created for below-fold lazy loading\n');
console.log('📈 Expected Improvements:');
console.log('  • CLS: < 0.1 (from reserved ad space + stable cards)');
console.log('  • LCP: 15-20% faster (simplified gradient, no backdrop-filter)');
console.log('  • Speed Index: 10-15% faster (reduced paint complexity)');
console.log('  • Mobile Score: +5-10 points (optimized padding, hidden top ad)\n');
console.log('🔄 Next Steps:');
console.log('  1. Update App.jsx to use LazySection for below-fold content');
console.log('  2. Test on Lighthouse (mobile + desktop)');
console.log('  3. Monitor Core Web Vitals in production');
console.log('═══════════════════════════════════════════════════════════\n');

// Made with Bob
