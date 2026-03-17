import { getService } from "@/lib/services";
import ServicePage from "@/components/ServicePage";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

const service = getService("google-ads-ppc");

export const metadata: Metadata = service ? {
  title: service.metaTitle,
  description: service.metaDesc,
  alternates: { canonical: `https://marketing-agency-dublin-dublin.vercel.app/services/google-ads-ppc` },
} : {};

export default function Page() {
  if (!service) notFound();
  return <ServicePage service={service} />;
}
