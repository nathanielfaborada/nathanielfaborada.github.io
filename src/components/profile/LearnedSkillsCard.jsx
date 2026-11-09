import React from 'react';
import SectionCard from '../common/SectionCard';
import Badge from '../common/Badge';
import { PROFILE_DATA } from '../../data/profileData';

export default function LearnedSkillsCard({
  skills = PROFILE_DATA.learnedSkills,
}) {
  const hasCategories =
    Array.isArray(skills.categories) && skills.categories.length > 0;
  const groups = Array.isArray(skills.groups) ? skills.groups : [];

  return (
    <SectionCard title="Learned Skills">
      {skills.description && (
        <p className="skills-desc">{skills.description}</p>
      )}

      {hasCategories
        ? skills.categories.map((cat) => (
            <div className="skills-category" key={cat.label}>
              <p className="skills-category-title">{cat.label}</p>
              <div className="skill-scroll">
                {cat.items.map((tag) => (
                  <Badge key={tag} label={tag} />
                ))}
              </div>
            </div>
          ))
        : groups.map((group, groupIdx) => (
            <React.Fragment key={groupIdx}>
              <div className="skill-group">
                <div className="skill-scroll">
                  {group.map((tag) => (
                    <Badge key={tag} label={tag} />
                  ))}
                </div>
              </div>
              {groupIdx < groups.length - 1 && <div className="skill-divider" />}
            </React.Fragment>
          ))}
    </SectionCard>
  );
}
