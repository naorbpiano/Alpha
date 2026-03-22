import SectionHeader from "./SectionHeader";

const wins = [
  { icon: "🎵", title: "המנגינה הראשונה", text: "הרגע שבו אצבעות קטנות מנגנות לראשונה מנגינה שלמה — עיניים מתרחבות, חיוך ענק." },
  { icon: "🎼", title: "קריאת תו ראשונה", text: 'כשילד מסתכל על דף תווים ואומר "אני יודע מה זה!" — זה רגע שלא שוכחים.' },
  { icon: "⭐", title: "שיר שלם בלי לעצור", text: "לנגן שיר מתחילה לסוף, ללא עצירות — הישג שכל ילד גאה בו במיוחד." },
  { icon: "👏", title: "ביצוע בפני חברים", text: "להנגן לחבר, לאח, להורה — ולראות את האורות על הפנים שלהם." },
  { icon: "🏆", title: "שיר קשה שהצליח", text: "כשמשיר שנראה ׳בלתי אפשרי׳ הופך לשיר שכבר שוטפים בלי לחשוב." },
  { icon: "🎤", title: "ההופעה הראשונה", text: "לעמוד על הבמה, לנשום עמוק, ולנגן — ואחרי זה לא להפסיק לחייך כל היום." },
];

export default function SmallWins() {
  return (
    <section id="small-wins" className="py-24 bg-ivory">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader
          eyebrow="הלב של מה שאנחנו עושים"
          title="הצלחות קטנות"
          subtitle="אצלנו לא מחכים לבמה הגדולה כדי לחגוג. כל צעד קדימה הוא הצלחה — ואנחנו חוגגים אותה יחד."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {wins.map((win) => (
            <div
              key={win.title}
              className="gold-glow-card bg-warm-white rounded-2xl p-8 border border-gold/10 group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">
                {win.icon}
              </div>
              <h3 className="text-piano-black font-bold text-lg mb-2">{win.title}</h3>
              <p className="text-warm-gray text-sm leading-relaxed">{win.text}</p>
            </div>
          ))}
        </div>

        {/* Hero quote */}
        <div className="mt-16 bg-piano-black rounded-3xl p-12 text-center relative overflow-hidden">
          {/* Subtle glow */}
          <div
            className="absolute inset-0 opacity-30 pointer-events-none"
            style={{
              background: "radial-gradient(ellipse 50% 60% at 50% 50%, rgba(201,168,76,0.2) 0%, transparent 70%)",
            }}
          />
          <div className="relative z-10">
            <p className="text-gold text-5xl mb-5 font-serif">&ldquo;</p>
            <blockquote className="text-ivory text-xl sm:text-2xl lg:text-3xl font-light leading-relaxed max-w-2xl mx-auto">
              ילד שמאמין שהוא יכול לנגן —
              <br className="hidden sm:block" />
              מאמין שהוא יכול לעשות <span className="text-gold-gradient font-bold">כל דבר</span>.
            </blockquote>
            <div className="mt-6 flex items-center justify-center gap-3">
              <span className="block w-8 h-px bg-gold/40" />
              <p className="text-gold/50 text-sm tracking-wide">הפילוסופיה של אלפא קליד</p>
              <span className="block w-8 h-px bg-gold/40" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
