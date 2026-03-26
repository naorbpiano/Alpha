import SectionHeader from "./SectionHeader";

/* ── SVG icon components ── */
const NoteIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8 fill-gold" aria-hidden="true">
    <path d="M12 3v10.55A4 4 0 1 0 14 17V7h4V3h-6z"/>
  </svg>
);
const SheetIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8 fill-gold" aria-hidden="true">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-1 7V3.5L18.5 9H13zm-5 9h8v-2H8v2zm0-4h8v-2H8v2zm0-4h5V8H8v2z"/>
  </svg>
);
const StarIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8 fill-gold" aria-hidden="true">
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
  </svg>
);
const HandsIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8 fill-gold" aria-hidden="true">
    <path d="M11 5v6H5V5h6m0-2H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm8 2v6h-6V5h6m0-2h-6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM11 13v6H5v-6h6m0-2H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2zm8 2v6h-6v-6h6m0-2h-6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2z"/>
  </svg>
);
const TrophyIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8 fill-gold" aria-hidden="true">
    <path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94A5.01 5.01 0 0 0 11 15.9V18H9v2h6v-2h-2v-2.1a5.01 5.01 0 0 0 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z"/>
  </svg>
);
const StageIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8 fill-gold" aria-hidden="true">
    <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.91-3c-.49 0-.9.36-.98.85C16.52 14.2 14.47 16 12 16s-4.52-1.8-4.93-4.15c-.08-.49-.49-.85-.98-.85-.61 0-1.09.54-1 1.14.49 3 2.89 5.35 5.91 5.78V20c0 .55.45 1 1 1s1-.45 1-1v-2.08c3.02-.43 5.42-2.78 5.91-5.78.1-.6-.39-1.14-1-1.14z"/>
  </svg>
);

const wins = [
  { Icon: NoteIcon,  title: "המנגינה הראשונה",    text: "הרגע שבו אצבעות קטנות מנגנות לראשונה מנגינה שלמה — עיניים מתרחבות, חיוך ענק." },
  { Icon: SheetIcon, title: "קריאת תו ראשונה",    text: 'כשילד מסתכל על דף תווים ואומר "אני יודע מה זה!" — זה רגע שלא שוכחים.' },
  { Icon: StarIcon,  title: "שיר שלם בלי לעצור", text: "לנגן שיר מתחילה לסוף, ללא עצירות — הישג שכל ילד גאה בו במיוחד." },
  { Icon: HandsIcon, title: "ביצוע בפני חברים",   text: "להנגן לחבר, לאח, להורה — ולראות את האורות על הפנים שלהם." },
  { Icon: TrophyIcon,title: "שיר קשה שהצליח",     text: "כשמשיר שנראה ׳בלתי אפשרי׳ הופך לשיר שכבר שוטפים בלי לחשוב." },
  { Icon: StageIcon, title: "ההופעה הראשונה",     text: "לעמוד על הבמה, לנשום עמוק, ולנגן — ואחרי זה לא להפסיק לחייך כל היום." },
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
          {wins.map(({ Icon, title, text }) => (
            <div
              key={title}
              className="gold-glow-card bg-warm-white rounded-2xl p-8 border border-gold/10 group"
            >
              <div className="mb-5 group-hover:scale-110 transition-transform duration-300 inline-block">
                <Icon />
              </div>
              <h3 className="text-piano-black font-bold text-lg mb-2">{title}</h3>
              <p className="text-warm-gray text-sm leading-relaxed">{text}</p>
            </div>
          ))}
        </div>

        {/* Hero quote */}
        <div className="mt-16 bg-piano-black rounded-3xl p-12 text-center relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-30 pointer-events-none"
            style={{
              background: "radial-gradient(ellipse 50% 60% at 50% 50%, rgba(201,168,76,0.2) 0%, transparent 70%)",
            }}
          />
          <div className="relative z-10">
            <p className="font-display text-gold text-6xl leading-none mb-5 opacity-50">&ldquo;</p>
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
