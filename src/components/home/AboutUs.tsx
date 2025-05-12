import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Clock, PiggyBank, Award } from 'lucide-react';

const AboutUs: React.FC = () => {
  return (
    <section id="about-us" className="section bg-background">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Who We Are</h2>
            <p className="text-gray-700 mb-6">
              Holiwork Homes is a professional property management and co-hosting service dedicated to maximizing your rental property's potential while providing a seamless experience for both owners and guests.
            </p>
            <p className="text-gray-700 mb-8">
              Founded by property owners for property owners, we understand the challenges and opportunities in the short-term rental market. Our team of experts combines local knowledge with industry best practices to deliver exceptional results for your property.
            </p>
            
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex items-center mb-2">
                  <Shield className="h-5 w-5 text-primary mr-2" />
                  <h4 className="font-semibold">Property Protection</h4>
                </div>
                <p className="text-sm text-gray-600">Comprehensive security and property protection measures</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex items-center mb-2">
                  <Clock className="h-5 w-5 text-primary mr-2" />
                  <h4 className="font-semibold">Time Saving</h4>
                </div>
                <p className="text-sm text-gray-600">We handle everything, saving you valuable time</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex items-center mb-2">
                  <PiggyBank className="h-5 w-5 text-primary mr-2" />
                  <h4 className="font-semibold">Income Growth</h4>
                </div>
                <p className="text-sm text-gray-600">Dynamic pricing and optimization for maximum returns</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex items-center mb-2">
                  <Award className="h-5 w-5 text-primary mr-2" />
                  <h4 className="font-semibold">5-Star Service</h4>
                </div>
                <p className="text-sm text-gray-600">Top-rated guest experiences and owner satisfaction</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -top-4 -left-4 w-24 h-24 md:w-32 md:h-32 bg-secondary rounded-lg z-0"></div>
            <img 
              src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Holiwork Homes Team" 
              className="rounded-lg shadow-lg w-full relative z-10"
            />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 md:w-32 md:h-32 bg-primary rounded-lg z-0"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;