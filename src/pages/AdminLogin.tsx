import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAdminAuth } from '../admin/AdminAuthContext';

const AdminLogin = () => {
  const { signIn } = useAdminAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState(import.meta.env.VITE_ADMIN_EMAIL || '');
  const [password, setPassword] = useState(import.meta.env.VITE_ADMIN_PASSWORD || '');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signIn(email, password);
      navigate('/admindashboard');
    } catch (err: any) {
      setError(err.message || 'Invalid credentials');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow w-80 space-y-4">
        <h1 className="text-xl font-bold text-center">Admin Login</h1>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="w-full bg-primary text-white py-2 rounded">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
