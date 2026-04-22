import { useState, useRef, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import nano_logo from '../../assets/nano_logo.png'
import { Link } from 'react-router-dom'

function Navbar() {
    const [openDropdown, setOpenDropdown] = useState<string | null>(null)
    const navRef = useRef<HTMLDivElement>(null)

    const toggleDropdown = (name: string) => {
        setOpenDropdown(openDropdown === name ? null : name)
    }

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (navRef.current && !navRef.current.contains(event.target as Node)) {
                setOpenDropdown(null)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    return (
        <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
            <div ref={navRef} className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">

                {/* Logo */}
                <div className="flex items-center gap-3">
                    <img
                        src={nano_logo}
                        alt="EMAAS Logo"
                        className="h-16 w-20 object-contain rounded"
                    />
                    <div>
                        <p className="font-bold text-[#1b2a3b] text-sm leading-tight">EMAAS</p>
                        <p className="text-[9px] uppercase tracking-widest text-gray-400">Euro Mediterranean Academy of arts and sciences</p>
                    </div>
                </div>

                {/* Links */}
                <div className="hidden md:flex items-center gap-6">

                    {/* Academy Dropdown */}
                    <div className="relative">
                        <button
                            onClick={() => toggleDropdown('academy')}
                            className="text-[11px] uppercase tracking-wider text-gray-600 hover:text-[#8b5e3c] transition-colors flex items-center gap-1"
                        >
                            Academy
                            <FontAwesomeIcon icon={openDropdown === 'academy' ? faChevronUp : faChevronDown} className="text-[9px]" />
                        </button>
                        {openDropdown === 'academy' && (
                            <div className="absolute top-8 left-0 bg-white border border-gray-200 w-48 shadow-md z-50">
                                <Link to="/structure" className="block px-4 py-3 text-[11px] uppercase tracking-wider text-gray-600 hover:bg-gray-50 hover:text-[#8b5e3c] transition-colors">Structure</Link>
                                <Link to="/presidium" className="block px-4 py-3 text-[11px] uppercase tracking-wider text-gray-600 hover:bg-gray-50 hover:text-[#8b5e3c] transition-colors">Presidium</Link>
                                <Link to="/advisory-council" className="block px-4 py-3 text-[11px] uppercase tracking-wider text-gray-600 hover:bg-gray-50 hover:text-[#8b5e3c] transition-colors">Advisory Council</Link>
                            </div>
                        )}
                    </div>

                    {/* Research Dropdown */}
                    <div className="relative">
                        <button
                            onClick={() => toggleDropdown('research')}
                            className="text-[11px] uppercase tracking-wider text-gray-600 hover:text-[#8b5e3c] transition-colors flex items-center gap-1"
                        >
                            Research
                            <FontAwesomeIcon icon={openDropdown === 'research' ? faChevronUp : faChevronDown} className="text-[9px]" />
                        </button>
                        {openDropdown === 'research' && (
                            <div className="absolute top-8 left-0 bg-white border border-gray-200 w-48 shadow-md z-50">
                                <Link to="/grand-phd" className="block px-4 py-3 text-[11px] uppercase tracking-wider text-gray-600 hover:bg-gray-50 hover:text-[#8b5e3c] transition-colors">Grand PhD</Link>
                            </div>
                        )}
                    </div>

                    {/* Standalone links */}
                    <Link to="/activities" className="text-[11px] uppercase tracking-wider text-gray-600 hover:text-[#8b5e3c] transition-colors">Activities</Link>
                    <Link to="/nous" className="text-[11px] uppercase tracking-wider text-gray-600 hover:text-[#8b5e3c] transition-colors">Nous</Link>



                    {/* Members Dropdown */}
                    <div className="relative">
                        <button
                             onClick={() => toggleDropdown('members')}
                             className="text-[11px] uppercase tracking-wider text-gray-600 hover:text-[#8b5e3c] transition-colors flex items-center gap-1"
                        >
                            Members
                            <FontAwesomeIcon icon={openDropdown === 'members' ? faChevronUp : faChevronDown} className="text-[9px]" />
                        </button>
                        {openDropdown === 'members' && (
                            <div className="absolute top-8 left-0 bg-white border border-gray-200 w-48 shadow-md z-50">
                                <Link to="/members" className="block px-4 py-3 text-[11px] uppercase tracking-wider text-gray-600 hover:bg-gray-50 hover:text-[#8b5e3c] transition-colors">Members List</Link>
                                <Link to="/membership" className="block px-4 py-3 text-[11px] uppercase tracking-wider text-gray-600 hover:bg-gray-50 hover:text-[#8b5e3c] transition-colors">Membership</Link>
                            </div>
                        )}
                    </div>



                    {/* Contact */}
                    <Link to="/contact" className="text-[11px] uppercase tracking-wider text-gray-600 hover:text-[#8b5e3c] transition-colors">Contact</Link>

                </div>
            </div>
        </nav>
    )
}

export default Navbar