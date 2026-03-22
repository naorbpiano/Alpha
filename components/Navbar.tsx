"use client";

import { useState, useEffect } from "react";

const links = [
  { href: "#about", label: "אודות" },
  { href: "#methodology", label: "השיטה" },
  { href: "#small-wins", label: "הצלחות קטנות" },
  { href: "#location", label: "מיקום ושעות" },
  { href: "#lectures", label: "הרצאות" },
  { href: "#gallery", label: "גלריה" },
  { href: "#testimonials", label: "המלצות" },
  { href: "#contact", label: "צור קשר" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-piano-black/85 backdrop-blur-xl shadow-lg shadow-black/20 border-b border-gold/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          className="text-gold font-black text-xl tracking-wide hover:opacity-80 transition-opacity flex items-center gap-2"
        >
          <svg viewBox="0 0 24 24" className="w-6 h-6 fill-gold" aria-hidden="true">
            <path d="M21 2H3a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h2v3l3-3h13a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zm-7 11h-1v2h-2v-2H9v-2h2V9h2v2h1v2zm4-2h-2V9h2v2z"/>
          </svg>
          <span className="font-display">אלפא קליד</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6 text-sm">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-ivory/70 hover:text-gold transition-colors duration-200 relative after:absolute after:bottom-[-4px] after:right-0 after:w-0 after:h-[2px] after:bg-gold after:transition-all after:duration-300 hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-gold text-piano-black font-bold px-5 py-2 rounded-full hover:bg-gold-light transition-all duration-300 shadow-md hover:shadow-gold/20"
          >
            השאר פרטים
          </a>
        </nav>

        {/* Hamburger */}
        <button
          className="lg:hidden text-ivory p-2 relative w-8 h-8"
          onClick={() => setOpen(!open)}
          aria-label="תפריט"
        >
          <span
            className={`absolute right-1 block w-6 h-0.5 bg-current transition-all duration-300 ${
              open ? "top-[14px] rotate-45" : "top-[8px]"
            }`}
          />
          <span
            className={`absolute right-1 top-[14px] block w-6 h-0.5 bg-current transition-all duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`absolute right-1 block w-6 h-0.5 bg-current transition-all duration-300 ${
              open ? "top-[14px] -rotate-45" : "top-[20px]"
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-out ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="bg-piano-dark/95 backdrop-blur-xl px-6 pb-5 flex flex-col gap-3 text-ivory/80 text-sm border-t border-gold/10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="py-1 hover:text-gold transition-colors"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-gold text-piano-black font-bold px-5 py-2.5 rounded-full text-center mt-1 hover:bg-gold-light transition-colors"
            onClick={() => setOpen(false)}
          >
            השאר פרטים
          </a>
        </nav>
      </div>
    </header>
  );
}
