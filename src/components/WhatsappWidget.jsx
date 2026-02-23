import React, { useState } from 'react';
// You might need to install react-icons: npm install react-icons
import { FaWhatsapp, FaPaperPlane, FaTimes } from 'react-icons/fa';

const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  //atrologer details
  const phoneNumber = "+91 79895 25323";
  const astrologerName = "Acharya Sharma"; // Name displayed in header

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    // Create the WhatsApp link with the user's message
    const text = message ? encodeURIComponent(message) : encodeURIComponent("Namaste, I would like to consult with an astrologer.");
    window.open(`https://wa.me/${phoneNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4 font-sans">

      {/* --- CHAT WINDOW (Only shows when isOpen is true) --- */}
      {isOpen && (
        <div className="bg-white w-80 rounded-2xl shadow-2xl overflow-hidden border border-gray-100 animate-fade-in-up">

          {/* Header (Green) */}
          <div className="bg-[#075E54] p-4 flex justify-between items-center text-white">
            <div className="flex items-center gap-3">
              <FaWhatsapp className="text-2xl" />
              <div>
                <h4 className="font-bold text-sm">Let's chat on WhatsApp</h4>
                <p className="text-xs text-green-100">Typically replies in 5 mins</p>
              </div>
            </div>
            <button onClick={toggleChat} className="hover:bg-white/20 p-1 rounded-full transition">
              <FaTimes />
            </button>
          </div>

          {/* Chat Body (Beige Pattern) */}
          <div className="bg-[#E5DDD5] h-64 p-4 overflow-y-auto flex flex-col gap-3 relative">
            {/* Background Pattern Overlay (Optional CSS trick) */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')]"></div>

            {/* Astrologer Message Bubble */}
            <div className="relative z-10 bg-white p-3 rounded-r-lg rounded-bl-lg shadow-sm self-start max-w-[85%] text-sm text-gray-800">
              <p className="font-bold text-orange-600 text-xs mb-1">{astrologerName}</p>
              <p>Namaste! 🙏 <br /> How can I help you with your destiny today?</p>
              <span className="text-[10px] text-gray-400 block text-right mt-1">10:00 AM</span>
            </div>
          </div>

          {/* Input Footer */}
          <form onSubmit={handleSendMessage} className="bg-gray-50 p-3 flex gap-2 items-center border-t">
            <input
              type="text"
              placeholder="Write your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="flex-1 bg-white border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-[#25D366]"
            />
            <button
              type="submit"
              className="bg-[#25D366] text-white p-2.5 rounded-full hover:bg-[#128C7E] transition shadow-md flex items-center justify-center"
            >
              <FaPaperPlane className="text-sm ml-0.5" />
            </button>
          </form>
        </div>
      )}

      {/* --- TOGGLE BUTTON (Floating Action Button) --- */}
      <button
        onClick={toggleChat}
        className={`${isOpen ? 'bg-gray-500 rotate-90' : 'bg-[#25D366]'} text-white p-4 rounded-full shadow-lg hover:scale-110 transition duration-300 flex items-center justify-center`}
      >
        {isOpen ? <FaTimes className="text-xl" /> : <FaWhatsapp className="text-2xl" />}
      </button>

      {/* Optional: "Chat with us" tooltip if closed */}
      {!isOpen && (
        <div className="absolute right-16 top-2 bg-white px-3 py-1 rounded-lg shadow text-xs font-bold text-gray-700 whitespace-nowrap animate-bounce">
          Chat with Astrologer
        </div>
      )}

    </div>
  );
};

export default WhatsAppWidget;