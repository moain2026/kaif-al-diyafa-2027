import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CITIES, SERVICES, SITE_URL, WA_NUMBER } from "@/lib/seo-pages";
import { generateBreadcrumbSchema, generateServiceSchema } from "@/lib/schema";

interface PageProps {
  params: { city: string };
}

export function generateStaticParams() {
  return CITIES.map((city) => ({ city: city.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const city = CITIES.find((c) => c.slug === params.city);
  if (!city) return {};

  return {
    title: `خدمات الضيافة في ${city.name} | قهوجيين وصبابين قهوة | كيف الضيافة`,
    description: `خدمات ضيافة فاخرة في ${city.name} — قهوجيين وصبابين قهوة سعودية وطاقم مدرّب لتغطية فعاليات ومناسبات ${city.name} بأعلى بروتوكول.`,
    alternates: { canonical: `${SITE_URL}/locations/${city.slug}` },
    openGraph: {
      title: `خدمات الضيافة في ${city.name} | كيف الضيافة`,
      description: `قهوجيين وصبابين قهوة سعودية في ${city.name} — ضيافة فاخرة للمناسبات والفعاليات`,
      url: `${SITE_URL}/locations/${city.slug}`,
    },
  };
}

export default function LocationPage({ params }: PageProps) {
  const city = CITIES.find((c) => c.slug === params.city);
  if (!city) notFound();

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "الرئيسية", url: SITE_URL },
    { name: "مناطق التغطية", url: `${SITE_URL}/locations` },
    { name: city.name, url: `${SITE_URL}/locations/${city.slug}` },
  ]);

  const serviceSchema = SERVICES.map((s) =>
    generateServiceSchema({
      name: `${s.name} ${city.name}`,
      description: s.descTemplate.replace("{city}", city.name),
      url: `${SITE_URL}/locations/${city.slug}`,
    })
  );

  const waMsg = `مرحباً، أود الاستفسار عن خدمات الضيافة في ${city.name}.`;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {serviceSchema.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <div className="min-h-screen bg-[#0f0f0f] px-4 py-20">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-[#F5F5DC]/40 mb-8" aria-label="breadcrumb">
            <Link href="/" className="hover:text-[#B8860B]">الرئيسية</Link>
            <span>/</span>
            <Link href="/locations" className="hover:text-[#B8860B]">مناطق التغطية</Link>
            <span>/</span>
            <span className="text-[#B8860B]">{city.name}</span>
          </nav>

          {/* Hero */}
          <div className="text-center mb-16">
            <p className="text-[#B8860B] mb-3" style={{ fontSize: "0.75rem", letterSpacing: "0.35em" }}>
              ✦ {city.region} ✦
            </p>
            <h1 className="text-[#F5F5DC] mb-4 font-tajawal" style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)", fontWeight: 900, lineHeight: 1.15 }}>
              خدمات الضيافة الفاخرة في <span className="gold-gradient-text">{city.name}</span>
            </h1>
            <p className="text-[#F5F5DC]/55 max-w-xl mx-auto text-sm leading-relaxed">
              قهوجيين وصبابين قهوة سعودية وطاقم مدرّب لتغطية فعاليات ومناسبات {city.name} بأعلى بروتوكول.
              خبرة +10 سنوات و+500 مناسبة ناجحة في جميع أنحاء المملكة.
            </p>
          </div>

          {/* Services list */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {SERVICES.map((service) => {
              const citySlugMap: Record<string, string> = {
                "الرياض": "riyadh", "جدة": "jeddah", "مكة-المكرمة": "makkah",
                "المدينة-المنورة": "madinah", "الدمام": "dammam", "الطائف": "taif",
                "أبها": "abha", "ينبع": "yanbu",
              };
              const serviceSlug = `${service.slug}-${citySlugMap[city.slug]}`;
              return (
                <Link
                  key={service.slug}
                  href={`/${serviceSlug}`}
                  className="card-luxury p-6 rounded-2xl text-center group"
                >
                  <h2 className="text-[#F5F5DC] text-sm group-hover:text-[#D4A017] transition-colors" style={{ fontWeight: 700 }}>
                    {service.name} {city.name}
                  </h2>
                  <p className="text-[#F5F5DC]/40 text-xs mt-2">
                    {service.nameEn} in {city.nameEn}
                  </p>
                </Link>
              );
            })}
          </div>

          {/* CTA */}
          <div className="text-center rounded-3xl p-8" style={{ background: "linear-gradient(160deg, rgba(25,20,8,0.9), rgba(15,12,5,0.95))", border: "1px solid rgba(184,134,11,0.2)" }}>
            <h2 className="text-[#F5F5DC] mb-4" style={{ fontSize: "1.4rem", fontWeight: 800 }}>
              احجز خدمات الضيافة في {city.name}
            </h2>
            <p className="text-[#F5F5DC]/55 mb-6 text-sm">
              استشارة مجانية وعرض سعر مخصص لمناسبتك في {city.name} خلال دقائق.
            </p>
            <a
              href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(waMsg)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white min-h-[44px] transition-transform hover:scale-[1.03]"
              style={{ background: "linear-gradient(135deg, #1da851, #25D366)", fontWeight: 700, fontSize: "0.95rem" }}
            >
              <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" /></svg>
              احجز عبر واتساب
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
