function News() {
    return (
        <div>
            <section className="bg-[#8b4513] py-20 px-6 text-center">
                <p className="text-[11px] uppercase tracking-[0.14em] text-[#f6ac3d] mb-4">Activities</p>
                <div className="w-10 h-0.5 bg-[#f6ac3d] mx-auto mb-5"></div>
                <h1 className="font-serif text-4xl font-bold text-white mb-5">News</h1>
                <p className="text-white text-base leading-relaxed max-w-xl mx-auto">
                    Announcements and updates from the Euro Mediterranean Academy of Arts and Sciences.
                </p>
            </section>
            <section className="bg-[#f8f6f1] min-h-screen py-20 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <p className="text-gray-400 text-base">News and announcements coming soon.</p>
                </div>
            </section>
        </div>
    )
}

export default News