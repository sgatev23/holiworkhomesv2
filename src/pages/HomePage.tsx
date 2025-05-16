import React from 'react';
import Layout from '../components/layout/Layout';
import Hero from '../components/home/Hero';
import PropertyCalculator from '../components/home/PropertyCalculator';
import AboutUs from '../components/home/AboutUs';
import HowItWorks from '../components/home/HowItWorks';
import FeaturedTestimonials from '../components/home/FeaturedTestimonials';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const HomePage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <Hero />
      <AboutUs />
      <PropertyCalculator />
      <HowItWorks />
      <FeaturedTestimonials />

      {/* CTA Section */}
      <section className="section bg-primary text-white">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t('homepage.cta.title')}
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              {t('homepage.cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/list-your-property" className="btn bg-secondary text-gray-800 hover:bg-secondary-dark">
                {t('homepage.cta.primary')}
              </Link>
              <Link to="/services" className="btn bg-transparent border-2 border-white text-white hover:bg-white/10">
                {t('homepage.cta.secondary')}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </Layout>
  );
};

export default HomePage;