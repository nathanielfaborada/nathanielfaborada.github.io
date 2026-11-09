import React from 'react';
import SectionCard from '../common/SectionCard';
import { BriefcaseIcon } from '../common/Icons';
import { PROFILE_DATA } from '../../data/profileData';
import './WorkExperienceCard.css';

export default function WorkExperienceCard({
  experiences = PROFILE_DATA.workExperience || [],
}) {
  return (
    <SectionCard title="Work Experience">
      {experiences.map((companyItem) => {
        const companyName = companyItem.company || 'Company';
        const roles = Array.isArray(companyItem.roles) ? companyItem.roles : [];

        return (
          <div className="work-experience-item" key={companyName}>
            <div className="work-company-icon">
              {companyItem.companyLogo ? (
                <img
                  src={companyItem.companyLogo}
                  alt={companyName}
                  className="work-company-img"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                />
              ) : (
                <BriefcaseIcon size={20} />
              )}
            </div>
            <div className="work-company-content">
              <h3 className="work-company-title">{companyName}</h3>

              <div className="work-timeline">
                {roles.map((role, index) => (
                  <div
                    className="timeline-role-item"
                    key={`${companyName}-${role.title}-${index}`}
                  >
                    <div className="timeline-marker" />
                    <div className="timeline-role-content">
                      <span className="timeline-role-title">{role.title}</span>
                      <span className="timeline-role-period">{role.period}</span>
                      {role.description && (
                        <p className="timeline-role-desc">{role.description}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </SectionCard>
  );
}
