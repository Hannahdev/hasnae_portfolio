export default function Work() {
    const projects = [
        {
            title: 'Smart Water Leak Detection',
            icon: '💧',
            accent: '#3b82f6',
            description: 'An intelligent IoT and Machine Learning system designed to monitor hydraulic networks and detect water leaks automatically in real time. The project combines sensor data analysis with predictive models to improve efficiency and reduce resource loss.',
            tech: ['Python', 'Machine Learning', 'IoT', 'Data Analysis'],
            github: '#',
            demo: '#'
        },
        {
            title: 'Cloud-Native Inventory API',
            icon: '☁️',
            accent: '#0ea5e9',
            description: 'A scalable REST API built and deployed using cloud-native practices. The project includes containerization, Kubernetes orchestration, Infrastructure as Code, and CI/CD automation for reliable deployment and maintenance.',
            tech: ['Docker', 'Kubernetes', 'Terraform', 'Azure', 'CI/CD', 'REST API'],
            github: '#',
            demo: '#'
        },
        {
            title: 'Phishing Detection App',
            icon: '🔐',
            accent: '#ef4444',
            description: 'A machine learning web application developed to identify malicious URLs and detect phishing attempts with high accuracy. The project includes model training, prediction, and a clean user interface.',
            tech: ['Python', 'Flask', 'Scikit-learn', 'Pandas', 'Machine Learning'],
            github: '#',
            demo: '#'
        },
        {
            title: 'CMS Web App',
            icon: '🌐',
            accent: '#6366f1',
            description: 'A dynamic content management system developed for English Castle Bouskoura to manage website content efficiently with a responsive interface and organized backend structure.',
            tech: ['React', 'JavaScript', 'SQL', 'APIs', 'Tailwind CSS'],
            github: '#',
            demo: '#'
        },
        {
            title: 'Data Analytics Dashboard',
            icon: '📊',
            accent: '#10b981',
            description: 'An interactive dashboard created to visualize datasets, generate insights, and simplify data-driven decision-making through clean charts and reporting.',
            tech: ['Python', 'Pandas', 'NumPy', 'SQL', 'Data Visualization'],
            github: '#',
            demo: '#'
        },
        {
            title: 'Admin Dashboard & Management',
            icon: '⚙️',
            accent: '#8b5cf6',
            description: 'A responsive dashboard built to manage users, content, and application workflows with clean architecture and an optimized user experience.',
            tech: ['React', 'JavaScript', 'SQL', 'Tailwind CSS'],
            github: '#',
            demo: '#'
        }
    ];

    return (
        <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
            {/* Inline keyframes for entrance + float animations */}
            <style>{`
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(30px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-8px); }
                }
                .project-card {
                    animation: fadeInUp 0.6s ease-out both;
                }
                .project-card:nth-child(1) { animation-delay: 0.05s; }
                .project-card:nth-child(2) { animation-delay: 0.12s; }
                .project-card:nth-child(3) { animation-delay: 0.19s; }
                .project-card:nth-child(4) { animation-delay: 0.26s; }
                .project-card:nth-child(5) { animation-delay: 0.33s; }
                .project-card:nth-child(6) { animation-delay: 0.40s; }
                .project-icon { transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1); }
                .project-card:hover .project-icon { animation: float 2.4s ease-in-out infinite; }
            `}</style>

            <h4 className="text-center mb-2 text-lg font-Ovo text-gray-700 dark:text-gray-300">My portfolio</h4>
            <h2 className="text-center text-5xl font-Ovo text-gray-900 dark:text-white">Featured Projects</h2>
            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-gray-700 dark:text-gray-300">
                Welcome to my projects portfolio! I've worked on a variety of projects focused on web development, system design, and scalable architectures.
                Each project is built with an emphasis on clean code, performance, and maintainability.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 my-10">
                {projects.map((project, index) => (
                    <div
                        key={project.title}
                        className="project-card group relative flex flex-col rounded-2xl overflow-hidden transition-all duration-500 ease-out hover:-translate-y-3 hover:scale-[1.02]"
                    >
                        {/* Animated gradient border (visible on hover) */}
                        <div
                            className="absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-[1px]"
                            style={{
                                background: `linear-gradient(135deg, ${project.accent}66, transparent 40%, ${project.accent}44)`,
                            }}
                        />

                        {/* Glass card body */}
                        <div className="flex flex-col h-full rounded-2xl bg-white/70 dark:bg-[#11001F]/70 backdrop-blur-2xl backdrop-saturate-150 border border-white/50 dark:border-white/[0.08] shadow-[0_4px_24px_rgba(0,0,0,0.04)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.3)] group-hover:shadow-[0_16px_48px_rgba(0,0,0,0.1)] dark:group-hover:shadow-[0_16px_48px_rgba(0,0,0,0.6)] group-hover:border-white/80 dark:group-hover:border-white/[0.15] transition-all duration-500">

                            {/* Visual Header */}
                            <div className="h-44 relative overflow-hidden flex items-center justify-center">
                                {/* Radial gradient background using the project accent */}
                                <div
                                    className="absolute inset-0 opacity-[0.12] dark:opacity-[0.18] group-hover:opacity-[0.18] dark:group-hover:opacity-[0.28] transition-opacity duration-700"
                                    style={{
                                        background: `radial-gradient(ellipse at 50% 30%, ${project.accent}60 0%, transparent 70%)`,
                                    }}
                                />
                                {/* Subtle grid pattern overlay */}
                                <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06]" style={{
                                    backgroundImage: `linear-gradient(${project.accent}22 1px, transparent 1px), linear-gradient(90deg, ${project.accent}22 1px, transparent 1px)`,
                                    backgroundSize: '24px 24px',
                                }} />

                                {/* Floating emoji icon */}
                                <span className="project-icon text-6xl drop-shadow-lg z-10 select-none">
                                    {project.icon}
                                </span>

                                {/* Bottom fade into card body */}
                                <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white/70 dark:from-[#11001F]/70 to-transparent" />
                            </div>

                            {/* Content */}
                            <div className="px-6 pb-6 pt-2 flex flex-col flex-1">
                                {/* Accent dot + title */}
                                <div className="flex items-center gap-2.5 mb-3">
                                    <div
                                        className="w-2 h-2 rounded-full flex-shrink-0 group-hover:scale-150 transition-transform duration-500"
                                        style={{ backgroundColor: project.accent }}
                                    />
                                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white font-Outfit leading-snug">
                                        {project.title}
                                    </h3>
                                </div>
                                <p className="text-[13px] text-gray-600 dark:text-gray-400 mb-5 flex-1 font-Ovo leading-relaxed">
                                    {project.description}
                                </p>

                                {/* Tech Stack Badges */}
                                <div className="flex flex-wrap gap-1.5 mb-5">
                                    {project.tech.map((techItem) => (
                                        <span
                                            key={techItem}
                                            className="px-2.5 py-1 bg-white/80 dark:bg-white/[0.06] backdrop-blur-sm border border-gray-200/60 dark:border-white/[0.08] text-[11px] rounded-full text-gray-600 dark:text-gray-300 font-Outfit tracking-wide hover:border-gray-300 dark:hover:border-white/20 hover:bg-white dark:hover:bg-white/[0.1] transition-all duration-300 cursor-default"
                                        >
                                            {techItem}
                                        </span>
                                    ))}
                                </div>

                                {/* Footer Links */}
                                <div className="flex justify-between items-center pt-4 border-t border-gray-200/50 dark:border-white/[0.06] mt-auto">
                                    <a
                                        href={project.github}
                                        className="flex items-center justify-center w-9 h-9 rounded-xl bg-white/80 dark:bg-white/[0.06] backdrop-blur-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white border border-gray-200/50 dark:border-white/[0.08] hover:border-gray-300 dark:hover:border-white/20 hover:shadow-md transition-all duration-300 hover:scale-110"
                                    >
                                        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"></path></svg>
                                    </a>
                                    <a
                                        href={project.demo}
                                        className="group/link flex items-center gap-2 text-sm font-medium transition-all duration-300 hover:gap-3"
                                        style={{ color: project.accent }}
                                    >
                                        Live Demo
                                        <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
            <a href="#" className="w-max flex items-center justify-center gap-2 text-gray-700 bg-white/60 backdrop-blur-xl border border-gray-200 dark:border-white/[0.1] hover:bg-white dark:hover:bg-darkHover rounded-full py-2.5 px-10 mx-auto my-20 duration-500 dark:text-white shadow-sm hover:shadow-md hover:-translate-y-1 font-Outfit text-sm tracking-wide">
                Show more
                <img src="./assets/right-arrow-bold.png" alt="" className="w-4 dark:hidden" />
                <img src="./assets/right-arrow-bold-dark.png" alt="" className="w-4 hidden dark:block" />
            </a>
        </div>
    )
}