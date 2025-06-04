import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css';

import {
  DollarSign,
  Ruler,
  TrendingUp,
  Home,
  Percent,
  Calendar,
  Banknote,
} from 'lucide-react';

/* ------------------------------------------------------------------ */
/*  Demo data – replace with CMS / API later                          */
/* ------------------------------------------------------------------ */
const studies = [
  {
    id: 1,
    title: 'Gerbera Development',
    sub: 'Plovdiv · 4 apartments',
    image:
      'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=1200&q=60',

    /* NEW FIELDS */
    problem:
      'Developer needed to de-risk presales and hit ~8 % yield for investors.',
    solution:
      'Nomadica underwrote guaranteed rent, furnished units, marketed on STR channels and managed ops end-to-end.',

    boughtFor: '€ 420 000',
    sqm: 290,
    longRent: '€ 1 950 / mo',
    shortRent: '€ 2 535 / mo',
    credit: '≈ 50 % lower',
    yield: '8.5 %',
    holdTime: '3.5 yrs',
    appreciation: '+6 % YoY',
  },
  {
    id: 2,
    title: 'Platinum Homes',
    sub: 'Plovdiv · 2 lofts',
    image:
      'https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=1200&q=60',
    problem: 'A-class shell-and-core lofts sat vacant for 7 months.',
    solution:
      'Rapid fit-out, Nomadica booking engine and mid-term corporate lets filled 93 % of nights.',
    boughtFor: '€ 210 000',
    sqm: 160,
    longRent: '€ 1 100 / mo',
    shortRent: '€ 1 435 / mo',
    credit: '-48 %',
    yield: '9.2 %',
    holdTime: '2 yrs',
    appreciation: '+5 % YoY',
  },
  {
    id: 3,
    title: 'Knyaz Boris II',
    sub: 'Sofia · 2 penthouses',
    image:
      'https://images.unsplash.com/photo-1599423300746-b62533397364?auto=format&fit=crop&w=1200&q=60',
    problem: 'High-end units struggled against oversupply in LT rental market.',
    solution:
      'Switched to hybrid STR + MTR model; dynamic pricing engine boosted net rent 30 %.',
    boughtFor: '€ 530 000',
    sqm: 310,
    longRent: '€ 2 350 / mo',
    shortRent: '€ 3 055 / mo',
    credit: '-52 %',
    yield: '7.8 %',
    holdTime: '4 yrs',
    appreciation: '+7 % YoY',
  },
];

/* ------------------------------------------------------------------ */
/*  Component                                                         */
/* ------------------------------------------------------------------ */
const CaseStudies: React.FC = () => (
  <section
    id="case-studies"
    className="bg-[#815159] py-28 overflow-hidden text-white"
  >
    <div className="container">
      {/* title */}
      <header className="mb-14">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-wide">
          Success Stories
        </h2>
        <p className="opacity-80 mt-3 max-w-2xl">
          Real-world results from developers who partnered with Nomadica
        </p>
      </header>

      {/* carousel */}
      <Swiper
        modules={[Autoplay]}
        centeredSlides={false}
        slidesPerView={1.15}
        spaceBetween={28}
        speed={9000}
        loop
        autoplay={{
          delay: 0, // makes it roll continuously
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: { slidesPerView: 1.4 },
          768: { slidesPerView: 1.7 },
          1024: { slidesPerView: 2.6 },
          1440: { slidesPerView: 3.3 },
        }}
      >
        {studies.map((s) => (
          <SwiperSlide key={s.id} className="group">
            <div className="rounded-3xl overflow-hidden shadow-2xl bg-[#1c1c1c]/90 backdrop-blur-sm">
              {/* hero image */}
              <div className="relative">
                <img
                  src={s.image}
                  alt={s.title}
                  className="h-80 w-full object-cover group-hover:scale-105 transition-transform duration-[3000ms]"
                />
              </div>

              {/* content */}
              <div className="p-6 md:p-8">
                <h3 className="font-extrabold text-2xl mb-1">{s.title}</h3>
                <p className="text-sm uppercase tracking-wider opacity-75 mb-5">
                  {s.sub}
                </p>

                {/* Problem & Solution */}
                <div className="space-y-4 text-sm leading-snug">
                  <p>
                    <span className="font-semibold">Challenge&nbsp;·&nbsp;</span>
                    {s.problem}
                  </p>
                  <p>
                    <span className="font-semibold">Solution&nbsp;·&nbsp;</span>
                    {s.solution}
                  </p>
                </div>

                {/* metrics */}
                <div className="grid grid-cols-2 gap-x-4 gap-y-3 text-sm mt-6">
                  <Metric icon={DollarSign} label="Bought for" value={s.boughtFor} />
                  <Metric icon={Ruler} label="Total sqm" value={s.sqm.toLocaleString()} />
                  <Metric icon={Home} label="LT rent" value={s.longRent} />
                  <Metric
                    icon={TrendingUp}
                    label="ST rent"
                    value={`${s.shortRent}  (+30 %)`}
                  />
                  <Metric
                    icon={Banknote}
                    label="Credit Payable"
                    value={s.credit}
                  />
                  <Metric icon={Percent} label="Yield" value={s.yield} />
                  <Metric icon={Calendar} label="Hold time" value={s.holdTime} />
                  <Metric
                    icon={TrendingUp}
                    label="Appreciation"
                    value={s.appreciation}
                  />
                </div>

                {/* CTA */}
                <button
                  className="mt-8 w-full border border-white/60 py-3 rounded-lg text-sm font-semibold
                             hover:bg-white hover:text-[#815159] transition-colors duration-300"
                >
                  Read Case Study
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </section>
);

/* helper metric pill */
const Metric = ({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ElementType;
  label: string;
  value: string | number;
}) => (
  <div className="flex items-start gap-1">
    <Icon className="w-4 h-4 shrink-0 mt-0.5" />
    <div>
      <div className="font-semibold leading-none">{value}</div>
      <div className="text-[11px] uppercase tracking-wide opacity-60">
        {label}
      </div>
    </div>
  </div>
);

export default CaseStudies;
