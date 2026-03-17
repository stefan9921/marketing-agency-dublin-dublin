"use client";
import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  return submitted ? (
    <div className="bg-primary/10 border border-primary rounded-xl p-8 text-center">
      <span className="material-symbols-outlined text-primary text-5xl mb-4">check_circle</span>
      <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
      <p className="text-slate-600">We&apos;ll be in touch within 24 hours.</p>
    </div>
  ) : (
    <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input type="text" placeholder="Your Name" required className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none" />
        <input type="email" placeholder="Email Address" required className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none" />
      </div>
      <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none" />
      <select className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-slate-500">
        <option value="">Select a Service</option>
        <option>SEO</option>
        <option>Google Ads &amp; PPC</option>
        <option>Social Media Marketing</option>
        <option>Local SEO</option>
        <option>Web Design</option>
        <option>Content &amp; Digital Strategy</option>
      </select>
      <textarea placeholder="Tell us about your project..." rows={4} className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none resize-none" />
      <button type="submit" className="w-full bg-amber-accent hover:bg-amber-600 text-slate-900 px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-sm">
        Get Free Quote
      </button>
    </form>
  );
}
