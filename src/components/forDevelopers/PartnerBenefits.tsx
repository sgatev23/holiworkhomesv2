import React, { useState } from 'react';
import { TrendingUp, Shield, Users, BarChart3 } from 'lucide-react';
import { motion } from 'framer-motion';

/* ------------------------------------------------------------------ */
/*  Data                                                              */
/* ------------------------------------------------------------------ */
const TABS = [
  {
    key: 'yield',
    label: 'Yield Uplift',
    icon: TrendingUp,
    headline: '40–60 % Higher Net Yield',
    body: 'Dynamic, multi-channel revenue management consistently out-performs conventional leases by three to five percentage points of NOI.',
  },
  {
    key: 'capex',
    label: 'CapEx Preservation',
    icon: Shield,
    headline: 'Finishes Stay Sale-Ready',
    body: 'Weekly inspections, hotel-grade housekeeping and on-call maintenance extend refurbishment cycles and protect asset value.',
  },
  {
    key: 'liquidity',
    label: 'Full Liquidity',
    icon: Users,
    headline: 'Exit on Your Timeline',
    body: 'Block dates for viewings or withdraw entire units with 30 days’ notice — no 12-month tenancy lock-ins.',
  },
  {
    key: 'data',
    label: 'Market Timing',
    icon: BarChart3,
    headline: 'Real-Time Performance Dashboards',
    body: 'ADR, RevPAR and occupancy data inform the exact month to divest for maximum IRR.',
  },
];

/* ------------------------------------------------------------------ */
/*  Component                                                         */
/* ------------------------------------------------------------------ */
const PartnerBenefits: React.FC = () => {
  const [active, setActive] = useState('yield');
  const current = TABS.find((t) => t.key === active)!;

  return (
    <section id="partner-benefits" className="bg-background py-24">
      <div className="container max-w-6xl">
        {/* heading */}
        <header className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-3">
            The Nomadica Developer Advantage
          </h2>
          <p className="text-lg text-gray-700">
            Choose a focus area to see exactly how we move the needle.
          </p>
        </header>

        {/* tab bar */}
        <div className="overflow-x-auto">
          <div className="flex min-w-max border-b border-gray-200">
            {TABS.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActive(tab.key)}
                className={
                  active === tab.key
                    ? 'px-6 py-3 bg-secondary text-primary font-semibold whitespace-nowrap'
                    : 'px-6 py-3 bg-gray-100 text-primary/70 hover:bg-gray-200 whitespace-nowrap transition'
                }
              >
                {tab.label}
              </button>
            ))}
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
              {current.headline}
            </h3>
            <p className="text-gray-800 leading-relaxed">{current.body}</p>
          </div>

          {/* right: placeholder for chart / image */}
          <div className="flex-1 flex items-center justify-center">
            <div className="w-full h-72 lg:h-80 bg-gray-200/60 border border-dashed border-gray-300 rounded-2xl flex items-center justify-center text-gray-500">
              Add chart / image here
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnerBenefits;
