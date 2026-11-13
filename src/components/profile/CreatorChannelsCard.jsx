import React from 'react';
import SectionCard from '../common/SectionCard';
import {
  FacebookIcon,
  YoutubeIcon,
  TiktokIcon,
  ExternalLinkIcon,
  GlobeIcon,
} from '../common/Icons';
import { PROFILE_DATA } from '../../data/profileData';

const iconMap = {
  facebook: FacebookIcon,
  youtube: YoutubeIcon,
  tiktok: TiktokIcon,
};

export default function CreatorChannelsCard({
  channels = PROFILE_DATA.creatorChannels || [],
}) {
  if (!channels || channels.length === 0) return null;

  return (
    <SectionCard title="Creator & Social Channels">
      <div className="creator-channels-list">
        {channels.map((channel) => {
          const IconComponent = iconMap[channel.iconType || channel.platform] || GlobeIcon;

          return (
            <a
              key={channel.id}
              href={channel.url}
              target="_blank"
              rel="noopener noreferrer"
              className="creator-channel-card"
              aria-label={`${channel.title} (${channel.handle})`}
            >
              <div className="creator-channel-icon-wrap" aria-hidden="true">
                <IconComponent size={20} className="creator-channel-icon" />
              </div>

              <div className="creator-channel-info">
                <div className="creator-channel-heading">
                  <span className="creator-channel-title">{channel.title}</span>
                  {channel.handle && (
                    <span className="creator-channel-handle">{channel.handle}</span>
                  )}
                </div>
                {channel.description && (
                  <p className="creator-channel-desc">{channel.description}</p>
                )}
              </div>

              <div className="creator-channel-action" aria-hidden="true">
                <ExternalLinkIcon size={15} />
              </div>
            </a>
          );
        })}
      </div>
    </SectionCard>
  );
}
