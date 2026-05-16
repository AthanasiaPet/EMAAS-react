const values = [
    'Innovation Through Research',
    'Scientific Excellence',
    'Diversity & Inclusion',
    'Sustainable Development',
]

function MissionStrip() {
    return (
        <section className="bg-[#d9b8a7] py-5 px-6">
            <div className="max-w-6xl mx-auto flex items-center justify-center flex-wrap gap-6">
                {values.map((value, index) => (
                    <div key={index} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#cc3300]"></div>
                        <span className="text-[11px] uppercase tracking-[0.1em]  text-[#1a1a1a]">{value}</span>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default MissionStrip