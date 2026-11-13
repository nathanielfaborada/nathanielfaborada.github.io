import React from 'react';
import HomeHero from './components/HomeHero';
import ProjectsSection from './components/ProjectsSection';
import CollaboratorsTeaser from './components/CollaboratorsTeaser';
import ContactCallout from './components/ContactCallout';
import { useDocumentTitle } from '../../../hooks';
import './HomePage.css';

export default function HomePage() {
  useDocumentTitle(
    "Nathaniel Faborada | Junior Software Developer",
    "Portfolio of Nathaniel Faborada (Niel), Junior Software Developer and Computer Science graduate specializing in React, Node.js, and Laravel.",
    "/"
  );

  return (
    <div
      className="app-container home-page-container"
      style={{
        paddingTop: 'clamp(24px, 3.5vw, 36px)',
        paddingBottom: 'clamp(48px, 6vw, 64px)',
      }}
    >
      <HomeHero />
      <ProjectsSection />
      <CollaboratorsTeaser />
      <ContactCallout />
    </div>
  );
}
