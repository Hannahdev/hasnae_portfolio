import { useState, useEffect } from 'react';

export default function Header() {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);

    const roles = [
        "Software Engineer",
        "Cloud & DevOps Enthusiast",
        "Aspiring Data Scientist",
        "Soft Skills Club President"
    ];

    useEffect(() => {
        const handleTyping = () => {
            const i = loopNum % roles.length;
            const fullText = roles[i];

            setText(isDeleting 
                ? fullText.substring(0, text.length - 1) 
                : fullText.substring(0, text.length + 1)
            );

            setTypingSpeed(isDeleting ? 80 : 150);

            if (!isDeleting && text === fullText) {
                setTimeout(() => setIsDeleting(true), 2000);
            } else if (isDeleting && text === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, typingSpeed]);

    return (
        <div id="top" className="w-11/12 max-w-3xl text-center mx-auto min-h-screen flex flex-col items-center justify-center gap-4 pt-28">
            <style>{`
                .cursor {
                    border-right: 3px solid;
                    animation: blink 0.7s infinite;
                    margin-left: 2px;
                }
                @keyframes blink {
                    50% { border-color: transparent; }
                }
            `}</style>
            
            <img src=".\assets\WhatsApp Image 2024-11-21 at 13.19.22.jpeg" alt="" className="rounded-full w-32" />
            <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo">
                Hi, I'm Hasnae EL MIR
                <img src="./assets/hand-icon.png" alt="" className="w-6 mb-1" />
            </h3>
            
            <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo min-h-[1.26em] sm:min-h-[2.4em] lg:min-h-[1.26em]">
                {text}<span className="cursor text-[#b820e6] dark:text-[#da7d20]"></span>
            </h1>
            
            <p className="max-w-2xl mx-auto font-Ovo mt-4">I build modern, scalable web applications and cloud-ready solutions, with a strong interest in DevOps, infrastructure automation, and data-driven technologies.</p>

            {/* Info Badges */}
            <div className="flex flex-wrap items-center justify-center gap-3 mt-4">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/60 dark:bg-white/[0.06] backdrop-blur-xl border border-gray-200/60 dark:border-white/[0.08] text-sm text-gray-700 dark:text-gray-300 font-Outfit shadow-sm">
                    <svg className="w-4 h-4 text-[#b820e6] dark:text-[#da7d20]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" /></svg>
                    Casablanca, Morocco
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/60 dark:bg-white/[0.06] backdrop-blur-xl border border-gray-200/60 dark:border-white/[0.08] text-sm text-gray-700 dark:text-gray-300 font-Outfit shadow-sm">
                    <svg className="w-4 h-4 text-[#b820e6] dark:text-[#da7d20]" fill="currentColor" viewBox="0 0 24 24"><path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" /></svg>
                    Master Big Data & Data Science
                </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3 mt-6">
                <a href="#work"
                    className="px-8 py-2.5 rounded-full bg-gradient-to-r from-[#b820e6] to-[#da7d20] text-white flex items-center gap-2 font-Outfit text-sm font-medium hover:shadow-[0_0_20px_rgba(184,32,230,0.35)] hover:-translate-y-0.5 transition-all duration-300 border border-transparent">
                    View Projects
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </a>

                <a href="./assets/cv.pdf" download="Hasnae_El_Mir_CV.pdf"
                    className="px-8 py-2.5 rounded-full border border-gray-300 dark:border-white/20 hover:bg-white dark:hover:bg-darkHover flex items-center gap-2 bg-white/70 dark:bg-white/[0.04] backdrop-blur-sm text-gray-800 dark:text-white font-Outfit text-sm font-medium hover:-translate-y-0.5 transition-all duration-300 shadow-sm hover:shadow-md">
                    Download CV
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                </a>

                <a href="#contact"
                    className="px-8 py-2.5 rounded-full border border-gray-300 dark:border-white/20 hover:bg-white dark:hover:bg-darkHover flex items-center gap-2 bg-white/70 dark:bg-white/[0.04] backdrop-blur-sm text-gray-800 dark:text-white font-Outfit text-sm font-medium hover:-translate-y-0.5 transition-all duration-300 shadow-sm hover:shadow-md">
                    Contact Me
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-6">
                <a href="https://github.com/hasnaeelmir" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/60 dark:bg-white/[0.06] backdrop-blur-sm border border-gray-200/60 dark:border-white/[0.08] flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:border-gray-300 dark:hover:border-white/20 hover:shadow-md hover:scale-110 transition-all duration-300">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
                </a>
                <a href="https://linkedin.com/in/hasnaeelmir" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/60 dark:bg-white/[0.06] backdrop-blur-sm border border-gray-200/60 dark:border-white/[0.08] flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:border-gray-300 dark:hover:border-white/20 hover:shadow-md hover:scale-110 transition-all duration-300">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                </a>
                <a href="mailto:elmirhasnae55@gmail.com" className="w-10 h-10 rounded-full bg-white/60 dark:bg-white/[0.06] backdrop-blur-sm border border-gray-200/60 dark:border-white/[0.08] flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:border-gray-300 dark:hover:border-white/20 hover:shadow-md hover:scale-110 transition-all duration-300">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </a>
            </div>
        </div>
    );
}