import { getService } from "@/lib/services";
import ServicePage from "@/components/ServicePage";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

const service = getService("web-design");

export const metadata: Metadata = service ? {
  title: service.metaTitle,
  description: service.metaDesc,
  alternates: { canonical: `https://marketing-agency-dublin-dublin.vercel.app/services/web-design` },
  openGraph: {
    title: service.metaTitle,
    description: service.metaDesc,
    url: `https://marketing-agency-dublin-dublin.vercel.app/services/web-design`,
    siteName: "Marketing Agency Dublin",
    locale: "en_IE",
    type: "website",
  },
} : {};

export default function Page() {
  if (!service) notFound();
  return <ServicePage service={service} />;
}
