import { MenuItem, TiffinPackage, WeeklyDish, WeeklyMenuSet } from './types';

export const REGULAR_MENU: MenuItem[] = [
  // Curries (Main Dishes)
  {
    id: 'm1',
    name: 'ကြက်သားဆီပြန်',
    nameEn: 'Traditional Chicken Curry',
    price: 2000,
    category: 'curry',
    description: 'ရိုးရာ ကြက်သားဆီပြန်ဟင်း စစ်စစ်',
    descriptionEn: 'Traditional Burmese-style slow-cooked chicken curry.',
    popular: true
  },
  {
    id: 'm2',
    name: 'ကြက်မွှေကြော်',
    nameEn: 'Stir-fried Shredded Chicken',
    price: 2000,
    category: 'curry',
    description: 'ကြက်သားမွှေကြော်',
    descriptionEn: 'Stir-fried shredded chicken cooked with aromatic spices.'
  },
  {
    id: 'm3',
    name: 'ကြက်အသည်းအမြစ်',
    nameEn: 'Chicken Giblets Curry',
    price: 2000,
    category: 'curry',
    description: 'ကြက်အသည်း၊ အမြစ် ချက်ဟင်း',
    descriptionEn: 'Deliciously seasoned chicken liver and gizzard curry.'
  },
  {
    id: 'm4',
    name: 'ကြက်သားကြော်',
    nameEn: 'Fried Chicken',
    price: 2000,
    category: 'curry',
    description: 'ကြွပ်ရွမွှေးကြိုင်သော ကြက်သားကြော်',
    descriptionEn: 'Crispy and golden-fried marinated chicken.'
  },
  {
    id: 'm5',
    name: 'ကြက်သားအာလူးချက်',
    nameEn: 'Chicken & Potato Curry',
    price: 2000,
    category: 'curry',
    description: 'ကြက်သားနှင့် အာလူးတွဲဖက်ချက်ဟင်း',
    descriptionEn: 'Classic Burmese curry with tender chicken and soft potatoes.',
    popular: true
  },
  {
    id: 'm6',
    name: 'ကြက်တောင်ပံကြော်',
    nameEn: 'Fried Chicken Wings',
    price: 2000,
    category: 'curry',
    description: 'ကြွပ်ရွသော ကြက်တောင်ပံကြော်',
    descriptionEn: 'Crisp and flavorful golden-fried chicken wings.'
  },
  {
    id: 'm7',
    name: 'ကြက်ကန်းဘောင်',
    nameEn: 'Stir-fried Kung Pao Chicken',
    price: 2000,
    category: 'curry',
    description: 'ကြက်ကုန်းဘောင်ကြော် ချိုချဉ်စပ်',
    descriptionEn: 'Stir-fried sweet and spicy Kung Pao chicken with vegetables.'
  },
  {
    id: 'm8',
    name: 'ကြက်ကချင်ချက်',
    nameEn: 'Kachin-style Chicken Curry',
    price: 2000,
    category: 'curry',
    description: 'မခေါင်ရွက်၊ ဆလပ်ရွက်ဖြင့်ချက်သော ကြက်ကချင်ချက်ဟင်း',
    descriptionEn: 'Traditional spicy Kachin-style chicken cooked with local sour herbs.'
  },
  {
    id: 'm9',
    name: 'ကြက်အူချောင်းကြော်',
    nameEn: 'Fried Chicken Sausage',
    price: 1500,
    category: 'curry',
    description: 'မွှေးကြိုင်သော ကြက်အူချောင်းကြော်',
    descriptionEn: 'Tasty pan-fried local chicken sausages.'
  },
  {
    id: 'm10',
    name: 'ကြက်မုန်ညင်း',
    nameEn: 'Chicken with Mustard Greens',
    price: 2000,
    category: 'curry',
    description: 'ကြက်သား မုန်ညင်းချဉ်ချက်ဟင်း',
    descriptionEn: 'Stir-fried chicken with pickled mustard greens.'
  },
  {
    id: 'm11',
    name: 'ကြက်ကဖော်',
    nameEn: 'Holy Basil Fried Chicken',
    price: 2000,
    category: 'curry',
    description: 'ကြက်ကဖော် စပ်စပ်လေးကြော်',
    descriptionEn: 'Spicy stir-fried minced chicken with holy basil (Pad Kra Prow style).'
  },
  {
    id: 'm12',
    name: 'ဝက်သားဆီပြန်',
    nameEn: 'Pork Curry',
    price: 2000,
    category: 'curry',
    description: 'ဝက်သားနီဆီပြန်ဟင်း စစ်စစ်',
    descriptionEn: 'Rich and tender Burmese traditional pork curry.',
    popular: true
  },
  {
    id: 'm13',
    name: 'ဝက်သားကြော်',
    nameEn: 'Fried Pork',
    price: 2000,
    category: 'curry',
    description: 'ဝက်သားကြော် မွှေးမွှေးလေး',
    descriptionEn: 'Crispy marinated pork fried to golden perfection.'
  },
  {
    id: 'm14',
    name: 'ဝက်ကလီစာချက်',
    nameEn: 'Pork Innards Curry',
    price: 2000,
    category: 'curry',
    description: 'ဝက်ကလီစာ အမျိုးမျိုးချက်ဟင်း',
    descriptionEn: 'Slow-cooked pork offal/innards stew with local aromatics.'
  },
  {
    id: 'm15',
    name: 'ဝက်မုန်ညင်း',
    nameEn: 'Pork with Mustard Greens',
    price: 2000,
    category: 'curry',
    description: 'ဝက်သား မုန်ညင်းချဉ်ချက်ဟင်း',
    descriptionEn: 'Savory pork curry cooked with tangy mustard greens.'
  },
  {
    id: 'm16',
    name: 'ဝက်အူချောင်းကြော်',
    nameEn: 'Fried Pork Sausage',
    price: 1500,
    category: 'curry',
    description: 'ဝက်အူချောင်းကြော်',
    descriptionEn: 'Fried sweet and savory traditional pork sausages.'
  },
  {
    id: 'm17',
    name: 'အမဲသားနှပ်',
    nameEn: 'Braised Beef Curry',
    price: 2000,
    category: 'curry',
    description: 'အမဲသားနှပ် နူးအိနေအောင်ချက်ထားသည်',
    descriptionEn: 'Aromatic slow-braised beef tenderloin curry.'
  },
  {
    id: 'm18',
    name: 'အမဲသားကြော်',
    nameEn: 'Fried Beef',
    price: 2000,
    category: 'curry',
    description: 'အမဲသားကြော်',
    descriptionEn: 'Crisp and seasoned deep-fried beef slices.'
  },
  {
    id: 'm19',
    name: 'အမဲခြောက်ဖုတ်',
    nameEn: 'Pounded Beef Jerky',
    price: 2000,
    category: 'curry',
    description: 'အမဲခြောက်ဖုတ် ထောင်းထားသည်',
    descriptionEn: 'Roasted dry beef jerky pounded with garlic and oil.'
  },
  {
    id: 'm20',
    name: 'ဆိတ်ကလီစာချက်',
    nameEn: 'Mutton Innards Curry',
    price: 2000,
    category: 'curry',
    description: 'ဆိတ်ကလီစာ စုံစပ်ချက်',
    descriptionEn: 'Flavorful mutton offal/innards curry cooked with spices.'
  },
  {
    id: 'm21',
    name: 'ဆိတ်သားဟင်း',
    nameEn: 'Mutton Curry',
    price: 2500,
    category: 'curry',
    description: 'ရိုးရာဆိတ်သားဟင်း နူးနူးအိအိ',
    descriptionEn: 'Tender mutton stew slow-cooked in Myanmar spices.'
  },
  {
    id: 'm22',
    name: 'ဆိတ်သားခြောက်ဖုတ်',
    nameEn: 'Pounded Mutton Jerky',
    price: 2000,
    category: 'curry',
    description: 'ဆိတ်သားခြောက်ဖုတ် ထောင်းထားသည်',
    descriptionEn: 'Roasted dry mutton jerky pounded with onions and garlic oil.'
  },
  {
    id: 'm23',
    name: 'ငါးခြောက်ဖုတ်',
    nameEn: 'Pounded Dry Fish',
    price: 2000,
    category: 'curry',
    description: 'ငါးခြောက်ဖုတ်မွှေးမွှေး ထောင်းထားသည်',
    descriptionEn: 'Roasted salted dried fish pounded with chili and garlic.'
  },
  {
    id: 'm24',
    name: 'ငါးချက်',
    nameEn: 'Fish Curry',
    price: 2000,
    category: 'curry',
    description: 'လတ်ဆတ်သော ငါးချက်ဟင်း',
    descriptionEn: 'Fresh river fish slow-simmered in Burmese style gravy.'
  },
  {
    id: 'm25',
    name: 'ငါးကြော်',
    nameEn: 'Fried Fish',
    price: 2000,
    category: 'curry',
    description: 'ငါးကြော် ကြွပ်ကြွပ်မွှေးမွှေး',
    descriptionEn: 'Deep-fried crispy whole or sliced river fish.'
  },
  {
    id: 'm26',
    name: 'ငါးဖယ်ဆုပ်ချက်',
    nameEn: 'Featherback Fishcake Curry',
    price: 1500,
    category: 'curry',
    description: 'ငါးဖယ်ဆုပ်လုံးချက်ဟင်း',
    descriptionEn: 'Burmese hand-kneaded featherback fishcake balls cooked in tomato curry.'
  },
  {
    id: 'm27',
    name: 'ငါးဖယ်ကြော်',
    nameEn: 'Fried Featherback Fishcake',
    price: 1000,
    category: 'curry',
    description: 'ငါးဖယ်ကြော်',
    descriptionEn: 'Fried chewy and savory hand-rolled featherback fishcakes.'
  },
  {
    id: 'm28',
    name: 'ငါးအိုးကပ်',
    nameEn: 'Pan-seared Fish',
    price: 2000,
    category: 'curry',
    description: 'ငါးအိုးကပ်ဟင်း',
    descriptionEn: 'Traditional pan-seared river fish with reduced tomato oil.'
  },
  {
    id: 'm29',
    name: 'ငါးသလောက်ပေါင်း',
    nameEn: 'Slow-cooked Hilsa Fish',
    price: 2500,
    category: 'curry',
    description: 'ငါးသလောက်ကို အရိုးနူးအိနေအောင်ပေါင်းထားသည်',
    descriptionEn: 'Slow-cooked Hilsa fish with edible bones in sweet and tangy soy sauce.',
    popular: true
  },
  {
    id: 'm30',
    name: 'ပုစွန်ဆီပြန်ဟင်း',
    nameEn: 'Prawn Curry',
    price: 2000,
    category: 'curry',
    description: 'ပုစွန်ဆီပြန်ဟင်း',
    descriptionEn: 'Aromatic freshwater prawns simmered in golden curry oil.'
  },
  {
    id: 'm31',
    name: 'ကြက်ဥချက်',
    nameEn: 'Egg Curry',
    price: 1500,
    category: 'curry',
    description: 'ကြက်ဥဟင်း',
    descriptionEn: 'Classic fried egg curry in an onion-tomato based gravy.'
  },
  {
    id: 'm32',
    name: 'ဘဲဥချဉ်ဟင်း',
    nameEn: 'Tangy Duck Egg Curry',
    price: 1500,
    category: 'curry',
    description: 'ဘဲဥချဉ်ဟင်း',
    descriptionEn: 'Duck egg cooked in a tangy tamarind-based sour gravy.'
  },

  // Side Dishes (Sides & Salads)
  {
    id: 's1',
    name: 'ဝက်သွေးသုပ်',
    nameEn: 'Pork Blood Salad',
    price: 1000,
    category: 'side',
    description: 'ဝက်သွေးသုပ်',
    descriptionEn: 'Savory boiled pork blood cubes tossed with onion, chili, and oil.'
  },
  {
    id: 's2',
    name: 'ကြက်သွေးသုပ်',
    nameEn: 'Chicken Blood Salad',
    price: 1000,
    category: 'side',
    description: 'ကြက်သွေးသုပ်',
    descriptionEn: 'Boiled chicken blood cubes tossed with traditional dressing.'
  },
  {
    id: 's3',
    name: 'ကုလားပဲသုပ်',
    nameEn: 'Chickpea Salad',
    price: 1000,
    category: 'side',
    description: 'ကုလားပဲသုပ်',
    descriptionEn: 'Yellow split peas and chickpeas salad with raw cabbage and fried onions.'
  },
  {
    id: 's4',
    name: 'မှိုကန်စွန်းရွက်ကြော်',
    nameEn: 'Stir-fried Water Spinach with Mushrooms',
    price: 1000,
    category: 'side',
    description: 'မှိုကန်စွန်းရွက်ကြော်',
    descriptionEn: 'Stir-fried fresh water spinach (morning glory) with earthy mushrooms.'
  },
  {
    id: 's5',
    name: 'ဂေါ်ဖီ ကြက်ဥကြော်',
    nameEn: 'Stir-fried Cabbage with Egg',
    price: 1000,
    category: 'side',
    description: 'ဂေါ်ဖီ ကြက်ဥကြော်',
    descriptionEn: 'Lightly seasoned stir-fried sliced cabbage with scrambled egg.'
  },
  {
    id: 's6',
    name: 'ပန်းမုံလာကြော်',
    nameEn: 'Stir-fried Cauliflower',
    price: 1000,
    category: 'side',
    description: 'ပန်းမုံလာကြော်',
    descriptionEn: 'Crunchy, colorful stir-fried cauliflower and carrots.'
  },
  {
    id: 's7',
    name: 'မုန်ညင်းကြော်',
    nameEn: 'Stir-fried Mustard Greens',
    price: 1000,
    category: 'side',
    description: 'မုန်ညင်းကြော်',
    descriptionEn: 'Healthy stir-fried green mustard leaves with garlic.'
  },
  {
    id: 's8',
    name: 'ကိုက်လန်ကြော်',
    nameEn: 'Stir-fried Chinese Kale',
    price: 1000,
    category: 'side',
    description: 'ကိုက်လန်ကြော်',
    descriptionEn: 'Fresh Chinese broccoli / kale wok-fried with garlic and soy sauce.'
  },
  {
    id: 's9',
    name: 'ရုံးပတေသီးကြက်ဥကြော်',
    nameEn: 'Stir-fried Okra with Egg',
    price: 1000,
    category: 'side',
    description: 'ရုံးပတေသီးကြက်ဥကြော်',
    descriptionEn: 'Okra sliced and stir-fried with scrambled eggs.'
  },
  {
    id: 's10',
    name: 'ခရမ်းသီးနှပ်',
    nameEn: 'Braised Eggplant',
    price: 1000,
    category: 'side',
    description: 'ခရမ်းသီးနှပ်',
    descriptionEn: 'Slow-braised tender eggplants in garlic and onion infused oil.'
  },
  {
    id: 's11',
    name: 'ပန်ထွေဖျော်',
    nameEn: 'Pan Htwe Phyaw Salad',
    price: 1000,
    category: 'side',
    description: 'ရိုးရာ ပန်ထွေဖျော်',
    descriptionEn: 'Traditional spicy mashed tomato and potato salad paste.'
  },
  {
    id: 's12',
    name: 'မျှစ်ကြော်',
    nameEn: 'Stir-fried Bamboo Shoots',
    price: 1000,
    category: 'side',
    description: 'မျှစ်ကြော်',
    descriptionEn: 'Stir-fried shredded bamboo shoots with turmeric and chilies.'
  },
  {
    id: 's13',
    name: 'ချဉ်ပေါင်ကြော်',
    nameEn: 'Stir-fried Sour Roselle Leaves',
    price: 1000,
    category: 'side',
    description: 'ချဉ်ပေါင်ကြော်',
    descriptionEn: 'Classic sour roselle leaves stir-fried with bamboo shoots and chilies.',
    popular: true
  },
  {
    id: 's14',
    name: 'ပဲတောင့်ရှည်ကြော်',
    nameEn: 'Stir-fried Long Beans',
    price: 1000,
    category: 'side',
    description: 'ပဲတောင့်ရှည်ကြော်',
    descriptionEn: 'Stir-fried snake beans / long green beans with garlic.'
  },
  {
    id: 's15',
    name: 'ပန်းပွင့်စိမ်းကြော်',
    nameEn: 'Stir-fried Broccoli',
    price: 1000,
    category: 'side',
    description: 'ပန်းပွင့်စိမ်းကြော်',
    descriptionEn: 'Fresh green broccoli florets stir-fried with garlic.'
  },
  {
    id: 's16',
    name: 'ပြောင်းဖူးကြော်',
    nameEn: 'Stir-fried Sweet Corn',
    price: 1000,
    category: 'side',
    description: 'ပြောင်းဖူးကြော်',
    descriptionEn: 'Sweet corn kernels stir-fried with garlic and seasoning.'
  },
  {
    id: 's17',
    name: 'ငါးလေးခြောက်ကြော်',
    nameEn: 'Fried Crispy Tiny Anchovies',
    price: 1000,
    category: 'side',
    description: 'ငါးလေးခြောက်ကြော်',
    descriptionEn: 'Crispy deep-fried tiny dried anchovies with fried onions.'
  },
  {
    id: 's18',
    name: 'ငံပြာရည်ကြော်',
    nameEn: 'Burmese Fried Fish Sauce Paste',
    price: 1000,
    category: 'side',
    description: 'ငံပြာရည်ကြော်',
    descriptionEn: 'Intense pan-fried premium fish sauce mixture with chili and dried shrimp.'
  },
  {
    id: 's19',
    name: 'ဘာလချောင်ကြော်',
    nameEn: 'Balachung Condiment',
    price: 1000,
    category: 'side',
    description: 'ဘာလချောင်ကြော် စပ်စပ်လေး',
    descriptionEn: 'Spicy crispy condiments made of dried shrimp, garlic, and fried onions.',
    popular: true
  },
  {
    id: 's20',
    name: 'ဟင်းနုနွယ်ကြော်',
    nameEn: 'Stir-fried Spinach',
    price: 1000,
    category: 'side',
    description: 'ဟင်းနုနွယ်ကြော်',
    descriptionEn: 'Stir-fried fresh local spinach leaves.'
  },
  {
    id: 's21',
    name: 'ဂေါ်ရခါးညွန့်ကြော်',
    nameEn: 'Stir-fried Chayote Shoots',
    price: 1000,
    category: 'side',
    description: 'ဂေါ်ရခါးညွန့်ကြော်',
    descriptionEn: 'Stir-fried tender chayote leafy greens with garlic.'
  },
  {
    id: 's22',
    name: 'ငါးပိကြော်',
    nameEn: 'Fried Spicy Shrimp Paste',
    price: 1000,
    category: 'side',
    description: 'ငါးပိကြော်',
    descriptionEn: 'Cooked spicy fermented fish/shrimp paste with onions and chilies.'
  },
  {
    id: 's23',
    name: 'ငါးပိရည်/အတို့အမြှုပ်',
    nameEn: 'Ngapi Yay & Veggie Platter',
    price: 1000,
    category: 'side',
    description: 'ငါးပိရည်နှင့် အတို့အမြှုပ်မျိုးစုံ',
    descriptionEn: 'Traditional fish paste dipping soup served with fresh, boiled, and roasted seasonal vegetables.',
    popular: true
  },
  {
    id: 's24',
    name: 'ပဲပင်ပေါက်ကြော်',
    nameEn: 'Stir-fried Bean Sprouts',
    price: 1000,
    category: 'side',
    description: 'ပဲပင်ပေါက်ကြော်',
    descriptionEn: 'Quick-tossed crunchy bean sprouts with chives.'
  },

  // Soups
  {
    id: 'so1',
    name: 'အချဉ်ရည်ဟင်း',
    nameEn: 'Clear Sour Soup',
    price: 1000,
    category: 'soup',
    description: 'အချဉ်ရည်ဟင်း',
    descriptionEn: 'A light, clearing tangy broth with roselle or drumsticks.',
    popular: true
  },
  {
    id: 'so2',
    name: 'သီးစုံကုလားပဲဟင်း',
    nameEn: 'Sambar Veggie Soup',
    price: 1000,
    category: 'soup',
    description: 'သီးစုံကုလားပဲဟင်း',
    descriptionEn: 'Rich, aromatic lentil soup loaded with a variety of seasonal vegetables.'
  },
  {
    id: 'so3',
    name: 'ဘူးသီးဟင်းချို',
    nameEn: 'Bottle Gourd Soup',
    price: 1000,
    category: 'soup',
    description: 'ဘူးသီးဟင်းချို',
    descriptionEn: 'Mild and refreshing bottle gourd soup with a pinch of black pepper.'
  }
];

