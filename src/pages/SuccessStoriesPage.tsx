import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Star, ArrowRight, TrendingUp, Calendar, Users } from 'lucide-react';
import Layout from '../components/layout/Layout';
import PageHeader from '../components/layout/PageHeader';

const SuccessStoriesPage: React.FC = () => {
  const successStories = [
    {
      name: 'Studios in Sozopol',
      location: 'Sozopol, Bulgaria',
      strategy:
        'After a full interior setup, we implemented dynamic pricing, professional photos, and calendar sync across Airbnb and Booking. Cleaning and guest management were automated.',
      result:
        'Revenue increased by 40% within the first 3 months. Occupancy rose from 50% to 87%. Guest satisfaction skyrocketed.',
      quote:
        "I didn’t know my property could perform this well. Nomadica turned it into a consistent income machine.",
      metrics: {
        revenue: '+40% Revenue',
        occupancy: '87% Occupancy',
        rating: '4.9 Star Avg.',
      },
    },
    {
      name: 'Knyaz Boris II 209 Apartments',
      location: 'Sofia, Bulgaria',
      strategy:
        'We transitioned the owner from long-term rental to short-term model. Furnishing upgrades, professional listings, and 24/7 guest support helped reposition the property.',
      result:
        'Monthly income more than doubled. We maintained an 85% occupancy year-round even during low season.',
      quote:
        "They made the switch so easy—I earn more and do nothing!",
      metrics: {
        revenue: '2x Monthly Income',
        occupancy: '85% Occupancy',
        rating: '5.0 Star Avg.',
      },
    },
    {
      name: '1BR Apartment in Plovdiv',
      location: 'Plovdiv, Bulgaria',
      strategy:
        'This was an inherited property. We handled furnishing, setup, licensing, listing, and full management. Owners live abroad.',
      result:
        'Net profit paid off setup costs within 4 months. It now delivers passive income without lifting a finger.',
      quote:
        "We live in the UK. Nomadica gave us a fully hands-off investment.",
      metrics: {
        revenue: 'Payback in 4 Months',
        occupancy: '90% Occupancy',
        rating: '4.8 Star Avg.',
      },
    },
  ];

  return (
    <Layout>
      <PageHeader
        title="Owner Success Stories"
        subtitle="See how Nomaica helped property owners increase revenue, occupancy, and peace of mind."
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
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-white border border-gray-300 px-4 py-2 rounded-md shadow-sm hover:shadow-md transition text-sm font-medium"
                      >
                        View on Airbnb
                      </a>
                      <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-white border border-gray-300 px-4 py-2 rounded-md shadow-sm hover:shadow-md transition text-sm font-medium"
                      >
                        View on Booking.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="h-full rounded-xl overflow-hidden shadow">
                  <img
                    src={`https://images.pexels.com/photos/${7000000 + index}/pexels-photo-${7000000 + index}.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}
                    alt={story.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
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
              Ready to write your own story?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Let Nomadica turn your property into a high-performing asset with no stress and full transparency.
            </p>
            <Link
              to="/list-your-property"
              className="btn bg-secondary text-gray-800 hover:bg-secondary-dark inline-flex items-center"
            >
              List Your Property
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default SuccessStoriesPage;
