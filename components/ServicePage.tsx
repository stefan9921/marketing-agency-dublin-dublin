import Link from "next/link";
import type { ServiceData } from "@/lib/services";
import JsonLd from "./JsonLd";
import CTA from "./CTA";
import ContactForm from "./ContactForm";

export default function ServicePage({ service }: { service: ServiceData }) {
  return (
    <>
      <JsonLd />
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
            <div className="aspect-video w-full bg-white/10 rounded-xl flex items-center justify-center">
              <span className="material-symbols-outlined text-white/40 text-[100px]">{service.icon}</span>
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
            <div className="bg-[#f5f5f5] rounded-2xl p-8 aspect-square flex items-center justify-center">
              <span className="material-symbols-outlined text-primary text-[100px]">{service.icon}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-[#f5f5f5] py-20 px-6 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Why Choose Us</h2>
            <p className="text-slate-600">The leading choice for businesses looking to grow through {service.title.toLowerCase()}.</p>
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
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-slate-900 mb-16">Our 4-Step Process</h2>
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

      {/* Contact Form */}
      <section className="py-20 px-6 lg:px-20 bg-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Get a Free {service.title} Consultation</h2>
          <ContactForm />
        </div>
      </section>

      <CTA />
    </>
  );
}
