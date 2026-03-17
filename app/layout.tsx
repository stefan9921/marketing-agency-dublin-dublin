import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Marketing Agency Dublin | SEO, Web Design & Digital Marketing",
    template: "%s | Marketing Agency Dublin",
  },
  description: "Marketing Agency Dublin offers expert SEO, web design, PPC, social media marketing & local SEO services. Call +353 83 122 7553 for a free consultation.",
  metadataBase: new URL("https://marketing-agency-dublin-dublin.vercel.app"),
  openGraph: {
    title: "Marketing Agency Dublin | SEO, Web Design & Digital Marketing",
    description: "Dublin's top-rated marketing agency. Expert SEO, Google Ads, web design, social media & local SEO services. 150+ clients served.",
    url: "https://marketing-agency-dublin-dublin.vercel.app",
    siteName: "Marketing Agency Dublin",
    locale: "en_IE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marketing Agency Dublin",
    description: "Dublin's top-rated marketing agency. Expert SEO, Google Ads, web design, social media & local SEO services.",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://marketing-agency-dublin-dublin.vercel.app" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-bg-light text-slate-900 font-display antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
