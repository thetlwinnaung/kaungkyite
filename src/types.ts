export interface MenuItem {
  id: string;
  name: string;
  nameEn: string;
  price: number;
  category: 'curry' | 'soup' | 'side' | 'dessert';
  description: string;
  descriptionEn: string;
  popular?: boolean;
}

export interface TiffinPackage {
  id: string;
  name: string;
  nameEn: string;
  priceWeekly: number;
  priceMonthly: number;
  description: string;
  descriptionEn: string;
  tiers: {
    pax: number;
    label: string;
    weeklyPrice: number;
    monthlyPrice: number;
  }[];
  features: string[];
  featuresEn: string[];
}

export interface WeeklyDish {
  day: 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';
  dayMy: string;
  lunchMain: string;
  lunchSide: string;
  lunchSoup: string;
  dinnerMain: string;
  dinnerSide: string;
  dinnerSoup: string;
}

export interface WeeklyMenuSet {
  id: 'A' | 'B' | 'C' | 'D';
  label: string;
  labelEn: string;
  menu: WeeklyDish[];
}

export interface OrderDetails {
  customerName: string;
  customerPhone: string;
  deliveryAddress: string;
  startDate: string;
  deliveryTimeSlot: 'lunch' | 'dinner' | 'both';
  notes: string;
  paymentMethod: 'cash' | 'kbzpay' | 'wavepay';
}

export interface OrderItem {
  type: 'menu' | 'package';
  id: string;
  name: string;
  nameEn: string;
  quantity: number;
  price: number;
  details?: string; // e.g. "Monthly - 2 Pax"
}
