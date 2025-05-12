import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import LanguageToggle from './LanguageToggle';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();
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
    setIsServicesOpen(false);
  }, [location]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const headerClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    isScrolled || isOpen ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
  }`;

  const logoTextColor = isScrolled || isOpen ? 'text-primary' : 'text-white';

  const navLinks = [
    { name: t('navigation.services'), path: '/services', hasDropdown: true },
    { name: t('navigation.successStories'), path: '/success-stories' },
    { name: t('navigation.guarantees'), path: '/guarantees' },
    { name: t('navigation.blog'), path: '/blog' },
  ];

  const servicesDropdown = [
    { name: t('navigation.servicesDropdown.cohosting'), path: '/services#cohosting' },
    { name: t('navigation.servicesDropdown.shortTerm'), path: '/services#short-term' },
    { name: t('navigation.servicesDropdown.longTerm'), path: '/services#long-term' },
    { name: t('navigation.servicesDropdown.propertySetup'), path: '/services#setup' },
  ];

  return (
    <header className={headerClasses}>
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 flex items-center justify-center bg-primary rounded-md">
            <Home className="w-5 h-5 text-secondary" />
          </div>
          <span className={`text-xl font-heading font-bold ${logoTextColor}`}>
            Holiwork Homes
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <div key={link.path} className="relative group">
              <div
                className="flex items-center cursor-pointer"
                onMouseEnter={() => link.hasDropdown && setIsServicesOpen(true)}
                onMouseLeave={() => link.hasDropdown && setIsServicesOpen(false)}
              >
                <Link
                  to={link.path}
                  className={`font-medium hover:text-primary transition-colors ${
                    isScrolled ? 'text-gray-800' : 'text-white'
                  } ${location.pathname === link.path ? 'text-primary' : ''}`}
                >
                  {link.name}
                </Link>
                {link.hasDropdown && (
                  <ChevronDown className={`w-4 h-4 ml-1 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
                )}
              </div>
              {link.hasDropdown && isServicesOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-2 z-50"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  {servicesDropdown.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="flex items-center space-x-4">
            <Link
              to="/list-your-property"
              className="btn btn-primary text-sm px-4 py-2"
            >
              {t('navigation.listProperty')}
            </Link>
            <Link
              to="/owner-portal"
              className="btn btn-outline text-sm px-4 py-2 border border-primary"
            >
              {t('navigation.ownerPortal')}
            </Link>
            <LanguageToggle />
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-2xl p-2 focus:outline-none"
        >
          {isOpen ? (
            <X className={isScrolled ? 'text-gray-800' : 'text-white'} />
          ) : (
            <Menu className={isScrolled ? 'text-gray-800' : 'text-white'} />
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
          <div className="container py-4">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <div key={link.path}>
                  <Link
                    to={link.path}
                    className={`font-medium p-2 hover:bg-gray-100 rounded-md block ${
                      location.pathname === link.path ? 'text-primary' : 'text-gray-800'
                    }`}
                  >
                    {link.name}
                  </Link>
                  {link.hasDropdown && (
                    <div className="pl-4 mt-2 space-y-2">
                      {servicesDropdown.map((service) => (
                        <Link
                          key={service.path}
                          to={service.path}
                          className="block p-2 text-gray-600 hover:bg-gray-100 rounded-md"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 space-y-3">
                <Link
                  to="/list-your-property"
                  className="btn btn-primary w-full text-center"
                >
                  {t('navigation.listProperty')}
                </Link>
                <Link
                  to="/owner-portal"
                  className="btn btn-outline w-full text-center"
                >
                  {t('navigation.ownerPortal')}
                </Link>
                <div className="flex justify-center pt-2">
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