import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

interface Slide {
  metric: string;
  headline: string;
  text: string;
  isTitle?: boolean;
}

/* ------------------- COMPONENT ------------------ */
const Hero: React.FC = () => {
  const { t } = useTranslation();
  const slides = t('developersPage.hero.slides', { returnObjects: true }) as Slide[];
  const sources = t('developersPage.hero.sources');

  return (
    <section id="market-overview" className="relative h-[520px] md:h-[680px] overflow-hidden">
      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="https://wphhabpebydwwvgqtwmw.supabase.co/storage/v1/object/public/blog-images//Propertyvideo.mp4"
        autoPlay
        playsInline
        muted
        loop
      />

    {/* Dark glass overlay */}
    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Slider */}
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop
        className="relative h-full"
      >
        {slides.map((s, i) => (
          <SwiperSlide key={i}>
            <SlideContent {...s} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Sources */}
      <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs text-gray-300">
        {sources}
      </p>
    </section>
  );
};

/* ----------------- Slide Content ---------------- */

const SlideContent: React.FC<Slide> = ({ metric, headline, text }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6"
  >
    {/* accent bar */}
    <span className="block w-24 h-1 bg-secondary mb-6" />

    {/* metric */}
    <h2 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight">
      {metric}
    </h2>

    {/* headline */}
    <p className="mt-4 text-xl md:text-2xl font-semibold text-secondary-light max-w-3xl">
      {headline}
    </p>

    {/* body */}
    <p className="mt-3 text-base md:text-lg text-gray-200 max-w-3xl">
      {text}
    </p>

    {/* progress bar */}
    <motion.span
      key={metric}
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 3.6, ease: 'linear' }} /* slightly less than delay (4s) */
      className="absolute bottom-0 left-0 h-1 bg-secondary origin-left"
      style={{ width: '100%' }}
    />
  </motion.div>
);

export default Hero;
