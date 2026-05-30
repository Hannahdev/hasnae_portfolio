export default function Footer() {
    return (
        <div className="mt-20">
            <div className="text-center">
                <a href="#top">
                    <span className="text-4xl font-Ovo font-bold tracking-widest dark:text-white block mb-4">ELMIR<span className="text-rose-500">.</span></span>
                </a>


                <div className="w-max flex items-center gap-2 mx-auto">
                    <img src="./assets/mail_icon.png" alt="" className="w-5 dark:hidden" />
                    <img src="./assets/mail_icon_dark.png" alt="" className="w-5 hidden dark:block" />

                    <a href="mailto:elmirhasnae55@gmail.com">elmirhasnae55@gmail.com</a>
                </div>
            </div>
            <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-3">
                <p>© {new Date().getFullYear()} Hasnae EL MIR. All rights reserved.</p>
                <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
                    <li><a target='_blank' href="#">GitHub</a></li>
                    <li><a target='_blank' href="#">LinkedIn</a></li>
                    <li><a target='_blank' href="#">Twitter</a></li>
                </ul>
            </div>
        </div>
    )
}