import { useEffect, useRef } from 'react'

export default function Navbar() {
    const sideMenuRef = useRef();
    const navRef = useRef();
    const navLinkRef = useRef();

    const openMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(-16rem)';
    }
    const closeMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(16rem)';
    }
    const toggleTheme = () => {

        document.documentElement.classList.toggle('dark');

        if (document.documentElement.classList.contains('dark')) {
            localStorage.theme = 'dark';
        } else {
            localStorage.theme = 'light';
        }
    }

    useEffect(() => {

        window.addEventListener('scroll', () => {
            if (scrollY > 50) {
                navRef.current.classList.add('bg-white/80', 'backdrop-blur-xl', 'shadow-sm', 'dark:bg-darkTheme/90', 'dark:shadow-white/10');
                navLinkRef.current.classList.remove('bg-white/50', 'backdrop-blur-md', 'shadow-sm', 'border', 'border-white/40', 'dark:border-white/20', 'dark:bg-white/5');
            } else {
                navRef.current.classList.remove('bg-white/80', 'backdrop-blur-xl', 'shadow-sm', 'dark:bg-darkTheme/90', 'dark:shadow-white/10');
                navLinkRef.current.classList.add('bg-white/50', 'backdrop-blur-md', 'shadow-sm', 'border', 'border-white/40', 'dark:border-white/20', 'dark:bg-white/5');
            }
        })

        // -------- light mode and dark mode -----------

        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [])

    return (
        <>
            <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
                <img src="./assets/header-bg-color.png" alt="" className="w-full" />
            </div>

            <nav ref={navRef} className="w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition-all duration-500">

                <a href="#top" className="mr-14 group">
                    <span className="text-3xl font-Ovo font-bold tracking-widest dark:text-white transition-all duration-300 group-hover:tracking-[0.15em]">ELMIR<span className="text-rose-500">.</span></span>
                </a>

                <ul ref={navLinkRef} className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white/50 backdrop-blur-md shadow-sm border border-white/40 font-Ovo dark:border-white/20 dark:bg-white/5 transition-all duration-300">
                    <li>
                        <a className='relative group dark:text-white/80 text-gray-800 transition-colors' href="#top">
                            Home
                            <span className="absolute left-0 -bottom-1 w-0 h-[2px] rounded-full bg-gradient-to-r from-[#b820e6] to-[#da7d20] transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    </li>
                    <li>
                        <a className='relative group dark:text-white/80 text-gray-800 transition-colors' href="#about">
                            About me
                            <span className="absolute left-0 -bottom-1 w-0 h-[2px] rounded-full bg-gradient-to-r from-[#b820e6] to-[#da7d20] transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    </li>
                    <li>
                        <a className='relative group dark:text-white/80 text-gray-800 transition-colors' href="#services">
                            Services
                            <span className="absolute left-0 -bottom-1 w-0 h-[2px] rounded-full bg-gradient-to-r from-[#b820e6] to-[#da7d20] transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    </li>
                    <li>
                        <a className='relative group dark:text-white/80 text-gray-800 transition-colors' href="#work">
                            My Work
                            <span className="absolute left-0 -bottom-1 w-0 h-[2px] rounded-full bg-gradient-to-r from-[#b820e6] to-[#da7d20] transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    </li>
                    <li>
                        <a className='relative group dark:text-white/80 text-gray-800 transition-colors' href="#leadership">
                            Leadership
                            <span className="absolute left-0 -bottom-1 w-0 h-[2px] rounded-full bg-gradient-to-r from-[#b820e6] to-[#da7d20] transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    </li>
                    <li>
                        <a className='relative group dark:text-white/80 text-gray-800 transition-colors' href="#contact">
                            Contact
                            <span className="absolute left-0 -bottom-1 w-0 h-[2px] rounded-full bg-gradient-to-r from-[#b820e6] to-[#da7d20] transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    </li>
                </ul>

                <div className="flex items-center gap-4">
                    <button onClick={toggleTheme} className="hover:-translate-y-0.5 transition-transform">
                        <img src="./assets/moon_icon.png" alt="" className="w-5 dark:hidden" />
                        <img src="./assets/sun_icon.png" alt="" className="w-5 hidden dark:block" />
                    </button>

                    <a href="#contact" className="group hidden lg:flex items-center gap-3 px-8 py-2 border border-gray-300 hover:border-transparent hover:bg-gradient-to-r hover:from-[#b820e6] hover:to-[#da7d20] hover:text-white hover:shadow-lg hover:-translate-y-0.5 transition-all duration-500 rounded-full ml-4 font-Ovo dark:border-white/30 dark:text-white">
                        Contact
                        <img src="./assets/arrow-icon.png" alt="" className="w-3 dark:hidden group-hover:brightness-0 group-hover:invert transition-all" />
                        <img src="./assets/arrow-icon-dark.png" alt="" className="w-3 hidden dark:block group-hover:brightness-0 group-hover:invert transition-all" />
                    </a>

                    <button className="block md:hidden ml-3 hover:-translate-y-0.5 transition-transform" onClick={openMenu}>
                        <img src="./assets/menu-black.png" alt="" className="w-6 dark:hidden" />
                        <img src="./assets/menu-white.png" alt="" className="w-6 hidden dark:block" />
                    </button>

                </div>
                {/* -- ----- mobile menu ------  -- */}
                <ul ref={sideMenuRef} className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-white/90 backdrop-blur-xl transition-all duration-500 font-Ovo dark:bg-darkTheme/90 dark:text-white shadow-[-10px_0_30px_rgba(0,0,0,0.1)] dark:shadow-[-10px_0_30px_rgba(0,0,0,0.4)] border-l border-white/50 dark:border-white/10">

                    <div className="absolute right-6 top-6" onClick={closeMenu}>
                        <img src="./assets/close-black.png" alt="" className="w-5 cursor-pointer dark:hidden transition-transform hover:rotate-90" />
                        <img src="./assets/close-white.png" alt="" className="w-5 cursor-pointer hidden dark:block transition-transform hover:rotate-90" />
                    </div>

                    <li><a href="#top" onClick={closeMenu} className="hover:text-[#b820e6] transition-colors block py-2 border-b border-gray-200 dark:border-white/10 group"><span className="inline-block transition-transform group-hover:translate-x-2">Home</span></a></li>
                    <li><a href="#about" onClick={closeMenu} className="hover:text-[#b820e6] transition-colors block py-2 border-b border-gray-200 dark:border-white/10 group"><span className="inline-block transition-transform group-hover:translate-x-2">About me</span></a></li>
                    <li><a href="#services" onClick={closeMenu} className="hover:text-[#b820e6] transition-colors block py-2 border-b border-gray-200 dark:border-white/10 group"><span className="inline-block transition-transform group-hover:translate-x-2">Services</span></a></li>
                    <li><a href="#work" onClick={closeMenu} className="hover:text-[#b820e6] transition-colors block py-2 border-b border-gray-200 dark:border-white/10 group"><span className="inline-block transition-transform group-hover:translate-x-2">My Work</span></a></li>
                    <li><a href="#leadership" onClick={closeMenu} className="hover:text-[#b820e6] transition-colors block py-2 border-b border-gray-200 dark:border-white/10 group"><span className="inline-block transition-transform group-hover:translate-x-2">Leadership</span></a></li>
                    <li><a href="#contact" onClick={closeMenu} className="hover:text-[#b820e6] transition-colors block py-2 group"><span className="inline-block transition-transform group-hover:translate-x-2">Contact</span></a></li>
                </ul>
            </nav>
        </>
    )
}