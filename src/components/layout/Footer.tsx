import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Holiwork Homes</h3>
            <p className="text-gray-300 mb-4">
              Professional property management and co-hosting services to maximize your property's potential.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/services" className="hover:text-secondary transition-colors">Cohosting</Link></li>
              <li><Link to="/services" className="hover:text-secondary transition-colors">Property Management</Link></li>
              <li><Link to="/list-your-property" className="hover:text-secondary transition-colors">List Your Property</Link></li>
              <li><Link to="/guarantees" className="hover:text-secondary transition-colors">Our Guarantees</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/" className="hover:text-secondary transition-colors">Home</Link></li>
              <li><Link to="/success-stories" className="hover:text-secondary transition-colors">Success Stories</Link></li>
              <li><Link to="/blog" className="hover:text-secondary transition-colors">Blog</Link></li>
              <li><Link to="/owner-portal" className="hover:text-secondary transition-colors">Owner Portal</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3 text-gray-300">
              <p className="flex items-center">
                <MapPin size={18} className="mr-2 text-secondary" />
                Zagreb 7, Kapana, Plovdiv, Bulgaria
              </p>
              <p className="flex items-center">
                <Mail size={18} className="mr-2 text-secondary" />
                business@holiworkstays.com
              </p>
              <p className="flex items-center">
                <Phone size={18} className="mr-2 text-secondary" />
                +359 890 9919
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-10 border-t border-gray-800 pt-8">
          <p className="text-gray-400 text-sm text-center">
            © {new Date().getFullYear()} Holiwork Homes. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;