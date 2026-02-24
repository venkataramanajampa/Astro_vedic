
const HomePage = () => {
  return (
    /*
      Root container:
      - No padding / margin (App.css already zeroed #root)
      - Dark cosmic base so any 1px seam between sections is invisible
      - flex-col ensures sections stack vertically end-to-end
    */
    <div
      className="flex flex-col min-h-screen w-full overflow-x-hidden"
      style={{ backgroundColor: '#07040F' }}
    >

      {/* ── 1. HERO ────────────────────────────────────────────────────────
          HeroSection has its own full-bleed background image + overlay.
          No wrapper padding or margin — let it touch the Navbar above
          and Stats below with zero gap.
      ──────────────────────────────────────────────────────────────────── */}
      <HeroSection />

      {/* ── 2. STATS ───────────────────────────────────────────────────────
          StatsSection background: #0B0918.
          Hero bottom fades to black → matches Stats' dark top perfectly.
          No wrapper, no card, no padding — raw section fills full width.
      ──────────────────────────────────────────────────────────────────── */}
      <StatsSection />

      {/* ── 3. SERVICES ────────────────────────────────────────────────────
          ServicesSection background: #0B0918 (same as Stats).
          Stats has a gold separator line at its bottom edge providing the
          visual break — no extra margin needed.
      ──────────────────────────────────────────────────────────────────── */}
      <ServicesSection />

      {/* ── 4. ZODIAC CAROUSEL ─────────────────────────────────────────────
          ZodiacCarousel has its own image bg + dark gradient overlay.
          The overlay starts at solid #020617 at the very top, matching
          the #0B0918 Services bottom exactly — seamless join.
      ──────────────────────────────────────────────────────────────────── */}
      <ZodiacCarousel />

      {/* ── 5. FOOTER ──────────────────────────────────────────────────────
          Footer gets mt-auto to push it to the page bottom when content
          is short (edge case). On full pages it just stacks naturally.
      ──────────────────────────────────────────────────────────────────── */}
      <div className="mt-auto">
        <Footer />
      </div>

      {/* ── FLOATING WHATSAPP WIDGET (fixed position, above everything) ─── */}
      <WhatsAppWidget />

    </div>
  );
};

export default HomePage;