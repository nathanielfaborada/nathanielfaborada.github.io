import React from 'react';
import { Outlet } from 'react-router-dom';
import PublicNavbar from './PublicNavbar';
import PublicFooter from './PublicFooter';

export default function PublicLayout() {
  return (
    <div className="portfolio-app-root" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Keyboard accessible skip-to-content anchor (R-32, antislop-human) */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only"
      >
        Skip to main content
      </a>

      <PublicNavbar />

      <main id="main-content" tabIndex="-1" style={{ flex: '1 0 auto', outline: 'none' }}>
        <Outlet />
      </main>

      <PublicFooter />
    </div>
  );
}
