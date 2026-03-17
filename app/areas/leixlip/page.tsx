import { getArea } from "@/lib/areas";
import AreaPage from "@/components/AreaPage";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

const area = getArea("leixlip");

export const metadata: Metadata = area ? {
  title: `Marketing Agency Leixlip`,
  description: `Professional marketing agency serving Leixlip, Co. ${area.county}. SEO, web design, Google Ads & social media marketing. Free consultation. Call +353 83 122 7553.`,
  alternates: { canonical: `https://marketing-agency-dublin-dublin.vercel.app/areas/leixlip` },
  openGraph: {
    title: `Marketing Agency Leixlip`,
    description: `Professional marketing agency serving Leixlip. SEO, web design, Google Ads & social media marketing.`,
    url: `https://marketing-agency-dublin-dublin.vercel.app/areas/leixlip`,
    siteName: "Marketing Agency Dublin",
    locale: "en_IE",
    type: "website",
  },
} : {};

export default function Page() {
  if (!area) notFound();
  return <AreaPage area={area} />;
}
