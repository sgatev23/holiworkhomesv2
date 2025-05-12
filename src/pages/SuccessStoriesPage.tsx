import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Star, ArrowRight, TrendingUp, Calendar, Users } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Layout from '../components/layout/Layout';
import PageHeader from '../components/layout/PageHeader';

const SuccessStoriesPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <PageHeader
        title={t('successStories.pageTitle')}
        subtitle={t('successStories.pageSubtitle')}
        bgImage="https://images.pexels.com/photos/5825573/pexels-photo-5825573.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />

      <section className="section bg-white">
        <div className="container">
          {t('successStories.stories', { returnObjects: true }).map((story: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`mb-20 ${
                index !== t('successStories.stories', { returnObjects: true }).length - 1
                  ? 'pb-20 border-b border-gray-200'
                  : ''
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <div>
                  <div className="bg-background rounded-lg p-6 mb-8">
                    <h3 className="text-2xl font-bold mb-2">{story.name}</h3>
                    <p className="text-gray-600 mb-4">{story.location}</p>
                    <p className="text-gray-800 mb-6">{story.strategy}</p>
                    <p className="text-gray-700">{story.result}</p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
                    <div className="flex items-center space-x-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-secondary fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-700 italic mb-6">&ldquo;{story.quote}&rdquo;</p>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center">
                        <TrendingUp className="h-6 w-6 text-primary mx-auto mb-2" />
                        <p className="font-semibold">{story.metrics.revenue}</p>
                      </div>
                      <div className="text-center">
                        <Calendar className="h-6 w-6 text-primary mx-auto mb-2" />
                        <p className="font-semibold">{story.metrics.occupancy}</p>
                      </div>
                      <div className="text-center">
                        <Users className="h-6 w-6 text-primary mx-auto mb-2" />
                        <p className="font-semibold">{story.metrics.rating}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="relative aspect-video rounded-lg overflow-hidden mb-8">
                    <img
                      src={`https://images.pexels.com/photos/${7000000 + index}/pexels-photo-${7000000 + index}.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}
                      alt={story.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
                      }}
                    />
                  </div>
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
              {t('successStories.cta.title')}
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              {t('successStories.cta.subtitle')}
            </p>
            <Link
              to="/list-your-property"
              className="btn bg-secondary text-gray-800 hover:bg-secondary-dark inline-flex items-center"
            >
              {t('successStories.cta.button')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default SuccessStoriesPage;