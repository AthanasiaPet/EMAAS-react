import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap, faFileLines, faFlask, faEnvelope } from '@fortawesome/free-solid-svg-icons'

const requirements = [
    {
        icon: faGraduationCap,
        title: 'University PhD Degree',
        text: 'Applicants must hold a university PhD degree in their respective field of science.',
    },
    {
        icon: faFileLines,
        title: '100+ Scientific Publications',
        text: 'A minimum of one hundred scientific publications is required to qualify for the Grand PhD.',
    },
    {
        icon: faFlask,
        title: 'Research Contributions',
        text: 'Must have conducted research and contributed to solving scientific problems in their specific area.',
    },
    {
        icon: faGraduationCap,
        title: 'PhD Supervision',
        text: 'Applicants must have supervised PhD students throughout their academic career.',
    },
]

function GrandPhd() {
    return (
        <div>

            {/* Page Hero */}
            <section className="bg-[#ebd2c3] py-15 px-6 text-center">
                <p className="text-[11px] uppercase tracking-[0.14em] text-[#1a1a1a] mb-4">Research</p>
                <div className="w-10 h-0.5 bg-[#cc3300] mx-auto mb-5"></div>
                <h1 className="font-serif text-4xl font-bold text-[#1a1a1a] mb-5">Grand PhD</h1>
                <p className="text-[#5a4a42] text-base leading-relaxed max-w-xl mx-auto">
                    A distinguished doctoral recognition awarded by EMAAS to highly recognized scientists who have made exceptional contributions to their field.
                </p>
            </section>

            {/* About */}
            <section className="bg-[#ebd2c3] py-15 px-6">
                <div className="max-w-3xl mx-auto text-center">
                    <p className="text-[11px] uppercase tracking-[0.14em] text-[#1a1a1a] mb-3">About the Degree</p>
                    <div className="w-10 h-0.5 bg-[#cc3300] mx-auto mb-8"></div>
                    <p className="text-[#5a4a42] text-base leading-relaxed">
                        Highly recognized scientists may apply to EMAAS for the Grand PhD degree. This prestigious recognition is awarded to scientists who have demonstrated exceptional research contributions, scientific leadership, and academic excellence throughout their careers.
                    </p>
                </div>
            </section>

            {/* Requirements */}
            <section className="bg-[#d9b8a7] py-15 px-6">
                <div className="max-w-5xl mx-auto">
                    <p className="text-[11px] uppercase tracking-[0.14em] text-[#cc3300] text-center mb-3">Eligibility Requirements</p>
                    <div className="w-10 h-0.5 bg-[#cc3300] mx-auto mb-10"></div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {requirements.map((req, index) => (
                            <div key={index} className="bg-white/40 border border-[#d4a898] border-l-4 border-l-[#cc3300] p-8 hover:shadow-md transition-shadow">
                                <div className="w-11 h-11 bg-[#cc3300] flex items-center justify-center mb-5">
                                    <FontAwesomeIcon icon={req.icon} className="text-white text-lg" />
                                </div>
                                <h3 className="font-serif text-lg font-semibold text-[#1a1a1a] mb-3">{req.title}</h3>
                                <p className="text-[#5a4a42] text-sm leading-relaxed">{req.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How to Apply */}
            <section className="bg-[#ebd2c3] py-15 px-6">
                <div className="max-w-3xl mx-auto">
                    <p className="text-[11px] uppercase tracking-[0.14em] text-[#cc3300] text-center mb-3">How to Apply</p>
                    <div className="w-10 h-0.5 bg-[#cc3300] mx-auto mb-10"></div>
                    <div className="bg-white/40 border border-[#d4a898] border-l-4 border-l-[#cc3300] p-8 mb-8">
                        <p className="text-[#5a4a42] text-base leading-relaxed mb-4">
                            Your application must include the following documents sent as electronic files:
                        </p>
                        <ul className="flex flex-col gap-3">
                            {[
                                'Curriculum Vitae (CV)',
                                'Memorandum on scientific research activities and contributions',
                                'Memorandum on contributions in solving scientific problems',
                                'Complete list of publications',
                            ].map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#cc3300] mt-2 shrink-0"></div>
                                    <span className="text-[#5a4a42] text-sm">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/*/!* Fee *!/*/}
                    {/*<div className="bg-[#8b4513] p-8 mb-8 text-center">*/}
                    {/*    <p className="text-[11px] uppercase tracking-wider text-[#f6ac3d] mb-2">Administrative Fee</p>*/}
                    {/*    <p className="font-serif text-4xl font-bold text-white mb-2">€500</p>*/}
                    {/*    <p className="text-gray-400 text-sm">Covers all administrative and paperwork expenses</p>*/}
                    {/*</div>*/}

                    {/* Contact */}
                    <div className="text-center">
                        <p className="text-[#5a4a42] text-sm leading-relaxed mb-6">
                            Send all documents and inquiries directly to the President of the Academy:
                        </p>

                        <a
                        href="mailto:kervalpt@yahoo.com"
                        className="inline-flex items-center gap-3 bg-[#cc3300] text-white text-[14px] tracking-wider px-8 py-4 hover:bg-[#a82800] transition-colors"
                        >
                        <FontAwesomeIcon icon={faEnvelope} />
                        kervalpt@yahoo.com
                        </a>
                    </div>

                 </div>
             </section>
        </div>
)
}

export default GrandPhd