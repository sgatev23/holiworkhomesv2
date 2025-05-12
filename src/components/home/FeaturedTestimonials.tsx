import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Star, ArrowRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Maria Ivanova",
    property: "3-Bedroom Apartment in Sofia",
    quote: "Since partnering with Holiwork Homes, my rental income has increased by 40%. Their professional management and communication are impeccable.",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    stars: 5
  },
  {
    id: 2,
    name: "Stefan Petrov",
    property: "Villa in Varna",
    quote: "The team at Holiwork Homes has transformed my property into a top-performing rental. I'm amazed at their attention to detail and guest satisfaction.",
    image: "https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    stars: 5
  },
  {
    id: 3,
    name: "Elena Dimitrova",
    property: "Studio in Plovdiv",
    quote: "As someone who lives abroad, I needed reliable property management. Holiwork Homes delivers peace of mind and excellent returns.",
    image: "https://images.pexels.com/photos/3765114/pexels-photo-3765114.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    stars: 5
  }
];

const FeaturedTestimonials: React.FC = () => {
  return (
    <section className="section bg-background">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Success Stories</h2>
            <p className="text-gray-600 max-w-2xl">
              See how property owners like you are achieving exceptional results with Holiwork Homes
            </p>
          </div>
          <Link to="/success-stories" className="mt-4 md:mt-0 text-primary font-medium flex items-center hover:text-primary-dark transition-colors">
            View All Stories <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-secondary fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">&ldquo;{testimonial.quote}&rdquo;</p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.property}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedTestimonials;