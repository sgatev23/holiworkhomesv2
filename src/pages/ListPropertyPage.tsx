import React from 'react';
import Layout from '../components/layout/Layout';
import PageHeader from '../components/layout/PageHeader';
import { useForm } from 'react-hook-form';
import { Camera, Home, MapPin, Mail, Phone, User } from 'lucide-react';

type FormData = {
  name: string;
  email: string;
  phone: string;
  propertyType: string;
  location: string;
  bedrooms: string;
  bathrooms: string;
  message: string;
};

const ListPropertyPage: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <Layout>
      <PageHeader
        title="List Your Property"
        subtitle="Partner with us to maximize your property's potential"
        bgImage="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg"
      />

      <section className="section bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Choose Holiwork Homes?</h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mr-4">
                    <Camera className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Professional Photography</h3>
                    <p className="text-gray-600">We provide professional photography services to showcase your property at its best.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mr-4">
                    <Home className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Full Property Management</h3>
                    <p className="text-gray-600">From guest communication to cleaning and maintenance, we handle everything.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mr-4">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Local Expertise</h3>
                    <p className="text-gray-600">Our team knows the local market and how to maximize your property's potential.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4">What to Expect</h3>
                <ol className="space-y-4">
                  <li className="flex items-center">
                    <span className="w-8 h-8 rounded-full bg-secondary text-gray-800 flex items-center justify-center font-semibold mr-3">1</span>
                    <span>Submit your property details</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-8 h-8 rounded-full bg-secondary text-gray-800 flex items-center justify-center font-semibold mr-3">2</span>
                    <span>Free property assessment</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-8 h-8 rounded-full bg-secondary text-gray-800 flex items-center justify-center font-semibold mr-3">3</span>
                    <span>Custom management proposal</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-8 h-8 rounded-full bg-secondary text-gray-800 flex items-center justify-center font-semibold mr-3">4</span>
                    <span>Start earning more</span>
                  </li>
                </ol>
              </div>
            </div>

            <div>
              <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 md:p-8 rounded-lg shadow-sm">
                <h3 className="text-2xl font-semibold mb-6">Property Details</h3>
                
                <div className="space-y-6">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">Full Name</label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        id="name"
                        className="form-input pl-10"
                        placeholder="Your name"
                        {...register("name", { required: "Name is required" })}
                      />
                    </div>
                    {errors.name && <p className="text-error text-sm mt-1">{errors.name.message}</p>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        id="email"
                        className="form-input pl-10"
                        placeholder="Your email"
                        {...register("email", {
                          required: "Email is required",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address"
                          }
                        })}
                      />
                    </div>
                    {errors.email && <p className="text-error text-sm mt-1">{errors.email.message}</p>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone" className="form-label">Phone Number</label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="tel"
                        id="phone"
                        className="form-input pl-10"
                        placeholder="Your phone number"
                        {...register("phone", { required: "Phone number is required" })}
                      />
                    </div>
                    {errors.phone && <p className="text-error text-sm mt-1">{errors.phone.message}</p>}
                  </div>

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
                      <option value="studio">Studio</option>
                    </select>
                    {errors.propertyType && <p className="text-error text-sm mt-1">{errors.propertyType.message}</p>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="location" className="form-label">Location</label>
                    <input
                      type="text"
                      id="location"
                      className="form-input"
                      placeholder="Property location"
                      {...register("location", { required: "Location is required" })}
                    />
                    {errors.location && <p className="text-error text-sm mt-1">{errors.location.message}</p>}
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="form-group">
                      <label htmlFor="bedrooms" className="form-label">Bedrooms</label>
                      <select
                        id="bedrooms"
                        className="form-input"
                        {...register("bedrooms", { required: "Number of bedrooms is required" })}
                      >
                        <option value="">Select</option>
                        <option value="studio">Studio</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4+</option>
                      </select>
                      {errors.bedrooms && <p className="text-error text-sm mt-1">{errors.bedrooms.message}</p>}
                    </div>

                    <div className="form-group">
                      <label htmlFor="bathrooms" className="form-label">Bathrooms</label>
                      <select
                        id="bathrooms"
                        className="form-input"
                        {...register("bathrooms", { required: "Number of bathrooms is required" })}
                      >
                        <option value="">Select</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3+</option>
                      </select>
                      {errors.bathrooms && <p className="text-error text-sm mt-1">{errors.bathrooms.message}</p>}
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message" className="form-label">Additional Information</label>
                    <textarea
                      id="message"
                      className="form-input h-32"
                      placeholder="Tell us more about your property..."
                      {...register("message")}
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary w-full py-3 text-lg">
                    Submit Property
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ListPropertyPage;