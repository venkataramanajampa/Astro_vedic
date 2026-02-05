// import React from 'react';
// import { Link } from 'react-router-dom'; // Assuming you use React Router
// import { ArrowRight, Calendar } from 'lucide-react'; // Optional icons

// const GenericPage = ({ title, description, imageSrc }) => {
//   return (
//     <div className="min-h-screen bg-[#F5E6CA] py-12 px-4 flex items-center justify-center">
//       {/* Container slightly wider to accommodate side-by-side layout */}
//       <div className="container mx-auto max-w-6xl relative">

//         {/* Background Decorative Pattern (Optional subtle texture) */}
//         <div className="absolute inset-0 opacity-5 pointer-events-none" 
//              style={{ backgroundImage: 'radial-gradient(#d4a017 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
//         </div>

//         {/* Main Card */}
//         <div className="bg-white rounded-lg shadow-2xl overflow-hidden border border-amber-200 relative z-10 flex flex-col md:flex-row min-h-[500px]">

//           {/* --- LEFT SIDE: IMAGE --- */}
//           {/* On Desktop: Width 40-50%. On Mobile: Width 100%, Height 300px */}
//           <div className="w-full md:w-1/2 relative bg-amber-50">

//              {/* The Image */}
//              <div className="absolute inset-0 p-4 md:p-6">
//                 <div className="relative w-full h-full border-4 border-double border-amber-600/30 rounded-sm overflow-hidden shadow-inner group">
//                   <img 
//                     src={imageSrc || "https://via.placeholder.com/600x800?text=" + title} 
//                     alt={title} 
//                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
//                   />
//                   {/* Overlay Gradient for text readability if you ever put text over image */}
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
//                 </div>
//              </div>

//              {/* Decorative Corner (Visual Flair) */}
//              <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-amber-600/20 rounded-tl-3xl m-2"></div>
//              <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-amber-600/20 rounded-br-3xl m-2"></div>
//           </div>

//           {/* --- RIGHT SIDE: CONTENT --- */}
//           <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-gradient-to-br from-white to-orange-50">

//             {/* Small eyebrow text (Category) */}
//             <span className="text-amber-600 font-bold tracking-widest uppercase text-xs mb-3 flex items-center gap-2">
//               <span className="w-8 h-[2px] bg-amber-600 inline-block"></span>
//               Vedic Wisdom
//             </span>

//             {/* Title */}
//             <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#8B4513] mb-6 leading-tight drop-shadow-sm">
//               {title}
//             </h1>

//             {/* Divider */}
//             <div className="w-16 h-1 bg-amber-400 mb-6 rounded-full"></div>

//             {/* Description Text */}
//             <div className="prose prose-lg text-[#003366] font-serif text-justify leading-relaxed mb-8">
//               {/* If description is a string, render it. If it's paragraphs, you might need to map them */}
//               <p>{description}</p>
//             </div>

//             {/* CTA Section */}
//             <div className="mt-auto pt-6 border-t border-amber-100 flex flex-col sm:flex-row gap-4">
//                <Link to="/contact">
//                  <button className="group relative px-8 py-3 bg-gradient-to-r from-amber-700 to-orange-600 text-white font-bold rounded shadow-md overflow-hidden transition-all hover:shadow-lg hover:-translate-y-0.5">
//                     <span className="relative z-10 flex items-center gap-2">
//                       Book Consultation <ArrowRight size={18} />
//                     </span>
//                     {/* Hover Effect Layer */}
//                     <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
//                  </button>
//                </Link>

//                {/* Secondary Info (Optional) */}
//                <div className="flex items-center gap-2 text-amber-800 text-sm font-medium px-4 py-3 bg-amber-100/50 rounded border border-amber-200/50">
//                   <Calendar size={16} />
//                   <span>Available Mon-Sat</span>
//                </div>
//             </div>

//           </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default GenericPage;   
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Assuming you use React Router
import { ArrowRight, Calendar } from 'lucide-react'; // Optional icons

