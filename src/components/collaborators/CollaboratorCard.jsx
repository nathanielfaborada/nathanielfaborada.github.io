import React from 'react';
import Avatar from '../common/Avatar';
import Button from '../common/Button';
import { ExternalLinkIcon } from '../common/Icons';
import './CollaboratorCard.css';

export default function CollaboratorCard({ user }) {
  if (!user) return null;

  const login = user.login || '';
  const displayName = user.name || login;
  const avatarUrl =
    user.avatar_url || `https://github.com/${login}.png?size=160`;
  const profileUrl = user.html_url || `https://github.com/${login}`;
  const roleLabel = user.role || (login ? `@${login}` : 'Collaborator');
  const projectLabel = user.project || '';

  return (
    <div className="collab-card">
      <Avatar
        src={avatarUrl}
        alt={displayName}
        className="collab-avatar"
      />
      <div className="collab-info">
        <span className="collab-name" title={displayName}>
          {displayName}
        </span>
        {roleLabel && (
          <span className="collab-stat" title={roleLabel}>
            {roleLabel}
          </span>
        )}
        {projectLabel && (
          <span className="collab-stat" title={projectLabel}>
            {projectLabel}
          </span>
        )}
      </div>
      <Button
        href={profileUrl}
        className="collab-visit"
        target="_blank"
        aria-label={`View GitHub Profile for ${displayName}`}
      >
        <ExternalLinkIcon size={13} />
        <span>View GitHub Profile</span>
      </Button>
    </div>
  );
}
