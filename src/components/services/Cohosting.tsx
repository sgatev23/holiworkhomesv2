import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CohostingHero: React.FC = () => (
  <section id="cohosting" className="py-24 bg-background">
    <div className="container grid md:grid-cols-2 gap-12 items-center">

      {/* ── LEFT : Image + overlay cards ─────────────────── */}
      <div className="relative order-1 md:order-none">
        <img
          src="https://wphhabpebydwwvgqtwmw.supabase.co/storage/v1/object/public/blog-images//Supporthelpdesk.webp"
          alt="Laptop with revenue dashboard"
          className="w-full h-96 md:h-[520px] object-cover rounded-2xl shadow-lg"
        />

        {/* Services menu */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="hidden md:block absolute left-6 top-10 bg-white rounded-xl shadow-lg w-60 p-4"
        >
          <h4 className="font-semibold mb-3">You keep control</h4>
          <ul className="text-sm text-gray-700 leading-6">
            <li>Local cleaning team</li>
            <li>On-site check-ins (optional)</li>
            <li>Personal calendar blocks</li>
            <li>Full portal access</li>
          </ul>
        </motion.div>

        {/* Key numbers card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="hidden md:block absolute right-6 bottom-6
                     bg-gradient-to-br from-primary to-primary-dark text-white rounded-xl shadow-xl w-64 p-6"
        >
          <h4 className="font-bold text-sm uppercase mb-4">Cohosting results</h4>
          <p className="text-lg font-extrabold">12% fee</p>
          <p className="text-sm opacity-80 mb-4">pay only on profit</p>
          <p className="text-lg font-extrabold">+42% income</p>
          <p className="text-xs opacity-80">average uplift vs DIY hosting</p>
        </motion.div>
      </div>

      {/* ── RIGHT : Copy + CTA ───────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="order-0 md:order-2"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4">
          Digital co-hosting — keep control, earn more
        </h2>

        <p className="text-gray-800 mb-4 leading-relaxed">
          Love hosting guests but hate pricing, messaging and calendar chaos?
          Plug into Nomadica’s tech stack — AI-driven pricing, bilingual 24/7
          communication and instant sync across 10+ channels.
        </p>

        <p className="text-gray-800 mb-8 leading-relaxed">
          Keep your preferred cleaning crew and easily block dates for friends
          and family. We charge only <strong>12% of net income</strong> — no fixed
          costs or binding contracts.
        </p>

        <Link to="/list-your-property" className="btn btn-primary text-lg">
          Plug Me In
        </Link>
      </motion.div>
    </div>
  </section>
);

export default CohostingHero;
