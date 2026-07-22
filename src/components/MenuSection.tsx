import React, { useState, useMemo } from 'react';
import { REGULAR_MENU } from '../data';
import { MenuItem } from '../types';
import { Search, Plus, Minus, ShoppingBag, Check } from 'lucide-react';

interface MenuSectionProps {
  language: 'my' | 'en';
  onAddToOrder: (item: MenuItem, qty: number) => void;
  cartItems: { [key: string]: number };
}

export default function MenuSection({
  language,
  onAddToOrder,
  cartItems,
}: MenuSectionProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<'all' | 'curry' | 'soup' | 'side' | 'dessert'>('all');
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({});
  const [addedAnimation, setAddedAnimation] = useState<{ [key: string]: boolean }>({});

  const handleQtyChange = (id: string, delta: number) => {
    const current = quantities[id] || 1;
    const next = Math.max(1, current + delta);
    setQuantities((prev) => ({ ...prev, [id]: next }));
  };

  const handleAdd = (item: MenuItem) => {
    const qty = quantities[item.id] || 1;
    onAddToOrder(item, qty);
    
    // Trigger success feedback
    setAddedAnimation((prev) => ({ ...prev, [item.id]: true }));
    setTimeout(() => {
      setAddedAnimation((prev) => ({ ...prev, [item.id]: false }));
    }, 1500);
    
    // Reset local quantity
    setQuantities((prev) => ({ ...prev, [item.id]: 1 }));
  };

  const filteredItems = useMemo(() => {
    return REGULAR_MENU.filter((item) => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const term = searchQuery.toLowerCase();
      const matchesSearch = 
        item.name.toLowerCase().includes(term) ||
        item.nameEn.toLowerCase().includes(term) ||
        item.description.toLowerCase().includes(term) ||
        item.descriptionEn.toLowerCase().includes(term);
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, activeCategory]);

  const categories = [
    { id: 'all', labelMy: 'အားလုံး', labelEn: 'All Dishes' },
    { id: 'curry', labelMy: 'ဆီပြန်ဟင်းများ', labelEn: 'Curries' },
    { id: 'soup', labelMy: 'ဟင်းရည်များ', labelEn: 'Soups' },
    { id: 'side', labelMy: 'အသုပ်နှင့်အကြော်', labelEn: 'Sides & Salads' },
    { id: 'dessert', labelMy: 'မုန့်အချိုပွဲ', labelEn: 'Desserts' }
  ];

  return (
    <div className="w-full">
      {/* Category Selection Tabs & Search Box */}
      <div className="mb-6 space-y-4">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder={language === 'my' ? 'ဟင်းပွဲအမည်များဖြင့် ရှာဖွေပါ...' : 'Search delicious dishes...'}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 bg-white/70 text-sm focus:border-brand-red focus:ring-1 focus:ring-brand-red outline-hidden transition-all duration-200"
            id="menu-search-input"
          />
        </div>

        {/* Categories Tab Bar */}
        <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-thin">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as any)}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 shrink-0 cursor-pointer
                ${activeCategory === cat.id
                  ? 'bg-brand-charcoal text-white shadow-sm'
                  : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'
                }
              `}
              id={`cat-btn-${cat.id}`}
            >
              {language === 'my' ? cat.labelMy : cat.labelEn}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Menu Items */}
      {filteredItems.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-2xl border border-gray-100">
          <p className="text-gray-400 text-sm">
            {language === 'my' ? 'ရှာဖွေမှုမတွေ့ရှိပါ - အခြားအမည်ဖြင့် ရှာဖွေကြည့်ပါ' : 'No dishes found matching your search.'}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredItems.map((item) => {
            const currentQty = quantities[item.id] || 1;
            const inCartCount = cartItems[item.id] || 0;
            const isAdded = addedAnimation[item.id];

            return (
              <div
                key={item.id}
                id={`menu-card-${item.id}`}
                className="bg-white rounded-2xl p-4 border border-gray-100 shadow-xs hover:shadow-md hover:border-gray-200/80 transition-all duration-300 flex flex-col justify-between relative group"
              >
                <div>
                  <div className="flex justify-between items-start gap-2 mb-1.5">
                    <h3 className="font-bold text-gray-900 text-base flex flex-col">
                      <span className="font-myanmar text-brand-charcoal text-[15px] leading-relaxed">
                        {item.name}
                      </span>
                      <span className="text-xs text-gray-500 font-normal tracking-wide mt-0.5">
                        {item.nameEn}
                      </span>
                    </h3>
                    
                    <span className="font-bold text-brand-red-dark text-sm sm:text-base shrink-0 bg-brand-red-light px-2.5 py-1 rounded-lg">
                      {item.price.toLocaleString()} Ks
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-gray-600 leading-relaxed font-light mb-4">
                    {language === 'my' ? item.description : item.descriptionEn}
                  </p>
                </div>

                {/* Bottom Section: Quantity Control & Add To Cart Button */}
                <div className="flex items-center justify-between gap-3 pt-3 border-t border-gray-50 mt-auto">
                  {/* Cart Status Tag */}
                  <div className="text-xs text-gray-400">
                    {inCartCount > 0 && (
                      <span className="bg-emerald-50 text-emerald-700 px-2 py-1 rounded-md font-medium inline-flex items-center gap-1">
                        <Check className="w-3 h-3" /> {language === 'my' ? `${inCartCount} ခု မှာထားသည်` : `${inCartCount} in order`}
                      </span>
                    )}
                    {item.popular && (
                      <span className="bg-amber-50 text-amber-700 px-2 py-1 rounded-md font-medium">
                        {language === 'my' ? 'နာမည်ကြီး' : 'Popular'}
                      </span>
                    )}
                  </div>

                  {/* Quantity and Order Button */}
                  <div className="flex items-center gap-2">
                    {/* Stepper */}
                    <div className="flex items-center border border-gray-200 rounded-lg bg-gray-50/50 p-0.5">
                      <button
                        onClick={() => handleQtyChange(item.id, -1)}
                        className="w-7 h-7 flex items-center justify-center text-gray-500 hover:text-brand-charcoal cursor-pointer"
                        disabled={currentQty <= 1}
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="w-6 text-center text-xs font-semibold text-gray-700">
                        {currentQty}
                      </span>
                      <button
                        onClick={() => handleQtyChange(item.id, 1)}
                        className="w-7 h-7 flex items-center justify-center text-gray-500 hover:text-brand-charcoal cursor-pointer"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Add to order action */}
                    <button
                      onClick={() => handleAdd(item)}
                      className={`h-8 px-3 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all duration-300 cursor-pointer
                        ${isAdded 
                          ? 'bg-emerald-600 text-white' 
                          : 'bg-brand-charcoal text-white hover:bg-brand-red'
                        }
                      `}
                    >
                      {isAdded ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>{language === 'my' ? 'ထည့်ပြီးပါပြီ' : 'Added!'}</span>
                        </>
                      ) : (
                        <>
                          <ShoppingBag className="w-3.5 h-3.5" />
                          <span>{language === 'my' ? 'ထည့်မည်' : 'Add'}</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

