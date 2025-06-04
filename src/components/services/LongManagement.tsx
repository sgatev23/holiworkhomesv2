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
          Fixed monthly income — zero vacancy risk
        </h2>

        <p className="text-gray-800 mb-4 leading-relaxed">
          Prefer predictability? Sign a 12- or 24-month agreement with Nomadica and
          receive the same rent on the same day each month, whether your place is
          booked or not. We handle tenant screening, contracts and maintenance.
        </p>

        <p className="text-gray-800 mb-8 leading-relaxed">
          Quarterly inspections keep your property in top shape, and when the term
          ends you decide: renew with us or switch back to personal use —
          <strong> no penalties, no fuss.</strong>
        </p>

        <Link to="/list-your-property" className="btn btn-primary text-lg">
          Secure My Rent
        </Link>
      </motion.div>

      {/* ── RIGHT : Image + overlay cards ────────────────── */}
      <div className="relative">
        <img
          src="https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1200"
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
          <h4 className="font-semibold mb-3">Included Services</h4>
          <ul className="text-sm text-gray-700 leading-6">
            <li>Tenant vetting & contract</li>
            <li>Rent collection</li>
            <li>24 / 7 support line</li>
            <li>Maintenance & repairs</li>
            <li>Quarterly inspection</li>
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
          <h4 className="font-bold text-sm uppercase mb-4">Key Numbers</h4>
          <p className="text-lg font-extrabold">€0 vacancy loss</p>
          <p className="text-sm opacity-80 mb-4">Guaranteed rent</p>
          <p className="text-lg font-extrabold">98 % renewal rate</p>
          <p className="text-xs opacity-80">over the past 3 yrs</p>
        </motion.div>
      </div>
    </div>
  </section>
);

export default LongManagementHero;