export const TIFFIN_PACKAGES: TiffinPackage[] = [
  {
    id: 'p1',
    name: 'ရိုးရာနေ့စဉ် ချိုင့်ဆွဲ (Standard Plan)',
    nameEn: 'Traditional Daily Tiffin (Standard Plan)',
    priceWeekly: 25000,
    priceMonthly: 90000,
    description: 'အိမ်ချက်အရသာစစ်စစ်ဖြင့် ဟင်းတစ်မျိုး၊ အကြော် သို့မဟုတ် အသုပ် တစ်မျိုး၊ ဟင်းရည်တစ်မျိုး ပါဝင်သော နေ့စဉ်ချိုင့်ဆွဲဝန်ဆောင်မှု။',
    descriptionEn: 'Premium homestyle meals including 1 Main Curry, 1 Side/Salad, and 1 Soup delivered fresh daily in insulated steel containers.',
    tiers: [
      { pax: 1, label: '၁ ဦးစာ (1 Person)', weeklyPrice: 25000, monthlyPrice: 90000 },
      { pax: 2, label: '၂ ဦးစာ (2 People)', weeklyPrice: 45000, monthlyPrice: 160000 },
      { pax: 4, label: 'မိသားစုစာ (4 People)', weeklyPrice: 80000, monthlyPrice: 300000 }
    ],
    features: [
      'နေ့စဉ် ဟင်းအမျိုးအစား အသစ်ပြင်ဆင်ပေးခြင်း',
      'ကျန်းမာရေးနှင့်ညီညွတ်စွာ ဆီလျှော့၊ ဆားလျှော့ချက်ပြုတ်ခြင်း',
      'အပူထိန်းစတီးချိုင့်ဖြင့် အိမ်တိုင်ရာရောက် ပို့ဆောင်ပေးခြင်း',
      'အချိုမှုန့် (MSG) လုံးဝ မသုံးစွဲပါ'
    ],
    featuresEn: [
      'Fresh menu items changed daily',
      'Healthier recipes with optimized oil and low sodium',
      'Delivered in premium hot-insulated steel tiffin boxes',
      'Strictly No MSG added during preparation'
    ]
  },
  {
    id: 'p2',
    name: 'အထူးကျန်းမာရေး ချိုင့်ဆွဲ (Premium Diet Plan)',
    nameEn: 'Premium Health & Diet Tiffin (Diet Plan)',
    priceWeekly: 35000,
    priceMonthly: 130000,
    description: 'ဆီးချို၊ သွေးတိုး သမားများနှင့် အဆီအသား မျှတစွာစားသုံးလိုသူများအတွက် အထူးစီမံထားသော ကျန်းမာရေးချိုင့်ဆွဲ။',
    descriptionEn: 'Specially designed by diet coaches for diabetes, hypertension, or fitness enthusiasts. Rich in fiber and clean protein.',
    tiers: [
      { pax: 1, label: '၁ ဦးစာ (1 Person)', weeklyPrice: 35000, monthlyPrice: 130000 },
      { pax: 2, label: '၂ ဦးစာ (2 People)', weeklyPrice: 65000, monthlyPrice: 240000 },
      { pax: 4, label: 'မိသားစုစာ (4 People)', weeklyPrice: 120000, monthlyPrice: 450000 }
    ],
    features: [
      'သံလွင်ဆီနှင့် အရည်အသွေးမြင့် ကုန်ကြမ်းများသာ သုံးစွဲခြင်း',
      'ထမင်းညို (Brown Rice) သို့မဟုတ် ကွေကာထမင်း ရွေးချယ်နိုင်ခြင်း',
      'ပရိုတင်းဓာတ်မြင့်မားသော အသားနှင့် ဟင်းသီးဟင်းရွက်စုံ',
      'အငံဓာတ်အနည်းဆုံးနှင့် အချိုဓာတ်လုံးဝမပါဝင်ပါ'
    ],
    featuresEn: [
      'Prepared strictly with premium olive oil and select ingredients',
      'Option for Premium Brown Rice or Quinoa blend',
      'High protein portions paired with rich organic greens',
      'Low sodium and absolutely sugar-free preparations'
    ]
  }
];

