
import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

// ─── DESIGN TOKENS (match your site's dark cosmic palette) ───────────────────
const BG = "#0B0918";          // same as ServiceSection
const SURFACE = "#130E25";
const GOLD = "#C9A84C";
const GOLD_SOFT = "#F0D080";
const TEXT_MAIN = "#EDE0C8";
const TEXT_SUB = "#7A6FA0";
const BORDER = "#2B2250";

// ─── FALLBACK DATA (used if i18n key is missing) ─────────────────────────────
const FALLBACK_STATS = [
  { number: "28+", raw: 28, suffix: "+", label: "Years of Service", icon: "🪐" },
  { number: "5K+", raw: 5, suffix: "K+", label: "Individual Consultations", icon: "🔮" },
  { number: "98%", raw: 98, suffix: "%", label: "Client Success Rate", icon: "⭐" },
  { number: "35+", raw: 35, suffix: "+", label: "Countries Served", icon: "🌍" },
];

// ─── COUNT-UP HOOK ────────────────────────────────────────────────────────────
const useCountUp = (target, duration = 1800, start = false) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
};

// ─── SINGLE STAT CARD ─────────────────────────────────────────────────────────
const StatCard = ({ item, index, isVisible }) => {
  const count = useCountUp(item.raw, 1800 + index * 200, isVisible);
  const [hovered, setHovered] = useState(false);

  // Build the display string (5 → "5K+", 28 → "28+", 98 → "98%")
  const display = item.suffix === "K+"
    ? `${count}K+`
    : `${count}${item.suffix}`;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative flex flex-col items-center text-center rounded-2xl p-8 transition-all duration-500"
      style={{
        background: hovered
          ? `linear-gradient(135deg, ${GOLD}14 0%, ${SURFACE} 100%)`
          : SURFACE,
        border: `1px solid ${hovered ? GOLD + "55" : BORDER}`,
        boxShadow: hovered
          ? `0 0 40px ${GOLD}18, 0 12px 40px #00000060`
          : `0 4px 24px #00000040`,
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        animationDelay: `${index * 0.15}s`,
      }}
    >
      {/* Corner vedic accents */}
      {[["top-0 left-0", "border-t border-l rounded-tl-2xl"],
      ["top-0 right-0", "border-t border-r rounded-tr-2xl"],
      ["bottom-0 left-0", "border-b border-l rounded-bl-2xl"],
      ["bottom-0 right-0", "border-b border-r rounded-br-2xl"],
      ].map(([pos, cls]) => (
        <div
          key={pos}
          className={`absolute ${pos} w-4 h-4 ${cls} transition-all duration-500`}
          style={{ borderColor: hovered ? GOLD : GOLD + "44" }}
        />
      ))}

      {/* Spinning ring (on hover) */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full border border-dashed pointer-events-none"
        style={{
          borderColor: GOLD + "30",
          animation: hovered ? "spin 8s linear infinite" : "none",
        }}
      />

      {/* Icon */}
      <div
        className="text-3xl mb-4 w-14 h-14 flex items-center justify-center rounded-full transition-all duration-300"
        style={{
          background: `${GOLD}18`,
          border: `1px solid ${GOLD}33`,
          boxShadow: hovered ? `0 0 20px ${GOLD}30` : "none",
          filter: hovered ? `drop-shadow(0 0 8px ${GOLD})` : "none",
        }}
      >
        {item.icon}
      </div>

      {/* Animated number */}
      <div
        className="text-5xl md:text-6xl font-bold mb-2 relative z-10 transition-all duration-300"
        style={{
          fontFamily: "'Georgia', serif",
          background: `linear-gradient(135deg, ${GOLD_SOFT}, ${GOLD})`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          filter: hovered ? `drop-shadow(0 0 12px ${GOLD}80)` : "none",
        }}
      >
        {isVisible ? display : "0"}
      </div>

      {/* Underline bar */}
      <div
        className="rounded-full mb-3 transition-all duration-500"
        style={{
          height: "2px",
          width: hovered ? "48px" : "28px",
          background: `linear-gradient(90deg, ${GOLD}, ${GOLD_SOFT})`,
        }}
      />

      {/* Label */}
      <p
        className="text-xs uppercase font-semibold tracking-widest relative z-10"
        style={{ color: hovered ? TEXT_MAIN : TEXT_SUB, letterSpacing: "0.18em" }}
      >
        {item.label}
      </p>
    </div>
  );
};

// ─── MAIN SECTION ─────────────────────────────────────────────────────────────
const StatsSection = () => {
  const { t } = useTranslation();
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // i18n data with fallback
  let rawStats = [];
  try {
    rawStats = t('stats.items', { returnObjects: true });
  } catch (_) { }
  const statsData = Array.isArray(rawStats) && rawStats.length > 0
    ? rawStats.map((item, i) => ({
      ...FALLBACK_STATS[i],
      number: item.number,
      label: item.label,
    }))
    : FALLBACK_STATS;

  // Intersection observer → trigger count-up when section enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ background: BG }}
    >
      {/* ── TOP SEAMLESS BLEND from ServiceSection ── */}
      {/* ServiceSection ends at #0B0918 — we just continue it, no divider needed */}

      {/* Subtle horizontal gold rule */}
      <div style={{
        height: "1px",
        background: `linear-gradient(90deg, transparent, ${GOLD}40, transparent)`,
      }} />

      {/* Background glow clouds */}
      <div className="absolute inset-0 pointer-events-none" style={{ overflow: "hidden" }}>
        <div style={{
          position: "absolute", top: "-20%", left: "15%",
          width: "420px", height: "420px", borderRadius: "50%",
          background: `radial-gradient(circle, ${GOLD}08, transparent 70%)`,
        }} />
        <div style={{
          position: "absolute", bottom: "-20%", right: "15%",
          width: "380px", height: "380px", borderRadius: "50%",
          background: "radial-gradient(circle, #7B4FBF08, transparent 70%)",
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-20">

        {/* Section label */}
        <div className="flex items-center justify-center gap-3 mb-10">
          <div style={{ height: "1px", width: "60px", background: `linear-gradient(90deg, transparent, ${GOLD})` }} />
          <span style={{ color: GOLD, fontSize: "20px", filter: `drop-shadow(0 0 8px ${GOLD})` }}>✦</span>
          <p
            className="text-xs font-bold uppercase tracking-widest"
            style={{ color: GOLD, letterSpacing: "0.25em" }}
          >
            Our Journey in Numbers
          </p>
          <span style={{ color: GOLD, fontSize: "20px", filter: `drop-shadow(0 0 8px ${GOLD})` }}>✦</span>
          <div style={{ height: "1px", width: "60px", background: `linear-gradient(90deg, ${GOLD}, transparent)` }} />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {statsData.map((item, index) => (
            <StatCard
              key={index}
              item={item}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>

      {/* ── BOTTOM SEAMLESS BLEND into ZodiacCarousel ──
          The Zodiac section has a background IMAGE (corbg.png) with a dark overlay.
          We fade the bottom of Stats into a deep navy that matches the Zodiac's
          from-slate-950 overlay, so there is zero hard edge.                      */}
      <div
        className="pointer-events-none"
        style={{
          height: "120px",
          background: "linear-gradient(to bottom, transparent, #020617)",
          // #020617 = slate-950, matches Zodiac's from-slate-950/80 overlay exactly
        }}
      />

      <style>{`
        @keyframes spin {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to   { transform: translate(-50%, -50%) rotate(360deg); }
        }
      `}</style>
    </section>
  );
};

export default StatsSection;