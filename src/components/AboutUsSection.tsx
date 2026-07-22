import React from 'react';
import { Award, Clock, Heart, Shield, Star, MapPin, Phone, Mail } from 'lucide-react';

interface AboutUsSectionProps {
  language: 'my' | 'en';
}

export default function AboutUsSection({ language }: AboutUsSectionProps) {
  const testimonials = [
    {
      name: 'မရွှေရည်ဦး (Shwe Yee Oo)',
      role: language === 'my' ? 'ဘဏ်မန်နေဂျာ၊ လှိုင်မြို့နယ်' : 'Bank Manager, Hlaing',
      content: language === 'my'
        ? 'နေ့တိုင်း နေ့လယ်စာ ဘာစားရမလဲ မစဉ်းစားရတော့လို့ အဆင်ပြေတယ်။ လက်ရာက အိမ်ချက်အတိုင်း ဆီမများဘဲ သန့်ရှင်းလို့ တစ်လလုံး စားပြီးတာတောင် ရင်မပြည့်ပါဘူး။'
        : 'Tiffin service has saved me so much stress during busy workdays! The curries taste exactly like home, never greasy, and exceptionally clean. Highly recommended!',
      rating: 5
    },
    {
      name: 'Dr. Hein Min Thu',
      role: language === 'my' ? 'ဆရာဝန်၊ ဗဟန်းမြို့နယ်' : 'Medical Doctor, Bahan',
      content: language === 'my'
        ? 'ကျန်းမာရေးချိုင့်ဆွဲက ဆီးချို၊ သွေးတိုး သမားတွေတင်မကဘဲ Gym ဆော့တဲ့သူတွေအတွက်ပါ ကောင်းတယ်။ ဆားနည်းပြီး သံလွင်ဆီသုံးချက်ပေးလို့ စိတ်ချလက်ချ စားပါတယ်။'
        : 'As a physician, finding healthy food is key. Their diet plan with olive oil and low sodium is perfect. Extremely nutritious and healthy packaging.',
      rating: 5
    }
  ];

  const standards = [
    {
      icon: Heart,
      titleMy: '၁၀၀% ဆီသန့်စစ်စစ်',
      titleEn: '100% Pure Peanut Oil',
      descMy: 'ကျန်းမာရေးနှင့်အညီညွတ်ဆုံးဖြစ်စေရန် အရည်အသွေးမြင့် မြေပဲဆီစစ်စစ်ကိုသာ သုံးစွဲပါသည်။',
      descEn: 'We cook exclusively with high-grade, premium pure peanut oil to ensure eye-safe, heart-healthy meals.'
    },
    {
      icon: Shield,
      titleMy: 'အချိုမှုန့် (MSG) လုံးဝမသုံး',
      titleEn: 'Strictly No Added MSG',
      descMy: 'အရသာမွှေးကြိုင်ရန် သဘာဝ ကြက်ရိုးပြုတ်ရည်နှင့် ဟင်းခတ်အမွှေးအကြိုင်များကိုသာ အသုံးပြုသည်။',
      descEn: 'We bring deep, authentic natural umami flavor using rich slow-cooked chicken stock and authentic spices.'
    },
    {
      icon: Award,
      titleMy: 'သန့်ရှင်းသပ်ရပ်သောမီးဖိုချောင်',
      titleEn: 'Hygienic Modern Kitchen',
      descMy: 'အစားအသောက်ဘေးကင်းရေးနှင့် သန့်ရှင်းမှုကို အလေးအနက်စောင့်ထိန်းသည်',
      descEn: 'Our food preparation space adheres strictly to standard hygiene and sanitization codes.'
    },
    {
      icon: Clock,
      titleMy: 'အချိန်မှန် ပို့ဆောင်မှု',
      titleEn: 'Punctual Safe Delivery',
      descMy: 'အပူထိန်းချိုင့်များဖြင့် ထမင်းစားချိန်မတိုင်မီ အပူနွေးဆုံးအတိုင်း အရောက်ပို့ပေးပါသည်။',
      descEn: 'Meals are packed in thermal boxes to guarantee they arrive at your desk or home piping hot and on time.'
    }
  ];

  return (
    <div className="w-full space-y-10">
      {/* Brand Story block */}
      <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 sm:p-8 space-y-4">
        <h3 className="font-display font-bold text-xl sm:text-2xl text-brand-charcoal text-center">
          {language === 'my' ? '“ကောင်းကြိုက်” ဆိုင်အကြောင်း' : 'The Story of "Kaung Kyite"'}
        </h3>
        
        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-light text-center max-w-2xl mx-auto">
          {language === 'my'
            ? '“ကောင်းကြိုက်” သည် မိသားစုဝင်များ ကိုယ်တိုင်ချက်ပြုတ်ကျွေးမွေးသကဲ့သို့ မေတ္တာအပြည့်ဖြင့် အကောင်းဆုံး ချက်ပြုတ်ထားပြီး ကျန်းမာရေးနှင့်ညီညွတ်သော မြန်မာ့ရိုးရာအိမ်ချက်လက်ရာများကို ဖန်တီးပေးသည့် ထမင်းဆိုင်နှင့် ချိုင့်ဆွဲဝန်ဆောင်မှု လုပ်ငန်းဖြစ်ပါသည်။ မန္တလေးမြို့ရှိ ရုံးဝန်ထမ်းများနှင့် မိသားစုများ ကျန်းမာရေးအတွက် သန့်ရှင်းလတ်ဆတ်ပြီး အရသာထူးကဲသော ဟင်းပွဲများကို နေ့စဉ်မရိုးရအောင် စေတနာအပြည့်ဖြင့် ချက်ပြုတ်ပို့ဆောင်ပေးလျက် ရှိပါသည်။'
            : '"Kaung Kyite" (meaning Absolutely Delicious or Absolute Favorite) is a premium family-operated Burmese kitchen dedicated to bringing authentic, clean, and nutritious home-cooked meals to busy individuals. We design our daily rotating menus with traditional recipes, using only pure oil, zero MSG, and fresh seasonal ingredients to sustain your health and delight your palate.'}
        </p>
      </div>

      {/* Quality Standards list */}
      <div className="space-y-4">
        <h4 className="font-bold text-gray-800 text-sm sm:text-base text-center uppercase tracking-wider">
          {language === 'my' ? 'ကျွန်ုပ်တို့ အမြဲထိန်းသိမ်းထားသော စံနှုန်းများ' : 'Our Quality Standards'}
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {standards.map((std, idx) => {
            const Icon = std.icon;
            return (
              <div key={idx} className="bg-white p-5 rounded-2xl border border-gray-100 shadow-xs flex gap-3.5">
                <div className="p-2.5 rounded-xl bg-brand-red-light shrink-0 text-brand-red h-fit">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h5 className="font-bold text-brand-charcoal text-xs sm:text-sm font-myanmar">
                    {language === 'my' ? std.titleMy : std.titleEn}
                  </h5>
                  <p className="text-xs text-gray-500 font-light leading-relaxed">
                    {language === 'my' ? std.descMy : std.descEn}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Contact and address cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm space-y-4">
          <h4 className="font-bold text-gray-800 text-sm sm:text-base flex items-center gap-1.5 border-b border-gray-50 pb-2">
            <MapPin className="w-4 h-4 text-brand-red" />
            {language === 'my' ? 'ဆက်သွယ်ရန်အချက်အလက်' : 'Contact & Location'}
          </h4>

          <div className="space-y-3 text-xs text-gray-600 font-light">
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                {language === 'my'
                  ? '၆၂(အေ)၊ ၁၉လမ်း နှင့် ၂၀ လမ်း၊ အောင်မြေသာစံမြို့နယ်၊ မန္တလေးမြို့။'
                  : '62(A), 19th & 20th Street, Aungmyethazan Township, Mandalay, Myanmar.'}
              </p>
            </div>
            
            <div className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-gray-400 shrink-0" />
              <p className="font-semibold text-gray-800">09-975889702, 09-977417939</p>
            </div>

            <div className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-gray-400 shrink-0" />
              <p className="text-gray-700">order@kaungkyite.com</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm space-y-4">
          <h4 className="font-bold text-gray-800 text-sm sm:text-base flex items-center gap-1.5 border-b border-gray-50 pb-2">
            <Clock className="w-4 h-4 text-brand-red" />
            {language === 'my' ? 'ဆိုင်ဖွင့်ချိန်များ' : 'Operational Hours'}
          </h4>

          <div className="space-y-2.5 text-xs text-gray-600">
            <div className="flex justify-between border-b border-gray-50 pb-1.5 font-light">
              <span>{language === 'my' ? 'တနင်္လာ - သောကြာ' : 'Monday - Friday'}</span>
              <span className="font-semibold text-gray-800">8:00 AM - 8:00 PM</span>
            </div>
            <div className="flex justify-between border-b border-gray-50 pb-1.5 font-light">
              <span>{language === 'my' ? 'စနေ - တနင်္ဂနွေ' : 'Saturday - Sunday'}</span>
              <span className="font-semibold text-gray-800">8:00 AM - 7:00 PM</span>
            </div>
            <div className="flex justify-between text-brand-red font-medium pt-1">
              <span>{language === 'my' ? 'ချိုင့်ဆွဲပို့ဆောင်ချိန်' : 'Tiffin Deliveries'}</span>
              <span className="font-bold">11:00 AM / 5:00 PM</span>
            </div>
          </div>
        </div>
      </div>

      {/* Customer Testimonials reviews */}
      <div className="space-y-4">
        <h4 className="font-bold text-gray-800 text-sm sm:text-base text-center uppercase tracking-wider">
          {language === 'my' ? 'စားသုံးသူများ၏ မှတ်ချက်များ' : 'What Our Customers Say'}
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {testimonials.map((test, idx) => (
            <div key={idx} className="bg-white p-5 rounded-2xl border border-gray-100 shadow-xs space-y-3 relative">
              {/* Star rating */}
              <div className="flex gap-0.5 text-amber-400">
                {Array.from({ length: test.rating }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <p className="text-xs text-gray-600 leading-relaxed italic font-light">
                "{test.content}"
              </p>
              <div className="pt-2 border-t border-gray-50">
                <span className="font-bold text-gray-800 text-xs block">{test.name}</span>
                <span className="text-[10px] text-gray-400 block mt-0.5">{test.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
