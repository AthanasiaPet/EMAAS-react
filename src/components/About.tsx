import { Link } from 'react-router-dom'

const goals = [
    {
        title: 'Scientific Research',
        text: 'Advancement of academic and intellectual activities across disciplines.',
    },
    {
        title: 'Mediterranean Development',
        text: 'Elaborating concepts and projects for sustainable development of Mediterranean countries.',
    },
    {
        title: 'Renewable Energy',
        text: 'Promoting renewable energy technologies across the Euro Mediterranean Area.',
    },
    {
        title: 'Innovation',
        text: 'Scientific-technological innovation activity and knowledge dissemination.',
    },
]

function About() {
    return (
        <section id="about" className="bg-[#ebd2c3] px-6 py-24">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                {/* Left side - About EMAAS */}
                <div>
                    <p className="text-[11px] uppercase tracking-[0.14em] text-[#1a1a1a] mb-4">
                        About EMAAS
                    </p>

                    <div className="w-12 h-0.5 bg-[#cc3300] mb-6"></div>

                    <h2 className="font-serif text-3xl md:text-4xl font-semibold text-[#1a1a1a] leading-snug mb-6">
                        A Premier International Academy Setting the Standard for Global Knowledge
                    </h2>

                    <p className="text-[#1a1a1a] text-base leading-relaxed mb-5">
                        The Euro Mediterranean Academy of Arts and Sciences was established by twenty-two internationally recognized scientists and artists, headquartered in the historical city of Sparta, Greece, with a branch office in Lausanne, Switzerland.
                    </p>

                    <p className="text-[#1a1a1a] text-base leading-relaxed mb-8">
                        EMAAS builds an action-oriented global network of scholars who forge powerful bonds with each other and with their communities around the globe, embracing all human differences while building upon our commonalities.
                    </p>

                    <div className="flex gap-2 flex-wrap">
                        <Link
                            to="/history"
                            className="bg-[#cc3300] text-white text-[11px] uppercase tracking-wider px-7 py-3 hover:bg-[#a82800] transition-colors"
                        >
                            Learn Our History
                        </Link>

                        <Link
                            to="/membership"
                            className="bg-[#cc3300] text-white text-[11px] uppercase tracking-wider px-7 py-3 hover:bg-[#a82800] transition-colors"
                        >
                            Membership
                        </Link>
                    </div>
                </div>

                {/* Right side - Goals & Objectives */}

                <div>
                    <div className="mb-8">
                        <p className="text-[11px] uppercase tracking-[0.14em] text-[#1a1a1a] mb-5">
                            Goals & Objectives
                        </p>

                        <div className="w-12 h-0.5 bg-[#cc3300] mb-6"></div>

                        <h2 className="font-serif text-3xl md:text-4xl font-semibold text-[#1a1a1a] mb-6">
                            What We Work Towards
                        </h2>
                    </div>

                    <div className="flex flex-col gap-5">
                        {goals.map((goal, index) => (
                            <div
                                key={index}
                                className="bg-white/20 border border-[#d4a898] border-l-4 border-l-[#cc3300] p-3 hover:shadow-md transition-shadow"
                            >
                                <h3 className="font-serif text-lg font-semibold text-[#1a1a1a] mb-1">
                                    {goal.title}
                                </h3>

                                <p className="text-[#1a1a1a] text-sm leading-relaxed">
                                    {goal.text}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>

            </div>
        </section>
    )
}

export default About