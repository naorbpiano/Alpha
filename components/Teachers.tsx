export default function Teachers() {
  return (
    <section id="teachers" className="py-20 bg-warm-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-gold uppercase tracking-widest text-sm font-semibold mb-2">
            הצוות שלנו
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-piano-black">
            המורה שלנו
          </h2>
          <div className="mt-4 mx-auto w-16 h-1 bg-gold rounded-full" />
        </div>

        <div className="bg-ivory rounded-2xl overflow-hidden shadow-sm border border-gold/10 flex flex-col md:flex-row">
          {/* Photo placeholder */}
          <div className="bg-piano-dark md:w-64 min-h-64 flex-shrink-0 flex items-center justify-center text-7xl">
            🎹
          </div>

          {/* Info */}
          <div className="p-8 flex flex-col justify-center gap-4">
            <div>
              <h3 className="text-2xl font-bold text-piano-black">נאור</h3>
              <p className="text-gold font-semibold mt-1">מייסד ומורה ראשי — אלפא קליד</p>
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
                  className="bg-gold/15 text-gold text-sm px-3 py-1 rounded-full font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>

            <a
              href="#contact"
              className="mt-2 self-start bg-gold text-piano-black font-bold px-6 py-2.5 rounded-full hover:bg-gold-light transition-colors"
            >
              קביעת פגישת מפתח →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
