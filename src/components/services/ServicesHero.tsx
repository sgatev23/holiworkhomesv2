import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { useTranslation } from 'react-i18next';

/* Lines that rotate under the subtitle */

const ServicesHero: React.FC = () => {
  const { t } = useTranslation();
  const slides = t('servicesPage.hero.slides', {
    returnObjects: true,
  }) as { line: string; sub: string }[];

  return (
    <section className="relative h-[520px] md:h-[640px] overflow-hidden">

    {/* 🔹 background video (replace src) */}
    <video
      className="absolute inset-0 w-full h-full object-cover"
      src="https://wphhabpebydwwvgqtwmw.supabase.co/storage/v1/object/public/blog-images//Videocentric%20Minimalist%20Real%20Estate%20Virtual%20%20Property%20Tour%20Facebook%20Video.mp4"
      autoPlay
      muted
      playsInline
      loop
      crossOrigin="anonymous"
    />

    {/* tinted overlay */}
    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

    {/* rotating one-liners */}
    <Swiper
      modules={[Autoplay, EffectFade]}
      effect="fade"
      fadeEffect={{ crossFade: true }}
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      loop
      className="relative h-full"
    >
      {slides.map(({ line, sub }) => (
        <SwiperSlide key={line}>
          <Slide line={line} sub={sub} />
        </SwiperSlide>
      ))}
    </Swiper>

    {/* keyframes for progress bar */}
    <style>{`@keyframes grow { from{transform:scaleX(0)} to{transform:scaleX(1)} }`}</style>
  </section>
  );
};

const Slide: React.FC<{ line: string; sub: string }> = ({ line, sub }) => (
  <div className="flex items-center justify-center h-full">
    <div className="text-center px-4">
      <h2 className="text-4xl md:text-5xl font-extrabold text-white">{line}</h2>
      <p className="mt-2 text-lg md:text-xl text-secondary-light">{sub}</p>

      {/* progress bar */}
      <span className="block mt-6 w-32 h-1 bg-secondary animate-[grow_2.2s_linear]" />
    </div>
  </div>
);

export default ServicesHero;
