import React, { useState } from 'react';
import { TIFFIN_PACKAGES } from '../data';
import { TiffinPackage } from '../types';
import { Check, ShieldCheck, ShoppingBag, Layers, Users } from 'lucide-react';

interface PackagesSectionProps {
  language: 'my' | 'en';
  onAddPackage: (pkg: TiffinPackage, tierIndex: number, frequency: 'weekly' | 'monthly') => void;
  cartItems: { [key: string]: number };
}

export default function PackagesSection({ language, onAddPackage, cartItems }: PackagesSectionProps) {
  // Store selected tier and frequency index for each package
  const [selectedTiers, setSelectedTiers] = useState<{ [key: string]: number }>({
    p1: 1, // Default 2 People for Standard
    p2: 0  // Default 1 Person for Diet
  });
  const [selectedFrequencies, setSelectedFrequencies] = useState<{ [key: string]: 'weekly' | 'monthly' }>({
    p1: 'monthly',
    p2: 'monthly'
  });
  const [addedFeedback, setAddedFeedback] = useState<{ [key: string]: boolean }>({});

  const handleTierSelect = (pkgId: string, index: number) => {
    setSelectedTiers((prev) => ({ ...prev, [pkgId]: index }));
  };

  const handleFrequencySelect = (pkgId: string, freq: 'weekly' | 'monthly') => {
    setSelectedFrequencies((prev) => ({ ...prev, [pkgId]: freq }));
  };

  const handleAdd = (pkg: TiffinPackage) => {
    const tierIndex = selectedTiers[pkg.id];
    const freq = selectedFrequencies[pkg.id];
    onAddPackage(pkg, tierIndex, freq);

    const feedbackKey = `${pkg.id}-${tierIndex}-${freq}`;
    setAddedFeedback((prev) => ({ ...prev, [feedbackKey]: true }));
    setTimeout(() => {
      setAddedFeedback((prev) => ({ ...prev, [feedbackKey]: false }));
    }, 1500);
  };

  return (
    <div className="w-full space-y-8">
      {/* Introduction info block */}
      <div className="bg-brand-red-light border border-brand-red/20 rounded-2xl p-4 sm:p-5 flex items-start gap-3.5 shadow-xs">
        <ShieldCheck className="w-6 h-6 text-brand-red shrink-0 mt-0.5" />
        <div>
          <h4 className="font-bold text-brand-charcoal text-sm sm:text-base">
            {language === 'my' ? 'ကျွန်ုပ်တို့၏ ချိုင့်ဆွဲကတိကဝတ်' : 'Our Premium Tiffin Promise'}
          </h4>
          <p className="text-xs text-gray-600 leading-relaxed mt-1 font-light">
            {language === 'my' 
              ? 'ကျန်းမာရေးနှင့်ညီညွတ်သော ဆီသန့်၊ ဆားလျှော့ ဟင်းပွဲများကို နေ့စဉ်အပူထိန်းစတီးချိုင့်များဖြင့် ထမင်းစားချိန်အမှီ အိမ်အရောက်ပို့ဆောင်ပေးပါသည်။ အချိုမှုန့် လုံးဝမသုံးစွဲပါ။'
              : 'Cooked fresh every single morning with high-grade peanut oil, minimal sodium, and absolutely no added MSG. Delivered hot in stainless thermal containers.'}
          </p>
        </div>
      </div>

      {/* Packages Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {TIFFIN_PACKAGES.map((pkg) => {
          const tierIndex = selectedTiers[pkg.id];
          const currentTier = pkg.tiers[tierIndex];
          const freq = selectedFrequencies[pkg.id];
          const price = freq === 'weekly' ? currentTier.weeklyPrice : currentTier.monthlyPrice;
          
          const feedbackKey = `${pkg.id}-${tierIndex}-${freq}`;
          const isAdded = addedFeedback[feedbackKey];

          // Determine visual height of physical tiffin container graphic based on pax selected
          const tiffinTiers = currentTier.pax === 1 ? 3 : currentTier.pax === 2 ? 4 : 5;

          return (
            <div
              key={pkg.id}
              id={`pkg-card-${pkg.id}`}
              className="bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-gray-200/80 transition-all duration-300 p-6 flex flex-col justify-between relative overflow-hidden"
            >
              {pkg.id === 'p2' && (
                <div className="absolute top-0 right-0 bg-brand-red text-white font-semibold text-[10px] uppercase tracking-wider px-3.5 py-1.5 rounded-bl-xl shadow-xs">
                  {language === 'my' ? 'ကျန်းမာရေးအထူးပြု' : 'Highly Recommended'}
                </div>
              )}

              <div>
                {/* Header info */}
                <div className="mb-4">
                  <h3 className="font-bold text-gray-900 text-lg sm:text-xl font-myanmar text-brand-charcoal leading-snug">
                    {language === 'my' ? pkg.name : pkg.nameEn}
                  </h3>
                  <p className="text-xs text-gray-500 font-light mt-1.5 leading-relaxed">
                    {language === 'my' ? pkg.description : pkg.descriptionEn}
                  </p>
                </div>

                {/* Serving/Pax Selector Tab */}
                <div className="mb-4">
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-2">
                    {language === 'my' ? 'စားသုံးမည့်သူဦးရေ ရွေးချယ်ပါ' : 'Select Portion Size'}
                  </label>
                  <div className="grid grid-cols-3 gap-2 bg-gray-50 p-1 rounded-xl">
                    {pkg.tiers.map((tier, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleTierSelect(pkg.id, idx)}
                        className={`py-2 px-1 rounded-lg text-xs font-semibold text-center cursor-pointer transition-all duration-200
                          ${tierIndex === idx
                            ? 'bg-white text-brand-charcoal shadow-xs border border-gray-150'
                            : 'text-gray-500 hover:text-gray-800'
                          }
                        `}
                      >
                        {tier.label.split(' ')[0]}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Duration/Frequency Selector Tab */}
                <div className="mb-6">
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-2">
                    {language === 'my' ? 'ဝန်ဆောင်မှု သက်တမ်းရွေးချယ်ပါ' : 'Select Subscription Duration'}
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => handleFrequencySelect(pkg.id, 'weekly')}
                      className={`py-2 px-3 rounded-xl text-xs font-semibold border text-center transition-all duration-200 cursor-pointer
                        ${freq === 'weekly'
                          ? 'bg-brand-charcoal text-white border-brand-charcoal'
                          : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'
                        }
                      `}
                    >
                      <span>{language === 'my' ? 'တစ်ပတ်စာ (Weekly)' : '1 Week'}</span>
                    </button>
                    <button
                      onClick={() => handleFrequencySelect(pkg.id, 'monthly')}
                      className={`py-2 px-3 rounded-xl text-xs font-semibold border text-center transition-all duration-200 cursor-pointer
                        ${freq === 'monthly'
                          ? 'bg-brand-charcoal text-white border-brand-charcoal'
                          : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'
                        }
                      `}
                    >
                      <span>{language === 'my' ? 'တစ်လစာ (Monthly)' : '1 Month'}</span>
                    </button>
                  </div>
                </div>

                {/* Feature Checkmarks list */}
                <div className="space-y-2.5 mb-6 border-t border-b border-gray-50 py-5">
                  <span className="text-[10px] font-bold text-gray-400 tracking-wider uppercase block">
                    {language === 'my' ? 'ဝန်ဆောင်မှု အားသာချက်များ' : 'What is included'}
                  </span>
                  {(language === 'my' ? pkg.features : pkg.featuresEn).map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-gray-600 font-light">
                      <Check className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pricing, Tiffin Dynamic Graphic, & Order button */}
              <div className="flex items-center justify-between gap-4 bg-brand-red-light/40 rounded-2xl p-4 mt-auto">
                {/* Physical Tiffin Graphic */}
                <div className="flex flex-col items-center shrink-0">
                  <div className="relative flex flex-col items-center select-none mb-1">
                    {/* Metal Stand Handle */}
                    <div className="absolute top-[-8px] h-3 w-8 border-2 border-slate-400 border-b-0 rounded-t-lg"></div>
                    <div className="absolute left-[-4px] top-1 bottom-0 w-[2px] bg-slate-400"></div>
                    <div className="absolute right-[-4px] top-1 bottom-0 w-[2px] bg-slate-400"></div>
                    
                    {/* Steaming Lines */}
                    <div className="flex gap-1 justify-center -mt-3.5 mb-1 animate-pulse">
                      <span className="h-1.5 w-[1px] bg-slate-300 rounded-full block"></span>
                      <span className="h-2 w-[1px] bg-slate-300 rounded-full block"></span>
                      <span className="h-1.5 w-[1px] bg-slate-300 rounded-full block"></span>
                    </div>

                    {/* Compartment Tiers */}
                    {Array.from({ length: tiffinTiers }).map((_, i) => (
                      <div
                        key={i}
                        className={`w-9 h-3 border-x border-b border-slate-300 bg-slate-100 rounded-xs flex items-center justify-center relative
                          ${i === 0 ? 'border-t rounded-t-sm bg-brand-red/30' : 'mt-[1px]'}
                        `}
                      >
                        {/* Container locks */}
                        {i > 0 && <span className="absolute -left-[3px] top-[-1px] w-[5px] h-[3px] bg-slate-400 rounded-full"></span>}
                        {i > 0 && <span className="absolute -right-[3px] top-[-1px] w-[5px] h-[3px] bg-slate-400 rounded-full"></span>}
                      </div>
                    ))}
                  </div>
                  <span className="text-[9px] text-gray-400 font-semibold uppercase flex items-center gap-1 mt-1">
                    <Layers className="w-2.5 h-2.5" /> {tiffinTiers} Tiers
                  </span>
                </div>

                {/* Price Label & Add action */}
                <div className="text-right flex-1">
                  <span className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider block">
                    {freq === 'weekly' ? (language === 'my' ? 'တစ်ပတ်လျှင်' : 'Per Week') : (language === 'my' ? 'တစ်လလျှင်' : 'Per Month')}
                  </span>
                  <div className="text-xl sm:text-2xl font-bold text-brand-charcoal">
                    {price.toLocaleString()} Ks
                  </div>
                  
                  <button
                    onClick={() => handleAdd(pkg)}
                    className={`mt-2 w-full h-8 px-3 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-all duration-300 cursor-pointer
                      ${isAdded 
                        ? 'bg-emerald-600 text-white' 
                        : 'bg-brand-charcoal text-white hover:bg-brand-red'
                      }
                    `}
                  >
                    {isAdded ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>{language === 'my' ? 'ရွေးချယ်ပြီးပါပြီ' : 'Selected!'}</span>
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="w-3.5 h-3.5" />
                        <span>{language === 'my' ? 'ပက်ကေ့ဂျ် ရွေးမည်' : 'Select Plan'}</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
