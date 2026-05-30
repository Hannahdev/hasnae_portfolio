export default function TechStack() {
    const categories = [
        {
            title: 'Cloud',
            emoji: '☁️',
            techs: [
                { name: 'Azure', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' },
                { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
            ],
        },
        {
            title: 'DevOps',
            emoji: '⚙️',
            techs: [
                { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain.svg' },
                { name: 'Kubernetes', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
                { name: 'Terraform', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg' },
                { name: 'Jenkins', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg' },
            ],
        },
        {
            title: 'Development',
            emoji: '</>',
            techs: [
                { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
                { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
                { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
                { name: 'SQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg' },
            ],
        },
        {
            title: 'Data & AI',
            emoji: '📊',
            techs: [
                { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
                { name: 'Pandas', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg' },
                { name: 'NumPy', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg' },
                { name: 'Scikit-learn', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg' },
            ],
        },
    ];

    return (
        <div id="techstack" className="w-full px-[12%] py-10 mt-10 scroll-mt-20">
            <h4 className="text-center mb-8 text-xl font-semibold text-gray-800 dark:text-white font-Outfit tracking-wide">Tech Stack</h4>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto bg-white/40 dark:bg-darkTheme/40 backdrop-blur-xl rounded-2xl p-8 border border-white/60 dark:border-white/10 shadow-sm dark:shadow-md">
                {categories.map((category) => (
                    <div key={category.title} className="flex flex-col items-center">
                        <div className="flex items-center gap-2 mb-6">
                            <span className="text-sm dark:opacity-80">{category.emoji}</span>
                            <h3 className="text-sm font-semibold text-gray-800 dark:text-white font-Outfit">{category.title}</h3>
                        </div>
                        
                        <div className="flex items-center gap-4 flex-wrap justify-center">
                            {category.techs.map((tech) => (
                                <div key={tech.name} className="relative group/tooltip flex items-center justify-center p-1.5 hover:scale-110 hover:-translate-y-1 transition-all duration-300">
                                    <img 
                                        src={tech.logo} 
                                        alt={tech.name} 
                                        className="w-7 h-7 object-contain drop-shadow-sm filter dark:brightness-110" 
                                        loading="lazy" 
                                    />
                                    <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-white/10 shadow-lg text-gray-800 dark:text-white text-xs px-2 py-1 rounded opacity-0 group-hover/tooltip:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10">
                                        {tech.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
