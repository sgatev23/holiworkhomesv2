import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { motion } from 'framer-motion';

/* ------------------- INSIGHTS ------------------- */
const SLIDES = [
    {
        metric: 'Partnering with Nomadica',
        headline: 'Earn 40–60 % higher rental income',
        text: 'Convert inventory into high-yield serviced apartments without sacrificing exit flexibility.',
        isTitle: true,        
      },
  
{
    metric: '8–11 %',
    headline: 'Gross yield on Plovdiv serviced apartments',
    text: 'versus 4–6 % on conventional 12-month lets (AirDNA & local comps, 2024).',
  },
  {
    metric: '38 % YoY',
    headline: 'Rise in furnished-stay search volume',
    text: 'driven by events & nomad blocks of 28+ nights (AirDNA Q1-24).',
  },
  {
    metric: '1.6 %',
    headline: 'STR penetration of total housing stock',
    text: 'half the saturation seen in comparable CEE hubs, leaving headroom for new units.',
  },
  {
    metric: '+6.1 % CAGR',
    headline: 'Average Daily Rate growth 2019-23',
    text: 'outpacing inflation-adjusted pressure on long-term rents.',
  },
  {
    metric: '42 % YoY',
    headline: 'Peripheral-district demand jump',
    text: 'searches for Trakia & H. Smirnenski outpaced CBD by mid-2024.',
  },
];

/* ------------------- COMPONENT ------------------ */
const MarketOverview: React.FC = () => (
  <section id="market-overview" className="relative h-[520px] md:h-[680px] overflow-hidden">
    {/* Background video */}
    <video
      className="absolute inset-0 w-full h-full object-cover"
      src="/videos/market-bg.mp4"
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
      {SLIDES.map((s) => (
        <SwiperSlide key={s.metric}>
          <SlideContent {...s} />
        </SwiperSlide>
      ))}
    </Swiper>

    {/* Sources */}
    <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs text-gray-300">
      Sources: Eurostat 2024 • AirDNA Plovdiv (2024-05) • Bulgarian NSI • Knight Frank BG H1-24
    </p>
  </section>
);

/* ----------------- Slide Content ---------------- */
interface Slide {
  metric: string;
  headline: string;
  text: string;
}

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

export default MarketOverview;
