"use client";

import { useState, useEffect } from "react";

const PHONE = "972535212574";
const MESSAGE = encodeURIComponent(
  "שלום נאור! ראיתי את האתר של אלפא קליד ואשמח לשמוע עוד על שיעורי פסנתר לילד/ה שלי 🎹"
);
const WA_URL = `https://wa.me/${PHONE}?text=${MESSAGE}`;

export default function WhatsAppCTA() {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  /* Show button after slight delay so it doesn't flash on load */
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 1200);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      className={`fixed bottom-7 left-7 z-50 flex items-center gap-3 transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{ direction: "rtl" }}
    >
      {/* Tooltip bubble — visible on hover */}
      <div
        className={`bg-white text-piano-black text-sm font-semibold px-4 py-3 rounded-2xl shadow-xl border border-green-100
          whitespace-nowrap transition-all duration-300 ease-out pointer-events-none
          ${hovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-3"}`}
        style={{ boxShadow: "0 4px 24px rgba(37,211,102,0.18)" }}
      >
        <span className="block leading-snug">דברו איתנו בוואטסאפ ✓</span>
        <span className="block text-xs text-green-600 font-normal mt-0.5">
          תשובה תוך דקות ⚡
        </span>
        {/* Arrow pointing left (toward the button) */}
        <span
          className="absolute top-1/2 -translate-y-1/2 -left-2 w-0 h-0"
          style={{
            borderTop: "7px solid transparent",
            borderBottom: "7px solid transparent",
            borderRight: "8px solid white",
          }}
        />
      </div>

      {/* Main button */}
      <a
        href={WA_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="שלח הודעה בוואטסאפ"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative flex items-center justify-center w-16 h-16 rounded-full shadow-2xl
          transition-transform duration-300 hover:scale-110 active:scale-95"
        style={{ background: "#25d366" }}
      >
        {/* Pulsing ring */}
        <span
          className="absolute inset-0 rounded-full animate-ping opacity-25"
          style={{ background: "#25d366", animationDuration: "2.2s" }}
        />
        {/* Second slower ring */}
        <span
          className="absolute -inset-2 rounded-full opacity-10 animate-ping"
          style={{ background: "#25d366", animationDuration: "3.5s", animationDelay: "0.6s" }}
        />

        {/* WhatsApp SVG icon */}
        <svg
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-9 h-9 relative z-10"
          aria-hidden="true"
        >
          <circle cx="16" cy="16" r="16" fill="#25d366" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16 6C10.477 6 6 10.477 6 16c0 1.854.504 3.59 1.385 5.082L6 26l5.09-1.368A9.96 9.96 0 0016 26c5.523 0 10-4.477 10-10S21.523 6 16 6zm-3.63 5.865c.183-.005.384-.01.573.357.208.4.7 1.708.762 1.832.062.124.103.27.02.434-.082.163-.124.264-.247.407-.124.143-.26.32-.37.43-.124.123-.254.258-.11.507.144.248.64 1.057 1.375 1.713.945.84 1.742 1.1 1.99 1.223.247.123.39.103.534-.062.144-.165.616-.72.78-.967.165-.247.33-.206.556-.124.226.082 1.43.675 1.677.798.247.123.412.185.474.288.062.103.062.596-.144 1.172-.206.576-.206.576-.37.72a2.38 2.38 0 01-.55.38c-.247.1-.473.14-.823.082-.35-.062-1.12-.206-2.147-.824-1.025-.617-1.724-1.36-2.234-1.997-.51-.638-.985-1.32-1.068-2.115-.083-.794.165-1.276.453-1.565.164-.164.35-.206.474-.206l.37.001z"
            fill="white"
          />
        </svg>
      </a>
    </div>
  );
}
