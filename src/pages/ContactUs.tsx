import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import PageHeader from '../components/layout/PageHeader';
import { useTranslation } from 'react-i18next';
import supabase from '../supabaseclient'; // adjust path if needed

const ContactUs: React.FC = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    city: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    const { error } = await supabase.from('contact_inquiries').insert([
      {
        first_name: formData.firstName,
        last_name: formData.lastName,
        company: formData.company,
        email: formData.email,
        city: formData.city,
        message: formData.message
      }
    ]);

    if (error) {
      console.error(error);
      setStatus('error');
    } else {
      setStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        company: '',
        email: '',
        city: '',
        message: ''
      });
    }
  };

  return (
    <Layout>
      <PageHeader
        title={t('contact.title', 'Let\'s Start a Conversation')}
        subtitle={t('contact.subtitle', 'Tell us what you\'re looking for — we\'ll take it from there.')}
        bgImage="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16">
          
          {/* Left Info Column */}
          <div className="space-y-12">
            {/* ... Left column content remains unchanged ... */}
          </div>

          {/* Right Contact Form */}
          <form className="space-y-6" onSubmit={handleSubmit}>
            <p className="text-sm text-gray-500">{t('contact.form.required')}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">{t('contact.form.firstName')}</label>
                <input
                  type="text"
                  id="firstName"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-[#815159] focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">{t('contact.form.lastName')}</label>
                <input
                  type="text"
                  id="lastName"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                  className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-[#815159] focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700">{t('contact.form.company')}</label>
              <input
                type="text"
                id="company"
                value={formData.company}
                onChange={handleChange}
                className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-[#815159] focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">{t('contact.form.email')}</label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-[#815159] focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="city" className="block text-sm font-medium text-gray-700">{t('contact.form.city')}</label>
              <select
                id="city"
                required
                value={formData.city}
                onChange={handleChange}
                className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 bg-white focus:ring-[#815159] focus:outline-none"
              >
                <option value="">{t('contact.form.selectCity')}</option>
                <option value="plovdiv">Plovdiv</option>
                <option value="sofia">Sofia</option>
                <option value="varna">Varna</option>
                <option value="burgas">Burgas</option>
                <option value="veliko-tarnovo">Veliko Tarnovo</option>
                <option value="bansko">Bansko</option>
                <option value="sunny-beach">Sunny Beach</option>
                <option value="rural">Rural/Countryside</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">{t('contact.form.message')}</label>
              <textarea
                id="message"
                rows={5}
                required
                value={formData.message}
                onChange={handleChange}
                className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-[#815159] focus:outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#815159] text-white font-semibold py-3 rounded-md hover:bg-[#6e444b] transition"
            >
              {t('contact.form.submit')}
            </button>

            {status === 'success' && (
              <p className="text-green-600 text-sm mt-2">{t('contact.form.successMessage', 'Thanks! We\'ll be in touch soon.')}</p>
            )}
            {status === 'error' && (
              <p className="text-red-600 text-sm mt-2">{t('contact.form.errorMessage', 'Something went wrong. Please try again.')}</p>
            )}
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default ContactUs;
