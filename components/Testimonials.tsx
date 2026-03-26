import SectionHeader from "./SectionHeader";

const testimonials = [
  {
    name: "דנה ואבי כהן",
    role: "הורים של יובל, גיל 9",
    quote:
      "מאז שיובל התחיל ללמוד כאן, הוא רץ לשיעורים. לא מאמינים שילד יכול לאהוב תרגול — עד שראינו את זה קורה.",
    initial: "כ",
  },
  {
    name: "מיכל לוי",
    role: "אמא של רוני, גיל 7",
    quote:
      "שיעור הניסיון שינה הכל. רוני יצאה משם עם חיוך מאוזן לאוזן ושיר בראש. מאז לא פסק.",
    initial: "ל",
  },
  {
    name: "ראובן ושרה שפירא",
    role: "הורים של תמר, גיל 13",
    quote:
      "תמר לומדת שלוש שנים כבר. ההתקדמות מדהימה, אבל מה שיותר חשוב — הביטחון העצמי שלה בכלל צמח.",
    initial: "ש",
  },
  {
    name: "ליאת גולדברג",
    role: "אמא של אדם, גיל 10",
    quote:
      "הצוות כאן מדהים. הם מכירים כל ילד אישית, יודעים מה מניע אותו, ויודעים איך לחגוג איתו כשמצליח.",
    initial: "ג",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-piano-black relative overflow-hidden">
      {/* Ambient background */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 55% 45% at 75% 25%, rgba(201,168,76,0.18) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <SectionHeader eyebrow="מה אומרים עלינו" title="המלצות" light />

        {/* Staggered grid: cards 2 & 4 are offset downward on desktop */}
        <div className="grid sm:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`gold-glow-card bg-piano-dark rounded-2xl p-8 border border-gold/10 relative
                ${i % 2 === 1 ? "sm:mt-10" : ""}`}
            >
              {/* Large background quote mark */}
              <span
                className="absolute top-4 right-5 text-gold/10 select-none pointer-events-none font-display"
                style={{ fontSize: "7rem", lineHeight: 1 }}
                aria-hidden="true"
              >
                &ldquo;
              </span>

              {/* Stars */}
              <div className="flex gap-0.5 mb-5 relative z-10">
                {Array.from({ length: 5 }).map((_, si) => (
                  <svg key={si} viewBox="0 0 24 24" className="w-4 h-4 fill-gold" aria-hidden="true">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-ivory/75 text-base leading-relaxed mb-7 relative z-10">
                {t.quote}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 relative z-10 border-t border-gold/8 pt-5">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold/40 to-gold/10 flex items-center justify-center text-gold font-bold font-display border border-gold/25">
                  {t.initial}
                </div>
                <div>
                  <p className="text-warm-white font-semibold text-sm">{t.name}</p>
                  <p className="text-ivory/35 text-xs mt-0.5">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
