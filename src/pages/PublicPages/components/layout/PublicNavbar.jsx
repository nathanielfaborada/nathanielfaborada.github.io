import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useTheme } from '../../../../hooks/useTheme';
import {
  SunIcon,
  MoonIcon,
  GithubIcon,
  LinkedinIcon,
  BarsIcon,
  TimesIcon,
  MailIcon,
  ResumeDocIcon,
} from '../../../../components/common/Icons';
import { PROFILE_DATA } from '../../../../data/profileData';
import { SITE_CONFIG } from '../../../../config';
import './PublicNavbar.css';

export default function PublicNavbar() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Handle Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Lock body scroll when mobile menu is open (tabunan ang ilalim)
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Auto-close on resize to desktop viewports
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 860 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [mobileMenuOpen]);

  const scrollToProjects = (e) => {
    if (location.pathname === '/') {
      e.preventDefault();
      const elem = document.getElementById('projects');
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
      }
      setMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`portfolio-navbar-wrapper ${mobileMenuOpen ? 'mobile-menu-active' : ''}`}
      role="banner"
    >
      <div className="portfolio-navbar-inner">
        {/* Brand identity */}
        <div className="portfolio-brand-col">
          <Link
            to="/"
            className="portfolio-brand-link"
            aria-label={`${PROFILE_DATA.name} homepage`}
          >
            <img
              src={PROFILE_DATA.authorAvatarUrl || PROFILE_DATA.avatarUrl}
              alt=""
              className="portfolio-brand-avatar"
            />
            <div className="portfolio-brand-text">
              <span className="portfolio-brand-name">{PROFILE_DATA.name}</span>
              <span className="portfolio-brand-sub">{PROFILE_DATA.nickname || 'Developer'}</span>
            </div>
          </Link>

          <div className="portfolio-status-indicator" title={PROFILE_DATA.statusBadge}>
            <span className="portfolio-status-dot" aria-hidden="true" />
            <span className="portfolio-status-text">Available</span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="portfolio-nav-links" aria-label="Main portfolio navigation">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `portfolio-nav-item ${isActive ? 'portfolio-nav-active' : ''}`
            }
          >
            Overview
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `portfolio-nav-item ${isActive ? 'portfolio-nav-active' : ''}`
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/collaborators"
            className={({ isActive }) =>
              `portfolio-nav-item ${isActive ? 'portfolio-nav-active' : ''}`
            }
          >
            Collaborators
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `portfolio-nav-item ${isActive ? 'portfolio-nav-active' : ''}`
            }
          >
            About
          </NavLink>
        </nav>

        {/* Action controls */}
        <div className="portfolio-navbar-actions">
          {/* Theme switcher */}
          <button
            type="button"
            className="portfolio-theme-btn"
            onClick={toggleTheme}
            aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
            title={isDark ? 'Light theme' : 'Dark theme'}
          >
            {isDark ? <SunIcon size={16} /> : <MoonIcon size={16} />}
            <span className="portfolio-theme-label">{isDark ? 'Light' : 'Dark'}</span>
          </button>

          {/* Desktop-only external social links */}
          <a
            href={SITE_CONFIG.github}
            target="_blank"
            rel="noopener noreferrer"
            className="portfolio-nav-icon-link portfolio-desktop-icon"
            aria-label="GitHub profile"
            title="GitHub (@nathanielfaborada)"
          >
            <GithubIcon size={17} />
          </a>
          <a
            href={SITE_CONFIG.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="portfolio-nav-icon-link portfolio-desktop-icon"
            aria-label="LinkedIn profile"
            title="LinkedIn"
          >
            <LinkedinIcon size={17} />
          </a>

          {/* Desktop Document Links: Resume & Application Letter */}
          <a
            href={PROFILE_DATA.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="portfolio-nav-doc-btn portfolio-desktop-icon"
            aria-label="View Resume (PDF)"
            title="Resume (PDF)"
          >
            <ResumeDocIcon size={15} />
            <span>Resume</span>
          </a>
          <a
            href={PROFILE_DATA.applicationLetterUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="portfolio-nav-doc-btn portfolio-desktop-icon"
            aria-label="View Application Letter (PDF)"
            title="Application Letter (PDF)"
          >
            <ResumeDocIcon size={15} />
            <span>Application Letter</span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className="portfolio-mobile-toggle"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <TimesIcon size={20} /> : <BarsIcon size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="portfolio-mobile-drawer" role="dialog" aria-modal="true" aria-label="Mobile Navigation">
          <nav className="portfolio-mobile-links">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `portfolio-mobile-item ${isActive ? 'portfolio-mobile-active' : ''}`
              }
              onClick={() => setMobileMenuOpen(false)}
            >
              Overview
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `portfolio-mobile-item ${isActive ? 'portfolio-mobile-active' : ''}`
              }
              onClick={() => setMobileMenuOpen(false)}
            >
              Projects
            </NavLink>
            <NavLink
              to="/collaborators"
              className={({ isActive }) =>
                `portfolio-mobile-item ${isActive ? 'portfolio-mobile-active' : ''}`
              }
              onClick={() => setMobileMenuOpen(false)}
            >
              Collaborators
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `portfolio-mobile-item ${isActive ? 'portfolio-mobile-active' : ''}`
              }
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </NavLink>
          </nav>

          {/* Mobile Document Download Strip */}
          <div className="portfolio-mobile-docs">
            <a
              href={PROFILE_DATA.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio-mobile-doc-btn"
              onClick={() => setMobileMenuOpen(false)}
            >
              <ResumeDocIcon size={15} />
              <span>Resume (PDF)</span>
            </a>
            <a
              href={PROFILE_DATA.applicationLetterUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio-mobile-doc-btn"
              onClick={() => setMobileMenuOpen(false)}
            >
              <ResumeDocIcon size={15} />
              <span>Application Letter</span>
            </a>
          </div>

          {/* Mobile Drawer Social Links Strip */}
          <div className="portfolio-mobile-socials">
            <a
              href={SITE_CONFIG.github}
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio-mobile-social-link"
              aria-label="GitHub (@nathanielfaborada)"
            >
              <GithubIcon size={16} />
              <span>GitHub</span>
            </a>
            <a
              href={SITE_CONFIG.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio-mobile-social-link"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={16} />
              <span>LinkedIn</span>
            </a>
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="portfolio-mobile-social-link"
              aria-label="Send Email"
            >
              <MailIcon size={16} />
              <span>Email</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
