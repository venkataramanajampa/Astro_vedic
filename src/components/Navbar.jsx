// import React, { useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { Menu, X, Home } from 'lucide-react';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const location = useLocation(); // To highlight the active link

//   // Updated links as per your request
//   const navLinks = [
//     { name: "About", path: "/about" },
//     { name: "Services", path: "/services" },
//     { name: "Vastu", path: "/vastu" },
//     { name: "Dosha Remedies", path: "/dosha-remedies" },
//     { name: "Gem Stones", path: "/gem-stones" },
//     { name: "Rudraksha", path: "/rudraksha" },
//   ];

//   return (
//     <nav className="relative z-50 bg-gradient-to-b from-yellow-500 to-orange-500 border-b border-orange-700 shadow-md">
//       <div className="container mx-auto px-2">
//         <div className="flex items-center justify-between h-10 md:h-12">

//           {/* Home Icon */}
//           <Link to="/" className="flex items-center text-white hover:text-yellow-100 px-2">
//             <Home size={20} />
//           </Link>

//           {/* Desktop Menu - No Dropdowns, just direct links */}
//           <div className="hidden lg:flex items-center space-x-1 w-full justify-center">
//             {navLinks.map((link, index) => {
//               const isActive = location.pathname === link.path;
//               return (
//                 <div key={index} className="flex items-center">
//                   <Link
//                     to={link.path}
//                     className={`px-4 py-1 text-sm font-medium whitespace-nowrap transition-colors
//                       ${isActive ? 'text-yellow-100 underline decoration-2 underline-offset-4' : 'text-white hover:text-yellow-200'}
//                     `}
//                   >
//                     {link.name}
//                   </Link>

//                   {/* Divider line between items (except the last one) */}
//                   {index !== navLinks.length - 1 && (
//                     <span className="h-4 w-[1px] bg-yellow-300/50"></span>
//                   )}
//                 </div>
//               );
//             })}
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="lg:hidden flex items-center">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="text-white hover:text-yellow-100 focus:outline-none p-2"
//             >
//               {isOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu Dropdown */}
//       {isOpen && (
//         <div className="lg:hidden bg-orange-500 border-t border-orange-600">
//           <div className="px-2 pt-2 pb-3 space-y-1">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.name}
//                 to={link.path}
//                 onClick={() => setIsOpen(false)}
//                 className={`block px-3 py-2 rounded-md text-base font-medium border-b border-orange-400/30
//                    ${location.pathname === link.path ? 'bg-orange-600 text-yellow-100' : 'text-white hover:bg-orange-600'}
//                 `}
//               >
//                 {link.name}
//               </Link>
//             ))}
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, Globe } from 'lucide-react'; // Added Globe icon
import { useTranslation } from 'react-i18next'; // Import hook

const Navbar = () => {
  const { t, i18n } = useTranslation(); // Hook to access translations
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Function to toggle language
  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'te' : 'en';
    i18n.changeLanguage(newLang);
  };

  const navLinks = [
    { name: t('nav.about'), path: "/about" },
    { name: t('nav.services'), path: "/services" },
    { name: t('nav.vastu'), path: "/vastu" },
    { name: t('nav.dosha'), path: "/dosha-remedies" },
    { name: t('nav.gems'), path: "/gem-stones" },
    { name: t('nav.rudraksha'), path: "/rudraksha" },
    { name: t('nav.yantra'), path: "/yantra" },
  ];

  return (
    <nav className="relative z-50 bg-gradient-to-b from-yellow-500 to-orange-500 border-b border-orange-700 shadow-md">
      <div className="container mx-auto px-2">
        <div className="flex items-center justify-between h-10 md:h-12">

          <Link to="/" className="flex items-center text-white hover:text-yellow-100 px-2">
            <Home size={20} />
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center space-x-1 w-full justify-center">
            {navLinks.map((link, index) => (
              <div key={index} className="flex items-center">
                <Link to={link.path} className="px-4 py-1 text-sm font-medium text-white hover:text-yellow-200 whitespace-nowrap">
                  {link.name}
                </Link>
                {index !== navLinks.length - 1 && <span className="h-4 w-[1px] bg-yellow-300/50"></span>}
              </div>
            ))}
          </div>

          {/* Language Switcher Button (Right Side) */}
          <button
            onClick={toggleLanguage}
            className="hidden lg:flex items-center gap-1 bg-orange-700/50 hover:bg-orange-800 text-white px-3 py-1 rounded text-xs font-bold border border-yellow-400/30 transition-all ml-4"
          >
            <Globe size={14} />
            {i18n.language === 'en' ? 'తెలుగు' : 'English'}
          </button>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-4">
            {/* Mobile Lang Switcher */}
            <button onClick={toggleLanguage} className="text-white font-bold text-xs bg-orange-700 px-2 py-1 rounded">
              {i18n.language === 'en' ? 'TE' : 'EN'}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown (Keep your existing code here, just use navLinks map) */}
      {isOpen && (
        <div className="lg:hidden bg-orange-500">
          {navLinks.map((link, i) => (
            <Link key={i} to={link.path} className="block px-3 py-2 text-white border-b border-orange-400/30">
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;