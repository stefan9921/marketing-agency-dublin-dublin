"use client";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/areas", label: "Areas" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
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
        <button className="md:hidden text-slate-600" onClick={() => setOpen(!open)}>
          <span className="material-symbols-outlined text-3xl">{open ? "close" : "menu"}</span>
        </button>
      </div>
      {open && (
        <nav className="md:hidden bg-white border-t border-slate-100 px-6 py-4 flex flex-col gap-3">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} className="text-slate-700 font-medium py-2" onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
          <Link href="/contact" className="bg-amber-accent text-slate-900 px-6 py-3 rounded-lg font-bold text-sm text-center" onClick={() => setOpen(false)}>
            Get Free Quote
          </Link>
        </nav>
      )}
    </header>
  );
}
