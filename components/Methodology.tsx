const steps = [
  {
    number: "01",
    title: "פגישת מפתח פדגוגית",
    description:
      "כל תלמיד חדש עובר פגישת מפתח בעלות סמלית. נאור בודק את השמיעה וההבנה המוסיקלית של הילד — ללא ניסיון קודם נדרש. ממנה בונים תוכנית אישית.",
  },
  {
    number: "02",
    title: "תוכנית לימודים אישית",
    description:
      "אין תוכנית אחת לכולם. כל תלמיד מקבל מסלול שבנוי על הסגנון שהוא אוהב, הקצב שמתאים לו, והמטרות שלו.",
  },
  {
    number: "03",
    title: "הצלחות קטנות = ביטחון גדול",
    description:
      "לא מחכים להצלחה הגדולה. אנחנו מפרגנים, מציינים ומחגגים כל צעד קדימה — כי כך בונים ילד שמאמין בעצמו.",
  },
  {
    number: "04",
    title: "ילד מלמד ילד",
    description:
      "שיטה ייחודית שלנו: לאחר שהילד לומד משהו חדש, אנחנו מזמינים אותו ללמד אותו לאחר. הסבר לאחר מחזק הבנה פי עשרה.",
  },
  {
    number: "05",
    title: "כל סגנון — לפי הילד",
    description:
      "קלאסי, פופ, ג׳אז, רוק, מוסיקה ישראלית — לא אכפת לנו. מה שמניע את הילד הוא מה שנלמד.",
  },
  {
    number: "06",
    title: "הופעות פעמיים בשנה",
    description:
      "באמצע השנה ובסוף השנה, התלמידים עולים לבמה בפני משפחה וחברים — חוויה שמסכמת את המסע ומחזקת את הביטחון.",
  },
];

export default function Methodology() {
  return (
    <section id="methodology" className="py-20 bg-piano-black">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-gold uppercase tracking-widest text-sm font-semibold mb-2">
            הגישה שלנו
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-warm-white">
            השיטה שלנו
          </h2>
          <p className="mt-3 text-ivory/70 text-lg max-w-xl mx-auto">
            לא מדריך אחד לכולם — אלא דרך ייחודית לכל ילד.
          </p>
          <div className="mt-4 mx-auto w-16 h-1 bg-gold rounded-full" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-piano-dark rounded-2xl p-6 border border-gold/10 hover:border-gold/30 transition-colors"
            >
              <div className="text-gold font-bold text-2xl mb-3 font-mono">
                {step.number}
              </div>
              <h3 className="text-warm-white font-semibold text-lg mb-2">
                {step.title}
              </h3>
              <p className="text-ivory/60 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
