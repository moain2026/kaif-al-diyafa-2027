// Centralized data for local SEO pages
// Cities and services for dynamic route generation

export interface CityData {
  slug: string;
  name: string;
  nameEn: string;
  region: string;
}

export const CITIES: CityData[] = [
  { slug: "الرياض", name: "الرياض", nameEn: "Riyadh", region: "منطقة الرياض" },
  { slug: "جدة", name: "جدة", nameEn: "Jeddah", region: "منطقة مكة المكرمة" },
  { slug: "مكة-المكرمة", name: "مكة المكرمة", nameEn: "Makkah", region: "منطقة مكة المكرمة" },
  { slug: "المدينة-المنورة", name: "المدينة المنورة", nameEn: "Madinah", region: "منطقة المدينة المنورة" },
  { slug: "الدمام", name: "الدمام", nameEn: "Dammam", region: "المنطقة الشرقية" },
  { slug: "الطائف", name: "الطائف", nameEn: "Taif", region: "منطقة مكة المكرمة" },
  { slug: "أبها", name: "أبها", nameEn: "Abha", region: "منطقة عسير" },
  { slug: "ينبع", name: "ينبع", nameEn: "Yanbu", region: "منطقة المدينة المنورة" },
];

export interface ServiceData {
  slug: string;
  name: string;
  nameEn: string;
  titleTemplate: string;
  descTemplate: string;
  h1Template: string;
  keywords: string[];
}

export const SERVICES: ServiceData[] = [
  {
    slug: "sababin-qahwa",
    name: "صبابين قهوة",
    nameEn: "Coffee Servers",
    titleTemplate: "صبابين قهوة {city} | صبابين سعوديين وصبابات بزيّ تراثي | كيف الضيافة",
    descTemplate: "صبابين قهوة سعوديين في {city} — صبّابون وصبابات بزيّ تراثي لتقديم القهوة العربية في الأعراس والمناسبات. عرض سعر مجاني عبر واتساب.",
    h1Template: "صبابين قهوة سعوديين في {city} — تقديم القهوة العربية على الأصول",
    keywords: ["صبابين قهوة", "صبابين", "صبابة قهوة", "قهوجيين"],
  },
  {
    slug: "qahwajiin",
    name: "قهوجيين",
    nameEn: "Coffee Butlers",
    titleTemplate: "قهوجيين {city} | قهوجي قهوة سعودية للمناسبات | كيف الضيافة",
    descTemplate: "قهوجيين محترفين في {city} — قهوجي قهوة سعودية بزيّ فاخر للمناسبات والفعاليات. خبرة +10 سنوات. احجز عبر واتساب.",
    h1Template: "قهوجيين محترفين في {city} — القهوة السعودية بزيّ فاخر",
    keywords: ["قهوجيين", "قهوجي", "قهوة سعودية", "ضيافة قهوة"],
  },
  {
    slug: "diyafa-munasabat",
    name: "ضيافة مناسبات",
    nameEn: "Event Hospitality",
    titleTemplate: "ضيافة مناسبات {city} | خدمات ضيافة فاخرة للأعراس | كيف الضيافة",
    descTemplate: "ضيافة مناسبات فاخرة في {city} — خدمات ضيافة كاملة للأعراس والفعاليات والمؤتمرات. قهوجيين وصبابين ومباشرات. استشارة مجانية.",
    h1Template: "ضيافة مناسبات فاخرة في {city} — خدمات كاملة للأعراس والفعاليات",
    keywords: ["ضيافة مناسبات", "ضيافة أعراس", "ضيافة فعاليات", "خدمات ضيافة"],
  },
];

export const SITE_URL = "https://keifaldiafa.com";
export const WA_NUMBER = "966508252134";

// Generate all service×city slug combinations
export function getServiceCitySlugs(): { service: ServiceData; city: CityData; slug: string }[] {
  const citySlugMap: Record<string, string> = {
    "الرياض": "riyadh",
    "جدة": "jeddah",
    "مكة-المكرمة": "makkah",
    "المدينة-المنورة": "madinah",
    "الدمام": "dammam",
    "الطائف": "taif",
    "أبها": "abha",
    "ينبع": "yanbu",
  };

  return SERVICES.flatMap((service) =>
    CITIES.map((city) => ({
      service,
      city,
      slug: `${service.slug}-${citySlugMap[city.slug]}`,
    }))
  );
}
