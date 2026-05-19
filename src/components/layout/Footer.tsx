import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer className="bg-[#c4a090] px-4 pt-3 pb-2">
            <div className="max-w-6xl mx-auto">

                {/* Top grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">

                    {/* Column 1 - Brand */}
                    <div>
                        <div className="flex items-center gap-2  mb-3">
                            <div className="w-8 h-8 bg-[#ebd2c3] flex items-center justify-center">
                                <span className="text-[#8b4513] font-bold text-sm">E</span>
                            </div>
                            <span className="font-serif text-[#1a1a1a] font-semibold">EMAAS</span>
                        </div>
                        <p className="text-[#1a1a1a] text-xs leading-relaxed max-w-xs">
                            Euro Mediterranean Academy of Arts and Sciences. Headquartered in Sparta, Greece with offices in Lausanne, Switzerland.
                        </p>
                    </div>

                    {/* Column 2 - Academy & Research */}
                    <div>
                        <p className="font-bold text-[11px] text-[11px] uppercase tracking-[0.1em] text-[#cc3300] mb-5 ">Academy</p>
                        <div className="flex flex-col gap-2 mb-4">
                            <Link to="/structure" className="text-[#1a1a1a] text-sm hover:text-[#cc3300] transition-colors">Structure</Link>
                            <Link to="/presidium" className="text-[#1a1a1a] text-sm hover:text-[#cc3300] transition-colors">Presidium</Link>
                            <Link to="/advisory-council" className="text-[#1a1a1a] text-sm hover:text-[#cc3300] transition-colors">Advisory Council</Link>
                        </div>
                        <p className="text-[11px] text-[11px] uppercase tracking-[0.1em] text-[#cc3300] mb-3 font-bold">Research</p>
                        <div className="flex flex-col gap-2 ">
                            <Link to="/projects" className="text-[#1a1a1a] text-sm hover:text-[#cc3300] transition-colors">Projects</Link>
                            <Link to="/grand-phd" className="text-[#1a1a1a] text-sm hover:text-[#cc3300] transition-colors">Grand PhD</Link>
                        </div>
                    </div>

                    {/* Column 3 - Activities & Members */}
                    <div>
                        <p className="font-bold text-[11px] text-[11px] uppercase tracking-[0.1em] text-[#cc3300] mb-3 font-bold">Activities</p>
                        <div className="flex flex-col gap-2 mb-4">
                            <Link to="/news" className="text-[#1a1a1a] text-sm hover:text-[#cc3300] transition-colors">News</Link>
                            <Link to="/photo-gallery" className="text-[#1a1a1a] text-sm hover:text-[#cc3300] transition-colors">Photo Gallery</Link>
                        </div>
                        <p className="text-[11px] text-[11px] uppercase tracking-[0.1em] text-[#cc3300] mb-3 font-bold">Members</p>
                        <div className="flex flex-col gap-2 ">
                            <Link to="/members" className="text-[#1a1a1a] text-sm hover:text-[#cc3300] transition-colors">Members List</Link>
                            <Link to="/membership" className="text-[#1a1a1a] text-sm hover:text-[#cc3300] transition-colors">Membership</Link>
                        </div>
                    </div>

                    {/* Column 4 - Nous & Contact */}
                    <div>
                        <p className="font-bold text-[11px] text-[11px] uppercase tracking-[0.1em] text-[#cc3300] mb-3">Nous</p>
                        <div className="flex flex-col gap-2 mb-4">
                            <Link to="/nous" className="text-[#1a1a1a] text-sm hover:text-[#cc3300] transition-colors">About Nous</Link>
                            <Link to="/latest-publications" className="text-[#1a1a1a] text-sm hover:text-[#cc3300] transition-colors">Latest Publications</Link>
                        </div>
                        <p className="text-[11px] text-[11px] uppercase tracking-[0.1em] text-[#cc3300] mb-3 font-bold">Contact</p>
                        <div className="flex flex-col gap-2 ">
                            <div className="flex items-start gap-2 ">
                                <FontAwesomeIcon icon={faLocationDot} className="text-[#cc3300] text-sm w-4 mt-0.5" />
                                <span className="text-[#1a1a1a] text-sm">Sparta, Greece</span>
                            </div>
                            <div className="flex items-start gap-2 ">
                                <FontAwesomeIcon icon={faLocationDot} className="text-[#cc3300] text-sm w-4 mt-0.5" />
                                <span className="text-[#1a1a1a] text-sm">Lausanne, Switzerland</span>
                            </div>
                            <div className="flex items-start gap-2 ">
                                <FontAwesomeIcon icon={faEnvelope} className="text-[#cc3300] text-sm w-4 mt-0.5" />
                                <Link to="/contact" className="text-[#1a1a1a] text-sm hover:text-[#cc3300] transition-colors">Contact Form</Link>
                            </div>
                        </div>
                    </div>



                </div>

                {/* Bottom bar */}
                <div className="border-t border-[#cc3300] pt-3 flex flex-col md:flex-row justify-between items-center gap-2 ">
                    <span className="text-[#1a1a1a] text-xs">© 2025 Euro Mediterranean Academy of Arts and Sciences. All rights reserved.</span>
                    <span className="text-[#1a1a1a] text-xs">Sparta · Lausanne</span>
                </div>

            </div>
        </footer>
    )
}

export default Footer