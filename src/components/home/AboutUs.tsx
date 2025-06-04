import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import {
  Home,
  KeyRound,
  UsersRound,
  Sofa,
  Plus,
  Minus,
} from 'lucide-react';

const AboutUs: React.FC = () => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  /* Service cards */
  const features = [
    {
      title: t('about.features.shortTermTitle'),
      desc:  t('about.features.shortTermDesc'),
      icon:  Home,
    },
    {
      title: t('about.features.longTermTitle'),
      desc:  t('about.features.longTermDesc'),
      icon:  KeyRound,
    },
    {
      title: t('about.features.coHostTitle'),
      desc:  t('about.features.coHostDesc'),
      icon:  UsersRound,
    },
    {
      title: t('about.features.setupTitle'),
      desc:  t('about.features.setupDesc'),
      icon:  Sofa,
    },
  ];

  return (
    <section id="about-us" className="py-24 bg-background">
      <div className="container px-4 mx-auto max-w-6xl">

        {/* ── Heading & sub ───────────────────────────── */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center text-primary mb-2"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {t('about.heading')}
        </motion.h2>

        {/* accent bar */}
        <div className="mx-auto h-1 w-28 bg-gradient-to-r from-secondary to-secondary-dark rounded mb-6" />

        <p className="text-center max-w-2xl mx-auto text-lg text-gray-800 mb-10">
          {t('about.subheading')}
        </p>

        {/* ── Key stats ───────────────────────────────── */}
        <div className="grid md:grid-cols-3 gap-6 text-center mb-14">
          <Stat n={t('about.stats.heading1')} label={t('about.stats.optimized')} />
          <Stat n={t('about.stats.heading2')} label={t('about.stats.platforms')} />
          <Stat n={t('about.stats.heading3')} label={t('about.stats.tailored')} />
        </div>

        {/* ── Story & Services grid ───────────────────── */}
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Story */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-800 mb-6 leading-relaxed">
              {t('about.story.paragraph1')}
            </p>
            <p className="text-gray-800 leading-relaxed">
              {t('about.story.paragraph2')}
            </p>
          </motion.div>

          {/* Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {features.map((f, i) => {
              const Icon = f.icon;
              const open = openIndex === i;
              return (
                <motion.div
                  key={i}
                  className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow"
                >
                  {/* button */}
                  <button
                    onClick={() => toggle(i)}
                    className="w-full flex justify-between items-center px-6 py-4 text-left"
                    aria-expanded={open}
                  >
                    <div className="flex items-center">
                      <Icon className="w-5 h-5 text-primary mr-2" />
                      <h4 className="font-semibold text-primary">{f.title}</h4>
                    </div>
                    {open ? (
                      <Minus className="w-5 h-5 text-primary" />
                    ) : (
                      <Plus className="w-5 h-5 text-primary" />
                    )}
                  </button>

                  {/* panel */}
                  <motion.div
                    initial={false}
                    animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden px-6"
                  >
                    {open && <p className="pb-4 text-sm text-gray-700">{f.desc}</p>}
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

/* ── Small stat helper ─────────────────────────────── */
const Stat: React.FC<{ n: string; label: string }> = ({ n, label }) => (
  <div>
    <p className="text-3xl font-bold text-primary">{n}</p>
    <p className="text-gray-700">{label}</p>
  </div>
);

export default AboutUs;
