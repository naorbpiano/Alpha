const groups = [
  {
    icon: "🧒",
    title: "ילדים קטנים",
    ages: "גיל 5–8",
    description:
      "שיעורים משחקיים ומהנים שבונים יסודות מוסיקליים חזקים דרך שירים, פסנטרים צבעוניים ותרגילי קצב.",
  },
  {
    icon: "👦",
    title: "ילדים",
    ages: "גיל 8–12",
    description:
      "פיתוח טכניקה, קריאת תווים ורפרטואר מגוון — קלאסי, פופ וג׳אז — בקצב המתאים לכל ילד.",
  },
  {
    icon: "🧑",
    title: "נוער",
    ages: "גיל 12–18",
    description:
      "ליווי מעמיק לתלמידים המתקדמים לבגרות מוסיקה, תחרויות, או פשוט לאהוב את הנגינה.",
  },
];

export default function TargetAudience() {
  return (
    <section id="audience" className="py-20 bg-ivory">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-gold uppercase tracking-widest text-sm font-semibold mb-2">
            למי מיועד
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-piano-black">
            ילדים ונוער בלבד
          </h2>
          <p className="mt-3 text-warm-gray text-lg max-w-xl mx-auto">
            אנחנו מתמחים אך ורק בגילאי ילדות ונוער — כי בגיל הזה כל שיר שנלמד
            הוא זיכרון לכל החיים.
          </p>
          <div className="mt-4 mx-auto w-16 h-1 bg-gold rounded-full" />
        </div>

        <div className="grid sm:grid-cols-3 gap-8">
          {groups.map((g) => (
            <div
              key={g.title}
              className="bg-warm-white rounded-2xl p-8 text-center shadow-sm border border-gold/10 hover:shadow-md transition-shadow"
            >
              <div className="text-5xl mb-4">{g.icon}</div>
              <h3 className="text-xl font-bold text-piano-black mb-1">
                {g.title}
              </h3>
              <span className="inline-block bg-gold/20 text-gold text-xs font-semibold px-3 py-1 rounded-full mb-3">
                {g.ages}
              </span>
              <p className="text-warm-gray text-sm leading-relaxed">
                {g.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