const GenericPage = ({ title, description, imageSrc }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [currentImage, setCurrentImage] = useState(imageSrc);

  // Reset image state when imageSrc prop changes
  useEffect(() => {
    setImageLoaded(false);
    setImageError(false);
    setCurrentImage(imageSrc);
  }, [imageSrc, title]); // Reset when either imageSrc or title changes

  const handleImageLoad = () => {
    setImageLoaded(true);
    setImageError(false);
  };

  const handleImageError = () => {
    setImageError(true);
    setImageLoaded(false);
  };

  const placeholderImage = `https://via.placeholder.com/600x800/D4A017/FFFFFF?text=${encodeURIComponent(title || 'Image')}`;

  return (
    <div className="min-h-screen bg-[#F5E6CA] py-12 px-4 flex items-center justify-center">
      {/* Container slightly wider to accommodate side-by-side layout */}
      <div className="container mx-auto max-w-6xl relative">

        {/* Background Decorative Pattern (Optional subtle texture) */}
        <div className="absolute inset-0 opacity-5 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(#d4a017 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-lg shadow-2xl overflow-hidden border border-amber-200 relative z-10 flex flex-col md:flex-row">

          {/* --- LEFT SIDE: IMAGE --- */}
          {/* On Mobile: Full width with fixed height. On Desktop: 50% width with full height */}
          <div className="w-full md:w-1/2 h-64 md:h-auto md:min-h-[500px] relative bg-amber-50">

            {/* The Image Container */}
            <div className="w-full h-full p-4 md:p-6">
              <div className="relative w-full h-full border-4 border-double border-amber-600/30 rounded-sm overflow-hidden shadow-inner group">

                {/* Loading Skeleton */}
                {!imageLoaded && !imageError && (
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-100 to-amber-200 animate-pulse flex items-center justify-center">
                    <div className="text-amber-600 font-serif text-lg">Loading...</div>
                  </div>
                )}

                {/* The Image - key prop forces re-render when image changes */}
                <img
                  key={currentImage || title} // Force re-render on image or title change
                  src={imageError ? placeholderImage : (currentImage || placeholderImage)}
                  alt={title}
                  className={`w-full h-full object-cover transition-all duration-700 ${imageLoaded ? 'opacity-100 scale-100 group-hover:scale-105' : 'opacity-0 scale-95'
                    }`}
                  onLoad={handleImageLoad}
                  onError={handleImageError}
                  loading="eager" // Prioritize loading this image
                />

                {/* Overlay Gradient for text readability if you ever put text over image */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
              </div>
            </div>

            {/* Decorative Corner (Visual Flair) - Hidden on mobile for cleaner look */}
            <div className="hidden md:block absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-amber-600/20 rounded-tl-3xl m-2"></div>
            <div className="hidden md:block absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-amber-600/20 rounded-br-3xl m-2"></div>
          </div>

          {/* --- RIGHT SIDE: CONTENT --- */}
          <div className="w-full md:w-1/2 p-6 md:p-12 flex flex-col justify-center bg-gradient-to-br from-white to-orange-50">

            {/* Small eyebrow text (Category) */}
            <span className="text-amber-600 font-bold tracking-widest uppercase text-xs mb-3 flex items-center gap-2">
              <span className="w-6 md:w-8 h-[2px] bg-amber-600 inline-block"></span>
              Vedic Wisdom
            </span>

            {/* Title */}
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-serif font-bold text-[#8B4513] mb-4 md:mb-6 leading-tight drop-shadow-sm">
              {title}
            </h1>

            {/* Divider */}
            <div className="w-12 md:w-16 h-1 bg-amber-400 mb-4 md:mb-6 rounded-full"></div>

            {/* Description Text */}
            <div className="prose prose-sm md:prose-lg text-[#003366] font-serif text-justify leading-relaxed mb-6 md:mb-8">
              {/* If description is a string, render it. If it's paragraphs, you might need to map them */}
              <p className="text-sm md:text-base">{description}</p>
            </div>

            {/* CTA Section */}
            <div className="mt-auto pt-4 md:pt-6 border-t border-amber-100 flex flex-col sm:flex-row gap-3 md:gap-4">
              <Link to="/contact" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto group relative px-6 md:px-8 py-3 bg-gradient-to-r from-amber-700 to-orange-600 text-white font-bold rounded shadow-md overflow-hidden transition-all hover:shadow-lg hover:-translate-y-0.5">
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Book Consultation <ArrowRight size={18} />
                  </span>
                  {/* Hover Effect Layer */}
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                </button>
              </Link>

              {/* Secondary Info (Optional) */}
              <div className="flex items-center justify-center gap-2 text-amber-800 text-xs md:text-sm font-medium px-3 md:px-4 py-3 bg-amber-100/50 rounded border border-amber-200/50">
                <Calendar size={16} />
                <span>Available Mon-Sat</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default GenericPage;