import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageToggle: React.FC = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'bg' : 'en');
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center space-x-1 px-2 py-1 rounded-md hover:bg-gray-100 transition-colors"
    >
      <span className="text-lg">
        {i18n.language === 'en' ? '🇬🇧' : '🇧🇬'}
      </span>
      <span className="text-sm font-medium">
        {i18n.language === 'en' ? 'EN' : 'BG'}
      </span>
    </button>
  );
};

export default LanguageToggle;