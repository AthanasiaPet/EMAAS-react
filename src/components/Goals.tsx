import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFlask, faEarthEurope, faBolt, faLightbulb } from '@fortawesome/free-solid-svg-icons'

const goals = [
    {
        icon: faFlask,
        title: 'Scientific Research',
        text: 'Advancement of academic and intellectual activities across disciplines.',
    },
    {
        icon: faEarthEurope,
        title: 'Mediterranean Development',
        text: 'Elaborating concepts and projects for sustainable development of Mediterranean countries.',
    },
    {
        icon: faBolt,
        title: 'Renewable Energy',
        text: 'Promoting renewable energy technologies across the Euro Mediterranean Area.',
    },
    {
        icon: faLightbulb,
        title: 'Innovation',
        text: 'Scientific-technological innovation activity and knowledge dissemination.',
    },
]

function Goals() {
    return (
        <section className="bg-white px-6 py-24">
            <div className="max-w-6xl mx-auto">

                {/* Section header */}
                <div className="text-center mb-14">
                    <p className="text-[11px] uppercase tracking-[0.14em] text-[#a0522d] mb-4">Goals & Objectives</p>
                    <div className="w-12 h-0.5 bg-[#f6ac3d] mx-auto mb-6"></div>
                    <h2 className="font-serif text-3xl md:text-4xl font-semibold text-[#8b4513]">
                        What We Work Towards
                    </h2>
                </div>

                {/* Cards grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {goals.map((goal, index) => (
                        <div key={index} className="border border-gray-200 bg-white p-8 hover:shadow-md transition-shadow">
                            <div className="w-11 h-11 bg-[#8b4513] flex items-center justify-center mb-5">
                                <FontAwesomeIcon icon={goal.icon} className="text-[#f6ac3d] text-lg" />
                            </div>
                            <h3 className="font-serif text-lg font-semibold text-[#8b4513] mb-3">{goal.title}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">{goal.text}</p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default Goals