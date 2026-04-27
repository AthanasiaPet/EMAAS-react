import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const advisoryMembers = [
    { name: 'Paata Shevardnadze' },
    { name: 'Ketty Tzitzikosta' },
    { name: 'Stavros Argeitakos' },
    { name: 'Claude Potelle' },
    { name: 'Vasilis J. Botopoulos' },
]

function AdvisoryCouncil() {
    return (
        <div>

            {/* Page Hero */}
            <section className="bg-[#1b2a3b] py-20 px-6 text-center">
                <p className="text-[11px] uppercase tracking-[0.14em] text-[#c9a96e] mb-4">Academy</p>
                <div className="w-10 h-0.5 bg-[#c9a96e] mx-auto mb-5"></div>
                <h1 className="font-serif text-4xl font-bold text-white mb-5">Advisory Council</h1>
                <p className="text-gray-400 text-base leading-relaxed max-w-xl mx-auto">
                    Members of the EMAAS Advisory Council are elected for remarkable contributions in their fields and professions to provide advice, guidance, and consultation.
                </p>
            </section>

            {/* Description */}
            <section className="bg-white py-14 px-6">
                <div className="max-w-3xl mx-auto text-center">
                    <p className="text-gray-500 text-base leading-relaxed">
                        Advisory Council members are in charge of education, business, and public affairs. They are elected for their remarkable contributions in their respective fields and professions, providing strategic advice and guidance to the Academy.
                    </p>
                </div>
            </section>

            {/* Members Grid */}
            <section className="bg-[#f8f6f1] py-20 px-6">
                <div className="max-w-4xl mx-auto">
                    <p className="text-[11px] uppercase tracking-[0.14em] text-[#8b5e3c] text-center mb-3">Present Members</p>
                    <div className="w-10 h-0.5 bg-[#c9a96e] mx-auto mb-10"></div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {advisoryMembers.map((member, index) => (
                            <div key={index} className="bg-white border border-gray-200 border-t-4 border-t-[#c9a96e] p-6 hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 bg-[#1b2a3b] flex items-center justify-center mb-4">
                                    <FontAwesomeIcon icon={faUser} className="text-[#c9a96e] text-lg" />
                                </div>
                                <h3 className="font-serif text-lg font-semibold text-[#1b2a3b]">{member.name}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    )
}

export default AdvisoryCouncil