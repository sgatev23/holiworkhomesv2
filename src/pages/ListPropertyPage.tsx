import React from 'react';
import Layout from '../components/layout/Layout';
import PageHeader from '../components/layout/PageHeader';
import { useForm } from 'react-hook-form';
import { Camera, Home, MapPin, Mail, Phone, User } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import supabase from '../supabaseclient';


const ListPropertyPage: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { t } = useTranslation();

  const onSubmit = async (data: any) => {
    const { name, email, phone, propertyType, location, bedrooms, bathrooms, message } = data;

    const { error } = await supabase
      .from('property_leads') // Make sure this table name matches Supabase
      .insert([
        {
          name,
          email,
          phone,
          property_type: propertyType,
          location,
          bedrooms,
          bathrooms,
          message,
        },
      ]);

    if (error) {
      console.error('❌ Error saving property lead:', error);
      alert('Something went wrong. Please try again.');
    } else {
      alert('✅ Your property was submitted successfully!');
    }
  };


  return (
    <Layout>
      <PageHeader
        title={t('listProperty.title')}
        subtitle={t('listProperty.subtitle')}
        bgImage="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg"
      />

      <section className="bg-[#f3f5f8] py-16">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold text-[#6a3b3b] mb-6">{t('listProperty.whyTitle')}</h2>

            <div className="space-y-6 mb-10">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-[#e7dcd4] rounded-lg flex items-center justify-center mr-4">
                  <Camera className="w-6 h-6 text-[#6a3b3b]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1 text-[#6a3b3b]">{t('listProperty.whyPhotoTitle')}</h3>
                  <p className="text-gray-700">{t('listProperty.whyPhotoText')}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-[#e7dcd4] rounded-lg flex items-center justify-center mr-4">
                  <Home className="w-6 h-6 text-[#6a3b3b]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1 text-[#6a3b3b]">{t('listProperty.whyManagementTitle')}</h3>
                  <p className="text-gray-700">{t('listProperty.whyManagementText')}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-[#e7dcd4] rounded-lg flex items-center justify-center mr-4">
                  <MapPin className="w-6 h-6 text-[#6a3b3b]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1 text-[#6a3b3b]">{t('listProperty.whyLocalTitle')}</h3>
                  <p className="text-gray-700">{t('listProperty.whyLocalText')}</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-4 text-[#6a3b3b]">{t('listProperty.expectTitle')}</h3>
              <ol className="space-y-4">
                {['step1', 'step2', 'step3', 'step4'].map((key, i) => (
                  <li key={i} className="flex items-center">
                    <span className="w-8 h-8 rounded-full bg-secondary text-gray-800 flex items-center justify-center font-semibold mr-3">{i + 1}</span>
                    <span className="text-gray-700">{t(`listProperty.steps.${key}`)}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white p-6 md:p-8 rounded-xl shadow-md"
          >
            <h3 className="text-2xl font-semibold mb-6 text-[#6a3b3b]">{t('listProperty.formTitle')}</h3>
            <div className="space-y-6">
              {[
                { label: 'name', id: 'name', icon: User, type: 'text', placeholder: 'placeholder.name' },
                { label: 'email', id: 'email', icon: Mail, type: 'email', placeholder: 'placeholder.email' },
                { label: 'phone', id: 'phone', icon: Phone, type: 'tel', placeholder: 'placeholder.phone' }
              ].map(({ label, id, icon: Icon, type, placeholder }) => (
                <div className="form-group" key={id}>
                  <label htmlFor={id} className="form-label">{t(`listProperty.${label}`)}</label>
                  <div className="relative">
                    <Icon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type={type}
                      id={id}
                      className="form-input pl-10"
                      placeholder={t(placeholder)}
                      {...register(id as any, { required: `${t(`listProperty.${label}`)} is required` })}
                    />
                  </div>
                  {errors[id] && <p className="text-error text-sm mt-1">{(errors as any)[id].message}</p>}
                </div>
              ))}

              <div className="form-group">
                <label htmlFor="propertyType" className="form-label">{t('listProperty.propertyType')}</label>
                <select
                  id="propertyType"
                  className="form-input"
                  {...register("propertyType", { required: t('listProperty.propertyTypeRequired') })}
                >
                  <option value="">{t('placeholder.selectType')}</option>
                  <option value="apartment">{t('propertyTypes.apartment')}</option>
                  <option value="house">{t('propertyTypes.house')}</option>
                  <option value="villa">{t('propertyTypes.villa')}</option>
                  <option value="studio">{t('propertyTypes.studio')}</option>
                </select>
                {errors.propertyType && <p className="text-error text-sm mt-1">{errors.propertyType.message}</p>}
              </div>

              <div className="form-group">
                <label htmlFor="location" className="form-label">{t('listProperty.location')}</label>
                <input
                  type="text"
                  id="location"
                  className="form-input"
                  placeholder={t('placeholder.location')}
                  {...register("location", { required: t('listProperty.locationRequired') })}
                />
                {errors.location && <p className="text-error text-sm mt-1">{errors.location.message}</p>}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="form-group">
                  <label htmlFor="bedrooms" className="form-label">{t('listProperty.bedrooms')}</label>
                  <select
                    id="bedrooms"
                    className="form-input"
                    {...register("bedrooms", { required: t('listProperty.bedroomsRequired') })}
                  >
                    <option value="">{t('placeholder.select')}</option>
                    <option value="studio">{t('bedroomOptions.studio')}</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4+</option>
                  </select>
                  {errors.bedrooms && <p className="text-error text-sm mt-1">{errors.bedrooms.message}</p>}
                </div>

                <div className="form-group">
                  <label htmlFor="bathrooms" className="form-label">{t('listProperty.bathrooms')}</label>
                  <select
                    id="bathrooms"
                    className="form-input"
                    {...register("bathrooms", { required: t('listProperty.bathroomsRequired') })}
                  >
                    <option value="">{t('placeholder.select')}</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3+</option>
                  </select>
                  {errors.bathrooms && <p className="text-error text-sm mt-1">{errors.bathrooms.message}</p>}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">{t('listProperty.message')}</label>
                <textarea
                  id="message"
                  className="form-input h-32"
                  placeholder={t('placeholder.message')}
                  {...register("message")}
                ></textarea>
              </div>

              <button type="submit" className="btn bg-secondary text-[#6a3b3b] font-semibold hover:bg-secondary-dark w-full py-3 text-lg">
                {t('listProperty.submit')}
              </button>
            </div>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default ListPropertyPage;
