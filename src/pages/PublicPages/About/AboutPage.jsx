import React from 'react';
import PersonalDetailsCard from '../../../components/profile/PersonalDetailsCard';
import WorkExperienceCard from '../../../components/profile/WorkExperienceCard';
import LearnedSkillsCard from '../../../components/profile/LearnedSkillsCard';
import EducationCard from '../../../components/profile/EducationCard';
import CreatorChannelsCard from '../../../components/profile/CreatorChannelsCard';
import DeveloperReferralsCard from '../../../components/profile/DeveloperReferralsCard';
import { PROFILE_DATA } from '../../../data/profileData';
import { useDocumentTitle } from '../../../hooks';
import './AboutPage.css';

export default function AboutPage() {
  useDocumentTitle(
    "About Nathaniel Faborada | Junior Software Developer",
    "In-depth background, technical competencies, work history, creator channels, and academic credentials of Nathaniel Faborada.",
    "/about"
  );

  return (
    <div className="portfolio-about-page">
      <div
        className="app-container"
        style={{
          paddingTop: 'clamp(28px, 4vw, 40px)',
          paddingBottom: '80px',
        }}
      >
        <div className="about-sections-wrapper">
          {/* Section 1: Professional Background & Technical Skills */}
          <section className="about-section" aria-label="Professional Background and Technical Skills">
            <div className="about-cards-grid">
              <div className="about-col">
                <WorkExperienceCard experiences={PROFILE_DATA.workExperience} />
                <EducationCard education={PROFILE_DATA.education} />
                <PersonalDetailsCard details={PROFILE_DATA.personalDetails} />
              </div>

              <div className="about-col">
                <LearnedSkillsCard skills={PROFILE_DATA.learnedSkills} />
              </div>
            </div>
          </section>

          {/* Section 2: Online Presence & Recommended Developer Resources */}
          <section className="about-section" aria-label="Online Presence and Developer Resources">
            <div className="about-cards-grid">
              <div className="about-col">
                <CreatorChannelsCard channels={PROFILE_DATA.creatorChannels} />
              </div>

              <div className="about-col">
                <DeveloperReferralsCard referrals={PROFILE_DATA.developerReferrals} />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
