import SectionHeader from "./SectionHeader";

const items = [
  { type: "image", label: "שיעור פרטני" },
  { type: "image", label: "תלמידה בהופעה" },
  { type: "video", label: "הופעת סוף שנה" },
  { type: "image", label: "תרגול בכיתה" },
  { type: "image", label: "תלמיד מתרגל" },
  { type: "video", label: "מיני-קונצרט" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-ivory">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader eyebrow="רגעים מבית הספר" title="גלריה" />

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {items.map((item, i) => (
            <div
              key={i}
              className="gold-glow-card relative aspect-square bg-piano-dark rounded-2xl overflow-hidden group cursor-pointer"
            >
              {/* Placeholder content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-ivory/25">
                <span className="text-4xl mb-2">
                  {item.type === "video" ? "▶️" : "📸"}
                </span>
                <span className="text-xs font-medium">{item.label}</span>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/10 transition-all duration-500" />

              {/* Video badge */}
              {item.type === "video" && (
                <div className="absolute top-3 right-3 bg-gold text-piano-black text-xs font-bold px-2.5 py-1 rounded-full">
                  וידאו
                </div>
              )}
            </div>
          ))}
        </div>

        <p className="text-center text-warm-gray/60 text-sm mt-8">
          * תמונות וסרטונים יועלו בקרוב — בינתיים הזמינו פגישת מפתח ותראו בעצמכם!
        </p>
      </div>
    </section>
  );
}
