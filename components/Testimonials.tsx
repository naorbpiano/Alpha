const testimonials = [
  {
    name: "דנה ואבי כהן",
    role: "הורים של יובל, גיל 9",
    quote:
      "מאז שיובל התחיל ללמוד כאן, הוא רץ לשיעורים. לא מאמינים שילד יכול לאהוב תרגול — עד שראינו את זה קורה.",
    stars: 5,
  },
  {
    name: "מיכל לוי",
    role: "אמא של רוני, גיל 7",
    quote:
      "שיעור הניסיון שינה הכל. רוני יצאה משם עם חיוך מאוזן לאוזן ושיר בראש. מאז לא פסק.",
    stars: 5,
  },
  {
    name: "ראובן ושרה שפירא",
    role: "הורים של תמר, גיל 13",
    quote:
      "תמר לומדת שלוש שנים כבר. ההתקדמות מדהימה, אבל מה שיותר חשוב — הביטחון העצמי שלה בכלל צמח.",
    stars: 5,
  },
  {
    name: "ליאת גולדברג",
    role: "אמא של אדם, גיל 10",
    quote:
      "הצוות כאן מדהים. הם מכירים כל ילד אישית, יודעים מה מניע אותו, ויודעים איך לחגוג איתו כשמצליח.",
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-piano-black">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-gold uppercase tracking-widest text-sm font-semibold mb-2">
            מה אומרים עלינו
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-warm-white">
            המלצות
          </h2>
          <div className="mt-4 mx-auto w-16 h-1 bg-gold rounded-full" />
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-piano-dark rounded-2xl p-7 border border-gold/10 hover:border-gold/30 transition-colors"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <span key={i} className="text-gold">★</span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-ivory/80 text-base leading-relaxed mb-5">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center text-gold font-bold text-sm">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-warm-white font-semibold text-sm">{t.name}</p>
                  <p className="text-ivory/40 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
