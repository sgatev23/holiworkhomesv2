import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import LanguageToggle from './LanguageToggle';
import LogoWhite from '../../assets/Logo/nomadica_logo_white.svg';
import LogoMaroon from '../../assets/Logo/nomadica_logo_maroon.svg';

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

  const headerClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isOpen ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`;

  const navLinks = [
    { name: t('navigation.home'), path: '/' },
    // { name: t('navigation.about'), path: '/#about-us' }, // ❌ Hide this
    { name: t('navigation.services'), path: '/services' },
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
        <Link to="/" className="flex items-center space-x-3">
          <img
            src={isScrolled || isOpen ? LogoMaroon : LogoWhite}
            alt="Nomadica logo"
            className="h-15 w-auto sm:h-15"
          />
          <span className={`text-xl sm:text-2xl font-bold font-[Montserrat] tracking-tight ${isScrolled || isOpen ? 'text-[#815159]' : 'text-white'}`}>
            Nomadica
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
                  className={`font-medium hover:text-[#815159] transition-colors ${isScrolled ? 'text-gray-800' : 'text-white'} ${location.pathname === link.path ? 'text-[#815159]' : ''}`}
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
              className="bg-[#815159] text-white px-4 py-2 rounded-md text-sm hover:bg-[#6b4048] transition"
            >
              {t('navigation.listProperty')}
            </Link>
            <a
              href="https://app.hostify.com/user/login"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-4 py-2 rounded-md text-sm transition border ${isScrolled || isOpen
                  ? 'text-[#815159] border-[#815159] hover:bg-[#815159]/10'
                  : 'text-white border-white hover:bg-white/10'
                }`}
            >
              {t('navigation.ownerPortal')}
            </a>


            <LanguageToggle />
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
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
                    className={`font-medium p-2 hover:bg-gray-100 rounded-md block ${location.pathname === link.path ? 'text-[#815159]' : 'text-gray-800'}`}
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
                  className="bg-[#815159] text-white px-4 py-2 rounded-md text-center"
                >
                  {t('navigation.listProperty')}
                </Link>
                <Link
                  to="/owner-portal"
                  className="border border-[#815159] text-[#815159] px-4 py-2 rounded-md text-center"
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
