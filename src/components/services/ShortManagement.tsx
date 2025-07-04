import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ShortManagementHero: React.FC = () => (
  <section id="short-management" className="py-24 bg-background">
    <div className="container grid md:grid-cols-2 gap-12 items-center">

      {/* ── LEFT : Image + overlay cards ─────────────────── */}
      <div className="relative">
        <img
          src="https://wphhabpebydwwvgqtwmw.supabase.co/storage/v1/object/public/blog-images//Screenshot%202025-06-06%20at%2012.34.27.png"
          alt="Host reviewing bookings"
          className="w-full h-96 md:h-[520px] object-cover rounded-2xl shadow-lg"
        />

        {/* Menu card : top-right inside */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="hidden md:block absolute right-6 top-10 bg-white rounded-xl shadow-lg w-60 p-4"
        >
          <h4 className="font-semibold mb-3">What we handle</h4>
          <ul className="text-sm text-gray-700 leading-6">
            <li>Pricing &amp; calendar</li>
            <li>24/7 guest support</li>
            <li>Cleaning &amp; laundry</li>
            <li>Maintenance</li>
            <li>Monthly reports</li>
          </ul>
        </motion.div>

        {/* Stats card : bottom-left inside */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="hidden md:block absolute left-6 bottom-6
                     bg-gradient-to-br from-primary to-primary-dark text-white rounded-xl shadow-xl w-64 p-6"
        >
          <h4 className="font-bold text-sm uppercase mb-4">Last 12 months*</h4>
          <p className="text-lg font-extrabold">+45% income</p>
          <p className="text-sm opacity-80 mb-4">vs long-term rent</p>
          <p className="text-lg font-extrabold">4.8 ★ rating</p>
          <p className="text-xs opacity-80">157 guest reviews</p>
        </motion.div>
      </div>

      {/* ── RIGHT : Copy + CTA ───────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4">
          Earn more from every night — we handle the work
        </h2>

        <p className="text-gray-800 mb-4 leading-relaxed">
          Nomadica turns your apartment into a hospitality-grade listing on Airbnb,
          Booking.com and 10+ other platforms. Prices update daily, our team handles
          everything and your place sparkles after every stay.
        </p>

        <p className="text-gray-800 mb-8 leading-relaxed">
          Keep full control and flexibility. Block personal dates, track revenue
          in real time and get a monthly statement — typically
          <strong>40–60% higher</strong> than a traditional lease.
        </p>

        <Link to="/list-your-property" className="btn btn-primary text-lg">
          Start Earning
        </Link>
      </motion.div>
    </div>
  </section>
);

export default ShortManagementHero;
