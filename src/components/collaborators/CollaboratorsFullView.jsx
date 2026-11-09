import React from 'react';
import CollaboratorCard from './CollaboratorCard';
import OrganizationCard from './OrganizationCard';
import {
  GITHUB_GROUPS,
  COLLABORATORS_MAP,
  STATIC_ORGANIZATIONS,
} from '../../data/collaboratorsData';
import './Collaborators.css';

export default function CollaboratorsFullView({
  profileMap = COLLABORATORS_MAP,
  organizations = STATIC_ORGANIZATIONS,
}) {
  return (
    <div id="view-collaborators" className="collaborators-full-view">
      <section className="collab-full-header">
        <h2 className="collab-full-title">Collaborators</h2>

        <div id="collaborators-grid-full" className="collaborators-grid-full">
          {GITHUB_GROUPS.map((group) => (
            <div className="collab-group" key={group.label}>
              <h3 className="collab-group-label">{group.label}</h3>
              <div className="collab-group-grid">
                {group.users.map((entry) => {
                  const username =
                    typeof entry === 'string' ? entry : entry.login;
                  const userObj =
                    typeof entry === 'object' && entry !== null
                      ? { ...(profileMap[username] || {}), ...entry }
                      : profileMap[username] || {
                          login: username,
                          name: username,
                          avatar_url: `https://github.com/${username}.png?size=160`,
                          html_url: `https://github.com/${username}`,
                          project: group.label,
                        };

                  return (
                    <CollaboratorCard
                      key={`${group.label}-${username}`}
                      user={userObj}
                    />
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="collab-full-header">
        <h2 className="collab-full-title">Organizations</h2>

        <div id="organization-grid-full">
          {organizations.map((org) => {
            const orgObj =
              typeof org === 'string'
                ? {
                    login: org,
                    name: org,
                    avatar_url: `https://github.com/${org}.png?size=160`,
                    html_url: `https://github.com/${org}`,
                  }
                : org;

            return (
              <OrganizationCard
                key={orgObj.id || orgObj.login}
                org={orgObj}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
}
