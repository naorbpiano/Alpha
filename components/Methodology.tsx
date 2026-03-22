import SectionHeader from "./SectionHeader";

const steps = [
  {
    number: "01", icon: "🔑",
    title: "פגישת מפתח פדגוגית",
    description: "כל תלמיד חדש עובר פגישת מפתח בעלות סמלית. נאור בודק את השמיעה וההבנה המוסיקלית של הילד — ללא ניסיון קודם נדרש.",
  },
  {
    number: "02", icon: "📋",
    title: "תוכנית לימודים אישית",
    description: "אין תוכנית אחת לכולם. כל תלמיד מקבל מסלול שבנוי על הסגנון שהוא אוהב, הקצב שמתאים לו, והמטרות שלו.",
  },
  {
    number: "03", icon: "⭐",
    title: "הצלחות קטנות = ביטחון גדול",
    description: "לא מחכים להצלחה הגדולה. אנחנו מפרגנים, מציינים ומחגגים כל צעד קדימה — כי כך בונים ילד שמאמין בעצמו.",
  },
  {
    number: "04", icon: "👫",
    title: "ילד מלמד ילד",
    description: "שיטה ייחודית שלנו: לאחר שהילד לומד משהו חדש, אנחנו מזמינים אותו ללמד אותו לאחר. הסבר לאחר מחזק הבנה פי עשרה.",
  },
  {
    number: "05", icon: "🎵",
    title: "כל סגנון — לפי הילד",
    description: "קלאסי, פופ, ג׳אז, רוק, מוסיקה ישראלית — לא אכפת לנו. מה שמניע את הילד הוא מה שנלמד.",
  },
  {
    number: "06", icon: "🎤",
    title: "הופעות פעמיים בשנה",
    description: "באמצע השנה ובסוף השנה, התלמידים עולים לבמה בפני משפחה וחברים — חוויה שמסכמת את המסע.",
  },
];

export default function Methodology() {
  return (
    <section id="methodology" className="py-24 bg-piano-black relative overflow-hidden">
      {/* Subtle gold radial in background */}
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
          {steps.map((step) => (
            <div
              key={step.number}
              className="gold-glow-card bg-piano-dark rounded-2xl p-7 border border-gold/10"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{step.icon}</span>
                <span className="text-gold/40 font-black text-sm tracking-widest">
                  {step.number}
                </span>
              </div>
              <h3 className="text-warm-white font-bold text-lg mb-3">{step.title}</h3>
              <p className="text-ivory/50 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
