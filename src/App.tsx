/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import LinktreeNav from './components/LinktreeNav';
import MenuSection from './components/MenuSection';
import PackagesSection from './components/PackagesSection';
import WeeklyScheduleSection from './components/WeeklyScheduleSection';
import OrderFormSection from './components/OrderFormSection';
import AboutUsSection from './components/AboutUsSection';
import { MenuItem, TiffinPackage, OrderItem } from './types';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ShoppingBag, Phone, MapPin } from 'lucide-react';

export default function App() {
  const [language, setLanguage] = useState<'my' | 'en'>('my');
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [cart, setCart] = useState<OrderItem[]>([]);

  // Smooth scroll to top when changing sections on mobile
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeSection]);

  // Handle adding regular menu item
  const handleAddToOrder = (item: MenuItem, qty: number) => {
    setCart((prev) => {
      const existingIdx = prev.findIndex((i) => i.type === 'menu' && i.id === item.id);
      if (existingIdx > -1) {
        const nextCart = [...prev];
        nextCart[existingIdx].quantity += qty;
        return nextCart;
      } else {
        return [
          ...prev,
          {
            type: 'menu',
            id: item.id,
            name: item.name,
            nameEn: item.nameEn,
            quantity: qty,
            price: item.price
          }
        ];
      }
    });
  };

  // Handle adding subscription tiffin package
  const handleAddPackage = (pkg: TiffinPackage, tierIndex: number, frequency: 'weekly' | 'monthly') => {
    const tier = pkg.tiers[tierIndex];
    const price = frequency === 'weekly' ? tier.weeklyPrice : tier.monthlyPrice;
    const labelFreq = frequency === 'weekly' ? 'Weekly' : 'Monthly';
    const detailLabel = `${labelFreq} - ${tier.label.split(' ')[0]}`;

    setCart((prev) => {
      // Find if same package with same configuration already exists
      const existingIdx = prev.findIndex(
        (i) => i.type === 'package' && i.id === pkg.id && i.details === detailLabel
      );

      if (existingIdx > -1) {
        const nextCart = [...prev];
        nextCart[existingIdx].quantity += 1;
        return nextCart;
      } else {
        return [
          ...prev,
          {
            type: 'package',
            id: pkg.id,
            name: `${pkg.name.split(' ')[0]} (${detailLabel})`,
            nameEn: `${pkg.nameEn.split(' ')[0]} (${detailLabel})`,
            quantity: 1,
            price: price,
            details: detailLabel
          }
        ];
      }
    });
  };

  // Update quantity in order form list
  const handleUpdateQty = (type: 'menu' | 'package', id: string, delta: number, details?: string) => {
    setCart((prev) => {
      return prev
        .map((item) => {
          if (item.type === type && item.id === id && item.details === details) {
            const nextQty = item.quantity + delta;
            return { ...item, quantity: nextQty };
          }
          return item;
        })
        .filter((item) => item.quantity > 0);
    });
  };

  // Remove a single item completely
  const handleRemoveItem = (type: 'menu' | 'package', id: string, details?: string) => {
    setCart((prev) => {
      return prev.filter((item) => !(item.type === type && item.id === id && item.details === details));
    });
  };

  // Clear entire cart
  const handleClearCart = () => {
    setCart([]);
  };

  // Helper for fast rendering of active section content
  const renderSectionContent = () => {
    switch (activeSection) {
      case 'menu':
        // Map cart items for easy lookups
        const menuCartMap: { [key: string]: number } = {};
        cart.forEach((i) => {
          if (i.type === 'menu') {
            menuCartMap[i.id] = (menuCartMap[i.id] || 0) + i.quantity;
          }
        });
        return (
          <MenuSection
            language={language}
            onAddToOrder={handleAddToOrder}
            cartItems={menuCartMap}
          />
        );
      case 'packages':
        const pkgCartMap: { [key: string]: number } = {};
        cart.forEach((i) => {
          if (i.type === 'package') {
            pkgCartMap[i.id] = (pkgCartMap[i.id] || 0) + i.quantity;
          }
        });
        return (
          <PackagesSection
            language={language}
            onAddPackage={handleAddPackage}
            cartItems={pkgCartMap}
          />
        );
      case 'weekly':
        return <WeeklyScheduleSection language={language} />;
      case 'order':
        return (
          <OrderFormSection
            language={language}
            cartItems={cart}
            onUpdateQty={handleUpdateQty}
            onRemoveItem={handleRemoveItem}
            onClearCart={handleClearCart}
            setActiveSection={setActiveSection}
          />
        );
      case 'about':
        return <AboutUsSection language={language} />;
      default:
        return null;
    }
  };


  // Get active section labels
  const getSectionTitle = () => {
    switch (activeSection) {
      case 'menu':
        return language === 'my' ? 'ရိုးရိုးဟင်းပွဲမီနူး' : 'Regular A La Carte Menu';
      case 'packages':
        return language === 'my' ? 'ချိုင့်ဆွဲပက်ကေ့ဂျ်များ' : 'Tiffin Box Packages';
      case 'weekly':
        return language === 'my' ? 'တစ်ပတ်စာ ချက်ပြုတ်မည့် ဟင်းလျာစာရင်း' : 'Weekly Cooking Calendar';
      case 'order':
        return language === 'my' ? 'မှာယူရန် ပုံစံစာရွက်' : 'Interactive Order Invoice';
      case 'about':
        return language === 'my' ? 'ဆိုင်အကြောင်း သိကောင်းစရာ' : 'About Kaung Kyite';
      default:
        return '';
    }
  };

  const totalCartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-brand-cream text-brand-charcoal selection:bg-brand-red/30 selection:text-brand-charcoal relative overflow-x-hidden flex flex-col justify-between">
      
      {/* Decorative Top subtle golden glowing light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-64 bg-brand-red opacity-5 rounded-full blur-3xl pointer-events-none"></div>

      <main className="w-full flex-1 max-w-[1200px] mx-auto px-4 md:px-6 py-6 lg:py-12">
        
        {/* RESPONSIVE LAYOUT DUAL-MODE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT PANEL: Branding & Linktree Navigation (Sticky on large viewports) */}
          <div className={`lg:col-span-5 lg:sticky lg:top-8 space-y-6 
            ${activeSection !== null ? 'hidden lg:block' : 'block'}
          `}>
            {/* Main branding header */}
            <Header
              language={language}
              setLanguage={setLanguage}
            />

            {/* Vertical Linktree Buttons */}
            <LinktreeNav
              activeSection={activeSection}
              setActiveSection={setActiveSection}
              language={language}
              cartCount={totalCartCount}
            />


            {/* Quick Contact & Info foot rail */}
            <div className="hidden lg:flex flex-col gap-2.5 items-center text-xs text-gray-400 font-light text-center pt-4">
              <div className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-brand-red" />
                <span>{language === 'my' ? 'အောင်မြေသာစံမြို့နယ်၊ မန္တလေးမြို့' : 'Aungmyethazan Township, Mandalay'}</span>
              </div>
              <div className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-brand-red" />
                <span className="font-semibold text-gray-500">09-975889702, 09-977417939</span>
              </div>
            </div>
          </div>

          {/* RIGHT PANEL: Details Screen View Area */}
          <div className={`lg:col-span-7 w-full 
            ${activeSection === null ? 'hidden lg:block' : 'block'}
          `}>
            <AnimatePresence mode="wait">
              {activeSection ? (
                <motion.div
                  key={activeSection}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className="space-y-6"
                >
                  {/* Sticky Mobile/Tablet Back-Header */}
                  <div className="flex items-center justify-between bg-white/95 backdrop-blur-md border border-gray-100 rounded-2xl p-3 sm:p-4 shadow-sm sticky top-2 z-40">
                    <button
                      onClick={() => setActiveSection(null)}
                      className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-gray-600 hover:text-brand-charcoal hover:bg-gray-50 transition cursor-pointer"
                      id="section-back-button"
                    >
                      <ChevronLeft className="w-4 h-4 text-brand-red" />
                      <span>{language === 'my' ? 'ဆုတ်ခွာမည်' : 'Back'}</span>
                    </button>

                    <h2 className="text-sm sm:text-base font-bold font-myanmar text-brand-charcoal truncate px-2">
                      {getSectionTitle()}
                    </h2>

                    {/* Quick view shopping bag badge */}
                    <button
                      onClick={() => setActiveSection('order')}
                      className={`relative p-2 rounded-xl transition ${activeSection === 'order' ? 'text-brand-red bg-brand-red-light' : 'text-gray-500 hover:bg-gray-50'}`}
                    >
                      <ShoppingBag className="w-4.5 h-4.5" />
                      {totalCartCount > 0 && (
                        <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-rose-500 ring-2 ring-white"></span>
                      )}
                    </button>
                  </div>

                  {/* Dynamic Rendered Content Component */}
                  <div className="px-1 py-1">
                    {renderSectionContent()}
                  </div>
                </motion.div>
              ) : (
                // Desktop Blank/Idle screen when no section is selected
                <div className="hidden lg:flex flex-col items-center justify-center text-center py-24 bg-white/40 border border-dashed border-gray-200 rounded-3xl h-[600px] max-w-xl mx-auto space-y-4">
                  <div className="w-16 h-16 rounded-full bg-brand-red-light flex items-center justify-center text-brand-red">
                    <ShoppingBag className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-display font-bold text-lg text-brand-charcoal">
                      {language === 'my' ? 'ဟင်းပွဲနှင့် ဝန်ဆောင်မှုများ' : 'Welcome to Kaung Kyite'}
                    </h3>
                    <p className="text-xs text-gray-400 font-light max-w-xs mx-auto">
                      {language === 'my' 
                        ? 'မီနူးများ၊ တစ်ပတ်စာအစီအစဉ်များနှင့် ချိုင့်ဆွဲပက်ကေ့ဂျ်များကို လေ့လာရန် ဘယ်ဘက်ရှိ လင့်ခ်များကို နှိပ်ပါ။' 
                        : 'Explore our menus, weekly curry roster, and premium tiffin plans by clicking on the links.'}
                    </p>
                  </div>
                </div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </main>

      {/* Footer copyright */}
      <footer className="w-full text-center py-8 border-t border-gray-200/40 bg-white/30 text-[11px] text-gray-400 font-light space-y-1">
        <p className="font-myanmar leading-relaxed">
          &copy; {new Date().getFullYear()} ကောင်းကြိုက် မြန်မာထမင်းဆိုင် ၊ ချိုင့်ဆွဲ ဝန်ဆောင်မှု။ All Rights Reserved.
        </p>
        <p className="text-[10px] tracking-wide text-gray-300">
          Crafted with love for authentic Burmese taste & health.
        </p>
      </footer>
    </div>
  );
}

