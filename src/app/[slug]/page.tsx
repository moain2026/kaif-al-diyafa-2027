import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CITIES, SERVICES, SITE_URL, WA_NUMBER, getServiceCitySlugs } from "@/lib/seo-pages";
import { generateBreadcrumbSchema, generateServiceSchema } from "@/lib/schema";

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return getServiceCitySlugs().map(({ slug }) => ({ slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const all = getServiceCitySlugs();
  const match = all.find((s) => s.slug === params.slug);
  if (!match) return {};

  const { service, city } = match;
  return {
    title: service.titleTemplate.replace("{city}", city.name),
    description: service.descTemplate.replace("{city}", city.name),
    alternates: { canonical: `${SITE_URL}/${service.slug}-${city.nameEn.toLowerCase()}` },
    openGraph: {
      title: service.titleTemplate.replace("{city}", city.name),
      description: service.descTemplate.replace("{city}", city.name),
      url: `${SITE_URL}/${service.slug}-${city.nameEn.toLowerCase()}`,
    },
  };
}

export default function ServiceCityPage({ params }: PageProps) {
  const all = getServiceCitySlugs();
  const match = all.find((s) => s.slug === params.slug);
  if (!match) notFound();

  const { service, city } = match;
  const citySlugMap: Record<string, string> = {
    "الرياض": "riyadh", "جدة": "jeddah", "مكة-المكرمة": "makkah",
    "المدينة-المنورة": "madinah", "الدمام": "dammam", "الطائف": "taif",
    "أبها": "abha", "ينبع": "yanbu",
  };

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "الرئيسية", url: SITE_URL },
    { name: "مناطق التغطية", url: `${SITE_URL}/locations` },
    { name: city.name, url: `${SITE_URL}/locations/${city.slug}` },
    { name: `${service.name} ${city.name}`, url: `${SITE_URL}/${match.slug}` },
  ]);

  const serviceSchema = generateServiceSchema({
    name: `${service.name} ${city.name}`,
    description: service.descTemplate.replace("{city}", city.name),
    url: `${SITE_URL}/${match.slug}`,
  });

  const waMsg = `مرحباً، أود الاستفسار عن ${service.name} في ${city.name}.`;

  // Related: other services in same city + same service in other cities
  const otherServicesInCity = SERVICES.filter((s) => s.slug !== service.slug);
  const otherCitiesForService = CITIES.filter((c) => c.slug !== city.slug);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <div className="min-h-screen bg-[#0f0f0f] px-4 py-20">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex flex-wrap items-center gap-2 text-xs text-[#F5F5DC]/40 mb-8" aria-label="breadcrumb">
            <Link href="/" className="hover:text-[#B8860B]">الرئيسية</Link>
            <span>/</span>
            <Link href="/locations" className="hover:text-[#B8860B]">مناطق التغطية</Link>
            <span>/</span>
            <Link href={`/locations/${city.slug}`} className="hover:text-[#B8860B]">{city.name}</Link>
            <span>/</span>
            <span className="text-[#B8860B]">{service.name}</span>
          </nav>

          {/* Hero */}
          <div className="text-center mb-16">
            <p className="text-[#B8860B] mb-3" style={{ fontSize: "0.75rem", letterSpacing: "0.35em" }}>
              ✦ {service.name} ✦ {city.name} ✦
            </p>
            <h1 className="text-[#F5F5DC] mb-4 font-tajawal" style={{ fontSize: "clamp(1.6rem, 5vw, 2.8rem)", fontWeight: 900, lineHeight: 1.15 }}>
              <span className="gold-gradient-text">{service.h1Template.replace("{city}", city.name)}</span>
            </h1>
            <p className="text-[#F5F5DC]/55 max-w-2xl mx-auto text-sm leading-relaxed">
              {service.descTemplate.replace("{city}", city.name)} خبرة +10 سنوات و+500 مناسبة ناجحة. طاقم مدرّب بزيّ تراثي فاخر.
            </p>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: "✦", title: "طاقم مدرّب", desc: "صبابين وقهوجيين محترفين بزيّ تراثي فاخر" },
              { icon: "☕", title: "قهوة سعودية", desc: "قهوة عربية أصيلة + تمر وحلويات فاخرة" },
              { icon: "📍", title: `تغطية ${city.name}`, desc: `نصل لموقعك في ${city.name} وجميع أحيائها` },
            ].map((f, i) => (
              <div key={i} className="card-luxury p-6 rounded-2xl text-center">
                <div className="text-2xl mb-3">{f.icon}</div>
                <h2 className="text-[#F5F5DC] text-sm mb-2" style={{ fontWeight: 700 }}>{f.title}</h2>
                <p className="text-[#F5F5DC]/50 text-xs leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center rounded-3xl p-8 mb-12" style={{ background: "linear-gradient(160deg, rgba(25,20,8,0.9), rgba(15,12,5,0.95))", border: "1px solid rgba(184,134,11,0.2)" }}>
            <h2 className="text-[#F5F5DC] mb-4" style={{ fontSize: "1.4rem", fontWeight: 800 }}>
              احجز {service.name} في {city.name}
            </h2>
            <p className="text-[#F5F5DC]/55 mb-6 text-sm">
              استشارة مجانية وعرض سعر مخصص لمناسبتك في {city.name}.
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

          {/* Internal links — SEO cross-linking */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-[#B8860B] mb-4" style={{ fontSize: "0.9rem", fontWeight: 700 }}>
                خدمات أخرى في {city.name}
              </h3>
              <div className="space-y-2">
                {otherServicesInCity.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/${s.slug}-${citySlugMap[city.slug]}`}
                    className="block text-[#F5F5DC]/60 text-sm hover:text-[#D4A017] transition-colors min-h-[36px]"
                  >
                    ✦ {s.name} {city.name}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-[#B8860B] mb-4" style={{ fontSize: "0.9rem", fontWeight: 700 }}>
                {service.name} في مدن أخرى
              </h3>
              <div className="space-y-2">
                {otherCitiesForService.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/${service.slug}-${citySlugMap[c.slug]}`}
                    className="block text-[#F5F5DC]/60 text-sm hover:text-[#D4A017] transition-colors min-h-[36px]"
                  >
                    ✦ {service.name} {c.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
