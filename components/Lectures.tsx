const lectures = [
  {
    icon: "🧠",
    audience: "להורים",
    title: "הרצאות להורים",
    description:
      "מרצים חיצוניים מגיעים במיוחד עבורכם — הורי התלמידים. נושאים כמו: כיצד לתמוך בילד לומד מוסיקה, חינוך מוסיקלי בבית, ועוד. כי ההורה הוא חלק אינטגרלי מהצלחת הילד.",
  },
  {
    icon: "🎯",
    audience: "לילדים",
    title: "סדנאות לתלמידים",
    description:
      "מרצים ומוסיקאים חיצוניים מגיעים לסדנאות מיוחדות לתלמידים — להרחיב אופקים, להכיר סגנונות חדשים, ולהיפגש עם מוסיקאים מקצועיים מעולם האמנות.",
  },
];

export default function Lectures() {
  return (
    <section id="lectures" className="py-20 bg-piano-black">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-gold uppercase tracking-widest text-sm font-semibold mb-2">
            מעבר לשיעורים
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-warm-white">
            הרצאות וסדנאות
          </h2>
          <p className="mt-3 text-ivory/70 text-lg max-w-xl mx-auto">
            אלפא קליד הוא לא רק שיעורי פסנתר — אנחנו מביאים מרצים חיצוניים
            גם עבור ההורים וגם עבור הילדים.
          </p>
          <div className="mt-4 mx-auto w-16 h-1 bg-gold rounded-full" />
        </div>

        <div className="grid sm:grid-cols-2 gap-8">
          {lectures.map((l) => (
            <div
              key={l.title}
              className="bg-piano-dark rounded-2xl p-8 border border-gold/10 hover:border-gold/30 transition-colors"
            >
              <div className="text-5xl mb-4">{l.icon}</div>
              <span className="inline-block bg-gold/20 text-gold text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wide">
                {l.audience}
              </span>
              <h3 className="text-warm-white font-bold text-xl mb-3">
                {l.title}
              </h3>
              <p className="text-ivory/70 leading-relaxed">{l.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-ivory/50 text-sm">
            הנושאים והמועדים מתעדכנים — עקבו אחרינו ברשתות החברתיות לעדכונים
          </p>
        </div>
      </div>
    </section>
  );
}
