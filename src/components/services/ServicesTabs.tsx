import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'usehooks-ts';

const SERVICE_KEYS = ['shortTerm', 'longTerm', 'cohosting', 'setup'];

const ServicesTabs: React.FC = () => {
  const { t } = useTranslation();
  const [active, setActive] = useState('shortTerm');
  const isDesktop = useMediaQuery('(min-width: 768px)');

  return (
    <section className="bg-[#f3f5f8] py-20">
      <div className="container max-w-4xl px-4 md:px-6">
        <header className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#815159] mb-2">
            {t('servicesPage.chooseTitle')}
          </h2>
          <p className="text-lg text-gray-700">
            {t('servicesPage.chooseSubtitle')}
          </p>
        </header>

        {isDesktop ? (
          <>
            {/* Tabs */}
            <div className="overflow-x-auto">
              <div className="flex min-w-max border-b border-gray-200">
                {SERVICE_KEYS.map((key) => (
                  <button
                    key={key}
                    onClick={() => setActive(key)}
                    className={
                      active === key
                        ? 'px-6 py-3 bg-[#f9cf94] text-[#815159] font-semibold whitespace-nowrap'
                        : 'px-6 py-3 bg-white text-[#815159]/70 hover:bg-[#f9cf94]/60 whitespace-nowrap transition'
                    }
                  >
                    {t(`servicesPage.services.${key}.title`)}
                  </button>
                ))}
              </div>
            </div>

            {/* Panel */}
            <div className="mt-12">
              <AnimatePresence mode="wait">
                {SERVICE_KEYS.map(
                  (key) =>
                    key === active && (
                      <motion.div
                        key={key}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                        className="bg-white rounded-2xl shadow-md overflow-hidden"
                      >
                        <CardContent serviceKey={key} />
                      </motion.div>
                    )
                )}
              </AnimatePresence>
            </div>
          </>
        ) : (
          <>
            {/* Mobile stacked layout */}
            <div className="space-y-8">
              {SERVICE_KEYS.map((key) => (
                <div key={key} className="bg-white rounded-2xl shadow-md overflow-hidden">
                  <CardContent serviceKey={key} />
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

const CardContent: React.FC<{ serviceKey: string }> = ({ serviceKey }) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col md:flex-row">
      {/* Left: Price / Info */}
      <div className="md:w-1/3 bg-[#f9cf94]/30 p-8 flex flex-col items-center justify-center">
        <h3 className="text-2xl font-bold text-[#815159] text-center">
          {t(`servicesPage.services.${serviceKey}.title`)}
        </h3>
        <p className="mt-1 text-sm text-[#815159]/80 text-center max-w-[180px]">
          {t(`servicesPage.services.${serviceKey}.subtitle`)}
        </p>
        <div className="mt-4 text-4xl font-extrabold text-[#815159]">
          {t(`servicesPage.services.${serviceKey}.price`)}
          <span className="ml-1 text-base font-normal">
            {t(`servicesPage.services.${serviceKey}.note`)}
          </span>
        </div>
      </div>

      {/* Right: Features + CTA */}
      <div className="md:w-2/3 p-8 flex flex-col justify-between">
        <ul className="space-y-3 mb-8">
          {[0, 1, 2, 3, 4, 5, 6].map(
            (i) =>
              t(`servicesPage.services.${serviceKey}.features.${i}`) && (
                <li key={i} className="flex items-start">
                  <Check className="h-5 w-5 text-[#815159] mr-2 mt-0.5 flex-shrink-0" />
                  <span>{t(`servicesPage.services.${serviceKey}.features.${i}`)}</span>
                </li>
              )
          )}
        </ul>
        <div className="text-center md:text-left">
          <Link to="/list-your-property" className="btn btn-primary text-lg">
            {t('servicesPage.cta')}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesTabs;
