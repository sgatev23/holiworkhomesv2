import React from 'react';
import Layout from '../components/layout/Layout';
import PageHeader from '../components/layout/PageHeader';
import { useTranslation } from 'react-i18next';

const ContactUs: React.FC = () => {
  const { t } = useTranslation();

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
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{t('contact.howItWorks.title')}</h3>
              <p className="text-gray-700 mt-2">
                {t('contact.howItWorks.description')}
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900">{t('contact.transform.title')}</h3>
              <p className="text-gray-700 mt-2">
                {t('contact.transform.description')}
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900">{t('contact.partner.title')}</h3>
              <p className="text-gray-700 mt-2">
                {t('contact.partner.description')}
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900">{t('contact.info.title')}</h3>
              <p className="text-gray-700 mt-2">
                {t('contact.info.services')}<br />
                <a href="mailto:office@nomadica.homes" className="underline">office@nomadica.homes</a><br />
                {t('contact.info.phone1')}: +359 89 035 2222<br />
                {t('contact.info.phone2')}: +359 89 700 9919<br />
                {t('contact.info.address')}
              </p>
            </div>
          </div>

          {/* Right Contact Form */}
          <form className="space-y-6">
            <p className="text-sm text-gray-500">{t('contact.form.required')}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">{t('contact.form.firstName')}</label>
                <input
                  type="text"
                  id="firstName"
                  required
                  className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-[#815159] focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">{t('contact.form.lastName')}</label>
                <input
                  type="text"
                  id="lastName"
                  required
                  className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-[#815159] focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700">{t('contact.form.company')}</label>
              <input
                type="text"
                id="company"
                className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-[#815159] focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">{t('contact.form.email')}</label>
              <input
                type="email"
                id="email"
                required
                className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-[#815159] focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="city" className="block text-sm font-medium text-gray-700">{t('contact.form.city')}</label>
              <select
                id="city"
                required
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
                className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-[#815159] focus:outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#815159] text-white font-semibold py-3 rounded-md hover:bg-[#6e444b] transition"
            >
              {t('contact.form.submit')}
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default ContactUs;
