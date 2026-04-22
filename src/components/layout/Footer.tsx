import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faEnvelope } from '@fortawesome/free-solid-svg-icons'

const navLinks = [
    'About',
    'Structure',
    'Members',
    'Activities',
    'Grand PhD',
]

function Footer() {
    return (
        <footer className="bg-[#1b2a3b] px-6 pt-16 pb-8">
            <div className="max-w-6xl mx-auto">

                {/* Top grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

                    {/* Column 1 - Brand */}
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-8 h-8 bg-[#c9a96e] flex items-center justify-center">
                                <span className="text-[#1b2a3b] font-bold text-sm">E</span>
                            </div>
                            <span className="font-serif text-[#e8e4dc] font-semibold">EMAAS</span>
                        </div>
                        <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                            Euro Mediterranean Academy of Arts and Sciences. Headquartered in Sparta, Greece with offices in Lausanne, Switzerland.
                        </p>
                    </div>

                    {/* Column 2 - Navigation */}
                    <div>
                        <p className="text-[11px] uppercase tracking-[0.1em] text-[#c9a96e] mb-5 font-medium">Navigation</p>
                        <div className="flex flex-col gap-3">
                            {navLinks.map((link, index) => (
                                <a key={index} href="#" className="text-gray-500 text-sm hover:text-gray-300 transition-colors">
                                    {link}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Column 3 - Contact */}
                    <div>
                        <p className="text-[11px] uppercase tracking-[0.1em] text-[#c9a96e] mb-5 font-medium">Contact</p>
                        <div className="flex flex-col gap-3">
                            <div className="flex items-center gap-3">
                                <FontAwesomeIcon icon={faLocationDot} className="text-[#c9a96e] text-sm w-4" />
                                <span className="text-gray-500 text-sm">Sparta, Greece</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <FontAwesomeIcon icon={faLocationDot} className="text-[#c9a96e] text-sm w-4" />
                                <span className="text-gray-500 text-sm">Lausanne, Switzerland</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <FontAwesomeIcon icon={faEnvelope} className="text-[#c9a96e] text-sm w-4" />
                                <a href="#" className="text-gray-500 text-sm hover:text-gray-300 transition-colors">Contact Form</a>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Bottom bar */}
                <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
                    <span className="text-gray-600 text-xs">© 2025 Euro Mediterranean Academy of Arts and Sciences. All rights reserved.</span>
                    <span className="text-gray-600 text-xs">Sparta · Lausanne</span>
                </div>

            </div>
        </footer>
    )
}

export default Footer