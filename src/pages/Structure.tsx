import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPalette, faFlask } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

function Structure() {
    return (
        <div>

            {/* Page Hero */}
            <section className="bg-[#ebd2c3] py-20 px-6 text-center">
                <p className="text-[11px] uppercase tracking-[0.14em] text-[#1a1a1a] mb-4">The Academy</p>
                <div className="w-10 h-0.5 bg-[#cc3300] mx-auto mb-5"></div>
                <h1 className="font-serif text-4xl font-bold text-[#1a1a1a] mb-5">Structure</h1>
                <p className="text-[#1a1a1a] text-base leading-relaxed max-w-xl mx-auto">
                    EMAAS is structured in two orders, the Order of Arts and Humanities and the Order of Natural Sciences and Engineering.
                </p>
            </section>

            {/* Two Orders */}
            <section className="bg-[#ebd2c3] py-20 px-6">
                <p className="text-[11px] uppercase tracking-[0.14em] text-[#1a1a1a] text-center mb-3">The Two Orders</p>
                <div className="w-10 h-0.5 bg-[#cc3300] mx-auto mb-10"></div>
                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* Order 1 */}
                    <div className="bg-white/40 border border-[#d4a898] border-t-4 border-t-[#cc3300] p-8 hover:shadow-md transition-shadow">
                        <div className="w-11 h-11 bg-[#cc3300] flex items-center justify-center mb-6">
                            <FontAwesomeIcon icon={faPalette} className="text-white text-lg" />
                        </div>
                        <h2 className="font-serif text-xl font-semibold text-[#1a1a1a] mb-4">
                            Order of Arts & Humanities
                        </h2>
                        <p className="text-[#5a4a42] text-sm leading-relaxed">
                            Dedicated to the advancement of artistic expression, cultural heritage, philosophy, literature, and the humanities across the Euro-Mediterranean region.
                        </p>
                    </div>

                    {/* Order 2 */}
                    <div className="bg-white/40 border border-[#d4a898] border-t-4 border-t-[#cc3300] p-8 hover:shadow-md transition-shadow">
                        <div className="w-11 h-11 bg-[#cc3300] flex items-center justify-center mb-6">
                            <FontAwesomeIcon icon={faFlask} className="text-white text-lg" />
                        </div>
                        <h2 className="font-serif text-xl font-semibold text-[#1a1a1a] mb-4">
                            Order of Natural Sciences & Engineering
                        </h2>
                        <p className="text-[#5a4a42] text-sm leading-relaxed">
                            Focused on scientific research, technological innovation, engineering, and applied sciences for sustainable development.
                        </p>
                    </div>

                </div>
            </section>

            {/* Org Chart */}
            <section className="bg-[#ebd2c3] py-20 px-6">
                <p className="text-[11px] uppercase tracking-[0.14em] text-[#cc3300] text-center mb-3">Organisation</p>
                <div className="w-10 h-0.5 bg-[#cc3300] mx-auto mb-10"></div>
                <div className="max-w-2xl mx-auto flex flex-col items-center">

                    {/* Top */}
                    <div className="bg-white/40 border border-[#d4a898] border-l-4 border-l-[#cc3300] px-8 py-4 w-56 text-center text-[#cc3300] font-semibold">
                        EMAAS Academy
                    </div>
                    <div className="w-0.5 h-8 bg-[#cc3300]"></div>

                    {/* Presidium */}
                    <div className="bg-white/40 border border-[#d4a898] border-l-4 border-l-[#cc3300] px-8 py-4 w-56 text-center">
                        <Link to="/presidium">
                            <p className="font-serif text-base font-semibold text-[#cc3300]">Presidium</p>
                        </Link>
                        <p className="text-[11px] text-[#5a4a42] mt-1">Executive leadership</p>
                    </div>
                    <div className="w-0.5 h-8 bg-[#cc3300]"></div>

                    {/* Horizontal connector */}
                    <div className="relative w-full max-w-lg flex justify-center">
                        <div className="absolute top-0 left-1/4 right-1/4 h-0.5 bg-[#cc3300]"></div>
                        <div className="absolute top-0 left-1/4 w-0.5 h-8 bg-[#cc3300]"></div>
                        <div className="absolute top-0 right-1/4 w-0.5 h-8 bg-[#cc3300]"></div>

                        <div className="flex w-full justify-around pt-8">
                            <div className="bg-white/40 border border-[#d4a898] border-l-4 border-l-[#cc3300] px-6 py-4 w-44 text-center">
                                <Link to="/members">
                                    <p className="font-serif text-sm font-semibold text-[#cc3300]">Members</p>
                                </Link>
                                <p className="text-[11px] text-[#5a4a42] mt-1">Ballot-selected academicians</p>
                            </div>
                            <div className="bg-white/40 border border-[#d4a898] border-l-4 border-l-[#cc3300] px-6 py-4 w-44 text-center">
                                <Link to="/advisory-council">
                                    <p className="font-serif text-sm font-semibold text-[#cc3300]">Advisory Council</p>
                                </Link>
                                <p className="text-[11px] text-[#5a4a42] mt-1">Strategic guidance</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

        </div>
    )
}

export default Structure