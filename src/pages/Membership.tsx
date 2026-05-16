import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap, faBookOpen, faFileLines, faPalette, faBuilding, faMusic, faPenNib, faEnvelope } from '@fortawesome/free-solid-svg-icons'

const scholarCriteria = [
    { icon: faGraduationCap, title: 'Full Professor Status', text: 'Provided by the university procedure of nomination.' },
    { icon: faBookOpen, title: 'PhD or Equivalent', text: 'A doctoral degree or equivalent qualification is required.' },
    { icon: faFileLines, title: '100+ Publications', text: 'About 100 articles, book chapters, or equivalent.' },
]

const artistCriteria = [
    { icon: faPalette, title: 'Visual Arts', text: 'Art academy degree, solo exhibitions in well-known public museums in different countries, at best one published monograph about their work.' },
    { icon: faBuilding, title: 'Architecture', text: 'University degree, published monographs, public buildings in different countries, and architectural prize(s).' },
    { icon: faMusic, title: 'Music', text: 'Music academy degree, performances at concerts in famous places in different countries, at best one national musical distinction.' },
    { icon: faPenNib, title: 'Literature & Writing', text: 'University/academic degree, national literary prize(s) and books translated in other languages.' },
]

function Membership() {
    return (
        <div>

            {/* Page Hero */}
            <section className="bg-[#ebd2c3] py-20 px-6 text-center">
                <p className="text-[11px] uppercase tracking-[0.14em] text-[#1a1a1a] mb-4">Members</p>
                <div className="w-10 h-0.5 bg-[#cc3300] mx-auto mb-5"></div>
                <h1 className="font-serif text-4xl font-bold text-[#1a1a1a] mb-5">Membership</h1>
                <p className="text-[#5a4a42] text-base leading-relaxed max-w-xl mx-auto">
                    EMAAS nominates scientists, scholars and experts of international distinction who have exceptional standing in society as a result of their accomplishments and publications.
                </p>
            </section>

            {/* General Requirements */}
            <section className="bg-[#ebd2c3] py-10 px-6">
                <div className="max-w-3xl mx-auto">
                    <p className="text-[11px] uppercase tracking-[0.14em] text-[#cc3300] text-center mb-3">General Requirements</p>
                    <div className="w-10 h-0.5 bg-[#cc3300] mx-auto mb-10"></div>
                    <div className="bg-white/40 border border-[#d4a898] border-l-4 border-l-[#cc3300] p-8 mb-6">
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
            <section className="bg-[#d9b8a7] py-20 px-6">
                <div className="max-w-5xl mx-auto">
                    <p className="text-[11px] uppercase tracking-[0.14em] text-[#cc3300] text-center mb-3">Criteria for election in scientific & scholarly order</p>
                    <div className="w-10 h-0.5 bg-[#cc3300] mx-auto mb-10"></div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        {scholarCriteria.map((item, index) => (
                            <div key={index} className="bg-white/50 border border-[#d4a898] border-t-4 border-t-[#cc3300] p-8 hover:shadow-md transition-shadow">
                                <div className="w-11 h-11 bg-[#cc3300] flex items-center justify-center mb-5">
                                    <FontAwesomeIcon icon={item.icon} className="text-white text-lg" />
                                </div>
                                <h3 className="font-serif text-lg font-semibold text-[#1a1a1a] mb-3">{item.title}</h3>
                                <p className="text-[#5a4a42] text-sm leading-relaxed">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Artist Criteria */}
            <section className="bg-[#ebd2c3] py-20 px-6">
                <div className="max-w-5xl mx-auto">
                    <p className="text-[11px] uppercase tracking-[0.14em] text-[#cc3300] text-center mb-3">Criteria for election in the artist order</p>
                    <div className="w-10 h-0.5 bg-[#cc3300] mx-auto mb-10"></div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {artistCriteria.map((item, index) => (
                            <div key={index} className="bg-white/40 border border-[#d4a898] border-t-4 border-t-[#cc3300] p-8 hover:shadow-md transition-shadow">
                                <div className="w-11 h-11 bg-[#cc3300] flex items-center justify-center mb-5">
                                    <FontAwesomeIcon icon={item.icon} className="text-white text-lg" />
                                </div>
                                <h3 className="font-serif text-lg font-semibold text-[#1a1a1a] mb-3">{item.title}</h3>
                                <p className="text-[#5a4a42] text-sm leading-relaxed">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-[#ebd2c3] py-20 px-6 text-center">
                <div className="max-w-2xl mx-auto">
                    <h2 className="font-serif text-3xl font-bold text-[#1a1a1a] mb-5">
                        Ready to Apply?
                    </h2>

                    <p className="text-[#5a4a42] text-base leading-relaxed mb-8">
                        Send your application documents to the President of the Academy.
                    </p>

                    <a
                        href="mailto:kervalpt@yahoo.com"
                        className="inline-flex items-center gap-3 bg-[#cc3300] text-white text-[14px] tracking-wider px-8 py-4 font-semibold hover:bg-[#a82800] transition-colors"
                    >
                        <FontAwesomeIcon icon={faEnvelope} />
                        kervalpt@yahoo.com
                    </a>
                </div>
            </section>

</div>
)
}

export default Membership