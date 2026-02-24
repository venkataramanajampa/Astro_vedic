
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  FaFacebookF, FaInstagram, FaYoutube,
  FaMapMarkerAlt, FaPhoneAlt, FaEnvelope,
  FaWhatsapp
} from 'react-icons/fa';

// ─── DESIGN TOKENS (match site-wide palette) ─────────────────────────────────
const GOLD = "#C9A84C";
const GOLD_SOFT = "#F0D080";
const BG = "#07040F";          // matches html/body/App root
const SURFACE = "#0F0B1F";
const SURFACE_UP = "#16112A";
const BORDER = "#2B2250";
const TEXT_MAIN = "#EDE0C8";
const TEXT_SUB = "#7A6FA0";
const PHONE = "917989525323";

// ─── NAV LINKS ────────────────────────────────────────────────────────────────
const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Vastu Shastra", to: "/vastu" },
  { label: "Dosha Remedies", to: "/dosha-remedies" },
  { label: "Gem Stones", to: "/gem-stones" },
  { label: "Rudraksha", to: "/rudraksha" },
  { label: "Yantra", to: "/yantra" },
  { label: "Contact", to: "/contact" },
];

const SOCIALS = [
  { icon: FaFacebookF, href: "#", label: "Facebook" },
  { icon: FaInstagram, href: "#", label: "Instagram" },
  { icon: FaYoutube, href: "#", label: "YouTube" },
  {
    icon: FaWhatsapp,
    href: `https://wa.me/${PHONE}?text=${encodeURIComponent("Namaste Guruji 🙏 I would like to connect with you.")}`,
    label: "WhatsApp",
    highlight: true,
  },
];

// ─── COMPONENT ────────────────────────────────────────────────────────────────
const Footer = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        background: `linear-gradient(180deg, ${BG} 0%, #050210 100%)`,
        borderTop: `1px solid ${BORDER}`,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background glow */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: `radial-gradient(ellipse at 50% 0%, ${GOLD}08, transparent 60%)`,
      }} />

      {/* ── TOP GOLD RULE ── */}
      <div style={{
        height: "1px",
        background: `linear-gradient(90deg, transparent, ${GOLD}50, transparent)`,
      }} />

      {/* ── MAIN GRID ── */}
      <div
        className="relative z-10 max-w-6xl mx-auto px-6 md:px-8"
        style={{ paddingTop: "56px", paddingBottom: "32px" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">

          {/* ── COL 1: Brand ── */}
          <div className="space-y-5">
            {/* Logo / brand block */}
            <div className="flex items-center gap-3">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0"
                style={{
                  background: `linear-gradient(135deg, ${GOLD}, ${GOLD_SOFT})`,
                  color: "#07040F",
                  boxShadow: `0 0 20px ${GOLD}40`,
                  fontFamily: "Georgia, serif",
                }}
              >
                ॐ
              </div>
              <div>
                <h3 className="font-bold text-base leading-tight" style={{ color: GOLD_SOFT, fontFamily: "Georgia, serif" }}>
                  Sri Karthikeya
                </h3>
                <p className="text-xs" style={{ color: TEXT_SUB }}>Jyothisya Nivas</p>
              </div>
            </div>

            <p className="text-sm leading-relaxed" style={{ color: TEXT_SUB }}>
              Guiding souls through the wisdom of Vedic astrology for over 28 years.
              Trusted by 5,000+ clients across 35+ countries.
            </p>

            {/* Social icons */}
            <div className="flex gap-3 pt-1">
              {SOCIALS.map(({ icon: Icon, href, label, highlight }) => (
                <a
                  key={label}
                  href={href}
                  target={href !== "#" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  style={{
                    background: highlight ? "#25D36622" : SURFACE_UP,
                    border: `1px solid ${highlight ? "#25D366" : BORDER}`,
                    color: highlight ? "#25D366" : TEXT_SUB,
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = highlight ? "#25D366" : `${GOLD}22`;
                    e.currentTarget.style.color = highlight ? "#fff" : GOLD;
                    e.currentTarget.style.borderColor = highlight ? "#25D366" : GOLD;
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = highlight ? "#25D36622" : SURFACE_UP;
                    e.currentTarget.style.color = highlight ? "#25D366" : TEXT_SUB;
                    e.currentTarget.style.borderColor = highlight ? "#25D366" : BORDER;
                  }}
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* ── COL 2: Quick Links ── */}
          <div>
            <h4
              className="text-sm font-bold uppercase tracking-widest mb-5 pb-3 relative"
              style={{ color: GOLD, letterSpacing: "0.2em" }}
            >
              Quick Links
              <span
                className="absolute bottom-0 left-0 rounded-full"
                style={{ height: "1px", width: "40px", background: GOLD }}
              />
            </h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2.5">
              {NAV_LINKS.map(({ label, to }) => (
                <Link
                  key={to}
                  to={to}
                  className="text-sm transition-all duration-200 flex items-center gap-1.5 group"
                  style={{ color: TEXT_SUB }}
                  onMouseEnter={e => e.currentTarget.style.color = GOLD_SOFT}
                  onMouseLeave={e => e.currentTarget.style.color = TEXT_SUB}
                >
                  <span
                    style={{
                      width: "4px", height: "4px", borderRadius: "50%",
                      background: GOLD, flexShrink: 0, opacity: 0.5,
                    }}
                  />
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* ── COL 3: Contact ── */}
          <div>
            <h4
              className="text-sm font-bold uppercase tracking-widest mb-5 pb-3 relative"
              style={{ color: GOLD, letterSpacing: "0.2em" }}
            >
              Contact Us
              <span
                className="absolute bottom-0 left-0 rounded-full"
                style={{ height: "1px", width: "40px", background: GOLD }}
              />
            </h4>

            <div className="space-y-4">
              {[
                {
                  Icon: FaPhoneAlt,
                  label: "Call / WhatsApp",
                  value: "+91 79895 25323",
                  href: `https://wa.me/${PHONE}`,
                },
                {
                  Icon: FaEnvelope,
                  label: "Email",
                  value: "kvrastro@gmail.com",
                  href: "mailto:kvrastro@gmail.com",
                },
                {
                  Icon: FaMapMarkerAlt,
                  label: "Location",
                  value: "Andhra Pradesh, India",
                  href: null,
                },
              ].map(({ Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-3 group">
                  <div
                    className="mt-0.5 w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-200"
                    style={{ background: `${GOLD}18`, border: `1px solid ${GOLD}33` }}
                  >
                    <Icon size={12} style={{ color: GOLD }} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider mb-0.5" style={{ color: TEXT_SUB }}>
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="text-sm font-medium transition-colors duration-200"
                        style={{ color: TEXT_MAIN }}
                        onMouseEnter={e => e.currentTarget.style.color = GOLD_SOFT}
                        onMouseLeave={e => e.currentTarget.style.color = TEXT_MAIN}
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium" style={{ color: TEXT_MAIN }}>{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── DIVIDER ── */}
        <div
          className="my-8"
          style={{ height: "1px", background: `linear-gradient(90deg, transparent, ${BORDER}, transparent)` }}
        />

        {/* ── BOTTOM BAR ── */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs" style={{ color: TEXT_SUB }}>
          <p>
            © {year}{" "}
            <span style={{ color: GOLD }}>Sri Karthikeya Jyothisya Nivas</span>
            {" "}· All rights reserved
          </p>
          <div className="flex gap-6">
            <Link
              to="/"
              className="transition-colors duration-200"
              style={{ color: TEXT_SUB }}
              onMouseEnter={e => e.currentTarget.style.color = GOLD}
              onMouseLeave={e => e.currentTarget.style.color = TEXT_SUB}
            >
              Privacy Policy
            </Link>
            <Link
              to="/"
              className="transition-colors duration-200"
              style={{ color: TEXT_SUB }}
              onMouseEnter={e => e.currentTarget.style.color = GOLD}
              onMouseLeave={e => e.currentTarget.style.color = TEXT_SUB}
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;