import SectionHeader from "./SectionHeader";

const testimonials = [
  {
    name: "דנה ואבי כהן",
    role: "הורים של יובל, גיל 9",
    quote: "מאז שיובל התחיל ללמוד כאן, הוא רץ לשיעורים. לא מאמינים שילד יכול לאהוב תרגול — עד שראינו את זה קורה.",
  },
  {
    name: "מיכל לוי",
    role: "אמא של רוני, גיל 7",
    quote: "שיעור הניסיון שינה הכל. רוני יצאה משם עם חיוך מאוזן לאוזן ושיר בראש. מאז לא פסק.",
  },
  {
    name: "ראובן ושרה שפירא",
    role: "הורים של תמר, גיל 13",
    quote: "תמר לומדת שלוש שנים כבר. ההתקדמות מדהימה, אבל מה שיותר חשוב — הביטחון העצמי שלה בכלל צמח.",
  },
  {
    name: "ליאת גולדברג",
    role: "אמא של אדם, גיל 10",
    quote: "הצוות כאן מדהים. הם מכירים כל ילד אישית, יודעים מה מניע אותו, ויודעים איך לחגוג איתו כשמצליח.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-piano-black relative overflow-hidden">
      {/* Ambient background */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 50% at 70% 30%, rgba(201,168,76,0.15) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <SectionHeader
          eyebrow="מה אומרים עלינו"
          title="המלצות"
          light
        />

        <div className="grid sm:grid-cols-2 gap-7">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="gold-glow-card bg-piano-dark rounded-2xl p-8 border border-gold/10 relative"
            >
              {/* Large quote mark */}
              <span className="absolute top-5 right-6 text-gold/15 text-6xl font-serif leading-none select-none">
                &ldquo;
              </span>

              {/* Stars */}
              <div className="flex gap-0.5 mb-5 relative z-10">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="text-gold text-lg">★</span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-ivory/75 text-base leading-relaxed mb-6 relative z-10">
                {t.quote}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 relative z-10">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-gold/30 to-gold/10 flex items-center justify-center text-gold font-bold text-sm border border-gold/20">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-warm-white font-semibold text-sm">{t.name}</p>
                  <p className="text-ivory/35 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
