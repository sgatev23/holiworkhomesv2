import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[800px] bg-cover bg-center flex items-center"
      style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1600)' }}
    >
      <div className="container">
        <div className="max-w-2xl">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <div className="flex space-x-4 mb-6">
              <span className="bg-secondary text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                Airbnb Superhost
              </span>
              <span className="bg-secondary text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                Booking 2025 Award Winner
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Maximize Your Property's Potential
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Professional property management and co-hosting services that increase your revenue while eliminating the hassle.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <Link to="/list-your-property" className="btn btn-primary text-lg">
              List Your Property
            </Link>
            <Link to="#calculator" className="btn bg-white text-gray-800 hover:bg-gray-100 text-lg flex items-center">
              Calculate Earnings
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;