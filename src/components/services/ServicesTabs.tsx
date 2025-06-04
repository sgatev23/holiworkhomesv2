import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

/*  ORDER: short-term → long-term → co-hosting → setup */
const SERVICE_KEYS = ['shortTerm', 'longTerm', 'cohosting', 'setup'];

const ServicesTabs: React.FC = () => {
  const { t } = useTranslation();
  const [active, setActive] = useState('shortTerm');   // default = first tab

  return (
    <section className="bg-background py-20">
      <div className="container max-w-4xl">
        {/* heading */}
        <header className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-2">
            {t('servicesPage.chooseTitle')}
          </h2>
          <p className="text-lg text-gray-700">{t('servicesPage.chooseSubtitle')}</p>
        </header>

        {/* tab bar */}
        <div className="overflow-x-auto">
          <div className="flex min-w-max border-b border-gray-200">
            {SERVICE_KEYS.map((key) => (
              <button
                key={key}
                onClick={() => setActive(key)}
                className={
                  active === key
                    ? 'px-6 py-3 bg-secondary text-primary font-semibold whitespace-nowrap'
                    : 'px-6 py-3 bg-gray-100 text-primary/70 hover:bg-gray-200 whitespace-nowrap transition'
                }
              >
                {t(`servicesPage.services.${key}.title`)}
              </button>
            ))}
          </div>
        </div>

        {/* content panel */}
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
      </div>
    </section>
  );
};

/* ---------- two-column card ---------- */
const CardContent: React.FC<{ serviceKey: string }> = ({ serviceKey }) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col md:flex-row">
      {/* ◂ left: price / commission */}
      <div className="md:w-1/3 bg-secondary/20 p-8 flex flex-col items-center justify-center">
        <h3 className="text-2xl font-bold text-primary text-center">
          {t(`servicesPage.services.${serviceKey}.title`)}
        </h3>
        <p className="mt-1 text-sm text-primary/80 text-center max-w-[180px]">
          {t(`servicesPage.services.${serviceKey}.subtitle`)}
        </p>
        <div className="mt-4 text-4xl font-extrabold text-primary">
          {t(`servicesPage.services.${serviceKey}.price`)}
          <span className="ml-1 text-base font-normal">
            {t(`servicesPage.services.${serviceKey}.note`)}
          </span>
        </div>
      </div>

      {/* ▸ right: USPs + CTA */}
      <div className="md:w-2/3 p-8 flex flex-col justify-between">
        <ul className="space-y-3 mb-8">
          {[0, 1, 2, 3, 4, 5, 6].map(
            (i) =>
              t(`servicesPage.services.${serviceKey}.features.${i}`) && (
                <li key={i} className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
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
