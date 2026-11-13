import React from 'react';
import Avatar from '../common/Avatar';
import { GithubIcon, ExternalLinkIcon } from '../common/Icons';
import './CollaboratorCard.css';

export default function CollaboratorCard({ user }) {
  if (!user) return null;

  const login = user.login || '';
  const displayName = user.name || login;
  const avatarUrl =
    user.avatar_url || `https://github.com/${login}.png?size=160`;
  const profileUrl = user.html_url || `https://github.com/${login}`;
  const roleLabel = user.role || (login ? `@${login}` : 'Collaborator');
  const projectsList = Array.isArray(user.projects)
    ? user.projects
    : user.project
    ? [user.project]
    : [];

  return (
    <a
      href={profileUrl}
      className="collab-card"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`View GitHub profile for ${displayName}`}
    >
      <div className="collab-card-top">
        <div className="collab-user-row">
          <Avatar
            src={avatarUrl}
            alt={displayName}
            className="collab-avatar"
          />
          <div className="collab-user-text">
            <span className="collab-name" title={displayName}>
              {displayName}
            </span>
            {roleLabel && (
              <span className="collab-stat" title={roleLabel}>
                {roleLabel}
              </span>
            )}
          </div>
        </div>

        <span
          className="collab-action-indicator"
          aria-hidden="true"
          title={`@${login} on GitHub`}
        >
          <GithubIcon size={16} className="collab-github-icon" />
          <ExternalLinkIcon size={11} className="collab-external-icon" />
        </span>
      </div>

      {projectsList.length > 0 && (
        <div className="collab-projects-pills">
          {projectsList.map((p) => (
            <span key={p} className="collab-project-pill">
              {p}
            </span>
          ))}
        </div>
      )}
    </a>
  );
}
