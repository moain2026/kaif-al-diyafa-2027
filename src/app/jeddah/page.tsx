import { Metadata } from "next";
import Link from "next/link";
import { SITE_URL, WA_NUMBER, CITIES, SERVICES } from "@/lib/seo-pages";
import { JEDDAH_NEIGHBORHOODS } from "@/lib/jeddah-neighborhoods";
import { generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "كيف الضيافة في جدة | قهوجيين وصبابين قهوة | ضيافة فاخرة",
  description: "كيف الضيافة في جدة — قهوجيين وصبابين قهوة سعودية في جميع أحياء جدة (أبحر، الكورنيش، الروضة). +500 مناسبة ناجحة. احجز عبر واتساب.",
  alternates: { canonical: `${SITE_URL}/jeddah` },
  openGraph: {
    title: "كيف الضيافة في جدة | ضيافة فاخرة لكل المناسبات",
    description: "قهوجيين وصبابين قهوة في جدة — أبحر، الكورنيش، جميع الأحياء",
    url: `${SITE_URL}/jeddah`,
  },
};

export default function JeddahPage() {
  const jeddah = CITIES.find((c) => c.slug === "jeddah")!;
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "الرئيسية", url: SITE_URL },
    { name: "جدة", url: `${SITE_URL}/jeddah` },
  ]);

  const waMsg = "مرحباً، أود الاستفسار عن خدمات الضيافة في جدة.";

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "كيف الضيافة - جدة",
            description: "خدمات ضيافة فاخرة في جدة — قهوجيين وصبابين قهوة سعودية",
            url: `${SITE_URL}/jeddah`,
            telephone: "+966508252134",
            address: {
              "@type": "PostalAddress",
              addressLocality: "جدة",
              addressRegion: "منطقة مكة المكرمة",
              addressCountry: "SA",
            },
            areaServed: jeddah.neighborhoods.map((n) => n),
            priceRange: "$$$$",
            // aggregateRating removed — fake ratings violate Google's spam policies.
            // Re-add only when connected to real Google Business Profile API reviews.
          }),
        }}
      />
      <div className="min-h-screen bg-[#0f0f0f] px-4 py-20">
        <div className="max-w-4xl mx-auto">
          {/* Hero */}
          <div className="text-center mb-16">
            <p className="text-[#B8860B] mb-3" style={{ fontSize: "0.75rem", letterSpacing: "0.35em" }}>
              ✦ جدة عروس البحر الأحمر ✦
            </p>
            <h1 className="text-[#F5F5DC] mb-4 font-tajawal" style={{ fontSize: "clamp(2rem, 6vw, 3.5rem)", fontWeight: 900, lineHeight: 1.15 }}>
              كيف الضيافة في <span className="gold-gradient-text">جدة</span>
            </h1>
            <p className="text-[#F5F5DC]/55 max-w-2xl mx-auto text-sm leading-relaxed">
              {jeddah.cityIntro}
            </p>
          </div>

          {/* Services in Jeddah */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {SERVICES.map((service) => (
              <Link
                key={service.slug}
                href={`/${service.slug}-jeddah`}
                className="card-luxury p-6 rounded-2xl text-center group"
              >
                <h2 className="text-[#F5F5DC] text-sm group-hover:text-[#D4A017] transition-colors" style={{ fontWeight: 700 }}>
                  {service.name} جدة
                </h2>
                <p className="text-[#F5F5DC]/40 text-xs mt-2">{service.nameEn} in Jeddah</p>
              </Link>
            ))}
          </div>

          {/* Neighborhoods */}
          <div className="mb-12">
            <h2 className="text-[#C5A059] mb-4 font-tajawal" style={{ fontSize: "1.3rem", fontWeight: 700 }}>
              أحياء جدة التي نغطّيها
            </h2>
            <div className="flex flex-wrap gap-2 mb-6">
              {jeddah.neighborhoods.map((n) => (
                <span
                  key={n}
                  className="px-3 py-1.5 rounded-full text-xs"
                  style={{ background: "rgba(184,134,11,0.06)", border: "1px solid rgba(184,134,11,0.12)", color: "rgba(245,245,220,0.6)" }}
                >
                  {n}
                </span>
              ))}
            </div>

            {/* Specialized neighborhood pages */}
            <h3 className="text-[#B8860B] mb-4" style={{ fontSize: "0.9rem", fontWeight: 700 }}>
              صفحات متخصصة لأحياء جدة
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {JEDDAH_NEIGHBORHOODS.map((n) => (
                <Link
                  key={n.slug}
                  href={`/jeddah/${n.slug}`}
                  className="px-4 py-3 rounded-xl text-center text-xs group min-h-[44px] flex items-center justify-center"
                  style={{ background: "rgba(184,134,11,0.04)", border: "1px solid rgba(184,134,11,0.12)" }}
                >
                  <span className="text-[#F5F5DC]/60 group-hover:text-[#D4A017] transition-colors" style={{ fontWeight: 600 }}>
                    {n.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Google Maps Embed */}
          <div className="mb-12">
            <h2 className="text-[#C5A059] mb-4 font-tajawal" style={{ fontSize: "1.3rem", fontWeight: 700 }}>
              موقعنا في جدة
            </h2>
            <div className="rounded-3xl overflow-hidden" style={{ border: "1px solid rgba(184,134,11,0.2)" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29763.2!2d39.1725!3d21.4858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c204b74c28d3e3%3A0x8e7c0e3b8b0b0b0b!2sJeddah%20Saudi%20Arabia!5e0!3m2!1sen!2ssa!4v1700000000000"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="كيف الضيافة في جدة"
              />
            </div>
          </div>

          {/* FAQ */}
          <div className="mb-12">
            <h2 className="text-[#C5A059] mb-6 font-tajawal" style={{ fontSize: "1.3rem", fontWeight: 700 }}>
              أسئلة شائعة عن خدمات الضيافة في جدة
            </h2>
            <div className="space-y-4">
              {jeddah.faqs.map((faq, i) => (
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
              احجز خدمات الضيافة في جدة
            </h2>
            <p className="text-[#F5F5DC]/55 mb-6 text-sm">
              استشارة مجانية وعرض سعر مخصص لمناسبتك في جدة خلال دقائق.
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
