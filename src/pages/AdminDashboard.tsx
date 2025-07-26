import { Routes, Route } from 'react-router-dom';
import AdminLayout from '../admin/AdminLayout';
import UsersPage from '../admin/UsersPage';
import PropertyLeadsPage from '../admin/PropertyLeadsPage';
import JobApplicationsPage from '../admin/JobApplicationsPage';
import CalculatorEmailsPage from '../admin/CalculatorEmailsPage';
import ContactInquiriesPage from '../admin/ContactInquiriesPage';

const AdminDashboard = () => {
  return (
    <Routes>
      <Route element={<AdminLayout />}>
        <Route index element={<UsersPage />} />
        <Route path="users" element={<UsersPage />} />
        <Route path="property-leads" element={<PropertyLeadsPage />} />
        <Route path="job-applications" element={<JobApplicationsPage />} />
        <Route path="calculator-emails" element={<CalculatorEmailsPage />} />
        <Route path="contact-inquiries" element={<ContactInquiriesPage />} />
      </Route>
    </Routes>
  );
};

export default AdminDashboard;
