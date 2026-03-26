"use client";

import { useEffect, useState } from "react";
import MagneticButton from "./MagneticButton";

/* ── Piano keyboard data ── */
// 2 full octaves: C D E F G A B × 2 = 14 white keys
// Black keys appear after: C(0) D(1) F(3) G(4) A(5) — per octave
const WHITE_COUNT = 14;
const BLACK_AFTER = new Set([0, 1, 3, 4, 5, 7, 8, 10, 11, 12]);

/* ── Hero stats ── */
const STATS = [
  { value: "50+", label: "תלמידים" },
  { value: "45′", label: "שיעור פרטני" },
  { value: "2×", label: "הופעות בשנה" },
  { value: "100%", label: "שביעות רצון" },
];

export default function Hero() {
  const [phase, setPhase] = useState(0);
  const [hoveredKey, setHoveredKey] = useState<number | null>(null);
  const [pressedKey, setPressedKey] = useState<number | null>(null);

  useEffect(() => {
    const t = [
      setTimeout(() => setPhase(1), 120),   // eyebrow
      setTimeout(() => setPhase(2), 380),   // word 1
      setTimeout(() => setPhase(3), 640),   // word 2
      setTimeout(() => setPhase(4), 960),   // sub-title
      setTimeout(() => setPhase(5), 1220),  // body
      setTimeout(() => setPhase(6), 1520),  // CTAs
      setTimeout(() => setPhase(7), 1820),  // stats
      setTimeout(() => setPhase(8), 2100),  // keyboard + scroll
    ];
    return () => t.forEach(clearTimeout);
  }, []);

  const slide = (visible: boolean) =>
    visible
      ? "opacity-100 translate-y-0"
      : "opacity-0 translate-y-10";

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center bg-piano-black overflow-hidden"
    >
      {/* ── Radial gold ambient ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 55% at 50% 42%, rgba(201,168,76,0.18) 0%, transparent 70%)",
        }}
      />

      {/* ── Grand piano silhouette ── */}
      <svg
        viewBox="0 0 1200 820"
        fill="none"
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover opacity-[0.10]"
        preserveAspectRatio="xMidYMid slice"
      >
        <path
          d="M 920,235 L 920,575 C 895,600 860,592 820,578 C 758,556 680,522 590,482
             C 488,437 375,386 262,338 C 162,296 88,264 44,240 C 12,222 -4,193 8,163
             C 24,130 68,118 122,116 C 206,111 348,135 525,162 C 706,189 860,206 905,218
             C 916,221 920,229 920,235 Z"
          fill="#c9a84c"
        />
        <path
          d="M 900,243 L 900,567 C 878,588 846,580 808,567 C 748,546 673,513 584,473
             C 484,429 373,379 262,332 C 164,291 92,260 52,237 C 26,222 14,198 24,172
             C 38,143 78,132 128,130 C 208,125 344,148 516,174 C 690,199 844,213 890,224
             C 898,226 900,236 900,243 Z"
          fill="#1a1a1a"
          opacity="0.7"
        />
        <rect x="898" y="235" width="82" height="340" rx="6" fill="#c9a84c" opacity="0.9" />
        <rect x="904" y="241" width="68" height="328" rx="4" fill="#f5f0e8" opacity="0.95" />
        {Array.from({ length: 22 }).map((_, i) => (
          <rect key={`wk-${i}`} x={905} y={242 + i * 14.8} width={66} height={13.8} rx={1}
            fill="#fdfaf4" stroke="#c9a84c" strokeWidth="0.6" opacity="0.9" />
        ))}
        {Array.from({ length: 22 }).map((_, i) =>
          [0,1,3,4,5,7,8,10,11,12,14,15,17,18,19,21].includes(i) ? (
            <rect key={`bk-${i}`} x={905} y={242 + i * 14.8 + 7.4} width={40} height={9.6} rx={1.5}
              fill="#1a1a1a" opacity="0.88" />
          ) : null
        )}
      </svg>

      {/* ── Floating music notes ── */}
      {[
        { char: "♪", x: 8,  y: 15, size: "text-3xl", dur: 6,  delay: 0 },
        { char: "♫", x: 85, y: 22, size: "text-4xl", dur: 7,  delay: 1 },
        { char: "♩", x: 18, y: 68, size: "text-2xl", dur: 5,  delay: 2 },
        { char: "♬", x: 78, y: 72, size: "text-3xl", dur: 8,  delay: 0.5 },
        { char: "♪", x: 42, y: 12, size: "text-xl",  dur: 6,  delay: 3 },
        { char: "♫", x: 60, y: 82, size: "text-2xl", dur: 7,  delay: 1.5 },
        { char: "♩", x: 92, y: 50, size: "text-xl",  dur: 5.5, delay: 2.5 },
        { char: "♪", x: 5,  y: 45, size: "text-2xl", dur: 6.5, delay: 0.8 },
      ].map((n, i) => (
        <span
          key={i}
          className={`absolute ${n.size} text-gold/[0.10] select-none pointer-events-none`}
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
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(26,26,26,0.65) 0%, rgba(26,26,26,0.35) 40%, rgba(26,26,26,0.55) 75%, rgba(26,26,26,1) 100%)",
        }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto w-full flex-1 flex flex-col items-center justify-center pb-36">

        {/* Eyebrow */}
        <div className={`flex items-center justify-center gap-3 mb-8 transition-all duration-700 ease-out ${slide(phase >= 1)}`}>
          <span className="block w-16 h-px bg-gradient-to-r from-transparent to-gold/60" />
          <span className="text-gold/70 text-xs tracking-[0.45em] uppercase font-semibold">
            פסנתר · הצלחות קטנות · פתח תקווה
          </span>
          <span className="block w-16 h-px bg-gradient-to-l from-transparent to-gold/60" />
        </div>

        {/* Headline — word by word */}
        <h1 className="font-display font-black leading-none mb-6 overflow-hidden">
          <span
            className={`inline-block text-gold-gradient text-7xl sm:text-9xl lg:text-[11rem] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${slide(phase >= 2)}`}
          >
            אלפא&nbsp;
          </span>
          <span
            className={`inline-block text-gold-gradient text-7xl sm:text-9xl lg:text-[11rem] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] delay-100 ${slide(phase >= 3)}`}
          >
            קליד
          </span>
        </h1>

        {/* Sub-title */}
        <p className={`text-ivory/85 text-xl sm:text-2xl font-light tracking-wide mb-2 transition-all duration-700 ease-out ${slide(phase >= 4)}`}>
          בית ספר לפסנתר לילדים ונוער
        </p>

        {/* Decorative line */}
        <div className={`mx-auto w-20 h-px bg-gradient-to-r from-transparent via-gold to-transparent mb-7 transition-all duration-700 ease-out ${slide(phase >= 4)}`} />

        {/* Body */}
        <p className={`text-ivory/65 text-lg sm:text-xl leading-relaxed mb-12 max-w-lg mx-auto font-light transition-all duration-700 ease-out ${slide(phase >= 5)}`}>
          אנחנו לא צועקים, לא לוחצים, ולא מצפים לשלמות.
          <br className="hidden sm:block" />
          מעצימים כל ילד — צעד אחר צעד, הצלחה אחר הצלחה.
        </p>

        {/* CTAs */}
        <div className={`flex flex-col sm:flex-row gap-4 justify-center mb-14 transition-all duration-700 ease-out ${slide(phase >= 6)}`}>
          <MagneticButton strength={0.3}>
            <a
              href="#contact"
              className="block bg-gold text-piano-black font-black px-10 py-4 rounded-full text-lg hover:bg-gold-light transition-all duration-300 shadow-xl shadow-gold/20 animate-[pulse-glow_3s_ease-in-out_infinite]"
            >
              קביעת פגישת מפתח חינם
            </a>
          </MagneticButton>
          <MagneticButton strength={0.25}>
            <a
              href="#about"
              className="block border border-gold/35 text-ivory/75 px-10 py-4 rounded-full text-lg hover:border-gold hover:text-gold hover:bg-gold/5 transition-all duration-300"
            >
              גלה עוד ↓
            </a>
          </MagneticButton>
        </div>

        {/* ── Trust stats strip ── */}
        <div className={`transition-all duration-700 ease-out ${slide(phase >= 7)}`}>
          <div className="flex flex-wrap justify-center gap-8 sm:gap-12">
            {STATS.map((s, i) => (
              <div key={i} className="text-center">
                <div className="font-display font-black text-3xl sm:text-4xl text-gold-gradient">
                  {s.value}
                </div>
                <div className="text-ivory/40 text-xs mt-1 tracking-wide">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Interactive piano keyboard ── */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-20 sm:h-24 transition-all duration-1000 ease-out ${
          phase >= 8 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
        aria-hidden="true"
      >
        {/* White keys */}
        <div className="relative flex w-full h-full">
          {Array.from({ length: WHITE_COUNT }).map((_, i) => (
            <div
              key={`wk-${i}`}
              className="relative flex-1 h-full border-r border-piano-black/60 transition-all duration-150"
              style={{
                background:
                  hoveredKey === i
                    ? "rgba(201,168,76,0.85)"
                    : pressedKey === i
                    ? "rgba(201,168,76,1)"
                    : "rgba(245,240,232,0.12)",
                boxShadow:
                  hoveredKey === i
                    ? "inset 0 -4px 12px rgba(201,168,76,0.5)"
                    : "none",
              }}
              onMouseEnter={() => setHoveredKey(i)}
              onMouseLeave={() => {
                setHoveredKey(null);
                setPressedKey(null);
              }}
              onMouseDown={() => setPressedKey(i)}
              onMouseUp={() => setPressedKey(null)}
            />
          ))}

          {/* Black keys — positioned absolutely */}
          {Array.from({ length: WHITE_COUNT }).map((_, i) =>
            BLACK_AFTER.has(i) ? (
              <div
                key={`bk-${i}`}
                className="absolute top-0 z-10 transition-all duration-150"
                style={{
                  left: `calc(${((i + 1) / WHITE_COUNT) * 100}% - ${100 / WHITE_COUNT / 2}%)`,
                  width: `${(100 / WHITE_COUNT) * 0.6}%`,
                  height: "58%",
                  background: "rgba(20,18,15,0.96)",
                  borderRadius: "0 0 4px 4px",
                  boxShadow: "2px 4px 8px rgba(0,0,0,0.6)",
                }}
              />
            ) : null
          )}
        </div>

        {/* Gradient fade above keyboard */}
        <div
          className="absolute -top-12 left-0 right-0 h-12 pointer-events-none"
          style={{
            background: "linear-gradient(to bottom, transparent, rgba(26,26,26,0.8))",
          }}
        />
      </div>

      {/* ── Scroll indicator ── */}
      <div
        className={`absolute bottom-24 sm:bottom-28 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 transition-all duration-1000 ease-out ${
          phase >= 8 ? "opacity-100" : "opacity-0"
        }`}
      >
        <span className="text-ivory/25 text-[10px] tracking-[0.35em] uppercase">גלול</span>
        <span className="block w-px h-7 bg-gradient-to-b from-gold/35 to-transparent animate-bounce" />
      </div>
    </section>
  );
}
