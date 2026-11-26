/**
 * ماتریس پلن‌های هوشمند اَوِکس‌راد (AvexRad Plans Configuration)
 * کاملاً منطبق بر سند رسمی و تصویری پلن‌ها
 */
const AVEXRAD_PLANS = {
  basic: {
    id: "basic",
    name: "پلن پایه (اقتصادی)",
    badge: "پایه",
    badgeColor: "bg-blue-600/20 text-blue-300 border border-blue-500/30",
    price: 3000000,
    priceFormatted: "۳,۰۰۰,۰۰۰ تومان / ماهانه",
    maxChannels: 3,
    dailyImageLimit: 0,
    dailyVideoSecLimit: 0,
    hasAiResearch: false,
    hasAiStudio: false, // حذف کامل استودیو هوش مصنوعی در پلن پایه
    hasAutopilot: false,
    hasAnalyticsHeatmap: false,
    hasVideoStudio: false,
    hasPodcastVoice: false,
    hasDirectForwarding: true,
    hasCustomSignature: true,
    hasSmartScheduler: false,
    supportTier: "معمولی",
    giftNote: "۱ ماه دسترسی به پنل پیشرفته (هدیه ویژه)",
    allowedNavTabs: ["tabChannels"], // فقط تب مدیریت کانال‌ها
    description: "اتصال به حداکثر ۳ کانال، ارسال مستقیم و بدون تغییر، درج امضا زیر پیام‌ها"
  },
  advanced: {
    id: "advanced",
    name: "پلن پیشرفته (محبوب‌ترین)",
    badge: "محبوب‌ترین",
    badgeColor: "bg-cyan-500/20 text-cyan-300 border border-cyan-400/50 shadow-sm shadow-cyan-500/20",
    price: 4500000,
    priceFormatted: "۴,۵۰۰,۰۰۰ تومان / ماهانه",
    maxChannels: 5,
    dailyImageLimit: 4,
    dailyVideoSecLimit: 0,
    hasAiResearch: true,
    hasAiStudio: true,
    hasAutopilot: false,
    hasAnalyticsHeatmap: false,
    hasVideoStudio: false, // قفل در پلن پیشرفته
    hasPodcastVoice: false,
    hasDirectForwarding: true,
    hasCustomSignature: true,
    hasSmartScheduler: true,
    supportTier: "سریع و اولویت‌دار",
    giftNote: "۱ ماه دسترسی به پنل حرفه‌ای (هدیه ویژه)",
    allowedNavTabs: ["tabChannels", "tabStudio", "tabScheduler"],
    description: "اتصال به ۵ کانال، تحقیق و کپشن هوشمند، تا ۴ عکس در روز، زمان‌بندی دقیق"
  },
  pro: {
    id: "pro",
    name: "پلن حرفه‌ای (اتوماسیون کامل)",
    badge: "سطح VIP",
    badgeColor: "bg-gradient-to-r from-amber-500 to-yellow-600 text-slate-950 font-black shadow-md shadow-amber-500/30",
    price: 8000000,
    priceFormatted: "۸,۰۰۰,۰۰۰ تومان / ماهانه",
    maxChannels: 8,
    dailyImageLimit: 10,
    dailyVideoSecLimit: 60,
    hasAiResearch: true,
    hasAiStudio: true,
    hasAutopilot: true,
    hasAnalyticsHeatmap: true,
    hasVideoStudio: true,
    hasPodcastVoice: false, // به زودی
    hasDirectForwarding: true,
    hasCustomSignature: true,
    hasSmartScheduler: true,
    supportTier: "اختصاصی و ۲۴/۷ VIP",
    giftNote: "پشتیبانی دائم VIP و دسترسی دائمی به پنل",
    allowedNavTabs: ["tabChannels", "tabStudio", "tabScheduler", "tabAnalytics"],
    description: "اتصال به ۸ کانال، اتوماسیون ۱۰۰٪ مستقل، تا ۱۰ عکس در روز، ۱ دقیقه ویدیو، آمار و نمودارها"
  },
  super_admin: {
    id: "super_admin",
    name: "فرماندهی ارشد اَوِکس‌راد (Unlimited VIP)",
    badge: "Super Admin",
    badgeColor: "bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 text-white font-black border border-purple-400 shadow-md shadow-purple-500/30",
    price: 0,
    priceFormatted: "نامحدود سازمانی",
    maxChannels: 9999,
    dailyImageLimit: 9999,
    dailyVideoSecLimit: 9999,
    hasAiResearch: true,
    hasAiStudio: true,
    hasAutopilot: true,
    hasAnalyticsHeatmap: true,
    hasVideoStudio: true,
    hasPodcastVoice: true,
    isUnlimited: true,
    supportTier: "مالک و مدیر کل سیستم",
    allowedNavTabs: ["tabChannels", "tabStudio", "tabScheduler", "tabAnalytics", "tabAdminOrders"],
    description: "دسترسی کامل و نامحدود به تمامی ماژول‌ها، مدیریت مشترکین و تایید سفارشات ربات فروش"
  }
};
window.AVEXRAD_PLANS = AVEXRAD_PLANS;

// حساب‌های کاربری مدیران ارشد با دسترسی کامل و برابر
const DEFAULT_SUPER_ADMINS = [
  {
    username: "AmirAli_AvexRad",
    fullName: "امیرعلی عبدالعظیمی",
    tempPassword: "alipass88",
    role: "super_admin"
  },
  {
    username: "AmirMahdi_AvexRad",
    fullName: "امیرمهدی افضلی",
    tempPassword: "mahdipass88",
    role: "super_admin"
  }
];
