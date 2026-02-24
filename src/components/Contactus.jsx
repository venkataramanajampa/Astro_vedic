
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaStar, FaUser, FaCalendarAlt, FaClock, FaGlobe } from 'react-icons/fa';

// ─── CONFIG (single source of truth) ─────────────────────────────────────────
const PHONE_NUMBER = "917989525323"; // ✅ Fixed: was wrong placeholder before
const ASTROLOGER_EMAIL = "kvrastro@gmail.com"; // 🔧 Update to your real email

// ─── FIELD CONFIG ─────────────────────────────────────────────────────────────
const fields = [
  { name: "name", label: "Full Name", type: "text", placeholder: "Your full name", icon: FaUser, span: 2 },
  { name: "dob", label: "Date of Birth", type: "date", placeholder: "", icon: FaCalendarAlt, span: 1 },
  { name: "timeOfBirth", label: "Time of Birth", type: "time", placeholder: "", icon: FaClock, span: 1 },
  { name: "placeOfBirth", label: "Place of Birth", type: "text", placeholder: "City, State, Country", icon: FaGlobe, span: 2 },
];

// ─── SHARED STYLES ────────────────────────────────────────────────────────────
const gold = "#C9A84C";
const goldSoft = "#F0D080";
const bg = "#0B0918";
const surface = "#130E25";
const surfaceUp = "#1C1638";
const textMain = "#EDE0C8";
const textSub = "#9889BC";
const border = "#2B2250";

