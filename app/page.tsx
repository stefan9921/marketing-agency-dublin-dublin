import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Marketing Agency Dublin | SEO, Web Design & Digital Marketing",
  description: "Dublin's top-rated marketing agency. Expert SEO, Google Ads, web design, social media & local SEO services. 150+ clients served. Call +353 83 122 7553.",
  alternates: { canonical: "https://marketing-agency-dublin-dublin.vercel.app" },
};

const services = [
  { icon: "search", title: "SEO", desc: "Boost your visibility on search engines and dominate organic rankings with our proven strategies.", href: "/services/search-engine-optimisation" },
  { icon: "ads_click", title: "Google Ads & PPC", desc: "Targeted PPC campaigns that convert. We optimise your spend for maximum ROI and lead generation.", href: "/services/google-ads-ppc" },
  { icon: "share", title: "Social Media", desc: "Engage your audience across platforms with creative content and strategic social management.", href: "/services/social-media-marketing" },
  { icon: "location_on", title: "Local SEO", desc: "Capture the Dublin market. We help local businesses appear exactly when customers are searching.", href: "/services/local-seo" },
  { icon: "devices", title: "Web Design", desc: "High-converting, stunning custom websites that look great on any device and drive action.", href: "/services/web-design" },
  { icon: "lightbulb", title: "Content & Digital Strategy", desc: "Data-driven content strategies that build authority, drive engagement and support long-term growth.", href: "/services/content-digital-strategy" },
];

const areas = [
  "Naas","Navan","Mullingar","Drogheda","Tallaght","Blackrock","Greystones","Ashbourne",
  "Swords","Malahide","Lucan","Blanchardstown","Bray","Maynooth","Leixlip","Sandyford",
];

