import { Metadata } from "next";
import Link from "next/link";
import { CITIES, SITE_URL } from "@/lib/seo-pages";
import { generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "مناطق تغطيتنا | كيف الضيافة",
  description:
    "كيف الضيافة تغطي جميع مناطق المملكة العربية السعودية — الرياض، جدة، مكة المكرمة، المدينة المنورة، الدمام، الطائف، أبها، ينبع. خدمات ضيافة فاخرة في كل مدينة.",
  alternates: { canonical: `${SITE_URL}/locations` },
  openGraph: {
    title: "مناطق تغطيتنا | كيف الضيافة",
    description: "خدمات ضيافة فاخرة في جميع مناطق المملكة العربية السعودية",
    url: `${SITE_URL}/locations`,
  },
};

export default function LocationsPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "الرئيسية", url: SITE_URL },
    { name: "مناطق التغطية", url: `${SITE_URL}/locations` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            itemListElement: CITIES.map((city, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: `خدمات الضيافة في ${city.name}`,
              url: `${SITE_URL}/locations/${city.slug}`,
            })),
          }),
        }}
      />
      <div className="min-h-screen bg-[#0f0f0f] px-4 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#B8860B] mb-3" style={{ fontSize: "0.75rem", letterSpacing: "0.35em" }}>
              ✦ مناطق التغطية ✦
            </p>
            <h1 className="text-[#F5F5DC] mb-4 font-tajawal" style={{ fontSize: "clamp(2rem, 6vw, 3.5rem)", fontWeight: 900, lineHeight: 1.15 }}>
              نصل إليكم في <span className="gold-gradient-text">جميع مناطق المملكة</span>
            </h1>
            <p className="text-[#F5F5DC]/55 max-w-xl mx-auto text-sm leading-relaxed">
              كيف الضيافة تغطي جميع مناطق المملكة العربية السعودية بفريق احترافي ومعدات فاخرة. اختر مدينتك لمعرفة خدماتنا المتاحة فيها.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {CITIES.map((city) => (
              <Link
                key={city.slug}
                href={`/locations/${city.slug}`}
                className="card-luxury p-6 rounded-2xl text-center group min-h-[120px] flex flex-col items-center justify-center"
              >
                <p className="text-[#F5F5DC] text-sm group-hover:text-[#D4A017] transition-colors" style={{ fontWeight: 700 }}>
                  {city.name}
                </p>
                <p className="text-[#F5F5DC]/40 text-xs mt-1">{city.region}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
