import React, { useState, useMemo } from 'react';
import { MenuItem, TiffinPackage, OrderDetails, OrderItem } from '../types';
import { DELIVERY_ZONES } from '../data';
import { Trash2, ShoppingCart, User, Phone, MapPin, Calendar, Clock, DollarSign, Send, CheckCircle2, Copy, Trash, AlertCircle } from 'lucide-react';

interface OrderFormSectionProps {
  language: 'my' | 'en';
  cartItems: OrderItem[];
  onUpdateQty: (type: 'menu' | 'package', id: string, delta: number, details?: string) => void;
  onRemoveItem: (type: 'menu' | 'package', id: string, details?: string) => void;
  onClearCart: () => void;
  setActiveSection: (sec: string | null) => void;
}

export default function OrderFormSection({
  language,
  cartItems,
  onUpdateQty,
  onRemoveItem,
  onClearCart,
  setActiveSection
}: OrderFormSectionProps) {
  // Order customer details
  const [formData, setFormData] = useState<OrderDetails>({
    customerName: '',
    customerPhone: '',
    deliveryAddress: '',
    startDate: new Date().toISOString().split('T')[0],
    deliveryTimeSlot: 'both',
    notes: '',
    paymentMethod: 'cash'
  });

  const [selectedTownship, setSelectedTownship] = useState(DELIVERY_ZONES[0].township);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [generatedOrderId, setGeneratedOrderId] = useState('');
  const [isCopied, setIsCopied] = useState(false);

  // Telegram Integration state
  const [telegramStatus, setTelegramStatus] = useState<'idle' | 'sending' | 'success' | 'failed'>('idle');
  const [telegramError, setTelegramError] = useState<string | null>(null);
  const [telegramChatId, setTelegramChatId] = useState<string>(() => {
    // 1. Check URL query parameter 'chat_id'
    const urlParams = new URLSearchParams(window.location.search);
    const queryChatId = urlParams.get('chat_id');
    if (queryChatId) return queryChatId;

    // 2. Check environment variable VITE_TELEGRAM_CHAT_ID
    const envChatId = (import.meta as any).env?.VITE_TELEGRAM_CHAT_ID;
    if (envChatId) return envChatId;

    // 3. Fallback default
    return "-1002446700057";
  });

  // Calculate delivery fee
  const deliveryFee = useMemo(() => {
    const zone = DELIVERY_ZONES.find((z) => z.township === selectedTownship);
    return zone ? zone.fee : 0;
  }, [selectedTownship]);

  // Calculate subtotal
  const subtotal = useMemo(() => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }, [cartItems]);

  const total = subtotal + deliveryFee;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePlaceOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    if (cartItems.length === 0) return;

    // Generate random order id
    const orderId = 'KK-' + Math.floor(100000 + Math.random() * 900000);
    setGeneratedOrderId(orderId);
    setOrderPlaced(true);
    setTelegramStatus('sending');
    setTelegramError(null);

    // Build items text
    const itemsText = cartItems
      .map(
        (item) =>
          `• ${item.name} (${item.nameEn}) ${item.details ? `[${item.details}]` : ''} x${item.quantity} - ${(
            item.price * item.quantity
          ).toLocaleString()} Ks`
      )
      .join('\n');

    // Build the formatted order message
    const messageText = `*ကောင်းကြိုက် (Kaung Kyite) Order: ${orderId}*\n` +
      `---------------------------------\n` +
      `👤 Customer: ${formData.customerName}\n` +
      `📞 Phone: ${formData.customerPhone}\n` +
      `📍 Township: ${selectedTownship}\n` +
      `🏠 Address: ${formData.deliveryAddress}\n` +
      `📅 Start Date: ${formData.startDate}\n` +
      `🕒 Time: ${formData.deliveryTimeSlot.toUpperCase()}\n` +
      `💳 Payment: ${formData.paymentMethod.toUpperCase()}\n` +
      `📝 Note: ${formData.notes || 'None'}\n\n` +
      `*Order Items:*\n${itemsText}\n` +
      `---------------------------------\n` +
      `💵 Subtotal: ${subtotal.toLocaleString()} Ks\n` +
      `🚗 Delivery Fee: ${deliveryFee.toLocaleString()} Ks\n` +
      `💰 *Total Price: ${total.toLocaleString()} Ks*`;

    try {
      const botToken = (import.meta as any).env?.VITE_TELEGRAM_BOT_TOKEN || "8937909276:AAFz9uu7h4oAnJDudVHQbM8VKs2pQ9KS2q4";
      const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: telegramChatId,
          text: messageText,
          parse_mode: 'Markdown',
        }),
      });

      const resData = await response.json();
      if (response.ok && resData.ok) {
        setTelegramStatus('success');
      } else {
        console.error('Telegram API error:', resData);
        setTelegramStatus('failed');
        setTelegramError(resData.description || 'Failed to send message to Telegram.');
      }
    } catch (error: any) {
      console.error('Fetch error sending to Telegram:', error);
      setTelegramStatus('failed');
      setTelegramError(error.message || 'Network error sending to Telegram.');
    }
  };

  // Format message to send to WhatsApp / Viber or Copy to Clipboard
  const formattedOrderMessage = useMemo(() => {
    const itemsText = cartItems
      .map(
        (item) =>
          `• ${item.name} (${item.nameEn}) ${item.details ? `[${item.details}]` : ''} x${item.quantity} - ${(
            item.price * item.quantity
          ).toLocaleString()} Ks`
      )
      .join('\n');

    return `*ကောင်းကြိုက် (Kaung Kyite) Order: ${generatedOrderId}*\n` +
      `---------------------------------\n` +
      `👤 Customer: ${formData.customerName}\n` +
      `📞 Phone: ${formData.customerPhone}\n` +
      `📍 Township: ${selectedTownship}\n` +
      `🏠 Address: ${formData.deliveryAddress}\n` +
      `📅 Start Date: ${formData.startDate}\n` +
      `🕒 Time: ${formData.deliveryTimeSlot.toUpperCase()}\n` +
      `💳 Payment: ${formData.paymentMethod.toUpperCase()}\n` +
      `📝 Note: ${formData.notes || 'None'}\n\n` +
      `*Order Items:*\n${itemsText}\n` +
      `---------------------------------\n` +
      `💵 Subtotal: ${subtotal.toLocaleString()} Ks\n` +
      `🚗 Delivery Fee: ${deliveryFee.toLocaleString()} Ks\n` +
      `💰 *Total Price: ${total.toLocaleString()} Ks*`;
  }, [generatedOrderId, formData, selectedTownship, cartItems, subtotal, deliveryFee, total]);

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(formattedOrderMessage);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  // If order is placed successfully, render the Receipt Voucher screen
  if (orderPlaced) {
    return (
      <div className="w-full max-w-xl mx-auto bg-white rounded-3xl border border-gray-100 shadow-xl overflow-hidden animate-fade-in" id="order-voucher">
        {/* Success header banner */}
        <div className="bg-emerald-600 text-white p-6 text-center">
          <CheckCircle2 className="w-14 h-14 mx-auto mb-3 animate-bounce" />
          <h3 className="text-xl font-bold font-myanmar">
            {language === 'my' ? 'မှာယူမှု အောင်မြင်ပါသည်' : 'Order Placed Successfully!'}
          </h3>
          <p className="text-xs text-emerald-100 mt-1 font-light">
            {language === 'my' ? `မှာယူမှုအမှတ်စဥ် - ${generatedOrderId}` : `Receipt Voucher ID: ${generatedOrderId}`}
          </p>
        </div>

        {/* Voucher Content */}
        <div className="p-6 space-y-6">
          {/* Telegram Send Status Banner */}
          <div className={`p-4 rounded-2xl border flex items-start gap-3 transition-all duration-300
            ${telegramStatus === 'sending' ? 'bg-blue-50 border-blue-100 text-blue-800' : ''}
            ${telegramStatus === 'success' ? 'bg-emerald-50 border-emerald-100 text-emerald-800' : ''}
            ${telegramStatus === 'failed' ? 'bg-rose-50 border-rose-100 text-rose-800' : ''}
            ${telegramStatus === 'idle' ? 'hidden' : ''}
          `}>
            {telegramStatus === 'sending' && (
              <div className="w-4 h-4 rounded-full border-2 border-blue-600 border-t-transparent animate-spin shrink-0 mt-0.5" />
            )}
            {telegramStatus === 'success' && (
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            )}
            {telegramStatus === 'failed' && (
              <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
            )}

            <div className="space-y-1 text-[11px]">
              <h5 className="font-bold flex items-center gap-1.5 font-myanmar">
                {language === 'my' ? 'တယ်လီဂရမ်သို့ မှာယူမှုပေးပို့ခြင်း' : 'Telegram Order Dispatch'}
              </h5>
              <p className="font-light leading-relaxed">
                {telegramStatus === 'sending' && (
                  language === 'my' 
                    ? `မှာယူမှုအချက်အလက်များကို ဆိုင်၏ တယ်လီဂရမ် (Chat ID: ${telegramChatId}) သို့ ပို့ဆောင်နေပါသည်...`
                    : `Sending order details to shop's Telegram bot (Chat ID: ${telegramChatId})...`
                )}
                {telegramStatus === 'success' && (
                  language === 'my'
                    ? `မှာယူမှုကို ဆိုင်၏ တယ်လီဂရမ် (Chat ID: ${telegramChatId}) သို့ တိုက်ရိုက် ပေးပို့ပြီးပါပြီ။`
                    : `Order details successfully dispatched to the shop's Telegram chat (${telegramChatId})!`
                )}
                {telegramStatus === 'failed' && (
                  <>
                    {language === 'my'
                      ? `တယ်လီဂရမ်သို့ ပေးပို့ရန် မအောင်မြင်ပါ။ (အမှားအယွင်း: ${telegramError || 'ချိတ်ဆက်မှု မရပါ'})`
                      : `Failed to dispatch to Telegram (${telegramError || 'Connection error'}).`}
                    <span className="block mt-1 text-[10px] text-rose-500 font-normal">
                      {language === 'my'
                        ? 'ကျေးဇူးပြု၍ VITE_TELEGRAM_CHAT_ID ပတ်ဝန်းကျင် ကိန်းရှင်ကို စစ်ဆေးပေးပါ။'
                        : 'Please ensure VITE_TELEGRAM_CHAT_ID is correctly configured.'}
                    </span>
                  </>
                )}
              </p>
            </div>
          </div>

          {/* Customer summary */}
          <div className="bg-gray-50 rounded-2xl p-4 text-xs space-y-2.5 border border-gray-100">
            <h4 className="font-bold text-gray-700 uppercase tracking-wider text-[10px]">
              {language === 'my' ? 'မှာယူသူ အချက်အလက်များ' : 'Delivery Details'}
            </h4>
            <div className="grid grid-cols-2 gap-3 pt-1 text-gray-600">
              <div>
                <span className="text-gray-400 block">{language === 'my' ? 'အမည်' : 'Name'}</span>
                <span className="font-semibold text-gray-800">{formData.customerName}</span>
              </div>
              <div>
                <span className="text-gray-400 block">{language === 'my' ? 'ဖုန်းနံပါတ်' : 'Phone'}</span>
                <span className="font-semibold text-gray-800">{formData.customerPhone}</span>
              </div>
              <div className="col-span-2">
                <span className="text-gray-400 block">{language === 'my' ? 'မြို့နယ်နှင့် လိပ်စာ' : 'Township & Address'}</span>
                <span className="font-medium text-gray-800">{selectedTownship} - {formData.deliveryAddress}</span>
              </div>
              <div>
                <span className="text-gray-400 block">{language === 'my' ? 'စတင်မည့်ရက်' : 'Start Date'}</span>
                <span className="font-semibold text-gray-800">{formData.startDate}</span>
              </div>
              <div>
                <span className="text-gray-400 block">{language === 'my' ? 'အချိန်အပိုင်းအခြား' : 'Delivery Slot'}</span>
                <span className="font-semibold text-gray-800 uppercase">{formData.deliveryTimeSlot}</span>
              </div>
            </div>
          </div>

          {/* Cart items list */}
          <div className="space-y-2">
            <h4 className="font-bold text-gray-700 uppercase tracking-wider text-[10px]">
              {language === 'my' ? 'မှာယူထားသော စာရင်းများ' : 'Ordered Items'}
            </h4>
            <div className="divide-y divide-gray-100 border border-gray-100 rounded-2xl px-4 bg-white">
              {cartItems.map((item, idx) => (
                <div key={idx} className="py-3 flex justify-between items-center text-xs">
                  <div>
                    <span className="font-semibold text-gray-800 font-myanmar">{item.name}</span>
                    {item.details && <span className="text-gray-400 ml-1.5 font-light">({item.details})</span>}
                    <span className="text-gray-400 block text-[10px]">{item.nameEn}</span>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-gray-500 font-light mr-3">x{item.quantity}</span>
                    <span className="font-bold text-gray-700">{(item.price * item.quantity).toLocaleString()} Ks</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing summary */}
          <div className="border-t border-dashed border-gray-200 pt-4 space-y-2 text-xs">
            <div className="flex justify-between text-gray-500">
              <span>{language === 'my' ? 'စုစုပေါင်း ကုန်ကျငွေ' : 'Cart Subtotal'}</span>
              <span>{subtotal.toLocaleString()} Ks</span>
            </div>
            <div className="flex justify-between text-gray-500">
              <span>{language === 'my' ? 'ပို့ဆောင်ခ' : 'Delivery Fee'}</span>
              <span>{deliveryFee.toLocaleString()} Ks</span>
            </div>
            <div className="flex justify-between text-base font-bold text-brand-charcoal pt-2 border-t border-gray-100">
              <span>{language === 'my' ? 'ရှင်းရမည့် စုစုပေါင်းငွေ' : 'Total Amount'}</span>
              <span className="text-brand-red">{total.toLocaleString()} Ks</span>
            </div>
          </div>

          {/* Viber/WhatsApp Click-to-Order instructions */}
          <div className="bg-brand-red-light border border-brand-red/15 rounded-2xl p-4 space-y-3">
            <h5 className="font-bold text-brand-red text-xs sm:text-sm flex items-center gap-1.5">
              <Send className="w-4 h-4" />
              {language === 'my' ? 'ဆိုင်သို့ မှာယူမှုစာပို့ရန်' : 'Send Order to Viber / WhatsApp'}
            </h5>
            <p className="text-[11px] text-gray-600 leading-relaxed font-light">
              {language === 'my'
                ? 'မှာယူမှုကို အတည်ပြုနိုင်ရန် အောက်ပါ ခလုတ်ကို နှိပ်၍ မှာယူမှု အသေးစိတ် အချက်အလက်များကို ဆိုင်၏ Viber သို့မဟုတ် WhatsApp သို့ တိုက်ရိုက် ပို့ဆောင်ပေးပါ။'
                : 'To complete and activate your order, copy the receipt text below and send it directly to our customer support on Viber or WhatsApp!'}
            </p>

            <div className="flex flex-col sm:flex-row gap-2 pt-1">
              <button
                onClick={handleCopyToClipboard}
                className="flex-1 py-2 px-3 bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer"
              >
                {isCopied ? (
                  <>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700">{language === 'my' ? 'ကူးယူပြီးပါပြီ' : 'Copied!'}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-gray-500" />
                    <span>{language === 'my' ? 'အချက်အလက် ကူးယူမည်' : 'Copy Receipt Text'}</span>
                  </>
                )}
              </button>

              {/* Real WhatsApp integration link */}
              <a
                href={`https://wa.me/959777123456?text=${encodeURIComponent(formattedOrderMessage)}`}
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-2 px-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-all text-center"
              >
                <Send className="w-3.5 h-3.5" />
                <span>{language === 'my' ? 'WhatsApp သို့ ပို့မည်' : 'Send to WhatsApp'}</span>
              </a>
            </div>
          </div>

          {/* Reset cart / new booking button */}
          <button
            onClick={() => {
              onClearCart();
              setOrderPlaced(false);
              setActiveSection(null);
            }}
            className="w-full py-3 bg-brand-charcoal text-white hover:bg-brand-red rounded-xl text-xs font-bold text-center transition-colors duration-200 cursor-pointer"
          >
            {language === 'my' ? 'ပင်မစာမျက်နှာသို့ ပြန်သွားမည်' : 'Back to Home'}
          </button>
        </div>
      </div>
    );
  }

  // If cart is completely empty, render empty state
  if (cartItems.length === 0) {
    return (
      <div className="w-full text-center py-12 px-4 bg-white rounded-3xl border border-gray-100 shadow-sm space-y-5">
        <div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center mx-auto text-gray-300">
          <ShoppingCart className="w-7 h-7" />
        </div>
        <div className="space-y-1.5">
          <h3 className="font-bold text-gray-800 text-base">
            {language === 'my' ? 'မှာယူရန်စာရင်း မရှိသေးပါ' : 'Your Order List is Empty'}
          </h3>
          <p className="text-xs text-gray-400 font-light max-w-xs mx-auto">
            {language === 'my'
              ? 'ဟင်းပွဲမီနူး သို့မဟုတ် ချိုင့်ဆွဲပက်ကေ့ဂျ်များကို အရင်ရွေးချယ်ပြီးမှ မှာယူမှုပုံစံကို ဖြည့်သွင်းနိုင်မည် ဖြစ်ပါသည်။'
              : 'Add delicious curries or custom tiffin packages from our menu to calculate total and place an order.'}
          </p>
        </div>
        <div className="flex justify-center gap-3">
          <button
            onClick={() => setActiveSection('menu')}
            className="px-4 py-2 border border-gray-200 rounded-xl text-xs font-semibold text-gray-700 hover:bg-gray-50 cursor-pointer"
          >
            {language === 'my' ? 'ဟင်းပွဲများ ကြည့်မည်' : 'View Menu'}
          </button>
          <button
            onClick={() => setActiveSection('packages')}
            className="px-4 py-2 bg-brand-charcoal text-white hover:bg-brand-red rounded-xl text-xs font-semibold cursor-pointer"
          >
            {language === 'my' ? 'ချိုင့်ဆွဲကြည့်မည်' : 'View Packages'}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
      {/* Left Column: Cart items review & edit */}
      <div className="lg:col-span-5 bg-white rounded-3xl border border-gray-100 shadow-sm p-5 space-y-4">
        <div className="flex justify-between items-center pb-3 border-b border-gray-100">
          <h3 className="font-bold text-gray-800 text-sm sm:text-base flex items-center gap-1.5">
            <ShoppingCart className="w-4.5 h-4.5 text-brand-red" />
            {language === 'my' ? 'ရွေးချယ်ထားသော စာရင်း' : 'Selected Items'}
          </h3>
          <button
            onClick={onClearCart}
            className="text-xs text-rose-600 hover:text-rose-800 font-medium inline-flex items-center gap-1 cursor-pointer"
          >
            <Trash className="w-3.5 h-3.5" />
            <span>{language === 'my' ? 'အားလုံးဖျက်မည်' : 'Clear All'}</span>
          </button>
        </div>

        {/* List of items */}
        <div className="divide-y divide-gray-100 max-h-[280px] overflow-y-auto pr-1">
          {cartItems.map((item, idx) => (
            <div key={idx} className="py-3 flex items-center justify-between text-xs gap-2">
              <div className="min-w-0 flex-1">
                <span className="font-semibold text-gray-800 font-myanmar block truncate">
                  {item.name}
                </span>
                {item.details && (
                  <span className="text-[10px] text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded-sm inline-block mt-0.5 font-light">
                    {item.details}
                  </span>
                )}
                <span className="text-[10px] text-gray-400 font-light block mt-0.5 truncate">{item.nameEn}</span>
              </div>

              {/* Quantity editors */}
              <div className="flex items-center gap-3 shrink-0">
                <div className="flex items-center border border-gray-200 rounded-lg bg-gray-50 p-0.5">
                  <button
                    onClick={() => onUpdateQty(item.type, item.id, -1, item.details)}
                    className="w-6 h-6 flex items-center justify-center text-gray-500 hover:text-gray-800 cursor-pointer"
                  >
                    -
                  </button>
                  <span className="w-5 text-center text-[11px] font-semibold text-gray-700">{item.quantity}</span>
                  <button
                    onClick={() => onUpdateQty(item.type, item.id, 1, item.details)}
                    className="w-6 h-6 flex items-center justify-center text-gray-500 hover:text-gray-800 cursor-pointer"
                  >
                    +
                  </button>
                </div>

                <div className="text-right w-16">
                  <span className="font-bold text-gray-700 block">{(item.price * item.quantity).toLocaleString()} Ks</span>
                </div>

                <button
                  onClick={() => onRemoveItem(item.type, item.id, item.details)}
                  className="p-1 text-gray-400 hover:text-rose-600 rounded-lg hover:bg-rose-50/50 cursor-pointer"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Inline price list */}
        <div className="border-t border-gray-100 pt-3 space-y-2 text-xs">
          <div className="flex justify-between text-gray-500">
            <span>{language === 'my' ? 'စုစုပေါင်း ကုန်ကျငွေ' : 'Subtotal'}</span>
            <span className="font-semibold text-gray-800">{subtotal.toLocaleString()} Ks</span>
          </div>
          <div className="flex justify-between text-gray-500">
            <span>{language === 'my' ? 'ပို့ဆောင်ခ' : 'Delivery Fee'}</span>
            <span className="font-semibold text-gray-800">{deliveryFee.toLocaleString()} Ks</span>
          </div>
          <div className="flex justify-between text-sm font-bold text-brand-charcoal pt-2.5 border-t border-gray-100">
            <span>{language === 'my' ? 'စုစုပေါင်း ကျသင့်ငွေ' : 'Total Amount'}</span>
            <span className="text-brand-red text-base">{total.toLocaleString()} Ks</span>
          </div>
        </div>
      </div>

      {/* Right Column: Customer Details & Submission Form */}
      <div className="lg:col-span-7 bg-white rounded-3xl border border-gray-100 shadow-sm p-5 sm:p-6">
        <h3 className="font-bold text-gray-800 text-sm sm:text-base pb-3 border-b border-gray-100 mb-5 flex items-center gap-1.5">
          <User className="w-4.5 h-4.5 text-brand-red" />
          {language === 'my' ? 'ပို့ဆောင်ရန်အချက်အလက်များ ဖြည့်ပါ' : 'Customer & Delivery Info'}
        </h3>

        <form onSubmit={handlePlaceOrder} className="space-y-4 text-xs">
          {/* Row 1: Name and Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="font-semibold text-gray-600 block">
                {language === 'my' ? 'မှာယူသူအမည် (Name)' : 'Full Name'} <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400" />
                <input
                  required
                  type="text"
                  name="customerName"
                  value={formData.customerName}
                  onChange={handleInputChange}
                  placeholder={language === 'my' ? 'မောင်မောင်' : 'e.g. Mg Mg'}
                  className="w-full pl-9 pr-3 py-2 border border-gray-200 rounded-xl focus:border-brand-red focus:ring-1 focus:ring-brand-red outline-hidden transition"
                  id="customerName-input"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="font-semibold text-gray-600 block">
                {language === 'my' ? 'ဖုန်းနံပါတ် (Phone Number)' : 'Mobile Phone'} <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400" />
                <input
                  required
                  type="tel"
                  name="customerPhone"
                  value={formData.customerPhone}
                  onChange={handleInputChange}
                  placeholder="e.g. 09777123456"
                  className="w-full pl-9 pr-3 py-2 border border-gray-200 rounded-xl focus:border-brand-red focus:ring-1 focus:ring-brand-red outline-hidden transition"
                  id="customerPhone-input"
                />
              </div>
            </div>
          </div>

          {/* Row 2: Township selection & address */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="font-semibold text-gray-600 block">
                {language === 'my' ? 'ပို့ဆောင်ရမည့် မြို့နယ် (Township)' : 'Delivery Township'} <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400" />
                <select
                  value={selectedTownship}
                  onChange={(e) => setSelectedTownship(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 border border-gray-200 rounded-xl focus:border-brand-red focus:ring-1 focus:ring-brand-red outline-hidden bg-white cursor-pointer transition"
                  id="township-select"
                >
                  {DELIVERY_ZONES.map((zone) => (
                    <option key={zone.township} value={zone.township}>
                      {zone.township} (+{zone.fee} Ks)
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="font-semibold text-gray-600 block">
                {language === 'my' ? 'စတင်မည့် ရက်စွဲ (Start Date)' : 'Preferred Start Date'} <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400" />
                <input
                  required
                  type="date"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleInputChange}
                  className="w-full pl-9 pr-3 py-2 border border-gray-200 rounded-xl focus:border-brand-red focus:ring-1 focus:ring-brand-red outline-hidden transition bg-white"
                  id="startDate-input"
                />
              </div>
            </div>
          </div>

          {/* Full Address */}
          <div className="space-y-1.5">
            <label className="font-semibold text-gray-600 block">
              {language === 'my' ? 'ပို့ဆောင်ရမည့် လိပ်စာအပြည့်အစုံ' : 'Full Delivery Address'} <span className="text-rose-500">*</span>
            </label>
            <div className="relative">
              <MapPin className="absolute left-3 top-3 w-3.5 h-3.5 text-gray-400" />
              <textarea
                required
                name="deliveryAddress"
                rows={2}
                value={formData.deliveryAddress}
                onChange={handleInputChange}
                placeholder={language === 'my' ? 'အိမ်အမှတ်၊ လမ်း၊ ရပ်ကွက်၊ တိုက်အမှတ် စသည်ဖြင့်...' : 'e.g. Room 402, Building B, Pyay Road...'}
                className="w-full pl-9 pr-3 py-2 border border-gray-200 rounded-xl focus:border-brand-red focus:ring-1 focus:ring-brand-red outline-hidden transition resize-none"
                id="deliveryAddress-input"
              />
            </div>
          </div>

          {/* Delivery Time and Payment methods */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="font-semibold text-gray-600 block">
                {language === 'my' ? 'ပို့ဆောင်စေလိုသည့်အချိန် (Time Slot)' : 'Preferred Delivery Time'} <span className="text-rose-500">*</span>
              </label>
              <div className="grid grid-cols-3 gap-1 bg-gray-50 p-1 rounded-xl">
                {(['lunch', 'dinner', 'both'] as const).map((slot) => (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => setFormData((prev) => ({ ...prev, deliveryTimeSlot: slot }))}
                    className={`py-1.5 text-[10px] font-bold text-center rounded-lg transition-all duration-200 cursor-pointer
                      ${formData.deliveryTimeSlot === slot
                        ? 'bg-white text-brand-charcoal shadow-xs border border-gray-200/50'
                        : 'text-gray-400 hover:text-gray-700'
                      }
                    `}
                  >
                    {slot === 'lunch' ? (language === 'my' ? 'နေ့လယ်' : 'Lunch') : slot === 'dinner' ? (language === 'my' ? 'ညစာ' : 'Dinner') : (language === 'my' ? 'နှစ်ခုစလုံး' : 'Both')}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="font-semibold text-gray-600 block">
                {language === 'my' ? 'ငွေပေးချေမှုစနစ် (Payment Method)' : 'Payment Method'} <span className="text-rose-500">*</span>
              </label>
              <div className="grid grid-cols-3 gap-1 bg-gray-50 p-1 rounded-xl">
                {(['cash', 'kbzpay', 'wavepay'] as const).map((method) => (
                  <button
                    key={method}
                    type="button"
                    onClick={() => setFormData((prev) => ({ ...prev, paymentMethod: method }))}
                    className={`py-1.5 text-[10px] font-bold text-center rounded-lg transition-all duration-200 uppercase cursor-pointer
                      ${formData.paymentMethod === method
                        ? 'bg-white text-brand-charcoal shadow-xs border border-gray-200/50'
                        : 'text-gray-400 hover:text-gray-700'
                      }
                    `}
                  >
                    {method === 'cash' ? (language === 'my' ? 'လက်ငင်း' : 'Cash') : method === 'kbzpay' ? 'KPay' : 'Wave'}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Notes */}
          <div className="space-y-1.5">
            <label className="font-semibold text-gray-600 block">
              {language === 'my' ? 'မှတ်ချက် / ဓာတ်မတည့်သည့်အရာများ' : 'Special Instructions / Allergies'}
            </label>
            <textarea
              name="notes"
              rows={2}
              value={formData.notes}
              onChange={handleInputChange}
              placeholder={language === 'my' ? 'မစပ်လွန်းစေရန်၊ ဓာတ်မတည့်သည့်အစားအစာများရှိပါက ရေးရန်...' : 'e.g. Please make it less spicy, allergic to shrimp...'}
              className="w-full px-3 py-2 border border-gray-200 rounded-xl focus:border-brand-red focus:ring-1 focus:ring-brand-red outline-hidden transition resize-none"
              id="notes-input"
            />
          </div>

          {/* Telegram Chat ID Configuration (Optional / Admin settings for testing) */}
          <div className="p-3 bg-gray-50 rounded-2xl border border-gray-200/60 space-y-2">
            <div className="flex justify-between items-center">
              <label className="font-bold text-[10px] text-gray-500 uppercase tracking-wider block">
                {language === 'my' ? 'တယ်လီဂရမ် ချိတ်ဆက်မှု (စမ်းသပ်ရန်)' : 'Telegram Dispatch Chat ID (For Testing)'}
              </label>
              <span className="text-[9px] text-gray-400 font-light">Bot: @KaungKyiteOrderBot</span>
            </div>
            <input
              type="text"
              value={telegramChatId}
              onChange={(e) => setTelegramChatId(e.target.value)}
              placeholder="e.g. -1002446700057 or your user chat ID"
              className="w-full px-3 py-1.5 border border-gray-200 rounded-lg focus:border-brand-red focus:ring-1 focus:ring-brand-red outline-hidden transition bg-white text-xs font-mono"
              id="telegram-chat-id-input"
            />
            <p className="text-[10px] text-gray-400 font-light leading-tight">
              {language === 'my'
                ? 'မှာယူမှုအချက်အလက်များကို ပေးပို့ရန် တယ်လီဂရမ် Chat ID (သို့မဟုတ် ဂရု ID) ကို ထည့်သွင်းပါ။'
                : 'Enter your Telegram Chat ID or Group ID to test receiving order notifications instantly.'}
            </p>
          </div>

          {/* Form submit button */}
          <button
            type="submit"
            className="w-full py-3 bg-brand-charcoal hover:bg-brand-red text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-all duration-300 mt-2 cursor-pointer shadow-md text-sm"
            id="order-submit-button"
          >
            <span>{language === 'my' ? 'မှာယူမှုစာရင်း တွက်ချက်အတည်ပြုမည်' : 'Calculate & Confirm Order'}</span>
          </button>
        </form>
      </div>
    </div>
  );
}
