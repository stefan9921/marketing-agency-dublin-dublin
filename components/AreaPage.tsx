import Link from "next/link";
import type { AreaData } from "@/lib/areas";
import JsonLd from "./JsonLd";
import CTA from "./CTA";
import ContactForm from "./ContactForm";
import Breadcrumbs from "./Breadcrumbs";

const BASE = "https://marketing-agency-dublin-dublin.vercel.app";

const servicesList = [
  { icon: "search", title: "SEO Strategy", desc: "Dominate search results and drive organic traffic to your local business.", href: "/services/search-engine-optimisation" },
  { icon: "ads_click", title: "PPC Management", desc: "Targeted Google Ads campaigns that convert visitors into paying customers.", href: "/services/google-ads-ppc" },
  { icon: "share", title: "Social Media", desc: "Engage with the local community through creative social content.", href: "/services/social-media-marketing" },
  { icon: "location_on", title: "Local SEO", desc: "Be the first business found when locals search for services near them.", href: "/services/local-seo" },
  { icon: "devices", title: "Web Design", desc: "Stunning, high-performance websites built for top brands.", href: "/services/web-design" },
  { icon: "lightbulb", title: "Content Strategy", desc: "Build authority and trust with strategic, engaging content marketing.", href: "/services/content-digital-strategy" },
];

const nearbyAreas: Record<string, string[]> = {
  naas: ["Maynooth", "Leixlip", "Mullingar", "Bray"],
  navan: ["Drogheda", "Ashbourne", "Mullingar", "Swords"],
  mullingar: ["Naas", "Navan", "Maynooth", "Ashbourne"],
  drogheda: ["Navan", "Swords", "Ashbourne", "Malahide"],
  tallaght: ["Sandyford", "Blackrock", "Lucan", "Bray"],
  blackrock: ["Sandyford", "Tallaght", "Greystones", "Bray"],
  greystones: ["Bray", "Blackrock", "Sandyford", "Tallaght"],
  ashbourne: ["Swords", "Navan", "Malahide", "Blanchardstown"],
  swords: ["Malahide", "Blanchardstown", "Ashbourne", "Drogheda"],
  malahide: ["Swords", "Ashbourne", "Blanchardstown", "Drogheda"],
  lucan: ["Blanchardstown", "Leixlip", "Maynooth", "Tallaght"],
  blanchardstown: ["Lucan", "Swords", "Malahide", "Ashbourne"],
  bray: ["Greystones", "Blackrock", "Sandyford", "Tallaght"],
  maynooth: ["Leixlip", "Lucan", "Naas", "Blanchardstown"],
  leixlip: ["Maynooth", "Lucan", "Blanchardstown", "Naas"],
  sandyford: ["Blackrock", "Tallaght", "Greystones", "Bray"],
};

