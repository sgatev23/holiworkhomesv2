import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CohostingHero: React.FC = () => (
  <section id="cohosting" className="py-24 bg-background">
    <div className="container grid md:grid-cols-2 gap-12 items-center">

      {/* ── LEFT : Image + overlay cards ─────────────────── */}
      <div className="relative order-1 md:order-none">
        <img
          src="https://images.pexels.com/photos/6457567/pexels-photo-6457567.jpeg?auto=compress&cs=tinysrgb&w=1200"
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
          <h4 className="font-semibold mb-3">Вие запазвате</h4>
          <ul className="text-sm text-gray-700 leading-6">
            <li>Местен екип за почистване</li>
            <li>Посрещане на място (по избор)</li>
            <li>Лични блокове в календара</li>
            <li>Пълен достъп до портала</li>
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
          <h4 className="font-bold text-sm uppercase mb-4">Резултати от ко-хостинг</h4>
          <p className="text-lg font-extrabold">Такса 15 %</p>
          <p className="text-sm opacity-80 mb-4">плащате при печалба</p>
          <p className="text-lg font-extrabold">+42 % доход</p>
          <p className="text-xs opacity-80">средно повишение спрямо самостоятелно управление</p>
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
          Дигитален ко-хостинг – запазвате контрол, печелите повече
        </h2>

        <p className="text-gray-800 mb-4 leading-relaxed">
          Обичате да посрещате гости, но не и да се занимавате с цени, съобщения
          и календари? Включете се в технологиите на Nomadica – AI ценообразуване,
          24/7 комуникация на шест езика и мигновена синхронизация в над 20 канала.
        </p>

        <p className="text-gray-800 mb-8 leading-relaxed">
          Запазвате любимия си екип за почистване и спокойно блокирате дати за близки.
          Ние взимаме само <strong>12 % от нетния приход</strong> – без фиксирани разходи и ангажиращи договори.
        </p>

        <Link to="/list-your-property" className="btn btn-primary text-lg">
          Включете ме
        </Link>
      </motion.div>
    </div>
  </section>
);

export default CohostingHero;
