
const scholarCriteria = [
    {
        title: 'Full Professor Status',
        text: 'Provided by the university procedure of nomination.',
    },
    {
        title: 'PhD or Equivalent',
        text: 'A doctoral degree or equivalent qualification is required.',
    },
    {
        title: '100+ Publications',
        text: 'About 100 articles, book chapters, or equivalent.',
    },
]

const artistCriteria = [
    {
        title: 'Visual Arts',
        text: 'Art academy degree, solo exhibitions in well-known public museums in different countries, at best one published monograph about their work.',
    },
    {
        title: 'Architecture',
        text: 'University degree, published monographs, public buildings in different countries, and architectural prize(s).',
    },
    {
        title: 'Music',
        text: 'Music academy degree, performances at concerts in famous places in different countries, at best one national musical distinction.',
    },
    {
        title: 'Literature & Writing',
        text: 'University/academic degree, national literary prize(s) and books translated in other languages.',
    },
]

function Membership() {
    return (
        <div>
            {/* Page Hero */}
            <section className="bg-[#ebd2c3] pt-15 pb-6 px-6 text-center">
                <p className="text-[11px] uppercase tracking-[0.14em] text-[#1a1a1a] mb-4">
                    Members
                </p>

                <div className="w-10 h-0.5 bg-[#cc3300] mx-auto mb-5"></div>

                <h1 className="font-serif text-4xl font-bold text-[#1a1a1a] mb-5">
                    Membership
                </h1>

                <p className="text-[#5a4a42] text-base leading-relaxed max-w-xl mx-auto">
                    EMAAS nominates scientists, scholars and experts of international distinction who have exceptional standing in society as a result of their accomplishments and publications.
                </p>
            </section>

            {/* General Requirements */}
            <section className="bg-[#ebd2c3] pt-8 pb-10 px-6">
                <div className="max-w-2xl mx-auto">
                    <p className="text-[11px] uppercase tracking-[0.14em] text-[#1a1a1a] text-center mb-3">
                        General Requirements
                    </p>

                    <div className="w-10 h-0.5 bg-[#cc3300] mx-auto mb-6"></div>

                    <div className="bg-white/40 border border-[#d4a898] border-l-4 border-l-[#cc3300] p-6">
                        <p className="text-[#5a4a42] text-base leading-relaxed mb-4">
                            A person of distinguished merit, citizen of any country or even without citizenship, independently of sex, nationality, race and political orientation, may apply for membership for their outstanding achievements in science and arts.
                        </p>

                        <p className="text-[#5a4a42] text-base leading-relaxed mb-4">
                            The applicant must have a Doctor's degree and an appropriate curriculum vitae, the list of scientific publications (up to 100 articles and books), be eminent as a scholar/scientist, and two reference letters by distinguished scientists to support their application.
                        </p>

                        <p className="text-[#5a4a42] text-base leading-relaxed mb-4">
                            A candidate must have an interdisciplinary background and act in response to the mission and vision of the Academy. The primary criterion for membership is sustained academic excellence in a specific field.
                        </p>

                        <p className="text-[#5a4a42] text-base leading-relaxed">
                            Membership is attained through a petition, review, and election process. A candidate will deliver a short introductory presentation about their achievements through an online meeting.
                        </p>
                    </div>
                </div>
            </section>

            {/* Scientific Criteria */}
            <section className="bg-[#ebd2c3] py-10 px-6">
                <div className="max-w-2xl mx-auto">
                    <p className="text-[11px] uppercase tracking-[0.14em] text-[#1a1a1a] text-center mb-3">
                        Criteria for election in scientific & scholarly order
                    </p>

                    <div className="w-10 h-0.5 bg-[#cc3300] mx-auto mb-6"></div>

                    <div className="flex flex-col gap-4">
                        {scholarCriteria.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white/40 border border-[#d4a898] border-l-4 border-l-[#cc3300] px-5 py-4 hover:shadow-md transition-shadow"
                            >
                                <h3 className="font-serif text-base font-semibold text-[#1a1a1a] mb-2">
                                    {item.title}
                                </h3>

                                <p className="text-[#5a4a42] text-sm leading-relaxed">
                                    {item.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Artist Criteria */}
            <section className="bg-[#ebd2c3] py-10 px-6">
                <div className="max-w-2xl mx-auto">
                    <p className="text-[11px] uppercase tracking-[0.14em] text-[#1a1a1a] text-center mb-3">
                        Criteria for election in the artist order
                    </p>

                    <div className="w-10 h-0.5 bg-[#cc3300] mx-auto mb-6"></div>

                    <div className="flex flex-col gap-4">
                        {artistCriteria.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white/40 border border-[#d4a898] border-l-4 border-l-[#cc3300] px-5 py-4 hover:shadow-md transition-shadow"
                            >
                                <h3 className="font-serif text-base font-semibold text-[#1a1a1a] mb-2">
                                    {item.title}
                                </h3>

                                <p className="text-[#5a4a42] text-sm leading-relaxed">
                                    {item.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Membership
