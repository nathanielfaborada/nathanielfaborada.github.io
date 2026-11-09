import React from 'react';
import Avatar from '../common/Avatar';
import Button from '../common/Button';
import { OrgGlobeIcon, ExternalLinkIcon } from '../common/Icons';
import './OrganizationCard.css';

export default function OrganizationCard({ org }) {
  if (!org) {
    return null;
  }

  const login = org.login || '';
  const displayName = org.name || login;
  const repoCount = org.repos_count ?? org.public_repos ?? 0;
  const logoUrl =
    org.logo_url ||
    org.avatar_url ||
    `https://github.com/${login}.png?size=160`;
  const visitUrl =
    org.visit_url || org.html_url || `https://github.com/${login}`;
  const visibility = org.visibility_type || 'Public';

  return (
    <div className="group-card">
      <div className="group-card-main">
        <Avatar
          src={logoUrl}
          alt={displayName}
          className="group-thumb"
        />
        <div className="group-info">
          <p className="group-name" title={displayName}>
            {displayName}
          </p>
          {org.description && (
            <p className="group-desc" title={org.description}>
              {org.description}
            </p>
          )}
          <div className="group-meta">
            <OrgGlobeIcon size={14} />
            <span>
              {visibility} Organization{repoCount > 0 ? ` · ${repoCount} repositories` : ''}
            </span>
          </div>
        </div>
      </div>

      <Button
        href={visitUrl}
        className="org-visit-btn"
        target="_blank"
        aria-label={`View Organization ${displayName}`}
      >
        <ExternalLinkIcon size={14} />
        <span>View Organization</span>
      </Button>
    </div>
  );
}
