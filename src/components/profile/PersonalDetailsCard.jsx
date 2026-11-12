import React from 'react';
import SectionCard from '../common/SectionCard';
import {
  LocationIcon,
  MailIcon,
  GlobeIcon,
  LanguageIcon,
  PhoneIcon,
  GithubIcon,
  LinkedinIcon,
} from '../common/Icons';
import { PROFILE_DATA } from '../../data/profileData';

const iconMap = {
  phone: PhoneIcon,
  location: LocationIcon,
  email: MailIcon,
  country: GlobeIcon,
  languages: LanguageIcon,
  github: GithubIcon,
  linkedin: LinkedinIcon,
};

export default function PersonalDetailsCard({
  details = PROFILE_DATA.personalDetails,
}) {
  return (
    <SectionCard title="Contact & Details">
      <ul className="detail-list">
        {details.map((item) => {
          const IconComponent = iconMap[item.iconType] || GlobeIcon;
          const isLink = Boolean(item.href);
          const isExternal = item.href && item.href.startsWith('http');

          return (
            <li key={item.id} className="detail-item">
              <span className="detail-icon-wrap" aria-hidden="true">
                <IconComponent className="detail-icon" size={17} />
              </span>
              {isLink ? (
                <a
                  href={item.href}
                  className="detail-link"
                  target={isExternal ? '_blank' : undefined}
                  rel={isExternal ? 'noopener noreferrer' : undefined}
                >
                  {item.text}
                </a>
              ) : (
                <span className="detail-text">{item.text}</span>
              )}
            </li>
          );
        })}
      </ul>
    </SectionCard>
  );
}
