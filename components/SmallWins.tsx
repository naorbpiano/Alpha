const wins = [
  { icon: "🎵", title: "המנגינה הראשונה", text: "הרגע שבו אצבעות קטנות מנגנות לראשונה מנגינה שלמה — עיניים מתרחבות, חיוך ענק." },
  { icon: "🎼", title: "קריאת תו ראשונה", text: 'כשילד מסתכל על דף תווים ואומר "אני יודע מה זה!" — זה רגע שלא שוכחים.' },
  { icon: "⭐", title: "שיר שלם בלי לעצור", text: "לנגן שיר מתחילה לסוף, ללא עצירות — הישג שכל ילד גאה בו במיוחד." },
  { icon: "👏", title: "ביצוע בפני חברים", text: "להנגן לחבר, לאח, להורה — ולראות את האורות על הפנים שלהם." },
  { icon: "🏆", title: "שיר קשה שהצליח", text: "כשמשיר שנראה 'בלתי אפשרי' הופך לשיר שכבר שוטפים בלי לחשוב." },
  { icon: "🎤", title: "ההופעה הראשונה", text: "לעמוד על הבמה, לנשום עמוק, ולנגן — ואחרי זה לא להפסיק לחייך כל היום." },
];

export default function SmallWins() {
  return (
    <section id="small-wins" className="py-20 bg-ivory">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-gold uppercase tracking-widest text-sm font-semibold mb-2">
            הלב של מה שאנחנו עושים
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-piano-black">
            הצלחות קטנות
          </h2>
          <p className="mt-3 text-warm-gray text-lg max-w-2xl mx-auto">
            אצלנו לא מחכים לבמה הגדולה כדי לחגוג. כל צעד קדימה הוא הצלחה —
            ואנחנו חוגגים אותה יחד.
          </p>
          <div className="mt-4 mx-auto w-16 h-1 bg-gold rounded-full" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {wins.map((win) => (
            <div
              key={win.title}
              className="bg-warm-white rounded-2xl p-7 shadow-sm border border-gold/10 hover:shadow-md hover:border-gold/30 transition-all group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform inline-block">
                {win.icon}
              </div>
              <h3 className="text-piano-black font-bold text-lg mb-2">
                {win.title}
              </h3>
              <p className="text-warm-gray text-sm leading-relaxed">{win.text}</p>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="mt-14 bg-piano-black rounded-2xl p-10 text-center">
          <p className="text-gold text-4xl mb-4">&ldquo;</p>
          <blockquote className="text-ivory text-xl sm:text-2xl font-medium leading-relaxed max-w-2xl mx-auto">
            ילד שמאמין שהוא יכול לנגן — מאמין שהוא יכול לעשות כל דבר.
          </blockquote>
          <p className="text-gold/70 mt-4 text-sm">— הפילוסופיה שלנו</p>
        </div>
      </div>
    </section>
  );
}
