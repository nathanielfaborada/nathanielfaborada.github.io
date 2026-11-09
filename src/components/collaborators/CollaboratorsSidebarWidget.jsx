import React from 'react';
import SectionCard from '../common/SectionCard';
import CollaboratorCard from './CollaboratorCard';
import {
  GITHUB_USERS,
  COLLABORATORS_MAP,
} from '../../data/collaboratorsData';
import './Collaborators.css';

export default function CollaboratorsSidebarWidget({
  profileMap = COLLABORATORS_MAP,
  onSeeAll,
}) {
  const topUsers = GITHUB_USERS.slice(0, 3);

  const headerAction = (
    <a
      className="see-all-link"
      href="#collaborators"
      id="see-all-collabs"
      onClick={(e) => {
        e.preventDefault();
        if (onSeeAll) onSeeAll();
      }}
    >
      View All ({GITHUB_USERS.length})
    </a>
  );

  return (
    <SectionCard title="Collaborators" headerAction={headerAction}>
      <div id="collaborators-grid" className="collaborators-grid">
        {topUsers.map((username) => {
          const userObj = profileMap[username] || {
            login: username,
            name: username,
            avatar_url: `https://github.com/${username}.png?size=160`,
            html_url: `https://github.com/${username}`,
          };

          return <CollaboratorCard key={username} user={userObj} />;
        })}
      </div>
    </SectionCard>
  );
}
