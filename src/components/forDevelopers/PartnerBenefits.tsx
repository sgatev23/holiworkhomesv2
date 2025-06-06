import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const DeveloperBenefits: React.FC = () => {
  const { t } = useTranslation();

  return (
   <>
   <section id="developer-benefits" className="py-24 bg-background space-y-32">
      <div className="container text-center max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
          {t('developersPage.partnerBenefits.heading')}
        </h2>
        <p className="text-lg text-gray-700">
          {t('developersPage.partnerBenefits.subheading')}
        </p>
      </div>

      {/* ── Yield Section ───────────────────────────── */}
      <div className="container grid md:grid-cols-2 gap-12 items-center">
        <div className="relative order-1 md:order-none">
          <img
            src="https://wphhabpebydwwvgqtwmw.supabase.co/storage/v1/object/public/blog-images//EmptyBuildingPlovdiv.jpg"
            alt={t('developersPage.partnerBenefits.tabs.yield.alt')}
            className="w-full h-96 md:h-[520px] object-cover rounded-2xl shadow-lg"
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="hidden md:block absolute left-6 top-10 bg-white rounded-xl shadow-lg w-60 p-4"
          >
            <h4 className="font-semibold mb-3">
              {t('developersPage.partnerBenefits.tabs.yield.label')}
            </h4>
            <p className="text-sm text-gray-700 leading-6">
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="order-0 md:order-2"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4">
            {t('developersPage.partnerBenefits.tabs.yield.headline')}
          </h2>

          <p className="text-gray-800 mb-4 leading-relaxed">
            {t('developersPage.partnerBenefits.tabs.yield.body')}
          </p>

          <Link to="/contact" className="btn btn-primary text-lg">
            {t('developersPage.partnerBenefits.cta')}
          </Link>
        </motion.div>
      </div>

      {/* ── CapEx Section ───────────────────────────── */}
      <div className="container grid md:grid-cols-2 gap-12 items-center">
        <div className="relative order-1 md:order-none">
          <img
            src="https://wphhabpebydwwvgqtwmw.supabase.co/storage/v1/object/public/blog-images//lounge.jpg"
            alt={t('developersPage.partnerBenefits.tabs.capex.alt')}
            className="w-full h-96 md:h-[520px] object-cover rounded-2xl shadow-lg"
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="hidden md:block absolute left-6 top-10 bg-white rounded-xl shadow-lg w-60 p-4"
          >
            <h4 className="font-semibold mb-3">
              {t('developersPage.partnerBenefits.tabs.capex.label')}
            </h4>
            <p className="text-sm text-gray-700 leading-6">
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="order-0 md:order-2"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4">
            {t('developersPage.partnerBenefits.tabs.capex.headline')}
          </h2>

          <p className="text-gray-800 mb-4 leading-relaxed">
            {t('developersPage.partnerBenefits.tabs.capex.body')}
          </p>

          <Link to="/contact" className="btn btn-primary text-lg">
            {t('developersPage.partnerBenefits.cta')}
          </Link>
        </motion.div>
      </div>

      {/* ── Liquidity Section ───────────────────────────── */}
      <div className="container grid md:grid-cols-2 gap-12 items-center">
        <div className="relative order-1 md:order-none">
          <img
            src="https://wphhabpebydwwvgqtwmw.supabase.co/storage/v1/object/public/blog-images//selling-property-dubai-body-a-080320230327-1024x640.jpg"
            alt={t('developersPage.partnerBenefits.tabs.liquidity.alt')}
            className="w-full h-96 md:h-[520px] object-cover rounded-2xl shadow-lg"
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="hidden md:block absolute left-6 top-10 bg-white rounded-xl shadow-lg w-60 p-4"
          >
            <h4 className="font-semibold mb-3">
              {t('developersPage.partnerBenefits.tabs.liquidity.label')}
            </h4>
            <p className="text-sm text-gray-700 leading-6">
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="order-0 md:order-2"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4">
            {t('developersPage.partnerBenefits.tabs.liquidity.headline')}
          </h2>

          <p className="text-gray-800 mb-4 leading-relaxed">
            {t('developersPage.partnerBenefits.tabs.liquidity.body')}
          </p>

          <Link to="/contact" className="btn btn-primary text-lg">
            {t('developersPage.partnerBenefits.cta')}
          </Link>
        </motion.div>
      </div>

      {/* ── Data Section ───────────────────────────── */}
      <div className="container grid md:grid-cols-2 gap-12 items-center">
        <div className="relative order-1 md:order-none">
          <img
            src="https://wphhabpebydwwvgqtwmw.supabase.co/storage/v1/object/public/blog-images//Screenshot%202025-06-06%20at%2012.34.27.png"
            alt={t('developersPage.partnerBenefits.tabs.data.alt')}
            className="w-full h-96 md:h-[520px] object-cover rounded-2xl shadow-lg"
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="hidden md:block absolute left-6 top-10 bg-white rounded-xl shadow-lg w-60 p-4"
          >
            <h4 className="font-semibold mb-3">
              {t('developersPage.partnerBenefits.tabs.data.label')}
            </h4>
            <p className="text-sm text-gray-700 leading-6">
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="order-0 md:order-2"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4">
            {t('developersPage.partnerBenefits.tabs.data.headline')}
          </h2>

          <p className="text-gray-800 mb-4 leading-relaxed">
            {t('developersPage.partnerBenefits.tabs.data.body')}
          </p>

          <Link to="/contact" className="btn btn-primary text-lg">
            {t('developersPage.partnerBenefits.cta')}
          </Link>
        </motion.div>
      </div>
    </section>

    {/* Developer CTA Strip */}
    <div className="bg-primary text-white text-center py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-extrabold mb-4">
          {t('developersPage.cta.title')}
        </h2>
        <p className="text-lg mb-8">
          {t('developersPage.cta.description')}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="bg-white text-primary px-6 py-3 rounded hover:bg-gray-100 transition font-medium"
          >
            {t('developersPage.cta.primary')}
          </Link>
          <Link
            to="/list-your-property"
            className="border border-white text-white px-6 py-3 rounded hover:bg-white hover:text-primary transition font-medium"
          >
            {t('developersPage.cta.secondary')}
          </Link>
        </div>
      </div>
    </div>
  </>
  );
};

export default DeveloperBenefits;
