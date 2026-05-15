import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faLocationDot  } from '@fortawesome/free-solid-svg-icons'

const projects = [
    {
        title: 'Secretary of the EMAAS Presidium, Professor Dr. Athanasios Sarantopoulos, attended the "1st World Conference on \'Smart\' Islands".',
        date: 'September 4-5, 2024',
        location: 'Pserimos Island, Greece',
        excerpt: [
            '\n' +
            'The “1st World Conference on ‘Smart’ Islands” took place on the island of Pserimos, Greece on September 4th and 5th, 2024. The event was co-organized by the International Hellenic Association (IHA), the municipalities of Vari/Voula/Vouliagmeni, Kalymnos, and Kifissia, with the Central Union of Municipalities of Greece (KEDE) placing it under its auspices.',
            ' The conference aimed to continue the EU’s 2018 initiative to transform Greek islands into “smart” islands, focusing on sustainable energy, tourism, and local development. It featured panels and sessions with notable speakers, including government officials, mayors, and academics, discussing topics such as renewable energy, digital services, and island governance. The event was attended both physically and virtually, with online broadcasting via various platforms.',
            ' Professor Dr. Athanasios Sarantopoulos of the Business and Technology Department at Webster University Athens, who serves as Secretary of the Presidium of the Euro–Mediterranean Academy of Arts and Sciences and is a member of the Executive Council of the International Hellenic Association participated in the conference. During the event, he chaired sessions focused on “Education and Medical Care” and “Water Shortage in the Greek Islands.”\n' +
            '\n"',
            ' The International Hellenic Association played a crucial role in the renovation and preparation of the school on the island of Pserimos, enabling its reopening after 14 years of closure. The school, which had been shut down since 2009, was officially reopened on September 3, 2023, marking a significant milestone in the efforts to revitalize the island. The renovation was a collaborative effort involving the International Hellenic Association, the Municipality of Kalymnos, various government offices, and the Citizen Association of Pserimos.\n' +
            '\n',
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
        title: '3rd International Forum on Water',
        date: 'May 16-17, 2024',
        location: 'Athens, Greece',
        excerpt: ' Epidemics, the manifestations of climate change, forced migration, wars and the collapse of democratic institutions are major social challenges of the 21st century.',
        tags: ['Forum', 'Water', 'Climate Change'],
    },
    {
        title: '2nd International Forum on Water',
        date: 'September 22-23, 2021',
        location: 'Heraklion, Crete',
        excerpt: 'An important meeting for the global community on the impact of unsafe water on human health and water quality in general.',
        tags: ['Forum', 'Water', 'Health'],
    },
    {
        title: '1st International Forum on Water',
        date: 'December 10-11, 2019',
        location: 'Athens, Greece',
        excerpt: 'A pioneering initiative to raise awareness about water quality in relation to prevention and health. With speakers from various fields including science, technology, politics and industry, the forum highlighted the multi-dimensional aspects of water management. Discussions focused on issues such as climate change, water pollution, technological innovation and the need for cooperation between different agencies.',
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
        excerpt: 'The Conference for International Synergy in Energy, Environment, Tourism and contribution of Information Technology in Science, Economy, Society and Education. Symposium: Digital Cities. Hosted by T.E.I of Piraeus. NEW AMPHITHEATRE OF T.E.I PIRAEUS\n' +
            '\n',
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
        excerpt: '\n' +
            'An International Conference was co-organized by EMAAS, the International foundation for Sustainable Development, and the Shota Rustaveli State University of Batumi in Batumi/ Georgia from 7 to 9 May 2010. Several of our members, as well as more than 250 scientists presented papers. Moreover, an agreement of cooperation of EMAAS with the International Foundation for Sustainable Development was signed and a meeting of the Board took place.',
        tags: ['Conference', 'Sustainable Development'],
    },
]

function Projects() {
    return (
        <div>

            {/* Page Hero */}
            <section className="bg-[#8b4513] py-20 px-6 text-center">
                <p className="text-[11px] uppercase tracking-[0.14em] text-[#f6ac3d] mb-4">Activities</p>
                <div className="w-10 h-0.5 bg-[#f6ac3d] mx-auto mb-5"></div>
                <h1 className="font-serif text-4xl font-bold text-white mb-5">Projects & Events</h1>
                <p className="text-white text-base leading-relaxed max-w-xl mx-auto">
                    A record of EMAAS conferences, forums, and international collaborations advancing science and sustainability across the Euro-Mediterranean region.
                </p>
            </section>

            {/* Projects List */}
            <section className="bg-[#f8f6f1] py-20 px-6">
                <div className="max-w-4xl mx-auto flex flex-col gap-6">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-white border border-gray-200 border-l-4 border-l-[#f6ac3d] p-8 hover:shadow-md transition-shadow">
                            <div className="flex flex-wrap gap-4 mb-3 text-[11px] text-gray-400 uppercase tracking-wider">
                <span className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faCalendar} className="text-[#f6ac3d]" />
                    {project.date}
                </span>
                                <span className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faLocationDot} className="text-[#f6ac3d]" />
                                    {project.location}
                </span>
                            </div>
                            <h3 className="font-serif text-xl font-semibold text-[#8b4513] mb-3">{project.title}</h3>
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