import { getArea } from "@/lib/areas";
import AreaPage from "@/components/AreaPage";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

const area = getArea("greystones");

export const metadata: Metadata = area ? {
  title: `Marketing Agency & Web Design Greystones | Marketing Agency Dublin`,
  description: `Professional marketing agency serving Greystones, Co. ${area.county}. SEO, web design, Google Ads & social media marketing. Free consultation. Call +353 83 122 7553.`,
  alternates: { canonical: `https://marketing-agency-dublin-dublin.vercel.app/areas/greystones` },
  openGraph: {
    title: `Marketing Agency & Web Design Greystones | Marketing Agency Dublin`,
    description: `Professional marketing agency serving Greystones. SEO, web design, Google Ads & social media marketing.`,
    url: `https://marketing-agency-dublin-dublin.vercel.app/areas/greystones`,
    siteName: "Marketing Agency Dublin",
    locale: "en_IE",
    type: "website",
  },
} : {};

export default function Page() {
  if (!area) notFound();
  return <AreaPage area={area} />;
}
