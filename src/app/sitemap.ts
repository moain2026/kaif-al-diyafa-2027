import { MetadataRoute } from "next";
import { CITIES, SITE_URL, getServiceCitySlugs } from "@/lib/seo-pages";
import { BLOG_ARTICLES } from "@/lib/blog-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const staticRoutes = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/services", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/offerings", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/portfolio", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/about", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/contact", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/locations", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/jeddah", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/blog", priority: 0.7, changeFrequency: "weekly" as const },
    { path: "/reviews", priority: 0.6, changeFrequency: "monthly" as const },
  ];

  // Location pages (8 cities)
  const locationRoutes = CITIES.map((city) => ({
    path: `/locations/${city.slug}`,
    priority: 0.7,
    changeFrequency: "monthly" as const,
  }));

  // Service×City pages (24 pages)
  const serviceCityRoutes = getServiceCitySlugs().map(({ slug }) => ({
    path: `/${slug}`,
    priority: 0.6,
    changeFrequency: "monthly" as const,
  }));

  // Blog articles
  const blogRoutes = BLOG_ARTICLES.map((a) => ({
    path: `/blog/${a.slug}`,
    priority: 0.6,
    changeFrequency: "monthly" as const,
  }));

  const allRoutes = [...staticRoutes, ...locationRoutes, ...serviceCityRoutes, ...blogRoutes];

  return allRoutes.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
