import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://marketing-agency-dublin-dublin.vercel.app/sitemap.xml",
  };
}
