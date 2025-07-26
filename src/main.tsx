import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import './i18n';
import './index.css';
import { AdminAuthProvider } from './admin/AdminAuthContext';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <AdminAuthProvider>
        <Router>
          <App />
        </Router>
      </AdminAuthProvider>
    </HelmetProvider>
  </StrictMode>
);
