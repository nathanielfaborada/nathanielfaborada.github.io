import React from 'react';
import { Link } from 'react-router-dom';
import { PROFILE_DATA } from '../../../../data/profileData';
import { SITE_CONFIG } from '../../../../config';
import './PublicFooter.css';

export default function PublicFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="portfolio-footer" role="contentinfo">
      <div className="portfolio-footer-inner">
        <div className="portfolio-footer-brand">
          <Link to="/" className="portfolio-footer-name">
            {PROFILE_DATA.name}
          </Link>
          <span className="portfolio-footer-sep" aria-hidden="true">·</span>
          <span className="portfolio-footer-copy">© {currentYear} All Rights Reserved</span>
        </div>

        <nav aria-label="Footer Navigation" className="portfolio-footer-nav">
          <div className="portfolio-footer-nav-group">
            <Link to="/" className="portfolio-footer-link">
              Overview
            </Link>
            <Link to="/projects" className="portfolio-footer-link">
              Projects
            </Link>
            <Link to="/collaborators" className="portfolio-footer-link">
              Collaborators
            </Link>
            <Link to="/about" className="portfolio-footer-link">
              About
            </Link>
          </div>

          <span className="portfolio-footer-nav-sep" aria-hidden="true">·</span>

          <div className="portfolio-footer-nav-group">
            <a
              href={SITE_CONFIG.github}
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio-footer-link"
            >
              GitHub
            </a>
            <a
              href={SITE_CONFIG.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio-footer-link"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="portfolio-footer-link"
            >
              Email
            </a>
          </div>
        </nav>
      </div>
    </footer>
  );
}
