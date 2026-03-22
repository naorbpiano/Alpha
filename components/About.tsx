import SectionHeader from "./SectionHeader";

export default function About() {
  return (
    <section id="about" className="py-24 bg-warm-white relative">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader eyebrow="אודות" title="אודות אלפא קליד" />

        <div className="grid md:grid-cols-2 gap-14 items-center">
          {/* Text */}
          <div className="space-y-6 text-piano-dark leading-relaxed text-lg">
            <p>
              <span className="text-gold font-bold text-2xl leading-none float-right ml-3 mt-1">א</span>
              לפא קליד נוסד ב-2023 בפתח תקווה מתוך אמונה פשוטה אחת: כל ילד
              יכול ללמוד פסנתר — ולאהוב את זה. אנחנו לא מאמינים בלחץ, בצעקות
              או בדרישה לשלמות. אנחנו מאמינים בהעצמה.
            </p>
            <p>
              השיעורים אצלנו הם פרטניים בלבד, 45 דקות, בכל סגנון שמתאים לילד —
              קלאסי, פופ, ג׳אז ועוד. אנחנו מספקים מקלדת בשיעור, אך התלמיד
              זקוק לפסנתר או מקלדת בבית להתרגל עליה.
            </p>
            <p>
              אצלנו ההצלחה לא נמדדת רק בנגינה מושלמת — היא נמדדת בחיוך של
              ילד שסיים שיעור ורץ לספר להורים מה הוא כבר יכול לנגן.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            {[
              { number: "2023", label: "שנת הקמה", icon: "🏫" },
              { number: "7–16", label: "גיל התלמידים", icon: "🎯" },
              { number: "45′", label: "שיעור פרטני", icon: "⏱" },
              { number: "2×", label: "הופעות בשנה", icon: "🎤" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="gold-glow-card bg-ivory border border-gold/15 rounded-2xl p-7 text-center"
              >
                <div className="text-2xl mb-2">{stat.icon}</div>
                <div className="text-3xl sm:text-4xl font-black text-gold-gradient mb-1">
                  {stat.number}
                </div>
                <div className="text-warm-gray text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
