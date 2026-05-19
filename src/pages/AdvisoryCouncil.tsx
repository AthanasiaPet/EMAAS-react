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
            <section className="bg-[#ebd2c3] py-15 px-6 text-center">
                <p className="text-[11px] uppercase tracking-[0.14em] text-[#1a1a1a] mb-4">Academy</p>
                <div className="w-10 h-0.5 bg-[#cc3300] mx-auto mb-5"></div>
                <h1 className="font-serif text-4xl font-bold text-[#1a1a1a] mb-5">Advisory Council</h1>
                <p className="text-[#1a1a1a] text-base leading-relaxed max-w-xl mx-auto">
                    Members of the EMAAS Advisory Council are elected for remarkable contributions in their fields and professions to provide advice, guidance, and consultation.
                </p>
            </section>

            {/* Stats */}
            <section className="bg-[#d4a898] py-2 px-6">
                <div className="max-w-4xl mx-auto flex items-center justify-center flex-wrap gap-12">
                    <div className="text-center">
                        <p className="font-serif text-4xl font-bold text-[#cc3300]">5</p>
                        <p className="text-[11px] uppercase tracking-wider text-[#1a1a1a] mt-1">Present Members</p>
                    </div>
                    <div className="w-px h-12 bg-[#cc3300]"></div>
                    <div className="text-center">
                        <p className="font-serif text-4xl font-bold text-[#cc3300]">2010</p>
                        <p className="text-[11px] uppercase tracking-wider text-[#1a1a1a] mt-1">Year Founded</p>
                    </div>
                    <div className="w-px h-12 bg-[#cc3300]"></div>
                    <div className="text-center">
                        <p className="font-serif text-4xl font-bold text-[#cc3300]">3</p>
                        <p className="text-[11px] uppercase tracking-wider text-[#1a1a1a] mt-1">Areas of Expertise</p>
                    </div>
                </div>
            </section>

            {/* Description */}
            <section className="bg-[#ebd2c3] py-14 px-6">
                <div className="max-w-3xl mx-auto text-center">
                    <p className="text-[#5a4a42] text-base leading-relaxed">
                        Advisory Council members are in charge of education, business, and public affairs. They are elected for their remarkable contributions in their respective fields and professions, providing strategic advice and guidance to the Academy.
                    </p>
                </div>
            </section>

            {/* Members Grid */}
            <section className="bg-[#ebd2c3] py-15 px-6">
                <div className="max-w-4xl mx-auto">
                    <p className="text-[11px] uppercase tracking-[0.14em] text-[#cc3300] text-center mb-3">Present Members</p>
                    <div className="w-10 h-0.5 bg-[#cc3300] mx-auto mb-10"></div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {advisoryMembers.map((member, index) => (
                            <div key={index} className="bg-white/40 border border-[#d4a898] border-t-4 border-t-[#cc3300] p-6 hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 bg-[#cc3300] flex items-center justify-center mb-4">
                                    <FontAwesomeIcon icon={faUser} className="text-white text-lg" />
                                </div>
                                <h3 className="font-serif text-lg font-semibold text-[#1a1a1a]">{member.name}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    )
}

export default AdvisoryCouncil