// import React from 'react';
// import HeroSection from './Vedicbanner'; // Your existing component
// import VedicHero from './Hero';  // Your existing component
// import WhatsAppWidget from './WhatsappWidget';
// import ServicesSection from './Servicesection';
// import ZodiacCarousel from './Zodiaccorosel';
// // import BirthChart from './KundliGenerator';
// import StatsSection from './Stats';
// import Footer from './Footer';
// import Astro from "../assets/astrobg.png"

// const HomePage = () => {
//   return (
//     <div className="min-h-screen flex flex-col bg-orange-50">

//       {/* 1. HERO SECTION */}
//       {/* Ensure your HeroSection has a pb (padding-bottom) of roughly 20-32 to allow space */}
//       <div className="relative z-0 mb-16">
//         <HeroSection />
//       </div>

//       {/* 2. MAIN CONTENT (VedicHero) */}
//       {/* -mt-20: Pulls this section UP by 5rem to overlap the banner 
//           z-10:   Ensures this sits ON TOP of the banner
//           px-4:   Prevents content touching edges on mobile
//       */}
//       <div
//         className="relative"
//         style={{
//           // Apply the imported image here
//           backgroundImage: `url(${Astro})`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           backgroundAttachment: 'fixed' // Makes the image stay still while scrolling (Parallax)
//         }}
//       >
//         {/* Optional: White Overlay so text remains readable on top of the image */}
//         <div className="absolute inset-0 bg-white/80 z-0"></div>

//         {/* Vedic Hero Section */}
//         {/* Kept your original logic: -mt-24 to overlap the hero */}

//         <div className="relative z-10 -mt-24 px-4 md:px-12 pb-20">
//           <div className="container mx-auto">
//             {/* The White Card remains, so the image shows around the borders */}
//             <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-orange-100">
//               {/* <VedicHero /> */}
//               <StatsSection />
//             </div>
//           </div>
//         </div>

//         <ZodiacCarousel/>

//         {/* Services Section */}
//         {/* Added 'relative z-10' so it sits above the overlay */}
//         <div className="relative z-10 pb-16">
//           {/* <BirthChart/> */}
//           <ServicesSection />
//         </div>
//       </div>
//       <WhatsAppWidget />

//       {/* 3. FOOTER */}
//       {/* mt-auto ensures footer pushes to bottom if content is short */}
//       <div className="mt-auto">
//         <Footer />
//       </div>


//     </div>
//   );
// };

// export default HomePage;  

import React from 'react';
import HeroSection from './Vedicbanner'; // Your existing component
import VedicHero from './Hero';  // Your existing component
import WhatsAppWidget from './WhatsappWidget';
import ServicesSection from './Servicesection';
import ZodiacCarousel from './Zodiaccorosel';
// import BirthChart from './KundliGenerator';
import StatsSection from './Stats';
import Footer from './Footer';
import Astro from "../assets/astrobg.png"

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-orange-50">

      {/* 1. HERO SECTION */}
      {/* Ensure your HeroSection has a pb (padding-bottom) of roughly 20-32 to allow space */}
      <div className="relative z-0 mb-16">
        <HeroSection />
      </div>

      {/* 2. MAIN CONTENT (VedicHero) */}
      {/* -mt-20: Pulls this section UP by 5rem to overlap the banner 
          z-10:   Ensures this sits ON TOP of the banner
          px-4:   Prevents content touching edges on mobile
      */}
      <div
        className="relative"
        style={{
          // Apply the imported image here
          backgroundImage: `url(${Astro})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed' // Makes the image stay still while scrolling (Parallax)
        }}
      >
        {/* Optional: White Overlay so text remains readable on top of the image */}
        <div className="absolute inset-0 bg-white/80 z-0"></div>

        {/* Vedic Hero Section */}
        {/* Kept your original logic: -mt-24 to overlap the hero */}

        <div className="relative z-10 -mt-24 px-4 md:px-12 pb-20">
          <div className="container mx-auto">
            {/* The White Card remains, so the image shows around the borders */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-orange-100">
              {/* <VedicHero /> */}
              <StatsSection />
            </div>
          </div>
        </div>

        {/* Services Section */}
        {/* Added 'relative z-10' so it sits above the overlay */}
        <div className="relative z-10 pb-16">
          {/* <BirthChart/> */}
          <ServicesSection />
        </div>
      </div>

      {/* 3. ZODIAC CAROUSEL - Moved outside for proper alignment */}
      {/* This section now has its own independent layout without parent constraints */}
      <div className="relative z-10">
        <ZodiacCarousel/>
      </div>

      <WhatsAppWidget />

      {/* 4. FOOTER */}
      {/* mt-auto ensures footer pushes to bottom if content is short */}
      <div className="mt-auto">
        <Footer />
      </div>

    </div>
  );
};

export default HomePage;