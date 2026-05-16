import logo from '../assets/logo.png'

function Hero() {
    const scrollToAbout = () => {
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <section className="bg-[#ebd2c3] px-6 py-24">
            <div className="max-w-6xl mx-auto flex flex-col items-center">

                {/* Logo */}
                <img
                    src={logo}
                    alt="EMAAS Logo"
                    className="w-78 h-48 object-contain mb-10 "
                />

                {/* Content grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center w-full">

                    {/* Left side - Text */}
                    <div>
                        <p className="text-[11px] uppercase tracking-[0.14em] text-[#1a1a1a] mb-5">
                            Est. 2014 · Sparta, Greece
                        </p>
                        <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#1a1a1a] leading-tight mb-6">
                            Science, Arts & <br />
                            <span className="text-[#1a1a1a]">Global Excellence</span>
                        </h1>
                        <p className="text-[#1a1a1a] text-base leading-relaxed mb-8 max-w-md">
                            A worldwide academy of ballot-selected academicians advancing knowledge across the Euro-Mediterranean region and beyond.
                        </p>
                        <button
                            onClick={scrollToAbout}
                            className="bg-[#cc3300] text-white text-[11px] uppercase tracking-wider px-7 py-3 hover:bg-[#a82800] transition-colors"                        >
                            Explore Our Work
                        </button>
                    </div>

                    {/* Right side - Stats */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="border border-[#cc3300a8] bg-white/20 p-7">
                            <p className="font-serif text-4xl font-bold text-[#1a1a1a]">22+</p>
                            <p className="text-[#1a1a1a] text-xs mt-2 leading-relaxed">Founding Scientists & Artists</p>
                        </div>
                        <div className="border border-[#cc3300a8] bg-white/20 p-7">
                            <p className="font-serif text-4xl font-bold text-[#1a1a1a]">10+</p>
                            <p className="text-[#1a1a1a] text-xs mt-2 leading-relaxed">Years of International Activity</p>
                        </div>
                        <div className="border border-[#cc3300a8] bg-white/20 p-7">
                            <p className="font-serif text-4xl font-bold text-[#1a1a1a]">2</p>
                            <p className="text-[#1a1a1a] text-xs mt-2 leading-relaxed">Offices — Greece & Switzerland</p>
                        </div>
                        <div className="border border-[#cc3300a8] bg-white/20 p-7">
                            <p className="font-serif text-4xl font-bold text-[#1a1a1a]">∞</p>
                            <p className="text-[#1a1a1a] text-xs mt-2 leading-relaxed">Global Research Network</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Hero