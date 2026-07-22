import React from 'react';
import { BookOpen, Box, Calendar, FileText, Info, ChevronRight, ShoppingCart } from 'lucide-react';

interface LinktreeNavProps {
  activeSection: string | null;
  setActiveSection: (section: string | null) => void;
  language: 'my' | 'en';
  cartCount: number;
}

export default function LinktreeNav({
  activeSection,
  setActiveSection,
  language,
  cartCount
}: LinktreeNavProps) {
  
  const navItems = [
    {
      id: 'menu',
      labelMy: 'ရိုးရိုးဟင်းပွဲမီနူး',
      labelEn: 'Regular Menu',
      icon: BookOpen,
      color: 'text-amber-600 bg-amber-50',
      tag: language === 'my' ? 'အရသာစုံ' : 'A la carte'
    },
    {
      id: 'packages',
      labelMy: 'နေ့စဉ်/လစဉ် ချိုင့်ဆွဲပက်ကေ့ဂျ်',
      labelEn: 'Tiffin Packages',
      icon: Box,
      color: 'text-indigo-600 bg-indigo-50',
      tag: language === 'my' ? 'ချိုင့်ဆွဲ' : 'Subscription'
    },
    {
      id: 'weekly',
      labelMy: 'တစ်ပတ်စာ ဟင်းလျာစာရင်း',
      labelEn: 'Weekly Menu List',
      icon: Calendar,
      color: 'text-emerald-600 bg-emerald-50',
      tag: language === 'my' ? 'ရက်အလိုက်' : 'Mon - Sun'
    },
    {
      id: 'order',
      labelMy: 'မှာယူရန် ပုံစံစာရွက်',
      labelEn: 'Order Form',
      icon: FileText,
      color: 'text-rose-600 bg-rose-50',
      tag: language === 'my' ? 'အမြန်မှာ' : 'Order Now',
      badge: cartCount > 0 ? cartCount : undefined
    },
    {
      id: 'about',
      labelMy: 'ဆိုင်အကြောင်း သိကောင်းစရာ',
      labelEn: 'About Us',
      icon: Info,
      color: 'text-sky-600 bg-sky-50',
      tag: language === 'my' ? 'အချက်အလက်' : 'Our Story'
    }
  ];

  return (
    <div className="w-full max-w-[480px] mx-auto px-4 py-4 flex flex-col gap-3.5">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = activeSection === item.id;
        
        return (
          <button
            key={item.id}
            id={`nav-btn-${item.id}`}
            onClick={() => setActiveSection(item.id)}
            className={`w-full flex items-center justify-between p-4 rounded-xl border transition-all duration-300 group cursor-pointer text-left
              ${isActive 
                ? 'border-brand-red bg-brand-red-light/60 shadow-xs' 
                : 'border-gray-200/80 bg-white hover:border-gray-300 hover:bg-gray-50 hover:shadow-md'
              }
            `}
          >
            <div className="flex items-center gap-3.5 min-w-0">
              {/* Animated Icon Wrapper */}
              <div className={`p-2.5 rounded-lg shrink-0 transition-transform duration-300 group-hover:scale-105 ${item.color}`}>
                <Icon className="w-5 h-5" />
              </div>
              
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-gray-800 text-sm sm:text-[15px] block truncate">
                    {language === 'my' ? item.labelMy : item.labelEn}
                  </span>
                  
                  {/* Item badge/cart count */}
                  {item.badge !== undefined && (
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-rose-500 text-[10px] font-bold text-white animate-bounce">
                      {item.badge}
                    </span>
                  )}
                </div>
                
                <span className="text-xs text-gray-400 font-light block mt-0.5">
                  {language === 'my' 
                    ? (item.id === 'order' ? 'မှာယူမည့် စုစုပေါင်း တွက်ချက်ရန်' : `ကြည့်ရှုရန် နှိပ်ပါ`)
                    : (item.id === 'order' ? 'Calculate total & book' : 'Click to view details')
                  }
                </span>
              </div>
            </div>

            {/* Right Tag and Arrow */}
            <div className="flex items-center gap-2 shrink-0">
              <span className="hidden sm:inline-block text-[10px] font-medium tracking-wide uppercase px-2 py-0.5 rounded-md bg-gray-100 text-gray-500 group-hover:bg-brand-red-light group-hover:text-brand-red transition-colors duration-200">
                {item.tag}
              </span>
              <ChevronRight className={`w-4 h-4 text-gray-400 transition-transform duration-300 group-hover:translate-x-1 ${isActive ? 'text-brand-red rotate-90' : ''}`} />
            </div>
          </button>
        );
      })}
    </div>
  );
}
