import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPlus, FaHome, FaKey, FaHandsHelping, FaCouch } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const AboutUs: React.FC = () => {
  // State for which service card (accordion) is open
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Translation hook
  const { t } = useTranslation();

  // Toggle function to open/close cards
  const toggleCard = (index: number) => setOpenIndex(openIndex === index ? null : index);

  // 🔤 Feature cards: Services + translations (features from `about.features`)
  const features = [
    {
      title: t('about.features.shortTermTitle'),         // "Short-Term Rental Management"
      description: t('about.features.shortTermDesc'),    // "We handle listings, pricing..."
      icon: <FaHome className="text-[#815159] mr-2" />
    },
    {
      title: t('about.features.longTermTitle'),          // "Long-Term Rental Management"
      description: t('about.features.longTermDesc'),
      icon: <FaKey className="text-[#815159] mr-2" />
    },
    {
      title: t('about.features.coHostTitle'),            // "Co-Hosting Strategy"
      description: t('about.features.coHostDesc'),
      icon: <FaHandsHelping className="text-[#815159] mr-2" />
    },
    {
      title: t('about.features.setupTitle'),             // "Property Setup"
      description: t('about.features.setupDesc'),
      icon: <FaCouch className="text-[#815159] mr-2" />
    },
  ];

  return (
    <section id="about-us" className="py-24" style={{ backgroundColor: '#f3f5f8' }}>
      <div className="container mx-auto px-4 pt-4 pb-12">

        {/* 🏡 Mission Statement */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-6 leading-snug"
          style={{ color: '#815159' }}
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {t('about.heading')} {/* "We turn properties into performance." */}
        </motion.h2>
        <p className="text-center max-w-2xl mx-auto text-lg text-gray-800 mb-10">
          {t('about.subheading')} {/* "At Holiwork Homes, we blend..." */}
        </p>

        {/* 📊 Key Stats section */}
        <div className="grid md:grid-cols-3 gap-6 text-center mb-12">
          <div>
            <p className="text-3xl font-bold text-[#815159]">{t('about.stats.heading1')}</p> {/* "50+" */}
            <p className="text-gray-700">{t('about.stats.optimized')}</p>                    {/* "Properties Optimized" */}
          </div>
          <div>
            <p className="text-3xl font-bold text-[#815159]">{t('about.stats.heading2')}</p> {/* "10+ Reservation Platforms" */}
            <p className="text-gray-700">{t('about.stats.platforms')}</p>                    {/* "Incl. Airbnb and Booking.com" */}
          </div>
          <div>
            <p className="text-3xl font-bold text-[#815159]">{t('about.stats.heading3')}</p> {/* "4 Services" */}
            <p className="text-gray-700">{t('about.stats.tailored')}</p>                     {/* "Tailored for Homeowners" */}
          </div>
        </div>

        {/* 📝 Company Story and Services Split Layout */}
        <div className="grid md:grid-cols-2 gap-10 items-start">

          {/* 📖 Left Column – Company Story (from `about.story`) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-800 mb-6 text-base leading-relaxed">
              {t('about.story.paragraph1')} {/* "We don’t just manage properties..." */}
            </p>
            <p className="text-gray-800 text-base leading-relaxed">
              {t('about.story.paragraph2')} {/* "Our Bulgaria-based team..." */}
            </p>
          </motion.div>

          {/* 🔽 Right Column – Interactive Dropdown Service Cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {features.map((item, index) => (
              <motion.div
                key={index}
                style={{ backgroundColor: '#ffffff' }}
                className="bg-white rounded-md shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <button
                  onClick={() => toggleCard(index)}
                  className="w-full flex justify-between items-center px-6 py-4 text-left"
                >
                  <div className="flex items-center">
                    {item.icon}
                    <h4 className="font-semibold text-[#815159]">{item.title}</h4> {/* Service title */}
                  </div>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FaPlus className="text-[#815159]" />
                  </motion.div>
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? 'auto' : 0,
                    opacity: openIndex === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden px-6 text-sm text-gray-700"
                >
                  {/* Service description (only visible if open) */}
                  {openIndex === index && <div className="pb-4">{item.description}</div>}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
