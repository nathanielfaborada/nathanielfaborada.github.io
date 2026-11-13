import React from 'react';
import ProjectCard from '../../../components/projects/ProjectCard';
import { PROJECTS_DATA } from '../../../data/projectsData';
import { useDocumentTitle } from '../../../hooks';
import './ProjectsPage.css';

export default function ProjectsPage() {
  useDocumentTitle(
    "All Projects | Nathaniel Faborada",
    "Chronological directory of software engineering projects, web applications, and developer tools built by Nathaniel Faborada from newest to oldest.",
    "/projects"
  );

  const directoryProjects = PROJECTS_DATA.filter((project) => !project.featured);

  return (
    <div className="portfolio-projects-page">
      <div
        className="app-container"
        style={{
          paddingTop: 'clamp(28px, 4vw, 40px)',
          paddingBottom: '80px',
        }}
      >
        <div className="projects-directory-list">
          {directoryProjects.map((project) => (
            <ProjectCard
              key={project.id || project.headline}
              project={project}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
