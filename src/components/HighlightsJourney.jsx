export default function HighlightsJourney() {
    return (
        <div id="contact" className="w-full px-[8%] md:px-[12%] py-16 scroll-mt-20 font-Outfit">
            <h4 className="text-center mb-2 text-lg font-Ovo text-gray-700 dark:text-gray-300">Get in touch</h4>
            <h2 className="text-center text-5xl font-Ovo text-gray-900 dark:text-white mb-12">Connect with Me</h2>

            {/* Main Contact Container */}
            <div className="max-w-6xl mx-auto bg-lightHover/50 dark:bg-darkHover/30 backdrop-blur-2xl rounded-[2.5rem] border border-gray-200 dark:border-white/10 shadow-xl dark:shadow-2xl overflow-hidden flex flex-col lg:flex-row">
                
                {/* Left Side: Contact Info */}
                <div className="lg:w-1/3 p-8 md:p-12 bg-white/40 dark:bg-white/[0.02] border-b lg:border-b-0 lg:border-r border-gray-200 dark:border-white/10 relative overflow-hidden">
                    {/* Background Glow */}
                    <div className="absolute top-0 left-0 w-32 h-32 bg-[#b820e6]/10 blur-3xl rounded-full"></div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 relative z-10">Contact Information</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-10 text-sm leading-relaxed relative z-10">
                        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                    </p>

                    <div className="space-y-6 relative z-10">
                        <div className="flex items-center gap-4 group">
                            <div className="w-10 h-10 rounded-xl bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 flex items-center justify-center text-[#b820e6] dark:text-[#da7d20] shadow-sm group-hover:scale-110 transition-all duration-300">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 uppercase tracking-wider font-bold">Email</p>
                                <a href="mailto:elmirhasnae55@gmail.com" className="text-sm text-gray-800 dark:text-gray-200 hover:text-[#b820e6] transition-colors">elmirhasnae55@gmail.com</a>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 group">
                            <div className="w-10 h-10 rounded-xl bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 flex items-center justify-center text-[#b820e6] dark:text-[#da7d20] shadow-sm group-hover:scale-110 transition-all duration-300">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11l-3-3m0 0l-3 3m3-3v8"></path></svg>
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 uppercase tracking-wider font-bold">Location</p>
                                <p className="text-sm text-gray-800 dark:text-gray-200">Casablanca, Morocco</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 group">
                            <div className="w-10 h-10 rounded-xl bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 flex items-center justify-center text-[#b820e6] dark:text-[#da7d20] shadow-sm group-hover:scale-110 transition-all duration-300">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 uppercase tracking-wider font-bold">LinkedIn</p>
                                <a href="https://linkedin.com/in/hasnaeelmir" target="_blank" rel="noreferrer" className="text-sm text-gray-800 dark:text-gray-200 hover:text-[#b820e6] transition-colors">Hasnae EL MIR</a>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 opacity-20 group-hover:opacity-40 transition-opacity">
                         <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg" alt="" className="w-24 grayscale group-hover:grayscale-0 transition-all" />
                    </div>
                </div>

                {/* Right Side: Message Form */}
                <form className="flex-1 p-8 md:p-12 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest ml-1">Your Name</label>
                            <input 
                                type="text" 
                                placeholder="John Doe" 
                                className="w-full px-5 py-4 rounded-2xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 focus:border-[#b820e6] dark:focus:border-[#da7d20] focus:ring-0 outline-none transition-all duration-300 text-gray-800 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-600"
                                required 
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest ml-1">Email Address</label>
                            <input 
                                type="email" 
                                placeholder="john@example.com" 
                                className="w-full px-5 py-4 rounded-2xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 focus:border-[#b820e6] dark:focus:border-[#da7d20] focus:ring-0 outline-none transition-all duration-300 text-gray-800 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-600"
                                required 
                            />
                        </div>
                    </div>
                    
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest ml-1">Message</label>
                        <textarea 
                            rows="5" 
                            placeholder="Tell me about your project..." 
                            className="w-full px-5 py-4 rounded-2xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 focus:border-[#b820e6] dark:focus:border-[#da7d20] focus:ring-0 outline-none transition-all duration-300 text-gray-800 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-600 resize-none"
                            required
                        ></textarea>
                    </div>

                    <button 
                        type="submit" 
                        className="w-full md:w-max px-10 py-4 bg-gradient-to-r from-[#b820e6] to-[#da7d20] text-white font-bold rounded-2xl hover:shadow-[0_10px_25px_rgba(184,32,230,0.4)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 group"
                    >
                        Send Message
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </button>
                </form>
            </div>
        </div>
    );
}
