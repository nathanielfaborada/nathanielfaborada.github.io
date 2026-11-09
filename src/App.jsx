import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import ProfileHeader from './components/profile/ProfileHeader';
import ProfileNav from './components/profile/ProfileNav';
import Sidebar from './components/profile/Sidebar';
import ProjectsFeed from './components/projects/ProjectsFeed';
import CollaboratorsFullView from './components/collaborators/CollaboratorsFullView';
import { useWindowSize } from './hooks/useWindowSize';
import { COLLABORATORS_MAP, STATIC_ORGANIZATIONS } from './data/collaboratorsData';

function getInitialTheme() {
  try {
    const saved = localStorage.getItem('portfolio_theme');
    if (saved === 'dark' || saved === 'light') {
      return saved;
    }
  } catch {
    // Ignore storage read errors in restricted environments.
  }
  return 'light';
}

function MainApp() {
  const [activeTab, setActiveTab] = useState('all');
  const [theme, setTheme] = useState(getInitialTheme);
  const { isCompact, isMobile } = useWindowSize();
  const isCompactLayout = isCompact ?? isMobile;

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem('portfolio_theme', theme);
    } catch {
      // Ignore storage write errors in restricted environments.
    }
  }, [theme]);

  useEffect(() => {
    if (!isCompactLayout && activeTab === 'about') {
      setActiveTab('all');
    }
  }, [isCompactLayout, activeTab]);

  const handleToggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleTabSelect = (tab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSeeAllCollaborators = () => {
    handleTabSelect('collaborators');
  };

  const effectiveTab = !isCompactLayout && activeTab === 'about' ? 'all' : activeTab;
  const isCollaboratorsView = effectiveTab === 'collaborators';
  const showSidebar = !isCompactLayout || effectiveTab === 'about';
  const showFeed = !isCompactLayout || effectiveTab === 'all' || effectiveTab === 'certificates';

  return (
    <div className="app-container">
      <ProfileHeader theme={theme} onToggleTheme={handleToggleTheme} />

      <ProfileNav activeTab={effectiveTab} onSelectTab={handleTabSelect} />

      {!isCollaboratorsView && (
        <div id="view-default" className="page-layout">
          <Sidebar
            profileMap={COLLABORATORS_MAP}
            onSeeAllCollaborators={handleSeeAllCollaborators}
            style={{
              display: showSidebar ? (isCompactLayout ? 'flex' : '') : 'none',
            }}
          />

          {showFeed && <ProjectsFeed activeTab={effectiveTab} />}
        </div>
      )}

      {isCollaboratorsView && (
        <CollaboratorsFullView
          profileMap={COLLABORATORS_MAP}
          organizations={STATIC_ORGANIZATIONS}
        />
      )}
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="*" element={<MainApp />} />
    </Routes>
  );
}
