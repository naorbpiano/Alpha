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
              בית הספר שלנו נוסד מתוך אמונה אחת פשוטה: כל ילד יכול ללמוד
              מוסיקה — ולאהוב אותה. אנחנו מאמינים שהדרך לנגינה עוברת דרך שמחה,
              סבלנות, וחגיגה של כל צעד קדימה.
            </p>
            <p>
              בשנים עברנו, ליווינו מאות תלמידים מגיל 5 ועד נוער, וראינו שוב
              ושוב איך ביטחון עצמי שנבנה ליד הפסנתר משפיע על כל תחומי החיים.
            </p>
            <p>
              אצלנו לא מדדים הצלחה רק בנגינה מושלמת — אלא גם בחיוך של ילד
              שסיים את השיעור עם סיפור חדש לספר הביתה.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            {[
              { number: "10+", label: "שנות ניסיון" },
              { number: "200+", label: "תלמידים בוגרים" },
              { number: "4", label: "מורים מקצועיים" },
              { number: "100%", label: "אהבה למוסיקה" },
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
