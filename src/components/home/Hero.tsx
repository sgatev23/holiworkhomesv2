import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

/* ─── Swiper imports ────────────────────────────────── */
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-fade';

/**
 *  All locale-agnostic assets (e.g. images) live here.
 *  If you ever need locale-specific imagery, move the URL into the translation
 *  files alongside the copy.
 */
const SLIDE_IMAGES = [
  'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1600',
  'https://images.pexels.com/photos/7048088/pexels-photo-7048088.jpeg?auto=compress&cs=tinysrgb&w=1600',
  'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1600',
  'https://images.pexels.com/photos/6186814/pexels-photo-6186814.jpeg?auto=compress&cs=tinysrgb&w=1600',
];

/* ─── Types ──────────────────────────────────────────── */
interface SlideCopy {
  badge1: string;
  badge2: string;
  headline: string;
  sub1: string;
  sub2: string;
}

interface SlideProps extends SlideCopy {
  img: string;
}

/* ─── Hero component ─────────────────────────────────── */
const Hero: React.FC = () => {
  const { t } = useTranslation();

  /**
   * `returnObjects: true` lets i18next deliver structured data (arrays/objects)
   * instead of a plain string. We mirror the SlideCopy shape in our translation
   * files so that `slides` is fully typed.
   */
  const slides = t('hero.slides', { returnObjects: true }) as SlideCopy[];

  return (
    <section className="relative h-screen min-h-[600px] max-h-[800px] overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
        className="h-full"
      >
        {slides.map((copy, i) => (
          <SwiperSlide key={i}>
            <Slide img={SLIDE_IMAGES[i]} {...copy} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

/* ─── Individual slide ───────────────────────────────── */
const Slide: React.FC<SlideProps> = ({
  img,
  badge1,
  badge2,
  headline,
  sub1,
  sub2,
}) => {
  const { t } = useTranslation();

  return (
    <div
      className="h-full bg-cover bg-center flex items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,.55), rgba(0,0,0,.55)), url(${img})`,
      }}
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          {/* Badges */}
          <div className="flex space-x-4 mb-6">
            <span className="bg-secondary text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
              {badge1}
            </span>
            <span className="bg-secondary text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
              {badge2}
            </span>
          </div>

          {/* Headline & subtitle */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {headline}
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            {sub1}
            <br />
            {sub2}
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              to="/list-your-property"
              className="btn btn-primary text-lg shadow-sm hover:shadow-md transition-transform duration-300"
            >
              {t('hero.ctaPrimary')}
            </Link>

            <button
              onClick={() => {
                document
                  .getElementById('calculator')
                  ?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn bg-white text-lg flex items-center font-medium shadow-sm hover:shadow-md transition-transform duration-300"
              style={{ color: '#815159' }}
            >
              {t('hero.ctaSecondary')}
              <ArrowRight className="ml-2 h-5 w-5" style={{ color: '#815159' }} />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
