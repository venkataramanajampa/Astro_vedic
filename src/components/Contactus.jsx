import React, { useState } from 'react';
import { useTranslation } from 'react-i18next'; // 1. Import Hook
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaStar } from 'react-icons/fa';

const ContactPage = () => {
  const { t } = useTranslation(); // 2. Initialize Hook

  // State to hold user input
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    timeOfBirth: '',
    placeOfBirth: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 3. Logic to formatting the message (Now uses Translations!)
  const constructMessage = () => {
    return `${t('contact.msg.intro')}%0A%0A` +
           `*${t('contact.msg.name')}:* ${formData.name}%0A` +
           `*${t('contact.msg.dob')}:* ${formData.dob}%0A` +
           `*${t('contact.msg.time')}:* ${formData.timeOfBirth}%0A` +
           `*${t('contact.msg.place')}:* ${formData.placeOfBirth}%0A` +
           `*${t('contact.msg.query')}:* ${formData.message}`;
  };

  // Handlers
  const handleWhatsApp = (e) => {
    e.preventDefault();
    if(!formData.name || !formData.dob) {
        // Translated Alert
        alert(t('contact.fields.alert_error')); 
        return;
    }
    const phoneNumber = "919876543210"; 
    const text = constructMessage();
    window.open(`https://wa.me/${phoneNumber}?text=${text}`, '_blank');
  };

  const handleMail = (e) => {
    e.preventDefault();
    const subject = `Astrology Consultation Request - ${formData.name}`;
    const body = constructMessage().replace(/%0A/g, "\n").replace(/\*/g, ""); 
    window.location.href = `mailto:contact@vedicscience.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-orange-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      
      {/* Main Card Container */}
      <div className="max-w-5xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
        
        {/* Left Side: Contact Info & Decor */}
        <div className="md:w-2/5 bg-gradient-to-br from-orange-600 to-orange-800 p-10 text-white flex flex-col justify-between relative overflow-hidden">
            {/* Decorative Circle */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-white opacity-10 rounded-full blur-2xl"></div>
            
            <div>
              <h2 className="text-3xl font-serif font-bold mb-6">{t('contact.title')}</h2>
              <p className="text-orange-100 mb-8 leading-relaxed">
                {t('contact.subtitle')}
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-white/20 p-3 rounded-full"><FaPhoneAlt /></div>
                  <div>
                    <p className="text-xs text-orange-200 uppercase">{t('contact.info.call')}</p>
                    <p className="font-semibold">+91 987 654 3210</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-white/20 p-3 rounded-full"><FaEnvelope /></div>
                  <div>
                    <p className="text-xs text-orange-200 uppercase">{t('contact.info.email')}</p>
                    <p className="font-semibold">guru@vedicscience.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-white/20 p-3 rounded-full"><FaMapMarkerAlt /></div>
                  <div>
                    <p className="text-xs text-orange-200 uppercase">{t('contact.info.location_label')}</p>
                    <p className="font-semibold">{t('contact.info.location_val')}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center bg-white/10 p-4 rounded-xl backdrop-blur-sm">
               <div className="flex justify-center text-yellow-300 text-lg mb-2">
                 <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
               </div>
               <p className="text-sm italic">{t('contact.testimonial')}</p>
            </div>
        </div>

        {/* Right Side: The Form */}
        <div className="md:w-3/5 p-10">
          <h3 className="text-2xl font-serif text-gray-800 font-bold mb-6">{t('contact.form_title')}</h3>
          
          <form className="space-y-5">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">{t('contact.fields.name')}</label>
              <input 
                type="text" name="name" 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition"
                placeholder={t('contact.fields.name_ph')}
                onChange={handleChange}
              />
            </div>

            {/* DOB & Time Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{t('contact.fields.dob')}</label>
                <input 
                  type="date" name="dob" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none transition"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{t('contact.fields.time')}</label>
                <input 
                  type="time" name="timeOfBirth" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none transition"
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Place */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">{t('contact.fields.place')}</label>
              <input 
                type="text" name="placeOfBirth" 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none transition"
                placeholder={t('contact.fields.place_ph')}
                onChange={handleChange}
              />
            </div>

            {/* Optional Message */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">{t('contact.fields.message')}</label>
              <textarea 
                name="message" rows="3"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none transition"
                placeholder={t('contact.fields.message_ph')}
                onChange={handleChange}
              ></textarea>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              
              {/* WhatsApp Button */}
              <button 
                onClick={handleWhatsApp}
                className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 rounded-lg font-semibold hover:bg-[#1DA851] transition transform hover:-translate-y-1 shadow-md"
              >
                <FaWhatsapp className="text-xl" />
                {t('contact.buttons.whatsapp')}
              </button>

              {/* Email Button */}
              <button 
                onClick={handleMail}
                className="flex-1 flex items-center justify-center gap-2 bg-gray-100 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-200 border border-gray-300 transition"
              >
                <FaEnvelope className="text-gray-500" />
                {t('contact.buttons.email')}
              </button>

            </div>
            <p className="text-xs text-center text-gray-400 mt-4">
              {t('contact.privacy')}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;