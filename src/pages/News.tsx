function News() {
    return (
        <div>
            <section className="bg-[#ebd2c3] py-20 px-6 text-center">
                <p className="text-[11px] uppercase tracking-[0.14em] text-[#1a1a1a] mb-4">Activities</p>
                <div className="w-10 h-0.5 bg-[#cc3300] mx-auto mb-5"></div>
                <h1 className="font-serif text-4xl font-bold text-[#1a1a1a] mb-5">News</h1>
                <p className="text-[#5a4a42] text-base leading-relaxed max-w-xl mx-auto">
                    Announcements and updates from the Euro Mediterranean Academy of Arts and Sciences.
                </p>
            </section>
            <section className="bg-[#ebd2c3] min-h-screen py-20 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <p className="text-[#5a4a42] text-base">News and announcements coming soon.</p>
                </div>
            </section>
        </div>
    )
}

export default News