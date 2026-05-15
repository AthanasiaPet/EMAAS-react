import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPalette, faFlask } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

function Structure() {
    return (
        <div>

            {/* Page Hero */}
            <section className="bg-[#8b4513] py-20 px-6 text-center">
                <p className="text-[11px] uppercase tracking-[0.14em] text-[#f6ac3d] mb-4">The Academy</p>
                <div className="w-10 h-0.5 bg-[#f6ac3d] mx-auto mb-5"></div>
                <h1 className="font-serif text-4xl font-bold text-white mb-5">Structure</h1>
                <p className="text-white text-base leading-relaxed max-w-xl mx-auto">
                    EMAAS is structured in two orders, the Order of Arts and Humanities and the Order of Natural Sciences and Engineering.
                </p>
            </section>

            {/* Two Orders */}
            <section className="bg-[#f8f6f1] py-20 px-6">
                <p className="text-[11px] uppercase tracking-[0.14em] text-[#a0522d] text-center mb-3">The Two Orders</p>
                <div className="w-10 h-0.5 bg-[#f6ac3d] mx-auto mb-10"></div>
                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* Order 1 */}
                    <div className="bg-white border border-gray-200 border-t-4 border-t-[#f6ac3d] p-8 hover:shadow-md transition-shadow">
                        <div className="w-11 h-11 bg-[#8b4513] flex items-center justify-center mb-6">
                            <FontAwesomeIcon icon={faPalette} className="text-[#f6ac3d] text-lg" />
                        </div>
                        <h2 className="font-serif text-xl font-semibold text-[#8b4513] mb-4">
                            Order of Arts & Humanities
                        </h2>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Dedicated to the advancement of artistic expression, cultural heritage, philosophy, literature, and the humanities across the Euro-Mediterranean region.
                        </p>
                    </div>

                    {/* Order 2 */}
                    <div className="bg-white border border-gray-200 border-t-4 border-t-[#f6ac3d] p-8 hover:shadow-md transition-shadow">
                        <div className="w-11 h-11 bg-[#8b4513] flex items-center justify-center mb-6">
                            <FontAwesomeIcon icon={faFlask} className="text-[#f6ac3d] text-lg" />
                        </div>
                        <h2 className="font-serif text-xl font-semibold text-[#8b4513] mb-4">
                            Order of Natural Sciences & Engineering
                        </h2>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Focused on scientific research, technological innovation, engineering, and applied sciences for sustainable development.
                        </p>
                    </div>

                </div>
            </section>

            {/* Org Chart */}
            <section className="bg-white py-20 px-6">
                <p className="text-[11px] uppercase tracking-[0.14em] text-[#a0522d] text-center mb-3">Organisation</p>
                <div className="w-10 h-0.5 bg-[#f6ac3d] mx-auto mb-10"></div>
                <div className="max-w-2xl mx-auto flex flex-col items-center">

                    {/* Top */}
                    <div className="bg-[#8b4513] text-[#f6ac3d] px-10 py-4 text-[11px] uppercase tracking-wider font-bold">
                        EMAAS Academy
                    </div>
                    <div className="w-0.5 h-8 bg-[#f6ac3d]"></div>

                    {/* Presidium */}
                    <div className="bg-white border border-gray-200 border-l-4 border-l-[#f6ac3d] px-8 py-4 w-56 text-center">
                        <Link to="/presidium">
                        <p className="font-serif text-base font-semibold text-[#8b4513]">
                        Presidium
                    </p>
                        </Link>

                        <p className="text-[11px] text-gray-400 mt-1">Executive leadership</p>
                    </div>
                    <div className="w-0.5 h-8 bg-[#f6ac3d]"></div>

                    {/* Horizontal connector */}
                    <div className="relative w-full max-w-lg flex justify-center">
                        <div className="absolute top-0 left-1/4 right-1/4 h-0.5 bg-[#f6ac3d]"></div>
                        <div className="absolute top-0 left-1/4 w-0.5 h-8 bg-[#f6ac3d]"></div>
                        <div className="absolute top-0 right-1/4 w-0.5 h-8 bg-[#f6ac3d]"></div>

                        {/* Members */}
                        <div className="flex w-full justify-around pt-8">
                            <div className="bg-white border border-gray-200 border-l-4 border-l-[#f6ac3d] px-6 py-4 w-44 text-center">
                                <Link to="/members">
                                    <p className="font-serif text-sm font-semibold text-[#8b4513] ">
                                        Members
                                    </p>
                                </Link>
                                <p className="text-[11px] text-gray-400 mt-1">Ballot-selected academicians</p>
                            </div>

                            {/* Advisory Council */}
                            <div className="bg-white border border-gray-200 border-l-4 border-l-[#f6ac3d] px-6 py-4 w-44 text-center">
                                <Link to="/advisory-council">
                                <p className="font-serif text-sm font-semibold text-[#8b4513] ">
                                    Advisory Council
                                </p>
                                </Link>
                                <p className="text-[11px] text-gray-400 mt-1">Strategic guidance</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

        </div>
    )
}

export default Structure