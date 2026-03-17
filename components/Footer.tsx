import Link from "next/link";

const services = [
  { href: "/services/search-engine-optimisation", label: "SEO" },
  { href: "/services/google-ads-ppc", label: "Google Ads & PPC" },
  { href: "/services/social-media-marketing", label: "Social Media" },
  { href: "/services/local-seo", label: "Local SEO" },
  { href: "/services/web-design", label: "Web Design" },
  { href: "/services/content-digital-strategy", label: "Content & Digital Strategy" },
];

const areas = [
  "Naas", "Navan", "Mullingar", "Drogheda", "Tallaght", "Blackrock", "Greystones", "Ashbourne",
  "Swords", "Malahide", "Lucan", "Blanchardstown", "Bray", "Maynooth", "Leixlip", "Sandyford",
];

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-2xl">change_history</span>
            <span className="text-lg font-black uppercase tracking-tight">Marketing Agency Dublin</span>
          </div>
          <p className="text-white/80 text-sm leading-relaxed">
            Burnell Court, 146 Malahide Rd,<br />Priorswood, Dublin 17,<br />Dublin, D17 A260
          </p>
          <p className="text-white/80 text-sm">
            <a href="tel:+353831227553" className="hover:text-white">+353 83 122 7553</a><br />
            <a href="mailto:marketingagencydublin@gmail.com" className="hover:text-white">marketingagencydublin@gmail.com</a>
          </p>
          <p className="text-white/70 text-xs">Mon-Fri 8am-6pm, Sat 9am-1pm</p>
        </div>
        <div>
          <h4 className="font-bold text-sm uppercase tracking-wider mb-4">Services</h4>
          <ul className="space-y-2">
            {services.map((s) => (
              <li key={s.href}><Link href={s.href} className="text-white/80 hover:text-white text-sm transition-colors">{s.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-sm uppercase tracking-wider mb-4">Areas We Serve</h4>
          <ul className="space-y-2">
            {areas.slice(0, 8).map((a) => (
              <li key={a}><Link href={`/areas/${a.toLowerCase()}`} className="text-white/80 hover:text-white text-sm transition-colors">{a}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-sm uppercase tracking-wider mb-4">Company</h4>
          <ul className="space-y-2">
            <li><Link href="/about" className="text-white/80 hover:text-white text-sm transition-colors">About Us</Link></li>
            <li><Link href="/contact" className="text-white/80 hover:text-white text-sm transition-colors">Contact</Link></li>
            <li><Link href="/privacy-policy" className="text-white/80 hover:text-white text-sm transition-colors">Privacy Policy</Link></li>
            <li><Link href="/terms" className="text-white/80 hover:text-white text-sm transition-colors">Terms of Service</Link></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-white/20 text-center text-white/60 text-sm">
        © {new Date().getFullYear()} Marketing Agency Dublin. All rights reserved.
      </div>
    </footer>
  );
}
