import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

type FormData = {
  propertyType: string;
  bedrooms: string;
  location: string;
  name: string;
  email: string;
  phone: string;
};

const PropertyCalculator: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const [estimatedIncome, setEstimatedIncome] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = (data: FormData) => {
    setIsSubmitting(true);
    
    // Simulate API call with timeout
    setTimeout(() => {
      // Calculate estimated monthly income based on form data
      // This is a simplified example - in a real app, this would come from an API
      const baseIncome = data.propertyType === 'apartment' ? 1200 : 1800;
      const bedroomMultiplier = parseInt(data.bedrooms) * 200;
      const locationFactor = data.location === 'city-center' ? 1.2 : 1;
      
      const calculatedIncome = Math.round((baseIncome + bedroomMultiplier) * locationFactor);
      setEstimatedIncome(calculatedIncome);
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="calculator" className="section bg-white">
      <div className="container">
        <h2 className="section-title">Calculate Your Potential Income</h2>
        <p className="section-subtitle">
          Find out how much your property could earn with professional management
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="bg-background p-6 md:p-8 rounded-lg shadow-sm">
              <div className="space-y-6">
                <div className="form-group">
                  <label htmlFor="propertyType" className="form-label">Property Type</label>
                  <select 
                    id="propertyType"
                    className="form-input"
                    {...register("propertyType", { required: "Property type is required" })}
                  >
                    <option value="">Select property type</option>
                    <option value="apartment">Apartment</option>
                    <option value="house">House</option>
                    <option value="villa">Villa</option>
                  </select>
                  {errors.propertyType && <p className="text-error text-sm mt-1">{errors.propertyType.message}</p>}
                </div>
                
                <div className="form-group">
                  <label htmlFor="bedrooms" className="form-label">Number of Bedrooms</label>
                  <select 
                    id="bedrooms"
                    className="form-input"
                    {...register("bedrooms", { required: "Number of bedrooms is required" })}
                  >
                    <option value="">Select bedrooms</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4+</option>
                  </select>
                  {errors.bedrooms && <p className="text-error text-sm mt-1">{errors.bedrooms.message}</p>}
                </div>
                
                <div className="form-group">
                  <label htmlFor="location" className="form-label">Location</label>
                  <select 
                    id="location"
                    className="form-input"
                    {...register("location", { required: "Location is required" })}
                  >
                    <option value="">Select location</option>
                    <option value="city-center">City Center</option>
                    <option value="suburbs">Suburbs</option>
                  </select>
                  {errors.location && <p className="text-error text-sm mt-1">{errors.location.message}</p>}
                </div>
                
                <div className="border-t border-gray-200 pt-6">
                  <h3 className="text-lg font-medium mb-4">Contact Information</h3>
                  
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">Full Name</label>
                    <input 
                      type="text"
                      id="name"
                      className="form-input"
                      placeholder="Your name"
                      {...register("name", { required: "Name is required" })}
                    />
                    {errors.name && <p className="text-error text-sm mt-1">{errors.name.message}</p>}
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Email Address</label>
                    <input 
                      type="email"
                      id="email"
                      className="form-input"
                      placeholder="Your email"
                      {...register("email", { 
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address"
                        }
                      })}
                    />
                    {errors.email && <p className="text-error text-sm mt-1">{errors.email.message}</p>}
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="phone" className="form-label">Phone Number</label>
                    <input 
                      type="tel"
                      id="phone"
                      className="form-input"
                      placeholder="Your phone number"
                      {...register("phone", { required: "Phone number is required" })}
                    />
                    {errors.phone && <p className="text-error text-sm mt-1">{errors.phone.message}</p>}
                  </div>
                </div>
                
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary w-full py-3 text-lg"
                >
                  {isSubmitting ? 'Calculating...' : 'Calculate Earnings'}
                </button>
              </div>
            </form>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col"
          >
            <div className="bg-primary text-white p-8 rounded-lg mb-8">
              <h3 className="text-2xl font-bold mb-4">Why Choose Holiwork Homes?</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="h-6 w-6 text-secondary bg-white rounded-full flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">✓</span>
                  <span>Maximize your rental income with dynamic pricing</span>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 text-secondary bg-white rounded-full flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">✓</span>
                  <span>24/7 guest communication and support</span>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 text-secondary bg-white rounded-full flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">✓</span>
                  <span>Professional cleaning and maintenance</span>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 text-secondary bg-white rounded-full flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">✓</span>
                  <span>Property protection and insurance</span>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 text-secondary bg-white rounded-full flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">✓</span>
                  <span>Full transparency and regular reports</span>
                </li>
              </ul>
            </div>
            
            {estimatedIncome && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-secondary p-8 rounded-lg text-center"
              >
                <h3 className="text-xl font-bold mb-2">Your Estimated Monthly Income</h3>
                <p className="text-4xl font-bold mb-2">€{estimatedIncome}</p>
                <p className="text-gray-700">This is an estimate based on similar properties in your area. Contact us for a detailed assessment.</p>
                <Link to="/list-your-property" className="btn bg-primary text-white hover:bg-primary-dark mt-4 inline-block">
                  Get Started Now
                </Link>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PropertyCalculator;