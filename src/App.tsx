import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import SuccessStoriesPage from './pages/SuccessStoriesPage';
import GuaranteesPage from './pages/GuaranteesPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage.tsx'; 
import ListPropertyPage from './pages/ListPropertyPage';
import OwnerPortalPage from './pages/OwnerPortalPage';
import NotFoundPage from './pages/NotFoundPage';
import NomadicaOperators from './pages/NomadicaOperators';
import CareersPage from './pages/CareersPage';
import JobDetailPage from './pages/JobDetailPage';
import JobApplicationPage from './pages/JobApplicationPage';
import ForDevelopers from './pages/ForDevelopers';
import ContactUs from './pages/ContactUs';

function App() {
  return (
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
  );
}

export default App;
