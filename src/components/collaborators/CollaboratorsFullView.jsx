import React from 'react';
import CollaboratorCard from './CollaboratorCard';
import {
  COLLABORATOR_SECTIONS,
  COLLABORATORS_MAP,
} from '../../data/collaboratorsData';
import './Collaborators.css';

export default function CollaboratorsFullView({
  profileMap = COLLABORATORS_MAP,
  sections = COLLABORATOR_SECTIONS,
}) {
  return (
    <div id="view-collaborators" className="collaborators-full-view">
      <section className="collab-full-header">
        <h2 className="collab-full-title">Collaborators</h2>

        <div id="collaborators-grid-full" className="collaborators-grid-full">
          {sections.map((section) => (
            <div className="collab-section-block" key={section.title}>
              <div className="collab-section-header">
                <h3 className="collab-section-title">{section.title}</h3>
                {section.subtitle && (
                  <p className="collab-section-desc">{section.subtitle}</p>
                )}
              </div>

              <div className="collab-group-grid">
                {section.users.map((username) => {
                  const userObj = profileMap[username] || {
                    login: username,
                    name: username,
                    avatar_url: `https://github.com/${username}.png?size=160`,
                    html_url: `https://github.com/${username}`,
                  };

                  return (
                    <CollaboratorCard
                      key={`${section.title}-${username}`}
                      user={userObj}
                    />
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
