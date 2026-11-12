import React from 'react';
import { Link } from 'react-router-dom';
import { GITHUB_GROUPS, COLLABORATORS_MAP } from '../../../../data/collaboratorsData';
import { ArrowRightIcon } from '../../../../components/common/Icons';
import './CollaboratorsTeaser.css';

export default function CollaboratorsTeaser() {
  const featuredTeams = [
    {
      id: 'internship',
      title: 'JCAS Logistics Internship',
      institution: 'JCAS Logistics',
      project: 'Internship Team',
      description: 'Worked with fellow student developers to build delivery tools and internal web systems.',
      users: ['JabbyAlicante', 'beatricecoleene', 'sudonotrey', 'Haimonmon', 'lykhasalustiano', 'DietherPano'],
    },
    {
      id: 'capstone',
      title: 'College of Mary Immaculate',
      institution: 'College of Mary Immaculate',
      project: 'Academic Teams',
      description: 'Collaborated with classmates on school web apps, capstone thesis, and practical systems.',
      users: ['raecellann', 'Wesmabe1129', 'zjdelossantos', 'johnpaul-bodino', 'DietherPano', 'padillajet'],
    },
  ];

  return (
    <section className="collab-teaser-section" aria-labelledby="collab-teaser-title">
      <div className="collab-teaser-card">
        <div className="collab-teaser-header">
          <div>
            <h2 id="collab-teaser-title" className="collab-teaser-title">
              Collaborative Teams & Co-Developers
            </h2>
            <p className="collab-teaser-subtitle">
              Teammates and fellow student developers Nathaniel collaborated with on real projects.
            </p>
          </div>

          <Link to="/collaborators" className="hero-btn hero-btn-secondary">
            <span>View Full Roster</span>
            <ArrowRightIcon size={14} />
          </Link>
        </div>

        <div className="collab-teaser-grid">
          {featuredTeams.map((team) => (
            <div key={team.id} className="team-preview-card">
              <div className="team-preview-header">
                <span className="team-institution-badge">{team.institution}</span>
                <span className="team-project-pill">{team.project}</span>
              </div>

              <h3 className="team-preview-title">{team.title}</h3>
              <p className="team-preview-desc">{team.description}</p>

              <div className="team-members-row">
                <span className="team-members-label">Co-Developers:</span>
                <div className="team-avatars-pile">
                  {team.users.map((username) => {
                    const member = COLLABORATORS_MAP[username];
                    if (!member) return null;
                    return (
                      <a
                        key={username}
                        href={member.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="team-avatar-link"
                        title={`${member.name} (${member.role})`}
                        aria-label={`GitHub profile for ${member.name}`}
                      >
                        <img
                          src={member.avatar_url}
                          alt={member.name}
                          className="team-avatar-img"
                          loading="lazy"
                        />
                      </a>
                    );
                  })}
                </div>
              </div>

              <div className="team-card-footer">
                <Link to="/collaborators" className="team-details-link">
                  <span>Explore Team Details</span>
                  <ArrowRightIcon size={13} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
