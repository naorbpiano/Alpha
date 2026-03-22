"use client";

import { useState } from "react";

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

  return (
    <header className="fixed top-0 right-0 left-0 z-50 bg-piano-black/95 backdrop-blur-sm shadow-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        {/* Logo / School Name */}
        <a href="#hero" className="text-gold font-bold text-xl tracking-wide">
          🎹 אלפא קליד
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-5 text-sm text-ivory">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hover:text-gold transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-gold text-piano-black font-semibold px-4 py-1.5 rounded-full hover:bg-gold-light transition-colors duration-200"
          >
            השאר פרטים
          </a>
        </nav>

        {/* Hamburger */}
        <button
          className="lg:hidden text-ivory p-2"
          onClick={() => setOpen(!open)}
          aria-label="תפריט"
        >
          <span className="block w-6 h-0.5 bg-current mb-1.5" />
          <span className="block w-6 h-0.5 bg-current mb-1.5" />
          <span className="block w-6 h-0.5 bg-current" />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="lg:hidden bg-piano-dark px-4 pb-4 flex flex-col gap-3 text-ivory text-sm">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hover:text-gold transition-colors"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-gold text-piano-black font-semibold px-4 py-2 rounded-full text-center hover:bg-gold-light transition-colors"
            onClick={() => setOpen(false)}
          >
            השאר פרטים
          </a>
        </nav>
      )}
    </header>
  );
}
