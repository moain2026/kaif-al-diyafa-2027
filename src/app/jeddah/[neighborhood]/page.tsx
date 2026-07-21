import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JEDDAH_NEIGHBORHOODS } from "@/lib/jeddah-neighborhoods";
import { SITE_URL, WA_NUMBER, SERVICES } from "@/lib/seo-pages";
import { generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema";

interface PageProps {
  params: { neighborhood: string };
}

export function generateStaticParams() {
  return JEDDAH_NEIGHBORHOODS.map((n) => ({ neighborhood: n.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const neighborhood = JEDDAH_NEIGHBORHOODS.find((n) => n.slug === params.neighborhood);
  if (!neighborhood) return {};

  const title = `قهوجيين وصبابين في ${neighborhood.name} جدة | كيف الضيافة`;
  const desc = neighborhood.intro;

  return {
    title,
    description: desc,
    alternates: { canonical: `${SITE_URL}/jeddah/${neighborhood.slug}` },
    openGraph: {
      title,
      description: desc,
      url: `${SITE_URL}/jeddah/${neighborhood.slug}`,
    },
  };
}

export default function NeighborhoodPage({ params }: PageProps) {
  const neighborhood = JEDDAH_NEIGHBORHOODS.find((n) => n.slug === params.neighborhood);
  if (!neighborhood) notFound();

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "الرئيسية", url: SITE_URL },
    { name: "جدة", url: `${SITE_URL}/jeddah` },
    { name: neighborhood.name, url: `${SITE_URL}/jeddah/${neighborhood.slug}` },
  ]);

  const faqSchema = generateFAQSchema(neighborhood.faqs);

  const waMsg = `مرحباً، أود الاستفسار عن خدمات الضيافة في ${neighborhood.name} جدة.`;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: `كيف الضيافة - ${neighborhood.name} جدة`,
            description: neighborhood.intro,
            url: `${SITE_URL}/jeddah/${neighborhood.slug}`,
            telephone: "+966508252134",
            address: {
              "@type": "PostalAddress",
              addressLocality: neighborhood.name,
              addressRegion: "جدة",
              addressCountry: "SA",
            },
            areaServed: neighborhood.venueTypes,
            priceRange: "$$$$",
          }),
        }}
      />
      <div className="min-h-screen bg-[#0f0f0f] px-4 py-20">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex flex-wrap items-center gap-2 text-xs text-[#F5F5DC]/40 mb-8" aria-label="breadcrumb">
            <Link href="/" className="hover:text-[#B8860B]">الرئيسية</Link>
            <span>/</span>
            <Link href="/jeddah" className="hover:text-[#B8860B]">جدة</Link>
            <span>/</span>
            <span className="text-[#B8860B]">{neighborhood.name}</span>
          </nav>

          {/* Hero */}
          <div className="text-center mb-16">
            <p className="text-[#B8860B] mb-3" style={{ fontSize: "0.75rem", letterSpacing: "0.35em" }}>
              ✦ {neighborhood.name} ✦ جدة ✦
            </p>
            <h1 className="text-[#F5F5DC] mb-4 font-tajawal" style={{ fontSize: "clamp(1.6rem, 5vw, 2.8rem)", fontWeight: 900, lineHeight: 1.15 }}>
              قهوجيين وصبابين في <span className="gold-gradient-text">{neighborhood.name} جدة</span>
            </h1>
            <p className="text-[#F5F5DC]/55 max-w-2xl mx-auto text-sm leading-relaxed">
              {neighborhood.intro}
            </p>
          </div>

          {/* Venue types */}
          <div className="mb-12">
            <h2 className="text-[#C5A059] mb-4 font-tajawal" style={{ fontSize: "1.3rem", fontWeight: 700 }}>
              أنواع القاعات في {neighborhood.name}
            </h2>
            <div className="flex flex-wrap gap-2">
              {neighborhood.venueTypes.map((v) => (
                <span
                  key={v}
                  className="px-3 py-1.5 rounded-full text-xs"
                  style={{ background: "rgba(184,134,11,0.06)", border: "1px solid rgba(184,134,11,0.12)", color: "rgba(245,245,220,0.6)" }}
                >
                  {v}
                </span>
              ))}
            </div>
          </div>

          {/* Content sections */}
          <div className="space-y-10 mb-12">
            {neighborhood.contentSections.map((section, i) => (
              <div key={i}>
                <h2 className="text-[#C5A059] mb-4 font-tajawal" style={{ fontSize: "1.3rem", fontWeight: 700 }}>
                  {section.heading}
                </h2>
                {section.paragraphs.map((p, j) => (
                  <p key={j} className="text-[#F5F5DC]/60 text-sm leading-relaxed mb-3" style={{ lineHeight: 1.8 }}>
                    {p}
                  </p>
                ))}
              </div>
            ))}
          </div>

          {/* Services links */}
          <div className="mb-12">
            <h2 className="text-[#C5A059] mb-4 font-tajawal" style={{ fontSize: "1.3rem", fontWeight: 700 }}>
              خدماتنا في {neighborhood.name}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {SERVICES.map((s) => (
                <Link
                  key={s.slug}
                  href={`/${s.slug}-jeddah`}
                  className="card-luxury p-4 rounded-2xl text-center group"
                >
                  <p className="text-[#F5F5DC] text-sm group-hover:text-[#D4A017] transition-colors" style={{ fontWeight: 700 }}>
                    {s.name} جدة
                  </p>
                </Link>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="mb-12">
            <h2 className="text-[#C5A059] mb-6 font-tajawal" style={{ fontSize: "1.3rem", fontWeight: 700 }}>
              أسئلة شائعة عن {neighborhood.name}
            </h2>
            <div className="space-y-4">
              {neighborhood.faqs.map((faq, i) => (
                <details
                  key={i}
                  className="rounded-2xl p-5 group"
                  style={{ background: "rgba(15,15,15,0.6)", border: "1px solid rgba(184,134,11,0.1)" }}
                >
                  <summary className="text-[#F5F5DC] text-sm cursor-pointer font-semibold min-h-[44px] flex items-center" style={{ listStyle: "none" }}>
                    {faq.question}
                    <span className="text-[#B8860B] mr-auto transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="text-[#F5F5DC]/55 text-sm leading-relaxed mt-3">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center rounded-3xl p-8" style={{ background: "linear-gradient(160deg, rgba(25,20,8,0.9), rgba(15,12,5,0.95))", border: "1px solid rgba(184,134,11,0.2)" }}>
            <h2 className="text-[#F5F5DC] mb-4" style={{ fontSize: "1.4rem", fontWeight: 800 }}>
              احجز خدمات الضيافة في {neighborhood.name}
            </h2>
            <p className="text-[#F5F5DC]/55 mb-6 text-sm">
              استشارة مجانية وعرض سعر مخصص لمناسبتك في {neighborhood.name} جدة.
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
