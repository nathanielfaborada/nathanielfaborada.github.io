import React from 'react';
import Badge from '../common/Badge';
import Button from '../common/Button';
import ProjectImageCarousel from './ProjectImageCarousel';
import {
  CalendarIcon,
  CheckIcon,
  InfoCircleIcon,
  AwardIcon,
  ExternalLinkIcon,
  GithubIcon,
} from '../common/Icons';
import './ProjectCard.css';

export default function ProjectCard({ project }) {
  if (!project) return null;

  const rawDescription = project.description || '';
  const hasContributions =
    Array.isArray(project.contributions) && project.contributions.length > 0;
  const hasNotice = Boolean(project.notice) && project.notice !== 'iframe';

  const categoryStr = (project.category || '').toLowerCase();
  const isCertificate =
    categoryStr === 'certificate' ||
    categoryStr === 'certificates' ||
    project.is_certificate_model === true ||
    Boolean(project.display_type);

  const credUrl = (project.credential_url || project.live_demo_url || '').trim();
  const isHackerRank =
    typeof credUrl === 'string' &&
    credUrl.toLowerCase().includes('hackerrank.com');

  const isIframeCertificate =
    isCertificate &&
    !isHackerRank &&
    (project.display_type === 'iframe' ||
      project.source_code_url === 'iframe' ||
      project.notice === 'iframe' ||
      (Array.isArray(project.tags) && project.tags.includes('#iframe')) ||
      (typeof credUrl === 'string' &&
        (credUrl.includes('iframe') || credUrl.includes('embed'))));

  const iframeSrc = isIframeCertificate ? credUrl : null;

  // Normalize screenshots
  let screenshots = [];
  if (Array.isArray(project.screenshots) && project.screenshots.length > 0) {
    screenshots = [...project.screenshots];
  } else if (typeof project.screenshots === 'string' && project.screenshots.trim()) {
    try {
      const parsed = JSON.parse(project.screenshots);
      if (Array.isArray(parsed)) screenshots = parsed;
      else screenshots = [project.screenshots];
    } catch {
      screenshots = project.screenshots.includes(',')
        ? project.screenshots.split(',').map((s) => s.trim()).filter(Boolean)
        : [project.screenshots.trim()];
    }
  }

  if (project.image_url && !screenshots.includes(project.image_url)) {
    screenshots.unshift(project.image_url);
  }

  const isFeatured = Boolean(project.featured);
  const cardTitle = project.headline || project.title || 'Project';
  const categoryLabel =
    project.categoryLabel ||
    (project.category
      ? project.category.charAt(0).toUpperCase() + project.category.slice(1)
      : 'Project');

  return (
    <article
      className={`project-card ${isFeatured ? 'project-card-featured' : ''}`.trim()}
      data-category={project.category}
    >
      {/* Top Architectural Metadata Strip */}
      <div className="project-topbar">
        <div className="project-topbar-left">
          <span className="project-category-badge">{categoryLabel}</span>
          {project.project_date && (
            <span className="project-date-badge">
              <CalendarIcon size={13} />
              <span>{project.project_date}</span>
            </span>
          )}
        </div>

        {isFeatured && (
          <span className="project-featured-badge">
            <span className="featured-dot" aria-hidden="true" />
            <span>{project.featuredLabel || 'Flagship Architecture'}</span>
          </span>
        )}
      </div>

      {/* Project Headline */}
      <div className="project-headline-row">
        <h3 className="project-headline">
          {isCertificate && (
            <span className="pin">
              <AwardIcon size={16} />
            </span>
          )}
          <span>{cardTitle}</span>
        </h3>
      </div>

      {/* Media: Live Embed or Carousel */}
      {iframeSrc ? (
        <div className="certificate-iframe-container">
          <iframe
            src={iframeSrc}
            title={cardTitle}
            width="100%"
            height="460px"
            loading="lazy"
            allowFullScreen
          />
        </div>
      ) : isCertificate && !screenshots.length && credUrl ? (
        <div className="certificate-external-preview">
          <div className="cert-preview-icon">
            <AwardIcon size={28} />
          </div>
          <div>
            <h4 className="cert-preview-title">{cardTitle}</h4>
            <p className="cert-preview-text">
              {isHackerRank
                ? 'Official HackerRank skills verification and credential assessment.'
                : 'Verified certificate document available on the issuing organization portal.'}
            </p>
          </div>
          <Button
            href={credUrl}
            target="_blank"
            className="dossier-btn dossier-btn-primary"
          >
            <ExternalLinkIcon size={14} />
            <span>{isHackerRank ? 'Verify on HackerRank' : 'Verify Credential'}</span>
          </Button>
        </div>
      ) : screenshots.length > 0 ? (
        <ProjectImageCarousel
          images={screenshots}
          title={cardTitle}
        />
      ) : null}

      {/* Technical Body Description */}
      {rawDescription && (
        <div className="project-body">
          <p className="project-description">{rawDescription}</p>

          {/* Key Engineering Highlights */}
          {hasContributions && (
            <div className="project-contributions">
              <p className="contributions-title">Architectural & Engineering Highlights:</p>
              <ul className="contributions-list">
                {project.contributions.map((contribution, index) => (
                  <li key={index} className="contribution-item">
                    <span className="contribution-bullet">
                      <CheckIcon size={13} />
                    </span>
                    <span className="contribution-text">{contribution}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Access / Architecture Notice */}
          {hasNotice && (
            <div className="project-notice">
              <span className="notice-icon">
                <InfoCircleIcon size={15} />
              </span>
              <p className="notice-text">{project.notice}</p>
            </div>
          )}
        </div>
      )}

      {/* Tech Stack Tags */}
      {project.tags && project.tags.length > 0 && (
        <div className="project-tags">
          {project.tags.map((tag) => (
            <Badge key={tag} label={tag} />
          ))}
        </div>
      )}

      {/* Project Action Links */}
      {(project.source_code_url || project.backend_code_url || project.live_demo_url) && (
        <div className="project-footer">
          <div className="project-links">
            {project.source_code_url && (
              <a
                href={project.source_code_url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-btn project-btn-secondary"
                aria-label={project.backend_code_url ? `View frontend repository for ${cardTitle}` : `View repository for ${cardTitle}`}
              >
                <GithubIcon size={14} />
                <span>{project.backend_code_url ? (project.frontend_repo_label || 'Frontend SPA') : 'Repository'}</span>
              </a>
            )}
            {project.backend_code_url && (
              <a
                href={project.backend_code_url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-btn project-btn-secondary"
                aria-label={`View backend repository for ${cardTitle}`}
              >
                <GithubIcon size={14} />
                <span>{project.backend_repo_label || 'Backend API'}</span>
              </a>
            )}
            {project.live_demo_url && (
              <a
                href={project.live_demo_url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-btn project-btn-primary"
                aria-label={`View live demo for ${cardTitle}`}
              >
                <ExternalLinkIcon size={14} />
                <span>Live Demo</span>
              </a>
            )}
          </div>
        </div>
      )}
    </article>
  );
}
