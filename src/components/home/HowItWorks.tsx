import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ClipboardList, Home, Users, BarChart } from 'lucide-react';
import { GiNotebook } from 'react-icons/gi';
import { useTranslation } from 'react-i18next';

const HowItWorks: React.FC = () => {
  const { t } = useTranslation();

  const steps = [
    { id: 1, icon: <ClipboardList className="h-8 w-8 text-[#815159]" /> },
    { id: 2, icon: <GiNotebook className="h-8 w-8 text-[#815159]" /> },
    { id: 3, icon: <Home className="h-8 w-8 text-[#815159]" /> },
    { id: 4, icon: <Users className="h-8 w-8 text-[#815159]" /> },
    { id: 5, icon: <BarChart className="h-8 w-8 text-[#815159]" /> },
    { id: 6, icon: <Home className="h-8 w-8 text-[#815159]" /> }
  ];

  return (
    <section
      id="how-it-works"
      className="py-24 relative overflow-hidden"
      style={{ backgroundColor: '#f3f5f8' }}
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center text-[#815159] mb-4"
        >
          {t('howItWorks.title')}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-lg text-gray-700 max-w-2xl mx-auto mb-14 font-sans"
        >
          {t('howItWorks.subtitle')}
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col text-center items-center hover:shadow-md transition"
            >
              <div className="w-16 h-16 flex items-center justify-center bg-[#815159]/10 rounded-full mb-4">
                {step.icon}
              </div>
              <h3 className="text-lg font-semibold text-[#815159] mb-2">
                {t(`howItWorks.steps.${step.id}.title`)}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed font-sans">
                {t(`howItWorks.steps.${step.id}.description`)}
              </p>
              <span className="mt-4 text-xs font-semibold text-[#815159]/30">
                {t('howItWorks.step')} {step.id}
              </span>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/list-your-property"
              className="inline-flex items-center px-6 py-3 bg-white text-[#815159] text-lg font-semibold rounded-md shadow hover:bg-gray-100 transition-colors duration-300"
            >
              {t('howItWorks.cta')}
              <svg
                className="ml-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
