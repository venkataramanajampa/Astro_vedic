
import React, { useState, useEffect } from 'react';
import { FaWhatsapp, FaPaperPlane, FaTimes } from 'react-icons/fa';

// ─── CONFIG ────────────────────────────────────────────────────────────────────
const PHONE_NUMBER = "917989525323"; // ✅ Correct number
const ASTROLOGER_NAME = "Guruji Venkata Ramana";
const ASTROLOGER_TITLE = "Vedic Expert • 28+ Years";

// Business hours in IST (24h format)
const BUSINESS_HOURS = { start: 7, end: 21 }; // 7 AM – 9 PM IST

// Quick reply service topics — clicking pre-fills the message
const QUICK_TOPICS = [
  { label: "💍 Marriage & Relationship", msg: "Namaste Guruji 🙏 I need your guidance on Marriage & Relationship." },
  { label: "💼 Business & Finance", msg: "Namaste Guruji 🙏 I would like astrological guidance for my Business & Financial growth." },
  { label: "🏠 Vastu Shastra", msg: "Namaste Guruji 🙏 I need a Vastu consultation for my home/office." },
  { label: "🌿 Spiritual Healing", msg: "Namaste Guruji 🙏 I am seeking Spiritual Healing and guidance." },
  { label: "🔮 Kundli Reading", msg: "Namaste Guruji 🙏 I would like a Kundli (birth chart) reading." },
  { label: "✋ Palm Reading", msg: "Namaste Guruji 🙏 I am interested in a Palm Reading session." },
];

// ─── HELPERS ───────────────────────────────────────────────────────────────────
const getAvailability = () => {
  const nowIST = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));
  const hour = nowIST.getHours();
  const isOpen = hour >= BUSINESS_HOURS.start && hour < BUSINESS_HOURS.end;
  return {
    isOpen,
    label: isOpen ? "Available Now" : `Available from ${BUSINESS_HOURS.start}:00 AM IST`,
    dotColor: isOpen ? "#25D366" : "#FFA500",
  };
};

