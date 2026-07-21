import { MetadataRoute } from "next";
import { CITIES, SITE_URL, getServiceCitySlugs } from "@/lib/seo-pages";

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
  ];

  // Location pages (7 cities)
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

  const allRoutes = [...staticRoutes, ...locationRoutes, ...serviceCityRoutes];

  return allRoutes.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
