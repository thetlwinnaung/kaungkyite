import React, { useState, useEffect } from 'react';
import { WEEKLY_MENU_SETS } from '../data';
import { WeeklyDish } from '../types';
import { Clock, AlertCircle, Sparkles } from 'lucide-react';

interface WeeklyScheduleSectionProps {
  language: 'my' | 'en';
}

export default function WeeklyScheduleSection({ language }: WeeklyScheduleSectionProps) {
  const [currentDayName, setCurrentDayName] = useState<string>('');
  const [selectedSetId, setSelectedSetId] = useState<'A' | 'B' | 'C' | 'D'>('A');

  useEffect(() => {
    // Get current day of week (e.g., "Monday", "Tuesday")
    const day = new Date().toLocaleDateString('en-US', { weekday: 'long' });
    setCurrentDayName(day);
  }, []);

  const selectedSet = WEEKLY_MENU_SETS.find(set => set.id === selectedSetId) || WEEKLY_MENU_SETS[0];

  return (
    <div className="w-full space-y-6">
      {/* Informative Header Box */}
      <div className="bg-emerald-50/50 border border-emerald-600/10 rounded-2xl p-4 flex items-start gap-3 shadow-xs">
        <Sparkles className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
        <p className="text-xs text-emerald-800 leading-relaxed font-light">
          {language === 'my'
            ? 'ကျွန်ုပ်တို့၏ တစ်ပတ်စာဟင်းလျာများကို နေ့စဉ်မတူကွဲပြားစွာ စီစဉ်ထားပါသည်။ နေ့လယ်စာ ပို့ဆောင်ချိန်မှာ နံနက် ၁၁:၀၀ မှ ၁:၀၀ ထိ ဖြစ်ပြီး၊ ညစာ ပို့ဆောင်ချိန်မှာ ညနေ ၅:၀၀ မှ ၇:၀၀ ထိ ဖြစ်ပါသည်။'
            : 'Menus are rotated daily so you never get bored! Lunch delivery is between 11:00 AM - 1:00 PM. Dinner delivery is between 5:00 PM - 7:00 PM.'}
        </p>
      </div>

      {/* List Set Selector Tabs */}
      <div className="flex flex-col space-y-2">
        <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-1">
          {language === 'my' ? 'ချိုင့်ဆွဲ ဟင်းပတ်လည် ဇယားများ' : 'Tiffin Menu Cycles'}
        </label>
        <div className="grid grid-cols-4 gap-1.5 p-1 bg-gray-100 rounded-xl border border-gray-200/50">
          {WEEKLY_MENU_SETS.map((set) => {
            const isActive = set.id === selectedSetId;
            return (
              <button
                key={set.id}
                onClick={() => setSelectedSetId(set.id)}
                className={`py-2 text-center rounded-lg transition-all text-xs font-semibold select-none cursor-pointer
                  ${isActive
                    ? 'bg-brand-red text-white shadow-xs'
                    : 'text-gray-600 hover:text-brand-charcoal hover:bg-white/50'
                  }
                `}
              >
                <div className="flex flex-col items-center">
                  <span className="text-[10px] opacity-75">{language === 'my' ? 'List' : 'List'} {set.id}</span>
                  <span className="font-myanmar text-[11px] leading-tight">
                    {language === 'my' ? set.label : set.labelEn}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Week Timeline */}
      <div className="space-y-4">
        {selectedSet.menu.map((dayItem) => {
          const isToday = dayItem.day === currentDayName;
          
          return (
            <div
              key={dayItem.day}
              id={`weekly-day-${dayItem.day}`}
              className={`rounded-2xl border transition-all duration-300 p-4 sm:p-5 relative overflow-hidden
                ${isToday
                  ? 'border-brand-red bg-brand-red-light/40 shadow-md ring-1 ring-brand-red/30'
                  : 'border-gray-100 bg-white hover:border-gray-200'
                }
              `}
            >
              {/* Today Badge */}
              {isToday && (
                <div className="absolute top-0 right-0 bg-brand-red text-white px-3 py-1 text-[10px] font-bold uppercase rounded-bl-xl tracking-wider flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {language === 'my' ? 'ယနေ့အတွက်' : 'Today'}
                </div>
              )}

              {/* Day Name */}
              <div className="flex items-baseline gap-2 mb-4">
                <h3 className="text-base sm:text-lg font-bold text-brand-charcoal font-myanmar">
                  {language === 'my' ? dayItem.dayMy : dayItem.day}
                </h3>
                <span className="text-xs text-gray-400 font-light hidden sm:inline">
                  {language === 'my' ? dayItem.day : dayItem.dayMy}
                </span>
              </div>

              {/* Lunch and Dinner grids */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Lunch segment */}
                <div className="bg-gray-50/50 rounded-xl p-3.5 border border-gray-100/50">
                  <span className="text-[10px] font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded-md uppercase tracking-wider mb-2.5 inline-block">
                    {language === 'my' ? 'နေ့လယ်စာ (Lunch Menu)' : 'Lunch Menu'}
                  </span>
                  
                  <div className="space-y-2 mt-1">
                    <div className="flex flex-col">
                      <span className="text-xs text-gray-400">{language === 'my' ? 'အဓိကဟင်း' : 'Main Curry'}</span>
                      <span className="text-xs font-semibold text-gray-800 leading-relaxed font-myanmar">{dayItem.lunchMain}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 pt-1 border-t border-gray-100/40">
                      <div className="flex flex-col">
                        <span className="text-[10px] text-gray-400">{language === 'my' ? 'အသုပ်/အကြော်' : 'Side / Salad'}</span>
                        <span className="text-xs font-medium text-gray-700 font-myanmar leading-tight">{dayItem.lunchSide}</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] text-gray-400">{language === 'my' ? 'ဟင်းရည်' : 'Soup'}</span>
                        <span className="text-xs font-medium text-gray-700 font-myanmar leading-tight">{dayItem.lunchSoup}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Dinner segment */}
                <div className="bg-gray-50/50 rounded-xl p-3.5 border border-gray-100/50">
                  <span className="text-[10px] font-bold text-indigo-800 bg-indigo-50 px-2 py-0.5 rounded-md uppercase tracking-wider mb-2.5 inline-block">
                    {language === 'my' ? 'ညစာ (Dinner Menu)' : 'Dinner Menu'}
                  </span>
                  
                  <div className="space-y-2 mt-1">
                    <div className="flex flex-col">
                      <span className="text-xs text-gray-400">{language === 'my' ? 'အဓိကဟင်း' : 'Main Curry'}</span>
                      <span className="text-xs font-semibold text-gray-800 leading-relaxed font-myanmar">{dayItem.dinnerMain}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 pt-1 border-t border-gray-100/40">
                      <div className="flex flex-col">
                        <span className="text-[10px] text-gray-400">{language === 'my' ? 'အသုပ်/အကြော်' : 'Side / Salad'}</span>
                        <span className="text-xs font-medium text-gray-700 font-myanmar leading-tight">{dayItem.dinnerSide}</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] text-gray-400">{language === 'my' ? 'ဟင်းရည်' : 'Soup'}</span>
                        <span className="text-xs font-medium text-gray-700 font-myanmar leading-tight">{dayItem.dinnerSoup}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
