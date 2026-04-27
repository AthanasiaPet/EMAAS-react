import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faLocationDot  } from '@fortawesome/free-solid-svg-icons'

const projects = [
    {
        title: '1st World Conference on Smart Islands',
        date: 'September 4-5, 2024',
        location: 'Pserimos Island, Greece',
        excerpt: [
            'Secretary of the EMAAS Presidium, Professor Dr. Athanasios Sarantopoulos, attended the conference co-organized by the International Hellenic Association (IHA), the municipalities of Vari/Voula/Vouliagmeni, Kalymnos, and Kifissia, with the Central Union of Municipalities of Greece (KEDE) placing it under its auspices.',
            ' The conference aimed to continue the EU\'s 2018 initiative to transform Greek islands into "smart" islands, focusing on sustainable energy, tourism, and local development. It featured panels and sessions with notable speakers, including government officials, mayors, and academics.',
            ' Professor Dr. Athanasios Sarantopoulos chaired sessions focused on "Education and Medical Care" and "Water Shortage in the Greek Islands."',
            ' The International Hellenic Association played a crucial role in the renovation and preparation of the school on the island of Pserimos, enabling its reopening after 14 years of closure.',
        ],
        tags: ['Conference', 'Smart Islands', 'Sustainability'],
    },
    {
        title: 'EMAAS-WEBSTER Partnership',
        date: 'July 2024',
        location: 'Athens, Greece',
        excerpt: 'EMAAS and Webster University partnership offering scholars opportunities to participate in conferences, forums and research projects, creating added value for global society.',
        tags: ['Partnership', 'Education', 'Research'],
    },
    {
        title: 'International Forum on Water — 3rd Edition',
        date: 'May 16-17, 2024',
        location: 'Athens, Greece',
        excerpt: 'The 3rd International Forum on Water addressed epidemics, climate change, forced migration, and the collapse of democratic institutions as major social challenges of the 21st century.',
        tags: ['Forum', 'Water', 'Climate Change'],
    },
    {
        title: 'International Forum on Water — 2nd Edition',
        date: 'September 22-23, 2021',
        location: 'Heraklion, Crete',
        excerpt: 'An important meeting for the global community on the impact of unsafe water on human health and water quality in general.',
        tags: ['Forum', 'Water', 'Health'],
    },
    {
        title: 'International Forum on Water — 1st Edition',
        date: 'December 10-11, 2019',
        location: 'Athens, Greece',
        excerpt: 'A pioneering initiative to raise awareness about water quality in relation to prevention and health, with speakers from various fields including science, technology, politics and industry, the forum highlighted the multi-dimensional aspects of water management. Discussions focused on issues such as climate change, water pollution, technological innovation and the need for cooperation between different agencies.',
        tags: ['Forum', 'Water', 'Innovation'],
    },
    {
        title: 'NATO ARW Conference — Information, Sustainability and Security',
        date: 'April 20-24, 2011',
        location: 'Tbilisi, Georgia',
        excerpt: 'EMAAS co-organized with Georgia Technical University the NATO Advanced Research Workshop on Information, Sustainability and Security.',
        tags: ['NATO', 'Conference', 'Security'],
    },
    {
        title: 'International Scientific Conference, e-RA — 6 — The SynEnergy Forum',
        date: 'September 19-24, 2011',
        location: 'Piraeus, Greece',
        excerpt: 'The Conference for International Synergy in Energy, Environment, Tourism and contribution of Information Technology in Science, Economy, Society and Education. Hosted by T.E.I of Piraeus.',
        tags: ['Conference', 'Energy', 'Technology'],
    },
    {
        title: 'International Scientific Conference, e-RA — 5 — The SynEnergy Forum',
        date: 'September 15-18, 2010',
        location: 'Piraeus, Greece',
        excerpt: 'International Scientific Conference for International Synergy in Energy, Environment, Tourism and contribution of Information Technology in Science, Economy, Society and Education. Hosted by T.E.I of Piraeus.',
        tags: ['Conference', 'Energy', 'Technology'],
    },
    {
        title: 'International Scientific Conference on Sustainable Development: Information, Computation and Nature',
        date: 'May 7-9, 2010',
        location: 'Batumi, Georgia',
        excerpt: 'Co-organized by EMAAS, the International Foundation for Sustainable Development, and the Shota Rustaveli State University of Batumi. Over 250 scientists presented papers.  Moreover, an agreement of cooperation of EMAAS with the International Foundation for Sustainable Development was signed and a meeting of the Board took place.',
        tags: ['Conference', 'Sustainable Development'],
    },
]

function Projects() {
    return (
        <div>

            {/* Page Hero */}
            <section className="bg-[#1b2a3b] py-20 px-6 text-center">
                <p className="text-[11px] uppercase tracking-[0.14em] text-[#c9a96e] mb-4">Activities</p>
                <div className="w-10 h-0.5 bg-[#c9a96e] mx-auto mb-5"></div>
                <h1 className="font-serif text-4xl font-bold text-white mb-5">Projects & Events</h1>
                <p className="text-gray-400 text-base leading-relaxed max-w-xl mx-auto">
                    A record of EMAAS conferences, forums, and international collaborations advancing science and sustainability across the Euro-Mediterranean region.
                </p>
            </section>

            {/* Projects List */}
            <section className="bg-[#f8f6f1] py-20 px-6">
                <div className="max-w-4xl mx-auto flex flex-col gap-6">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-white border border-gray-200 border-l-4 border-l-[#c9a96e] p-8 hover:shadow-md transition-shadow">
                            <div className="flex flex-wrap gap-4 mb-3 text-[11px] text-gray-400 uppercase tracking-wider">
                <span className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faCalendar} className="text-[#c9a96e]" />
                    {project.date}
                </span>
                                <span className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faLocationDot} className="text-[#c9a96e]" />
                                    {project.location}
                </span>
                            </div>
                            <h3 className="font-serif text-xl font-semibold text-[#1b2a3b] mb-3">{project.title}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed mb-5">{project.excerpt}</p>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag, i) => (
                                    <span key={i} className="bg-[#f8f6f1] border border-gray-200 text-[#5a5248] text-[10px] uppercase tracking-wider px-3 py-1">
                    {tag}
                  </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

        </div>
    )
}

export default Projects