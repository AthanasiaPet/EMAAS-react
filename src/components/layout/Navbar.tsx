import { useState, useRef, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars, faChevronDown, faChevronUp, faXmark} from '@fortawesome/free-solid-svg-icons'
import logo2 from '../../assets/logo2.png'
import { Link } from 'react-router-dom'

function Navbar() {
    const [openDropdown, setOpenDropdown] = useState<string | null>(null)
    const navRef = useRef<HTMLDivElement>(null)
    const [mobileOpen, setMobileOpen] = useState(false)


    const toggleDropdown = (name: string) => {
        setOpenDropdown(openDropdown === name ? null : name)
    }

    const closeMobile = () => {
        setMobileOpen(false)
        setOpenDropdown(null)
    }

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (navRef.current && !navRef.current.contains(event.target as Node)) {
                setOpenDropdown(null)
                setMobileOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    return (
        <nav className="bg-[#cc3300f0] border-b border-gray-200 sticky top-0 z-50">
            <div ref={navRef} className="max-w-6xl mx-auto px-6">

                {/* Top bar */}
                <div className="flex items-center justify-between h-20">

                    {/* Logo */}
                    <Link to="/" onClick={closeMobile}>
                        <div className="flex items-center gap-3">
                            <img src={logo2} alt="EMAAS Logo" className="h-12 w-40 object-contain" />
                            <div>
                                <p className="font-bold text-[#ffcc00] text-m leading-tight">EMAAS</p>
                                <p className="font-bold text-[9px] uppercase tracking-widest text-[#ffcc00]">Euro Mediterranean Academy of arts and sciences</p>
                            </div>
                        </div>
                    </Link>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-6">

                        {/* Academy Dropdown */}
                        <div className="relative">
                            <button onClick={() => toggleDropdown('academy')} className="font-bold text-[11px] uppercase tracking-wider text-[#ffcc00] hover:text-[#ebd2c3] transition-colors flex items-center gap-1">
                                Academy
                                <FontAwesomeIcon icon={openDropdown === 'academy' ? faChevronUp : faChevronDown} className="text-[9px]" />
                            </button>
                            {openDropdown === 'academy' && (
                                <div className="absolute top-8 left-0 bg-white border border-gray-200 w-48 shadow-md z-50">
                                    <Link to="/structure" onClick={() => setOpenDropdown(null)} className="block px-4 py-3 text-[11px] uppercase tracking-wider text-[#1a1a1a] hover:bg-gray-50 hover:text-[#ebd2c3] transition-colors">Structure</Link>
                                    <Link to="/presidium" onClick={() => setOpenDropdown(null)} className="block px-4 py-3 text-[11px] uppercase tracking-wider text-[#1a1a1a] hover:bg-gray-50 hover:text-[#ebd2c3] transition-colors">Presidium</Link>
                                    <Link to="/advisory-council" onClick={() => setOpenDropdown(null)} className="block px-4 py-3 text-[11px] uppercase tracking-wider text-[#1a1a1a] hover:bg-gray-50 hover:text-[#ebd2c3] transition-colors">Advisory Council</Link>
                                </div>
                            )}
                        </div>

                        {/* Members Dropdown */}
                        <div className="relative">
                            <button onClick={() => toggleDropdown('members')} className="font-bold text-[11px] uppercase tracking-wider text-[#ffcc00] hover:text-[#ebd2c3] transition-colors flex items-center gap-1">
                                Members
                                <FontAwesomeIcon icon={openDropdown === 'members' ? faChevronUp : faChevronDown} className="text-[9px]" />
                            </button>
                            {openDropdown === 'members' && (
                                <div className="absolute top-8 left-0 bg-white border border-gray-200 w-48 shadow-md z-50">
                                    <Link to="/membership" onClick={() => setOpenDropdown(null)} className="block px-4 py-3 text-[11px] uppercase tracking-wider text-[#1a1a1a] hover:bg-gray-50 hover:text-[#ebd2c3] transition-colors">Membership</Link>
                                    <Link to="/members" onClick={() => setOpenDropdown(null)} className="block px-4 py-3 text-[11px] uppercase tracking-wider text-[#1a1a1a] hover:bg-gray-50 hover:text-[#ebd2c3] transition-colors">Members List</Link>
                                </div>
                            )}
                        </div>

                        {/* Research Dropdown */}
                        <div className="relative">
                            <button
                                onClick={() => toggleDropdown('research')}
                                className="font-bold text-[11px] uppercase tracking-wider text-[#ffcc00] hover:text-[#ebd2c3] transition-colors flex items-center gap-1"
                            >
                                Research
                                <FontAwesomeIcon icon={openDropdown === 'research' ? faChevronUp : faChevronDown} className="text-[9px]" />
                            </button>
                            {openDropdown === 'research' && (
                                <div className="absolute top-8 left-0 bg-white border border-gray-200 w-48 shadow-md z-50">
                                    <Link to="/projects" onClick={() => setOpenDropdown(null)} className="block px-4 py-3 text-[11px] uppercase tracking-wider text-[#1a1a1a] hover:bg-gray-50 hover:text-[#ebd2c3] transition-colors">Projects</Link>
                                    <Link to="/grand-phd" onClick={() => setOpenDropdown(null)} className="block px-4 py-3 text-[11px] uppercase tracking-wider text-[#1a1a1a] hover:bg-gray-50 hover:text-[#ebd2c3] transition-colors">Grand PhD</Link>
                                </div>
                            )}
                        </div>

                        {/* Activities Dropdown */}
                        <div className="relative">
                            <button
                                onClick={() => toggleDropdown('activities')}
                                className="font-bold text-[11px] uppercase tracking-wider text-[#ffcc00] hover:text-[#ebd2c3] transition-colors flex items-center gap-1"
                            >
                                Activities
                                <FontAwesomeIcon icon={openDropdown === 'activities' ? faChevronUp : faChevronDown} className="text-[9px]" />
                            </button>
                            {openDropdown === 'activities' && (
                                <div className="absolute top-8 left-0 bg-white border border-gray-200 w-48 shadow-md z-50">
                                    <Link to="/news" onClick={() => setOpenDropdown(null)} className="block px-4 py-3 text-[11px] uppercase tracking-wider text-[#1a1a1a] hover:bg-gray-50 hover:text-[#ebd2c3] transition-colors">News</Link>
                                    <Link to="/photo-gallery" onClick={() => setOpenDropdown(null)} className="block px-4 py-3 text-[11px] uppercase tracking-wider text-[#1a1a1a] hover:bg-gray-50 hover:text-[#ebd2c3] transition-colors">Photo Gallery</Link>
                                </div>
                            )}
                        </div>

                        {/* Nous Dropdown */}
                        <div className="relative">
                            <button onClick={() => toggleDropdown('nous')} className="font-bold text-[11px] uppercase tracking-wider text-[#ffcc00] hover:text-[#ebd2c3] transition-colors flex items-center gap-1">
                                Nous
                                <FontAwesomeIcon icon={openDropdown === 'nous' ? faChevronUp : faChevronDown} className="text-[9px]" />
                            </button>
                            {openDropdown === 'nous' && (
                                <div className="absolute top-8 left-0 bg-white border border-gray-200 w-48 shadow-md z-50">
                                    <Link to="/nous" onClick={() => setOpenDropdown(null)} className="block px-4 py-3 text-[11px] uppercase tracking-wider text-[#1a1a1a] hover:bg-gray-50 hover:text-[#ebd2c3] transition-colors">About Nous</Link>
                                    <Link to="/latest-publications" onClick={() => setOpenDropdown(null)} className="block px-4 py-3 text-[11px] uppercase tracking-wider text-[#1a1a1a] hover:bg-gray-50 hover:text-[#ebd2c3] transition-colors">Latest Publications</Link>
                                </div>
                            )}
                        </div>



                        <Link to="/contact" className="font-bold text-[11px] uppercase tracking-wider text-[#ffcc00] hover:text-[#ebd2c3] transition-colors">Contact</Link>

                    </div>

                    {/* Hamburger button — mobile only */}
                    <button
                        className="md:hidden text-[#8b4513] hover:text-[#ebd2c3] transition-colors"
                        onClick={() => setMobileOpen(!mobileOpen)}
                    >
                        <FontAwesomeIcon icon={mobileOpen ? faXmark : faBars} className="text-xl" />
                    </button>

                </div>

                {/* Mobile Menu */}
                {mobileOpen && (
                    <div className="md:hidden border-t border-gray-200 py-4 flex flex-col gap-1 bg-white">

                        <p className="text-[10px] uppercase tracking-widest text-gray-400 px-4 py-2">Academy</p>
                        <Link to="/structure" onClick={closeMobile} className="block px-6 py-2 text-[11px] uppercase tracking-wider text-[#1a1a1a] hover:text-[#ebd2c3] transition-colors">Structure</Link>
                        <Link to="/presidium" onClick={closeMobile} className="block px-6 py-2 text-[11px] uppercase tracking-wider text-[#1a1a1a] hover:text-[#ebd2c3] transition-colors">Presidium</Link>
                        <Link to="/advisory-council" onClick={closeMobile} className="block px-6 py-2 text-[11px] uppercase tracking-wider text-[#1a1a1a] hover:text-[#ebd2c3] transition-colors">Advisory Council</Link>

                        <div className="border-t border-gray-100 my-2"></div>
                        <p className="text-[10px] uppercase tracking-widest text-gray-400 px-4 py-2">Research</p>
                        <Link to="/projects" onClick={closeMobile} className="block px-6 py-2 text-[11px] uppercase tracking-wider text-[#1a1a1a] hover:text-[#ebd2c3] transition-colors">Projects</Link>
                        <Link to="/grand-phd" onClick={closeMobile} className="block px-6 py-2 text-[11px] uppercase tracking-wider text-[#1a1a1a] hover:text-[#ebd2c3] transition-colors">Grand PhD</Link>

                        <div className="border-t border-gray-100 my-2"></div>
                        <p className="text-[10px] uppercase tracking-widest text-gray-400 px-4 py-2">Activities</p>
                        <Link to="/news" onClick={closeMobile} className="block px-6 py-2 text-[11px] uppercase tracking-wider text-[#1a1a1a] hover:text-[#ebd2c3] transition-colors">News</Link>
                        <Link to="/photo-gallery" onClick={closeMobile} className="block px-6 py-2 text-[11px] uppercase tracking-wider text-[#1a1a1a] hover:text-[#ebd2c3] transition-colors">Photo Gallery</Link>

                        <div className="border-t border-gray-100 my-2"></div>
                        <p className="text-[10px] uppercase tracking-widest text-gray-400 px-4 py-2">Nous</p>
                        <Link to="/nous" onClick={closeMobile} className="block px-6 py-2 text-[11px] uppercase tracking-wider text-[#1a1a1a] hover:text-[#ebd2c3] transition-colors">About Nous</Link>
                        <Link to="/latest-publications" onClick={closeMobile} className="block px-6 py-2 text-[11px] uppercase tracking-wider text-[#1a1a1a] hover:text-[#ebd2c3] transition-colors">Latest Publications</Link>

                        <div className="border-t border-gray-100 my-2"></div>
                        <p className="text-[10px] uppercase tracking-widest text-gray-400 px-4 py-2">Members</p>
                        <Link to="/members" onClick={closeMobile} className="block px-6 py-2 text-[11px] uppercase tracking-wider text-[#1a1a1a] hover:text-[#ebd2c3] transition-colors">Members List</Link>
                        <Link to="/membership" onClick={closeMobile} className="block px-6 py-2 text-[11px] uppercase tracking-wider text-[#1a1a1a] hover:text-[#ebd2c3] transition-colors">Membership</Link>

                        <div className="border-t border-gray-100 my-2"></div>
                        <Link to="/contact" onClick={closeMobile} className="block px-4 py-2 text-[11px] uppercase tracking-wider text-[#1a1a1a] hover:text-[#ebd2c3] transition-colors">Contact</Link>

                    </div>
                )}

            </div>
        </nav>
    )
}

export default Navbar