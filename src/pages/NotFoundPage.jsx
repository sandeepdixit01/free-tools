import React from 'react'
import { Link } from 'react-router-dom'
import SEOHead from '../components/SEO/SEOHead'

const NotFoundPage = () => {
  return (
    <>
      <SEOHead
        title="404 - Page Not Found | DesiTechLabs"
        description="The page you are looking for does not exist."
        canonical={`${window.location.origin}/404`}
      />

      <main
        style={{
          minHeight: '60vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '3rem 1rem'
        }}
      >
        <div style={{ textAlign: 'center', maxWidth: '640px' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>404</h1>
          <h2 style={{ marginBottom: '1rem' }}>Page not found</h2>
          <p style={{ marginBottom: '1.5rem', color: '#666' }}>
            The page you requested does not exist or may have been moved.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/" style={{ textDecoration: 'none' }}>
              Go to Home
            </Link>
            <Link to="/tools" style={{ textDecoration: 'none' }}>
              Browse Tools
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}

export default NotFoundPage

// Made with Bob
