import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-[#f3f5f8] text-sm text-gray-700 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand Description */}
          <div>
            <h3 className="text-xl font-bold text-[#815159] mb-4">
              {t('footer.brand.name')}
            </h3>
            <p className="leading-relaxed">
              {t('footer.brand.description')}
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" aria-label="Facebook" className="text-[#815159] hover:opacity-75 transition">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Instagram" className="text-[#815159] hover:opacity-75 transition">
                <Instagram size={20} />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-[#815159] hover:opacity-75 transition">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-[#815159] mb-4">
              {t('footer.services.title')}
            </h4>
            <ul className="space-y-2">
              <li><Link to="/services" className="hover:text-[#815159] transition">{t('footer.services.rental')}</Link></li>
              <li><Link to="/services" className="hover:text-[#815159] transition">{t('footer.services.cohosting')}</Link></li>
              <li><Link to="/services" className="hover:text-[#815159] transition">{t('footer.services.setup')}</Link></li>
              <li><Link to="/list-your-property" className="hover:text-[#815159] transition">{t('footer.services.list')}</Link></li>
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-lg font-semibold text-[#815159] mb-4">
              {t('footer.explore.title')}
            </h4>
            <ul className="space-y-2">
              <li><Link to="/success-stories" className="hover:text-[#815159] transition">{t('footer.explore.successStories')}</Link></li>
              <li><Link to="/blog" className="hover:text-[#815159] transition">{t('footer.explore.blog')}</Link></li>
              <li><Link to="/services#faq" className="hover:text-[#815159] transition">{t('footer.explore.faqs')}</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-[#815159] mb-4">
              {t('footer.contact.title')}
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 text-[#815159]" />
                <span>{t('footer.contact.address')}</span>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="mr-2 text-[#815159]" />
                <a href="mailto:business@holiworkstays.com" className="hover:text-[#815159] transition">
                  business@holiworkstays.com
                </a>
              </li>
              <li className="flex items-start">
                <Phone size={18} className="mr-2 text-[#815159]" />
                <a href="tel:+3598909919" className="hover:text-[#815159] transition">
                  +359 89 700 9919
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center border-t border-gray-300 pt-6">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Nomadica 23. {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
