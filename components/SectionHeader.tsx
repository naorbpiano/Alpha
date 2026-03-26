export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  light = false,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  light?: boolean;
}) {
  return (
    <div className="text-center mb-16">
      {/* Eyebrow */}
      <p className="text-gold uppercase tracking-[0.25em] text-xs sm:text-sm font-semibold mb-3">
        {eyebrow}
      </p>

      {/* Title with gold gradient */}
      <h2
        className="font-display text-4xl sm:text-5xl lg:text-6xl font-black leading-tight text-gold-gradient"
      >
        {title}
      </h2>

      {/* Ornamental divider */}
      <div className="flex items-center justify-center gap-3 mt-5">
        <span className="block w-10 sm:w-16 h-px bg-gradient-to-r from-transparent to-gold/50" />
        <svg viewBox="0 0 24 24" className="w-5 h-5 text-gold/60" fill="currentColor" aria-hidden="true">
          <path d="M12 3v10.586l3.293-3.293 1.414 1.414L12 16.414l-4.707-4.707 1.414-1.414L12 13.586V3z" opacity="0" />
          <text x="4" y="18" fontSize="18" fontFamily="serif">♪</text>
        </svg>
        <span className="block w-10 sm:w-16 h-px bg-gradient-to-l from-transparent to-gold/50" />
      </div>

      {/* Subtitle */}
      {subtitle && (
        <p
          className={`mt-5 text-lg max-w-xl mx-auto leading-relaxed ${
            light ? "text-ivory/60" : "text-warm-gray"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
