import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // 1. Import Hook
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
 
const Footer = () => {
  const { t } = useTranslation(); // 2. Initialize Hook

  return (
    // Main Container
    <footer className="bg-[#486957] text-orange-50 font-sans relative pt-16 pb-8 overflow-hidden">
      
      {/* Decorative Background */}
      {/* <div className="absolute top-0 right-0 opacity-5 pointer-events-none">
         <svg width="400" height="400" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#FCA5A5" d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.1,-19.2,95.8,-4.9C93.5,9.5,82.2,23.2,70.8,35.1C59.4,47,47.9,57,35.3,65.6C22.7,74.1,9,81.1,-3.3,86.8C-15.6,92.5,-26.4,96.9,-36.4,92.5C-46.4,88.1,-55.6,75,-63.4,61.9C-71.2,48.8,-77.6,35.8,-80.7,21.9C-83.8,8,-83.6,-6.8,-78.3,-20.4C-73,-34,-62.6,-46.4,-50.7,-54.3C-38.8,-62.2,-25.4,-65.6,-11.8,-63.6C1.8,-61.6,15.4,-54.2,30.5,-83.6L44.7,-76.4Z" transform="translate(100 100)" />
         </svg>
      </div> */}

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          
          {/* COLUMN 1: About / Brand */}
          {/* <div className="space-y-6">
            <div className="flex items-center gap-3">
              
              <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-red-900 font-bold text-xl shadow-lg border-2 border-white">
                K
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold text-yellow-400">
                  {t('footer.brand_name')}
                </h3>
                <p className="text-xs text-orange-500">
                  {t('footer.tagline')}
                </p>
              </div>
            </div>
            <p className="text-orange-500 text-sm leading-relaxed border-l-4 border-yellow-500 pl-4">
              {t('footer.about_desc')}
            </p>
          </div> */}

          {/* COLUMN 2: Contact Info */}
          <div>
            <h3 className="text-xl font-serif font-bold text-yellow-400 mb-6 relative inline-block">
              {t('footer.titles.contact')}
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-yellow-500 rounded-full"></span>
            </h3>
            <div className="space-y-5">
              
              {/* Address */}
              <div className="flex items-start gap-4 group cursor-pointer">
                <div className="mt-1 bg-red-900 p-2 rounded-lg group-hover:bg-yellow-500 transition-colors">
                    <FaMapMarkerAlt className="text-yellow-400 group-hover:text-red-900" />
                </div>
                <p className="text-sm text-red-600 leading-relaxed">
                  {t('footer.contact.address')}
                </p>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="bg-red-900 p-2 rounded-lg group-hover:bg-yellow-500 transition-colors">
                    <FaEnvelope className="text-yellow-400 group-hover:text-red-900" />
                </div>
                <p className="text-sm text-red-600">{t('footer.contact.email')}</p>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="bg-red-900 p-2 rounded-lg group-hover:bg-yellow-500 transition-colors">
                    <FaPhoneAlt className="text-yellow-400 group-hover:text-red-900" />
                </div>
                <p className="text-sm text-red-600">{t('footer.contact.phone')}</p>
              </div>

            </div>
          </div>

          {/* COLUMN 3: Socials */}
          <div>
            <h3 className="text-xl font-serif font-bold text-yellow-400 mb-6 relative inline-block">
              {t('footer.titles.follow')}
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-yellow-500 rounded-full"></span>
            </h3>
            <p className="text-green-400 text-sm mb-6">
              {t('footer.social_desc')}
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-red-900 flex items-center justify-center text-white hover:bg-yellow-500 hover:text-red-900 transition-all transform hover:-translate-y-1 shadow-md">
                <FaFacebookF />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-red-900 flex items-center justify-center text-white hover:bg-yellow-500 hover:text-red-900 transition-all transform hover:-translate-y-1 shadow-md">
                <FaInstagram />
              </a>
              {/* <a href="#" className="w-10 h-10 rounded-full bg-red-900 flex items-center justify-center text-white hover:bg-yellow-500 hover:text-red-900 transition-all transform hover:-translate-y-1 shadow-md">
                <FaTwitter />
              </a> */}
              <a href="#" className="w-10 h-10 rounded-full bg-red-900 flex items-center justify-center text-white hover:bg-yellow-500 hover:text-red-900 transition-all transform hover:-translate-y-1 shadow-md">
                <FaYoutube />
              </a>
            </div>
          </div>

        </div>

        {/* Separator Line */}
        <div className="border-t border-red-900 mt-12 mb-8"></div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-red-300">
          <p>&copy; {new Date().getFullYear()} {t('footer.copyright')}</p>
          <div className="flex gap-6 mt-4 md:mt-0">
             <Link to="/" className="hover:text-yellow-400 transition">{t('footer.links.privacy')}</Link>
             <Link to="/" className="hover:text-yellow-400 transition">{t('footer.links.terms')}</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;