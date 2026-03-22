import SectionHeader from "./SectionHeader";

const schedule = [
  { day: "ראשון", hours: "14:00 – 20:00" },
  { day: "שני", hours: "14:00 – 20:00" },
  { day: "שלישי", hours: "14:00 – 20:00" },
  { day: "רביעי", hours: "14:00 – 20:00" },
  { day: "חמישי", hours: "14:00 – 20:00" },
  { day: "שישי", hours: "09:00 – 13:00" },
  { day: "שבת", hours: "סגור" },
];

export default function LocationHours() {
  return (
    <section id="location" className="py-24 bg-warm-white">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader eyebrow="מיקום ושעות" title="איפה ומתי" />

        <div className="grid md:grid-cols-2 gap-10">
          {/* Map placeholder */}
          <div className="gold-glow-card bg-ivory rounded-2xl overflow-hidden border border-gold/10 min-h-72 flex flex-col">
            <div className="bg-piano-dark flex-1 flex items-center justify-center text-ivory/30 min-h-52 relative">
              <div className="text-center">
                <div className="text-6xl mb-3">📍</div>
                <p className="text-sm font-medium">פתח תקווה</p>
                <p className="text-xs mt-1 opacity-60">מפה תוכנס כאן</p>
              </div>
            </div>
            <div className="p-6">
              <p className="text-piano-black font-bold text-lg">📍 פתח תקווה</p>
              <p className="text-warm-gray mt-1 text-sm">
                הכתובת המדויקת תימסר לאחר ההרשמה
              </p>
            </div>
          </div>

          {/* Hours table */}
          <div className="gold-glow-card bg-ivory rounded-2xl p-7 border border-gold/10">
            <h3 className="text-piano-black font-bold text-xl mb-6 flex items-center gap-2">
              <span>🕐</span> שעות פעילות
            </h3>
            <div className="space-y-1">
              {schedule.map((row) => (
                <div
                  key={row.day}
                  className={`flex justify-between items-center py-2.5 px-3 rounded-lg transition-colors ${
                    row.hours === "סגור"
                      ? "opacity-40"
                      : "hover:bg-gold/5"
                  }`}
                >
                  <span className="font-medium text-piano-black">{row.day}</span>
                  <span
                    className={`text-sm ${
                      row.hours === "סגור"
                        ? "text-warm-gray"
                        : "text-gold font-bold"
                    }`}
                  >
                    {row.hours}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-6 bg-gold/10 rounded-xl p-4 text-sm text-warm-gray border border-gold/10">
              📩 השאר פרטים ונאור יחזור אליך לתיאום פגישת המפתח
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
