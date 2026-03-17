import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: { absolute: "Marketing Agency Dublin | SEO, Web Design & Digital Marketing" },
  description: "Dublin's top-rated marketing agency. Expert SEO, Google Ads, web design, social media & local SEO services. 150+ clients served. Call +353 83 122 7553.",
  alternates: { canonical: "https://marketing-agency-dublin-dublin.vercel.app" },
  openGraph: {
    title: "Marketing Agency Dublin | SEO, Web Design & Digital Marketing",
    description: "Dublin's top-rated marketing agency. Expert SEO, Google Ads, web design, social media & local SEO services. 150+ clients served.",
    url: "https://marketing-agency-dublin-dublin.vercel.app",
    siteName: "Marketing Agency Dublin",
    locale: "en_IE",
    type: "website",
  },
};

const services = [
  { icon: "search", title: "Search Engine Optimisation", desc: "Boost your visibility on search engines and dominate organic rankings with proven SEO strategies tailored for the Irish market.", href: "/services/search-engine-optimisation" },
  { icon: "ads_click", title: "Google Ads & PPC", desc: "Targeted PPC campaigns that convert. We optimise your ad spend for maximum ROI and qualified lead generation across Dublin.", href: "/services/google-ads-ppc" },
  { icon: "share", title: "Social Media Marketing", desc: "Engage your audience across Facebook, Instagram, LinkedIn and TikTok with creative content and strategic social management.", href: "/services/social-media-marketing" },
  { icon: "location_on", title: "Local SEO", desc: "Capture the Dublin market with Google Business Profile optimisation, local citations and geo-targeted strategies.", href: "/services/local-seo" },
  { icon: "devices", title: "Web Design & Development", desc: "High-converting, custom websites built with modern technology. Mobile-first design that looks great and drives action.", href: "/services/web-design" },
  { icon: "lightbulb", title: "Content & Digital Strategy", desc: "Data-driven content strategies that build authority, drive engagement and support long-term sustainable business growth.", href: "/services/content-digital-strategy" },
];

const areas = [
  "Naas","Navan","Mullingar","Drogheda","Tallaght","Blackrock","Greystones","Ashbourne",
  "Swords","Malahide","Lucan","Blanchardstown","Bray","Maynooth","Leixlip","Sandyford",
];

const reviews = [
  { name: "Sarah M.", business: "E-commerce Store Owner", rating: 5, text: "Our online sales increased by 340% in six months. The SEO and Google Ads strategy they built was a game-changer for our business." },
  { name: "James O'Brien", business: "Local Plumbing Company", rating: 5, text: "We went from zero online presence to ranking #1 for plumber in our area. The phone hasn't stopped ringing since." },
  { name: "Aoife Kelly", business: "Dental Practice Manager", rating: 5, text: "Professional, responsive, and they actually deliver on their promises. Our website traffic tripled and new patient enquiries are up 200%." },
  { name: "Mark Doyle", business: "Restaurant Owner, Dublin 4", rating: 5, text: "The local SEO work transformed our Google Business Profile. We're now consistently in the top 3 map results and bookings are through the roof." },
  { name: "Claire Fitzgerald", business: "Solicitor", rating: 5, text: "They redesigned our website and handled our entire digital marketing. The ROI has been incredible — best investment we've made in the practice." },
  { name: "Declan Murphy", business: "Construction Company Director", rating: 5, text: "Straight talkers who know their stuff. They explained everything in plain English and the results speak for themselves. Highly recommend." },
];

const homeFaq = [
  { q: "How much does a marketing agency cost in Dublin?", a: "Marketing agency costs in Dublin vary depending on the services you need. SEO packages typically start from €500/month, web design projects from €2,000, and PPC management from €300/month plus ad spend. We offer custom packages tailored to your budget and goals — contact us for a free, no-obligation quote." },
  { q: "What does a marketing agency do?", a: "A marketing agency helps businesses grow by managing their online presence, driving traffic, and generating leads. At Marketing Agency Dublin, we provide SEO, Google Ads, social media marketing, web design, local SEO, and content strategy — all designed to increase your visibility and revenue." },
  { q: "How to choose a marketing agency in Dublin?", a: "Look for a Dublin marketing agency with proven results, transparent reporting, and experience in your industry. Check their case studies, read client reviews, and ensure they offer month-to-month contracts. At Marketing Agency Dublin, we provide all of this plus a dedicated account manager for every client." },
  { q: "How long does SEO take to show results?", a: "SEO typically takes 3-6 months to show meaningful improvements in rankings and traffic. However, some quick wins can be achieved within weeks through technical fixes and on-page optimisation. Our Dublin SEO agency provides monthly reports so you can track progress from day one." },
  { q: "Is hiring a marketing agency worth it for small businesses?", a: "Absolutely. A professional marketing agency brings expertise, tools, and strategies that would cost significantly more to build in-house. For Dublin small businesses, partnering with an agency like ours means accessing senior-level marketing talent at a fraction of the cost of hiring a full-time team." },
];

