import React from 'react';

const Education = () => {
    return (
        <div id="education" className="w-full px-[8%] md:px-[12%] py-24 scroll-mt-20 font-Outfit">
            <h4 className="text-center mb-2 text-lg font-Ovo text-gray-700 dark:text-gray-300">
                Education & Credentials
            </h4>
            <h2 className="text-center text-5xl font-Ovo text-gray-900 dark:text-white mb-16">
                Academic Background
            </h2>

            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                {/* Left Column: Highlighted Current Master's Degree */}
                <div className="lg:col-span-7 group relative flex flex-col bg-white/40 dark:bg-white/[0.03] backdrop-blur-xl border border-white/60 dark:border-white/[0.08] rounded-3xl p-8 lg:p-10 hover:shadow-[0_20px_50px_rgba(184,32,230,0.15)] dark:hover:shadow-[0_20px_50px_rgba(218,125,32,0.1)] hover:-translate-y-1 transition-all duration-500 overflow-hidden justify-between">
                    {/* Glowing Backlight */}
                    <div className="absolute -right-32 -top-32 w-96 h-96 bg-gradient-to-br from-[#b820e6]/20 to-[#da7d20]/20 blur-3xl opacity-60 group-hover:opacity-90 transition-opacity duration-500 pointer-events-none"></div>
                    
                    <div>
                        {/* Header Row */}
                        <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
                            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-[#b820e6]/10 to-[#da7d20]/10 border border-[#b820e6]/30 dark:border-[#da7d20]/30 rounded-full text-xs font-bold text-[#b820e6] dark:text-[#da7d20] shadow-sm">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#b820e6] opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#b820e6]"></span>
                                </span>
                                En Cours
                            </span>
                            <span className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                                2025 – Present
                            </span>
                        </div>

                        {/* Title & School */}
                        <div className="flex items-start gap-4 mb-8">
                            <div className="text-4xl bg-gradient-to-br from-[#b820e6] to-[#da7d20] text-white w-16 h-16 flex items-center justify-center rounded-2xl shadow-md shrink-0">
                                🎓
                            </div>
                            <div>
                                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white leading-tight mb-2">
                                    Master Big Data & Data Science
                                </h3>
                                <p className="text-base text-gray-700 dark:text-gray-300 font-Ovo">
                                    FSBM – Faculté des Sciences Ben M'Sick, Casablanca
                                </p>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    Université Hassan II de Casablanca
                                </p>
                            </div>
                        </div>

                        {/* Curriculum / Focus Areas */}
                        <div className="mb-8">
                            <h4 className="text-xs uppercase tracking-wider font-bold text-gray-400 dark:text-gray-500 mb-4">
                                Specialization Focus
                            </h4>
                            <div className="flex flex-wrap gap-2.5">
                                {[
                                    { text: "Big Data Architectures", icon: "📊" },
                                    { text: "Machine Learning & AI", icon: "🧠" },
                                    { text: "NoSQL & Distributed Systems", icon: "🗄️" },
                                    { text: "Data Pipelines & ETL", icon: "⚙️" },
                                    { text: "Statistical Modeling", icon: "📈" },
                                    { text: "Advanced Python & R", icon: "🐍" }
                                ].map((item, i) => (
                                    <span 
                                        key={i} 
                                        className="inline-flex items-center gap-1.5 px-3 py-2 bg-white/60 dark:bg-white/[0.05] border border-gray-200 dark:border-white/10 rounded-xl text-sm text-gray-800 dark:text-gray-200 shadow-sm hover:border-[#b820e6]/40 dark:hover:border-[#da7d20]/40 transition-colors"
                                    >
                                        <span>{item.icon}</span>
                                        <span>{item.text}</span>
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Bottom Status / Progress */}
                    <div className="border-t border-gray-200 dark:border-white/10 pt-6 mt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                        <div>
                            <p className="text-xs text-gray-500 dark:text-gray-400">Current Status</p>
                            <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">Exploring Advanced Predictive Analytics & Big Data Systems</p>
                        </div>
                        <div className="h-2 w-24 bg-gray-100 dark:bg-white/10 rounded-full overflow-hidden shrink-0">
                            <div className="h-full w-2/5 bg-gradient-to-r from-[#b820e6] to-[#da7d20] rounded-full animate-pulse"></div>
                        </div>
                    </div>
                </div>

                {/* Right Column: Stack of Completed Qualifications */}
                <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
                    {/* Licence Card */}
                    <div className="group relative bg-white/40 dark:bg-white/[0.03] backdrop-blur-xl border border-white/60 dark:border-white/[0.08] rounded-3xl p-6 hover:shadow-[0_15px_40px_rgba(184,32,230,0.08)] dark:hover:shadow-[0_15px_40px_rgba(255,255,255,0.02)] hover:-translate-y-1 transition-all duration-500 overflow-hidden flex flex-col justify-between lg:h-[calc(50%-0.75rem)]">
                        {/* Corner glow */}
                        <div className="absolute -right-20 -top-20 w-48 h-48 bg-blue-500/10 blur-3xl opacity-50 group-hover:opacity-85 transition-opacity duration-500 pointer-events-none"></div>

                        <div>
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-sm font-semibold text-[#b820e6] dark:text-[#da7d20]">
                                    2022 – 2025
                                </span>
                                <span className="inline-block px-2.5 py-1 bg-emerald-100 dark:bg-emerald-950/30 text-emerald-800 dark:text-emerald-300 border border-emerald-200/50 dark:border-emerald-800/30 rounded-full text-xs font-bold uppercase tracking-wide">
                                    Graduated
                                </span>
                            </div>

                            <div className="flex items-start gap-3.5 mb-4">
                                <div className="text-3xl bg-white dark:bg-white/10 w-12 h-12 flex items-center justify-center rounded-xl shadow-sm border border-gray-100 dark:border-white/10 shrink-0">
                                    📜
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-tight">
                                        Licence Informatique
                                    </h3>
                                    <p className="text-xs text-[#b820e6] dark:text-[#da7d20] font-medium mt-0.5">
                                        Spécialité : Bases de Données
                                    </p>
                                    <p className="text-sm text-gray-700 dark:text-gray-300 font-Ovo mt-1">
                                        FSBM – Faculté des Sciences Ben M'Sick, Casablanca
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="border-t border-gray-200 dark:border-white/10 pt-4 mt-2">
                            <p className="text-xs uppercase tracking-wider font-bold text-gray-400 mb-2">Key Competencies</p>
                            <div className="flex flex-wrap gap-1.5">
                                {["SQL & Databases", "OOP (Java, C++)", "Web Tech", "Algorithms"].map((subject, idx) => (
                                    <span key={idx} className="text-xs px-2.5 py-1 bg-white/40 dark:bg-white/[0.02] border border-gray-100 dark:border-white/[0.05] rounded-lg text-gray-600 dark:text-gray-400">
                                        {subject}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Baccalauréat Card */}
                    <div className="group relative bg-white/40 dark:bg-white/[0.03] backdrop-blur-xl border border-white/60 dark:border-white/[0.08] rounded-3xl p-6 hover:shadow-[0_15px_40px_rgba(218,125,32,0.08)] dark:hover:shadow-[0_15px_40px_rgba(255,255,255,0.02)] hover:-translate-y-1 transition-all duration-500 overflow-hidden flex flex-col justify-between lg:h-[calc(50%-0.75rem)]">
                        {/* Corner glow */}
                        <div className="absolute -right-20 -top-20 w-48 h-48 bg-amber-500/10 blur-3xl opacity-50 group-hover:opacity-85 transition-opacity duration-500 pointer-events-none"></div>

                        <div>
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-sm font-semibold text-[#b820e6] dark:text-[#da7d20]">
                                    2022
                                </span>
                                <span className="inline-block px-2.5 py-1 bg-emerald-100 dark:bg-emerald-950/30 text-emerald-800 dark:text-emerald-300 border border-emerald-200/50 dark:border-emerald-800/30 rounded-full text-xs font-bold uppercase tracking-wide">
                                    Graduated
                                </span>
                            </div>

                            <div className="flex items-start gap-3.5 mb-4">
                                <div className="text-3xl bg-white dark:bg-white/10 w-12 h-12 flex items-center justify-center rounded-xl shadow-sm border border-gray-100 dark:border-white/10 shrink-0">
                                    🔢
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-tight">
                                        Baccalauréat Sciences Maths A
                                    </h3>
                                    <p className="text-sm text-gray-700 dark:text-gray-300 font-Ovo mt-1">
                                        Lycée Ibn Battouta, Mediouna
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="border-t border-gray-200 dark:border-white/10 pt-4 mt-2">
                            <p className="text-xs uppercase tracking-wider font-bold text-gray-400 mb-2">Key Areas</p>
                            <div className="flex flex-wrap gap-1.5">
                                {["Advanced Calculus", "Algebra & Geometry", "Physics", "Mechanics"].map((subject, idx) => (
                                    <span key={idx} className="text-xs px-2.5 py-1 bg-white/40 dark:bg-white/[0.02] border border-gray-100 dark:border-white/[0.05] rounded-lg text-gray-600 dark:text-gray-400">
                                        {subject}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education;
