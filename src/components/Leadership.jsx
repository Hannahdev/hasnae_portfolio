import React from 'react';

const Leadership = () => {
    const experiences = [
        {
            role: "Lead Developer",
            organization: "Soft Skills Club",
            period: "2023 – Present",
            icon: "💻",
            description: "Leading the technical growth and development strategy for the club's digital identity.",
            points: [
                "Led development of internal web platforms using React and modern stacks",
                "Coordinated project planning and task distribution for a team of 5+ developers",
                "Mentored junior members in React, SQL, and backend fundamentals",
                "Organized deployment workflows and conducted thorough code reviews"
            ],
            accent: "from-blue-500/20 to-purple-500/20"
        },
        {
            role: "President",
            organization: "Soft Skills Club",
            period: "2025 – current",
            icon: "🚀",
            description: "Orchestrating club operations and fostering a high-impact developer community.",
            points: [
                "Organized 10+ workshops and tech events for over 200+ students",
                "Managed key partnerships and sponsorships from local tech companies",
                "Led a core team of 12+ members to execute successful academic events",
                "Increased active participation by 50% through high-value networking sessions"
            ],
            accent: "from-[#b820e6]/20 to-[#da7d20]/20"
        },
        {
            role: "Mentorship & Volunteering",
            organization: "Open Community",
            period: "2023 – Present",
            icon: "🤝",
            description: "Giving back to the community by helping the next generation of developers.",
            points: [
                "Mentored 30+ students in web development, Git, and GitHub basics",
                "Helped organize 2 major hackathons and 5 local coding workshops",
                "Provided 50+ one-on-one portfolio and project architecture reviews",
                "Active contributor to student-led open source initiatives"
            ],
            accent: "from-emerald-500/20 to-teal-500/20"
        }
    ];

    return (
        <div id="leadership" className="w-full px-[12%] py-16 scroll-mt-20 font-Outfit">
            <h4 className="text-center mb-2 text-lg font-Ovo text-gray-700 dark:text-gray-300">Impact & Initiative</h4>
            <h2 className="text-center text-5xl font-Ovo text-gray-900 dark:text-white mb-12">Leadership & Community</h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {experiences.map((exp, index) => (
                    <div
                        key={index}
                        className="group relative flex flex-col bg-white/40 dark:bg-white/[0.03] backdrop-blur-xl border border-white/60 dark:border-white/[0.08] rounded-3xl p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden"
                    >
                        {/* Background Accent Glow */}
                        <div className={`absolute -right-20 -top-20 w-64 h-64 bg-gradient-to-br ${exp.accent} blur-3xl opacity-50 transition-opacity duration-500 group-hover:opacity-80`}></div>

                        <div className="relative z-10 flex flex-col h-full">
                            <div className="text-4xl mb-6 bg-white dark:bg-white/10 w-16 h-16 flex items-center justify-center rounded-2xl shadow-sm border border-gray-100 dark:border-white/10 group-hover:scale-110 transition-transform duration-500">
                                {exp.icon}
                            </div>

                            <div className="mb-6">
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{exp.role}</h3>
                                <p className="text-[#b820e6] dark:text-[#da7d20] font-medium text-sm mb-1">{exp.organization}</p>
                                <span className="inline-block px-3 py-1 bg-gray-100 dark:bg-white/5 rounded-full text-xs font-semibold text-gray-600 dark:text-gray-400">
                                    {exp.period}
                                </span>
                            </div>

                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-8 italic leading-relaxed">
                                "{exp.description}"
                            </p>

                            <ul className="space-y-4 flex-1">
                                {exp.points.map((point, i) => (
                                    <li key={i} className="flex gap-3 text-sm text-gray-700 dark:text-gray-300 group/item">
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#b820e6] to-[#da7d20] flex-shrink-0 transition-transform group-hover/item:scale-150"></div>
                                        <span className="leading-tight">{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Leadership;
