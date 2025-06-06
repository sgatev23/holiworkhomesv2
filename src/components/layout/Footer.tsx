import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const locations = t('footer.locations.list', { returnObjects: true }) as string[];
  const [email, setEmail] = useState('');

  return (
    <footer className="bg-[#f9fafb] text-sm text-gray-700 pt-16 pb-10 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">

          {/* Brand Description */}
          <div>
            <h3 className="text-xl font-bold text-[#815159] mb-4">{t('footer.brand.name')}</h3>
            <p className="leading-relaxed text-gray-600 mb-4">{t('footer.brand.description')}</p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=100088472782851" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook className="text-[#815159] hover:opacity-75 transition" size={20} />
              </a>
              <a href="#" aria-label="Instagram">
                <Instagram className="text-[#815159] hover:opacity-75 transition" size={20} />
              </a>
              <a href="#" aria-label="LinkedIn">
                <Linkedin className="text-[#815159] hover:opacity-75 transition" size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-[#815159] mb-4">{t('footer.services.title')}</h4>
            <ul className="space-y-2">
              <li><Link to="/services" className="hover:text-[#815159] transition">{t('footer.services.rental')}</Link></li>
              <li><Link to="/services" className="hover:text-[#815159] transition">{t('footer.services.cohosting')}</Link></li>
              <li><Link to="/services" className="hover:text-[#815159] transition">{t('footer.services.setup')}</Link></li>
              <li><Link to="/list-your-property" className="hover:text-[#815159] transition">{t('footer.services.list')}</Link></li>
              <li><a href="https://app.hostify.com/user/login" target="_blank" rel="noopener noreferrer" className="hover:text-[#815159] transition">{t('navigation.ownerPortal')}</a></li>
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-lg font-semibold text-[#815159] mb-4">{t('footer.explore.title')}</h4>
            <ul className="space-y-2">
              <li><Link to="/success-stories" className="hover:text-[#815159] transition">{t('footer.explore.successStories')}</Link></li>
              <li><Link to="/blog" className="hover:text-[#815159] transition">{t('footer.explore.blog')}</Link></li>
              <li><Link to="/careers" className="hover:text-[#815159] transition">{t('footer.explore.careers')}</Link></li>
              <li><Link to="/services#faq" className="hover:text-[#815159] transition">{t('footer.explore.faqs')}</Link></li>
              <li><Link to="/nomadica-property-operators" className="hover:text-[#815159] transition">{t('footer.explore.operators')}</Link></li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="text-lg font-semibold text-[#815159] mb-4">{t('footer.locations.title')}</h4>
            <ul className="space-y-1">
              {locations.map((city, index) => <li key={index}>{city}</li>)}
            </ul>
          </div>

          {/* Contact + Newsletter */}
          <div>
            <h4 className="text-lg font-semibold text-[#815159] mb-4">{t('footer.contact.title')}</h4>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 text-[#815159]" />
                <span>{t('footer.contact.address')}</span>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="mr-2 text-[#815159]" />
                <a href="mailto:office@nomadica.homes" className="hover:text-[#815159] transition">office@nomadica.homes</a>
              </li>
              <li className="flex items-start">
                <Phone size={18} className="mr-2 text-[#815159]" />
                <a href="tel:+359897009919" className="hover:text-[#815159] transition">+359 89 700 9919</a>
              </li>
            </ul>
            <form className="flex flex-col gap-2">
              <label htmlFor="newsletter" className="text-md font-semibold text-[#815159]">{t('footer.newsletter.title')}</label>
              <input
                type="email"
                id="newsletter"
                name="newsletter"
                placeholder={t('footer.newsletter.placeholder')}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-[#815159]"
              />
              <button type="submit" className="bg-[#815159] text-white py-2 rounded-md hover:opacity-90 transition">
                {t('footer.newsletter.cta')}
              </button>
            </form>
          </div>
        </div>

        <div className="text-center pt-6 border-t border-gray-300">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Nomadica 23. {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;