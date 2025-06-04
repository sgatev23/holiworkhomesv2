import React from 'react';
import { motion } from 'framer-motion';
import {
  TrendingUp,
  MapPin,
  Home,
  Activity,
} from 'lucide-react';

/* -------------------------------------------------- */
/*   DATA                                             */
/* -------------------------------------------------- */
const SEGMENTS = [
  {
    id: 0,
    title: 'Higher Returns',
    body: 'Short-term rentals earn 8–11% net yield vs 4–6% on long-term leases (AirDNA 2024).',
    icon: TrendingUp,
    color: 'fill-primary',
    start: 0,
    end: 90,
    align: 'right',
  },
  {
    id: 1,
    title: 'Rising Suburb Demand',
    body: 'Searches for rentals in outer districts are up 42% year-over-year.',
    icon: MapPin,
    color: 'fill-secondary',
    start: 90,
    end: 180,
    align: 'right',
  },
  {
    id: 2,
    title: 'Limited Supply',
    body: 'Short-term rentals make up just 1.6% of homes—less than half of peer cities (3.4%).',
    icon: Home,
    color: 'fill-secondary-dark',
    start: 180,
    end: 270,
    align: 'left',
  },
  {
    id: 3,
    title: 'Strong Price Growth',
    body: 'Average daily rates have grown 6.1% per year since 2019.',
    icon: Activity,
    color: 'fill-primary-dark',
    start: 270,
    end: 360,
    align: 'left',
  },
];

/* -------------------------------------------------- */
/*   SVG helpers                                      */
/* -------------------------------------------------- */
const polar = (r: number, deg: number) => {
  const rad = (deg - 90) * Math.PI / 180;
  return { x: 230 + r * Math.cos(rad), y: 230 + r * Math.sin(rad) };
};
const arcPath = (r1: number, r2: number, a0: number, a1: number) => {
  const p0o = polar(r1, a0), p1o = polar(r1, a1);
  const p0i = polar(r2, a0), p1i = polar(r2, a1);
  const large = a1 - a0 <= 180 ? 0 : 1;
  return [
    `M ${p0o.x} ${p0o.y}`,
    `A ${r1} ${r1} 0 ${large} 1 ${p1o.x} ${p1o.y}`,
    `L ${p1i.x} ${p1i.y}`,
    `A ${r2} ${r2} 0 ${large} 0 ${p0i.x} ${p0i.y}`,
    'Z',
  ].join(' ');
};

/* -------------------------------------------------- */
/*   Component                                        */
/* -------------------------------------------------- */
const MarketOverview: React.FC = () => (
  <section id="market-overview" className="py-28 bg-background">
    <div className="container max-w-6xl mx-auto px-4">

      {/* heading */}
      <h2 className="text-3xl md:text-4xl font-extrabold text-primary text-center mb-2">
        Bulgarian Rental Market — Key Signals
      </h2>
      <p className="text-lg text-gray-700 text-center max-w-2xl mx-auto mb-24">
        Four hard metrics every developer should track.
      </p>

      {/* layout grid */}
      <div className="grid md:grid-cols-[1fr_auto_1fr] gap-10 items-center">

        {/* ---------- left call-outs ---------- */}
        <div className="space-y-16 md:text-right">
          {SEGMENTS.filter(s => s.align === 'left').map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: .45, delay: i * .1 }}
            >
              <h3 className="font-semibold text-primary">{s.title}</h3>
              <div className="w-14 h-[2px] bg-primary/40 mx-auto md:ml-auto md:mr-0 mb-2" />
              <p className="text-sm text-gray-800 leading-relaxed">{s.body}</p>
            </motion.div>
          ))}
        </div>

        {/* ---------- donut ---------- */}
        <div className="relative mx-auto max-w-[460px] w-full">
        <svg viewBox="0 0 460 460" className="block w-full h-auto">
            {SEGMENTS.map(s => (
              <path
                key={s.id}
                d={arcPath(200, 110, s.start, s.end)}
                className={`${s.color} hover:opacity-90 transition fill-current`}
              />
            ))}
            {/* centre hole */}
            <circle cx="230" cy="230" r="90" fill="#ffffff" />
          </svg>

          {/* centre neutral icon */}
          <Bar />
          {/* segment icons */}
          {SEGMENTS.map(s => {
            const mid = (s.start + s.end) / 2;
            const pt  = polar(155, mid);
            const Icon = s.icon;
            return (
              <Icon
                key={s.id}
                className="w-6 h-6 text-white drop-shadow absolute"
                style={{ left: pt.x - 12, top: pt.y - 12 }}
              />
            );
          })}
        </div>

        {/* ---------- right call-outs ---------- */}
        <div className="space-y-16">
          {SEGMENTS.filter(s => s.align === 'right').map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: .45, delay: i * .1 }}
            >
              <h3 className="font-semibold text-primary">{s.title}</h3>
              <div className="w-14 h-[2px] bg-primary/40 mb-2" />
              <p className="text-sm text-gray-800 leading-relaxed">{s.body}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <p className="text-xs text-gray-500 text-center mt-24">
        Sources: Eurostat 2024 • AirDNA Plovdiv 05/24 • BG NSI • Knight Frank BG Review H1 2024
      </p>
    </div>
  </section>
);

/* tiny centre chart icon */
const Bar = () => (
  <svg
    viewBox="0 0 24 24"
    className="w-10 h-10 text-primary absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
    <path
      fill="currentColor"
      d="M5 11h3v8H5zm5-4h3v12h-3zm5 6h3v6h-3z"
    />
  </svg>
);

export default MarketOverview;