export default function Home() {
  return (
    <>
      <JsonLd isHomepage faq={homeFaq} />

      {/* Hero */}
      <section className="bg-primary text-white pt-20 pb-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="flex flex-col gap-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight">
              Dublin&apos;s Results-Driven <br /><span className="text-yellow-soft">Marketing Agency</span>
            </h1>
            <p className="text-lg md:text-xl opacity-90 leading-relaxed max-w-lg">
              Elevate your brand with high-performance SEO, PPC, and web design strategies tailored for sustainable growth in the Irish market. We&apos;re the marketing agency Dublin businesses trust for measurable results.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="bg-amber-accent text-slate-900 px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform shadow-lg">Get Free Quote</Link>
              <Link href="#services" className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-primary transition-colors">Our Services</Link>
            </div>
          </div>
          <div className="relative hidden md:block">
            <div className="rounded-2xl overflow-hidden shadow-2xl border-8 border-white/10 aspect-video">
              <Image src="/images/hero-dashboard.jpg" alt="Marketing analytics dashboard showing SEO performance metrics for a Dublin business" width={700} height={394} className="w-full h-full object-cover" priority />
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
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">From SEO and web design to Google Ads and social media, our Dublin marketing agency delivers comprehensive digital solutions that drive growth.</p>
            <div className="h-1.5 w-24 bg-primary mx-auto rounded-full mt-4"></div>
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

      {/* About / Why Choose Us */}
      <section className="py-24 bg-[#f5f5f5] px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Why Choose Marketing Agency Dublin?</h2>
            <div className="space-y-4 text-slate-600 leading-relaxed text-lg">
              <p>We&apos;re a Dublin-based marketing agency that combines deep local market knowledge with cutting-edge digital strategies. Our team of experienced marketers, designers and developers work together to deliver measurable results for businesses across Ireland.</p>
              <p>Whether you need a <Link href="/services/search-engine-optimisation" className="text-primary font-semibold hover:underline">Dublin SEO agency</Link> to boost your organic rankings, a <Link href="/services/web-design" className="text-primary font-semibold hover:underline">web design company in Dublin</Link> to build a high-converting website, or a complete digital marketing strategy, our agency delivers results you can measure.</p>
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
            <Image src="/images/team-working.jpg" alt="Marketing Agency Dublin team collaborating on a digital strategy for an Irish client" width={600} height={600} className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Detailed Content Section for SEO */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-4xl mx-auto space-y-8 text-lg text-slate-600 leading-relaxed">
          <div className="rounded-xl overflow-hidden mb-4">
            <Image src="/images/about-office.jpg" alt="Marketing Agency Dublin office where our team plans digital marketing campaigns for Irish businesses" width={900} height={400} className="w-full h-auto object-cover rounded-xl" />
          </div>
          <h2 className="text-3xl font-bold text-slate-900">Full-Service Marketing Agency in Dublin</h2>
          <p>Marketing Agency Dublin is a full-service digital marketing agency located at Burnell Court, 146 Malahide Rd, Priorswood, Dublin 17. We specialise in helping Irish businesses grow through strategic <Link href="/services/search-engine-optimisation" className="text-primary font-semibold hover:underline">search engine optimisation</Link>, professional <Link href="/services/web-design" className="text-primary font-semibold hover:underline">website design and development</Link>, and targeted <Link href="/services/google-ads-ppc" className="text-primary font-semibold hover:underline">Google Ads campaigns</Link>.</p>
          <p>As a leading SEO agency in Dublin, we understand the unique challenges that Irish businesses face in the digital landscape. Whether you&apos;re a local shop looking to dominate Google Maps or a growing company targeting customers across Ireland, our team develops custom marketing strategies that deliver measurable results.</p>
          <p>Our <Link href="/services/local-seo" className="text-primary font-semibold hover:underline">local SEO services</Link> help Dublin businesses appear at the top of local search results, while our <Link href="/services/social-media-marketing" className="text-primary font-semibold hover:underline">social media marketing</Link> builds brand awareness and community engagement. For businesses looking to establish thought leadership, our <Link href="/services/content-digital-strategy" className="text-primary font-semibold hover:underline">content and digital strategy</Link> service creates compelling content that attracts and converts your ideal customers.</p>
          <p>We serve businesses not only in Dublin city but across the greater Leinster region, including <Link href="/areas/naas" className="text-primary font-semibold hover:underline">Naas</Link>, <Link href="/areas/drogheda" className="text-primary font-semibold hover:underline">Drogheda</Link>, <Link href="/areas/navan" className="text-primary font-semibold hover:underline">Navan</Link>, <Link href="/areas/swords" className="text-primary font-semibold hover:underline">Swords</Link>, <Link href="/areas/tallaght" className="text-primary font-semibold hover:underline">Tallaght</Link>, and <Link href="/areas/sandyford" className="text-primary font-semibold hover:underline">Sandyford</Link>. No matter where your business is located, we bring the same level of expertise and dedication to every client.</p>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-24 bg-primary text-white px-6" id="reviews">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">What Our Clients Say</h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">Real results from real Dublin businesses. Here&apos;s what our clients have to say about working with us.</p>
            <div className="h-1.5 w-24 bg-yellow-soft mx-auto rounded-full mt-4"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((r, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/10">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: r.rating }).map((_, j) => (
                    <span key={j} className="material-symbols-outlined text-yellow-soft text-xl">star</span>
                  ))}
                </div>
                <p className="text-white/90 leading-relaxed mb-6">&ldquo;{r.text}&rdquo;</p>
                <div>
                  <p className="font-bold">{r.name}</p>
                  <p className="text-white/60 text-sm">{r.business}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-[#f5f5f5] px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-slate-600 text-lg">Common questions about hiring a marketing agency in Dublin.</p>
            <div className="h-1.5 w-24 bg-primary mx-auto rounded-full mt-4"></div>
          </div>
          <div className="space-y-6">
            {homeFaq.map((f, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
                <h3 className="text-lg font-bold mb-2">{f.q}</h3>
                <p className="text-slate-600">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas */}
      <section className="py-24 bg-white px-6" id="areas">
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
