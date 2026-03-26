import SectionHeader from "./SectionHeader";

/* Piano key motif for image placeholders */
const KeyMotif = ({ variant = "dark" }: { variant?: "dark" | "light" }) => (
  <svg
    viewBox="0 0 80 120"
    className="w-full h-full opacity-10"
    aria-hidden="true"
    preserveAspectRatio="xMidYMid slice"
  >
    {[0,1,2,3,4,5,6,7,8,9].map((i) => (
      <rect
        key={i}
        x={i * 8}
        y={0}
        width={7}
        height={120}
        rx={1}
        fill={variant === "dark" ? "#c9a84c" : "#1a1a1a"}
        opacity={0.8}
      />
    ))}
    {[0,1,3,4,5,7,8].map((i) => (
      <rect
        key={`b${i}`}
        x={i * 8 + 5}
        y={0}
        width={5}
        height={70}
        rx={1}
        fill={variant === "dark" ? "#c9a84c" : "#1a1a1a"}
        opacity={1}
      />
    ))}
  </svg>
);

const PlayIcon = () => (
  <svg viewBox="0 0 24 24" className="w-10 h-10 fill-gold/80" aria-hidden="true">
    <path d="M8 5v14l11-7z"/>
  </svg>
);

const CameraIcon = () => (
  <svg viewBox="0 0 24 24" className="w-9 h-9 fill-gold/50" aria-hidden="true">
    <path d="M12 15.2A3.2 3.2 0 1 1 12 8.8a3.2 3.2 0 0 1 0 6.4zm0-8.4a5.2 5.2 0 1 0 0 10.4A5.2 5.2 0 0 0 12 6.8zM20 4h-3.17L15 2H9L7.17 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"/>
  </svg>
);

const items = [
  { type: "image", label: "שיעור פרטני",       span: "" },
  { type: "video", label: "הופעת סוף שנה",     span: "" },
  { type: "image", label: "תלמידה מתרגלת",     span: "" },
  { type: "image", label: "תרגול בכיתה",       span: "col-span-2 sm:col-span-1" },
  { type: "video", label: "מיני-קונצרט",       span: "" },
  { type: "image", label: "תלמיד ומורה",       span: "" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-ivory">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader eyebrow="רגעים מבית הספר" title="גלריה" />

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
          {items.map((item, i) => (
            <div
              key={i}
              className={`gold-glow-card relative aspect-square bg-piano-dark rounded-2xl overflow-hidden group ${item.span}`}
            >
              {/* Pattern background */}
              <div className="absolute inset-0">
                <KeyMotif variant="dark" />
              </div>

              {/* Radial glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(201,168,76,0.15) 0%, transparent 70%)",
                }}
              />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                {item.type === "video" ? <PlayIcon /> : <CameraIcon />}
                <span className="text-ivory/50 text-xs font-medium tracking-wide mt-1">{item.label}</span>
              </div>

              {/* Video badge */}
              {item.type === "video" && (
                <div className="absolute top-3 right-3 bg-gold/90 text-piano-black text-[10px] font-black px-2.5 py-1 rounded-full tracking-wide">
                  וידאו
                </div>
              )}

              {/* Bottom shimmer on hover */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold/60 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </div>
          ))}
        </div>

        {/* Coming soon note */}
        <div className="mt-10 flex items-center justify-center gap-3">
          <span className="block w-12 h-px bg-gold/20" />
          <p className="text-warm-gray/50 text-sm text-center">
            תמונות וסרטונים יועלו בקרוב — בינתיים, בואו לפגישת המפתח ותראו בעצמכם
          </p>
          <span className="block w-12 h-px bg-gold/20" />
        </div>
      </div>
    </section>
  );
}
