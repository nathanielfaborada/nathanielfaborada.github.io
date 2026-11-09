import React from 'react';
import SectionCard from '../common/SectionCard';
import {
  LocationIcon,
  MailIcon,
  GlobeIcon,
  LanguageIcon,
} from '../common/Icons';
import { PROFILE_DATA } from '../../data/profileData';

const iconMap = {
  location: LocationIcon,
  email: MailIcon,
  country: GlobeIcon,
  languages: LanguageIcon,
};

export default function PersonalDetailsCard({
  details = PROFILE_DATA.personalDetails,
}) {
  return (
    <SectionCard title="Personal Details">
      <ul className="detail-list">
        {details.map((item) => {
          const IconComponent = iconMap[item.iconType] || GlobeIcon;
          const isEmailOrLink = item.iconType === 'email' || Boolean(item.href);
          const linkHref = item.href || `mailto:${item.text}`;

          return (
            <li key={item.id} className="detail-item">
              <IconComponent className="detail-icon" />
              {isEmailOrLink ? (
                <a href={linkHref} className="detail-link">
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
