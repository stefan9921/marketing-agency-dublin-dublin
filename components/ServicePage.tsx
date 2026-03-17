import Link from "next/link";
import Image from "next/image";
import type { ServiceData } from "@/lib/services";
import JsonLd from "./JsonLd";
import CTA from "./CTA";
import ContactForm from "./ContactForm";
import Breadcrumbs from "./Breadcrumbs";

const BASE = "https://marketing-agency-dublin-dublin.vercel.app";

const serviceHeroImages: Record<string, string> = {
  "search-engine-optimisation": "/images/service-seo.jpg",
  "google-ads-ppc": "/images/service-ppc.jpg",
  "social-media-marketing": "/images/service-social.jpg",
  "local-seo": "/images/service-local-seo.jpg",
  "web-design": "/images/service-web-design.jpg",
  "content-digital-strategy": "/images/service-strategy.jpg",
};
const serviceIntroImages: Record<string, string> = {
  "search-engine-optimisation": "/images/service-seo-2.jpg",
  "google-ads-ppc": "/images/service-ppc-2.jpg",
  "social-media-marketing": "/images/service-social-2.jpg",
  "local-seo": "/images/service-local-seo-2.jpg",
  "web-design": "/images/service-web-design-2.jpg",
  "content-digital-strategy": "/images/service-strategy-2.jpg",
};

const relatedAreas = ["Naas", "Navan", "Tallaght", "Swords", "Blackrock", "Sandyford", "Bray", "Blanchardstown"];

const allServices = [
  { slug: "search-engine-optimisation", title: "SEO" },
  { slug: "google-ads-ppc", title: "Google Ads & PPC" },
  { slug: "social-media-marketing", title: "Social Media" },
  { slug: "local-seo", title: "Local SEO" },
  { slug: "web-design", title: "Web Design" },
  { slug: "content-digital-strategy", title: "Content & Digital Strategy" },
];

export default function ServicePage({ service }: { service: ServiceData }) {
  const heroImg = serviceHeroImages[service.slug] || "/images/service-seo.jpg";
  const introImg = serviceIntroImages[service.slug] || "/images/service-seo-2.jpg";
  const otherServices = allServices.filter((s) => s.slug !== service.slug);
  const breadcrumbItems = [
    { name: "Services", href: "/#services" },
    { name: service.title },
  ];
  const breadcrumbSchema = [
    { name: "Home", url: BASE },
    { name: "Services", url: `${BASE}/#services` },
    { name: service.title, url: `${BASE}/services/${service.slug}` },
  ];

  return (
    <>
      <JsonLd
        breadcrumbs={breadcrumbSchema}
        service={{ name: service.title, description: service.metaDesc, url: `${BASE}/services/${service.slug}` }}
        faq={service.faq}
      />
      <Breadcrumbs items={breadcrumbItems} />

      {/* Hero */}
      <section className="bg-primary py-20 lg:py-32 px-6 lg:px-20 text-white">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-8">
            <h1 className="text-4xl lg:text-6xl font-black leading-tight">{service.heroTitle}</h1>
            <p className="text-lg lg:text-xl opacity-90 max-w-xl">{service.heroSubtitle}</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="bg-amber-accent text-slate-900 px-8 py-4 rounded-lg text-lg font-bold hover:scale-105 transition-transform shadow-lg">Get Started</Link>
              <a href="tel:+353831227553" className="border-2 border-white/30 hover:bg-white/10 px-8 py-4 rounded-lg text-lg font-bold transition-all flex items-center gap-2">
                <span className="material-symbols-outlined">phone</span> Call Us
              </a>
            </div>
          </div>
          <div className="flex-1 w-full hidden lg:flex items-center justify-center">
            <div className="aspect-video w-full rounded-xl overflow-hidden">
              <Image src={heroImg} alt={service.heroTitle} width={800} height={450} className="w-full h-full object-cover" priority />
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white py-20 px-6 lg:px-20">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 order-2 lg:order-1">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">{service.intro.heading}</h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              {service.intro.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </div>
          <div className="flex-1 order-1 lg:order-2">
            <div className="rounded-2xl overflow-hidden aspect-square">
              <Image src={introImg} alt={`${service.title} strategy`} width={600} height={600} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-[#f5f5f5] py-20 px-6 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Why Choose Our {service.title} Service</h2>
            <p className="text-slate-600">The leading choice for Dublin businesses looking to grow through {service.title.toLowerCase()}.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.benefits.map((b, i) => (
              <div key={i} className="bg-white p-8 rounded-lg shadow-sm border border-slate-100 flex gap-6">
                <div className="text-primary flex-shrink-0"><span className="material-symbols-outlined text-4xl">{b.icon}</span></div>
                <div><h3 className="text-xl font-bold mb-2">{b.title}</h3><p className="text-slate-600">{b.desc}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-white py-20 px-6 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-slate-900 mb-16">Our 4-Step {service.title} Process</h2>
          <div className="space-y-12">
            {service.process.map((s, i) => (
              <div key={i} className="flex gap-8 items-start">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl flex-shrink-0">{i + 1}</div>
                <div><h3 className="text-xl font-bold mb-2">{s.title}</h3><p className="text-slate-600">{s.desc}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#f5f5f5] py-20 px-6 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-slate-900 mb-16">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {service.faq.map((f, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
                <h3 className="text-lg font-bold mb-2">{f.q}</h3>
                <p className="text-slate-600">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services (Internal Linking) */}
      <section className="bg-white py-20 px-6 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Explore Our Other Services</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {otherServices.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="bg-[#f5f5f5] hover:bg-primary hover:text-white p-4 rounded-lg text-center font-semibold transition-colors text-sm">
                {s.title}
              </Link>
            ))}
          </div>
          <div className="mt-12">
            <h3 className="text-xl font-bold text-center text-slate-900 mb-6">Areas We Serve</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {relatedAreas.map((a) => (
                <Link key={a} href={`/areas/${a.toLowerCase()}`} className="text-primary hover:text-amber-accent font-medium text-sm transition-colors">
                  {service.title} in {a} →
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-6 lg:px-20 bg-[#f5f5f5]">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Get a Free {service.title} Consultation</h2>
          <ContactForm />
        </div>
      </section>

      <CTA />
    </>
  );
}
