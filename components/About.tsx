import SectionHeader from "./SectionHeader";

const YearIcon = () => (
  <svg viewBox="0 0 24 24" className="w-7 h-7 fill-gold" aria-hidden="true">
    <path d="M19 3h-1V1h-2v2H8V1H6v2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm0 16H5V8h14v11z"/>
  </svg>
);
const AgeIcon = () => (
  <svg viewBox="0 0 24 24" className="w-7 h-7 fill-gold" aria-hidden="true">
    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
  </svg>
);
const ClockIcon = () => (
  <svg viewBox="0 0 24 24" className="w-7 h-7 fill-gold" aria-hidden="true">
    <path d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z"/>
  </svg>
);
const MicIcon = () => (
  <svg viewBox="0 0 24 24" className="w-7 h-7 fill-gold" aria-hidden="true">
    <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.91-3c-.49 0-.9.36-.98.85C16.52 14.2 14.47 16 12 16s-4.52-1.8-4.93-4.15c-.08-.49-.49-.85-.98-.85-.61 0-1.09.54-1 1.14.49 3 2.89 5.35 5.91 5.78V20c0 .55.45 1 1 1s1-.45 1-1v-2.08c3.02-.43 5.42-2.78 5.91-5.78.1-.6-.39-1.14-1-1.14z"/>
  </svg>
);

const stats = [
  { icon: YearIcon, number: "2023", label: "שנת הקמה" },
  { icon: AgeIcon,  number: "7–16", label: "גיל התלמידים" },
  { icon: ClockIcon, number: "45′", label: "שיעור פרטני" },
  { icon: MicIcon,  number: "2×",  label: "הופעות בשנה" },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-warm-white relative">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader eyebrow="אודות" title="אודות אלפא קליד" />

        <div className="grid md:grid-cols-2 gap-14 items-center">
          {/* Text */}
          <div className="space-y-6 text-piano-dark leading-relaxed text-lg">
            <p>
              <span className="text-gold font-black text-3xl leading-none float-right ml-3 mt-0.5 font-display">א</span>
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
            {stats.map(({ icon: Icon, number, label }) => (
              <div
                key={label}
                className="gold-glow-card bg-ivory border border-gold/15 rounded-2xl p-7 text-center group"
              >
                <div className="flex justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                  <Icon />
                </div>
                <div className="font-display text-3xl sm:text-4xl font-black text-gold-gradient mb-1">
                  {number}
                </div>
                <div className="text-warm-gray text-sm">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
