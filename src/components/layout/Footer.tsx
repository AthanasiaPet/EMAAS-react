import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer className="bg-[#1b2a3b] px-6 pt-16 pb-8">
            <div className="max-w-6xl mx-auto">

                {/* Top grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

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

                    {/* Column 2 - Academy & Research */}
                    <div>
                        <p className="text-[11px] uppercase tracking-[0.1em] text-[#c9a96e] mb-5 font-medium">Academy</p>
                        <div className="flex flex-col gap-3 mb-6">
                            <Link to="/structure" className="text-gray-500 text-sm hover:text-gray-300 transition-colors">Structure</Link>
                            <Link to="/presidium" className="text-gray-500 text-sm hover:text-gray-300 transition-colors">Presidium</Link>
                            <Link to="/advisory-council" className="text-gray-500 text-sm hover:text-gray-300 transition-colors">Advisory Council</Link>
                        </div>
                        <p className="text-[11px] uppercase tracking-[0.1em] text-[#c9a96e] mb-5 font-medium">Research</p>
                        <div className="flex flex-col gap-3">
                            <Link to="/projects" className="text-gray-500 text-sm hover:text-gray-300 transition-colors">Projects</Link>
                            <Link to="/grand-phd" className="text-gray-500 text-sm hover:text-gray-300 transition-colors">Grand PhD</Link>
                        </div>
                    </div>

                    {/* Column 3 - Activities & Members */}
                    <div>
                        <p className="text-[11px] uppercase tracking-[0.1em] text-[#c9a96e] mb-5 font-medium">Activities</p>
                        <div className="flex flex-col gap-3 mb-6">
                            <Link to="/news" className="text-gray-500 text-sm hover:text-gray-300 transition-colors">News</Link>
                            <Link to="/photo-gallery" className="text-gray-500 text-sm hover:text-gray-300 transition-colors">Photo Gallery</Link>
                        </div>
                        <p className="text-[11px] uppercase tracking-[0.1em] text-[#c9a96e] mb-5 font-medium">Members</p>
                        <div className="flex flex-col gap-3">
                            <Link to="/members" className="text-gray-500 text-sm hover:text-gray-300 transition-colors">Members List</Link>
                            <Link to="/membership" className="text-gray-500 text-sm hover:text-gray-300 transition-colors">Membership</Link>
                        </div>
                    </div>

                    {/* Column 4 - Contact */}
                    <div>
                        <p className="text-[11px] uppercase tracking-[0.1em] text-[#c9a96e] mb-5 font-medium">Contact</p>
                        <div className="flex flex-col gap-4">
                            <div className="flex items-start gap-3">
                                <FontAwesomeIcon icon={faLocationDot} className="text-[#c9a96e] text-sm w-4 mt-0.5" />
                                <span className="text-gray-500 text-sm">Sparta, Greece</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <FontAwesomeIcon icon={faLocationDot} className="text-[#c9a96e] text-sm w-4 mt-0.5" />
                                <span className="text-gray-500 text-sm">Lausanne, Switzerland</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <FontAwesomeIcon icon={faEnvelope} className="text-[#c9a96e] text-sm w-4 mt-0.5" />
                                <Link to="/contact" className="text-gray-500 text-sm hover:text-gray-300 transition-colors">Contact Form</Link>
                            </div>
                        </div>

                        {/* Nous */}
                        <p className="text-[11px] uppercase tracking-[0.1em] text-[#c9a96e] mt-6 mb-5 font-medium">Nous</p>
                        <div className="flex flex-col gap-3">
                            <Link to="/nous" className="text-gray-500 text-sm hover:text-gray-300 transition-colors">About Nous</Link>
                            <Link to="/latest-publications" className="text-gray-500 text-sm hover:text-gray-300 transition-colors">Latest Publications</Link>
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