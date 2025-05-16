import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Hero: React.FC = () => {
  // Translation hook
  const { t } = useTranslation();

  return (
    <section
      className="relative h-screen min-h-[600px] max-h-[800px] bg-cover bg-center flex items-center"
      // 🖼️ Background image with dark overlay for text contrast
      style={{
        backgroundImage:
          'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1600)',
      }}
    >
      <div className="container">
        <div className="max-w-2xl">
          {/* 👋 Hero text with entrance animation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            {/* 🏅 Badge area (from hero.badge) */}
            <div className="flex space-x-4 mb-6">
              <span className="bg-secondary text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                {t('hero.badge.superhost')}        {/* "Airbnb Superhost" */}
              </span>
              <span className="bg-secondary text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                {t('hero.badge.bookingAward')}     {/* "Booking 2025 Award Winner" */}
              </span>
            </div>

            {/* 🧠 Main headline (from hero.title) */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {t('hero.title')}                   {/* "Your property, powered by our management systems." */}
            </h1>

            {/* 🧾 Subtitle lines (from hero.subtitle.line1 + line2) */}
            <p className="text-xl text-gray-200 mb-8">
              {t('hero.subtitle.line1')}          {/* "We don’t just manage properties." */}
              <br />
              {t('hero.subtitle.line2')}          {/* "We build income strategies." */}
            </p>
          </motion.div>

          {/* 🔘 CTA Buttons (animated, from hero.buttons) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
          >
            {/* 📤 List your property button */}
            <motion.div whileHover={{ y: -3 }} transition={{ type: 'spring', stiffness: 300 }}>
              <Link
                to="/list-your-property"
                className="btn btn-primary text-lg shadow-sm hover:shadow-md transition-transform duration-300"
              >
                {t('hero.buttons.listProperty')}   {/* "List Your Property" */}
              </Link>
            </motion.div>

            {/* 📊 Calculate Earnings button with arrow icon */}
            <motion.div whileHover={{ y: -3 }} transition={{ type: 'spring', stiffness: 300 }}>
              <button
                onClick={() => {
                  const section = document.getElementById("calculator");
                  section?.scrollIntoView({ behavior: "smooth" });
                }}
                className="btn bg-white text-lg flex items-center font-medium shadow-sm hover:shadow-md transition-transform duration-300"
                style={{ color: '#815159' }}
              >
                {t('hero.buttons.calculate')}
                <ArrowRight className="ml-2 h-5 w-5" style={{ color: '#815159' }} />
              </button>

            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
