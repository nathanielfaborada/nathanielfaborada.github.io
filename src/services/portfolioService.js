import { PROFILE_DATA } from '../data/profileData';
import { PROJECTS_DATA } from '../data/projectsData';
import { COLLABORATORS_MAP, STATIC_ORGANIZATIONS } from '../data/collaboratorsData';

export const portfolioService = {
  getProfile() {
    return PROFILE_DATA;
  },

  getProjects(filterCategory = 'all') {
    if (filterCategory === 'all') {
      return PROJECTS_DATA;
    }
    return PROJECTS_DATA.filter((p) => p.category === filterCategory);
  },

  getFeaturedProjects() {
    return PROJECTS_DATA.filter((p) => p.featured);
  },

  getProjectById(id) {
    return PROJECTS_DATA.find((p) => p.id === id) || null;
  },

  getCollaboratorsMap() {
    return COLLABORATORS_MAP;
  },

  getOrganizations() {
    return STATIC_ORGANIZATIONS;
  },
};

export default portfolioService;
