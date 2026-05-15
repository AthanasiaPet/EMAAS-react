import { Link } from 'react-router-dom'

const cards = [
    {
        title: 'Our Mission',
        text: 'Ensuring a high-quality research experience by ballot-selected academicians that transform sciences for global and individual excellence.',
    },
    {
        title: 'Our Vision',
        text: 'To be a premier international intercontinental Academy setting a distinct standard for global knowledge and academic excellence.',
    },
    {
        title: 'Grand PhD Program',
        text: 'A distinctive doctoral program designed for experienced professionals and scientists pursuing global academic recognition.',
    },
]

function About() {
    return (
        <section id="about" className="bg-[#f8f6f1] px-6 py-24">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-start">

                {/* Left side - Text */}
                <div>
                    <p className="text-[11px] uppercase tracking-[0.14em] text-[#a0522d] mb-4">About EMAAS</p>
                    <div className="w-12 h-0.5 bg-[#f6ac3d] mb-6"></div>
                    <h2 className="font-serif text-3xl md:text-4xl font-semibold text-[#8b4513] leading-snug mb-6">
                        A Premier International Academy Setting the Standard for Global Knowledge
                    </h2>
                    <p className="text-gray-500 text-base leading-relaxed mb-5">
                        The Euro Mediterranean Academy of Arts and Sciences was established by twenty-two internationally recognized scientists and artists, headquartered in the historical city of Sparta, Greece, with a branch office in Lausanne, Switzerland.
                    </p>
                    <p className="text-gray-500 text-base leading-relaxed mb-8">
                        EMAAS builds an action-oriented global network of scholars who forge powerful bonds with each other and with their communities around the globe, embracing all human differences while building upon our commonalities.
                    </p>
                    <Link
                        to="/history"
                        className="bg-[#8b4513] text-[#f6ac3d] text-[11px] uppercase tracking-wider px-7 py-3 hover:bg-[#73390f] transition-colors"
                    >
                        Learn Our History
                    </Link>
                </div>

                {/* Right side - Cards */}
                <div className="flex flex-col gap-5">
                    {cards.map((card, index) => (
                        <div key={index} className="bg-white border border-gray-200 border-l-4 border-l-[#f6ac3d] p-7 hover:shadow-md transition-shadow">
                            <h3 className="font-serif text-lg font-semibold text-[#8b4513] mb-3">{card.title}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">{card.text}</p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default About