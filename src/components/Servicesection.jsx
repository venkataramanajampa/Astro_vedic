import React from 'react';
import { useTranslation } from 'react-i18next'; // 1. Import hook
import { FaHeart, FaBriefcase, FaHandHoldingHeart, FaUsers, FaRing, FaPray } from 'react-icons/fa';
import { GiPalm, GiBrokenHeart } from 'react-icons/gi';

const ServicesSection = () => {
  const { t } = useTranslation(); // 2. Initialize hook

  // 3. Move services array INSIDE the component to use 't'
  const services = [
    {
      id: 1,
      title: t('services_section.items.relationship.title'),
      desc: t('services_section.items.relationship.desc'),
      icon: <FaHeart className="text-red-500 text-3xl" />,
      bg: "bg-red-100",
    },
    {
      id: 2,
      title: t('services_section.items.marriage.title'),
      desc: t('services_section.items.marriage.desc'),
      icon: <FaRing className="text-yellow-600 text-3xl" />,
      bg: "bg-yellow-100",
    },
    {
      id: 3,
      title: t('services_section.items.business.title'),
      desc: t('services_section.items.business.desc'),
      icon: <FaBriefcase className="text-blue-600 text-3xl" />,
      bg: "bg-blue-100",
    },
    {
      id: 4,
      title: t('services_section.items.divorce.title'),
      desc: t('services_section.items.divorce.desc'),
      icon: <GiBrokenHeart className="text-purple-600 text-3xl" />,
      bg: "bg-purple-100",
    },
    {
      id: 5,
      title: t('services_section.items.vastu.title'),
      desc: t('services_section.items.vastu.desc'),
      icon: <FaHandHoldingHeart className="text-pink-500 text-3xl" />,
      bg: "bg-pink-100",
    },
    {
      id: 6,
      title: t('services_section.items.family.title'),
      desc: t('services_section.items.family.desc'),
      icon: <FaUsers className="text-green-600 text-3xl" />,
      bg: "bg-green-100",
    },
    {
      id: 7,
      title: t('services_section.items.palm.title'),
      desc: t('services_section.items.palm.desc'),
      icon: <GiPalm className="text-orange-600 text-3xl" />,
      bg: "bg-orange-100",
    },
    {
      id: 8,
      title: t('services_section.items.healing.title'),
      desc: t('services_section.items.healing.desc'),
      icon: <FaPray className="text-indigo-600 text-3xl" />,
      bg: "bg-indigo-100",
    }
  ];

  return (
    <section className="py-3 bg-orange-50">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-orange-600 font-semibold tracking-wider uppercase text-sm">
            {t('services_section.sub_header')}
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mt-2">
            {t('services_section.header_prefix')} <span className="text-orange-600">{t('services_section.header_highlight')}</span>
          </h2>
          <div className="w-24 h-1 bg-orange-300 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-xl border border-transparent hover:border-orange-200 transition-all duration-300 transform hover:-translate-y-1 group cursor-pointer"
            >
              {/* Icon Container */}
              <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 ${service.bg} group-hover:scale-110 transition-transform`}>
                {service.icon}
              </div>
              
              {/* Content */}
              <div className="text-center">
                <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;