export const WEEKLY_MENU_SETS: WeeklyMenuSet[] = [
  {
    id: 'A',
    label: 'ဟင်းစာရင်း (A)',
    labelEn: 'Menu List A',
    menu: [
      {
        day: 'Monday',
        dayMy: 'တနင်္လာနေ့',
        lunchMain: 'ကြက်သားချက် (Chicken Curry)',
        lunchSide: 'ရုံးပတေသီးကြက်ဥကြော် (Stir-fried Okra with Egg)',
        lunchSoup: 'ဘူးသီးဟင်းချို (Bottle Gourd Soup)',
        dinnerMain: 'ကြက်ကုန်းဘောင် (Kung Pao Chicken)',
        dinnerSide: 'ချဉ်ပေါင်ကြော် (Stir-fried Sour Roselle Leaves)',
        dinnerSoup: 'ပဲကုလားဟင်း (Veggie Dhal Soup)'
      },
      {
        day: 'Tuesday',
        dayMy: 'အင်္ဂါနေ့',
        lunchMain: 'ငါးဖယ်ဆုပ်ချက် (Featherback Fishcake Curry)',
        lunchSide: 'ကိုက်လန်ကြော် (Stir-fried Chinese Kale)',
        lunchSoup: 'အချဉ်ရည်ဟင်း (Clear Sour Soup)',
        dinnerMain: 'ကြက်ကဖော် (Holy Basil Chicken)',
        dinnerSide: 'ပန်ထွေဖျော် (Pan Htwe Phyaw Salad)',
        dinnerSoup: 'သီးစုံကုလားပဲဟင်း (Sambar Veggie Soup)'
      },
      {
        day: 'Wednesday',
        dayMy: 'ဗုဒ္ဓဟူးနေ့',
        lunchMain: 'ပုစွန်ဆီပြန်ဟင်း (Prawn Curry)',
        lunchSide: 'ဂေါ်ဖီ ကြက်ဥကြော် (Stir-fried Cabbage with Egg)',
        lunchSoup: 'ဘူးသီးဟင်းချို (Bottle Gourd Soup)',
        dinnerMain: 'ငါးခြောက်ဖုတ် (Pounded Dry Fish)',
        dinnerSide: 'မျှစ်ကြော် (Stir-fried Bamboo Shoots)',
        dinnerSoup: 'အချဉ်ရည်ဟင်း (Clear Sour Soup)'
      },
      {
        day: 'Thursday',
        dayMy: 'ကြာသပတေးနေ့',
        lunchMain: 'ငါးကြော်ချက် (Fried Fish Curry)',
        lunchSide: 'ကုလားပဲသုပ် (Chickpea Salad)',
        lunchSoup: 'သီးစုံကုလားပဲဟင်း (Sambar Veggie Soup)',
        dinnerMain: 'ဆိတ်သားခြောက်ဖုတ် (Pounded Mutton Jerky)',
        dinnerSide: 'မုန်ညင်းကြော် (Stir-fried Mustard Greens)',
        dinnerSoup: 'ဘူးသီးဟင်းချို (Bottle Gourd Soup)'
      },
      {
        day: 'Friday',
        dayMy: 'သောကြာနေ့',
        lunchMain: 'ကြက်မြစ်သည်းချက် (Chicken Giblets Curry)',
        lunchSide: 'ငါးပိရည်/အတို့အမြှုပ် (Ngapi Yay & Veggie Platter)',
        lunchSoup: 'အချဉ်ရည်ဟင်း (Clear Sour Soup)',
        dinnerMain: 'ကြက်မွှေကြော် (Stir-fried Shredded Chicken)',
        dinnerSide: 'ပဲတောင့်ရှည်ကြော် (Stir-fried Long Beans)',
        dinnerSoup: 'သီးစုံကုလားပဲဟင်း (Sambar Veggie Soup)'
      },
      {
        day: 'Saturday',
        dayMy: 'စနေနေ့',
        lunchMain: 'ပုစွန်ငါးပိချက် (Prawn Chili Paste)',
        lunchSide: 'တို့စရာ အသီးအရွက်စုံ (Fresh Veggie Platter)',
        lunchSoup: 'မျှစ်ချဉ်ရည်ဟင်း (Tangy Bamboo Shoot Soup)',
        dinnerMain: 'ဝက်အူစုံကြော်/ချက် (Burmese Mixed Pork Innards)',
        dinnerSide: 'အာလူးကပ်သုပ် (Pounded Potato Salad)',
        dinnerSoup: 'ပဲကုလားဟင်း (Creamy Dhal Soup)'
      },
      {
        day: 'Sunday',
        dayMy: 'တနင်္ဂနွေနေ့',
        lunchMain: 'ကြက်သားဒံပေါက် (Special Chicken Biryani Day)',
        lunchSide: 'သခွားသီးချဉ်စပ်သုပ် (Tangy Cucumber Salad)',
        lunchSoup: 'အချဉ်ရည်ဟင်း (Biryani Sour Gravy)',
        dinnerMain: 'ငါးသလဲထိုးဆီပြန်ဟင်း (Tiny River Fish Crispy Curry)',
        dinnerSide: 'ကန်စွန်းရွက်ချဉ်စပ်ကြော် (Spicy Water Spinach)',
        dinnerSoup: 'မုန်လာဥချဉ်ရည်ဟင်း (Sour Vegetable Medley Soup)'
      }
    ]
  },
  {
    id: 'B',
    label: 'ဟင်းစာရင်း (B)',
    labelEn: 'Menu List B',
    menu: [
      {
        day: 'Monday',
        dayMy: 'တနင်္လာနေ့',
        lunchMain: 'ငါးအိုးကပ် (Pan-seared Fish)',
        lunchSide: 'ရုံးပတေသီးကြက်ဥကြော် (Stir-fried Okra with Egg)',
        lunchSoup: 'ဘူးသီးဟင်းချို (Bottle Gourd Soup)',
        dinnerMain: 'ကြက်သားကြော် (Fried Chicken)',
        dinnerSide: 'ချဉ်ပေါင်ကြော် (Stir-fried Sour Roselle Leaves)',
        dinnerSoup: 'ပဲကုလားဟင်း (Veggie Dhal Soup)'
      },
      {
        day: 'Tuesday',
        dayMy: 'အင်္ဂါနေ့',
        lunchMain: 'ကြက်ဥချက် (Egg Curry)',
        lunchSide: 'ကိုက်လန်ကြော် (Stir-fried Chinese Kale)',
        lunchSoup: 'အချဉ်ရည်ဟင်း (Clear Sour Soup)',
        dinnerMain: 'ကြက်မွှေကြော် (Stir-fried Shredded Chicken)',
        dinnerSide: 'ပန်ထွေဖျော် (Pan Htwe Phyaw Salad)',
        dinnerSoup: 'သီးစုံကုလားပဲဟင်း (Sambar Veggie Soup)'
      },
      {
        day: 'Wednesday',
        dayMy: 'ဗုဒ္ဓဟူးနေ့',
        lunchMain: 'ဆိတ်ကလီစာချက် (Mutton Offal Curry)',
        lunchSide: 'ဂေါ်ဖီ ကြက်ဥကြော် (Stir-fried Cabbage with Egg)',
        lunchSoup: 'ဘူးသီးဟင်းချို (Bottle Gourd Soup)',
        dinnerMain: 'ငါးခြောက်ဖုတ် (Pounded Dry Fish)',
        dinnerSide: 'မျှစ်ကြော် (Stir-fried Bamboo Shoots)',
        dinnerSoup: 'အချဉ်ရည်ဟင်း (Clear Sour Soup)'
      },
      {
        day: 'Thursday',
        dayMy: 'ကြာသပတေးနေ့',
        lunchMain: 'ကြက်မွှေကြော် (Stir-fried Shredded Chicken)',
        lunchSide: 'ကုလားပဲသုပ် (Chickpea Salad)',
        lunchSoup: 'သီးစုံကုလားပဲဟင်း (Sambar Veggie Soup)',
        dinnerMain: 'ဘဲဥချဉ်ချက် (Tangy Duck Egg Curry)',
        dinnerSide: 'မုန်ညင်းကြော် (Stir-fried Mustard Greens)',
        dinnerSoup: 'ဘူးသီးဟင်းချို (Bottle Gourd Soup)'
      },
      {
        day: 'Friday',
        dayMy: 'သောကြာနေ့',
        lunchMain: 'ကြက်အူချောင်းချက် (Chicken Sausage Curry)',
        lunchSide: 'ငါးပိရည်/အတို့အမြှုပ် (Ngapi Yay & Veggie Platter)',
        lunchSoup: 'အချဉ်ရည်ဟင်း (Clear Sour Soup)',
        dinnerMain: 'ငါးကြော် (Fried Fish)',
        dinnerSide: 'ပဲတောင့်ရှည်ကြော် (Stir-fried Long Beans)',
        dinnerSoup: 'သီးစုံကုလားပဲဟင်း (Sambar Veggie Soup)'
      },
      {
        day: 'Saturday',
        dayMy: 'စနေနေ့',
        lunchMain: 'ပုစွန်ငါးပိချက် (Prawn Chili Paste)',
        lunchSide: 'တို့စရာ အသီးအရွက်စုံ (Fresh Veggie Platter)',
        lunchSoup: 'မျှစ်ချဉ်ရည်ဟင်း (Tangy Bamboo Shoot Soup)',
        dinnerMain: 'ဝက်အူစုံကြော်/ချက် (Burmese Mixed Pork Innards)',
        dinnerSide: 'အာလူးကပ်သုပ် (Pounded Potato Salad)',
        dinnerSoup: 'ပဲကုလားဟင်း (Creamy Dhal Soup)'
      },
      {
        day: 'Sunday',
        dayMy: 'တနင်္ဂနွေနေ့',
        lunchMain: 'ကြက်သားဒံပေါက် (Special Chicken Biryani Day)',
        lunchSide: 'သခွားသီးချဉ်စပ်သုပ် (Tangy Cucumber Salad)',
        lunchSoup: 'အချဉ်ရည်ဟင်း (Biryani Sour Gravy)',
        dinnerMain: 'ငါးသလဲထိုးဆီပြန်ဟင်း (Tiny River Fish Crispy Curry)',
        dinnerSide: 'ကန်စွန်းရွက်ချဉ်စပ်ကြော် (Spicy Water Spinach)',
        dinnerSoup: 'မုန်လာဥချဉ်ရည်ဟင်း (Sour Vegetable Medley Soup)'
      }
    ]
  },
  {
    id: 'C',
    label: 'ဟင်းစာရင်း (C)',
    labelEn: 'Menu List C',
    menu: [
      {
        day: 'Monday',
        dayMy: 'တနင်္လာနေ့',
        lunchMain: 'ကြက်ကဖော် (Holy Basil Chicken)',
        lunchSide: 'ရုံးပတေသီးကြက်ဥကြော် (Stir-fried Okra with Egg)',
        lunchSoup: 'ဘူးသီးဟင်းချို (Bottle Gourd Soup)',
        dinnerMain: 'ကြက်တောင်ပံကြော် (Fried Chicken Wings)',
        dinnerSide: 'ချဉ်ပေါင်ကြော် (Stir-fried Sour Roselle Leaves)',
        dinnerSoup: 'ပဲကုလားဟင်း (Veggie Dhal Soup)'
      },
      {
        day: 'Tuesday',
        dayMy: 'အင်္ဂါနေ့',
        lunchMain: 'ကြက်ချဉ်စပ် (Spicy Sour Chicken)',
        lunchSide: 'ကိုက်လန်ကြော် (Stir-fried Chinese Kale)',
        lunchSoup: 'အချဉ်ရည်ဟင်း (Clear Sour Soup)',
        dinnerMain: 'ငါးဖယ်ဆုပ်ချက် (Featherback Fishcake Curry)',
        dinnerSide: 'ပန်ထွေဖျော် (Pan Htwe Phyaw Salad)',
        dinnerSoup: 'သီးစုံကုလားပဲဟင်း (Sambar Veggie Soup)'
      },
      {
        day: 'Wednesday',
        dayMy: 'ဗုဒ္ဓဟူးနေ့',
        lunchMain: 'ငါးခြောက်ချက် (Dry Fish Curry)',
        lunchSide: 'ဂေါ်ဖီ ကြက်ဥကြော် (Stir-fried Cabbage with Egg)',
        lunchSoup: 'ဘူးသီးဟင်းချို (Bottle Gourd Soup)',
        dinnerMain: 'ကြက်ကြော် (Fried Chicken)',
        dinnerSide: 'မျှစ်ကြော် (Stir-fried Bamboo Shoots)',
        dinnerSoup: 'အချဉ်ရည်ဟင်း (Clear Sour Soup)'
      },
      {
        day: 'Thursday',
        dayMy: 'ကြာသပတေးနေ့',
        lunchMain: 'ကြက်ဥချက် (Egg Curry)',
        lunchSide: 'ကုလားပဲသုပ် (Chickpea Salad)',
        lunchSoup: 'သီးစုံကုလားပဲဟင်း (Sambar Veggie Soup)',
        dinnerMain: 'ကြက်မွှေကြော် (Stir-fried Shredded Chicken)',
        dinnerSide: 'မုန်ညင်းကြော် (Stir-fried Mustard Greens)',
        dinnerSoup: 'ဘူးသီးဟင်းချို (Bottle Gourd Soup)'
      },
      {
        day: 'Friday',
        dayMy: 'သောကြာနေ့',
        lunchMain: 'ငါးကြော် (Fried Fish)',
        lunchSide: 'ငါးပိရည်/အတို့အမြှုပ် (Ngapi Yay & Veggie Platter)',
        lunchSoup: 'အချဉ်ရည်ဟင်း (Clear Sour Soup)',
        dinnerMain: 'ငါးအိုးကပ် (Pan-seared Fish)',
        dinnerSide: 'ပဲတောင့်ရှည်ကြော် (Stir-fried Long Beans)',
        dinnerSoup: 'သီးစုံကုလားပဲဟင်း (Sambar Veggie Soup)'
      },
      {
        day: 'Saturday',
        dayMy: 'စနေနေ့',
        lunchMain: 'ပုစွန်ငါးပိချက် (Prawn Chili Paste)',
        lunchSide: 'တို့စရာ အသီးအရွက်စုံ (Fresh Veggie Platter)',
        lunchSoup: 'မျှစ်ချဉ်ရည်ဟင်း (Tangy Bamboo Shoot Soup)',
        dinnerMain: 'ဝက်အူစုံကြော်/ချက် (Burmese Mixed Pork Innards)',
        dinnerSide: 'အာလူးကပ်သုပ် (Pounded Potato Salad)',
        dinnerSoup: 'ပဲကုလားဟင်း (Creamy Dhal Soup)'
      },
      {
        day: 'Sunday',
        dayMy: 'တနင်္ဂနွေနေ့',
        lunchMain: 'ကြက်သားဒံပေါက် (Special Chicken Biryani Day)',
        lunchSide: 'သခွားသီးချဉ်စပ်သုပ် (Tangy Cucumber Salad)',
        lunchSoup: 'အချဉ်ရည်ဟင်း (Biryani Sour Gravy)',
        dinnerMain: 'ငါးသလဲထိုးဆီပြန်ဟင်း (Tiny River Fish Crispy Curry)',
        dinnerSide: 'ကန်စွန်းရွက်ချဉ်စပ်ကြော် (Spicy Water Spinach)',
        dinnerSoup: 'မုန်လာဥချဉ်ရည်ဟင်း (Sour Vegetable Medley Soup)'
      }
    ]
  },
  {
    id: 'D',
    label: 'ဟင်းစာရင်း (D)',
    labelEn: 'Menu List D',
    menu: [
      {
        day: 'Monday',
        dayMy: 'တနင်္လာနေ့',
        lunchMain: 'ကြက်မြစ်သည်းချက် (Chicken Giblets Curry)',
        lunchSide: 'ရုံးပတေသီးကြက်ဥကြော် (Stir-fried Okra with Egg)',
        lunchSoup: 'ဘူးသီးဟင်းချို (Bottle Gourd Soup)',
        dinnerMain: 'ကြက်ကုန်းဘောင် (Kung Pao Chicken)',
        dinnerSide: 'ချဉ်ပေါင်ကြော် (Stir-fried Sour Roselle Leaves)',
        dinnerSoup: 'ပဲကုလားဟင်း (Veggie Dhal Soup)'
      },
      {
        day: 'Tuesday',
        dayMy: 'အင်္ဂါနေ့',
        lunchMain: 'ငါးကြော်ချက် (Fried Fish Curry)',
        lunchSide: 'ကိုက်လန်ကြော် (Stir-fried Chinese Kale)',
        lunchSoup: 'အချဉ်ရည်ဟင်း (Clear Sour Soup)',
        dinnerMain: 'ပုစွန်ဆီပြန်ချက် (Prawn Curry)',
        dinnerSide: 'ပန်ထွေဖျော် (Pan Htwe Phyaw Salad)',
        dinnerSoup: 'သီးစုံကုလားပဲဟင်း (Sambar Veggie Soup)'
      },
      {
        day: 'Wednesday',
        dayMy: 'ဗုဒ္ဓဟူးနေ့',
        lunchMain: 'ကြက်မွှေကြော် (Stir-fried Shredded Chicken)',
        lunchSide: 'ဂေါ်ဖီ ကြက်ဥကြော် (Stir-fried Cabbage with Egg)',
        lunchSoup: 'ဘူးသီးဟင်းချို (Bottle Gourd Soup)',
        dinnerMain: 'ကြက်သားအာလူးချက် (Chicken & Potato Curry)',
        dinnerSide: 'မျှစ်ကြော် (Stir-fried Bamboo Shoots)',
        dinnerSoup: 'အချဉ်ရည်ဟင်း (Clear Sour Soup)'
      },
      {
        day: 'Thursday',
        dayMy: 'ကြာသပတေးနေ့',
        lunchMain: 'ဆိတ်ကလီစာချက် (Mutton Offal Curry)',
        lunchSide: 'ကုလားပဲသုပ် (Chickpea Salad)',
        lunchSoup: 'သီးစုံကုလားပဲဟင်း (Sambar Veggie Soup)',
        dinnerMain: 'ကြက်ဥချက် (Egg Curry)',
        dinnerSide: 'မုန်ညင်းကြော် (Stir-fried Mustard Greens)',
        dinnerSoup: 'ဘူးသီးဟင်းချို (Bottle Gourd Soup)'
      },
      {
        day: 'Friday',
        dayMy: 'သောကြာနေ့',
        lunchMain: 'ကြက်တောင်ပံ (Fried Chicken Wings)',
        lunchSide: 'ငါးပိရည်/အတို့အမြှုပ် (Ngapi Yay & Veggie Platter)',
        lunchSoup: 'အချဉ်ရည်ဟင်း (Clear Sour Soup)',
        dinnerMain: 'ငါးကြော် (Fried Fish)',
        dinnerSide: 'ပဲတောင့်ရှည်ကြော် (Stir-fried Long Beans)',
        dinnerSoup: 'သီးစုံကုလားပဲဟင်း (Sambar Veggie Soup)'
      },
      {
        day: 'Saturday',
        dayMy: 'စနေနေ့',
        lunchMain: 'ပုစွန်ငါးပိချက် (Prawn Chili Paste)',
        lunchSide: 'တို့စရာ အသီးအရွက်စုံ (Fresh Veggie Platter)',
        lunchSoup: 'မျှစ်ချဉ်ရည်ဟင်း (Tangy Bamboo Shoot Soup)',
        dinnerMain: 'ဝက်အူစုံကြော်/ချက် (Burmese Mixed Pork Innards)',
        dinnerSide: 'အာလူးကပ်သုပ် (Pounded Potato Salad)',
        dinnerSoup: 'ပဲကုလားဟင်း (Creamy Dhal Soup)'
      },
      {
        day: 'Sunday',
        dayMy: 'တနင်္ဂနွေနေ့',
        lunchMain: 'ကြက်သားဒံပေါက် (Special Chicken Biryani Day)',
        lunchSide: 'သခွားသီးချဉ်စပ်သုပ် (Tangy Cucumber Salad)',
        lunchSoup: 'အချဉ်ရည်ဟင်း (Biryani Sour Gravy)',
        dinnerMain: 'ငါးသလဲထိုးဆီပြန်ဟင်း (Tiny River Fish Crispy Curry)',
        dinnerSide: 'ကန်စွန်းရွက်ချဉ်စပ်ကြော် (Spicy Water Spinach)',
        dinnerSoup: 'မုန်လာဥချဉ်ရည်ဟင်း (Sour Vegetable Medley Soup)'
      }
    ]
  }
];

export const WEEKLY_MENU: WeeklyDish[] = WEEKLY_MENU_SETS[0].menu;

export const DELIVERY_ZONES = [
  { township: 'Aungmyethazan (အောင်မြေသာစံ)', fee: 1500, time: '11:00 AM / 5:00 PM' },
  { township: 'Chanayethazan (ချမ်းအေးသားစံ)', fee: 1000, time: '11:15 AM / 5:15 PM' },
  { township: 'Mahaaungmye (မဟာအောင်မြေ)', fee: 1200, time: '11:30 AM / 5:30 PM' },
  { township: 'Chanmyathazi (ချမ်းမြသာစည်)', fee: 1500, time: '11:45 AM / 5:45 PM' },
  { township: 'Pyigyidagun (ပြည်ကြီးတံခွန်)', fee: 2000, time: '12:00 PM / 6:00 PM' }
];
