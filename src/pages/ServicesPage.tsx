import React from 'react';
import Layout from '../components/layout/Layout';
import PageHeader from '../components/layout/PageHeader';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';

const cohostingFeatures = [
  "Listing creation and optimization across platforms",
  "Professional photography coordination",
  "Dynamic pricing to maximize revenue",
  "Guest screening and communication",
  "24/7 guest support",
  "Review management",
  "Regular performance reports"
];

const propertyManagementFeatures = [
  "Everything in the Co-hosting package",
  "Check-in and check-out management",
  "Professional cleaning coordination",
  "Linen and amenities restocking",
  "Maintenance coordination",
  "Regular property inspections",
  "Local emergency response"
];

const ServicesPage: React.FC = () => {
  return (
    <Layout>
      <PageHeader 
        title="Our Services" 
        subtitle="Choose the right level of property management for your Holiwork Home"
        bgImage="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />
      
      <section className="section bg-white">
        <div className="container">
          <h2 className="section-title">Choose Your Management Solution</h2>
          <p className="section-subtitle">
            We offer flexible services tailored to your specific needs and property location
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="bg-primary text-white p-6 text-center">
                <h3 className="text-2xl font-bold">Co-hosting</h3>
                <p className="mt-2">Perfect for hands-on owners who need listing and booking management</p>
                <div className="mt-4 text-3xl font-bold">
                  From 15%
                  <span className="text-base font-normal"> of booking revenue</span>
                </div>
              </div>
              
              <div className="p-6">
                <ul className="space-y-3">
                  {cohostingFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-8">
                  <Link 
                    to="/list-your-property" 
                    className="btn btn-primary w-full text-center"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow relative"
            >
              <div className="absolute top-4 right-4">
                <div className="bg-secondary text-gray-800 px-3 py-1 rounded-full text-sm font-medium flex items-center">
                  <Star className="h-4 w-4 mr-1 fill-current" />
                  Most Popular
                </div>
              </div>
              
              <div className="bg-primary-dark text-white p-6 text-center">
                <h3 className="text-2xl font-bold">Comprehensive Property Management</h3>
                <p className="mt-2">Full-service solution for hands-off property owners</p>
                <div className="mt-4 text-3xl font-bold">
                  From 20%
                  <span className="text-base font-normal"> of booking revenue</span>
                </div>
                <p className="mt-2 text-sm bg-white/10 p-2 rounded">Available in select cities only</p>
              </div>
              
              <div className="p-6">
                <ul className="space-y-3">
                  {propertyManagementFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-8">
                  <Link 
                    to="/list-your-property" 
                    className="btn btn-primary w-full text-center"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <section className="section bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Holiwork Homes?</h2>
              <p className="text-gray-700 mb-4">
                We understand that your property is more than just an investment—it's your home. That's why we take a personalized approach to property management, treating each home with the care and attention it deserves.
              </p>
              <p className="text-gray-700 mb-6">
                Our team combines local expertise with industry-leading practices to deliver exceptional results. We're committed to transparency, regular communication, and maximizing your property's potential.
              </p>
              
              <div className="bg-white p-5 rounded-lg shadow-sm mb-6">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 flex items-center justify-center bg-secondary rounded-full mr-3">
                    <span className="text-gray-800 font-bold">+</span>
                  </div>
                  <h4 className="text-xl font-semibold">Increased Revenue</h4>
                </div>
                <p className="text-gray-600">Our clients typically see a 20-40% increase in rental income after switching to Holiwork Homes management.</p>
              </div>
              
              <Link to="/guarantees" className="text-primary font-medium hover:text-primary-dark transition-colors">
                Read about our guarantees →
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <h3 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-lg mb-2">What areas do you service?</h4>
                  <p className="text-gray-600">We currently offer co-hosting services throughout Bulgaria and comprehensive property management in select cities including Sofia, Plovdiv, and Varna.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-lg mb-2">How much can I expect to earn?</h4>
                  <p className="text-gray-600">Earnings vary based on property type, location, season, and amenities. Use our Property Calculator for an estimate, or contact us for a personalized assessment.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-lg mb-2">Do I need to prepare my property?</h4>
                  <p className="text-gray-600">We'll provide recommendations for optimizing your property. Basic furnishings and amenities are required, but we can help coordinate these if needed.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-lg mb-2">How are payments handled?</h4>
                  <p className="text-gray-600">We provide monthly direct deposits with detailed statements of earnings, expenses, and our commission. Complete transparency is our priority.</p>
                </div>
              </div>
            </motion.div>
          </div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Maximize Your Rental Income?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Join the Holiwork Homes family of successful property owners today.
            </p>
            <Link to="/list-your-property" className="btn bg-secondary text-gray-800 hover:bg-secondary-dark">
              List Your Property Now
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default ServicesPage;