const ContactPage = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: '', dob: '', timeOfBirth: '', placeOfBirth: '', message: ''
  });
  const [focused, setFocused] = useState('');
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const constructMessage = () =>
    `🙏 *Namaste Guruji!*%0A%0A` +
    `I am seeking your divine guidance.%0A%0A` +
    `*Name:* ${formData.name}%0A` +
    `*Date of Birth:* ${formData.dob}%0A` +
    `*Time of Birth:* ${formData.timeOfBirth || 'Not known'}%0A` +
    `*Place of Birth:* ${formData.placeOfBirth}%0A` +
    (formData.message ? `*My Query:* ${formData.message}` : '');

  const handleWhatsApp = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.dob) {
      alert('Please fill in at least your Name and Date of Birth to proceed.');
      return;
    }
    window.open(`https://wa.me/${PHONE_NUMBER}?text=${constructMessage()}`, '_blank');
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  const handleMail = (e) => {
    e.preventDefault();
    const subject = `Astrology Consultation – ${formData.name}`;
    const body = constructMessage()
      .replace(/%0A/g, "\n")
      .replace(/\*/g, "");
    window.location.href = `mailto:${ASTROLOGER_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center py-14 px-4"
      style={{ background: bg, fontFamily: "'Segoe UI', sans-serif", position: "relative", overflow: "hidden" }}
    >
      {/* Background constellation dots */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              borderRadius: "50%",
              background: gold,
              opacity: Math.random() * 0.4 + 0.1,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `twinkle ${Math.random() * 3 + 2}s ease-in-out infinite alternate`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Radial glow behind card */}
      <div style={{
        position: "absolute", top: "50%", left: "50%",
        transform: "translate(-50%, -50%)",
        width: "700px", height: "700px",
        background: "radial-gradient(circle, #C9A84C08 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      {/* ── CARD ── */}
      <div
        className="relative w-full flex flex-col md:flex-row overflow-hidden"
        style={{
          maxWidth: "900px",
          borderRadius: "24px",
          background: surface,
          border: `1px solid ${border}`,
          boxShadow: `0 0 60px #C9A84C12, 0 30px 80px #00000080`,
        }}
      >
        {/* ── LEFT PANEL ── */}
        <div
          className="md:w-2/5 p-10 flex flex-col justify-between relative"
          style={{
            background: "linear-gradient(160deg, #1E1040 0%, #12082A 100%)",
            borderRight: `1px solid ${border}`,
          }}
        >
          {/* Decorative glow */}
          <div style={{
            position: "absolute", top: "-60px", right: "-60px",
            width: "200px", height: "200px",
            background: "radial-gradient(circle, #C9A84C22, transparent 70%)",
            borderRadius: "50%",
          }} />

          <div>
            {/* Om symbol / logo */}
            <div
              className="text-5xl mb-6 text-center"
              style={{ filter: `drop-shadow(0 0 12px ${gold})` }}
            >
              🔮
            </div>

            <h2
              className="text-3xl font-bold mb-2 text-center"
              style={{ color: goldSoft, fontFamily: "'Georgia', serif", letterSpacing: "0.5px" }}
            >
              Book a Consultation
            </h2>
            <p className="text-center text-sm mb-8" style={{ color: textSub }}>
              Share your birth details for an accurate reading
            </p>

            {/* Contact info */}
            <div className="space-y-5">
              {[
                { Icon: FaPhoneAlt, label: "Call / WhatsApp", value: "+91 79895 25323" },
                { Icon: FaEnvelope, label: "Email", value: ASTROLOGER_EMAIL },
                { Icon: FaMapMarkerAlt, label: "Location", value: "Andhra Pradesh, India" },
              ].map(({ Icon, label, value }) => (
                <div key={label} className="flex items-center gap-4">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: "#C9A84C18", border: `1px solid ${gold}44` }}
                  >
                    <Icon size={14} style={{ color: gold }} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest" style={{ color: textSub }}>{label}</p>
                    <p className="text-sm font-semibold" style={{ color: textMain }}>{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial */}
          <div
            className="mt-10 p-4 rounded-2xl text-center"
            style={{ background: "#C9A84C10", border: "1px solid #C9A84C33" }}
          >
            <div className="flex justify-center gap-0.5 mb-2">
              {[...Array(5)].map((_, i) => <FaStar key={i} size={12} style={{ color: gold }} />)}
            </div>
            <p className="text-xs italic leading-relaxed" style={{ color: textSub }}>
              "Guruji's guidance transformed my life. His accuracy in reading my Kundli was extraordinary."
            </p>
            <p className="text-xs mt-2 font-semibold" style={{ color: gold }}>— Priya S., Chennai</p>
          </div>
        </div>

        {/* ── RIGHT PANEL ── */}
        <div className="md:w-3/5 p-10">
          <h3
            className="text-2xl font-bold mb-1"
            style={{ color: goldSoft, fontFamily: "'Georgia', serif" }}
          >
            Your Birth Details
          </h3>
          <p className="text-sm mb-8" style={{ color: textSub }}>
            Required for an accurate Vedic astrological reading
          </p>

          <form className="space-y-5">
            {/* Fields grid */}
            <div className="grid grid-cols-2 gap-4">
              {fields.map(({ name, label, type, placeholder, icon: Icon, span }) => (
                <div key={name} style={{ gridColumn: `span ${span}` }}>
                  <label
                    className="block text-xs font-semibold mb-1.5 uppercase tracking-widest"
                    style={{ color: focused === name ? gold : textSub }}
                  >
                    {label}
                  </label>
                  <div className="relative">
                    <Icon
                      size={13}
                      style={{
                        position: "absolute", left: "14px", top: "50%",
                        transform: "translateY(-50%)",
                        color: focused === name ? gold : "#4A4070",
                        transition: "color 0.2s",
                      }}
                    />
                    <input
                      type={type}
                      name={name}
                      placeholder={placeholder}
                      value={formData[name]}
                      onChange={handleChange}
                      onFocus={() => setFocused(name)}
                      onBlur={() => setFocused('')}
                      className="w-full rounded-xl py-3 pl-10 pr-4 text-sm outline-none transition-all duration-200"
                      style={{
                        background: surfaceUp,
                        border: `1px solid ${focused === name ? gold : border}`,
                        color: textMain,
                        boxShadow: focused === name ? `0 0 0 3px #C9A84C18` : "none",
                        colorScheme: "dark",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Message */}
            <div>
              <label
                className="block text-xs font-semibold mb-1.5 uppercase tracking-widest"
                style={{ color: focused === 'message' ? gold : textSub }}
              >
                Your Question / Concern (Optional)
              </label>
              <textarea
                name="message"
                rows={3}
                placeholder="Describe what area of life you need guidance on..."
                value={formData.message}
                onChange={handleChange}
                onFocus={() => setFocused('message')}
                onBlur={() => setFocused('')}
                className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-all duration-200 resize-none"
                style={{
                  background: surfaceUp,
                  border: `1px solid ${focused === 'message' ? gold : border}`,
                  color: textMain,
                  boxShadow: focused === 'message' ? `0 0 0 3px #C9A84C18` : "none",
                }}
              />
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              {/* WhatsApp */}
              <button
                onClick={handleWhatsApp}
                className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-sm transition-all duration-200 hover:-translate-y-0.5 active:scale-95"
                style={{
                  background: sent
                    ? "linear-gradient(135deg, #1DA851, #128C7E)"
                    : "linear-gradient(135deg, #25D366, #1DA851)",
                  color: "#fff",
                  boxShadow: "0 4px 20px #25D36630",
                }}
              >
                <FaWhatsapp size={18} />
                {sent ? "✓ Opening WhatsApp..." : "Chat on WhatsApp"}
              </button>

              {/* Email */}
              <button
                onClick={handleMail}
                className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 active:scale-95"
                style={{
                  background: surfaceUp,
                  border: `1px solid ${border}`,
                  color: textMain,
                }}
              >
                <FaEnvelope size={15} style={{ color: textSub }} />
                Send Email
              </button>
            </div>

            <p className="text-xs text-center" style={{ color: "#4A4070" }}>
              🔒 Your birth details are private and used only for your consultation
            </p>
          </form>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes twinkle {
          from { opacity: 0.1; transform: scale(0.8); }
          to   { opacity: 0.5; transform: scale(1.2); }
        }
      `}</style>
    </div>
  );
};

export default ContactPage;