import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-fade';

/* Lines that rotate under the subtitle */
const HERO_SLIDES = [
    { line: 'Professional Management for Homeowners',         sub: 'Choose the revenue model that fits your strategy — we take care of everything else.' },
  { line: 'Cohosting',         sub: 'Keep the upside — we run the ops' },
  { line: 'Short-Term Lets',   sub: 'Max ADR & occupancy via 24/7 revenue-ops' },
  { line: 'Mid- / Long-Term',  sub: 'Corporate blocks, 30 + nights, zero vacancy' },
  { line: 'Property Setup',    sub: 'Design, furnish & list in ≤14 days' },
];

const ServicesHero: React.FC = () => (
  <section className="relative h-[520px] md:h-[640px] overflow-hidden">

    {/* 🔹 background video (replace src) */}
    <video
      className="absolute inset-0 w-full h-full object-cover"
      src="https://cdn.example.com/videos/services-bg.mp4"
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
      {HERO_SLIDES.map(({ line, sub }) => (
        <SwiperSlide key={line}>
          <Slide line={line} sub={sub} />
        </SwiperSlide>
      ))}
    </Swiper>

    {/* keyframes for progress bar */}
    <style>{`@keyframes grow { from{transform:scaleX(0)} to{transform:scaleX(1)} }`}</style>
  </section>
);

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
