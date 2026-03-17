import { services } from "@/lib/services";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | Marketing Agency Dublin",
  description: "Explore our full range of digital marketing services including SEO, PPC, social media marketing, web design, local SEO, and content strategy in Dublin.",
  alternates: { canonical: "https://marketing-agency-dublin-dublin.vercel.app/services" },
};

export default function ServicesHub() {
  return (
    <main>
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-4">Our Services</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            From SEO and PPC to web design and social media — everything your business needs to grow online.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="group block bg-white border border-slate-200 rounded-xl p-8 hover:shadow-lg hover:border-primary/30 transition-all"
            >
              <span className="material-symbols-outlined text-primary text-4xl mb-4 block">{s.icon}</span>
              <h2 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">
                {s.title}
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">{s.heroSubtitle}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Grow Your Business?</h2>
          <p className="text-slate-600 mb-8 max-w-xl mx-auto">Get a free consultation and find out which services will deliver the best ROI for your business.</p>
          <Link href="/contact" className="inline-block bg-amber-accent hover:bg-amber-600 text-slate-900 px-8 py-3 rounded-lg font-bold text-sm transition-all shadow-sm">
            Get Free Quote
          </Link>
        </div>
      </section>
    </main>
  );
}
