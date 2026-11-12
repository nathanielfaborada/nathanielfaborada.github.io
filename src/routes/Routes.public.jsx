import React from 'react';
import HomePage from '../pages/PublicPages/Home/HomePage';
import ProjectsPage from '../pages/PublicPages/Projects/ProjectsPage';
import CollaboratorsPage from '../pages/PublicPages/Collaborators/CollaboratorsPage';
import AboutPage from '../pages/PublicPages/About/AboutPage';

export const PublicRoutes = [
  {
    key: 'home',
    path: '/',
    element: <HomePage />,
  },
  {
    key: 'projects',
    path: '/projects',
    element: <ProjectsPage />,
  },
  {
    key: 'collaborators',
    path: '/collaborators',
    element: <CollaboratorsPage />,
  },
  {
    key: 'about',
    path: '/about',
    element: <AboutPage />,
  },
];

export default PublicRoutes;
