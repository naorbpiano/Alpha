// White-key indices that have a black key AFTER them (standard keyboard pattern)
const BLACK_KEY_AFTER = new Set([0, 1, 3, 4, 5, 7, 8, 10, 11, 12, 14, 15, 17, 18, 19, 21]);

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-piano-black overflow-hidden"
    >
      {/* ── Grand piano silhouette (top-down view) ── */}
      <svg
        viewBox="0 0 1200 820"
        fill="none"
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover opacity-[0.13]"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* ── Piano body outer shell ── */}
        <path
          d="
            M 920,235
            L 920,575
            C 895,600 860,592 820,578
            C 758,556 680,522 590,482
            C 488,437 375,386 262,338
            C 162,296  88,264  44,240
            C 12,222  -4,193  8,163
            C 24,130  68,118 122,116
            C 206,111 348,135 525,162
            C 706,189 860,206 905,218
            C 916,221 920,229 920,235
            Z
          "
          fill="#c9a84c"
          opacity="0.9"
        />

        {/* ── Inner body shadow (gives depth/thickness to the rim) ── */}
        <path
          d="
            M 900,243
            L 900,567
            C 878,588 846,580 808,567
            C 748,546 673,513 584,473
            C 484,429 373,379 262,332
            C 164,291  92,260  52,237
            C 26,222  14,198  24,172
            C 38,143  78,132 128,130
            C 208,125 344,148 516,174
            C 690,199 844,213 890,224
            C 898,226 900,236 900,243
            Z
          "
          fill="#1a1a1a"
          opacity="0.7"
        />

        {/* ── Keyboard housing (right-side rectangular block) ── */}
        <rect x="898" y="235" width="82" height="340" rx="6" fill="#c9a84c" opacity="0.9" />

        {/* ── Keyboard inner face (the playing surface from above) ── */}
        <rect x="904" y="241" width="68" height="328" rx="4" fill="#f5f0e8" opacity="0.95" />

        {/* ── White keys (22 keys, run top-to-bottom in this orientation) ── */}
        {Array.from({ length: 22 }).map((_, i) => (
          <rect
            key={`wk-${i}`}
            x={905}
            y={242 + i * 14.8}
            width={66}
            height={13.8}
            rx={1}
            fill="#fdfaf4"
            stroke="#c9a84c"
            strokeWidth="0.6"
            opacity="0.9"
          />
        ))}

        {/* ── Black keys — appear AFTER certain white keys, shorter depth ── */}
        {Array.from({ length: 22 }).map((_, i) =>
          BLACK_KEY_AFTER.has(i) ? (
            <rect
              key={`bk-${i}`}
              x={905}
              y={242 + i * 14.8 + 7.4}
              width={40}
              height={9.6}
              rx={1.5}
              fill="#1a1a1a"
              opacity="0.88"
            />
          ) : null
        )}

        {/* ── Keyboard / body dividing ridge ── */}
        <line
          x1="902" y1="235"
          x2="902" y2="575"
          stroke="#c9a84c"
          strokeWidth="3"
          opacity="0.6"
        />

        {/* ── Lid prop stick (subtle detail) ── */}
        <line
          x1="760" y1="244"
          x2="820" y2="380"
          stroke="#c9a84c"
          strokeWidth="4"
          strokeLinecap="round"
          opacity="0.5"
        />

        {/* ── Open lid edge (the raised lid casting a thin border) ── */}
        <path
          d="M 920,235 C 916,221 860,206 760,192 C 620,174 450,152 300,140"
          stroke="#c9a84c"
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.45"
          fill="none"
        />
      </svg>

      {/* Gradient overlay — ensures text is readable */}
      <div className="absolute inset-0 bg-gradient-to-b from-piano-black/70 via-piano-black/55 to-piano-black/85" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <p className="text-gold uppercase tracking-[0.3em] text-sm font-medium mb-4">
          פסנתר • הצלחות קטנות • פתח תקווה
        </p>
        <h1 className="text-4xl sm:text-6xl font-bold text-warm-white leading-tight mb-4">
          אלפא קליד
        </h1>
        <p className="text-gold/80 text-xl sm:text-2xl font-medium mb-6">
          בית ספר לפסנתר לילדים ונוער
        </p>
        <p className="text-ivory/80 text-lg sm:text-xl leading-relaxed mb-10 max-w-xl mx-auto">
          אנחנו לא צועקים, לא לוחצים, ולא מצפים לשלמות.
          אנחנו מעצימים כל ילד — צעד אחר צעד, הצלחה אחר הצלחה.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="bg-gold text-piano-black font-bold px-8 py-3.5 rounded-full text-lg hover:bg-gold-light transition-colors duration-200 shadow-lg"
          >
            קביעת פגישת מפתח חינם
          </a>
          <a
            href="#about"
            className="border-2 border-gold/60 text-ivory px-8 py-3.5 rounded-full text-lg hover:border-gold hover:text-gold transition-colors duration-200"
          >
            גלה עוד
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-ivory/40 animate-bounce text-2xl">
        ↓
      </div>
    </section>
  );
}
