import React from 'react';
import Layout from '../components/layout/Layout';
import PageHeader from '../components/layout/PageHeader';
import { useForm } from 'react-hook-form';
import { Camera, Home, MapPin, Mail, Phone, User } from 'lucide-react';

const ListPropertyPage: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    // Handle form submission logic
  };

  return (
    <Layout>
      <PageHeader
        title="List Your Property"
        subtitle="Partner with us to maximize your property's potential"
        bgImage="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg"
      />

      <section className="bg-[#f3f5f8] py-16">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold text-[#6a3b3b] mb-6">Why Partner With Holiwork Homes?</h2>

            <div className="space-y-6 mb-10">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-[#e7dcd4] rounded-lg flex items-center justify-center mr-4">
                  <Camera className="w-6 h-6 text-[#6a3b3b]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1 text-[#6a3b3b]">Professional Photography</h3>
                  <p className="text-gray-700">We make your property stand out with high-quality visuals that attract top-tier guests and tenants.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-[#e7dcd4] rounded-lg flex items-center justify-center mr-4">
                  <Home className="w-6 h-6 text-[#6a3b3b]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1 text-[#6a3b3b]">Comprehensive Management</h3>
                  <p className="text-gray-700">From A to Z — we handle bookings, communication, maintenance, and pricing so you don’t have to.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-[#e7dcd4] rounded-lg flex items-center justify-center mr-4">
                  <MapPin className="w-6 h-6 text-[#6a3b3b]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1 text-[#6a3b3b]">Local Market Experts</h3>
                  <p className="text-gray-700">We live where you rent. Our team optimizes for local demand, seasons, and trends.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-4 text-[#6a3b3b]">What to Expect</h3>
              <ol className="space-y-4">
                {['Submit your property details', 'Free property assessment', 'Custom setup & management plan', 'Start earning effortlessly'].map((step, i) => (
                  <li key={i} className="flex items-center">
                    <span className="w-8 h-8 rounded-full bg-secondary text-gray-800 flex items-center justify-center font-semibold mr-3">{i + 1}</span>
                    <span className="text-gray-700">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white p-6 md:p-8 rounded-xl shadow-md"
          >
            <h3 className="text-2xl font-semibold mb-6 text-[#6a3b3b]">Tell Us About Your Property</h3>
            <div className="space-y-6">
              {[
                { label: 'Full Name', id: 'name', icon: User, type: 'text', placeholder: 'Your name' },
                { label: 'Email Address', id: 'email', icon: Mail, type: 'email', placeholder: 'Your email' },
                { label: 'Phone Number', id: 'phone', icon: Phone, type: 'tel', placeholder: 'Your phone number' }
              ].map(({ label, id, icon: Icon, type, placeholder }) => (
                <div className="form-group" key={id}>
                  <label htmlFor={id} className="form-label">{label}</label>
                  <div className="relative">
                    <Icon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type={type}
                      id={id}
                      className="form-input pl-10"
                      placeholder={placeholder}
                      {...register(id as any, { required: `${label} is required` })}
                    />
                  </div>
                  {errors[id] && <p className="text-error text-sm mt-1">{(errors as any)[id].message}</p>}
                </div>
              ))}

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
                  placeholder="e.g. Sofia, Plovdiv, Varna"
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
                  placeholder="Anything else you'd like to share..."
                  {...register("message")}
                ></textarea>
              </div>

              <button type="submit" className="btn bg-secondary text-[#6a3b3b] font-semibold hover:bg-secondary-dark w-full py-3 text-lg">
                Submit Property
              </button>
            </div>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default ListPropertyPage;
