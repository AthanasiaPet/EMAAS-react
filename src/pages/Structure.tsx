import { Link } from 'react-router-dom'

function Structure() {
    return (
        <div>

            {/* Page Hero */}
            <section className="bg-[#ebd2c3] py-12 px-6 text-center">
                <p className="text-[11px] uppercase tracking-[0.14em] text-[#1a1a1a] mb-4">The Academy</p>
                <div className="w-10 h-0.5 bg-[#cc3300] mx-auto mb-5"></div>
                <h1 className="font-serif text-4xl font-bold text-[#1a1a1a] mb-5">Structure</h1>
                <p className="text-[#1a1a1a] text-base leading-relaxed max-w-xl mx-auto">
                    EMAAS is structured in two orders, the Order of Arts and Humanities and the Order of Natural Sciences and Engineering.
                </p>
            </section>

            {/* Two Orders */}

            <section className="bg-[#ebd2c3] py-8 px-6">
                <p className="text-[11px] uppercase tracking-[0.14em] text-[#1a1a1a] text-center mb-3">
                    The Two Orders
                </p>

                <div className="w-10 h-0.5 bg-[#cc3300] mx-auto mb-10"></div>

                <div className="max-w-3xl mx-auto flex flex-col gap-5">

                    {/* Order 1 */}
                    <div className="bg-white/20 border border-[#d4a898] border-l-4 border-l-[#cc3300] p-5 hover:shadow-md transition-shadow">
                        <h2 className="font-serif text-xl font-semibold text-[#1a1a1a] mb-2">
                            Order of Arts & Humanities
                        </h2>

                        <p className="text-[#5a4a42] text-sm leading-relaxed">
                            Dedicated to the advancement of artistic expression, cultural heritage, philosophy, literature, and the humanities across the Euro-Mediterranean region.
                        </p>
                    </div>

                    {/* Order 2 */}
                    <div className="bg-white/20 border border-[#d4a898] border-l-4 border-l-[#cc3300] p-5 hover:shadow-md transition-shadow">
                        <h2 className="font-serif text-xl font-semibold text-[#1a1a1a] mb-2">
                            Order of Natural Sciences & Engineering
                        </h2>

                        <p className="text-[#5a4a42] text-sm leading-relaxed">
                            Focused on scientific research, technological innovation, engineering, and applied sciences for sustainable development.
                        </p>
                    </div>

                </div>

            </section>

            {/* Org Chart */}
            <section className="bg-[#ebd2c3] py-10 px-6">
                <p className="text-[11px] uppercase tracking-[0.14em] text-[#1a1a1a] text-center mb-3">Organisation</p>
                <div className="w-10 h-0.5 bg-[#cc3300] mx-auto mb-10"></div>
                <div className="max-w-2xl mx-auto flex flex-col items-center">

                    {/* Top */}
                    <div className="bg-white/40 border border-[#d4a898] border-l-4 border-l-[#cc3300] px-8 py-3 w-56 text-center">
                        <p className="font-serif text-base font-semibold text-[#1a1a1a]">
                            EMAAS Academy
                        </p>
                    </div>
                    <div className="w-0.5 h-8 bg-[#cc3300]"></div>

                    {/* Presidium */}
                    <div className="bg-white/40 border border-[#d4a898] border-l-4 border-l-[#cc3300] px-8 py-3 w-56 text-center">
                        <Link to="/presidium">
                            <p className="font-serif text-base font-semibold text-[#1a1a1a]">Presidium</p>
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
                            <div className="bg-white/40 border border-[#d4a898] border-l-4 border-l-[#cc3300] px-6 py-3 w-44 text-center">
                                <Link to="/members">
                                    <p className="font-serif text-sm font-semibold text-[#1a1a1a]">Members</p>
                                </Link>
                                <p className="text-[11px] text-[#5a4a42] mt-1">Ballot-selected academicians</p>
                            </div>
                            <div className="bg-white/40 border border-[#d4a898] border-l-4 border-l-[#cc3300] px-6 py-3 w-44 text-center">
                                <Link to="/advisory-council">
                                    <p className="font-serif text-sm font-semibold text-[#1a1a1a]">Advisory Council</p>
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