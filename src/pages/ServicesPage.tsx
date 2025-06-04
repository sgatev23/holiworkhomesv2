/* ---------- imports ---------- */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Layout from '../components/layout/Layout';

/* hero + homeowners intro */
import ServicesHero from '../components/services/ServicesHero';
import ServicesTabs from '../components/services/ServicesTabs';
import ShortTermSection from '../components/services/ShortManagement';
import LongTermSection from '../components/services/LongManagement';
import CoHostingSection from '../components/services/Cohosting';
import PropertySetupSection from '../components/services/PropertySetup';

/* FAQ icons */
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

const faqKeys = ['areas', 'earnings', 'furnish', 'payments'];

const ServicesPage: React.FC = () => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <Layout>
      {/* 1 ▸ Hero */}
      <ServicesHero />

      {/* 2 ▸ For-Homeowners overview */}
      <ServicesTabs />
      <ShortTermSection />
      <LongTermSection />
      <CoHostingSection />
      <PropertySetupSection />

      {/* 4 ▸ WHY + FAQ (unchanged) */}
      <section id="faq" className="section bg-background">
        <div className="container">
          <div className="bg-secondary/60 rounded-2xl shadow-md px-8 py-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* why text */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                {t('servicesPage.whyTitle')}
              </h2>
              <p className="text-primary/90 mb-4">{t('servicesPage.whyP1')}</p>
              <p className="text-primary/90">{t('servicesPage.whyP2')}</p>
            </div>

            {/* accordion */}
            <div>
              <h3 className="text-xl font-bold text-primary mb-6 text-center lg:text-left">
                {t('servicesPage.faqTitle')}
              </h3>

              {faqKeys.map((key, i) => (
                <div key={i} className="bg-white rounded-lg shadow-sm mb-4">
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="w-full flex justify-between items-center p-4 text-left font-medium text-primary"
                  >
                    <span>{t(`servicesPage.faq.${key}.q`)}</span>
                    <span
                      className={`transform transition-transform duration-300 text-2xl ${openIndex === i ? 'rotate-45' : ''
                        }`}
                    >
                      +
                    </span>
                  </button>
                  {openIndex === i && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="px-4 pb-4 text-sm text-gray-700"
                    >
                      {t(`servicesPage.faq.${key}.a`)}
                    </motion.p>
                  )}
                </div>
              ))}

              <div className="text-center mt-8">
                <Link
                  to="/contact"
                  className="inline-flex items-center text-primary font-semibold hover:underline"
                >
                  {t('servicesPage.moreQuestions')}
                  <span className="ml-2 text-xl">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ServicesPage;
