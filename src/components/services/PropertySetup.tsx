import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const PropertySetupHero: React.FC = () => (
  <section id="property-setup" className="py-24 bg-background">
    <div className="container grid md:grid-cols-2 gap-12 items-center">

      {/* ─── LEFT : Copy + CTA ─────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4">
          From empty shell to guest-ready in two weeks
        </h2>

        <p className="text-gray-800 mb-4 leading-relaxed">
          No time for Ikea runs or contractor headaches? Our design team furnishes,
          styles and photographs your property end-to-end. You approve the mood
          board, we handle the rest.
        </p>

        <p className="text-gray-800 mb-8 leading-relaxed">
          Typical budget is <strong>€260 / m² all-in</strong>. Better yet, owners see
          a <strong>22 % higher ADR</strong> when listings launch with professional
          styling and photography.
        </p>

        <Link to="/list-your-property" className="btn btn-primary text-lg">
          Launch My Listing
        </Link>
      </motion.div>

      {/* ─── RIGHT : Image + overlay cards ─────────────────── */}
      <div className="relative">
        <img
          src="https://images.pexels.com/photos/6186814/pexels-photo-6186814.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="Stylish furnished living room"
          className="w-full h-96 md:h-[520px] object-cover rounded-2xl shadow-lg"
        />

        {/* 5-step process card (top-left inside) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="hidden md:block absolute left-6 top-10 bg-white rounded-xl shadow-lg w-60 p-4"
        >
          <h4 className="font-semibold mb-3">How it works</h4>
          <ol className="list-decimal list-inside text-sm text-gray-700 leading-6">
            <li>Design brief</li>
            <li>Budget & sign-off</li>
            <li>Procurement</li>
            <li>Install & style</li>
            <li>Pro photos + listing</li>
          </ol>
        </motion.div>

        {/* Key numbers card (bottom-left inside) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="hidden md:block absolute left-6 bottom-6
                     bg-gradient-to-br from-primary to-primary-dark text-white rounded-xl shadow-xl w-64 p-6"
        >
          <h4 className="font-bold text-sm uppercase mb-4">Typical results</h4>
          <p className="text-lg font-extrabold">€260 / m² capex</p>
          <p className="text-sm opacity-80 mb-4">furnish & install</p>
          <p className="text-lg font-extrabold">+22 % ADR</p>
          <p className="text-xs opacity-80">vs. self-furnished units</p>
        </motion.div>
      </div>
    </div>
  </section>
);

export default PropertySetupHero;
