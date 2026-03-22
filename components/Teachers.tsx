const teachers = [
  {
    name: "נועה לוי",
    title: "מורה ראשית",
    credentials: "תואר ראשון במוסיקה, אוניברסיטת תל אביב",
    experience: "12 שנות ניסיון",
    specialties: ["ילדים 5–12", "קלאסי", "תיאוריה"],
    bio: "נועה מאמינה שכל ילד נושא בתוכו מנגינה — תפקידה לעזור לה לצאת החוצה. מתמחה בגישה משחקית לילדים צעירים.",
  },
  {
    name: "יונתן כהן",
    title: "מורה בכיר",
    credentials: "תואר שני בביצוע, הקונסרבטוריון",
    experience: "8 שנות ניסיון",
    specialties: ["נוער", "ג׳אז", "פופ"],
    bio: "יונתן מחבר עולמות — מביא לנוער רפרטואר עדכני לצד יסודות קלאסיים מוצקים. הגישה שלו: כיף קודם, טכניקה אחר כך.",
  },
  {
    name: "מיה אברהם",
    title: "מורה",
    credentials: "תואר ראשון בחינוך מוסיקלי",
    experience: "5 שנות ניסיון",
    specialties: ["ילדים 8–14", "קלאסי", "בגרות מוסיקה"],
    bio: "מיה מלווה תלמידים לבגרות מוסיקה ומכינה לתחרויות. סבלנותה האינסופית הפכה אותה לאהובה במיוחד על תלמידיה.",
  },
  {
    name: "אורי שפירא",
    title: "מורה",
    credentials: "בוגר אקדמיה למוסיקה ירושלים",
    experience: "6 שנות ניסיון",
    specialties: ["נוער", "רוק", "קלאסי"],
    bio: "אורי הוא מוזיקאי מבצע שמחבר בין עולם ההופעות לחינוך. תלמידיו לומדים לנגן מוסיקה שהם אוהבים — כמו שהם שומעים.",
  },
];

export default function Teachers() {
  return (
    <section id="teachers" className="py-20 bg-warm-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-gold uppercase tracking-widest text-sm font-semibold mb-2">
            הצוות שלנו
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-piano-black">
            המורים שלנו
          </h2>
          <div className="mt-4 mx-auto w-16 h-1 bg-gold rounded-full" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teachers.map((t) => (
            <div
              key={t.name}
              className="bg-ivory rounded-2xl overflow-hidden shadow-sm border border-gold/10 hover:shadow-md transition-shadow flex flex-col"
            >
              {/* Photo placeholder */}
              <div className="bg-piano-dark h-48 flex items-center justify-center text-6xl">
                🎹
              </div>

              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-piano-black">{t.name}</h3>
                <p className="text-gold text-sm font-semibold mb-2">{t.title}</p>
                <p className="text-warm-gray text-xs mb-1">{t.credentials}</p>
                <p className="text-warm-gray text-xs mb-3">{t.experience}</p>

                {/* Specialties */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {t.specialties.map((s) => (
                    <span
                      key={s}
                      className="bg-gold/15 text-gold text-xs px-2 py-0.5 rounded-full"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <p className="text-warm-gray text-sm leading-relaxed mt-auto">
                  {t.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
