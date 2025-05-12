import React from 'react';
import Layout from '../components/layout/Layout';
import PageHeader from '../components/layout/PageHeader';
import { useForm } from 'react-hook-form';
import { Mail, Lock } from 'lucide-react';

type LoginFormData = {
  email: string;
  password: string;
};

const OwnerPortalPage: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>();

  const onSubmit = (data: LoginFormData) => {
    console.log(data);
    // Handle login
  };

  return (
    <Layout>
      <PageHeader
        title="Owner Portal"
        subtitle="Access your property dashboard and reports"
        bgImage="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
      />

      <section className="section bg-background">
        <div className="container max-w-md">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-center mb-6">Sign In to Your Account</h2>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    id="email"
                    className="form-input pl-10"
                    placeholder="your@email.com"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address"
                      }
                    })}
                  />
                </div>
                {errors.email && <p className="text-error text-sm mt-1">{errors.email.message}</p>}
              </div>

              <div className="form-group">
                <label htmlFor="password" className="form-label">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="password"
                    id="password"
                    className="form-input pl-10"
                    placeholder="••••••••"
                    {...register("password", { required: "Password is required" })}
                  />
                </div>
                {errors.password && <p className="text-error text-sm mt-1">{errors.password.message}</p>}
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox" />
                  <span className="ml-2 text-sm text-gray-600">Remember me</span>
                </label>
                <a href="#" className="text-sm text-primary hover:text-primary-dark">
                  Forgot password?
                </a>
              </div>

              <button type="submit" className="btn btn-primary w-full py-3">
                Sign In
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Don't have an account?{' '}
                <a href="#" className="text-primary hover:text-primary-dark font-medium">
                  Contact us to get started
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default OwnerPortalPage;