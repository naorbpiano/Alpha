import SectionHeader from "./SectionHeader";

/* ── SVG icons ── */
const KeyIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-gold/70" aria-hidden="true">
    <path d="M12.65 10A6 6 0 1 0 10 12.65V17h2v2h2v-2h2v-2h-3.35V10zM7 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
  </svg>
);
const ListIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-gold/70" aria-hidden="true">
    <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"/>
  </svg>
);
const StarFillIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-gold/70" aria-hidden="true">
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
  </svg>
);
const PeopleIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-gold/70" aria-hidden="true">
    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
  </svg>
);
const NoteIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-gold/70" aria-hidden="true">
    <path d="M12 3v10.55A4 4 0 1 0 14 17V7h4V3h-6z"/>
  </svg>
);
const MicIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-gold/70" aria-hidden="true">
    <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.91-3c-.49 0-.9.36-.98.85C16.52 14.2 14.47 16 12 16s-4.52-1.8-4.93-4.15c-.08-.49-.49-.85-.98-.85-.61 0-1.09.54-1 1.14.49 3 2.89 5.35 5.91 5.78V20c0 .55.45 1 1 1s1-.45 1-1v-2.08c3.02-.43 5.42-2.78 5.91-5.78.1-.6-.39-1.14-1-1.14z"/>
  </svg>
);

const steps = [
  {
    number: "01", Icon: KeyIcon,
    title: "פגישת מפתח פדגוגית",
    description: "כל תלמיד חדש עובר פגישת מפתח בעלות סמלית. נאור בודק את השמיעה וההבנה המוסיקלית של הילד — ללא ניסיון קודם נדרש.",
  },
  {
    number: "02", Icon: ListIcon,
    title: "תוכנית לימודים אישית",
    description: "אין תוכנית אחת לכולם. כל תלמיד מקבל מסלול שבנוי על הסגנון שהוא אוהב, הקצב שמתאים לו, והמטרות שלו.",
  },
  {
    number: "03", Icon: StarFillIcon,
    title: "הצלחות קטנות = ביטחון גדול",
    description: "לא מחכים להצלחה הגדולה. אנחנו מפרגנים, מציינים ומחגגים כל צעד קדימה — כי כך בונים ילד שמאמין בעצמו.",
  },
  {
    number: "04", Icon: PeopleIcon,
    title: "ילד מלמד ילד",
    description: "שיטה ייחודית שלנו: לאחר שהילד לומד משהו חדש, אנחנו מזמינים אותו ללמד אותו לאחר. הסבר לאחר מחזק הבנה פי עשרה.",
  },
  {
    number: "05", Icon: NoteIcon,
    title: "כל סגנון — לפי הילד",
    description: "קלאסי, פופ, ג׳אז, רוק, מוסיקה ישראלית — לא אכפת לנו. מה שמניע את הילד הוא מה שנלמד.",
  },
  {
    number: "06", Icon: MicIcon,
    title: "הופעות פעמיים בשנה",
    description: "באמצע השנה ובסוף השנה, התלמידים עולים לבמה בפני משפחה וחברים — חוויה שמסכמת את המסע.",
  },
];

export default function Methodology() {
  return (
    <section id="methodology" className="py-24 bg-piano-black relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 40% at 50% 80%, rgba(201,168,76,0.15) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <SectionHeader
          eyebrow="הגישה שלנו"
          title="השיטה שלנו"
          subtitle="לא מדריך אחד לכולם — אלא דרך ייחודית לכל ילד."
          light
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map(({ number, Icon, title, description }) => (
            <div
              key={number}
              className="gold-glow-card bg-piano-dark rounded-2xl p-7 border border-gold/10 group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="group-hover:scale-110 transition-transform duration-300">
                  <Icon />
                </div>
                <span className="text-gold/35 font-black text-sm tracking-widest">
                  {number}
                </span>
              </div>
              <h3 className="text-warm-white font-bold text-lg mb-3">{title}</h3>
              <p className="text-ivory/50 text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
