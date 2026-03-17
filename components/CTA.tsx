import Link from "next/link";

export default function CTA({ title = "Ready to Grow Your Business?", subtitle = "Get a free, no-obligation consultation and discover how we can help you dominate the Dublin market." }: { title?: string; subtitle?: string }) {
  return (
    <section className="bg-primary py-20 px-6">
      <div className="max-w-4xl mx-auto text-center text-white space-y-8">
        <h2 className="text-4xl md:text-5xl font-black">{title}</h2>
        <p className="text-xl opacity-90 max-w-2xl mx-auto">{subtitle}</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/contact" className="bg-amber-accent text-slate-900 px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform shadow-lg">Get Free Quote</Link>
          <a href="tel:+353831227553" className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-primary transition-colors flex items-center gap-2">
            <span className="material-symbols-outlined">phone</span> +353 83 122 7553
          </a>
        </div>
      </div>
    </section>
  );
}
