import { areas } from "@/lib/areas";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Areas We Serve",
  description: "We provide digital marketing services across Dublin, Kildare, Meath, Wicklow, Westmeath and Louth. Find your local marketing experts.",
  alternates: { canonical: "https://marketing-agency-dublin-dublin.vercel.app/areas" },
};

export default function AreasHub() {
  const counties = Array.from(new Set(areas.map((a) => a.county)));

  return (
    <main>
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-4">Areas We Serve</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Local marketing expertise across Dublin and the Greater Dublin Area. Find your nearest team.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        {counties.map((county) => (
          <div key={county} className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 border-b border-slate-200 pb-3">
              County {county}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {areas
                .filter((a) => a.county === county)
                .map((a) => (
                  <Link
                    key={a.slug}
                    href={`/areas/${a.slug}`}
                    className="group block bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg hover:border-primary/30 transition-all"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className="material-symbols-outlined text-primary text-2xl">location_on</span>
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-primary transition-colors">
                        {a.name}
                      </h3>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">{a.intro}</p>
                  </Link>
                ))}
            </div>
          </div>
        ))}
      </section>

      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Don't See Your Area?</h2>
          <p className="text-slate-600 mb-8 max-w-xl mx-auto">We work with businesses across Ireland. Get in touch and we'll discuss how we can help.</p>
          <Link href="/contact" className="inline-block bg-amber-accent hover:bg-amber-600 text-slate-900 px-8 py-3 rounded-lg font-bold text-sm transition-all shadow-sm">
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}
