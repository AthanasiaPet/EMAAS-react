import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

const articles = [
    {
        title: 'About Nous',
        date: 'November 8, 2025',
        authors: 'EMAAS Presidium',
        excerpt: 'The inspiration, arguments and insightful ideas of The EMAAS President P. Kervalishvili, Presidium and members of the EMAAS bringing Journal "Nous" into life.',
        tags: ['Greek Philosophy', 'Nous', 'Plato', 'Timaeus'],
        link: 'https://www.euromediterraneanacademy.org/about-nous/',
    },
    {
        title: 'Profound, Deep, Extraordinary Minds: Vital Attributes of Human Knowledge',
        date: 'December 31, 2023',
        authors: 'Susie Michailidis & Paata Kervalishvili',
        excerpt: 'Profound, Deep, Extraordinary Minds. But what do we mean by using these words? Depending on whom one asks, the question is either the most thoughtful question of human intellectual existence...',
        tags: ['Mind', 'Knowledge', 'Philosophy'],
        link: '/articles/MI23F.pdf'
    },
    {
        title: 'Beautiful Minds',
        date: 'October 29, 2022',
        authors: 'Susie Michailidis & Paata Kervalishvili',
        excerpt: 'As serious societal trials of great consequence and complexity unfold, the arts, humanities and sciences within beautiful minds have a critical role to play.',
        tags: ['Arts', 'Humanities', 'Sciences'],
        link: '/articles/N14MI21A.pdf',
    },
]

function Nous() {
    return (
        <div>

            {/* Page Hero */}
            <section className="bg-[#1b2a3b] py-20 px-6 text-center">
                <p className="text-[11px] uppercase tracking-[0.14em] text-[#c9a96e] mb-4">Scientific Journal</p>
                <div className="w-10 h-0.5 bg-[#c9a96e] mx-auto mb-5"></div>
                <h1 className="font-serif text-4xl font-bold text-white mb-5">Nous</h1>
                <p className="text-gray-400 text-base leading-relaxed max-w-xl mx-auto">
                    In Greek Philosophy, Nous means mind or intellect — the first and purest emanation of the One, regarded as the self-contemplating order of the universe.
                </p>
            </section>

            {/* About Nous */}
            <section className="bg-white py-20 px-6">
                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div>
                        <p className="text-[11px] uppercase tracking-[0.14em] text-[#8b5e3c] mb-3">About the Journal</p>
                        <div className="w-10 h-0.5 bg-[#c9a96e] mb-6"></div>
                        <h2 className="font-serif text-3xl font-semibold text-[#1b2a3b] leading-snug mb-6">
                            A Journal of Research & Academic Innovation
                        </h2>
                        <p className="text-gray-500 text-base leading-relaxed mb-4">
                            Nous is a scientific journal dedicated to research, innovations, and academic activities. It serves as a guide to systematic work demonstrating achievements in respected fields of research.
                        </p>
                        <p className="text-gray-500 text-base leading-relaxed">
                            Publications in Nous are articulated to help readers appreciate and understand major theories and methods of investigation across the Euro-Mediterranean academic community.
                        </p>
                    </div>
                    <div className="bg-[#f8f6f1] border border-gray-200 p-10 text-center">
                        <div className="w-16 h-16 bg-[#1b2a3b] flex items-center justify-center mx-auto mb-6">
                            <FontAwesomeIcon icon={faBookOpen} className="text-[#c9a96e] text-2xl" />
                        </div>
                        <h3 className="font-serif text-xl font-semibold text-[#1b2a3b] mb-3">Nous Journal</h3>
                        <p className="text-gray-500 text-sm leading-relaxed mb-2">Published by</p>
                        <p className="font-serif text-base text-[#1b2a3b] font-semibold">Euro Mediterranean Academy of Arts and Sciences</p>
                    </div>
                </div>
            </section>

            {/* Articles */}
            <section className="bg-[#f8f6f1] py-20 px-6">
                <div className="max-w-4xl mx-auto">
                    <p className="text-[11px] uppercase tracking-[0.14em] text-[#8b5e3c] text-center mb-3">Publications</p>
                    <div className="w-10 h-0.5 bg-[#c9a96e] mx-auto mb-10"></div>

                    <div className="flex flex-col gap-6">
                        {articles.map((article, index) => (
                            <div key={index} className="bg-white border border-gray-200 border-l-4 border-l-[#c9a96e] p-8 hover:shadow-md transition-shadow">
                                <div className="flex items-start justify-between gap-4 flex-wrap">
                                    <div className="flex-1">
                                        <p className="text-[11px] uppercase tracking-wider text-gray-400 mb-2">{article.date}</p>
                                        <h3 className="font-serif text-xl font-semibold text-[#1b2a3b] mb-2">{article.title}</h3>
                                        <p className="text-[11px] uppercase tracking-wider text-[#8b5e3c] mb-4">{article.authors}</p>
                                        <p className="text-gray-500 text-sm leading-relaxed mb-5">{article.excerpt}</p>
                                        <div className="flex flex-wrap gap-2 mb-5">
                                            {article.tags.map((tag, i) => (
                                                <span key={i} className="bg-[#f8f6f1] border border-gray-200 text-[#5a5248] text-[10px] uppercase tracking-wider px-3 py-1">
                                            {tag}
                                        </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            <a
                                href={article.link}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 bg-[#1b2a3b] text-[#c9a96e] text-[11px] uppercase tracking-wider px-6 py-3 hover:bg-[#2c4a6e] transition-colors"
                                >
                                Read Article
                                <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-[10px]" />
                            </a>
                            </div>
                            ))}
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Nous