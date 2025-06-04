import React from 'react';
import { motion } from 'framer-motion';
import {
  Cpu,
  BarChart2,
  Activity,
  Repeat,
  Smartphone,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

/* ------------------------------------------------------------------ */
/*  DATA                                                              */
/* ------------------------------------------------------------------ */
const FEATURES = [
  { id: 1, icon: Cpu },
  { id: 2, icon: BarChart2 },
  { id: 3, icon: Repeat },
  { id: 4, icon: Activity },
  { id: 5, icon: Smartphone },
];

/* ------------------------------------------------------------------ */
/*  COMPONENT                                                         */
/* ------------------------------------------------------------------ */
const TechnologySuite: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section id="technology" className="relative py-28 bg-background overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4">

      {/* ------------ Heading ------------- */}
      <header className="text-center mb-24">
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-3">
          {t('developersPage.technology.heading')}
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          {t('developersPage.technology.subheading')}
        </p>
      </header>

      {/* ------------ Grid ------------- */}
      <div className="grid md:grid-cols-12 gap-16 items-center">

        {/* === Hero image & floating cards === */}
        <div className="relative md:col-span-6 order-last md:order-first">

          {/* gradient halo */}
          <div className="absolute -inset-4 rounded-[40px] bg-gradient-to-br
                          from-primary/10 to-secondary/10 blur-2xl" />

          {/* main dashboard mock-up */}
          <motion.img
            src="https://images.pexels.com/photos/6476257/pexels-photo-6476257.jpeg?auto=compress&cs=tinysrgb&w=1400"
            alt="Portfolio analytics dashboard"
            loading="lazy"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full rounded-[32px] shadow-xl relative"
          />

          {/* ---------- floating KPI cards ---------- */}
          {[
            { top: '-26px', left: '6%',  kpi: '91%', label: 'Avg occupancy' },
            { top: '18%',  right: '-40px', kpi: '4.85 ★', label: 'Airbnb score' },
            { bottom: '22%', left: '-36px', kpi: '30%+ ', label: 'revenue increase' },
          ].map((c, i) => (
            <motion.div
              key={i}
              style={c as React.CSSProperties}
              initial={{ opacity: 0, scale: .8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: .5, delay: .15 * i }}
              className="absolute bg-white rounded-xl shadow-lg px-5 py-4
                         w-40 text-center"
            >
              <span className="block text-2xl font-bold text-primary">{c.kpi}</span>
              <span className="text-xs text-gray-600">{c.label}</span>
            </motion.div>
          ))}
        </div>

        {/* === Vertical feature spine === */}
        <div className="md:col-span-6">
          <div className="relative pl-8">

            {/* dotted spine */}
            <span className="absolute left-1.5 top-0 h-full w-px bg-dotted
                             bg-[length:4px_4px] bg-primary/30" />

            {FEATURES.map((f, i) => {
              const Icon = f.icon;
              const text = t(`developersPage.technology.features.${i}`, { returnObjects: true }) as any;
              return (
                <motion.div
                  key={f.id}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: .5, delay: i * .1 }}
                  className="relative mb-10 last:mb-0"
                >
                  {/* dot */}
                  <span className="absolute -left-2.5 top-2
                                   w-3 h-3 rounded-full bg-secondary" />
                  {/* card */}
                  <div className="bg-white border border-gray-100 rounded-xl
                                  shadow-sm p-6">
                    <h3 className="font-semibold text-primary mb-2 flex items-center">
                      <Icon className="w-5 h-5 mr-2 text-secondary" />
                      {text.title}
                    </h3>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {text.body}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* footnote */}
      <p className="text-xs text-gray-500 text-center mt-24">
        {t('developersPage.technology.footnote')}
      </p>
    </div>
  </section>
  );
};

export default TechnologySuite;
