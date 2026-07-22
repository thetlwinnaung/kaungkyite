import React, { useState, useMemo } from 'react';
import { TodaysSpecialItem } from '../types';
import { getCurrentTodaysSpecial, DEFAULT_TODAYS_SPECIAL } from '../data/todaysSpecial';
import { Sparkles, Star, Plus, Minus, Check, Search, Calendar, Flame, ShoppingBag } from 'lucide-react';

interface TodaysSpecialSectionProps {
  language: 'my' | 'en';
  onAddToOrder: (item: { id: string; name: string; nameEn: string; price: number }, qty: number) => void;
  cartItems?: { [key: string]: number };
}

export default function TodaysSpecialSection({
  language,
  onAddToOrder,
  cartItems = {},
}: TodaysSpecialSectionProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<'all' | 'curry' | 'side' | 'soup'>('all');
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({});
  const [addedAnimation, setAddedAnimation] = useState<{ [key: string]: boolean }>({});

  const todayInfo = useMemo(() => getCurrentTodaysSpecial(), []);
  const rawItems = todayInfo.items || DEFAULT_TODAYS_SPECIAL;

  // Format today's date in Burmese/English
  const todayFormatted = useMemo(() => {
    const date = new Date();
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();

    const myMonths = [
      'ဇန်နဝါရီ', 'ဖေဖော်ဝါရီ', 'မတ်', 'ဧပြီ', 'မေ', 'ဇွန်',
      'ဇူလိုင်', 'ဩဂုတ်', 'စက်တင်ဘာ', 'အောက်တိုဘာ', 'နိုဝင်ဘာ', 'ဒီဇင်ဘာ'
    ];
    const enMonths = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];

    if (language === 'my') {
      return `${year} ခုနှစ်၊ ${myMonths[monthIndex]}လ ${day} ရက် (${todayInfo.dayMy})`;
    }
    return `${enMonths[monthIndex]} ${day}, ${year} (${todayInfo.dayEn})`;
  }, [language, todayInfo]);

  const handleQtyChange = (id: string, delta: number) => {
    const current = quantities[id] || 1;
    const next = Math.max(1, current + delta);
    setQuantities((prev) => ({ ...prev, [id]: next }));
  };

  const handleAdd = (item: TodaysSpecialItem) => {
    const qty = quantities[item.id] || 1;
    onAddToOrder(
      {
        id: item.id,
        name: item.name,
        nameEn: item.nameEn || item.name,
        price: item.price,
      },
      qty
    );

    // Trigger check animation
    setAddedAnimation((prev) => ({ ...prev, [item.id]: true }));
    setTimeout(() => {
      setAddedAnimation((prev) => ({ ...prev, [item.id]: false }));
    }, 1200);
  };

  const filteredItems = useMemo(() => {
    return rawItems.filter((item) => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const term = searchQuery.toLowerCase();
      const matchesSearch =
        item.name.toLowerCase().includes(term) ||
        (item.nameEn && item.nameEn.toLowerCase().includes(term)) ||
        (item.description && item.description.toLowerCase().includes(term));
      return matchesCategory && matchesSearch;
    });
  }, [rawItems, searchQuery, activeCategory]);

  const categories = [
    { id: 'all', labelMy: 'အားလုံး (၁၂)', labelEn: 'All (12)' },
    { id: 'curry', labelMy: 'ဟင်းအဓိက', labelEn: 'Curries' },
    { id: 'side', labelMy: 'အသုပ်/အကြော်', labelEn: 'Sides & Stir-fries' },
    { id: 'soup', labelMy: 'ဟင်းရည်', labelEn: 'Soups' },
  ];

  return (
    <div className="w-full space-y-6">
      {/* Header Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber-500 via-brand-red to-rose-700 p-6 sm:p-8 text-white shadow-lg">
        {/* Decorative background glow */}
        <div className="absolute -right-8 -bottom-8 w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute right-12 top-4 w-24 h-24 bg-amber-300/20 rounded-full blur-xl pointer-events-none" />

        <div className="relative z-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-semibold shadow-inner">
            <Flame className="w-4 h-4 text-amber-300 animate-pulse" />
            <span>{language === 'my' ? 'ယနေ့ လတ်လတ်ဆတ်ဆတ် ချက်ပြုတ်ထားသော' : 'Freshly Prepared Today'}</span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-myanmar tracking-tight text-white flex items-center gap-2">
                <span>{language === 'my' ? 'ယနေ့ အထူးဟင်းပွဲများ' : "Today's Special Menu"}</span>
                <Sparkles className="w-6 h-6 text-amber-300 shrink-0" />
              </h2>
              <p className="text-xs sm:text-sm text-amber-100 font-light mt-1">
                {language === 'my'
                  ? 'အိမ်ချက် လက်ရာစစ်စစ်ဖြင့် ကျန်းမာရေးနှင့် ညီညွတ်စွာ ချက်ပြုတ်ထားပါသည်။'
                  : 'Authentic homestyle dishes cooked fresh with natural ingredients.'}
              </p>
            </div>

            {/* Date Tag */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-black/25 backdrop-blur-md rounded-xl text-xs font-medium text-amber-200 border border-white/10 shrink-0 self-start sm:self-auto">
              <Calendar className="w-3.5 h-3.5 text-amber-300" />
              <span>{todayFormatted}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="space-y-3">
        <div className="relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={
              language === 'my'
                ? 'ယနေ့ အထူးဟင်းပွဲများထဲမှ ရှာဖွေပါ...'
                : "Search today's special dishes..."
            }
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200/90 rounded-2xl text-xs text-gray-800 placeholder-gray-400 focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition shadow-xs"
            id="todays-special-search-input"
          />
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as any)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-brand-red text-white shadow-xs'
                  : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'
              }`}
            >
              {language === 'my' ? cat.labelMy : cat.labelEn}
            </button>
          ))}
        </div>
      </div>

      {/* Dishes Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {filteredItems.map((item, index) => {
          const currentQty = quantities[item.id] || 1;
          const inCartCount = cartItems[item.id] || 0;
          const isAdded = addedAnimation[item.id];

          return (
            <div
              key={item.id}
              id={`todays-special-card-${item.id}`}
              className="bg-white rounded-2xl p-4 border border-gray-100 shadow-xs hover:shadow-md hover:border-amber-200 transition-all duration-300 flex flex-col justify-between relative group"
            >
              <div>
                {/* Header Row: Name & Recommended Badge */}
                <div className="flex justify-between items-start gap-2 mb-1.5">
                  <div className="min-w-0 pr-1">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200/60 font-mono">
                        #{index + 1}
                      </span>
                      {item.recommended && (
                        <span className="inline-flex items-center gap-1 text-[10px] font-bold text-amber-800 bg-gradient-to-r from-amber-100 to-yellow-200 px-2 py-0.5 rounded-full border border-amber-300 shadow-2xs">
                          <Star className="w-3 h-3 fill-amber-500 text-amber-600 shrink-0" />
                          <span>{language === 'my' ? 'အထူးညွှန်း' : 'Recommended'}</span>
                        </span>
                      )}
                    </div>

                    <h3 className="font-bold text-gray-900 text-base font-myanmar mt-1.5 leading-snug">
                      {item.name}
                    </h3>
                    {item.nameEn && (
                      <p className="text-xs text-gray-400 font-normal mt-0.5">
                        {item.nameEn}
                      </p>
                    )}
                  </div>

                  {/* Price Tag */}
                  <div className="shrink-0 text-right">
                    <span className="font-bold text-brand-red-dark text-sm sm:text-base bg-brand-red-light px-2.5 py-1 rounded-xl block shadow-2xs">
                      {item.price.toLocaleString()} Ks
                    </span>
                  </div>
                </div>

                {/* Description if present */}
                {item.description && (
                  <p className="text-xs text-gray-500 font-light line-clamp-2 my-2 font-myanmar leading-relaxed">
                    {language === 'my' ? item.description : item.descriptionEn || item.description}
                  </p>
                )}
              </div>

              {/* Action Controls Footer */}
              <div className="pt-3 border-t border-gray-100 mt-2 flex items-center justify-between gap-3">
                {/* Quantity Control */}
                <div className="flex items-center bg-gray-50 border border-gray-200 rounded-xl p-0.5">
                  <button
                    onClick={() => handleQtyChange(item.id, -1)}
                    className="w-7 h-7 flex items-center justify-center text-gray-500 hover:text-gray-800 hover:bg-white rounded-lg transition cursor-pointer"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="w-7 text-center font-bold text-xs text-gray-800">
                    {currentQty}
                  </span>
                  <button
                    onClick={() => handleQtyChange(item.id, 1)}
                    className="w-7 h-7 flex items-center justify-center text-gray-500 hover:text-gray-800 hover:bg-white rounded-lg transition cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Add to Order Button */}
                <button
                  onClick={() => handleAdd(item)}
                  className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition duration-200 cursor-pointer shadow-xs ${
                    isAdded
                      ? 'bg-emerald-600 text-white'
                      : 'bg-brand-red hover:bg-brand-red-dark text-white active:scale-98'
                  }`}
                >
                  {isAdded ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>{language === 'my' ? 'ထည့်ပြီးပါပြီ' : 'Added!'}</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>
                        {language === 'my' ? 'မှာယူမည်' : 'Add to Order'}
                        {inCartCount > 0 && ` (${inCartCount})`}
                      </span>
                    </>
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {filteredItems.length === 0 && (
        <div className="text-center py-12 bg-white rounded-2xl border border-dashed border-gray-200 text-gray-400 space-y-2">
          <Search className="w-8 h-8 mx-auto text-gray-300" />
          <p className="text-xs">
            {language === 'my'
              ? 'ရှာဖွေမှုနှင့် ကိုက်ညီသော ဟင်းပွဲ မရှိပါ။'
              : 'No dishes matching your search.'}
          </p>
        </div>
      )}

      {/* Code editing guidance box for developer/user */}
      <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200/80 text-amber-900 text-xs flex items-start gap-3">
        <Sparkles className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
        <div className="space-y-1 font-myanmar leading-relaxed">
          <p className="font-bold">
            {language === 'my'
              ? '💡 ယနေ့ အထူးဟင်းပွဲများ နေ့စဉ် ပြင်ဆင်ရန် အကြံပြုချက်:'
              : "💡 Easy Daily Menu Editing Note:"}
          </p>
          <p className="text-[11px] text-amber-800 font-light">
            {language === 'my'
              ? 'Code ထဲရှိ `src/data/todaysSpecial.ts` ဖိုင်တွင် ဟင်းပွဲအမည်များ၊ စျေးနှုန်းများနှင့် အထူးညွှန်း (`recommended: true`) အမှတ်အသားများကို နေ့စဉ် လွယ်ကူစွာ တိုက်ရိုက် ပြင်ဆင်/ထည့်သွင်းနိုင်ပါသည်။'
              : 'You can easily update dish names, prices, or recommendation tags daily in `src/data/todaysSpecial.ts`.'}
          </p>
        </div>
      </div>
    </div>
  );
}
