import React from 'react';
import Layout from '../components/layout/Layout';
import PageHeader from '../components/layout/PageHeader';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const serviceKeys = ['cohosting', 'shortTerm', 'longTerm', 'setup'];

const faqKeys = ['areas', 'earnings', 'furnish', 'payments'];

const ServicesPage: React.FC = () => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <Layout>
      <PageHeader
        title={t('servicesPage.title')}
        subtitle={t('servicesPage.subtitle')}
        bgImage="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />

      <section className="section bg-[#f3f5f8]">
        <div className="container">
          <h2 className="section-title text-[#815159]">{t('servicesPage.chooseTitle')}</h2>
          <p className="section-subtitle">{t('servicesPage.chooseSubtitle')}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {serviceKeys.map((key, idx) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-xl transition-shadow flex flex-col"
              >
                <div className="bg-primary text-white p-6 text-center">
                  <h3 className="text-2xl font-bold">{t(`servicesPage.services.${key}.title`)}</h3>
                  <p className="mt-2 text-sm">{t(`servicesPage.services.${key}.subtitle`)}</p>
                  <div className="mt-4 text-3xl font-bold">
                    {t(`servicesPage.services.${key}.price`)}
                    <span className="text-base font-normal"> {t(`servicesPage.services.${key}.note`)}</span>
                  </div>
                </div>

                <div className="p-6 flex flex-col justify-between h-full">
                  <ul className="space-y-3 mb-6">
                    {[0, 1, 2, 3, 4, 5, 6].map((i) => (
                      t(`servicesPage.services.${key}.features.${i}`) && (
                        <li key={i} className="flex items-start">
                          <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <span>{t(`servicesPage.services.${key}.features.${i}`)}</span>
                        </li>
                      )
                    ))}
                  </ul>

                  <Link
                    to="/list-your-property"
                    className="btn bg-secondary font-bold text-[#815159] hover:bg-secondary-dark w-full text-center mt-auto"
                  >
                    {t('servicesPage.cta')}
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-[#f3f5f8]" id="faq">
        <div className="container">
          <div className="bg-[#fff3cd] rounded-xl shadow-md px-8 py-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#6a3b3b] mb-6">{t('servicesPage.whyTitle')}</h2>
              <p className="text-gray-800 mb-4">{t('servicesPage.whyP1')}</p>
              <p className="text-gray-800">{t('servicesPage.whyP2')}</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#6a3b3b] mb-6 text-center">{t('servicesPage.faqTitle')}</h3>
              {faqKeys.map((key, index) => (
                <div key={index} className="bg-white p-4 rounded-md shadow-sm transition-all duration-300">
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full flex justify-between items-center text-left font-medium text-[#6a3b3b] focus:outline-none"
                  >
                    <span>{t(`servicesPage.faq.${key}.q`)}</span>
                    <span
                      className={`transform transition-transform duration-300 ${openIndex === index ? 'rotate-45' : ''} text-2xl`}
                    >
                      +
                    </span>
                  </button>
                  {openIndex === index && (
                    <p className="text-sm mt-3 text-gray-700 transition-opacity duration-300">
                      {t(`servicesPage.faq.${key}.a`)}
                    </p>
                  )}
                </div>
              ))}
              <div className="text-center mt-8">
                <Link
                  to="/contact"
                  className="inline-flex items-center text-[#815159] font-semibold text-lg hover:underline"
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
