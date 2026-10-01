import type { MetadataRoute } from "next";
import { mainNav, site } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return mainNav.map((item) => ({
    url: new URL(item.href, site.url).toString(),
    changeFrequency: "weekly",
    priority: item.href === "/" ? 1 : 0.7,
  }));
}
