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
import { useTranslation } from 'react-i18next';

const studies = [
  {
    id: 1,
    title: 'Gerbera Development',
    sub: 'Пловдив · 4 апартамента (2 x 2-стайни, 2 x 1-стайни)',
    image: 'https://wphhabpebydwwvgqtwmw.supabase.co/storage/v1/object/public/blog-images//Gerbera.jpeg',
    problem: 'Инвеститорът търсеше решение с гарантирана доходност и атрактивна доходност за бъдещи купувачи.',
    solution: 'Nomadica пое управлението с гарантиран наем, интериорен подбор и цялостна STR реализация.',
    boughtFor: '€ 320 000',
    sqm: 290,
    longRent: '€ 1000 / месец',
    shortRent: '€ 1750 / месец',
    credit: '≈ -50 % по-нисък',
    yield: '8.5 %',
    holdTime: '3.5 години',
    appreciation: '+25% годишно',
  },
  {
    id: 2,
    title: 'Platinum Homes',
    sub: 'Пловдив · 2 x 1-стайни апартамента',
    image: 'https://wphhabpebydwwvgqtwmw.supabase.co/storage/v1/object/public/blog-images//Platinum-Homes-1-min.jpg',
    problem: 'Луксозни апартаменти в груб строеж стояха празни над 7 месеца.',
    solution: 'Бързо довършване, включване в Nomadica мрежа и 93 % заетост с бизнес гости.',
    boughtFor: '€ 120 000',
    sqm: 160,
    longRent: '€ 800 / месец',
    shortRent: '€ 1600 / месец',
    credit: '-48 %',
    yield: '12.5 %',
    holdTime: '4 години',
    appreciation: '+40% годишно',
  },
  {
    id: 3,
    title: 'Княз Борис II 209',
    sub: 'София · 2 x 1-стайни апартамента',
    image: 'https://wphhabpebydwwvgqtwmw.supabase.co/storage/v1/object/public/blog-images//_2.jpeg',
    problem: 'Жилищата не намираха наематели на дългосрочния пазар поради пренасищане.',
    solution: 'Хибриден STR + MTR модел и динамично ценообразуване увеличиха доходността с 30 %.',
    boughtFor: '€ 530 000',
    sqm: 310,
    longRent: '€ 1000 / месец',
    shortRent: '€ 2200 / месец',
    credit: '-52 %',
    yield: '7.8 %',
    holdTime: '4 години',
    appreciation: '+7 % годишно',
  },
];

const CaseStudies: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section id="case-studies" className="overflow-hidden">
      <Swiper
        modules={[Autoplay]}
        slidesPerView={1}
        loop
        speed={1000}
        autoplay={{ delay: 7000, disableOnInteraction: false }}
        className="h-screen"
      >
        {studies.map((s) => (
          <SwiperSlide key={s.id}>
            <div className="h-screen w-full grid grid-cols-1 md:grid-cols-2">
              <div className="flex flex-col justify-center px-8 md:px-16 py-12 bg-[#1c1c1c] text-white">
                <h3 className="text-3xl md:text-4xl font-bold mb-2">{s.title}</h3>
                <p className="uppercase text-sm tracking-wider mb-6 opacity-80">{s.sub}</p>

                <div className="space-y-4 text-sm md:text-base leading-relaxed mb-6">
                  <p><span className="font-semibold">Предизвикателство:</span> {s.problem}</p>
                  <p><span className="font-semibold">Решение:</span> {s.solution}</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                  <Metric icon={DollarSign} label="Цена" value={s.boughtFor} />
                  <Metric icon={Ruler} label="кв.м" value={s.sqm.toLocaleString()} />
                  <Metric icon={Home} label="Дългосрочно" value={s.longRent} />
                  <Metric icon={TrendingUp} label="Краткосрочно" value={s.shortRent} />
                  <Metric icon={Banknote} label="Кредит" value={s.credit} />
                  <Metric icon={Percent} label="Доходност" value={s.yield} />
                  <Metric icon={Calendar} label="Период на задържане" value={s.holdTime} />
                  <Metric icon={TrendingUp} label="Оценка" value={s.appreciation} />
                </div>

                <button className="mt-10 px-6 py-3 border border-white rounded-full hover:bg-white hover:text-[#815159] transition-colors w-fit text-lg">
                  Научи повече
                </button>
              </div>

              <div className="h-full w-full">
                <img
                  src={s.image}
                  alt={s.title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

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
      <div className="text-[11px] uppercase tracking-wide opacity-60">{label}</div>
    </div>
  </div>
);

export default CaseStudies;
