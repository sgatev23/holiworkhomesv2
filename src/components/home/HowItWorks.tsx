import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardList, Home, Users, BarChart } from 'lucide-react';
import { Link } from 'react-router-dom';

const steps = [
  {
    id: 1,
    icon: <ClipboardList className="h-8 w-8 text-primary" />,
    title: "List Your Property",
    description: "Fill out our simple form with your property details and we'll get in touch for a custom assessment."
  },
  {
    id: 2,
    icon: <Home className="h-8 w-8 text-primary" />,
    title: "Tailored Management Plan",
    description: "We'll create a personalized management strategy based on your property's unique features and your goals."
  },
  {
    id: 3,
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "We Handle Everything",
    description: "From listing optimization to guest communication, cleaning, and maintenance - we take care of it all."
  },
  {
    id: 4,
    icon: <BarChart className="h-8 w-8 text-primary" />,
    title: "Grow Your Income",
    description: "Enjoy higher occupancy rates, better reviews, and maximized income while we handle the day-to-day operations."
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="section bg-white">
      <div className="container">
        <h2 className="section-title">How It Works</h2>
        <p className="section-subtitle">
          Our streamlined process makes property management simple and hassle-free
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="bg-background p-6 rounded-lg h-full flex flex-col items-center text-center relative z-10">
                <div className="w-16 h-16 flex items-center justify-center bg-secondary/20 rounded-full mb-4">
                  {step.icon}
                </div>
                <span className="absolute top-4 right-4 text-3xl font-bold text-secondary/30">
                  {step.id}
                </span>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-5 transform -translate-y-1/2 z-0">
                    <svg className="w-10 h-10 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/list-your-property" className="btn btn-primary inline-block">
              Get Started Today
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;