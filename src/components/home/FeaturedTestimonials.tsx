import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Star, ArrowRight } from 'lucide-react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from 'react-i18next';

const testimonials = [
  {
    id: 1,
    name: "Djem Rahmi",
    property: "Два тристайни апартамента в Пловдив",
    quote: "Откакто работя с Nomadica, приходите ми от наеми се увеличиха с 40%. Обслужването и комуникацията са на най-високо ниво.",
    stars: 5
  },
  {
    id: 2,
    name: "Елеонора Дичева",
    property: "Студиа в Созопол",
    quote: "Екипът на Nomadica превърна вилата ми в един от най-желаните имоти под наем. Детайлността и грижата им са впечатляващи.",
    stars: 5
  },
  {
    id: 3,
    name: "Georgi Petrov",
    property: "Апартамент в Платинум Хоумс, Пловдив",
    quote: "Като човек, който живее в чужбина, имах нужда от надежден партньор. Nomadica ми осигурява спокойствие и стабилни приходи.",
    stars: 5
  },
  {
    id: 4,
    name: "Georgi Denev",
    property: "Едностаен апартамент в София",
    quote: "Приходите ми изплатиха изцяло ипотеката ми. Благодаря ви, Nomadica!",
    stars: 5
  },
  {
    id: 5,
    name: "Ivan Georgiev",
    property: "Двустаен апартамент в София",
    quote: "Изключително професионално обслужване. Особено ценя месечните отчети и добрата селекция на гости!",
    stars: 5
  }
];

const FeaturedTestimonials: React.FC = () => {
  const { t } = useTranslation();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <section className="py-5 bg-[#f3f5f8]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-[#fdf4e3] rounded-xl p-10 shadow-md">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-[#815159] mb-4">{t('featuredTestimonials.title')}</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              {t('featuredTestimonials.subtitle')}
            </p>
          </div>

          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="px-2"
              >
                <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 h-full">
                  <div className="flex items-center mb-4 space-x-1">
                    {[...Array(testimonial.stars)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-[#f4cf94] fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 italic mb-6">“{testimonial.quote}”</p>
                  <div className="flex items-center">
                    {testimonial.image && (
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover mr-4"
                      />
                    )}
                    <div>
                      <h4 className="font-semibold text-[#815159]">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.property}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </Slider>

          <div className="text-center mt-10">
            <Link
              to="/success-stories"
              className="inline-flex items-center text-[#815159] font-semibold hover:underline transition"
            >
              {t('featuredTestimonials.cta')} <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTestimonials;