const steps = [
  {
    number: "01",
    title: "שיעור ניסיון חינם",
    description:
      "כל תלמיד חדש מתחיל בשיעור ניסיון ללא עלות. נכיר אחד את השני, נבין מה מעניין אותך, ונמצא את הגישה המתאימה ביותר.",
  },
  {
    number: "02",
    title: "תוכנית לימודים אישית",
    description:
      "אנחנו לא משתמשים בתוכנית אחת לכולם. כל תלמיד מקבל מסלול ייחודי שבנוי על העדפות, קצב ומטרות שלו.",
  },
  {
    number: "03",
    title: "שילוב משחק ורצינות",
    description:
      "שיעורים שמשלבים תרגול טכני, קריאת תווים, ורפרטואר שהתלמיד אוהב — כי מוסיקה צריכה להרגיש כמו שמחה.",
  },
  {
    number: "04",
    title: "חגיגת הצלחות",
    description:
      "כל השגה — גדולה או קטנה — מצוינת. אנחנו בונים ביטחון עצמי צעד אחר צעד, כי זה הבסיס לכל דבר.",
  },
  {
    number: "05",
    title: "מעקב הורים שוטף",
    description:
      "הורים הם חלק מהמסע. אנחנו מעדכנים, מייעצים, ומזמינים אתכם להיות שותפים לחגיגה.",
  },
  {
    number: "06",
    title: "הופעות ואירועים",
    description:
      "פעמיים בשנה מעלים תלמידינו הופעות בפני משפחה וחברים — כי נגינה שלמה רק כשיש לה קהל.",
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
