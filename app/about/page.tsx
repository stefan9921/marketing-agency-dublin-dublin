import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTA from "@/components/CTA";

const BASE = "https://marketing-agency-dublin-dublin.vercel.app";

export const metadata: Metadata = {
  title: "About Marketing Agency Dublin | Our Story & Team",
  description: "Learn about Marketing Agency Dublin — a results-driven digital marketing agency based in Dublin 17. Meet our team and discover our approach to growing Irish businesses.",
  alternates: { canonical: `${BASE}/about` },
  openGraph: {
    title: "About Marketing Agency Dublin | Our Story & Team",
    description: "Learn about Marketing Agency Dublin — a results-driven digital marketing agency based in Dublin 17.",
    url: `${BASE}/about`,
    siteName: "Marketing Agency Dublin",
    locale: "en_IE",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <>
      <JsonLd breadcrumbs={[{ name: "Home", url: BASE }, { name: "About", url: `${BASE}/about` }]} />
      <Breadcrumbs items={[{ name: "About" }]} />

      <section className="bg-primary py-20 lg:py-28 px-6 text-white">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-4xl lg:text-6xl font-black">About Marketing Agency Dublin</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">We&apos;re a team of passionate marketers, designers, and developers helping Irish businesses grow through strategic digital marketing.</p>
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto space-y-8 text-lg text-slate-600 leading-relaxed">
          <h2 className="text-3xl font-bold text-slate-900">Our Story</h2>
          <p>Marketing Agency Dublin was founded with a simple mission: to provide Irish businesses with world-class digital marketing services at a fair price. Based at Burnell Court on Malahide Road in Dublin 17, we&apos;ve grown from a small team of marketing enthusiasts into a full-service agency serving over 150 clients across Ireland.</p>
          <p>We believe that every business deserves access to the same quality of marketing expertise that large corporations enjoy. That&apos;s why we&apos;ve built a team of specialists across <Link href="/services/search-engine-optimisation" className="text-primary font-semibold hover:underline">SEO</Link>, <Link href="/services/google-ads-ppc" className="text-primary font-semibold hover:underline">PPC</Link>, <Link href="/services/web-design" className="text-primary font-semibold hover:underline">web design</Link>, <Link href="/services/social-media-marketing" className="text-primary font-semibold hover:underline">social media</Link>, and <Link href="/services/content-digital-strategy" className="text-primary font-semibold hover:underline">content strategy</Link> — all working together to deliver integrated campaigns that drive real results.</p>

          <h2 className="text-3xl font-bold text-slate-900 pt-8">Our Approach</h2>
          <p>We&apos;re not a one-size-fits-all agency. Every business is different, and every marketing strategy should be too. We start by understanding your unique goals, challenges, and market position, then develop a custom strategy designed to deliver measurable growth.</p>
          <p>Transparency is at the heart of everything we do. You&apos;ll always know exactly what we&apos;re working on, why we&apos;re doing it, and what results it&apos;s delivering. No jargon, no smoke and mirrors — just honest, effective marketing.</p>
          <p>Whether you&apos;re a startup in <Link href="/areas/sandyford" className="text-primary font-semibold hover:underline">Sandyford Business District</Link>, a retailer in <Link href="/areas/swords" className="text-primary font-semibold hover:underline">Swords</Link>, or a professional services firm in <Link href="/areas/blackrock" className="text-primary font-semibold hover:underline">Blackrock</Link>, we tailor our approach to your specific market and audience.</p>

          <h2 className="text-3xl font-bold text-slate-900 pt-8">Our Values</h2>
          <div className="grid md:grid-cols-2 gap-6 pt-4">
            <div className="bg-[#f5f5f5] p-6 rounded-lg"><h3 className="font-bold text-slate-900 mb-2">Results First</h3><p className="text-base">Every action we take is tied to a measurable business outcome. We&apos;re obsessed with delivering ROI.</p></div>
            <div className="bg-[#f5f5f5] p-6 rounded-lg"><h3 className="font-bold text-slate-900 mb-2">Total Transparency</h3><p className="text-base">No hidden fees, no unclear reporting. You see everything we do and the results it delivers.</p></div>
            <div className="bg-[#f5f5f5] p-6 rounded-lg"><h3 className="font-bold text-slate-900 mb-2">Continuous Learning</h3><p className="text-base">Digital marketing evolves daily. We invest heavily in training and staying ahead of industry changes.</p></div>
            <div className="bg-[#f5f5f5] p-6 rounded-lg"><h3 className="font-bold text-slate-900 mb-2">Partnership Mindset</h3><p className="text-base">We&apos;re not just a vendor — we&apos;re an extension of your team, invested in your long-term success.</p></div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-16">Marketing Agency Dublin by the Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div><div className="text-5xl font-black text-primary">150+</div><div className="text-slate-600 font-semibold mt-2">Clients Served</div></div>
            <div><div className="text-5xl font-black text-primary">10+</div><div className="text-slate-600 font-semibold mt-2">Years Experience</div></div>
            <div><div className="text-5xl font-black text-primary">500+</div><div className="text-slate-600 font-semibold mt-2">Projects Delivered</div></div>
            <div><div className="text-5xl font-black text-primary">5.0</div><div className="text-slate-600 font-semibold mt-2">Google Rating</div></div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
