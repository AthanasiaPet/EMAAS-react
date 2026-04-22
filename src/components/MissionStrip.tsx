const values = [
    'Innovation Through Research',
    'Scientific Excellence',
    'Diversity & Inclusion',
    'Sustainable Development',
]

function MissionStrip() {
    return (
        <section className="bg-[#152233] py-5 px-6">
            <div className="max-w-6xl mx-auto flex items-center justify-center flex-wrap gap-6">
                {values.map((value, index) => (
                    <div key={index} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#c9a96e]"></div>
                        <span className="text-[11px] uppercase tracking-[0.1em] text-gray-400">{value}</span>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default MissionStrip