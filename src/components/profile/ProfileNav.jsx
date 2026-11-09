import React from 'react';
import { HAS_CERTIFICATES } from '../../data/projectsData';
import './ProfileNav.css';

export default function ProfileNav({
  activeTab = 'all',
  onSelectTab,
}) {
  const handleTabClick = (e, tab) => {
    e.preventDefault();
    if (onSelectTab) {
      onSelectTab(tab);
    }
  };

  return (
    <nav className="profile-nav" aria-label="Profile navigation">
      <ul>
        <li
          className={activeTab === 'all' ? 'active' : ''}
          data-tab="all"
        >
          <a
            href="#all"
            className={activeTab === 'all' ? 'active' : ''}
            aria-current={activeTab === 'all' ? 'page' : undefined}
            onClick={(e) => handleTabClick(e, 'all')}
          >
            All
          </a>
        </li>
        <li
          className={`compact-only ${activeTab === 'about' ? 'active' : ''}`.trim()}
          data-tab="about"
        >
          <a
            href="#about"
            className={activeTab === 'about' ? 'active' : ''}
            aria-current={activeTab === 'about' ? 'page' : undefined}
            onClick={(e) => handleTabClick(e, 'about')}
          >
            About
          </a>
        </li>
        <li
          className={activeTab === 'collaborators' ? 'active' : ''}
          data-tab="collaborators"
        >
          <a
            href="#collaborators"
            className={activeTab === 'collaborators' ? 'active' : ''}
            aria-current={activeTab === 'collaborators' ? 'page' : undefined}
            onClick={(e) => handleTabClick(e, 'collaborators')}
          >
            Collaborators
          </a>
        </li>
        {HAS_CERTIFICATES && (
          <li
            className={activeTab === 'certificates' ? 'active' : ''}
            data-tab="certificates"
          >
            <a
              href="#certificates"
              className={activeTab === 'certificates' ? 'active' : ''}
              aria-current={activeTab === 'certificates' ? 'page' : undefined}
              onClick={(e) => handleTabClick(e, 'certificates')}
            >
              Certificates
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
}
