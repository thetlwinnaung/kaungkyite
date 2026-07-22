import React from 'react';
import { Globe } from 'lucide-react';

interface HeaderProps {
  language: 'my' | 'en';
  setLanguage: (lang: 'my' | 'en') => void;
}

export default function Header({ language, setLanguage }: HeaderProps) {
  return (
    <header className="text-center pt-8 pb-4 px-4 flex flex-col items-center">
      {/* Top bar with elegant language selector */}
      <div className="w-full max-w-lg flex justify-end mb-6">
        <button
          onClick={() => setLanguage(language === 'my' ? 'en' : 'my')}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gray-200 bg-white text-xs font-medium text-gray-700 shadow-xs hover:bg-gray-50 transition-all duration-200 cursor-pointer"
          id="language-toggle"
        >
          <Globe className="w-3.5 h-3.5 text-brand-red" />
          <span>{language === 'my' ? 'English (EN)' : 'မြန်မာဘာသာ (MY)'}</span>
        </button>
      </div>

      {/* Decorative Icon Brand Logo */}
      <div className="relative mb-4 group">
        <div className="absolute inset-0 bg-brand-red opacity-10 rounded-2xl blur-xl group-hover:opacity-25 transition-opacity duration-500"></div>
        <div className="relative w-16 h-16 rounded-2xl bg-brand-red text-white flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-105">
          {/* Custom SVG Steaming Tiffin Carrier Graphic */}
          <svg
            className="w-9 h-9 text-white animate-pulse"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Tiffin Handle */}
            <path d="M12 2v4M6 6h12M6 6v14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V6" />
            {/* Internal compartments lines */}
            <path d="M6 11h12M6 16h12" />
            {/* steam lines */}
            <path d="M9 2a1.5 1.5 0 0 1 3 0M12 2a1.5 1.5 0 0 1 3 0" />
          </svg>
        </div>
      </div>

      {/* Main Title & Subtitle */}
      <h1 
        className="text-4xl sm:text-5xl font-display font-bold tracking-tight text-brand-charcoal mb-5 select-none"
        id="main-title"
      >
        ကောင်းကြိုက်
      </h1>
      
      <p 
        className="text-gray-500 text-lg font-medium tracking-tight max-w-md mx-auto"
        id="main-subtitle"
      >
        {language === 'my' ? 'မြန်မာထမင်းဆိုင် ၊ ချိုင့်ဆွဲ ဝန်ဆောင်မှု' : 'Burmese Cuisine & Premium Tiffin Service'}
      </p>

      <p className="text-xs sm:text-sm text-gray-500 mt-2 max-w-sm mx-auto italic font-light">
        {language === 'my' 
          ? '“သန့်ရှင်းလတ်ဆတ်၊ ဆီသန့်သန့်၊ အိမ်ချက်လက်ရာစစ်စစ်”' 
          : '“Freshly cooked, premium oil, authentic home-cooked flavor”'}
      </p>
    </header>
  );
}