// ─── COMPONENT ─────────────────────────────────────────────────────────────────
const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [hasAutoOpened, setHasAutoOpened] = useState(false);
  const [showBubble, setShowBubble] = useState(false);
  const availability = getAvailability();

  // Auto-popup after 12 seconds if user hasn't interacted
  useEffect(() => {
    const bubbleTimer = setTimeout(() => setShowBubble(true), 8000);
    const openTimer = setTimeout(() => {
      if (!hasAutoOpened) {
        setIsOpen(true);
        setHasAutoOpened(true);
        setShowBubble(false);
      }
    }, 15000);
    return () => { clearTimeout(bubbleTimer); clearTimeout(openTimer); };
  }, [hasAutoOpened]);

  const handleTopicClick = (msg) => {
    setMessage(msg);
  };

  const handleSend = (e) => {
    e.preventDefault();
    const text = message
      ? encodeURIComponent(message)
      : encodeURIComponent("Namaste Guruji 🙏 I would like to consult with you.");
    window.open(`https://wa.me/${PHONE_NUMBER}?text=${text}`, '_blank');
    setMessage('');
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    setShowBubble(false);
    setHasAutoOpened(true);
  };

  return (
    <div className="fixed bottom-6 right-5 z-50 flex flex-col items-end gap-3" style={{ fontFamily: "'Segoe UI', sans-serif" }}>

      {/* ── CHAT WINDOW ── */}
      {isOpen && (
        <div
          className="w-80 rounded-2xl overflow-hidden shadow-2xl border"
          style={{
            background: "#0F0C1E",
            borderColor: "#C9A84C44",
            animation: "slideUp 0.35s cubic-bezier(0.34,1.56,0.64,1)",
          }}
        >
          {/* Header */}
          <div
            style={{
              background: "linear-gradient(135deg, #1A0A2E 0%, #2D1B4E 100%)",
              borderBottom: "1px solid #C9A84C55",
            }}
            className="p-4 flex justify-between items-center"
          >
            <div className="flex items-center gap-3">
              {/* Avatar placeholder with golden ring */}
              <div className="relative">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold"
                  style={{ background: "linear-gradient(135deg, #C9A84C, #F0D080)", color: "#0F0C1E" }}
                >
                  🔮
                </div>
                {/* Live availability dot */}
                <span
                  className="absolute bottom-0 right-0 w-3 h-3 rounded-full border-2"
                  style={{ backgroundColor: availability.dotColor, borderColor: "#1A0A2E" }}
                />
              </div>
              <div>
                <p className="font-bold text-sm" style={{ color: "#F0D080" }}>{ASTROLOGER_NAME}</p>
                <p className="text-xs" style={{ color: "#A89BC0" }}>{ASTROLOGER_TITLE}</p>
                {/* Availability */}
                <p className="text-xs font-semibold mt-0.5" style={{ color: availability.isOpen ? "#25D366" : "#FFA500" }}>
                  {availability.isOpen ? "● " : "○ "}{availability.label}
                </p>
              </div>
            </div>
            <button
              onClick={toggleChat}
              className="p-1.5 rounded-full transition hover:opacity-80"
              style={{ background: "#ffffff15", color: "#A89BC0" }}
            >
              <FaTimes size={14} />
            </button>
          </div>

          {/* Chat body */}
          <div
            className="p-4 flex flex-col gap-3 overflow-y-auto"
            style={{ background: "#100D20", minHeight: "80px", maxHeight: "260px" }}
          >
            {/* Guruji greeting bubble */}
            <div
              className="self-start rounded-r-xl rounded-bl-xl px-4 py-3 max-w-[90%] text-sm leading-relaxed"
              style={{ background: "#1E1540", border: "1px solid #C9A84C33", color: "#EDE0C8" }}
            >
              <p className="text-xs font-bold mb-1" style={{ color: "#C9A84C" }}>{ASTROLOGER_NAME}</p>
              Namaste! 🙏<br />
              The stars have a message for you. How can Guruji guide your path today?
              <p className="text-right mt-1 text-xs" style={{ color: "#6A5F80" }}>
                {new Date().toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit", timeZone: "Asia/Kolkata" })} IST
              </p>
            </div>

            {/* Quick Topic Buttons */}
            <div className="flex flex-col gap-1.5 mt-1">
              <p className="text-xs mb-1" style={{ color: "#7A6F9A" }}>Choose a topic or type your message:</p>
              {QUICK_TOPICS.map((topic) => (
                <button
                  key={topic.label}
                  onClick={() => handleTopicClick(topic.msg)}
                  className="text-left text-xs px-3 py-2 rounded-lg transition-all duration-200"
                  style={{
                    background: message === topic.msg ? "#C9A84C22" : "#1A1535",
                    border: `1px solid ${message === topic.msg ? "#C9A84C" : "#2E2550"}`,
                    color: message === topic.msg ? "#F0D080" : "#A89BC0",
                  }}
                >
                  {topic.label}
                </button>
              ))}
            </div>
          </div>

          {/* Input */}
          <form
            onSubmit={handleSend}
            className="flex gap-2 items-center p-3"
            style={{ background: "#0F0C1E", borderTop: "1px solid #C9A84C22" }}
          >
            <input
              type="text"
              placeholder="Or type your own message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="flex-1 text-xs px-3 py-2.5 rounded-full outline-none"
              style={{
                background: "#1A1535",
                border: "1px solid #2E2550",
                color: "#EDE0C8",
              }}
            />
            <button
              type="submit"
              className="p-2.5 rounded-full transition-all duration-200 hover:scale-110 flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #C9A84C, #F0D080)", color: "#0F0C1E" }}
            >
              <FaPaperPlane size={13} />
            </button>
          </form>

          {/* Powered by note */}
          <p className="text-center text-xs py-2" style={{ color: "#3A3060", background: "#0D0A1A" }}>
            Secured via WhatsApp • kvrastro.in
          </p>
        </div>
      )}

      {/* ── NOTIFICATION BUBBLE (auto-shows after 8s) ── */}
      {!isOpen && showBubble && (
        <div
          onClick={toggleChat}
          className="cursor-pointer rounded-2xl rounded-br-none px-4 py-3 text-sm shadow-xl"
          style={{
            background: "linear-gradient(135deg, #1E1540, #2D1B4E)",
            border: "1px solid #C9A84C55",
            color: "#EDE0C8",
            animation: "slideLeft 0.4s ease",
            maxWidth: "220px",
          }}
        >
          <p className="font-bold text-xs mb-0.5" style={{ color: "#C9A84C" }}>🔮 Guruji is available</p>
          <p className="text-xs" style={{ color: "#A89BC0" }}>Get cosmic guidance now — tap to chat!</p>
        </div>
      )}

      {/* ── FLOATING ACTION BUTTON ── */}
      <div className="relative">
        {/* Pulsing ring — only when closed */}
        {!isOpen && (
          <>
            <span
              className="absolute inset-0 rounded-full"
              style={{
                background: "#25D366",
                opacity: 0.25,
                animation: "ping 1.8s cubic-bezier(0, 0, 0.2, 1) infinite",
              }}
            />
            <span
              className="absolute inset-0 rounded-full"
              style={{
                background: "#25D366",
                opacity: 0.1,
                animation: "ping 1.8s cubic-bezier(0, 0, 0.2, 1) infinite 0.6s",
              }}
            />
          </>
        )}
        <button
          onClick={toggleChat}
          className="relative text-white rounded-full flex items-center justify-center transition-all duration-300 shadow-2xl hover:scale-110"
          style={{
            width: "58px",
            height: "58px",
            background: isOpen
              ? "#4A4060"
              : "linear-gradient(135deg, #25D366, #1DA851)",
            boxShadow: isOpen ? "none" : "0 0 20px #25D36650",
          }}
          aria-label="Chat on WhatsApp"
        >
          {isOpen ? <FaTimes size={22} /> : <FaWhatsapp size={26} />}
        </button>
      </div>

      {/* ── KEYFRAME STYLES ── */}
      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px) scale(0.95); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes slideLeft {
          from { opacity: 0; transform: translateX(20px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes ping {
          75%, 100% { transform: scale(2); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default WhatsAppWidget;