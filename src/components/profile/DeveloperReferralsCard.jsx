import React from 'react';
import SectionCard from '../common/SectionCard';
import {
  ServerIcon,
  GiftIcon,
  ExternalLinkIcon,
  GlobeIcon,
} from '../common/Icons';
import { PROFILE_DATA } from '../../data/profileData';

const iconMap = {
  server: ServerIcon,
  gift: GiftIcon,
};

export default function DeveloperReferralsCard({
  referrals = PROFILE_DATA.developerReferrals || [],
}) {
  if (!referrals || referrals.length === 0) return null;

  return (
    <SectionCard title="Recommended Tools & Referrals">
      <div className="developer-referrals-list">
        {referrals.map((referral) => {
          const IconComponent = iconMap[referral.iconType] || GlobeIcon;

          return (
            <a
              key={referral.id}
              href={referral.url}
              target="_blank"
              rel="noopener noreferrer"
              className="developer-referral-card"
              aria-label={`${referral.name} - ${referral.badge}`}
            >
              <div className="developer-referral-icon-wrap" aria-hidden="true">
                <IconComponent size={20} className="developer-referral-icon" />
              </div>

              <div className="developer-referral-info">
                <div className="developer-referral-header">
                  <span className="developer-referral-name">{referral.name}</span>
                  {referral.badge && (
                    <span className="developer-referral-badge">{referral.badge}</span>
                  )}
                </div>
                {referral.category && (
                  <span className="developer-referral-category">{referral.category}</span>
                )}
                {referral.description && (
                  <p className="developer-referral-desc">{referral.description}</p>
                )}
              </div>

              <div className="developer-referral-action" aria-hidden="true">
                <ExternalLinkIcon size={15} />
              </div>
            </a>
          );
        })}
      </div>
    </SectionCard>
  );
}