export default function AreaPage({ area }: { area: AreaData }) {
  const nearby = nearbyAreas[area.slug] || ["Naas", "Swords", "Tallaght", "Blackrock"];
  const breadcrumbItems = [
    { name: "Areas", href: "/#areas" },
    { name: area.name },
  ];
  const breadcrumbSchema = [
    { name: "Home", url: BASE },
    { name: "Areas", url: `${BASE}/#areas` },
    { name: area.name, url: `${BASE}/areas/${area.slug}` },
  ];

  return (
    <>
      <JsonLd breadcrumbs={breadcrumbSchema} />
      <Breadcrumbs items={breadcrumbItems} />

      {/* Hero */}
      <section className="bg-primary py-20 lg:py-32 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-white text-4xl lg:text-6xl xl:text-7xl font-black leading-tight tracking-tight">
              Marketing Agency &amp; Web Design in {area.name}
            </h1>
            <p className="text-white/90 text-lg lg:text-xl max-w-xl leading-relaxed">
              Elevate your business with professional marketing services tailored specifically for the {area.name} area. We combine Dublin-level strategy with local insight.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="bg-amber-accent hover:bg-amber-600 text-slate-900 px-8 py-4 rounded-lg text-lg font-bold transition-all shadow-lg">Get Free Quote</Link>
              <a href="tel:+353831227553" className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-lg text-lg font-bold transition-all flex items-center gap-2">
                <span className="material-symbols-outlined">phone</span> Call Us
              </a>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="aspect-video w-full rounded-xl bg-white/10 flex items-center justify-center">
              <span className="material-symbols-outlined text-white/30 text-[100px]">location_city</span>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white py-24 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-primary text-3xl lg:text-4xl font-bold tracking-tight">Your Local Marketing Partner in {area.name}</h2>
            <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
              <p className="font-semibold text-slate-900">Dublin-quality marketing for {area.name} businesses.</p>
              <p>{area.intro}</p>
              <p>{area.localDesc}</p>
              <p>As a full-service <Link href="/" className="text-primary font-semibold hover:underline">marketing agency based in Dublin</Link>, we offer everything from <Link href="/services/search-engine-optimisation" className="text-primary font-semibold hover:underline">search engine optimisation</Link> and <Link href="/services/web-design" className="text-primary font-semibold hover:underline">web design</Link> to <Link href="/services/google-ads-ppc" className="text-primary font-semibold hover:underline">Google Ads management</Link> and <Link href="/services/local-seo" className="text-primary font-semibold hover:underline">local SEO</Link> for businesses in {area.name} and across Co. {area.county}.</p>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden shadow-xl border border-slate-100 bg-[#f5f5f5] aspect-square flex items-center justify-center">
            <span className="material-symbols-outlined text-primary/20 text-[120px]">map</span>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-[#f5f5f5] py-24 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-primary text-3xl lg:text-4xl font-bold tracking-tight">Our Services in {area.name}</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Comprehensive digital solutions designed to help {area.county} businesses thrive in a competitive online marketplace.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesList.map((s, i) => (
              <Link key={i} href={s.href} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow group border border-slate-100 block">
                <span className="material-symbols-outlined text-primary text-4xl mb-6 block">{s.icon}</span>
                <h3 className="text-xl font-bold mb-3">{s.title} in {area.name}</h3>
                <p className="text-slate-600 mb-6">{s.desc}</p>
                <span className="text-amber-accent font-bold inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                  Learn More <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why local businesses choose us */}
      <section className="bg-white py-24 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16">Why {area.name} Businesses Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8">
              <span className="material-symbols-outlined text-primary text-5xl mb-4">location_on</span>
              <h3 className="text-xl font-bold mb-3">Local Knowledge</h3>
              <p className="text-slate-600">We understand the {area.name} and {area.county} market inside out, ensuring strategies that resonate with local audiences.</p>
            </div>
            <div className="text-center p-8">
              <span className="material-symbols-outlined text-primary text-5xl mb-4">trending_up</span>
              <h3 className="text-xl font-bold mb-3">Proven Results</h3>
              <p className="text-slate-600">Our data-driven approach has helped businesses across {area.county} achieve significant growth in traffic and revenue.</p>
            </div>
            <div className="text-center p-8">
              <span className="material-symbols-outlined text-primary text-5xl mb-4">support_agent</span>
              <h3 className="text-xl font-bold mb-3">Dedicated Support</h3>
              <p className="text-slate-600">Your dedicated account manager is always available to discuss strategy, answer questions, and ensure success.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Nearby Areas (Internal Linking) */}
      <section className="bg-[#f5f5f5] py-16 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">We Also Serve Nearby Areas</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {nearby.map((n) => (
              <Link key={n} href={`/areas/${n.toLowerCase()}`} className="bg-white hover:bg-primary hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors border border-slate-100">
                {n}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-6 lg:px-20 bg-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Get a Free Consultation for Your {area.name} Business</h2>
          <p className="text-slate-600 text-center mb-8">Tell us about your business and we&apos;ll create a custom marketing plan for your {area.name} location.</p>
          <ContactForm />
        </div>
      </section>

      <CTA title={`Ready to Grow Your ${area.name} Business?`} subtitle={`Get a free consultation and discover how we can help your ${area.name} business dominate online.`} />
    </>
  );
}
