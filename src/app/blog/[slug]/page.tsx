import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BLOG_ARTICLES, SITE_URL, WA_NUMBER } from "@/lib/blog-data";
import { generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema";

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return BLOG_ARTICLES.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const article = BLOG_ARTICLES.find((a) => a.slug === params.slug);
  if (!article) return {};

  return {
    title: article.title,
    description: article.description,
    keywords: article.keywords,
    alternates: { canonical: `${SITE_URL}/blog/${article.slug}` },
    openGraph: {
      title: article.title,
      description: article.description,
      url: `${SITE_URL}/blog/${article.slug}`,
      type: "article",
      publishedTime: article.date,
    },
  };
}

export default function BlogArticlePage({ params }: PageProps) {
  const article = BLOG_ARTICLES.find((a) => a.slug === params.slug);
  if (!article) notFound();

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "الرئيسية", url: SITE_URL },
    { name: "المدونة", url: `${SITE_URL}/blog` },
    { name: article.title, url: `${SITE_URL}/blog/${article.slug}` },
  ]);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.date,
    author: { "@type": "Organization", name: "كيف الضيافة" },
    publisher: { "@type": "Organization", name: "كيف الضيافة", url: SITE_URL },
    mainEntityOfPage: `${SITE_URL}/blog/${article.slug}`,
  };

  const waMsg = `مرحباً، قرأت مقالكم "${article.title}" وأود الاستفسار عن خدماتكم.`;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <div className="min-h-screen bg-[#0f0f0f] px-4 py-20">
        <div className="max-w-3xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-[#F5F5DC]/40 mb-8" aria-label="breadcrumb">
            <Link href="/" className="hover:text-[#B8860B]">الرئيسية</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-[#B8860B]">المدونة</Link>
            <span>/</span>
            <span className="text-[#B8860B] truncate max-w-[200px]">{article.title}</span>
          </nav>

          {/* Header */}
          <div className="mb-12">
            <span
              className="inline-block px-3 py-1 rounded-full text-xs mb-4"
              style={{ background: "rgba(184,134,11,0.1)", border: "1px solid rgba(184,134,11,0.2)", color: "#C5A059" }}
            >
              {article.category}
            </span>
            <h1 className="text-[#F5F5DC] mb-4 font-tajawal" style={{ fontSize: "clamp(1.5rem, 4vw, 2.2rem)", fontWeight: 900, lineHeight: 1.3 }}>
              {article.title}
            </h1>
            <div className="flex items-center gap-3 text-xs text-[#F5F5DC]/30">
              <span>{article.date}</span>
              <span>·</span>
              <span>{article.readTime}</span>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-10 mb-12">
            {article.content.map((section, i) => (
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

          {/* CTA */}
          <div className="text-center rounded-3xl p-8 mb-8" style={{ background: "linear-gradient(160deg, rgba(25,20,8,0.9), rgba(15,12,5,0.95))", border: "1px solid rgba(184,134,11,0.2)" }}>
            <h2 className="text-[#F5F5DC] mb-4" style={{ fontSize: "1.3rem", fontWeight: 800 }}>
              احصل على استشارة مجانية
            </h2>
            <p className="text-[#F5F5DC]/55 mb-6 text-sm">
              عرض سعر مخصص لمناسبتك خلال دقائق عبر واتساب.
            </p>
            <a
              href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(waMsg)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white min-h-[44px] transition-transform hover:scale-[1.03]"
              style={{ background: "linear-gradient(135deg, #1da851, #25D366)", fontWeight: 700, fontSize: "0.95rem" }}
            >
              <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" /></svg>
              تواصل عبر واتساب
            </a>
          </div>

          {/* Back to blog */}
          <Link href="/blog" className="text-[#B8860B] text-sm hover:text-[#D4A017] transition-colors">
            ← العودة للمدونة
          </Link>
        </div>
      </div>
    </>
  );
}
