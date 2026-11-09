import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectFilter from './ProjectFilter';
import { PROJECTS_DATA } from '../../data/projectsData';
import './ProjectsFeed.css';

export default function ProjectsFeed({
  activeTab = 'all',
}) {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const isCertificatesTab = activeTab === 'certificates';

  const filteredProjects = isCertificatesTab
    ? PROJECTS_DATA.filter((p) => {
        const cat = (p.category || '').toLowerCase();
        return cat === 'certificate' || cat === 'certificates';
      })
    : PROJECTS_DATA.filter((project) => {
        const cat = (project.category || '').toLowerCase();
        if (selectedFilter === 'all') return true;
        if (selectedFilter === 'certificates') {
          return cat === 'certificate' || cat === 'certificates';
        }
        return cat === selectedFilter.toLowerCase();
      });

  const headingLabel =
    isCertificatesTab || selectedFilter === 'certificates'
      ? 'Certificates'
      : 'Engineering Projects';

  return (
    <main className="main-content">
      <div className="creations-header">
        <h2 className="creations-title">
          {headingLabel}
          <span className="creations-count">({filteredProjects.length})</span>
        </h2>

        <div className="creations-controls">
          {!isCertificatesTab && (
            <ProjectFilter
              selectedFilter={selectedFilter}
              onSelectFilter={setSelectedFilter}
              isOpen={isDropdownOpen}
              onToggleDropdown={() => setIsDropdownOpen((prev) => !prev)}
              onCloseDropdown={() => setIsDropdownOpen(false)}
            />
          )}
        </div>
      </div>

      {filteredProjects.length > 0 ? (
        filteredProjects.map((project) => (
          <ProjectCard
            key={project.id || project.title || project.headline}
            project={project}
          />
        ))
      ) : (
        <div className="section-card empty-feed-state">
          <p className="empty-feed-text">
            {isCertificatesTab || selectedFilter === 'certificates'
              ? 'No verified certificates are published in this category yet.'
              : 'No engineering projects match the selected category filter.'}
          </p>
          {!isCertificatesTab && selectedFilter !== 'all' && (
            <button
              type="button"
              className="see-more-btn"
              onClick={() => setSelectedFilter('all')}
            >
              Show All Projects
            </button>
          )}
        </div>
      )}
    </main>
  );
}
