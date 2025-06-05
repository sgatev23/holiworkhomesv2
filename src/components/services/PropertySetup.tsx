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
          От празен апартамент до готов за гости за две седмици
        </h2>

        <p className="text-gray-800 mb-4 leading-relaxed">
          Нямате време за обиколки по магазини и майстори? Нашият екип обзавежда,
          декорира и снима имота ви от край до край. Вие одобрявате концепцията,
          ние вършим останалото.
        </p>

        <p className="text-gray-800 mb-8 leading-relaxed">
          Обичайният бюджет е около <strong>€260/м²</strong>. Собствениците постигат
          средно <strong>22 % по-висока цена на нощувка</strong>, когато имотът стартира с
          професионална визия и снимки.
        </p>

        <Link to="/list-your-property" className="btn btn-primary text-lg">
          Пуснете обявата
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
          <h4 className="font-semibold mb-3">Как работи</h4>
          <ol className="list-decimal list-inside text-sm text-gray-700 leading-6">
            <li>Концепция</li>
            <li>Бюджет и одобрение</li>
            <li>Подготовка</li>
            <li>Ремонт и Обзавеждане</li>
            <li>Професионални снимки и обява</li>
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
          <h4 className="font-bold text-sm uppercase mb-4">Типични резултати</h4>
          <p className="text-lg font-extrabold">€260 / м² инвестиция</p>
          <p className="text-sm opacity-80 mb-4">обзавеждане и монтаж</p>
          <p className="text-lg font-extrabold">+22 % ADR</p>
          <p className="text-xs opacity-80">спрямо самообзаведени имоти</p>
        </motion.div>
      </div>
    </div>
  </section>
);

export default PropertySetupHero;
