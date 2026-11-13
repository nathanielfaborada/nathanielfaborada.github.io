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
        className="app-container"
        style={{
          paddingTop: 'clamp(28px, 4vw, 40px)',
          paddingBottom: '80px',
        }}
      >
        <div className="about-grid-wrapper">
          {/* Row 1: Work Experience & Education */}
          <div className="about-row-grid">
            <WorkExperienceCard experiences={PROFILE_DATA.workExperience} />
            <EducationCard education={PROFILE_DATA.education} />
          </div>

          {/* Row 2: Learned Skills & Creator Channels */}
          <div className="about-row-grid">
            <LearnedSkillsCard skills={PROFILE_DATA.learnedSkills} />
            <CreatorChannelsCard channels={PROFILE_DATA.creatorChannels} />
          </div>

          {/* Row 3: Contact & Details & Recommended Tools */}
          <div className="about-row-grid">
            <PersonalDetailsCard details={PROFILE_DATA.personalDetails} />
            <DeveloperReferralsCard referrals={PROFILE_DATA.developerReferrals} />
          </div>
        </div>
      </div>
    </div>
  );
}
