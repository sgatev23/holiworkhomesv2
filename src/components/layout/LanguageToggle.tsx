import React from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n';

const LanguageToggle: React.FC = () => {
  const { i18n: i18next } = useTranslation();
  const currentLang = i18next.language;

  const switchLanguage = (lang: 'en' | 'bg') => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="flex bg-black rounded-full p-1 shadow-inner text-xs">
      <button
        onClick={() => switchLanguage('en')}
        className={`px-3 py-1 rounded-full transition ${
          currentLang === 'en'
            ? 'bg-white text-black shadow font-bold'
            : 'text-white'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => switchLanguage('bg')}
        className={`px-3 py-1 rounded-full transition ${
          currentLang === 'bg'
            ? 'bg-white text-black shadow font-bold'
            : 'text-white'
        }`}
      >
        BG
      </button>
    </div>
  );
};

export default LanguageToggle;
