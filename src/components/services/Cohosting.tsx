import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const CohostingHero: React.FC = () => {
  const { t } = useTranslation();

  const keepList =
    (t('cohosting.keepList', { returnObjects: true }) as unknown as string[]) ||
    [];

  return (
    <section id="cohosting" className="py-24 bg-background">
      <div className="container grid md:grid-cols-2 gap-12 items-center">

      {/* ── LEFT : Image + overlay cards ─────────────────── */}
      <div className="relative order-1 md:order-none">
        <img
          src="https://wphhabpebydwwvgqtwmw.supabase.co/storage/v1/object/public/blog-images//Supporthelpdesk.webp"
          alt="Laptop with revenue dashboard"
          className="w-full h-96 md:h-[520px] object-cover rounded-2xl shadow-lg"
        />

        {/* Services menu */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="hidden md:block absolute left-6 top-10 bg-white rounded-xl shadow-lg w-60 p-4"
        >
          <h4 className="font-semibold mb-3">{t('cohosting.keepHeading')}</h4>
          <ul className="text-sm text-gray-700 leading-6">
            {keepList.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </motion.div>

        {/* Key numbers card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="hidden md:block absolute right-6 bottom-6
                     bg-gradient-to-br from-primary to-primary-dark text-white rounded-xl shadow-xl w-64 p-6"
        >
          <h4 className="font-bold text-sm uppercase mb-4">{t('cohosting.resultsHeading')}</h4>
          <p className="text-lg font-extrabold">{t('cohosting.feeLabel')}</p>
          <p className="text-sm opacity-80 mb-4">{t('cohosting.feeSub')}</p>
          <p className="text-lg font-extrabold">{t('cohosting.incomeLabel')}</p>
          <p className="text-xs opacity-80">{t('cohosting.incomeSub')}</p>
        </motion.div>
      </div>

      {/* ── RIGHT : Copy + CTA ───────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="order-0 md:order-2"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4">
          {t('cohosting.headline')}
        </h2>

        <p className="text-gray-800 mb-4 leading-relaxed">
          {t('cohosting.paragraph1')}
        </p>

        <p className="text-gray-800 mb-8 leading-relaxed">
          {t('cohosting.paragraph2')}
        </p>

        <Link to="/list-your-property" className="btn btn-primary text-lg">
          {t('cohosting.cta')}
        </Link>
      </motion.div>
    </div>
    </section>
  );
};

export default CohostingHero;
