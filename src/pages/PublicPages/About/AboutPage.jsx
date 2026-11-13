import React from 'react';
import SectionCard from '../../../components/common/SectionCard';
import Badge from '../../../components/common/Badge';
import {
  BriefcaseIcon,
  EducationIcon,
  LocationIcon,
  MailIcon,
  PhoneIcon,
  LanguageIcon,
  GithubIcon,
  LinkedinIcon,
  FacebookIcon,
  YoutubeIcon,
  TiktokIcon,
  ServerIcon,
  GiftIcon,
  ExternalLinkIcon,
  GlobeIcon,
} from '../../../components/common/Icons';
import { PROFILE_DATA } from '../../../data/profileData';
import { useDocumentTitle } from '../../../hooks';
import './AboutPage.css';

const socialIconMap = {
  facebook: FacebookIcon,
  youtube: YoutubeIcon,
  tiktok: TiktokIcon,
};

const referralIconMap = {
  server: ServerIcon,
  gift: GiftIcon,
};

export default function AboutPage() {
  useDocumentTitle(
    "About Nathaniel Faborada | Junior Software Developer",
    "In-depth background, career journey, technical competencies, creator channels, and developer perks of Nathaniel Faborada.",
    "/about"
  );

  const {
    name,
    roleBadge,
    statusBadge,
    bio,
    workExperience = [],
    education = {},
    learnedSkills = {},
    creatorChannels = [],
    developerReferrals = [],
    personalDetails = [],
  } = PROFILE_DATA;

  const primaryRole = workExperience[0]?.roles?.[0] || {};
  const skillCategories = learnedSkills.categories || [];

  return (
    <div className="portfolio-about-page">
      <div
        className="app-container"
        style={{
          paddingTop: 'clamp(28px, 4vw, 40px)',
          paddingBottom: '80px',
        }}
      >
        <div className="about-page-flow">
          {/* Header Introduction Banner */}
          <header className="about-hero-header">
            <div className="about-hero-badge-row">
              <span className="about-role-pill">{roleBadge}</span>
              <span className="about-status-pill">
                <span className="status-dot" aria-hidden="true" />
                <span>{statusBadge}</span>
              </span>
            </div>
            <h1 className="about-hero-title">About {name}</h1>
            <p className="about-hero-lead">{bio}</p>
            <div className="about-hero-meta-row">
              <span className="about-meta-chip">
                <LocationIcon size={14} />
                <span>Pandi, Bulacan, Philippines</span>
              </span>
              <span className="about-meta-chip">
                <LanguageIcon size={14} />
                <span>Tagalog (Fluent), English (Conversational)</span>
              </span>
              <span className="about-meta-chip">
                <EducationIcon size={14} />
                <span>BS Computer Science Graduate</span>
              </span>
            </div>
          </header>

          {/* Section 1: Career & Academic Journey */}
          <section className="about-full-section" aria-labelledby="journey-heading">
            <SectionCard title="Career & Academic Journey">
              <div className="about-journey-grid">
                {/* Work Experience Column */}
                <div className="journey-card-item">
                  <div className="journey-item-topbar">
                    <div className="journey-icon-wrap" aria-hidden="true">
                      <BriefcaseIcon size={20} />
                    </div>
                    <div className="journey-heading-wrap">
                      <span className="journey-type-label">Work Experience</span>
                      <h3 className="journey-entity-name">{workExperience[0]?.company || 'JCAS Logistics'}</h3>
                    </div>
                  </div>
                  <div className="journey-role-pill-wrap">
                    <span className="journey-role-title">{primaryRole.title || 'Software Developer Intern'}</span>
                    <span className="journey-period-badge">{primaryRole.period || 'April 2025 - September 2025'}</span>
                  </div>
                  <p className="journey-desc">
                    {primaryRole.description ||
                      'Built internal HR modules, driver companion tools, and operations dashboards using FlutterFlow and Supabase to support dispatch workflows and driver management.'}
                  </p>
                </div>

                {/* Education Column */}
                <div className="journey-card-item">
                  <div className="journey-item-topbar">
                    <div className="journey-icon-wrap" aria-hidden="true">
                      <EducationIcon size={20} />
                    </div>
                    <div className="journey-heading-wrap">
                      <span className="journey-type-label">Academic Degree</span>
                      <h3 className="journey-entity-name">{education.institution || 'College of Mary Immaculate'}</h3>
                    </div>
                  </div>
                  <div className="journey-role-pill-wrap">
                    <span className="journey-role-title">{education.degree || 'Bachelor of Science in Computer Science'}</span>
                    <span className="journey-period-badge">{education.period || 'Graduated (2022 - 2026)'}</span>
                  </div>
                  <p className="journey-desc">
                    Rigorous computer science curriculum emphasizing modern web architectures, relational database engineering, software engineering methodologies, and collaborative capstone deployments.
                  </p>
                </div>
              </div>
            </SectionCard>
          </section>

          {/* Section 2: Technical Skills & Stack */}
          <section className="about-full-section" aria-labelledby="skills-heading">
            <SectionCard title="Technical Competencies & Skills">
              {learnedSkills.description && (
                <p className="about-skills-intro">{learnedSkills.description}</p>
              )}
              <div className="about-skills-mosaic">
                {skillCategories.map((cat) => (
                  <div className="skill-mosaic-category" key={cat.label}>
                    <h4 className="skill-mosaic-title">{cat.label}</h4>
                    <div className="skill-mosaic-pills">
                      {cat.items.map((skillName) => (
                        <Badge key={skillName} label={skillName} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </SectionCard>
          </section>

          {/* Section 3: Creator Channels & Online Media */}
          <section className="about-full-section" aria-labelledby="creator-heading">
            <SectionCard title="Creator Channels & Online Media">
              <p className="about-section-subhead">
                Automated media channels, educational science content, and developer updates managed across platforms.
              </p>
              <div className="about-channels-grid">
                {creatorChannels.map((channel) => {
                  const IconComp = socialIconMap[channel.platform] || GlobeIcon;
                  return (
                    <a
                      key={channel.id}
                      href={channel.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="about-channel-card"
                      aria-label={`${channel.title} (${channel.handle})`}
                    >
                      <div className="about-channel-top">
                        <div className="about-channel-icon-wrap" aria-hidden="true">
                          <IconComp size={20} />
                        </div>
                        <div className="about-channel-names">
                          <span className="about-channel-title">{channel.title}</span>
                          {channel.handle && (
                            <span className="about-channel-handle">{channel.handle}</span>
                          )}
                        </div>
                        <div className="about-channel-arrow" aria-hidden="true">
                          <ExternalLinkIcon size={14} />
                        </div>
                      </div>
                      {channel.description && (
                        <p className="about-channel-desc">{channel.description}</p>
                      )}
                    </a>
                  );
                })}
              </div>
            </SectionCard>
          </section>

          {/* Section 4: Recommended Tools & Developer Perks */}
          <section className="about-full-section" aria-labelledby="referrals-heading">
            <SectionCard title="Recommended Tools & Developer Perks">
              <p className="about-section-subhead">
                Tested cloud infrastructure, web hosting platforms, and productivity utilities with verified referral bonuses.
              </p>
              <div className="about-referrals-grid">
                {developerReferrals.map((item) => {
                  const IconComp = referralIconMap[item.iconType] || ServerIcon;
                  return (
                    <a
                      key={item.id}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="about-referral-tile"
                      aria-label={`${item.name} - ${item.badge}`}
                    >
                      <div className="about-referral-top">
                        <div className="about-referral-icon-wrap" aria-hidden="true">
                          <IconComp size={22} />
                        </div>
                        <div className="about-referral-header-text">
                          <span className="about-referral-name">{item.name}</span>
                          {item.category && (
                            <span className="about-referral-cat">{item.category}</span>
                          )}
                        </div>
                        {item.badge && (
                          <span className="about-referral-pill">{item.badge}</span>
                        )}
                      </div>
                      {item.description && (
                        <p className="about-referral-desc">{item.description}</p>
                      )}
                      <div className="about-referral-action">
                        <span>Visit & Claim Perk</span>
                        <ExternalLinkIcon size={13} />
                      </div>
                    </a>
                  );
                })}
              </div>
            </SectionCard>
          </section>

          {/* Section 5: Direct Contact & Verified Networks */}
          <section className="about-full-section" aria-labelledby="contact-heading">
            <SectionCard title="Contact & Direct Networks">
              <div className="about-contact-bar">
                {personalDetails.map((detail) => {
                  const isLink = Boolean(detail.href);
                  const isExternal = detail.href && detail.href.startsWith('http');
                  let IconComponent = GlobeIcon;
                  if (detail.iconType === 'location') IconComponent = LocationIcon;
                  else if (detail.iconType === 'email') IconComponent = MailIcon;
                  else if (detail.iconType === 'phone') IconComponent = PhoneIcon;
                  else if (detail.iconType === 'languages') IconComponent = LanguageIcon;
                  else if (detail.iconType === 'github') IconComponent = GithubIcon;
                  else if (detail.iconType === 'linkedin') IconComponent = LinkedinIcon;

                  return (
                    <div className="about-contact-node" key={detail.id}>
                      <span className="about-contact-icon-wrap" aria-hidden="true">
                        <IconComponent size={16} />
                      </span>
                      <div className="about-contact-text-wrap">
                        <span className="about-contact-label">{detail.label}</span>
                        {isLink ? (
                          <a
                            href={detail.href}
                            className="about-contact-link"
                            target={isExternal ? '_blank' : undefined}
                            rel={isExternal ? 'noopener noreferrer' : undefined}
                          >
                            {detail.text}
                          </a>
                        ) : (
                          <span className="about-contact-val">{detail.text}</span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </SectionCard>
          </section>
        </div>
      </div>
    </div>
  );
}
