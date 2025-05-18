import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import SuccessStoriesPage from './pages/SuccessStoriesPage';
import GuaranteesPage from './pages/GuaranteesPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage.tsx'; 
import ListPropertyPage from './pages/ListPropertyPage';
import OwnerPortalPage from './pages/OwnerPortalPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/success-stories" element={<SuccessStoriesPage />} />
      <Route path="/guarantees" element={<GuaranteesPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/blog/:slug" element={<BlogPostPage />} />
      <Route path="/list-your-property" element={<ListPropertyPage />} />
      <Route path="/owner-portal" element={<OwnerPortalPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
