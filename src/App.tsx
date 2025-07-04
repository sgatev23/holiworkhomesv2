import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const HomePage = lazy(() => import('./pages/HomePage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const SuccessStoriesPage = lazy(() => import('./pages/SuccessStoriesPage'));
const GuaranteesPage = lazy(() => import('./pages/GuaranteesPage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const BlogPostPage = lazy(() => import('./pages/BlogPostPage'));
const ListPropertyPage = lazy(() => import('./pages/ListPropertyPage'));
const OwnerPortalPage = lazy(() => import('./pages/OwnerPortalPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));
const NomadicaOperators = lazy(() => import('./pages/NomadicaOperators'));
const CareersPage = lazy(() => import('./pages/CareersPage'));
const JobDetailPage = lazy(() => import('./pages/JobDetailPage'));
const JobApplicationPage = lazy(() => import('./pages/JobApplicationPage'));
const ForDevelopers = lazy(() => import('./pages/ForDevelopers'));
const ContactUs = lazy(() => import('./pages/ContactUs'));

function App() {
  return (
    <Suspense fallback={<div className="p-4">Loading...</div>}>
      <Routes>
        {/* Existing routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/success-stories" element={<SuccessStoriesPage />} />
        <Route path="/guarantees" element={<GuaranteesPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
        <Route path="/list-your-property" element={<ListPropertyPage />} />
        <Route path="/owner-portal" element={<OwnerPortalPage />} />
        <Route path="/nomadica-property-operators" element={<NomadicaOperators />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/careers/:slug" element={<JobDetailPage />} />
        <Route path="/careers/:slug/apply" element={<JobApplicationPage />} />
        <Route path="/real-estate-developers" element={<ForDevelopers />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </Suspense>
  );
}

export default App;
