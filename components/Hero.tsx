export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-piano-black overflow-hidden"
    >
      {/* Piano keys decorative background */}
      <div className="absolute inset-0 opacity-10">
        <div className="flex h-full">
          {Array.from({ length: 30 }).map((_, i) => (
            <div
              key={i}
              className={`flex-1 border-r border-white/20 ${
                [1, 3, 6, 8, 10].includes(i % 12)
                  ? "bg-piano-dark"
                  : "bg-white/5"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-piano-black/60 via-piano-black/40 to-piano-black/80" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <p className="text-gold uppercase tracking-[0.3em] text-sm font-medium mb-4">
          מוסיקה • ילדים • שמחה
        </p>
        <h1 className="text-4xl sm:text-6xl font-bold text-warm-white leading-tight mb-6">
          בית הספר לפסנתר
        </h1>
        <p className="text-ivory/80 text-lg sm:text-xl leading-relaxed mb-10 max-w-xl mx-auto">
          מקום שבו ילדים ונוער מגלים את הקסם שבמוסיקה, צועדים צעד אחר צעד,
          וחוגגים כל הצלחה קטנה בדרך לגדולות.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="bg-gold text-piano-black font-bold px-8 py-3.5 rounded-full text-lg hover:bg-gold-light transition-colors duration-200 shadow-lg"
          >
            השאר פרטים עכשיו
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
