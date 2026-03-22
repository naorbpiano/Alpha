"use client";

import { useEffect, useState } from "react";
import MagneticButton from "./MagneticButton";

/* ── Black-key positions in standard keyboard pattern ── */
const BLACK_KEY_AFTER = new Set([0, 1, 3, 4, 5, 7, 8, 10, 11, 12, 14, 15, 17, 18, 19, 21]);

/* ── Floating music notes data ── */
const NOTES = [
  { char: "♪", x: 8,  y: 15, size: "text-3xl", dur: 6,  delay: 0 },
  { char: "♫", x: 85, y: 22, size: "text-4xl", dur: 7,  delay: 1 },
  { char: "♩", x: 18, y: 68, size: "text-2xl", dur: 5,  delay: 2 },
  { char: "♬", x: 78, y: 72, size: "text-3xl", dur: 8,  delay: 0.5 },
  { char: "♪", x: 42, y: 12, size: "text-xl",  dur: 6,  delay: 3 },
  { char: "♫", x: 60, y: 82, size: "text-2xl", dur: 7,  delay: 1.5 },
  { char: "♩", x: 92, y: 50, size: "text-xl",  dur: 5.5, delay: 2.5 },
  { char: "♪", x: 5,  y: 45, size: "text-2xl", dur: 6.5, delay: 0.8 },
];

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => setLoaded(true), []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-piano-black overflow-hidden"
    >
      {/* ── Radial gold ambient glow ── */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 45%, rgba(201,168,76,0.22) 0%, transparent 70%)",
        }}
      />

      {/* ── Grand piano silhouette (top-down view) ── */}
      <svg
        viewBox="0 0 1200 820"
        fill="none"
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover opacity-[0.11]"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Piano body outer shell */}
        <path
          d="M 920,235 L 920,575 C 895,600 860,592 820,578 C 758,556 680,522 590,482
             C 488,437 375,386 262,338 C 162,296 88,264 44,240 C 12,222 -4,193 8,163
             C 24,130 68,118 122,116 C 206,111 348,135 525,162 C 706,189 860,206 905,218
             C 916,221 920,229 920,235 Z"
          fill="#c9a84c"
        />
        {/* Inner body shadow for depth */}
        <path
          d="M 900,243 L 900,567 C 878,588 846,580 808,567 C 748,546 673,513 584,473
             C 484,429 373,379 262,332 C 164,291 92,260 52,237 C 26,222 14,198 24,172
             C 38,143 78,132 128,130 C 208,125 344,148 516,174 C 690,199 844,213 890,224
             C 898,226 900,236 900,243 Z"
          fill="#1a1a1a"
          opacity="0.7"
        />
        {/* Keyboard housing */}
        <rect x="898" y="235" width="82" height="340" rx="6" fill="#c9a84c" opacity="0.9" />
        {/* Keyboard surface */}
        <rect x="904" y="241" width="68" height="328" rx="4" fill="#f5f0e8" opacity="0.95" />
        {/* White keys */}
        {Array.from({ length: 22 }).map((_, i) => (
          <rect key={`wk-${i}`} x={905} y={242 + i * 14.8} width={66} height={13.8} rx={1}
            fill="#fdfaf4" stroke="#c9a84c" strokeWidth="0.6" opacity="0.9" />
        ))}
        {/* Black keys */}
        {Array.from({ length: 22 }).map((_, i) =>
          BLACK_KEY_AFTER.has(i) ? (
            <rect key={`bk-${i}`} x={905} y={242 + i * 14.8 + 7.4} width={40} height={9.6} rx={1.5}
              fill="#1a1a1a" opacity="0.88" />
          ) : null
        )}
        {/* Lid prop stick */}
        <line x1="760" y1="244" x2="820" y2="380" stroke="#c9a84c" strokeWidth="4" strokeLinecap="round" opacity="0.5" />
        {/* Open lid edge */}
        <path d="M 920,235 C 916,221 860,206 760,192 C 620,174 450,152 300,140"
          stroke="#c9a84c" strokeWidth="3" strokeLinecap="round" opacity="0.45" fill="none" />
      </svg>

      {/* ── Floating music notes ── */}
      {NOTES.map((n, i) => (
        <span
          key={i}
          className={`absolute ${n.size} text-gold/[0.12] select-none pointer-events-none`}
          style={{
            left: `${n.x}%`,
            top: `${n.y}%`,
            animation: `float-slow ${n.dur}s ease-in-out ${n.delay}s infinite`,
          }}
        >
          {n.char}
        </span>
      ))}

      {/* ── Cinematic gradient overlay ── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(26,26,26,0.72) 0%, rgba(26,26,26,0.45) 40%, rgba(26,26,26,0.65) 80%, rgba(26,26,26,0.92) 100%)",
        }}
      />

      {/* ── Vignette (darkened edges) ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 75% 70% at 50% 50%, transparent 50%, rgba(26,26,26,0.55) 100%)",
        }}
      />

      {/* ── Content ── */}
      <div
        className={`relative z-10 text-center px-6 max-w-3xl mx-auto transition-all duration-1000 ease-out ${
          loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Ornamental top detail */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="block w-12 h-px bg-gradient-to-r from-transparent to-gold/60" />
          <span className="text-gold/70 text-xs tracking-[0.5em] uppercase font-medium">
            פסנתר • הצלחות קטנות • פתח תקווה
          </span>
          <span className="block w-12 h-px bg-gradient-to-l from-transparent to-gold/60" />
        </div>

        {/* Title with gold gradient shimmer */}
        <h1 className="font-display text-6xl sm:text-8xl lg:text-9xl font-black leading-none mb-5 text-gold-gradient tracking-tight">
          אלפא קליד
        </h1>

        <p className="text-ivory/90 text-xl sm:text-2xl font-light tracking-wide mb-3">
          בית ספר לפסנתר לילדים ונוער
        </p>

        {/* Decorative gold line */}
        <div className="mx-auto w-20 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mb-8" />

        <p className="text-ivory/70 text-lg sm:text-xl leading-relaxed mb-12 max-w-xl mx-auto font-light">
          אנחנו לא צועקים, לא לוחצים, ולא מצפים לשלמות.
          <br className="hidden sm:block" />
          אנחנו מעצימים כל ילד — צעד אחר צעד, הצלחה אחר הצלחה.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <MagneticButton strength={0.3}>
            <a
              href="#contact"
              className="block bg-gold text-piano-black font-bold px-10 py-4 rounded-full text-lg hover:bg-gold-light transition-all duration-300 shadow-lg animate-[pulse-glow_3s_ease-in-out_infinite]"
            >
              קביעת פגישת מפתח חינם
            </a>
          </MagneticButton>
          <MagneticButton strength={0.25}>
            <a
              href="#about"
              className="block border border-gold/40 text-ivory/80 px-10 py-4 rounded-full text-lg hover:border-gold hover:text-gold hover:bg-gold/5 transition-all duration-300"
            >
              גלה עוד ↓
            </a>
          </MagneticButton>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <div
        className={`absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-1000 delay-700 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <span className="text-ivory/30 text-xs tracking-widest uppercase">גלול</span>
        <span className="block w-px h-8 bg-gradient-to-b from-gold/40 to-transparent animate-bounce" />
      </div>
    </section>
  );
}
