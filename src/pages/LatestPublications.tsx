import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import beautiful_minds from '../assets/articles/beautiful_minds.pdf'
import profound from '../assets/articles/profound.pdf'
import teaching_notes from '../assets/articles/teaching_notes.pdf'

const publications = [
    {
        title: 'Teaching notes on exploring the impact of AI on Supply Chain Management',
        date: '2026',
        authors: 'Dr. Dimitris Stamoulis',
        quotes: [
            '"Operations and supply chain management is a key element in the improvement in productivity in business around the world." — Jacobs et al., 2011',
            '"42% of firms adopting AI tools reported cost savings." — SCMR',
        ],
        excerpt: 'Supply Chain Management lays at the heart of every functioning business. The advent of digital technologies and especially big data and artificial intelligence have revolutionized the three main pillars of SCM: procurement, operations and logistics. This paper examines how AI is redefining procurement, transforming operations, and optimizing logistics — comprising a comprehensive set of teaching notes for those who choose to study and research this multi-disciplined topic that crosscuts business and technology sciences.',
        tags: ['Supply Chain Management', 'Operations', 'Logistics', 'Big Data', 'Artificial Intelligence', 'Procurement', 'Digital Value Creation'],
        link: teaching_notes,
    },
    {
        title: 'Profound, Deep, Extraordinary Minds: Vital Attributes of Human Knowledge',
        date: 'December 31, 2023',
        authors: 'Susie Michailidis & Paata Kervalishvili',
        quotes: [
            '"The Energy of Mind is the Essence of Life." — Aristotle',
            '"It is the Power of the Mind to be unconquerable." — Seneca',
        ],
        excerpt: 'Profound, Deep, Extraordinary Minds. But what do we mean by using these words? Depending on whom one asks, the question is either the most thoughtful question of human intellectual existence or else nothing more than a senseless appeal built on conceptual confusion.',
        tags: ['Mind', 'Knowledge', 'Philosophy'],
        link: profound,
    },
    {
        title: 'Beautiful Minds',
        date: 'October 29, 2022',
        authors: 'Susie Michailidis & Paata Kervalishvili',
        quotes: [
            '"Everything should be beautiful in a human being. Both the face and appearance, soul and thoughts." — A. Chekhov',
        ],
        excerpt: 'As serious societal trials of great consequence and complexity unfold, from the worldwide pandemic and uneven access to healthcare to global warming and forced migration, wars and the breakdown of democratic institutions, the arts, humanities and sciences within beautiful minds have a critical role to play, translating knowledge into solutions for social impacts.',
        tags: ['Arts', 'Humanities', 'Sciences', 'Mind'],
        link: beautiful_minds,
    },

]

function LatestPublications() {
    return (
        <div>

            {/* Page Hero */}
            <section className="bg-[#1b2a3b] py-20 px-6 text-center">
                <p className="text-[11px] uppercase tracking-[0.14em] text-[#c9a96e] mb-4">Nous Journal</p>
                <div className="w-10 h-0.5 bg-[#c9a96e] mx-auto mb-5"></div>
                <h1 className="font-serif text-4xl font-bold text-white mb-5">Latest Publications</h1>
                <p className="text-gray-400 text-base leading-relaxed max-w-xl mx-auto">
                    Academic articles and research publications from the Euro Mediterranean Academy of Arts and Sciences.
                </p>
            </section>

            {/* Publications */}
            <section className="bg-[#f8f6f1] py-20 px-6">
                <div className="max-w-4xl mx-auto flex flex-col gap-8">
                    {publications.map((pub, index) => (
                        <div key={index} className="bg-white border border-gray-200 border-l-4 border-l-[#c9a96e] p-8 hover:shadow-md transition-shadow">

                            <p className="text-[11px] uppercase tracking-wider text-gray-400 mb-2">{pub.date}</p>
                            <h3 className="font-serif text-2xl font-semibold text-[#1b2a3b] mb-2">{pub.title}</h3>
                            <p className="text-[11px] uppercase tracking-wider text-[#8b5e3c] mb-6">{pub.authors}</p>

                            {/* Quotes */}
                            <div className="flex flex-col gap-3 mb-6">
                                {pub.quotes.map((quote, i) => (
                                    <p key={i} className="font-serif text-base text-gray-400 italic border-l-2 border-[#c9a96e] pl-4">
                                        {quote}
                                    </p>
                                ))}
                            </div>

                            <p className="text-gray-500 text-sm leading-relaxed mb-6">{pub.excerpt}</p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mb-6">
                                {pub.tags.map((tag, i) => (
                                    <span key={i} className="bg-[#f8f6f1] border border-gray-200 text-[#5a5248] text-[10px] uppercase tracking-wider px-3 py-1">
                    {tag}
                  </span>
                                ))}
                            </div>

                        <a
                            href={pub.link}
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
            </section>

        </div>
    )
}

export default LatestPublications