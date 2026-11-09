import React from 'react';
import Avatar from '../common/Avatar';
import Button from '../common/Button';
import {
  ResumeDocIcon,
  SunIcon,
  MoonIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  LocationIcon,
} from '../common/Icons';
import { PROFILE_DATA } from '../../data/profileData';
import './ProfileHeader.css';

function renderBioWithHighlights(bioText = '', highlights = []) {
  if (!bioText) return null;
  if (!Array.isArray(highlights) || highlights.length === 0) {
    return bioText;
  }

  const escaped = highlights
    .filter(Boolean)
    .map((term) => term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));

  if (escaped.length === 0) {
    return bioText;
  }

  const pattern = new RegExp(`(${escaped.join('|')})`, 'g');
  const parts = bioText.split(pattern);
  const highlightSet = new Set(highlights);

  return parts.map((part, index) =>
    highlightSet.has(part) ? (
      <span key={index} className="bio-highlight">
        {part}
      </span>
    ) : (
      part
    )
  );
}

export default function ProfileHeader({
  profile = PROFILE_DATA,
  theme = 'light',
  onToggleTheme,
}) {
  const isDark = theme === 'dark';

  return (
    <header className="dossier-hero">
      {/* Top architectural status bar */}
      <div className="dossier-topbar">
        <div className="dossier-status-pill">
          <span className="status-dot-indicator" aria-hidden="true" />
          <span className="status-label">{profile.statusBadge || 'Available for projects'}</span>
        </div>

        <div className="dossier-topbar-controls">
          {onToggleTheme && (
            <button
              type="button"
              className="theme-toggle-btn"
              onClick={onToggleTheme}
              aria-label={
                isDark ? 'Switch to light theme' : 'Switch to dark theme'
              }
            >
              {isDark ? <SunIcon size={16} /> : <MoonIcon size={16} />}
              <span>{isDark ? 'Light' : 'Dark'}</span>
            </button>
          )}
        </div>
      </div>

      {/* Main hero dossier body */}
      <div className="dossier-body">
        <div className="dossier-portrait-frame">
          <Avatar
            src={profile.avatarUrl}
            alt={profile.name}
            className="dossier-portrait-img"
          />
        </div>

        <div className="dossier-summary">
          <div className="dossier-title-row">
            <h1 className="dossier-name">{profile.name}</h1>
            {profile.nickname && (
              <span className="dossier-nickname">{profile.nickname}</span>
            )}
            <span className="dossier-role-tag">{profile.roleBadge}</span>
          </div>

          <div className="dossier-location-row">
            <LocationIcon size={15} className="dossier-location-icon" />
            <span>Pandi, Bulacan, Philippines (UTC+8)</span>
          </div>

          <p className="dossier-bio">
            {renderBioWithHighlights(profile.bio, profile.bioHighlights)}
          </p>

          <div className="dossier-actions">
            <Button
              href={profile.resumeUrl}
              className="dossier-btn dossier-btn-primary"
              target="_blank"
            >
              <ResumeDocIcon size={15} />
              <span>{profile.resumeLabel || 'View Resume (PDF)'}</span>
            </Button>

            <Button
              href="mailto:faboradanathaniel@gmail.com"
              className="dossier-btn dossier-btn-secondary"
            >
              <MailIcon size={15} />
              <span>Contact Email</span>
            </Button>

            <div className="dossier-social-strip">
              <a
                href="https://github.com/nathanielfaborada"
                target="_blank"
                rel="noopener noreferrer"
                className="dossier-icon-btn"
                aria-label="GitHub profile of Nathaniel Faborada"
                title="GitHub (@nathanielfaborada)"
              >
                <GithubIcon size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/nathaniel-faborada/"
                target="_blank"
                rel="noopener noreferrer"
                className="dossier-icon-btn"
                aria-label="LinkedIn profile of Nathaniel Faborada"
                title="LinkedIn"
              >
                <LinkedinIcon size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
