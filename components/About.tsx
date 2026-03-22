export default function About() {
  return (
    <section id="about" className="py-20 bg-warm-white">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-14">
          <p className="text-gold uppercase tracking-widest text-sm font-semibold mb-2">
            אודות
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-piano-black">
            אודות בית הספר
          </h2>
          <div className="mt-4 mx-auto w-16 h-1 bg-gold rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="space-y-5 text-piano-dark leading-relaxed text-lg">
            <p>
              אלפא קליד נוסד ב-2023 בפתח תקווה מתוך אמונה פשוטה אחת: כל ילד
              יכול ללמוד פסנתר — ולאהוב את זה. אנחנו לא מאמינים בלחץ, בצעקות
              או בדרישה לשלמות. אנחנו מאמינים בעצמה.
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
              { number: "2023", label: "שנת הקמה" },
              { number: "7–16", label: "גיל התלמידים" },
              { number: "45′", label: "שיעור פרטני" },
              { number: "2×", label: "הופעות בשנה" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-ivory border border-gold/20 rounded-2xl p-6 text-center shadow-sm"
              >
                <div className="text-3xl font-bold text-gold mb-1">
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
