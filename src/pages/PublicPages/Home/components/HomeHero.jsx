import React from 'react';
import Avatar from '../../../../components/common/Avatar';
import { PROFILE_DATA } from '../../../../data/profileData';
import './HomeHero.css';

export default function HomeHero() {
  return (
    <section className="home-hero-section" aria-labelledby="hero-title">
      <div className="home-hero-card">
        {/* Main Hero Header */}
        <div className="home-hero-main">
          <div className="home-hero-avatar-frame">
            <Avatar
              src={PROFILE_DATA.avatarUrl}
              alt={PROFILE_DATA.name}
              className="home-hero-avatar-img"
            />
          </div>

          <div className="home-hero-intro">
            <div className="home-hero-names">
              <h1 id="hero-title" className="home-hero-name">
                {PROFILE_DATA.name}
              </h1>
              <span className="home-hero-role">
                {PROFILE_DATA.roleBadge}
              </span>
            </div>

            <p className="home-hero-statement">
              Computer Science graduate from College of Mary Immaculate and Junior Software Developer based in Bulacan.
              I build clean, reliable websites and web applications designed to be easy to use and solve everyday problems.
            </p>

            {/* Core Capability Chips (Minimal & Accessible) */}
            <div className="home-hero-chips">
              <span className="home-hero-chip">Web Applications</span>
              <span className="home-hero-chip">React & JavaScript</span>
              <span className="home-hero-chip">Node.js & Laravel</span>
              <span className="home-hero-chip">Databases & Systems</span>
            </div>
          </div>
        </div>

        {/* Architectural Engineering Metadata Strip (Minimal, Human & Plain English) */}
        <div className="home-hero-spec-strip" role="region" aria-label="Key Qualifications & Highlights">
          <div className="spec-col">
            <span className="spec-kicker">Projects</span>
            <span className="spec-primary">4 Web Projects</span>
            <span className="spec-secondary">School capstone & personal web apps</span>
          </div>

          <div className="spec-col">
            <span className="spec-kicker">Experience</span>
            <span className="spec-primary">6 Months Work Exp</span>
            <span className="spec-secondary">JCAS Logistics developer</span>
          </div>

          <div className="spec-col">
            <span className="spec-kicker">Education</span>
            <span className="spec-primary">BS Computer Science</span>
            <span className="spec-secondary">College of Mary Immaculate (2026)</span>
          </div>

          <div className="spec-col">
            <span className="spec-kicker">Specialty</span>
            <span className="spec-primary">Full-Stack Development</span>
            <span className="spec-secondary">Front-end design & back-end code</span>
          </div>
        </div>
      </div>
    </section>
  );
}
