import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CalendarCheck, Star, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

/* keep your five translation-driven steps */
const STEPS = [
  { id: 1, titleKey: '1.title', descKey: '1.description' },
  { id: 2, titleKey: '2.title', descKey: '2.description' },
  { id: 3, titleKey: '3.title', descKey: '3.description' },
  { id: 4, titleKey: '4.title', descKey: '4.description' },
  { id: 5, titleKey: '5.title', descKey: '5.description' },
];

const HowItWorks: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="how-it-works" className="py-24 bg-background overflow-hidden">
      <div className="container max-w-6xl mx-auto px-4">

        {/* centred heading & subtitle */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-primary text-center mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {t('howItWorks.title')}
        </motion.h2>
        <p className="text-lg text-gray-700 text-center mb-16 max-w-2xl mx-auto">
          {t('howItWorks.subtitle')}
        </p>

        {/* grid */}
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* ── Left column : timeline ─────────────────── */}
          <div>
            {/* rail */}
            <div className="relative pl-10">
              <span className="absolute left-4 top-0 h-full w-1 bg-secondary rounded-full" />

              {STEPS.map((step, i) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="mb-10 last:mb-0 relative"
                >
                  {/* dot on rail */}
                  <span className="absolute -left-5 top-2 w-4 h-4 rounded-full bg-secondary" />

                  {/* card without icon */}
                  <div className="bg-white rounded-xl shadow-md p-5">
                    <h3 className="font-semibold text-primary mb-1">
                      {t(`howItWorks.steps.${step.titleKey}`)}
                    </h3>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {t(`howItWorks.steps.${step.descKey}`)}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <Link
              to="/list-your-property"
              className="btn btn-primary text-lg mt-10 inline-flex items-center"
            >
              {t('howItWorks.cta')}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>

          {/* ── Right column : illustrative image + overlays ─ */}
          <div className="relative order-first md:order-none">
            <img
              src="https://wphhabpebydwwvgqtwmw.supabase.co/storage/v1/object/public/blog-images//Impact-of-Technology-on-Property-Management-870x452.jpg"
              alt="Team coordinating operations"
              className="w-full h-96 md:h-[520px] object-cover rounded-2xl shadow-lg"
              loading="lazy"
            />

            {/* KPI card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="hidden md:block absolute left-6 top-10 bg-white rounded-xl shadow-lg w-60 p-4"
            >
              <h4 className="font-semibold mb-3">Quick facts</h4>
              <p className="flex items-center text-sm text-gray-700 mb-2">
                <Star className="w-4 h-4 text-primary mr-1" />
                4.8 ★ guest rating
              </p>
              <p className="flex items-center text-sm text-gray-700">
                <CalendarCheck className="w-4 h-4 text-primary mr-1" />
                48 h onboarding
              </p>
            </motion.div>

            {/* process summary */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="hidden md:block absolute right-6 bottom-6
                         bg-gradient-to-br from-primary to-primary-dark text-white rounded-xl shadow-xl w-64 p-6"
            >
              <h4 className="font-bold text-sm uppercase mb-4">Just six steps</h4>
              <p className="text-sm leading-6 opacity-90">
                From valuation to first payout – all managed in-house by Nomadica.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
