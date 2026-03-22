import SectionHeader from "./SectionHeader";

const groups = [
  {
    icon: "🧒",
    title: "ילדים",
    ages: "גיל 7–11",
    description:
      "בניית יסודות מוסיקליים דרך שמחה — קצב, תווים, ושירים שהילד אוהב. בלי לחץ, עם הרבה עידוד.",
  },
  {
    icon: "🧑",
    title: "נוער",
    ages: "גיל 12–16",
    description:
      "פיתוח עמוק של טכניקה ורפרטואר — קלאסי, פופ, ג׳אז, או מה שמדליק אותם. לנגן מוסיקה שאוהבים.",
  },
  {
    icon: "🎹",
    title: "כל הסגנונות",
    ages: "לפי בחירת התלמיד",
    description:
      "אין תוכנית נוקשה. כל תלמיד בוחר את הסגנון שמדבר אליו — ואנחנו בונים את המסלול סביבו.",
  },
];

export default function TargetAudience() {
  return (
    <section id="audience" className="py-24 bg-ivory">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader
          eyebrow="למי מיועד"
          title="ילדים ונוער בלבד"
          subtitle="אלפא קליד מיועד לגילאי 7–16 בלבד — כי בגיל הזה כל שיר שנלמד הופך לזיכרון לכל החיים."
        />

        <div className="grid sm:grid-cols-3 gap-8">
          {groups.map((g) => (
            <div
              key={g.title}
              className="gold-glow-card bg-warm-white rounded-2xl p-9 text-center border border-gold/10"
            >
              <div className="text-5xl mb-5">{g.icon}</div>
              <h3 className="text-xl font-bold text-piano-black mb-2">{g.title}</h3>
              <span className="inline-block bg-gold/15 text-gold text-xs font-bold px-3 py-1 rounded-full mb-4 tracking-wide">
                {g.ages}
              </span>
              <p className="text-warm-gray text-sm leading-relaxed">{g.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
