import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Star, ArrowRight, TrendingUp, Calendar, Users } from 'lucide-react';
import Layout from '../components/layout/Layout';
import PageHeader from '../components/layout/PageHeader';
import veronikaImg from '../assets/testimonials/bizhubimg.jpg';
import djemImg from '../assets/testimonials/karlovska_img_test.jpg';
import georgiImg from '../assets/testimonials/pumpkinimg.jpg';
import { useTranslation } from 'react-i18next';

const SuccessStoriesPage: React.FC = () => {
  const { t } = useTranslation();

  const storyKeys = [
    { key: '1', image: veronikaImg },
    { key: '2', image: djemImg },
    { key: '3', image: georgiImg }
  ];

  const successStories = storyKeys.map(({ key, image }) => ({
    name: t(`successStories.items.${key}.name`),
    location: t(`successStories.items.${key}.location`),
    strategy: t(`successStories.items.${key}.strategy`),
    result: t(`successStories.items.${key}.result`),
    quote: t(`successStories.items.${key}.quote`),
    metrics: {
      revenue: t(`successStories.items.${key}.metrics.revenue`),
      occupancy: t(`successStories.items.${key}.metrics.occupancy`),
      rating: t(`successStories.items.${key}.metrics.rating`)
    },
    links: {
      airbnb: t(`successStories.items.${key}.links.airbnb`),
      booking: t(`successStories.items.${key}.links.booking`)
    },
    image
  }));

  return (
    <Layout>
      <PageHeader
        title={t('successStories.title')}
        subtitle={t('successStories.subtitle')}
        bgImage="https://images.pexels.com/photos/5825573/pexels-photo-5825573.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />

      <section className="section bg-[#f3f5f8]">
        <div className="container">
          {successStories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`mb-20 ${index !== successStories.length - 1 ? 'pb-20 border-b border-gray-300' : ''}`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
                <div className="flex flex-col justify-between h-full">
                  <div className="bg-white rounded-xl p-6 shadow mb-6">
                    <h3 className="text-2xl font-bold text-[#815159] mb-2">{story.name}</h3>
                    <p className="text-gray-500 mb-4 font-medium">{story.location}</p>
                    <p className="text-gray-700 mb-6">{story.strategy}</p>
                    <p className="text-gray-700 font-semibold">{story.result}</p>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow">
                    <div className="flex items-center space-x-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-secondary fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-700 italic mb-6">“{story.quote}”</p>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center">
                        <TrendingUp className="h-6 w-6 text-primary mx-auto mb-2" />
                        <p className="font-semibold text-sm">{story.metrics.revenue}</p>
                      </div>
                      <div className="text-center">
                        <Calendar className="h-6 w-6 text-primary mx-auto mb-2" />
                        <p className="font-semibold text-sm">{story.metrics.occupancy}</p>
                      </div>
                      <div className="text-center">
                        <Users className="h-6 w-6 text-primary mx-auto mb-2" />
                        <p className="font-semibold text-sm">{story.metrics.rating}</p>
                      </div>
                    </div>

                    <div className="flex justify-center gap-4 mt-6">
                      <a
                        href={story.links.airbnb}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-white border border-gray-300 px-4 py-2 rounded-md shadow-sm hover:shadow-md transition text-sm font-medium"
                      >
                        {t('successStories.viewAirbnb')}
                      </a>
                      <a
                        href={story.links.booking}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-white border border-gray-300 px-4 py-2 rounded-md shadow-sm hover:shadow-md transition text-sm font-medium"
                      >
                        {t('successStories.viewBooking')}
                      </a>

                    </div>
                  </div>
                </div>

                <div className="h-full rounded-xl overflow-hidden shadow">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg';
                    }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="section bg-primary text-white">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t('successStories.ctaTitle')}
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              {t('successStories.ctaSubtitle')}
            </p>
            <Link
              to="/list-your-property"
              className="btn bg-secondary text-gray-800 hover:bg-secondary-dark inline-flex items-center"
            >
              {t('successStories.ctaButton')} <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default SuccessStoriesPage;
