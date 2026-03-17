"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/areas", label: "Areas" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="material-symbols-outlined text-primary text-3xl">change_history</span>
            <span className="text-primary text-xl font-black tracking-tight uppercase">Marketing Agency Dublin</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((l) => (
              <Link key={l.href} href={l.href} className="text-slate-600 hover:text-primary font-medium text-sm transition-colors">
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
        <Link href="/contact" className="hidden md:inline-block bg-amber-accent hover:bg-amber-600 text-slate-900 px-6 py-2.5 rounded-lg font-bold text-sm transition-all shadow-sm">
          Get Free Quote
        </Link>
        <button className="md:hidden text-slate-600 z-[60] relative" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <span className="material-symbols-outlined text-3xl">{open ? "close" : "menu"}</span>
        </button>
      </div>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 md:hidden ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={() => setOpen(false)}
      />

      {/* Slide-in menu from right */}
      <nav
        className={`fixed top-0 right-0 h-full w-72 bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex flex-col h-full pt-24 px-8">
          <div className="flex flex-col gap-2">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-slate-800 hover:text-primary font-semibold text-lg py-3 border-b border-slate-100 transition-colors"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
          </div>
          <div className="mt-8">
            <Link
              href="/contact"
              className="block bg-amber-accent hover:bg-amber-600 text-slate-900 px-6 py-4 rounded-lg font-bold text-center transition-all shadow-sm"
              onClick={() => setOpen(false)}
            >
              Get Free Quote
            </Link>
          </div>
          <div className="mt-auto pb-8">
            <a href="tel:+353831227553" className="flex items-center gap-2 text-slate-500 hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-xl">phone</span>
              <span className="font-medium">+353 83 122 7553</span>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
