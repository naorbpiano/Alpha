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

const ClockIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-gold shrink-0" aria-hidden="true">
    <path d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z"/>
  </svg>
);

const PinIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-gold shrink-0" aria-hidden="true">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
  </svg>
);

const InfoIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-gold/60 shrink-0" aria-hidden="true">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
  </svg>
);

export default function LocationHours() {
  return (
    <section id="location" className="py-24 bg-warm-white">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader eyebrow="מיקום ושעות" title="איפה ומתי" />

        <div className="grid md:grid-cols-2 gap-10">
          {/* Map area — elegant location card */}
          <div className="gold-glow-card bg-piano-black rounded-2xl overflow-hidden border border-gold/15 flex flex-col">
            {/* Visual map stand-in */}
            <div className="relative flex-1 min-h-52 bg-[#1e1e1e] overflow-hidden">
              {/* Grid lines — map aesthetic */}
              <svg
                viewBox="0 0 400 220"
                className="absolute inset-0 w-full h-full opacity-20"
                aria-hidden="true"
                preserveAspectRatio="xMidYMid slice"
              >
                {/* Horizontal lines */}
                {[0, 1, 2, 3, 4, 5, 6].map((i) => (
                  <line key={`h${i}`} x1="0" y1={i * 37} x2="400" y2={i * 37} stroke="#c9a84c" strokeWidth="0.5" />
                ))}
                {/* Vertical lines */}
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
                  <line key={`v${i}`} x1={i * 44} y1="0" x2={i * 44} y2="220" stroke="#c9a84c" strokeWidth="0.5" />
                ))}
                {/* Streets */}
                <rect x="60" y="80" width="280" height="12" rx="2" fill="#c9a84c" opacity="0.18" />
                <rect x="160" y="30" width="12" height="160" rx="2" fill="#c9a84c" opacity="0.18" />
                <rect x="250" y="50" width="8" height="120" rx="2" fill="#c9a84c" opacity="0.12" />
                <rect x="80" y="130" width="200" height="8" rx="2" fill="#c9a84c" opacity="0.12" />
                {/* Location pin */}
                <circle cx="166" cy="86" r="14" fill="#c9a84c" opacity="0.25" />
                <circle cx="166" cy="86" r="6" fill="#c9a84c" opacity="0.9" />
              </svg>

              {/* Gold radial glow at pin */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse 40% 35% at 41% 39%, rgba(201,168,76,0.2) 0%, transparent 70%)",
                }}
              />

              {/* Center label */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center mx-auto mb-3">
                    <PinIcon />
                  </div>
                  <p className="text-warm-white font-bold text-base">פתח תקווה</p>
                  <p className="text-ivory/40 text-xs mt-1 tracking-wide">הכתובת תישלח לאחר ההרשמה</p>
                </div>
              </div>
            </div>

            {/* Info row */}
            <div className="p-5 border-t border-gold/10 flex items-center gap-3">
              <PinIcon />
              <div>
                <p className="text-warm-white font-semibold text-sm">פתח תקווה</p>
                <p className="text-ivory/40 text-xs">נגיש בתחבורה ציבורית</p>
              </div>
            </div>
          </div>

          {/* Hours table */}
          <div className="gold-glow-card bg-ivory rounded-2xl p-7 border border-gold/10">
            <h3 className="text-piano-black font-bold text-xl mb-6 flex items-center gap-2">
              <ClockIcon /> שעות פעילות
            </h3>
            <div className="space-y-1">
              {schedule.map((row) => (
                <div
                  key={row.day}
                  className={`flex justify-between items-center py-2.5 px-3 rounded-lg transition-colors ${
                    row.hours === "סגור"
                      ? "opacity-35"
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
            <div className="mt-6 bg-gold/8 rounded-xl p-4 flex items-start gap-2.5 border border-gold/10">
              <InfoIcon />
              <p className="text-sm text-warm-gray leading-relaxed">
                השאר פרטים ונאור יחזור אליך לתיאום פגישת המפתח
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
