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
    <section id="location" className="py-20 bg-warm-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-gold uppercase tracking-widest text-sm font-semibold mb-2">
            מיקום ושעות
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-piano-black">
            איפה ומתי
          </h2>
          <div className="mt-4 mx-auto w-16 h-1 bg-gold rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Map placeholder */}
          <div className="bg-ivory rounded-2xl overflow-hidden shadow-sm border border-gold/10 min-h-64 flex flex-col">
            <div className="bg-piano-dark flex-1 flex items-center justify-center text-ivory/40 min-h-52">
              <div className="text-center">
                <div className="text-5xl mb-3">📍</div>
                <p className="text-sm">מפה תוכנס כאן</p>
                <p className="text-xs mt-1 opacity-60">Google Maps Embed</p>
              </div>
            </div>
            <div className="p-5">
              <p className="text-piano-black font-semibold text-lg">📍 כתובת בית הספר</p>
              <p className="text-warm-gray mt-1">רחוב המוסיקה 1, תל אביב</p>
              <p className="text-warm-gray text-sm mt-1">
                נגיש בתחבורה ציבורית · חניה בסביבה
              </p>
            </div>
          </div>

          {/* Hours table */}
          <div className="bg-ivory rounded-2xl p-6 shadow-sm border border-gold/10">
            <h3 className="text-piano-black font-bold text-xl mb-5 flex items-center gap-2">
              <span>🕐</span> שעות פעילות
            </h3>
            <div className="space-y-2">
              {schedule.map((row) => (
                <div
                  key={row.day}
                  className={`flex justify-between items-center py-2 border-b border-gold/10 last:border-0 ${
                    row.hours === "סגור" ? "opacity-40" : ""
                  }`}
                >
                  <span className="font-medium text-piano-black">{row.day}</span>
                  <span
                    className={`text-sm ${
                      row.hours === "סגור" ? "text-warm-gray" : "text-gold font-semibold"
                    }`}
                  >
                    {row.hours}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-5 bg-gold/10 rounded-xl p-4 text-sm text-warm-gray">
              📞 לתיאום שיעור ניסיון חינם — צרו קשר עוד היום
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
