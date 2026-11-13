import React from 'react';
import ProjectCard from '../../../../components/projects/ProjectCard';
import { PROJECTS_DATA } from '../../../../data/projectsData';
import './ProjectsSection.css';

const FEATURED_ORDER = ['immaculearn', 'spill-rate', 'content-scheduler', 'invitr'];

export default function ProjectsSection() {
  const featuredProjects = FEATURED_ORDER
    .map((id) => PROJECTS_DATA.find((p) => p.id === id))
    .filter(Boolean);

  return (
    <section id="projects" className="home-projects-section" aria-labelledby="projects-title">
      {/* Section Header */}
      <div className="home-projects-header">
        <div className="home-projects-header-info">
          <h2 id="projects-title" className="home-projects-title">
            <span>Featured Projects</span>
            <span className="projects-count-pill">{featuredProjects.length}</span>
          </h2>
          <p className="home-projects-desc">
            Web applications and systems built for college capstone and personal projects.
          </p>
        </div>
      </div>

      {/* Projects List */}
      <div className="home-projects-list">
        {featuredProjects.map((project) => (
          <ProjectCard
            key={project.id || project.title || project.headline}
            project={project}
          />
        ))}
      </div>
    </section>
  );
}
