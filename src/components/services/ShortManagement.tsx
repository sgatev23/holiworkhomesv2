import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ShortManagementHero: React.FC = () => (
  <section id="short-management" className="py-24 bg-background">
    <div className="container grid md:grid-cols-2 gap-12 items-center">

      {/* ── LEFT : Image + overlay cards ─────────────────── */}
      <div className="relative">
        <img
          src="https://wphhabpebydwwvgqtwmw.supabase.co/storage/v1/object/public/blog-images//6745768e376a661af52c80f0_62a733ddb49dd232d241cad1_longterm_vs_short_term_header.webp"
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
          <h4 className="font-semibold mb-3">Какво поемаме</h4>
          <ul className="text-sm text-gray-700 leading-6">
            <li>Ценообразуване и календар</li>
            <li>24/7 поддръжка на гости</li>
            <li>Почистване и пране</li>
            <li>Поддръжка</li>
            <li>Месечни отчети</li>
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
          <h4 className="font-bold text-sm uppercase mb-4">Последни 12 месеца*</h4>
          <p className="text-lg font-extrabold">+45 % доход</p>
          <p className="text-sm opacity-80 mb-4">спрямо дългосрочен наем</p>
          <p className="text-lg font-extrabold">Оценка 4.8 ★</p>
          <p className="text-xs opacity-80">678 отзива от гости</p>
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
          Печелите повече от всяка нощ – ние вършим работата
        </h2>

        <p className="text-gray-800 mb-4 leading-relaxed">
          Nomadica превръща апартамента ви в обява с хотелско качество в Airbnb, Booking.com
          и още 10+ платформи. Цените се актуализират всеки ден, екипът ни отговаря за минути,
          а след всяка резервация жилището блести от чистота.
        </p>

        <p className="text-gray-800 mb-8 leading-relaxed">
          Запазвате пълен контрол и гъвкавост. Блокирайте дати за лични нужди,
          следете приходите в реално време и получавайте един отчет всеки месец —
          <strong>обикновено с 40–60 % повече</strong> от традиционен наем.
        </p>

        <Link to="/list-your-property" className="btn btn-primary text-lg">
          Започнете да печелите
        </Link>
      </motion.div>
    </div>
  </section>
);

export default ShortManagementHero;
