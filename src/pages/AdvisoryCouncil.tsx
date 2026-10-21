
const advisoryMembers = [
    { name: 'Paata Shevardnadze' },
    { name: 'Ketty Tzitzikosta' },
    { name: 'Stavros Argeitakos' },
    { name: 'Claude Potelle' },
]

function AdvisoryCouncil() {
    return (
        <div>
            {/* Page Hero */}
            <section className="bg-[#ebd2c3] pt-15 pb-6 px-6 text-center">
                <p className="text-[11px] uppercase tracking-[0.14em] text-[#1a1a1a] mb-4">
                    Academy
                </p>

                <div className="w-10 h-0.5 bg-[#cc3300] mx-auto mb-5"></div>

                <h1 className="font-serif text-4xl font-bold text-[#1a1a1a] mb-5">
                    Advisory Council
                </h1>

                <p className="text-[#1a1a1a] text-base leading-relaxed max-w-xl mx-auto">
                    Members of the EMAAS Advisory Council are elected for remarkable contributions in their fields and professions to provide advice, guidance, and consultation.
                </p>
            </section>

            {/* Present Members */}
            <section className="bg-[#ebd2c3] pt-4 pb-12 px-6">
                <div className="max-w-2xl mx-auto">
                    <p className="text-[11px] uppercase tracking-[0.14em] text-[#cc3300] text-center mb-3">
                        Present Members
                    </p>

                    <div className="w-10 h-0.5 bg-[#cc3300] mx-auto mb-6"></div>

                    <div className="flex flex-col gap-4">
                        {advisoryMembers.map((member, index) => (
                            <div
                                key={index}
                                className="bg-white/40 border border-[#d4a898] border-l-4 border-l-[#cc3300] px-5 py-4 hover:shadow-md transition-shadow"
                            >
                                <h3 className="font-serif text-base font-semibold text-[#1a1a1a]">
                                    {member.name}
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AdvisoryCouncil
