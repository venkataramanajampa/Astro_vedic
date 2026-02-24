
import React, { useState } from 'react';
import { FaWhatsapp, FaArrowRight } from 'react-icons/fa';

// ─── CONFIG ────────────────────────────────────────────────────────────────────
const PHONE_NUMBER = "917989525323";

// Services with icons, descriptions, and pre-filled WhatsApp messages
const SERVICES = [
  {
    id: 1,
    icon: "💍",
    title: "Relationship & Marriage",
    desc: "Resolve conflicts, delays, and compatibility issues with cosmic clarity.",
    color: "#E97C8E",
    msg: "Namaste Guruji 🙏 I need your guidance on Relationship & Marriage matters. Please help me.",
  },
  {
    id: 2,
    icon: "💼",
    title: "Business Growth",
    desc: "Astrological remedies for financial stability, success, and prosperity.",
    color: "#F0C060",
    msg: "Namaste Guruji 🙏 I am seeking astrological guidance for Business Growth and financial success.",
  },
  {
    id: 3,
    icon: "🏠",
    title: "Vastu Shastra",
    desc: "Optimise your home and office for positive energy, peace, and abundance.",
    color: "#70C9A0",
    msg: "Namaste Guruji 🙏 I need a Vastu Shastra consultation for my home/office.",
  },
  {
    id: 4,
    icon: "⚖️",
    title: "Divorce & Legal Issues",
    desc: "Guidance through legal disputes and emotional healing from separation.",
    color: "#9AB8F0",
    msg: "Namaste Guruji 🙏 I need guidance related to Divorce and Legal issues.",
  },
  {
    id: 5,
    icon: "👨‍👩‍👦",
    title: "Family Disputes",
    desc: "Restore peace, harmony, and understanding within your family unit.",
    color: "#B088F0",
    msg: "Namaste Guruji 🙏 I need your help to resolve Family Disputes and restore harmony.",
  },
  {
    id: 6,
    icon: "✋",
    title: "Palm Reading",
    desc: "Discover your destiny written in the sacred lines of your hand.",
    color: "#F0A070",
    msg: "Namaste Guruji 🙏 I am interested in a Palm Reading (Hast Rekha) session.",
  },
  {
    id: 7,
    icon: "🌿",
    title: "Spiritual Healing",
    desc: "Cleanse your aura, remove negativity, and restore spiritual balance.",
    color: "#60D0B0",
    msg: "Namaste Guruji 🙏 I am seeking Spiritual Healing and aura cleansing.",
  },
  {
    id: 8,
    icon: "📜",
    title: "Kundli Reading",
    desc: "Complete birth chart analysis for life path, career, and relationships.",
    color: "#C9A84C",
    msg: "Namaste Guruji 🙏 I would like a detailed Kundli (birth chart) reading and analysis.",
  },
];

// ─── SERVICE CARD ─────────────────────────────────────────────────────────────
const ServiceCard = ({ service }) => {
  const [hovered, setHovered] = useState(false);

  const handleWhatsApp = () => {
    window.open(
      `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(service.msg)}`,
      '_blank'
    );
  };

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={handleWhatsApp}
      className="relative cursor-pointer rounded-2xl p-6 flex flex-col gap-3 transition-all duration-300"
      style={{
        background: hovered
          ? `linear-gradient(135deg, ${service.color}18 0%, #1C1638 100%)`
          : "linear-gradient(135deg, #161230 0%, #110D22 100%)",
        border: `1px solid ${hovered ? service.color + "55" : "#2B2250"}`,
        boxShadow: hovered
          ? `0 0 30px ${service.color}20, 0 8px 32px #00000060`
          : "0 4px 20px #00000040",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        backdropFilter: "blur(10px)",
      }}
    >
      {/* Glow dot top-right */}
      <div
        style={{
          position: "absolute", top: "16px", right: "16px",
          width: "8px", height: "8px", borderRadius: "50%",
          background: service.color,
          opacity: hovered ? 1 : 0.3,
          boxShadow: hovered ? `0 0 10px ${service.color}` : "none",
          transition: "all 0.3s",
        }}
      />

      {/* Icon */}
      <div
        className="text-3xl w-12 h-12 flex items-center justify-center rounded-xl"
        style={{
          background: `${service.color}18`,
          border: `1px solid ${service.color}33`,
          transition: "all 0.3s",
          boxShadow: hovered ? `0 0 16px ${service.color}30` : "none",
        }}
      >
        {service.icon}
      </div>

      {/* Title */}
      <h3
        className="font-bold text-base"
        style={{
          color: hovered ? service.color : "#EDE0C8",
          fontFamily: "'Georgia', serif",
          transition: "color 0.3s",
        }}
      >
        {service.title}
      </h3>

      {/* Description */}
      <p className="text-sm leading-relaxed" style={{ color: "#7A6FA0" }}>
        {service.desc}
      </p>

      {/* CTA row */}
      <div
        className="flex items-center gap-2 mt-auto pt-2 text-xs font-bold uppercase tracking-widest"
        style={{
          color: hovered ? "#25D366" : "#4A4070",
          transition: "color 0.3s",
        }}
      >
        <FaWhatsapp size={13} />
        <span>Consult on WhatsApp</span>
        <FaArrowRight
          size={10}
          style={{
            transform: hovered ? "translateX(4px)" : "translateX(0)",
            transition: "transform 0.3s",
          }}
        />
      </div>
    </div>
  );
};

// ─── SECTION ──────────────────────────────────────────────────────────────────
const ServiceSection = () => {
  return (
    <section
      className="py-20 px-4 relative overflow-hidden"
      style={{ background: "#0B0918" }}
    >
      {/* Background gradient mesh */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: "radial-gradient(ellipse at 20% 50%, #C9A84C08 0%, transparent 60%), radial-gradient(ellipse at 80% 50%, #7B4FBF08 0%, transparent 60%)",
      }} />

      {/* Horizontal rule (top) */}
      <div style={{
        position: "absolute", top: 0, left: "10%", right: "10%", height: "1px",
        background: "linear-gradient(90deg, transparent, #C9A84C33, transparent)",
      }} />

      <div className="max-w-6xl mx-auto relative">

        {/* Section header */}
        <div className="text-center mb-14">
          <p
            className="text-xs font-bold uppercase tracking-widest mb-3"
            style={{ color: "#C9A84C", letterSpacing: "0.25em" }}
          >
            What We Solve
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: "#EDE0C8", fontFamily: "'Georgia', serif" }}
          >
            Our Major Services
          </h2>
          <p className="text-base max-w-lg mx-auto" style={{ color: "#7A6FA0" }}>
            Click any service to instantly start a WhatsApp consultation with Guruji
          </p>
          {/* Decorative line */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <div style={{ height: "1px", width: "60px", background: "linear-gradient(90deg, transparent, #C9A84C)" }} />
            <span style={{ color: "#C9A84C", fontSize: "18px" }}>✦</span>
            <div style={{ height: "1px", width: "60px", background: "linear-gradient(90deg, #C9A84C, transparent)" }} />
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <p className="text-sm mb-5" style={{ color: "#5A5080" }}>
            Don't see your concern? Talk to Guruji directly.
          </p>
          <a
            href={`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent("Namaste Guruji 🙏 I have a personal concern I'd like to discuss with you.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            style={{
              background: "linear-gradient(135deg, #25D366, #1DA851)",
              color: "#fff",
              boxShadow: "0 4px 24px #25D36640",
            }}
          >
            <FaWhatsapp size={18} />
            Consult Guruji Now
          </a>
        </div>
      </div>

      {/* Horizontal rule (bottom) */}
      <div style={{
        position: "absolute", bottom: 0, left: "10%", right: "10%", height: "1px",
        background: "linear-gradient(90deg, transparent, #C9A84C33, transparent)",
      }} />
    </section>
  );
};

export default ServiceSection;