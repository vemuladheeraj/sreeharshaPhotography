import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/portfolio",
    "/services",
    "/gallery",
    "/testimonials",
    "/contact",
    "/booking",
    "/privacy",
    "/terms",
  ];

  return routes.map((route) => ({
    url: `${SITE_CONFIG.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
