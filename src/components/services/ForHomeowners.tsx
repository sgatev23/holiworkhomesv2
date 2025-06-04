import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const VALUE_POINTS = [
  { label: 'Net Yield Uplift',          value: '40 – 60 %' },
  { label: 'Average Occupancy',         value: '86 %' },
  { label: 'Owner Time Required',       value: '< 30 min / mo' },
  { label: 'Superhost Review Score',    value: '4.8 / 5' },
];

const ForHomeownersIntro: React.FC = () => (
  <section id="for-homeowners" className="bg-background py-24">
    <div className="container max-w-5xl text-center">

      {/* headline */}
      <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4">
        Why Homeowners Choose Nomadica
      </h2>
      <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
        Higher returns, zero hassle and complete flexibility — whether you want nightly,
        monthly or year-long income streams.
      </p>

      {/* 3-paragraph punch */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-6 text-gray-800 leading-relaxed text-left md:text-center"
      >
        <p>
          Traditional tenants lock you into 12-month contracts and cap returns. Nomadica turns the same
          apartment into a hospitality-grade asset, optimising nightly, weekly and corporate stays with
          dynamic pricing across 20+ OTAs.
        </p>
        <p>
          Our in-house revenue engine, hotel-grade housekeeping and 24 / 7 guest ops deliver
          <strong> 40–60 % more cash flow</strong> than conventional leases — all while protecting your finishes
          and preserving full owner access.
        </p>
        <p>
          Want guaranteed income? Prefer sharing upside? Need a digital-only partner? Pick the model that
          fits your goals below — we’ll execute, you relax.
        </p>
      </motion.div>

      {/* KPI grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-14">
        {VALUE_POINTS.map((k) => (
          <div key={k.label} className="bg-white rounded-xl shadow-sm py-6">
            <p className="text-3xl font-extrabold text-primary">{k.value}</p>
            <p className="text-xs text-gray-600 mt-1 px-2">{k.label}</p>
          </div>
        ))}
      </div>

      {/* anchor buttons */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 mt-16">
        <AnchorBtn href="#short-term">Short-Term Mgmt</AnchorBtn>
        <AnchorBtn href="#long-term">Long-Term Mgmt</AnchorBtn>
        <AnchorBtn href="#cohosting">Digital Co-Hosting</AnchorBtn>
        <AnchorBtn href="#setup">Property Setup</AnchorBtn>
      </div>
    </div>
  </section>
);

/* small helper */
const AnchorBtn: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <Link
    to={href}
    className="btn btn-secondary text-primary font-semibold shadow-sm hover:shadow-md transition-transform duration-300"
  >
    {children}
  </Link>
);

export default ForHomeownersIntro;
