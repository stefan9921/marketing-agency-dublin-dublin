import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Marketing Agency Dublin | SEO, Web Design & Digital Marketing",
  description: "Marketing Agency Dublin offers expert SEO, web design, PPC, social media marketing & local SEO services. Call +353 83 122 7553 for a free consultation.",
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
