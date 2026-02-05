import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Heart, Briefcase, Heart as Health, Coins, Star, Sparkles, TrendingUp, Users } from 'lucide-react';

const YearlyHoroscope = () => {
    const { sign } = useParams(); // Get sign from URL parameter
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('overview');

    // Find the zodiac sign data
    const zodiacData = zodiacSigns.find(
        z => z.name.toLowerCase() === sign?.toLowerCase()
    );

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [sign]);

    if (!zodiacData) {
        return (
            <div className="min-h-screen bg-slate-900 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-serif text-amber-400 mb-4">Sign Not Found</h1>
                    <button
                        onClick={() => navigate('/')}
                        className="px-6 py-3 bg-amber-500 text-slate-900 rounded-full font-bold hover:bg-amber-400 transition-all"
                    >
                        Go Back Home
                    </button>
                </div>
            </div>
        );
    }

    const tabs = [
        { id: 'overview', label: 'Overview', icon: Star },
        { id: 'career', label: 'Career', icon: Briefcase },
        { id: 'love', label: 'Love', icon: Heart },
        { id: 'health', label: 'Health', icon: Health },
        { id: 'finance', label: 'Finance', icon: Coins },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900">

            {/* Background Stars */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
                {[...Array(100)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute animate-twinkle"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 3}s`,
                            animationDuration: `${2 + Math.random() * 2}s`,
                        }}
                    >
                        <div className="w-1 h-1 bg-amber-200 rounded-full"></div>
                    </div>
                ))}
            </div>

            {/* Glowing Orbs */}
            <div className="absolute top-20 left-10 w-64 h-64 rounded-full mix-blend-screen filter blur-3xl opacity-20"
                style={{ background: zodiacData.color }}></div>
            <div className="absolute bottom-20 right-10 w-64 h-64 bg-purple-600 rounded-full mix-blend-screen filter blur-3xl opacity-20"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 py-8 md:py-12">

                {/* Back Button */}
                <button
                    onClick={() => navigate('/')}
                    className="flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors mb-6 md:mb-8 group text-sm md:text-base"
                >
                    <ArrowLeft size={18} className="md:w-5 md:h-5 group-hover:-translate-x-1 transition-transform" />
                    <span className="font-semibold">Back to All Signs</span>
                </button>

                {/* Hero Section */}
                <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl md:rounded-3xl border-2 overflow-hidden mb-6 md:mb-8"
                    style={{ borderColor: zodiacData.color + '40' }}>

                    <div className="relative p-6 md:p-12">

                        {/* Pattern Background */}
                        <div
                            className="absolute inset-0 opacity-5"
                            style={{
                                background: `radial-gradient(circle at 50% 50%, ${zodiacData.color} 1px, transparent 1px)`,
                                backgroundSize: '40px 40px'
                            }}
                        ></div>

                        <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 md:gap-8">

                            {/* Zodiac Symbol */}
                            <div className="flex-shrink-0">
                                <div className="relative w-28 h-28 md:w-40 md:h-40 rounded-2xl md:rounded-3xl bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center border-2"
                                    style={{ borderColor: zodiacData.color + '60' }}>
                                    <div className="text-7xl md:text-9xl" style={{ filter: `drop-shadow(0 0 30px ${zodiacData.color})` }}>
                                        {zodiacData.symbol}
                                    </div>

                                    {/* Element Badge */}
                                    <div
                                        className="absolute -top-2 -right-2 md:-top-3 md:-right-3 px-3 py-1 md:px-4 md:py-2 rounded-full text-xs font-bold backdrop-blur-sm shadow-lg"
                                        style={{
                                            backgroundColor: zodiacData.color + '30',
                                            border: `2px solid ${zodiacData.color}`,
                                            color: zodiacData.color
                                        }}
                                    >
                                        {zodiacData.element}
                                    </div>
                                </div>
                            </div>

                            {/* Title and Info */}
                            <div className="flex-1 text-center md:text-left">
                                <div className="inline-flex items-center gap-2 mb-2 md:mb-3">
                                    <Sparkles className="text-amber-400" size={16} />
                                    <span className="text-amber-400 uppercase tracking-widest text-xs font-bold">
                                        2026 Yearly Horoscope
                                    </span>
                                </div>

                                <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-2 md:mb-3"
                                    style={{ color: zodiacData.color }}>
                                    {zodiacData.name}
                                </h1>

                                <p className="text-slate-400 text-base md:text-lg mb-3 md:mb-4">
                                    {zodiacData.dates}
                                </p>

                                <p className="text-slate-300 text-base md:text-xl leading-relaxed max-w-3xl">
                                    {zodiacData.yearlyPrediction?.intro}
                                </p>

                                {/* Key Highlights */}
                                <div className="flex flex-wrap gap-2 md:gap-3 mt-4 md:mt-6 justify-center md:justify-start">
                                    {zodiacData.yearlyPrediction?.highlights.map((highlight, idx) => (
                                        <div
                                            key={idx}
                                            className="px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-semibold backdrop-blur-sm"
                                            style={{
                                                backgroundColor: zodiacData.color + '20',
                                                border: `1px solid ${zodiacData.color}40`,
                                                color: zodiacData.color
                                            }}
                                        >
                                            {highlight}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tabs Navigation */}
                <div className="relative">
                    <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl md:rounded-2xl p-2 mb-6 md:mb-8 border border-slate-700 overflow-x-auto scrollbar-hide">
                        <div className="flex gap-2 min-w-max md:min-w-0 md:flex-wrap">
                            {tabs.map((tab) => {
                                const Icon = tab.icon;
                                return (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        className={`flex items-center gap-2 px-4 md:px-6 py-2.5 md:py-3 rounded-lg md:rounded-xl font-semibold transition-all whitespace-nowrap ${activeTab === tab.id
                                                ? 'text-slate-900'
                                                : 'text-slate-400 hover:text-slate-300'
                                            }`}
                                        style={{
                                            background: activeTab === tab.id
                                                ? `linear-gradient(135deg, ${zodiacData.color}, ${zodiacData.color}CC)`
                                                : 'transparent'
                                        }}
                                    >
                                        <Icon size={16} className="flex-shrink-0" />
                                        <span className="text-sm md:text-base">{tab.label}</span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                    {/* Scroll indicator for mobile */}
                    <div className="md:hidden absolute bottom-8 right-4 text-slate-500 text-xs animate-pulse pointer-events-none">
                        Swipe →
                    </div>
                </div>

                {/* Tab Content */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-6">

                        {activeTab === 'overview' && (
                            <div className="space-y-6">
                                <ContentCard title="Year Overview" icon={Star} color={zodiacData.color}>
                                    <p className="text-slate-300 leading-relaxed">
                                        {zodiacData.yearlyPrediction?.overview}
                                    </p>
                                </ContentCard>

                                <ContentCard title="Monthly Breakdown" icon={Calendar} color={zodiacData.color}>
                                    <div className="space-y-3 md:space-y-4">
                                        {zodiacData.yearlyPrediction?.monthlyHighlights?.map((month, idx) => (
                                            <div key={idx} className="border-l-4 pl-3 md:pl-4 py-2" style={{ borderColor: zodiacData.color + '60' }}>
                                                <h4 className="font-bold text-base md:text-lg mb-1" style={{ color: zodiacData.color }}>
                                                    {month.month}
                                                </h4>
                                                <p className="text-slate-300 text-xs md:text-sm">{month.summary}</p>
                                            </div>
                                        ))}
                                    </div>
                                </ContentCard>
                            </div>
                        )}

                        {activeTab === 'career' && (
                            <ContentCard title="Career & Professional Growth" icon={Briefcase} color={zodiacData.color}>
                                <div className="space-y-4">
                                    <p className="text-slate-300 leading-relaxed">
                                        {zodiacData.yearlyPrediction?.career?.overview}
                                    </p>
                                    <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                                        <h4 className="font-bold mb-2" style={{ color: zodiacData.color }}>Best Months for Career Growth:</h4>
                                        <p className="text-slate-300">{zodiacData.yearlyPrediction?.career?.bestMonths}</p>
                                    </div>
                                    <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                                        <h4 className="font-bold mb-2" style={{ color: zodiacData.color }}>Opportunities:</h4>
                                        <ul className="text-slate-300 space-y-2">
                                            {zodiacData.yearlyPrediction?.career?.opportunities?.map((opp, idx) => (
                                                <li key={idx} className="flex items-start gap-2">
                                                    <TrendingUp size={16} className="mt-1 flex-shrink-0" style={{ color: zodiacData.color }} />
                                                    <span>{opp}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </ContentCard>
                        )}

                        {activeTab === 'love' && (
                            <ContentCard title="Love & Relationships" icon={Heart} color={zodiacData.color}>
                                <div className="space-y-4">
                                    <p className="text-slate-300 leading-relaxed">
                                        {zodiacData.yearlyPrediction?.love?.overview}
                                    </p>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                                            <h4 className="font-bold mb-2" style={{ color: zodiacData.color }}>Singles:</h4>
                                            <p className="text-slate-300 text-sm">{zodiacData.yearlyPrediction?.love?.singles}</p>
                                        </div>
                                        <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                                            <h4 className="font-bold mb-2" style={{ color: zodiacData.color }}>Committed:</h4>
                                            <p className="text-slate-300 text-sm">{zodiacData.yearlyPrediction?.love?.committed}</p>
                                        </div>
                                    </div>
                                </div>
                            </ContentCard>
                        )}

                        {activeTab === 'health' && (
                            <ContentCard title="Health & Wellness" icon={Health} color={zodiacData.color}>
                                <div className="space-y-4">
                                    <p className="text-slate-300 leading-relaxed">
                                        {zodiacData.yearlyPrediction?.health?.overview}
                                    </p>
                                    <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                                        <h4 className="font-bold mb-2" style={{ color: zodiacData.color }}>Focus Areas:</h4>
                                        <ul className="text-slate-300 space-y-2">
                                            {zodiacData.yearlyPrediction?.health?.focusAreas?.map((area, idx) => (
                                                <li key={idx} className="flex items-center gap-2">
                                                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: zodiacData.color }}></div>
                                                    <span>{area}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="bg-gradient-to-r from-emerald-900/20 to-emerald-800/20 border border-emerald-700/30 rounded-xl p-4">
                                        <h4 className="font-bold mb-2 text-emerald-400">Wellness Tips:</h4>
                                        <p className="text-slate-300 text-sm">{zodiacData.yearlyPrediction?.health?.tips}</p>
                                    </div>
                                </div>
                            </ContentCard>
                        )}

                        {activeTab === 'finance' && (
                            <ContentCard title="Finance & Prosperity" icon={Coins} color={zodiacData.color}>
                                <div className="space-y-4">
                                    <p className="text-slate-300 leading-relaxed">
                                        {zodiacData.yearlyPrediction?.finance?.overview}
                                    </p>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-700/30 rounded-xl p-4">
                                            <h4 className="font-bold mb-2 text-green-400">Income Prospects:</h4>
                                            <p className="text-slate-300 text-sm">{zodiacData.yearlyPrediction?.finance?.income}</p>
                                        </div>
                                        <div className="bg-gradient-to-br from-orange-900/20 to-red-900/20 border border-orange-700/30 rounded-xl p-4">
                                            <h4 className="font-bold mb-2 text-orange-400">Investments:</h4>
                                            <p className="text-slate-300 text-sm">{zodiacData.yearlyPrediction?.finance?.investments}</p>
                                        </div>
                                    </div>
                                    <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                                        <h4 className="font-bold mb-2" style={{ color: zodiacData.color }}>Financial Advice:</h4>
                                        <p className="text-slate-300">{zodiacData.yearlyPrediction?.finance?.advice}</p>
                                    </div>
                                </div>
                            </ContentCard>
                        )}
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">

                        {/* Lucky Elements Card */}
                        <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-xl md:rounded-2xl border-2 p-4 md:p-6"
                            style={{ borderColor: zodiacData.color + '40' }}>
                            <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 flex items-center gap-2" style={{ color: zodiacData.color }}>
                                <Star size={18} className="md:w-5 md:h-5" />
                                Lucky Elements 2026
                            </h3>
                            <div className="space-y-3 md:space-y-4">
                                <div>
                                    <p className="text-slate-400 text-xs md:text-sm mb-1">Lucky Numbers</p>
                                    <div className="flex gap-2 flex-wrap">
                                        {zodiacData.yearlyPrediction?.luckyElements?.numbers?.map((num, idx) => (
                                            <div key={idx} className="w-9 h-9 md:w-10 md:h-10 rounded-lg flex items-center justify-center font-bold text-sm md:text-base text-slate-900"
                                                style={{ backgroundColor: zodiacData.color }}>
                                                {num}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <p className="text-slate-400 text-xs md:text-sm mb-1">Lucky Colors</p>
                                    <div className="flex gap-2 flex-wrap">
                                        {zodiacData.yearlyPrediction?.luckyElements?.colors?.map((color, idx) => (
                                            <div key={idx} className="px-3 py-1 rounded-full text-xs md:text-sm border"
                                                style={{
                                                    backgroundColor: zodiacData.color + '20',
                                                    borderColor: zodiacData.color + '40',
                                                    color: zodiacData.color
                                                }}>
                                                {color}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <p className="text-slate-400 text-xs md:text-sm mb-1">Lucky Days</p>
                                    <p className="text-slate-300 text-sm md:text-base">{zodiacData.yearlyPrediction?.luckyElements?.days}</p>
                                </div>
                            </div>
                        </div>

                        {/* Compatibility Card */}
                        <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-xl md:rounded-2xl border-2 p-4 md:p-6"
                            style={{ borderColor: zodiacData.color + '40' }}>
                            <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 flex items-center gap-2" style={{ color: zodiacData.color }}>
                                <Users size={18} className="md:w-5 md:h-5" />
                                Best Compatibility
                            </h3>
                            <div className="space-y-3">
                                {zodiacData.yearlyPrediction?.compatibility?.map((sign, idx) => (
                                    <div key={idx} className="flex items-center gap-3 p-2.5 md:p-3 bg-slate-700/30 rounded-lg border border-slate-600">
                                        <div className="text-xl md:text-2xl">{sign.symbol}</div>
                                        <div className="flex-1 min-w-0">
                                            <p className="font-semibold text-slate-200 text-sm md:text-base truncate">{sign.name}</p>
                                            <p className="text-xs text-slate-400">{sign.match}% Match</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* CTA Card */}
                        <div className="bg-gradient-to-br from-amber-900/20 to-orange-900/20 backdrop-blur-sm rounded-xl md:rounded-2xl border-2 border-amber-500/30 p-4 md:p-6">
                            <h3 className="text-lg md:text-xl font-bold mb-2 text-amber-400">
                                Want Personal Guidance?
                            </h3>
                            <p className="text-slate-300 text-xs md:text-sm mb-3 md:mb-4">
                                Get a personalized reading from our expert astrologers based on your birth chart.
                            </p>
                            <Link to={"/contact"}>
                            <button className="w-full py-2.5 md:py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-slate-900 font-bold rounded-lg hover:shadow-lg hover:shadow-amber-500/50 transition-all text-sm md:text-base">
                                Book Consultation
                            </button>
                            </Link>
                            
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 1; }
        }
        .animate-twinkle {
          animation: twinkle ease-in-out infinite;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
        </div>
    );
};

// Content Card Component
const ContentCard = ({ title, icon: Icon, color, children }) => (
    <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-xl md:rounded-2xl border-2 p-4 md:p-6 lg:p-8"
        style={{ borderColor: color + '40' }}>
        <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 flex items-center gap-2 md:gap-3" style={{ color }}>
            <Icon size={20} className="md:w-6 md:h-6 flex-shrink-0" />
            <span>{title}</span>
        </h3>
        {children}
    </div>
);

// Zodiac Signs Data with Yearly Predictions
const zodiacSigns = [
    {
        name: "Aries",
        symbol: "♈",
        dates: "Mar 21 - Apr 19",
        element: "Fire",
        color: "#FF6B6B",
        yearlyPrediction: {
            intro: "2026 brings dynamic energy and transformative opportunities for Aries. This year emphasizes personal growth, career advancement, and meaningful connections.",
            highlights: ["Career Growth", "New Beginnings", "Financial Gains"],
            overview: "This year, Jupiter's transit through your professional sector brings unprecedented opportunities for career advancement. The first half focuses on building foundations, while the latter half rewards your efforts with recognition and success. Mars, your ruling planet, energizes your ambitions throughout the year.",
            monthlyHighlights: [
                { month: "Q1 (Jan-Mar)", summary: "Focus on planning and setting intentions. Career opportunities emerge in March." },
                { month: "Q2 (Apr-Jun)", summary: "Peak performance period. Major breakthroughs in professional life expected." },
                { month: "Q3 (Jul-Sep)", summary: "Relationships take center stage. Balance work with personal connections." },
                { month: "Q4 (Oct-Dec)", summary: "Consolidation phase. Harvest the rewards of your year-long efforts." }
            ],
            career: {
                overview: "2026 is a landmark year for your professional journey. Leadership opportunities and recognition await those willing to take calculated risks.",
                bestMonths: "April, June, and November",
                opportunities: [
                    "Promotion or new job offer likely in Q2",
                    "Entrepreneurial ventures favored after August",
                    "Public speaking and visibility increase your influence"
                ]
            },
            love: {
                overview: "Venus graces your relationship sector, bringing warmth and passion. Singles find exciting prospects, while committed partnerships deepen.",
                singles: "May through August is prime time for meeting someone special. Social events and travel bring romantic encounters.",
                committed: "Focus on communication and shared goals. Plan a significant trip or project together in autumn for renewed connection."
            },
            health: {
                overview: "Energy levels are high, but remember to balance activity with rest. The second half of the year requires more attention to wellness.",
                focusAreas: [
                    "Regular exercise routine from January",
                    "Stress management in peak work months",
                    "Digestive health needs attention in autumn"
                ],
                tips: "Incorporate yoga or meditation to channel your abundant energy constructively. Stay hydrated and maintain consistent sleep patterns."
            },
            finance: {
                overview: "Financial prospects are strong with multiple income streams possible. Smart investments made early in the year yield good returns.",
                income: "Salary increase or bonus expected in Q2. Side projects become profitable after September.",
                investments: "Real estate and technology sectors favor you. Diversify portfolio in spring. Avoid impulsive purchases in summer.",
                advice: "Create a budget in January and stick to it. Save at least 20% of increased income for long-term security."
            },
            luckyElements: {
                numbers: [1, 9, 19, 27],
                colors: ["Red", "Orange", "Gold"],
                days: "Tuesday and Friday"
            },
            compatibility: [
                { name: "Leo", symbol: "♌", match: 95 },
                { name: "Sagittarius", symbol: "♐", match: 90 },
                { name: "Gemini", symbol: "♊", match: 85 }
            ]
        }
    },
    {
        name: "Taurus",
        symbol: "♉",
        dates: "Apr 20 - May 20",
        element: "Earth",
        color: "#51CF66",
        yearlyPrediction: {
            intro: "2026 promises stability and growth for Taurus. Focus on building lasting foundations in career, relationships, and personal wellbeing.",
            highlights: ["Financial Stability", "Creative Expression", "Home Harmony"],
            overview: "Saturn's presence strengthens your foundations while Uranus brings unexpected but positive changes. This year rewards patience and persistence. Focus on long-term goals rather than quick wins.",
            monthlyHighlights: [
                { month: "Q1 (Jan-Mar)", summary: "Financial planning and home improvements take priority. Solid progress in personal projects." },
                { month: "Q2 (Apr-Jun)", summary: "Social connections flourish. Collaborative projects bring success and joy." },
                { month: "Q3 (Jul-Sep)", summary: "Creative energy peaks. Artistic endeavors and hobbies bring fulfillment." },
                { month: "Q4 (Oct-Dec)", summary: "Year-end brings rewards. Family gatherings and celebrations are highlighted." }
            ],
            career: {
                overview: "Steady progress characterizes your professional year. Your reliability and dedication earn recognition and tangible rewards.",
                bestMonths: "March, July, and October",
                opportunities: [
                    "Long-term contracts or job security increases",
                    "Creative projects gain traction and appreciation",
                    "Leadership roles in team settings emerge"
                ]
            },
            love: {
                overview: "Romance deepens through shared values and mutual respect. This year emphasizes quality over quantity in relationships.",
                singles: "Spring and autumn bring opportunities to meet like-minded individuals through shared interests or creative pursuits.",
                committed: "Focus on building a comfortable home life together. Financial planning as a couple strengthens your bond."
            },
            health: {
                overview: "Generally strong vitality throughout the year. Focus on preventive care and maintaining healthy routines.",
                focusAreas: [
                    "Throat and neck area needs attention",
                    "Build sustainable exercise habits",
                    "Focus on nutritious, whole foods"
                ],
                tips: "Establish a consistent sleep schedule. Spend time in nature regularly to recharge your energy and maintain balance."
            },
            finance: {
                overview: "Financial stability improves significantly. Wise investments and careful planning lead to gradual wealth accumulation.",
                income: "Steady income with potential raises in autumn. Additional income from creative ventures possible.",
                investments: "Real estate, art, and sustainable businesses are favored. Long-term investments made now will flourish.",
                advice: "Review and optimize expenses in Q1. Build emergency fund. Consider property investment in the second half."
            },
            luckyElements: {
                numbers: [2, 6, 15, 24],
                colors: ["Green", "Pink", "Earth Tones"],
                days: "Friday and Monday"
            },
            compatibility: [
                { name: "Virgo", symbol: "♍", match: 95 },
                { name: "Capricorn", symbol: "♑", match: 92 },
                { name: "Cancer", symbol: "♋", match: 88 }
            ]
        }
    },
    {
        name: "Gemini",
        symbol: "♊",
        dates: "May 21 - Jun 20",
        element: "Air",
        color: "#FFD43B",
        yearlyPrediction: {
            intro: "2026 is a year of communication, learning, and diverse connections for Gemini. Your adaptability opens numerous doors.",
            highlights: ["Communication Skills", "Learning Opportunities", "Social Expansion"],
            overview: "Mercury's favorable positions enhance your natural communication abilities. Multiple projects and interests keep you engaged and growing throughout the year.",
            monthlyHighlights: [
                { month: "Q1 (Jan-Mar)", summary: "Mental clarity and learning opportunities abound. Start new courses or projects." },
                { month: "Q2 (Apr-Jun)", summary: "Social life buzzes with activity. Network expansion leads to opportunities." },
                { month: "Q3 (Jul-Sep)", summary: "Focus shifts to personal growth and spiritual exploration. Travel is favored." },
                { month: "Q4 (Oct-Dec)", summary: "Professional recognition increases. Communication projects reach completion." }
            ],
            career: {
                overview: "Your versatility and communication skills are your greatest assets this year. Multiple projects keep you stimulated and successful.",
                bestMonths: "February, May, and September",
                opportunities: [
                    "Writing, teaching, or speaking roles expand",
                    "Digital media and technology sectors offer growth",
                    "Networking leads to collaborative ventures"
                ]
            },
            love: {
                overview: "Intellectual connection is key to romantic fulfillment this year. Communication strengthens all relationships.",
                singles: "Meet potential partners through educational settings, social media, or community events. Summer brings exciting prospects.",
                committed: "Keep communication flowing. Plan activities that stimulate both minds. Travel together for renewed connection."
            },
            health: {
                overview: "Mental health is as important as physical health. Balance mental stimulation with adequate rest.",
                focusAreas: [
                    "Respiratory system and lungs",
                    "Nervous system needs calming practices",
                    "Hand and arm flexibility exercises"
                ],
                tips: "Practice mindfulness to calm your active mind. Ensure regular breaks from screens and mental work."
            },
            finance: {
                overview: "Multiple income streams develop. Financial fluctuations require good budgeting but overall trend is positive.",
                income: "Freelance or side projects supplement primary income. Communication-based work pays well.",
                investments: "Technology, education, and communication sectors offer good returns. Diversify to manage variability.",
                advice: "Track expenses carefully given variable income. Save during high-earning months for leaner periods."
            },
            luckyElements: {
                numbers: [3, 5, 12, 21],
                colors: ["Yellow", "Light Blue", "Silver"],
                days: "Wednesday and Sunday"
            },
            compatibility: [
                { name: "Libra", symbol: "♎", match: 93 },
                { name: "Aquarius", symbol: "♒", match: 91 },
                { name: "Aries", symbol: "♈", match: 87 }
            ]
        }
    },
    {
        name: "Cancer",
        symbol: "♋",
        dates: "Jun 21 - Jul 22",
        element: "Water",
        color: "#74C0FC",
        yearlyPrediction: {
            intro: "2026 emphasizes emotional growth, family bonds, and creating your ideal sanctuary. Trust your intuition as it guides you to success.",
            highlights: ["Family Harmony", "Emotional Intelligence", "Home Beautification"],
            overview: "The Moon's cycles bring emotional depth and intuitive insights. This year rewards those who trust their feelings and nurture meaningful connections.",
            monthlyHighlights: [
                { month: "Q1 (Jan-Mar)", summary: "Home and family projects bring satisfaction. Emotional clarity increases." },
                { month: "Q2 (Apr-Jun)", summary: "Creative expression flourishes. Romantic connections deepen significantly." },
                { month: "Q3 (Jul-Sep)", summary: "Career advancement through emotional intelligence. Recognition for caring nature." },
                { month: "Q4 (Oct-Dec)", summary: "Spiritual growth and reflection. Strengthen bonds with loved ones." }
            ],
            career: {
                overview: "Your empathy and nurturing nature become professional assets. Helping professions and creative fields offer fulfillment.",
                bestMonths: "April, August, and November",
                opportunities: [
                    "Healthcare, counseling, or hospitality sectors favor you",
                    "Team leadership roles where you mentor others",
                    "Creative projects that touch emotions succeed"
                ]
            },
            love: {
                overview: "Deep emotional connections characterize your romantic year. Vulnerability strengthens rather than weakens bonds.",
                singles: "Spring and early summer bring meaningful encounters. Look for emotional depth rather than surface attraction.",
                committed: "Create new traditions together. Discussing future family plans strengthens commitment. Home projects unite you."
            },
            health: {
                overview: "Emotional wellbeing directly affects physical health. Nurture both for optimal vitality.",
                focusAreas: [
                    "Digestive system sensitivity to emotions",
                    "Chest and breast health monitoring",
                    "Hydration and fluid balance"
                ],
                tips: "Establish healthy boundaries to protect your energy. Water-based activities like swimming rejuvenate you deeply."
            },
            finance: {
                overview: "Security-focused financial approach pays dividends. Real estate and family investments are particularly favored.",
                income: "Steady growth with potential inheritance or family financial support. Income from property possible.",
                investments: "Real estate, family businesses, and retirement funds are wise choices. Avoid emotional spending.",
                advice: "Create a nest egg for family security. Consider life insurance and estate planning this year."
            },
            luckyElements: {
                numbers: [2, 7, 11, 20],
                colors: ["Silver", "White", "Sea Green"],
                days: "Monday and Thursday"
            },
            compatibility: [
                { name: "Scorpio", symbol: "♏", match: 96 },
                { name: "Pisces", symbol: "♓", match: 94 },
                { name: "Taurus", symbol: "♉", match: 89 }
            ]
        }
    },
    {
        name: "Leo",
        symbol: "♌",
        dates: "Jul 23 - Aug 22",
        element: "Fire",
        color: "#FFA94D",
        yearlyPrediction: {
            intro: "2026 shines brightly for Leo with opportunities for recognition, creative expression, and leadership. Your natural charisma opens many doors.",
            highlights: ["Creative Success", "Leadership Roles", "Romance & Joy"],
            overview: "The Sun, your ruling planet, illuminates your path toward success and fulfillment. This is your year to shine in all areas of life.",
            monthlyHighlights: [
                { month: "Q1 (Jan-Mar)", summary: "Set bold intentions. Creative projects gain momentum and attention." },
                { month: "Q2 (Apr-Jun)", summary: "Peak visibility and recognition. Leadership opportunities emerge naturally." },
                { month: "Q3 (Jul-Sep)", summary: "Personal celebration and romance. Birthday season brings gifts and surprises." },
                { month: "Q4 (Oct-Dec)", summary: "Consolidate gains. Share success with your community and loved ones." }
            ],
            career: {
                overview: "Your leadership abilities and creative vision attract recognition and advancement. This is a breakthrough year professionally.",
                bestMonths: "March, July, and October",
                opportunities: [
                    "Promotions to management or leadership positions",
                    "Creative projects receive funding and support",
                    "Public speaking and media opportunities increase"
                ]
            },
            love: {
                overview: "Romance flourishes with passion and playfulness. Your magnetic charm attracts admiration and genuine connection.",
                singles: "Summer months are particularly romantic. Confidence attracts high-quality partners. Be authentic, not performative.",
                committed: "Reignite passion through playful dates and romantic gestures. Plan celebrations that honor your partnership."
            },
            health: {
                overview: "Vitality is generally high. Channel abundant energy into productive outlets and regular exercise.",
                focusAreas: [
                    "Heart health through cardiovascular exercise",
                    "Back and spine alignment and strength",
                    "Maintain healthy ego without burnout"
                ],
                tips: "Balance giving energy with receiving care. Schedule regular rest despite your enthusiasm. Heart-healthy diet benefits you."
            },
            finance: {
                overview: "Financial growth reflects your increased visibility and success. Generous nature should be balanced with saving.",
                income: "Significant increases through promotions or new ventures. Creative work monetizes well this year.",
                investments: "Entertainment, luxury goods, and creative industries offer returns. Gold and precious metals are favored.",
                advice: "Save 25% of income increases. Enjoy success but build long-term wealth. Avoid overly generous spending."
            },
            luckyElements: {
                numbers: [1, 4, 10, 19],
                colors: ["Gold", "Orange", "Royal Purple"],
                days: "Sunday and Tuesday"
            },
            compatibility: [
                { name: "Aries", symbol: "♈", match: 95 },
                { name: "Sagittarius", symbol: "♐", match: 93 },
                { name: "Gemini", symbol: "♊", match: 86 }
            ]
        }
    },
    {
        name: "Virgo",
        symbol: "♍",
        dates: "Aug 23 - Sep 22",
        element: "Earth",
        color: "#8CE99A",
        yearlyPrediction: {
            intro: "2026 rewards Virgo's meticulous nature with tangible results. Organization, health focus, and service to others bring deep satisfaction.",
            highlights: ["Health & Wellness", "Professional Excellence", "Practical Success"],
            overview: "Mercury's influence sharpens your already keen analytical abilities. Your attention to detail and practical approach solve problems and create success.",
            monthlyHighlights: [
                { month: "Q1 (Jan-Mar)", summary: "Organize and optimize all life areas. Health routines establish successfully." },
                { month: "Q2 (Apr-Jun)", summary: "Work projects showcase your expertise. Recognition for meticulous work arrives." },
                { month: "Q3 (Jul-Sep)", summary: "Birthday season brings personal growth. Self-improvement efforts show results." },
                { month: "Q4 (Oct-Dec)", summary: "Harvest professional and personal rewards. Share knowledge through teaching." }
            ],
            career: {
                overview: "Your expertise and reliability make you indispensable. Technical skills and analytical abilities lead to advancement.",
                bestMonths: "February, June, and September",
                opportunities: [
                    "Specialist or consultant roles utilize your expertise",
                    "Process improvement projects showcase your value",
                    "Healthcare, analytics, or service sectors offer growth"
                ]
            },
            love: {
                overview: "Practical approach to love brings stable, meaningful connections. Quality and compatibility matter more than passion alone.",
                singles: "Meet compatible partners through work, health activities, or intellectual pursuits. Autumn is particularly favorable.",
                committed: "Create healthy routines together. Practical support and acts of service deepen your bond. Plan your future together."
            },
            health: {
                overview: "Perfect year to optimize health and establish lasting wellness routines. Your body responds well to systematic care.",
                focusAreas: [
                    "Digestive system optimization through diet",
                    "Nervous system care through stress management",
                    "Preventive health screenings and check-ups"
                ],
                tips: "Create detailed health plan and follow it consistently. Meal prep and exercise scheduling work well for you."
            },
            finance: {
                overview: "Careful financial management yields excellent results. Your budgeting skills create security and growth.",
                income: "Steady increases through merit and efficiency. Consulting or specialized work brings additional income.",
                investments: "Healthcare, technology, and service industries align with your analytical approach. Index funds suit you.",
                advice: "Create detailed budget and track every expense. Maximize retirement contributions. Build 6-month emergency fund."
            },
            luckyElements: {
                numbers: [5, 6, 14, 23],
                colors: ["Green", "Brown", "Beige"],
                days: "Wednesday and Friday"
            },
            compatibility: [
                { name: "Taurus", symbol: "♉", match: 96 },
                { name: "Capricorn", symbol: "♑", match: 94 },
                { name: "Cancer", symbol: "♋", match: 88 }
            ]
        }
    },
    {
        name: "Libra",
        symbol: "♎",
        dates: "Sep 23 - Oct 22",
        element: "Air",
        color: "#FFB3C1",
        yearlyPrediction: {
            intro: "2026 brings balance, beauty, and meaningful partnerships to Libra's life. Your diplomatic skills create harmony and opportunity.",
            highlights: ["Relationship Growth", "Aesthetic Success", "Social Influence"],
            overview: "Venus graces your path with opportunities for love, art, and social success. Your natural charm and fairness attract positive people and situations.",
            monthlyHighlights: [
                { month: "Q1 (Jan-Mar)", summary: "Relationship focus brings clarity. Social connections expand influentially." },
                { month: "Q2 (Apr-Jun)", summary: "Creative projects flourish. Aesthetic sense brings professional opportunities." },
                { month: "Q3 (Jul-Sep)", summary: "Partnership decisions made with confidence. Balance achieved in all areas." },
                { month: "Q4 (Oct-Dec)", summary: "Birthday season celebrates accomplishments. Year ends with harmony and joy." }
            ],
            career: {
                overview: "Your diplomatic skills and aesthetic sense become valuable professional assets. Collaboration leads to success.",
                bestMonths: "April, August, and November",
                opportunities: [
                    "Partnership or collaboration projects succeed beautifully",
                    "Design, beauty, or fashion sectors offer advancement",
                    "Mediation and negotiation roles utilize your talents"
                ]
            },
            love: {
                overview: "Romance and partnership are highlighted themes. Existing relationships deepen while singles find meaningful connections.",
                singles: "Spring through summer is ideal for meeting someone special. Social events and artistic venues bring encounters.",
                committed: "Recommit to partnership goals. Create beauty together through home projects or shared creative pursuits."
            },
            health: {
                overview: "Balance is key to vitality. Equal attention to physical activity and rest maintains your wellbeing.",
                focusAreas: [
                    "Kidney and lower back health",
                    "Balanced diet without extremes",
                    "Skin care and beauty routines"
                ],
                tips: "Stay hydrated for kidney health. Partner workouts increase motivation. Beauty treatments boost confidence and health."
            },
            finance: {
                overview: "Financial partnerships and joint ventures are favored. Your aesthetic sense can be monetized effectively.",
                income: "Increases through partnerships or collaborative projects. Creative work supplements income well.",
                investments: "Art, beauty industry, and partnerships offer returns. Balanced portfolio suits your nature.",
                advice: "Discuss financial goals with partner if applicable. Invest in quality over quantity. Balance spending with saving."
            },
            luckyElements: {
                numbers: [6, 9, 15, 24],
                colors: ["Pink", "Light Blue", "Lavender"],
                days: "Friday and Wednesday"
            },
            compatibility: [
                { name: "Gemini", symbol: "♊", match: 94 },
                { name: "Aquarius", symbol: "♒", match: 92 },
                { name: "Leo", symbol: "♌", match: 88 }
            ]
        }
    },
    {
        name: "Scorpio",
        symbol: "♏",
        dates: "Oct 23 - Nov 21",
        element: "Water",
        color: "#E599F7",
        yearlyPrediction: {
            intro: "2026 brings transformation and empowerment to Scorpio. Deep emotional work yields profound personal growth and success.",
            highlights: ["Transformation", "Emotional Mastery", "Financial Gains"],
            overview: "Pluto's transformative energy supports your evolution. This year rewards depth, authenticity, and strategic thinking.",
            monthlyHighlights: [
                { month: "Q1 (Jan-Mar)", summary: "Set transformational intentions. Financial planning yields long-term benefits." },
                { month: "Q2 (Apr-Jun)", summary: "Emotional breakthroughs bring clarity. Release what no longer serves you." },
                { month: "Q3 (Jul-Sep)", summary: "Strategic career moves pay off. Hidden opportunities become visible." },
                { month: "Q4 (Oct-Dec)", summary: "Birthday season brings rebirth. Celebrate your transformation and power." }
            ],
            career: {
                overview: "Your intensity and strategic thinking lead to significant professional transformation. Research and depth work are favored.",
                bestMonths: "March, July, and October",
                opportunities: [
                    "Research, investigation, or psychology fields offer growth",
                    "Financial sector positions utilize your analytical depth",
                    "Transformation and change management roles suit you"
                ]
            },
            love: {
                overview: "Deep, transformative connections replace superficial relationships. Intimacy and trust are central themes.",
                singles: "Seek authentic connection over surface attraction. Autumn brings profound romantic encounter.",
                committed: "Vulnerability strengthens bonds. Work through challenges together for deeper intimacy. Trust builds steadily."
            },
            health: {
                overview: "Mind-body connection is powerful. Emotional healing supports physical vitality and vice versa.",
                focusAreas: [
                    "Reproductive system health monitoring",
                    "Elimination and detoxification support",
                    "Psychological health through therapy or journaling"
                ],
                tips: "Address emotional issues as they arise rather than suppressing. Water therapy and deep tissue massage benefit you."
            },
            finance: {
                overview: "Strategic financial planning and investments bring significant gains. Joint finances and inheritances may be highlighted.",
                income: "Potential for substantial increases through strategic career moves. Passive income develops well.",
                investments: "Research-based investments in transformative technologies pay off. Real estate and joint ventures favored.",
                advice: "Diversify investments strategically. Consider estate planning. Build wealth through long-term holdings."
            },
            luckyElements: {
                numbers: [8, 9, 18, 27],
                colors: ["Deep Red", "Black", "Purple"],
                days: "Tuesday and Thursday"
            },
            compatibility: [
                { name: "Cancer", symbol: "♋", match: 97 },
                { name: "Pisces", symbol: "♓", match: 95 },
                { name: "Virgo", symbol: "♍", match: 87 }
            ]
        }
    },
    {
        name: "Sagittarius",
        symbol: "♐",
        dates: "Nov 22 - Dec 21",
        element: "Fire",
        color: "#FF9CAA",
        yearlyPrediction: {
            intro: "2026 expands Sagittarius's horizons through travel, learning, and philosophical growth. Adventure and wisdom await.",
            highlights: ["Travel & Adventure", "Higher Learning", "Philosophical Growth"],
            overview: "Jupiter, your ruling planet, blesses you with opportunities for expansion in all life areas. Optimism attracts abundance.",
            monthlyHighlights: [
                { month: "Q1 (Jan-Mar)", summary: "Plan adventures and educational pursuits. Vision for the year becomes clear." },
                { month: "Q2 (Apr-Jun)", summary: "Travel opportunities arise. International connections prove valuable." },
                { month: "Q3 (Jul-Sep)", summary: "Higher education or teaching opportunities. Share your wisdom generously." },
                { month: "Q4 (Oct-Dec)", summary: "Birthday season celebrates growth. Year ends with expanded perspectives." }
            ],
            career: {
                overview: "Your adventurous spirit and broad thinking create unique professional opportunities. International or educational fields thrive.",
                bestMonths: "May, September, and December",
                opportunities: [
                    "International business or travel-related careers expand",
                    "Teaching, training, or publishing opportunities arise",
                    "Entrepreneurial ventures in adventure or education sectors"
                ]
            },
            love: {
                overview: "Freedom within commitment characterizes healthy relationships. Shared adventures and philosophical alignment matter most.",
                singles: "Travel and educational settings bring romantic encounters. Summer adventures may spark lasting connection.",
                committed: "Plan adventures together. Respect each other's need for growth and independence. Learn together."
            },
            health: {
                overview: "High energy levels support active lifestyle. Outdoor activities and sports maintain vitality.",
                focusAreas: [
                    "Hip and thigh flexibility and strength",
                    "Liver health through moderate lifestyle",
                    "Avoid overindulgence despite optimism"
                ],
                tips: "Outdoor sports and hiking rejuvenate your spirit. Balance adventurous eating with nutritious foundation."
            },
            finance: {
                overview: "Optimistic approach attracts opportunities, but practical management ensures lasting wealth. International ventures are favored.",
                income: "Travel, education, or international work brings income growth. Multiple income streams develop.",
                investments: "International markets, travel industry, and education sectors offer returns. Diversify globally.",
                advice: "Balance optimism with practical budgeting. Save during high-earning periods. Avoid overextending financially."
            },
            luckyElements: {
                numbers: [3, 9, 12, 21],
                colors: ["Purple", "Royal Blue", "Turquoise"],
                days: "Thursday and Sunday"
            },
            compatibility: [
                { name: "Aries", symbol: "♈", match: 94 },
                { name: "Leo", symbol: "♌", match: 93 },
                { name: "Aquarius", symbol: "♒", match: 86 }
            ]
        }
    },
    {
        name: "Capricorn",
        symbol: "♑",
        dates: "Dec 22 - Jan 19",
        element: "Earth",
        color: "#A78BFA",
        yearlyPrediction: {
            intro: "2026 rewards Capricorn's discipline and ambition with career success and recognition. Your patience pays dividends.",
            highlights: ["Career Achievement", "Authority & Recognition", "Long-term Success"],
            overview: "Saturn, your ruling planet, supports your structured approach to success. Consistent effort leads to lasting achievement.",
            monthlyHighlights: [
                { month: "Q1 (Jan-Mar)", summary: "Birthday season sets powerful intentions. Career momentum builds steadily." },
                { month: "Q2 (Apr-Jun)", summary: "Professional recognition increases. Leadership abilities shine brightly." },
                { month: "Q3 (Jul-Sep)", summary: "Consolidate gains. Networking opens unexpected doors." },
                { month: "Q4 (Oct-Dec)", summary: "Year-end brings rewards for persistence. Plan next year's ambitions." }
            ],
            career: {
                overview: "This is your year for significant professional advancement. Your reliability and strategic thinking earn recognition and promotion.",
                bestMonths: "January, June, and November",
                opportunities: [
                    "Promotions to senior leadership or management",
                    "Long-term contracts or career security increases",
                    "Industry recognition and awards possible"
                ]
            },
            love: {
                overview: "Serious commitment and long-term partnership are themes. Quality and reliability matter more than passion alone.",
                singles: "Meet potential partners through professional settings or serious-minded activities. Winter brings meaningful connection.",
                committed: "Discuss long-term plans including home, family, or business. Build empire together through shared goals."
            },
            health: {
                overview: "Consistent health routines support ambitious career. Don't sacrifice wellbeing for professional success.",
                focusAreas: [
                    "Bone and joint health through calcium and exercise",
                    "Knee health and flexibility",
                    "Stress management despite high ambition"
                ],
                tips: "Schedule self-care as seriously as work meetings. Structural exercise like weight training suits you well."
            },
            finance: {
                overview: "Conservative but effective financial strategies build substantial wealth. Long-term planning creates security.",
                income: "Significant increases through promotions or long-term contracts. Income stability improves greatly.",
                investments: "Real estate, established corporations, and retirement accounts are favored. Think legacy.",
                advice: "Maximize retirement contributions. Consider real estate investment. Build generational wealth strategically."
            },
            luckyElements: {
                numbers: [4, 8, 13, 22],
                colors: ["Dark Green", "Brown", "Navy Blue"],
                days: "Saturday and Tuesday"
            },
            compatibility: [
                { name: "Taurus", symbol: "♉", match: 95 },
                { name: "Virgo", symbol: "♍", match: 94 },
                { name: "Scorpio", symbol: "♏", match: 88 }
            ]
        }
    },
    {
        name: "Aquarius",
        symbol: "♒",
        dates: "Jan 20 - Feb 18",
        element: "Air",
        color: "#67E8F9",
        yearlyPrediction: {
            intro: "2026 emphasizes Aquarius's innovative spirit and humanitarian vision. Your unique perspective creates positive change.",
            highlights: ["Innovation", "Social Impact", "Community Building"],
            overview: "Uranus empowers your revolutionary ideas. This year rewards originality, technology adoption, and community involvement.",
            monthlyHighlights: [
                { month: "Q1 (Jan-Mar)", summary: "Birthday season launches innovative projects. Community connections strengthen." },
                { month: "Q2 (Apr-Jun)", summary: "Technology and innovation bring professional opportunities." },
                { month: "Q3 (Jul-Sep)", summary: "Social impact projects gain traction. Network expands influentially." },
                { month: "Q4 (Oct-Dec)", summary: "Humanitarian efforts recognized. Year ends with community celebration." }
            ],
            career: {
                overview: "Your innovative thinking and technological aptitude create unique career opportunities. Future-focused fields are especially favored.",
                bestMonths: "February, June, and October",
                opportunities: [
                    "Technology, innovation, or social enterprise sectors grow",
                    "Community leadership or non-profit roles utilize your ideals",
                    "Consulting on future trends and innovation"
                ]
            },
            love: {
                overview: "Friendship forms the foundation of lasting romance. Intellectual connection and shared values create deep bonds.",
                singles: "Meet compatible partners through groups, causes, or online communities. Spring brings unexpected encounters.",
                committed: "Maintain independence within commitment. Support each other's causes and communities. Innovate together."
            },
            health: {
                overview: "Mind and body connection through innovative wellness approaches. Technology aids health management.",
                focusAreas: [
                    "Circulatory system and ankle health",
                    "Nervous system through mindfulness",
                    "Sleep quality despite active mind"
                ],
                tips: "Try biohacking or innovative wellness technologies. Group fitness classes provide social motivation."
            },
            finance: {
                overview: "Innovative approach to income and investments pays off. Technology and cryptocurrency may interest you.",
                income: "Technology-based work or innovative projects increase income. Freelance or consulting work supplements well.",
                investments: "Technology, renewable energy, and social enterprises align with your values. Research thoroughly.",
                advice: "Balance innovation with practical financial management. Diversify beyond just tech. Plan for long-term security."
            },
            luckyElements: {
                numbers: [4, 7, 11, 22],
                colors: ["Electric Blue", "Silver", "Neon"],
                days: "Saturday and Sunday"
            },
            compatibility: [
                { name: "Gemini", symbol: "♊", match: 93 },
                { name: "Libra", symbol: "♎", match: 92 },
                { name: "Sagittarius", symbol: "♐", match: 87 }
            ]
        }
    },
    {
        name: "Pisces",
        symbol: "♓",
        dates: "Feb 19 - Mar 20",
        element: "Water",
        color: "#C4B5FD",
        yearlyPrediction: {
            intro: "2026 awakens Pisces's spiritual depth and creative gifts. Intuition guides you toward meaningful success and fulfillment.",
            highlights: ["Spiritual Growth", "Creative Expression", "Emotional Healing"],
            overview: "Neptune enhances your natural intuition and artistic abilities. This year rewards those who trust their inner guidance and express their creativity.",
            monthlyHighlights: [
                { month: "Q1 (Jan-Mar)", summary: "Birthday season brings spiritual insights. Creative projects begin flowing." },
                { month: "Q2 (Apr-Jun)", summary: "Artistic expression flourishes. Intuitive abilities strengthen noticeably." },
                { month: "Q3 (Jul-Sep)", summary: "Emotional healing through creative and spiritual practices." },
                { month: "Q4 (Oct-Dec)", summary: "Year ends with deep satisfaction. Share creative gifts generously." }
            ],
            career: {
                overview: "Creative and healing professions bring fulfillment and success. Your empathy and imagination are valuable professional assets.",
                bestMonths: "March, July, and November",
                opportunities: [
                    "Creative arts, music, or visual expression careers expand",
                    "Healing, counseling, or spiritual guidance roles grow",
                    "Non-profit or charitable work brings purpose and income"
                ]
            },
            love: {
                overview: "Deep emotional and spiritual connection characterizes meaningful relationships. Romance is idealistic and compassionate.",
                singles: "Trust intuition about potential partners. Spring and autumn bring soulful connections. Spiritual settings favor meetings.",
                committed: "Share dreams and creative pursuits. Spiritual practices together deepen intimacy. Support each other's growth."
            },
            health: {
                overview: "Holistic and alternative health approaches work well. Mind-body-spirit integration supports wellness.",
                focusAreas: [
                    "Foot health and reflexology benefits",
                    "Immune system through stress management",
                    "Emotional health through creative expression"
                ],
                tips: "Water activities like swimming heal and energize. Creative arts serve as therapy. Meditation supports overall wellbeing."
            },
            finance: {
                overview: "Intuition guides financial decisions well when balanced with practical advice. Creative work monetizes successfully.",
                income: "Creative projects and healing work generate income. Spiritual or artistic pursuits become profitable.",
                investments: "Follow intuition but verify with research. Arts, healthcare, and water-related industries favor you.",
                advice: "Work with financial advisor to ground intuitive insights. Save portion of creative income. Build security gradually."
            },
            luckyElements: {
                numbers: [3, 7, 12, 16],
                colors: ["Sea Green", "Lavender", "Silver"],
                days: "Thursday and Monday"
            },
            compatibility: [
                { name: "Cancer", symbol: "♋", match: 96 },
                { name: "Scorpio", symbol: "♏", match: 95 },
                { name: "Taurus", symbol: "♉", match: 89 }
            ]
        }
    }
];

export default YearlyHoroscope;