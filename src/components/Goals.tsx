

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

function Goals() {
    return (
        <section className="bg-[#ebd2c3] px-6 py-6">
            <div className="max-w-6xl mx-auto">

                {/* Section header */}
                <div className="text-center mb-14">
                    <p className="text-[11px] uppercase tracking-[0.14em] text-[#1a1a1a] mb-4">Goals & Objectives</p>
                    <div className="w-12 h-0.5 bg-[#cc3300] mx-auto mb-6"></div>
                    <h2 className="font-serif text-3xl md:text-4xl font-semibold text-[#1a1a1a]">
                        What We Work Towards
                    </h2>
                </div>

                {/* Cards grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {goals.map((goal, index) => (
                        <div key={index} className="border border-[#d4a898] bg-white/20 p-8 hover:shadow-md transition-shadow">
                            <h3 className="font-serif text-lg font-semibold text-[#1a1a1a] mb-3">{goal.title}</h3>
                            <p className="text-[#1a1a1a] text-sm leading-relaxed">{goal.text}</p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default Goals