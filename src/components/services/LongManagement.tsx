import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const LongManagementHero: React.FC = () => (
  <section id="long-management" className="py-24 bg-background">
    <div className="container grid md:grid-cols-2 gap-12 items-center">

      {/* ── LEFT : Copy + CTA ─────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4">
          Long-term rental management — no vacancy risk
        </h2>

        <p className="text-gray-800 mb-4 leading-relaxed">
          Looking for stability? Sign a 12- or 24-month contract with Nomadica
          and receive the same rent on the same date each month. We handle tenant
          screening, leases and maintenance.
        </p>

        <p className="text-gray-800 mb-8 leading-relaxed">
          Monthly inspections keep your property in top condition. When the term
          ends you decide whether to continue or return to personal use —
          <strong>no penalties or hassle.</strong>
        </p>

        <Link to="/list-your-property" className="btn btn-primary text-lg">
          Secure My Rent
        </Link>
      </motion.div>

      {/* ── RIGHT : Image + overlay cards ────────────────── */}
      <div className="relative">
        <img
          src="https://wphhabpebydwwvgqtwmw.supabase.co/storage/v1/object/public/blog-images//C10-Blog-6-How-much-time-and-effort-goes-into-a-rental-property-inspection.webp"
          alt="Peace-of-mind long-term rental"
          className="w-full h-96 md:h-[520px] object-cover rounded-2xl shadow-lg"
        />

        {/* Services menu card (top-right inside) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="hidden md:block absolute right-6 top-10 bg-white rounded-xl shadow-lg w-60 p-4"
        >
          <h4 className="font-semibold mb-3">Included services</h4>
          <ul className="text-sm text-gray-700 leading-6">
            <li>Tenant screening</li>
            <li>Rent collection</li>
            <li>24/7 support line</li>
            <li>Maintenance &amp; repairs</li>
            <li>Monthly inspection</li>
          </ul>
        </motion.div>

        {/* Key numbers card (bottom-left **inside** image) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="hidden md:block absolute left-6 bottom-6
                     bg-gradient-to-br from-primary to-primary-dark text-white rounded-xl shadow-xl w-64 p-6"
        >
          <h4 className="font-bold text-sm uppercase mb-4">Key metrics</h4>
          <p className="text-lg font-extrabold">0 € vacancy loss</p>
          <p className="text-sm opacity-80 mb-4">guaranteed rent</p>
        </motion.div>
      </div>
    </div>
  </section>
);

export default LongManagementHero;
