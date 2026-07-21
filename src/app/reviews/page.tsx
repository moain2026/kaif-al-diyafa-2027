import { Metadata } from "next";
import { SITE_URL, WA_NUMBER } from "@/lib/seo-pages";
import { generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "قيّم خدمتنا | كيف الضيافة",
  description: "شاركنا تجربتك مع كيف الضيافة. تقييمك يساعد الآخرين ويعزّز ظهورنا في خرائط جوجل.",
  alternates: { canonical: `${SITE_URL}/reviews` },
  openGraph: {
    title: "قيّم خدمتنا | كيف الضيافة",
    description: "شاركنا تجربتك مع كيف الضيافة",
    url: `${SITE_URL}/reviews`,
  },
};

export default function ReviewsPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "الرئيسية", url: SITE_URL },
    { name: "تقييم الخدمة", url: `${SITE_URL}/reviews` },
  ]);

  const googleMapsUrl = "https://www.google.com/maps";
  const googleReviewUrl = "https://www.google.com/search?q=keif+aldiafa+jeddah";

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ReviewAction",
            target: `${SITE_URL}/reviews`,
            resultReview: {
              "@type": "Review",
              itemReviewed: {
                "@type": "LocalBusiness",
                name: "كيف الضيافة",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "جدة",
                  addressCountry: "SA",
                },
              },
            },
          }),
        }}
      />
      <div className="min-h-screen bg-[#0f0f0f] px-4 py-20">
        <div className="max-w-2xl mx-auto">
          {/* Hero */}
          <div className="text-center mb-16">
            <p className="text-[#B8860B] mb-3" style={{ fontSize: "0.75rem", letterSpacing: "0.35em" }}>
              ✦ رأيك يهمّنا ✦
            </p>
            <h1 className="text-[#F5F5DC] mb-4 font-tajawal" style={{ fontSize: "clamp(1.8rem, 5vw, 2.8rem)", fontWeight: 900, lineHeight: 1.15 }}>
              شاركنا <span className="gold-gradient-text">تجربتك</span>
            </h1>
            <p className="text-[#F5F5DC]/55 max-w-xl mx-auto text-sm leading-relaxed">
              تقييمك يساعد الآخرين على اختيار الخدمة المناسبة، ويعزّز ظهورنا في خرائط جوجل.
              كل تقييم خطوة نحو خدمة أفضل.
            </p>
          </div>

          {/* Google Maps Review CTA */}
          <div className="rounded-3xl p-8 mb-8 text-center" style={{ background: "linear-gradient(160deg, rgba(25,20,8,0.9), rgba(15,12,5,0.95))", border: "1px solid rgba(184,134,11,0.2)" }}>
            <div className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center" style={{ background: "rgba(184,134,11,0.1)", border: "1px solid rgba(184,134,11,0.3)" }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="#B8860B" strokeWidth="1.5" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
            </div>
            <h2 className="text-[#F5F5DC] mb-3" style={{ fontSize: "1.3rem", fontWeight: 800 }}>
              قيّمنا على خرائط جوجل
            </h2>
            <p className="text-[#F5F5DC]/55 mb-6 text-sm leading-relaxed">
              تقييمك على جوجل هو الأقوى تأثيراً — يساعد عملاء جدة في العثور علينا.
            </p>
            <a
              href={googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-[#0f0f0f] min-h-[44px] transition-transform hover:scale-[1.03]"
              style={{ background: "linear-gradient(135deg, #B8860B, #D4A017)", fontWeight: 700, fontSize: "0.95rem" }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
              قيّم على جوجل
            </a>
          </div>

          {/* WhatsApp feedback */}
          <div className="rounded-3xl p-8 text-center" style={{ background: "rgba(37,211,102,0.05)", border: "1px solid rgba(37,211,102,0.2)" }}>
            <h2 className="text-[#F5F5DC] mb-3" style={{ fontSize: "1.2rem", fontWeight: 700 }}>
              أو شاركنا رأيك عبر واتساب
            </h2>
            <p className="text-[#F5F5DC]/55 mb-6 text-sm">
              نحب نسمع ملاحظاتك مباشرة — شاركنا تجربتك.
            </p>
            <a
              href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("مرحباً، أود مشاركة تقييمي لتجربتي مع كيف الضيافة: ")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white min-h-[44px] transition-transform hover:scale-[1.03]"
              style={{ background: "linear-gradient(135deg, #1da851, #25D366)", fontWeight: 700, fontSize: "0.95rem" }}
            >
              <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" /></svg>
              شارك رأيك
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mt-12">
            {[
              { num: "+500", label: "مناسبة ناجحة" },
              { num: "+200", label: "عميل سعيد" },
              { num: "100%", label: "رضا العملاء" },
            ].map((stat, i) => (
              <div key={i} className="text-center p-4 rounded-2xl" style={{ background: "rgba(184,134,11,0.04)", border: "1px solid rgba(184,134,11,0.1)" }}>
                <p className="text-[#D4A017] text-xl font-bold mb-1">{stat.num}</p>
                <p className="text-[#F5F5DC]/40 text-xs">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
