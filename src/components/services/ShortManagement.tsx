import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const ShortManagementHero: React.FC = () => {
  const { t } = useTranslation();
  const handleList =
    (t('shortManagement.whatWeHandle', {
      returnObjects: true,
    }) as unknown as string[]) || [];

  return (
    <section id="short-management" className="py-24 bg-background">
      <div className="container grid md:grid-cols-2 gap-12 items-center">

      {/* ── LEFT : Image + overlay cards ─────────────────── */}
      <div className="relative">
        <img
          src="https://wphhabpebydwwvgqtwmw.supabase.co/storage/v1/object/public/blog-images//Screenshot%202025-06-06%20at%2012.34.27.png"
          alt="Host reviewing bookings"
          className="w-full h-96 md:h-[520px] object-cover rounded-2xl shadow-lg"
        />

        {/* Menu card : top-right inside */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="hidden md:block absolute right-6 top-10 bg-white rounded-xl shadow-lg w-60 p-4"
        >
          <h4 className="font-semibold mb-3">{t('shortManagement.cardHeading')}</h4>
          <ul className="text-sm text-gray-700 leading-6">
            {handleList.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </motion.div>

        {/* Stats card : bottom-left inside */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="hidden md:block absolute left-6 bottom-6
                     bg-gradient-to-br from-primary to-primary-dark text-white rounded-xl shadow-xl w-64 p-6"
        >
          <h4 className="font-bold text-sm uppercase mb-4">{t('shortManagement.statsHeading')}</h4>
          <p className="text-lg font-extrabold">{t('shortManagement.income')}</p>
          <p className="text-sm opacity-80 mb-4">{t('shortManagement.incomeNote')}</p>
          <p className="text-lg font-extrabold">{t('shortManagement.rating')}</p>
          <p className="text-xs opacity-80">{t('shortManagement.reviews')}</p>
        </motion.div>
      </div>

      {/* ── RIGHT : Copy + CTA ───────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4">
          {t('shortManagement.headline')}
        </h2>

        <p className="text-gray-800 mb-4 leading-relaxed">
          {t('shortManagement.paragraph1')}
        </p>

        <p className="text-gray-800 mb-8 leading-relaxed">
          {t('shortManagement.paragraph2')}
        </p>

        <Link to="/list-your-property" className="btn btn-primary text-lg">
          {t('shortManagement.cta')}
        </Link>
      </motion.div>
    </div>
    </section>
  );
};

export default ShortManagementHero;
