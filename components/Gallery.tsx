const items = [
  { type: "image", label: "שיעור קבוצתי" },
  { type: "image", label: "תלמידה בהופעה" },
  { type: "video", label: "הופעת סוף שנה" },
  { type: "image", label: "שיעור פרטי" },
  { type: "image", label: "תלמיד מתרגל" },
  { type: "video", label: "מיני-קונצרט" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-ivory">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-gold uppercase tracking-widest text-sm font-semibold mb-2">
            רגעים מבית הספר
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-piano-black">
            גלריה
          </h2>
          <div className="mt-4 mx-auto w-16 h-1 bg-gold rounded-full" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {items.map((item, i) => (
            <div
              key={i}
              className="relative aspect-square bg-piano-dark rounded-2xl overflow-hidden group cursor-pointer shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Placeholder content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-ivory/30">
                <span className="text-4xl mb-2">
                  {item.type === "video" ? "▶️" : "📸"}
                </span>
                <span className="text-xs">{item.label}</span>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/10 transition-colors rounded-2xl" />

              {/* Video badge */}
              {item.type === "video" && (
                <div className="absolute top-3 right-3 bg-gold/90 text-piano-black text-xs font-bold px-2 py-0.5 rounded-full">
                  וידאו
                </div>
              )}
            </div>
          ))}
        </div>

        <p className="text-center text-warm-gray text-sm mt-6">
          * תמונות וסרטונים יועלו בקרוב — בינתיים הזמינו שיעור ניסיון ותראו בעצמכם!
        </p>
      </div>
    </section>
  );
}
