import type { MetadataRoute } from "next";

const BASE = "https://marketing-agency-dublin-dublin.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const services = ["search-engine-optimisation","google-ads-ppc","social-media-marketing","local-seo","web-design","content-digital-strategy"];
  const areas = ["naas","navan","mullingar","drogheda","tallaght","blackrock","greystones","ashbourne","swords","malahide","lucan","blanchardstown","bray","maynooth","leixlip","sandyford"];

  return [
    { url: BASE, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    ...services.map((s) => ({ url: `${BASE}/services/${s}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 })),
    ...areas.map((a) => ({ url: `${BASE}/areas/${a}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 })),
    { url: `${BASE}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/privacy-policy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE}/terms`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  ];
}
