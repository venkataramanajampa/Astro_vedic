import React, { useState } from 'react';
import { ChevronsRight } from 'lucide-react'; // Ensure lucide-react is installed
import { vedicContent } from './Vedicdata'; 
import heroBg from "../assets/herobg.jpg"

const VedicHero = () => {
  // State to keep track of the currently selected sidebar item
  // Default to the second item (index 1) to match your image
  const [activeTabId, setActiveTabId] = useState(2);

  // Helper function to find the active content based on ID
  const activeContent = vedicContent.find((item) => item.id === activeTabId);

  
  return (
    <section className="w-full bg-[#F5E6CA] py-8 relative">
      {/* Background Pattern Overlay (Optional CSS trick to look like damask) */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: `url(${heroBg})`, backgroundSize: "cover",
backgroundRepeat: "no-repeat",
backgroundPosition: "center", }}>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Breadcrumb (Top small text) */}
        <div className="flex justify-between items-center mb-4 text-xs md:text-sm text-amber-900 font-serif">
          <h2 className="text-2xl md:text-3xl text-amber-700 font-medium">
            {activeContent?.title}
          </h2>
          <div className="hidden md:block">
             Home / Vedic / <span className="text-amber-600 font-bold">{activeContent?.title}</span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          
          {/* LEFT SIDEBAR */}
          <div className="w-full md:w-1/4 flex flex-col space-y-1">
            {vedicContent.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTabId(item.id)}
                className={`
                  group flex items-center w-full px-4 py-3 text-left border-l-4 transition-all duration-200
                  ${activeTabId === item.id 
                    ? 'bg-[#D97746] border-[#A04000] text-white shadow-md' // Active Styles
                    : 'bg-[#F4C495] border-[#D97746] text-[#8B4513] hover:bg-[#EBC79E]' // Inactive Styles
                  }
                `}
              >
                <ChevronsRight size={16} className={`mr-2 ${activeTabId === item.id ? 'text-white' : 'text-[#8B4513]'}`} />
                <span className="font-serif font-medium text-sm md:text-base">
                  {item.title}
                </span>
              </button>
            ))}
          </div>

          {/* RIGHT CONTENT AREA */}
          <div className="w-full md:w-3/4">
            <div className="bg-white border-[3px] border-[#E8B87D] rounded-sm p-6 md:p-10 shadow-lg min-h-[400px]">
              
              {/* Content Header */}
              <h3 className="text-center text-xl md:text-2xl text-[#8B4513] font-serif font-bold mb-6 uppercase tracking-wide border-b border-transparent pb-2">
                {activeContent?.heading}
              </h3>

              {/* Content Body Paragraphs */}
              <div className="space-y-4">
                {activeContent?.content.map((paragraph, index) => (
                  <p key={index} className="text-[#003366] text-justify font-serif leading-relaxed text-sm md:text-base">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Signature/Footer Quote (Optional logic) */}
              <div className="mt-8 text-right font-bold text-blue-800 text-sm italic">
                - Maharishi
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default VedicHero;