import React from 'react';
import { Routes as ReactRoutes, Route } from 'react-router-dom';
import { AppProviders } from './context/AppProviders';
import { PublicRoutes } from './routes/Routes.public';
import PublicLayout from './pages/PublicPages/components/layout/PublicLayout';
import PageNotFoundPage from './pages/PageNotFound/PageNotFoundPage';
import ScrollToTop from './components/common/ScrollToTop';

export default function Routes() {
  return (
    <AppProviders>
      <ScrollToTop />
      <ReactRoutes>
        <Route element={<PublicLayout />}>
          {PublicRoutes.map((route) => (
            <Route
              key={route.key}
              path={route.path}
              element={route.element}
            />
          ))}
          <Route path="*" element={<PageNotFoundPage />} />
        </Route>
      </ReactRoutes>
    </AppProviders>
  );
}
