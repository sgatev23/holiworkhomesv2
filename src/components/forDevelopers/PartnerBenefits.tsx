import React, { useState } from 'react';
import { TrendingUp, Shield, Users, BarChart3 } from 'lucide-react';
import { motion } from 'framer-motion';

/* ------------------------------------------------------------------ */
/*  Data – each tab now includes an image URL + alt text              */
/* ------------------------------------------------------------------ */
const TABS = [
  {
    key: 'yield',
    label: 'Yield Uplift',
    icon: TrendingUp,
    headline: '40–60 % Higher Net Yield',
    body: 'Dynamic, multi-channel revenue management out-performs conventional leases by three to five percentage points of NOI.',
    image: 'https://wphhabpebydwwvgqtwmw.supabase.co/storage/v1/object/public/blog-images//real-estate-business-growth-graph-arrow-graph-with-house-graph-3d-illustration.webp',
    alt: 'Chart comparing short-term vs long-term rental net yields',
    color: 'fill-primary',
    start: 0,
    end: 90,
    align: 'right',
  },
  {
    key: 'capex',
    label: 'CapEx Preservation',
    icon: Shield,
    headline: 'Finishes Stay Sale-Ready',
    body: 'Weekly inspections, hotel-grade housekeeping, and on-call maintenance extend refurbishment cycles and protect asset value.',
    image: 'https://wphhabpebydwwvgqtwmw.supabase.co/storage/v1/object/public/blog-images//Asset-Allocation-Featured.jpg',
    alt: 'Maintenance worker tightening fixtures – representing CapEx preservation',
    color: 'fill-secondary',
    start: 90,
    end: 180,
    align: 'right',
  },
  {
    key: 'liquidity',
    label: 'Full Liquidity',
    icon: Users,
    headline: 'Exit on Your Timeline',
    body: 'Block dates for viewings or withdraw entire units with 30 days’ notice — no 12-month tenancy lock-ins.',
    image: 'https://wphhabpebydwwvgqtwmw.supabase.co/storage/v1/object/public/blog-images//AP18.jpg',
    alt: 'Handshake over property keys – symbolising liquidity and flexible exits',
    color: 'fill-secondary-dark',
    start: 180,
    end: 270,
    align: 'left',
  },
  {
    key: 'data',
    label: 'Market Timing',
    icon: BarChart3,
    headline: 'Real-Time Performance Dashboards',
    body: 'ADR, RevPAR, and occupancy data inform the exact month to divest for maximum IRR.',
    image: 'https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Dashboard displaying real-time rental KPIs',
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

          {/* right: chart / image */}
          <div className="flex-1 flex items-center justify-center">
            <img
              src={current.image}
              alt={current.alt}
              className="w-full h-72 lg:h-80 object-cover rounded-2xl shadow-lg"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnerBenefits;
