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
        <div className="about-cards-grid">
          <div className="about-col">
            <WorkExperienceCard experiences={PROFILE_DATA.workExperience} />
            <EducationCard education={PROFILE_DATA.education} />
            <PersonalDetailsCard details={PROFILE_DATA.personalDetails} />
          </div>

          <div className="about-col">
            <LearnedSkillsCard skills={PROFILE_DATA.learnedSkills} />
            <CreatorChannelsCard channels={PROFILE_DATA.creatorChannels} />
            <DeveloperReferralsCard referrals={PROFILE_DATA.developerReferrals} />
          </div>
        </div>
      </div>
    </div>
  );
}
