import { Metadata } from "next";
import Link from "next/link";
import { BLOG_ARTICLES, SITE_URL } from "@/lib/blog-data";
import { generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "مدونة كيف الضيافة | أدلة وأسعار الضيافة في السعودية",
  description: "أدلة شاملة عن خدمات الضيافة في السعودية — أسعار القهوجيين، الفرق بين القهوجي والمباشر والصبّاب، نصائح لمناسباتك.",
  alternates: { canonical: `${SITE_URL}/blog` },
  openGraph: {
    title: "مدونة كيف الضيافة | أدلة وأسعار الضيافة",
    description: "أدلة شاملة عن خدمات الضيافة في السعودية",
    url: `${SITE_URL}/blog`,
  },
};

export default function BlogPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "الرئيسية", url: SITE_URL },
    { name: "المدونة", url: `${SITE_URL}/blog` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div className="min-h-screen bg-[#0f0f0f] px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#B8860B] mb-3" style={{ fontSize: "0.75rem", letterSpacing: "0.35em" }}>
              ✦ مدونة كيف الضيافة ✦
            </p>
            <h1 className="text-[#F5F5DC] mb-4 font-tajawal" style={{ fontSize: "clamp(1.8rem, 5vw, 2.8rem)", fontWeight: 900, lineHeight: 1.15 }}>
              أدلة وأسعار <span className="gold-gradient-text">الضيافة في السعودية</span>
            </h1>
            <p className="text-[#F5F5DC]/55 max-w-xl mx-auto text-sm leading-relaxed">
              مقالات وأدلة شاملة لمساعدتك في اختيار أفضل خدمات الضيافة لمناسباتك.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {BLOG_ARTICLES.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="card-luxury p-6 rounded-2xl group"
              >
                <span
                  className="inline-block px-3 py-1 rounded-full text-xs mb-3"
                  style={{ background: "rgba(184,134,11,0.1)", border: "1px solid rgba(184,134,11,0.2)", color: "#C5A059" }}
                >
                  {article.category}
                </span>
                <h2 className="text-[#F5F5DC] text-base mb-2 group-hover:text-[#D4A017] transition-colors" style={{ fontWeight: 700 }}>
                  {article.title}
                </h2>
                <p className="text-[#F5F5DC]/50 text-sm leading-relaxed mb-4">
                  {article.description}
                </p>
                <div className="flex items-center gap-3 text-xs text-[#F5F5DC]/30">
                  <span>{article.date}</span>
                  <span>·</span>
                  <span>{article.readTime}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
