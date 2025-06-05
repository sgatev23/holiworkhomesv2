import React, { useState } from 'react';
import { TrendingUp, Shield, Users, BarChart3 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'usehooks-ts'; // install if not already

const TABS = [
  {
    key: 'yield',
    icon: TrendingUp,
    image: 'https://wphhabpebydwwvgqtwmw.supabase.co/storage/v1/object/public/blog-images//real-estate-business-growth-graph-arrow-graph-with-house-graph-3d-illustration.webp',
  },
  {
    key: 'capex',
    icon: Shield,
    image: 'https://wphhabpebydwwvgqtwmw.supabase.co/storage/v1/object/public/blog-images//Asset-Allocation-Featured.jpg',
  },
  {
    key: 'liquidity',
    icon: Users,
    image: 'https://wphhabpebydwwvgqtwmw.supabase.co/storage/v1/object/public/blog-images//AP18.jpg',
  },
  {
    key: 'data',
    icon: BarChart3,
    image: 'https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
];

const PartnerBenefits: React.FC = () => {
  const { t } = useTranslation();
  const [active, setActive] = useState('yield');
  const isDesktop = useMediaQuery('(min-width: 1024px)');

  return (
    <section id="partner-benefits" className="bg-[#f3f5f8] py-24">
      <div className="container max-w-6xl px-6 md:px-12">
        <header className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#815159] mb-3">
            {t('developersPage.partnerBenefits.heading')}
          </h2>
          <p className="text-lg text-gray-700">
            {t('developersPage.partnerBenefits.subheading')}
          </p>
        </header>

        {isDesktop ? (
          <>
            {/* Desktop Tabs */}
            <div className="flex border-b border-gray-300 overflow-x-auto">
              {TABS.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActive(tab.key)}
                  className={`px-6 py-3 whitespace-nowrap transition font-medium ${
                    active === tab.key
                      ? 'bg-[#f9cf94] text-[#815159]'
                      : 'bg-white text-[#815159]/70 hover:bg-[#f9cf94]/60'
                  }`}
                >
                  {t(`developersPage.partnerBenefits.tabs.${tab.key}.label`)}
                </button>
              ))}
            </div>

            {/* Panel */}
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="mt-12 flex flex-col lg:flex-row gap-10"
              >
                {/* Text */}
                <div className="flex-1">
                  {React.createElement(
                    TABS.find((t) => t.key === active)!.icon,
                    { className: 'w-10 h-10 text-[#815159] mb-4' }
                  )}
                  <h3 className="text-2xl font-semibold text-[#815159] mb-4">
                    {t(`developersPage.partnerBenefits.tabs.${active}.headline`)}
                  </h3>
                  <p className="text-gray-800 leading-relaxed">
                    {t(`developersPage.partnerBenefits.tabs.${active}.body`)}
                  </p>
                </div>

                {/* Image */}
                <div className="flex-1">
                  <img
                    src={TABS.find((t) => t.key === active)!.image}
                    alt={t(`developersPage.partnerBenefits.tabs.${active}.alt`)}
                    className="w-full h-72 object-cover rounded-xl shadow-lg"
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </>
        ) : (
          <>
            {/* Mobile Accordion */}
            <div className="space-y-10">
              {TABS.map((tab) => {
                const text = t(`developersPage.partnerBenefits.tabs.${tab.key}`, {
                  returnObjects: true,
                }) as any;
                const Icon = tab.icon;
                return (
                  <div
                    key={tab.key}
                    className="bg-white rounded-xl shadow-md overflow-hidden"
                  >
                    <img
                      src={tab.image}
                      alt={text.alt}
                      className="w-full h-56 object-cover"
                    />
                    <div className="p-6">
                      <Icon className="w-8 h-8 text-[#815159] mb-3" />
                      <h3 className="text-xl font-semibold text-[#815159] mb-2">
                        {text.headline}
                      </h3>
                      <p className="text-gray-800 text-sm leading-relaxed">
                        {text.body}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default PartnerBenefits;