export default function Home() {
  return (
    <>
      <JsonLd />
      {/* Hero */}
      <section className="bg-primary text-white pt-20 pb-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="flex flex-col gap-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight">
              Dublin&apos;s Results-Driven <br /><span className="text-yellow-soft">Marketing Agency</span>
            </h1>
            <p className="text-lg md:text-xl opacity-90 leading-relaxed max-w-lg">
              Elevate your brand with high-performance SEO, PPC, and Web Design strategies tailored for sustainable growth in the Irish market.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="bg-amber-accent text-slate-900 px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform shadow-lg">Get Free Quote</Link>
              <Link href="#services" className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-primary transition-colors">Our Services</Link>
            </div>
          </div>
          <div className="relative hidden md:block">
            <div className="rounded-2xl overflow-hidden shadow-2xl border-8 border-white/10 aspect-video">
              <Image src="/images/hero-dashboard.jpg" alt="Marketing analytics dashboard" width={800} height={450} className="w-full h-full object-cover" priority />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-yellow-soft p-6 rounded-xl shadow-xl text-primary font-bold">
              <div className="text-4xl">100%</div>
              <div className="text-xs uppercase tracking-widest">ROI Focused</div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-16 bg-yellow-soft hero-wave"></div>
      </section>

      {/* Trust Bar */}
      <section className="bg-yellow-soft py-10 border-b border-primary/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col gap-1">
              <span className="text-primary text-4xl font-black">150+</span>
              <span className="text-primary/80 font-semibold uppercase tracking-wider text-sm">Clients Served</span>
            </div>
            <div className="flex flex-col gap-1 border-y md:border-y-0 md:border-x border-primary/20 py-6 md:py-0">
              <span className="text-primary text-4xl font-black">10+</span>
              <span className="text-primary/80 font-semibold uppercase tracking-wider text-sm">Years Experience</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-primary text-4xl font-black flex items-center justify-center gap-2">5-Star <span className="material-symbols-outlined">stars</span></span>
              <span className="text-primary/80 font-semibold uppercase tracking-wider text-sm">Google Rating</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white" id="services">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4">Our Marketing Services</h2>
            <div className="h-1.5 w-24 bg-primary mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s) => (
              <Link key={s.href} href={s.href} className="p-8 rounded-xl bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-shadow group block">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                  <span className="material-symbols-outlined text-primary group-hover:text-white text-3xl">{s.icon}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                <p className="text-slate-600 leading-relaxed">{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-24 bg-[#f5f5f5] px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4">What Our Clients Say</h2>
            <div className="h-1.5 w-24 bg-primary mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Sarah Mitchell", role: "Owner, Dublin Café Co.", text: "Our online enquiries tripled within three months. The SEO strategy they built for us was spot on — we're now ranking for keywords we never thought possible." },
              { name: "Mark Thompson", role: "Director, Thompson Construction", text: "We went from page 3 to position 1 for our main keywords. The team really understands the Dublin market and delivered results fast." },
              { name: "Emma Kelly", role: "Founder, Bloom Boutique", text: "The website they designed for us is stunning and actually converts. Our online sales jumped 40% in the first month after launch." },
              { name: "David O'Brien", role: "MD, O'Brien Plumbing Services", text: "Their local SEO work transformed our business. We get 5-10 calls a day now from Google alone. Best investment we've made." },
              { name: "Lisa Brennan", role: "Partner, Brennan & Co Solicitors", text: "Professional, transparent, and genuinely invested in our success. The monthly reports are clear and we can see exactly where our money goes." },
              { name: "James Nolan", role: "CEO, Nolan Fitness", text: "The Google Ads campaign they manage for us delivers a consistent 5x return. They optimise it every week and we see the results in real time." },
            ].map((review, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <span key={j} className="material-symbols-outlined text-amber-400 text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  ))}
                </div>
                <p className="text-slate-600 leading-relaxed mb-6">&ldquo;{review.text}&rdquo;</p>
                <div>
                  <div className="font-bold text-slate-900">{review.name}</div>
                  <div className="text-sm text-slate-500">{review.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Why Choose Marketing Agency Dublin?</h2>
            <div className="space-y-4 text-slate-600 leading-relaxed text-lg">
              <p>We&apos;re a Dublin-based marketing agency that combines deep local market knowledge with cutting-edge digital strategies. Our team of experienced marketers, designers and developers work together to deliver measurable results for businesses across Ireland.</p>
              <p>From startups to established enterprises, we tailor our approach to your specific goals and budget. Every campaign is data-driven, transparent and designed to maximise your return on investment.</p>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="flex items-start gap-3"><span className="material-symbols-outlined text-primary text-2xl mt-1">verified</span><div><h4 className="font-bold">Proven Results</h4><p className="text-sm text-slate-500">Track record of delivering growth</p></div></div>
              <div className="flex items-start gap-3"><span className="material-symbols-outlined text-primary text-2xl mt-1">support_agent</span><div><h4 className="font-bold">Dedicated Support</h4><p className="text-sm text-slate-500">Your own account manager</p></div></div>
              <div className="flex items-start gap-3"><span className="material-symbols-outlined text-primary text-2xl mt-1">insights</span><div><h4 className="font-bold">Data-Driven</h4><p className="text-sm text-slate-500">Decisions backed by analytics</p></div></div>
              <div className="flex items-start gap-3"><span className="material-symbols-outlined text-primary text-2xl mt-1">handshake</span><div><h4 className="font-bold">No Lock-In</h4><p className="text-sm text-slate-500">Month-to-month contracts</p></div></div>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden aspect-square">
            <Image src="/images/team-working.jpg" alt="Our marketing team at work" width={600} height={600} className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Areas */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4">Areas We Serve</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">We provide expert marketing services across Dublin and surrounding areas throughout Leinster.</p>
            <div className="h-1.5 w-24 bg-primary mx-auto rounded-full mt-4"></div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {areas.map((a) => (
              <Link key={a} href={`/areas/${a.toLowerCase()}`} className="bg-[#f5f5f5] hover:bg-primary hover:text-white p-4 rounded-lg text-center font-semibold transition-colors">
                {a}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="w-full h-80">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2380.5!2d-6.2003!3d53.3938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sBurnell+Court%2C+146+Malahide+Rd%2C+Priorswood%2C+Dublin+17!5e0!3m2!1sen!2sie!4v1" width="100%" height="100%" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Marketing Agency Dublin Location"></iframe>
      </section>

      <CTA />
    </>
  );
}
