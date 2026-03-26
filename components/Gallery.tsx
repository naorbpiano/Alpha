"use client";

import { useState } from "react";
import SectionHeader from "./SectionHeader";

/*
 * Unsplash free photos — browser hotlinking allowed (Unsplash License).
 * Using <img> tags so the browser fetches directly (server-side requests are blocked by Unsplash CDN).
 * Photo IDs sourced from unsplash.com/photos/[id]
 */
const photos = [
  {
    id: "7kck7rSl_Bo",
    src: "https://images.unsplash.com/photo-7kck7rSl_Bo?w=600&q=80&auto=format&fit=crop",
    alt: "ילד לומד פסנתר עם מורה",
    label: "שיעור פרטני",
    span: "",
  },
  {
    id: "LZ3O2Q4Me0Q",
    src: "https://images.unsplash.com/photo-LZ3O2Q4Me0Q?w=600&q=80&auto=format&fit=crop",
    alt: "ילד מנגן בפסנתר",
    label: "תרגול בכיתה",
    span: "",
  },
  {
    id: "hWXO-N2VpN8",
    src: "https://plus.unsplash.com/premium_photo-hWXO-N2VpN8?w=600&q=80&auto=format&fit=crop",
    alt: "ילדה קטנה מנגנת בפסנתר",
    label: "תלמידה בשיעור",
    span: "",
  },
  {
    id: "S4eh9DWTId4",
    src: "https://images.unsplash.com/photo-S4eh9DWTId4?w=600&q=80&auto=format&fit=crop",
    alt: "ידיים מנגנות על מקשי פסנתר",
    label: "אצבעות על המקשים",
    span: "",
  },
  {
    id: "0aFUSZu_T1o",
    src: "https://images.unsplash.com/photo-0aFUSZu_T1o?w=600&q=80&auto=format&fit=crop",
    alt: "ילד עם פסנתר",
    label: "גיל 7 — פגישת ניסיון",
    span: "",
  },
  {
    id: "siniz-performance",
    src: "https://images.unsplash.com/photo-LZ3O2Q4Me0Q?w=600&q=80&auto=format&fit=crop&crop=bottom",
    alt: "הופעת פסנתר",
    label: "הופעת סוף שנה",
    span: "",
  },
];

/* Piano key motif for fallback */
const PianoFallback = ({ label }: { label: string }) => (
  <div className="absolute inset-0 bg-piano-dark flex flex-col items-center justify-center gap-3">
    <svg viewBox="0 0 80 120" className="w-16 h-24 opacity-15" aria-hidden="true">
      {[0,1,2,3,4,5,6,7,8,9].map((i) => (
        <rect key={i} x={i * 8} y={0} width={7} height={120} rx={1} fill="#c9a84c" opacity={0.8} />
      ))}
      {[0,1,3,4,5,7,8].map((i) => (
        <rect key={`b${i}`} x={i * 8 + 5} y={0} width={5} height={70} rx={1} fill="#c9a84c" />
      ))}
    </svg>
    <span className="text-ivory/40 text-xs">{label}</span>
  </div>
);

export default function Gallery() {
  const [errors, setErrors] = useState<Record<string, boolean>>({});

  const onError = (id: string) =>
    setErrors((prev) => ({ ...prev, [id]: true }));

  return (
    <section id="gallery" className="py-24 bg-ivory">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader eyebrow="רגעים מבית הספר" title="גלריה" />

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="gold-glow-card relative aspect-square rounded-2xl overflow-hidden group bg-piano-dark"
            >
              {errors[photo.id] ? (
                <PianoFallback label={photo.label} />
              ) : (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={photo.src}
                  alt={photo.alt}
                  onError={() => onError(photo.id)}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              )}

              {/* Label overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-piano-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end">
                <span className="p-4 text-ivory text-sm font-medium">{photo.label}</span>
              </div>

              {/* Bottom gold shimmer */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold/60 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </div>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-center gap-3">
          <span className="block w-12 h-px bg-gold/20" />
          <p className="text-warm-gray/50 text-sm text-center">
            תמונות נוספות יועלו בקרוב — בינתיים, בואו לפגישת המפתח ותראו בעצמכם
          </p>
          <span className="block w-12 h-px bg-gold/20" />
        </div>
      </div>
    </section>
  );
}
