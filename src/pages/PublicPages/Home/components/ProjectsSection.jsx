import React from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from '../../../../components/projects/ProjectCard';
import { PROJECTS_DATA } from '../../../../data/projectsData';
import { ArrowRightIcon } from '../../../../components/common/Icons';
import './ProjectsSection.css';

export default function ProjectsSection() {
  const featuredProjects = PROJECTS_DATA.filter((p) => p.featured);

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

        <Link to="/projects" className="hero-btn hero-btn-secondary">
          <span>View All Projects ({PROJECTS_DATA.length})</span>
          <ArrowRightIcon size={14} />
        </Link>
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
