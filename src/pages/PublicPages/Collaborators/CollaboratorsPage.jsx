import React from 'react';
import CollaboratorsFullView from '../../../components/collaborators/CollaboratorsFullView';
import { COLLABORATORS_MAP, STATIC_ORGANIZATIONS } from '../../../data/collaboratorsData';
import { useDocumentTitle } from '../../../hooks';

export default function CollaboratorsPage() {
  useDocumentTitle(
    "Collaborators & Organizations | Nathaniel Faborada",
    "Academic capstone teams, internship colleagues, and project organizations collaborating with Nathaniel Faborada.",
    "/collaborators"
  );

  return (
    <div className="portfolio-collaborators-page">
      <div
        className="app-container"
        style={{
          paddingTop: 'clamp(28px, 4vw, 40px)',
          paddingBottom: '80px',
        }}
      >
        <CollaboratorsFullView
          profileMap={COLLABORATORS_MAP}
          organizations={STATIC_ORGANIZATIONS}
        />
      </div>
    </div>
  );
}
