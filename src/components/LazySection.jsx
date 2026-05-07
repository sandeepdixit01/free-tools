import React, { useEffect, useRef, useState } from 'react';
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
