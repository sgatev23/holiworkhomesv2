import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import LanguageToggle from './LanguageToggle';
import LogoWhite from '../../assets/Logo/nomadica_logo_white.svg';
import LogoMaroon from '../../assets/Logo/nomadica_logo_maroon.svg';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  const forceSolid = isScrolled || location.pathname === '/nomadica-property-operators';

  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const headerClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${forceSolid ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`;

  const navLinks = [
    { name: t('navigation.services'), path: '/services' },
    { name: t('navigation.forDevelopers'), path: '/real-estate-developers' }
  ];

  return (
    <header className={headerClasses}>
      <div className="container flex flex-wrap items-center justify-between">
        <Link to="/" className="flex items-center space-x-3">
          <img
            src={forceSolid ? LogoMaroon : LogoWhite}
            alt="Nomadica logo"
            className="h-15 w-auto sm:h-15"
          />
          <span className={`text-xl sm:text-2xl font-bold font-[Montserrat] tracking-tight ${forceSolid ? 'text-[#815159]' : 'text-white'}`}>
            Nomadica
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-medium hover:text-[#815159] transition-colors ${forceSolid ? 'text-[#815159]' : 'text-white'} ${location.pathname === link.path ? 'text-[#815159]' : ''}`}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex items-center space-x-4">
            <Link
              to="/contact"
              className={`px-4 py-2 rounded-md text-sm font-medium border transition ${
                forceSolid
                  ? 'text-[#815159] border-[#815159] hover:bg-[#815159]/10'
                  : 'text-white border-white hover:bg-white/10'
              }`}
            >
              Contact Us
            </Link>
            <Link
              to="/list-your-property"
              className="bg-[#815159] text-white px-4 py-2 rounded-md text-sm hover:bg-[#6b4048] transition"
            >
              {t('navigation.listProperty')}
            </Link>
            <LanguageToggle />
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-2xl p-2 focus:outline-none"
        >
          {isOpen ? (
            <X className={forceSolid ? 'text-[#815159]' : 'text-white'} />
          ) : (
            <Menu className={forceSolid ? 'text-[#815159]' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white"
        >
          <div className="container py-4 space-y-6">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-medium p-2 hover:bg-gray-100 rounded-md block ${location.pathname === link.path ? 'text-[#815159]' : 'text-gray-800'}`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}

              <div className="pt-4 space-y-3">
                <Link
                  to="/contact"
                  className="border border-[#815159] text-[#815159] px-4 py-2 rounded-md text-center block hover:bg-[#815159]/10"
                >
                  Contact Us
                </Link>
                <Link
                  to="/list-your-property"
                  className="bg-[#815159] text-white px-4 py-2 rounded-md text-center block hover:bg-[#6b4048]"
                >
                  {t('navigation.listProperty')}
                </Link>
                <div className="flex justify-center pt-4">
                  <LanguageToggle />
                </div>
              </div>
            </nav>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;