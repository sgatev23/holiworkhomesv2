import { Link, Outlet } from 'react-router-dom';
import { useAdminAuth } from './AdminAuthContext';

const AdminLayout = () => {
  const { signOut } = useAdminAuth();
  return (
    <div className="min-h-screen flex">
      <aside className="w-56 bg-gray-800 text-white p-4 space-y-4">
        <h1 className="text-2xl font-bold">Admin</h1>
        <nav className="space-y-2">
          <Link to="users" className="block hover:underline">Users</Link>
          <Link to="property-leads" className="block hover:underline">Property Leads</Link>
          <Link to="job-applications" className="block hover:underline">Job Applications</Link>
          <Link to="calculator-emails" className="block hover:underline">Calculator Emails</Link>
          <Link to="contact-inquiries" className="block hover:underline">Contact Inquiries</Link>
        </nav>
        <button onClick={signOut} className="text-sm underline">Sign out</button>
      </aside>
      <main className="flex-1 p-6 overflow-auto bg-gray-50">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
