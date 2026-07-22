import { TodaysSpecialItem, DailySpecialRoster } from '../types';

/**
 * ============================================================================
 * 🌟 TODAY'S SPECIAL MENU DATA (ယနေ့ အထူးဟင်းပွဲများ)
 * ============================================================================
 * HOW TO EDIT DAILY:
 * 1. You can directly edit the `TODAYS_SPECIAL_MENU` array below to change
 *    today's featured items immediately.
 * 2. You can also populate `DAILY_SPECIAL_ROSTER` with different menus for each
 *    day of the week (Monday-Sunday). The system will automatically pick
 *    today's list based on the user's local day!
 * ============================================================================
 */

export const DEFAULT_TODAYS_SPECIAL: TodaysSpecialItem[] = [
  {
    id: 'ts-1',
    name: 'ကြက်သားဆီပြန်',
    nameEn: 'Traditional Chicken Curry',
    price: 2000,
    recommended: true,
    category: 'curry',
    description: 'ရိုးရာဆီပြန် မွှေးကြိုင်သော ကြက်သားဟင်း',
    descriptionEn: 'Rich traditional Burmese style chicken curry'
  },
  {
    id: 'ts-2',
    name: 'ဝက်သားချက်',
    nameEn: 'Burmese Pork Curry',
    price: 2000,
    recommended: true,
    category: 'curry',
    description: 'နူးအိမွှေးကြိုင်သော ဝက်သားချက်ဟင်း',
    descriptionEn: 'Tender slow-cooked pork curry'
  },
  {
    id: 'ts-3',
    name: 'ကြက်ဥချက်',
    nameEn: 'Egg Curry',
    price: 1500,
    recommended: false,
    category: 'curry',
    description: 'ကြက်ဥဆီပြန်ဟင်း',
    descriptionEn: 'Fried egg curry in tomato gravy'
  },
  {
    id: 'ts-4',
    name: 'ကြက်မွအစပ်ကြော်',
    nameEn: 'Spicy Shredded Chicken',
    price: 2000,
    recommended: true,
    category: 'curry',
    description: 'ကြက်သားမွှေ အစပ်ကြော် မွှေးမွှေးလေး',
    descriptionEn: 'Crisp & spicy stir-fried shredded chicken'
  },
  {
    id: 'ts-5',
    name: 'အမဲသားနှပ်',
    nameEn: 'Braised Beef Curry',
    price: 2000,
    recommended: true,
    category: 'curry',
    description: 'အမဲသားနှပ် နူးနူးအိအိ',
    descriptionEn: 'Aromatic slow-braised beef curry'
  },
  {
    id: 'ts-6',
    name: 'ဆိတ်ရိုးကုလားပဲဟင်း',
    nameEn: 'Mutton Bone & Lentil Soup',
    price: 1500,
    recommended: true,
    category: 'soup',
    description: 'ဆိတ်ရိုးနှင့် ကုလားပဲ စိမ့်စိမ့်လေး',
    descriptionEn: 'Rich mutton bone lentil soup'
  },
  {
    id: 'ts-7',
    name: 'ကုလားပဲနှပ်',
    nameEn: 'Braised Chickpeas',
    price: 1000,
    recommended: false,
    category: 'side',
    description: 'ကုလားပဲစိမ့်စိမ့် နှပ်ထားသည်',
    descriptionEn: 'Braised savory yellow split chickpeas'
  },
  {
    id: 'ts-8',
    name: 'မုန်ညင်းရွက်ကြော်',
    nameEn: 'Stir-fried Mustard Greens',
    price: 1000,
    recommended: false,
    category: 'side',
    description: 'လတ်ဆတ်သော မုန်ညင်းရွက်ကြော်',
    descriptionEn: 'Sautéd mustard green leaves with garlic'
  },
  {
    id: 'ts-9',
    name: 'ငါးလေးခြောက်ကြော်',
    nameEn: 'Fried Crispy Anchovies',
    price: 1500,
    recommended: false,
    category: 'side',
    description: 'ငါးလေးခြောက် ကြွပ်ကြွပ်မွှေးကြော်',
    descriptionEn: 'Crispy deep-fried small anchovies'
  },
  {
    id: 'ts-10',
    name: 'ကစွန်းရွက်ကြော်',
    nameEn: 'Stir-fried Water Spinach',
    price: 1000,
    recommended: false,
    category: 'side',
    description: 'ကြက်သွန်ဖြူဆီချက် ကန်စွန်းရွက်ကြော်',
    descriptionEn: 'Fresh water spinach wok-fried with garlic'
  },
  {
    id: 'ts-11',
    name: 'ရုံးပတေသီး ကြက်ဥကြော်',
    nameEn: 'Stir-fried Okra with Egg',
    price: 1000,
    recommended: false,
    category: 'side',
    description: 'ရုံးပတေသီးနှင့် ကြက်ဥ မွှေကြော်',
    descriptionEn: 'Sliced okra scrambled with egg'
  },
  {
    id: 'ts-12',
    name: 'ပန်းမုံလာကြော်',
    nameEn: 'Stir-fried Cauliflower',
    price: 1000,
    recommended: false,
    category: 'side',
    description: 'ပန်းမုံလာ မွှေးကြိုင်စွာ ကြော်ထားသည်',
    descriptionEn: 'Stir-fried cauliflower florets'
  }
];

/**
 * Weekly rotating daily special roster.
 * You can add or modify items for specific days of the week here!
 */
export const DAILY_SPECIAL_ROSTER: Record<string, TodaysSpecialItem[]> = {
  Monday: DEFAULT_TODAYS_SPECIAL,
  Tuesday: DEFAULT_TODAYS_SPECIAL,
  Wednesday: DEFAULT_TODAYS_SPECIAL,
  Thursday: DEFAULT_TODAYS_SPECIAL,
  Friday: DEFAULT_TODAYS_SPECIAL,
  Saturday: DEFAULT_TODAYS_SPECIAL,
  Sunday: DEFAULT_TODAYS_SPECIAL,
};

/**
 * Helper to get the current day's special menu automatically.
 * Checks current day name or returns the default active list.
 */
export function getCurrentTodaysSpecial(): {
  dayMy: string;
  dayEn: string;
  items: TodaysSpecialItem[];
} {
  const daysMap: Record<number, { dayMy: string; dayEn: string; key: string }> = {
    0: { dayMy: 'တနင်္ဂနွေနေ့', dayEn: 'Sunday', key: 'Sunday' },
    1: { dayMy: 'တနင်္လာနေ့', dayEn: 'Monday', key: 'Monday' },
    2: { dayMy: 'အင်္ဂါနေ့', dayEn: 'Tuesday', key: 'Tuesday' },
    3: { dayMy: 'ဗုဒ္ဓဟူးနေ့', dayEn: 'Wednesday', key: 'Wednesday' },
    4: { dayMy: 'ကြာသပတေးနေ့', dayEn: 'Thursday', key: 'Thursday' },
    5: { dayMy: 'သောကြာနေ့', dayEn: 'Friday', key: 'Friday' },
    6: { dayMy: 'စနေနေ့', dayEn: 'Saturday', key: 'Saturday' },
  };

  const todayIndex = new Date().getDay();
  const dayInfo = daysMap[todayIndex];

  const rosterItems = DAILY_SPECIAL_ROSTER[dayInfo.key];

  return {
    dayMy: dayInfo.dayMy,
    dayEn: dayInfo.dayEn,
    items: rosterItems && rosterItems.length > 0 ? rosterItems : DEFAULT_TODAYS_SPECIAL,
  };
}
