import SectionHeader from "./SectionHeader";

export default function Teachers() {
  return (
    <section id="teachers" className="py-24 bg-warm-white">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeader eyebrow="הצוות שלנו" title="המורה שלנו" />

        <div className="gold-glow-card bg-ivory rounded-3xl overflow-hidden border border-gold/15 flex flex-col md:flex-row">
          {/* Photo placeholder */}
          <div className="bg-piano-dark md:w-72 min-h-72 flex-shrink-0 flex items-center justify-center relative overflow-hidden">
            <div className="text-8xl opacity-80">🎹</div>
            <div className="absolute inset-0 bg-gradient-to-t from-piano-black/50 to-transparent" />
          </div>

          {/* Info */}
          <div className="p-9 flex flex-col justify-center gap-5">
            <div>
              <h3 className="text-3xl font-black text-gold-gradient inline-block">נאור</h3>
              <p className="text-gold/80 font-semibold mt-1.5 text-lg">מייסד ומורה ראשי — אלפא קליד</p>
            </div>

            <p className="text-piano-dark leading-relaxed text-lg">
              נאור הקים את אלפא קליד מתוך אמונה שכל ילד ראוי לחוות הצלחה —
              לא רק את הגדולה, אלא גם את הקטנה שמתרחשת בכל שיעור. הגישה שלו
              מבוססת על הקשבה אמיתית לכל תלמיד, מתן כלים להצלחה, ויצירת
              אווירה שבה כיף לנגן.
            </p>

            <div className="flex flex-wrap gap-2">
              {["כל סגנון", "גיל 7–16", "שיעורים פרטניים", "פגישת מפתח חינם"].map((tag) => (
                <span
                  key={tag}
                  className="bg-gold/10 text-gold text-sm px-4 py-1.5 rounded-full font-medium border border-gold/15"
                >
                  {tag}
                </span>
              ))}
            </div>

            <a
              href="#contact"
              className="mt-2 self-start bg-gold text-piano-black font-bold px-7 py-3 rounded-full hover:bg-gold-light transition-all duration-300 shadow-md hover:shadow-lg"
            >
              קביעת פגישת מפתח →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
