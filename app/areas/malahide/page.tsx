import { getArea } from "@/lib/areas";
import AreaPage from "@/components/AreaPage";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

const area = getArea("malahide");

export const metadata: Metadata = area ? {
  title: `Marketing Agency & Web Design ${area.name} | Marketing Agency Dublin`,
  description: `Professional marketing agency serving ${area.name}, Co. ${area.county}. SEO, web design, Google Ads & social media marketing. Free consultation. Call +353 83 122 7553.`,
  alternates: { canonical: `https://marketing-agency-dublin-dublin.vercel.app/areas/malahide` },
} : {};

export default function Page() {
  if (!area) notFound();
  return <AreaPage area={area} />;
}
