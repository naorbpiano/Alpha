"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    /* Only activate on fine-pointer (mouse) devices */
    if (!window.matchMedia("(pointer: fine)").matches) return;

    let dotX = 0, dotY = 0;
    let ringX = 0, ringY = 0;
    let rafId: number;

    const onMove = (e: MouseEvent) => {
      dotX = e.clientX;
      dotY = e.clientY;
      if (!isVisible) setIsVisible(true);

      /* Detect clickable elements */
      const target = e.target as HTMLElement;
      const clickable = target.closest("a, button, [role='button'], input, select, textarea, label");
      setIsPointer(!!clickable);
    };

    const onLeave = () => setIsVisible(false);
    const onEnter = () => setIsVisible(true);

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    /* Smooth ring trailing animation */
    const tick = () => {
      const ease = 0.12;
      ringX += (dotX - ringX) * ease;
      ringY += (dotY - ringY) * ease;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${dotX - 4}px, ${dotY - 4}px)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX - 20}px, ${ringY - 20}px)`;
      }

      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      cancelAnimationFrame(rafId);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {/* Small dot — snaps instantly */}
      <div
        ref={dotRef}
        aria-hidden="true"
        className="fixed top-0 right-0 z-[9999] pointer-events-none will-change-transform hidden md:block"
        style={{
          width: 8,
          height: 8,
          borderRadius: "50%",
          background: "#c9a84c",
          opacity: isVisible ? 1 : 0,
          transition: "opacity 0.3s, width 0.2s, height 0.2s",
        }}
      />

      {/* Trailing ring — lags behind */}
      <div
        ref={ringRef}
        aria-hidden="true"
        className="fixed top-0 right-0 z-[9998] pointer-events-none will-change-transform hidden md:block"
        style={{
          width: isPointer ? 48 : 40,
          height: isPointer ? 48 : 40,
          borderRadius: "50%",
          border: `1.5px solid ${isPointer ? "rgba(201,168,76,0.9)" : "rgba(201,168,76,0.45)"}`,
          opacity: isVisible ? 1 : 0,
          transition:
            "opacity 0.3s, width 0.25s cubic-bezier(0.23,1,0.32,1), height 0.25s cubic-bezier(0.23,1,0.32,1), border-color 0.25s",
          backdropFilter: isPointer ? "blur(1px)" : "none",
        }}
      />
    </>
  );
}
