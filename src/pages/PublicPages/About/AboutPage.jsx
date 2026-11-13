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
    "In-depth background, technical competencies, work history, and academic credentials of Nathaniel Faborada.",
    "/about"
  );

  return (
    <div className="portfolio-about-page">
      <div
        className="app-container about-page-container"
        style={{
          paddingTop: 'clamp(24px, 3.5vw, 36px)',
          paddingBottom: 'clamp(48px, 6vw, 64px)',
        }}
      >
        <div className="about-grid-wrapper">
          {/* Row 1: Work Experience & Education */}
          <div className="about-row-grid">
            <div className="about-card-col about-order-experience">
              <WorkExperienceCard experiences={PROFILE_DATA.workExperience} />
            </div>
            <div className="about-card-col about-order-education">
              <EducationCard education={PROFILE_DATA.education} />
            </div>
          </div>

          {/* Row 2: Learned Skills & Creator Channels */}
          <div className="about-row-grid">
            <div className="about-card-col about-order-skills">
              <LearnedSkillsCard skills={PROFILE_DATA.learnedSkills} />
            </div>
            <div className="about-card-col about-order-creator">
              <CreatorChannelsCard channels={PROFILE_DATA.creatorChannels} />
            </div>
          </div>

          {/* Row 3: Contact & Details & Recommended Tools */}
          <div className="about-row-grid">
            <div className="about-card-col about-order-contact">
              <PersonalDetailsCard details={PROFILE_DATA.personalDetails} />
            </div>
            <div className="about-card-col about-order-referrals">
              <DeveloperReferralsCard referrals={PROFILE_DATA.developerReferrals} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
