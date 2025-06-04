import React, { useState } from 'react';
import { TrendingUp, Shield, Users, BarChart3 } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

/* ------------------------------------------------------------------ */
/*  Data – each tab now includes an image URL + alt text              */
/* ------------------------------------------------------------------ */
const TABS = [
  {
    key: 'yield',
    icon: TrendingUp,
    image: 'https://wphhabpebydwwvgqtwmw.supabase.co/storage/v1/object/public/blog-images//real-estate-business-growth-graph-arrow-graph-with-house-graph-3d-illustration.webp',
    color: 'fill-primary',
    start: 0,
    end: 90,
    align: 'right',
  },
  {
    key: 'capex',
    icon: Shield,
    image: 'https://wphhabpebydwwvgqtwmw.supabase.co/storage/v1/object/public/blog-images//Asset-Allocation-Featured.jpg',
    color: 'fill-secondary',
    start: 90,
    end: 180,
    align: 'right',
  },
  {
    key: 'liquidity',
    icon: Users,
    image: 'https://wphhabpebydwwvgqtwmw.supabase.co/storage/v1/object/public/blog-images//AP18.jpg',
    color: 'fill-secondary-dark',
    start: 180,
    end: 270,
    align: 'left',
  },
  {
    key: 'data',
    icon: BarChart3,
    image: 'https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=1200',
    color: 'fill-primary-dark',
    start: 270,
    end: 360,
    align: 'left',
  },
];

/* ------------------------------------------------------------------ */
/*  Component                                                         */
/* ------------------------------------------------------------------ */
const PartnerBenefits: React.FC = () => {
  const { t } = useTranslation();
  const [active, setActive] = useState('yield');
  const current = TABS.find((t) => t.key === active)!;
  const currentText = t(`developersPage.partnerBenefits.tabs.${active}`, { returnObjects: true }) as any;

  return (
    <section id="partner-benefits" className="bg-background py-24">
      <div className="container max-w-6xl">
        {/* heading */}
        <header className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-3">
            {t('developersPage.partnerBenefits.heading')}
          </h2>
          <p className="text-lg text-gray-700">
            {t('developersPage.partnerBenefits.subheading')}
          </p>
        </header>

        {/* tab bar */}
        <div className="overflow-x-auto">
          <div className="flex min-w-max border-b border-gray-200">
            {TABS.map((tab) => {
              const text = t(`developersPage.partnerBenefits.tabs.${tab.key}.label`);
              return (
              <button
                key={tab.key}
                onClick={() => setActive(tab.key)}
                className={
                  active === tab.key
                    ? 'px-6 py-3 bg-secondary text-primary font-semibold whitespace-nowrap'
                    : 'px-6 py-3 bg-gray-100 text-primary/70 hover:bg-gray-200 whitespace-nowrap transition'
                }
              >
                {text}
              </button>
            );
            })}
          </div>
        </div>

        {/* content panel */}
        <motion.div
          key={current.key}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mt-12 flex flex-col lg:flex-row gap-12"
        >
          {/* left: icon + text */}
          <div className="flex-1">
            <current.icon className="w-10 h-10 text-primary mb-4" />
            <h3 className="text-2xl font-semibold text-primary mb-4">
              {currentText.headline}
            </h3>
            <p className="text-gray-800 leading-relaxed">{currentText.body}</p>
          </div>

          {/* right: chart / image */}
          <div className="flex-1 flex items-center justify-center">
            <img
              src={current.image}
              alt={t(`developersPage.partnerBenefits.tabs.${current.key}.alt`)}
              className="w-full h-72 lg:h-80 object-cover rounded-2xl shadow-lg"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnerBenefits;
