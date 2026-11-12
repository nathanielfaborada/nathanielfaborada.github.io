import React from 'react';
import { Link } from 'react-router-dom';
import { useDocumentTitle } from '../../hooks';
import './PageNotFoundPage.css';

export default function PageNotFoundPage() {
  useDocumentTitle(
    "404 - Page Not Found | Nathaniel Faborada",
    "The page you are looking for does not exist or may have been moved.",
    "",
    true // disallow indexing of error pages (R-38)
  );

  return (
    <div className="notfound-container">
      <div className="notfound-card">
        {/* Status badge */}
        <div className="notfound-badge-wrap">
          <span className="notfound-badge">Error 404</span>
        </div>

        {/* Heading & description */}
        <h1 className="notfound-title">Page not found</h1>
        <p className="notfound-description">
          The link you followed may be outdated, or the portfolio section may have been reorganized.
        </p>

        {/* Accessible recovery actions */}
        <div className="notfound-actions">
          <Link to="/" className="notfound-btn notfound-btn-primary">
            <span>Return to Overview</span>
          </Link>
          <Link to="/collaborators" className="notfound-btn notfound-btn-secondary">
            <span>View Collaborators</span>
          </Link>
          <Link to="/about" className="notfound-btn notfound-btn-secondary">
            <span>About Nathaniel</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
