import SectionHeader from "./SectionHeader";

const lectures = [
  {
    icon: "🧠",
    audience: "להורים",
    title: "הרצאות להורים",
    description:
      "מרצים חיצוניים מגיעים במיוחד עבורכם — הורי התלמידים. נושאים כמו: כיצד לתמוך בילד לומד מוסיקה, חינוך מוסיקלי בבית, ועוד.",
  },
  {
    icon: "🎯",
    audience: "לילדים",
    title: "סדנאות לתלמידים",
    description:
      "מרצים ומוסיקאים חיצוניים מגיעים לסדנאות מיוחדות — להרחיב אופקים, להכיר סגנונות חדשים, ולהיפגש עם מוסיקאים מקצועיים.",
  },
];

export default function Lectures() {
  return (
    <section id="lectures" className="py-24 bg-piano-black relative overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 50% 50% at 30% 50%, rgba(201,168,76,0.12) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <SectionHeader
          eyebrow="מעבר לשיעורים"
          title="הרצאות וסדנאות"
          subtitle="אלפא קליד הוא לא רק שיעורי פסנתר — אנחנו מביאים מרצים חיצוניים גם עבור ההורים וגם עבור הילדים."
          light
        />

        <div className="grid sm:grid-cols-2 gap-8">
          {lectures.map((l) => (
            <div
              key={l.title}
              className="gold-glow-card bg-piano-dark rounded-2xl p-9 border border-gold/10"
            >
              <div className="text-5xl mb-5">{l.icon}</div>
              <span className="inline-block bg-gold/15 text-gold text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
                {l.audience}
              </span>
              <h3 className="text-warm-white font-bold text-xl mb-3">{l.title}</h3>
              <p className="text-ivory/60 leading-relaxed">{l.description}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-ivory/30 text-sm mt-10">
          הנושאים והמועדים מתעדכנים — עקבו אחרינו ברשתות החברתיות
        </p>
      </div>
    </section>
  );
}
