import logo from '../assets/logo.png'

function Hero() {
    const scrollToAbout = () => {
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <section className="bg-[#1b2a3b] px-6 py-24">
            <div className="max-w-6xl mx-auto flex flex-col items-center">

                {/* Logo */}
                <img
                    src={logo}
                    alt="EMAAS Logo"
                    className="w-48 h-48 object-contain mb-10"
                />

                {/* Content grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center w-full">

                    {/* Left side - Text */}
                    <div>
                        <p className="text-[11px] uppercase tracking-[0.14em] text-[#c9a96e] mb-5">
                            Est. 2014 · Sparta, Greece
                        </p>
                        <h1 className="font-serif text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                            Science, Arts & <br />
                            <span className="text-[#c9a96e]">Global Excellence</span>
                        </h1>
                        <p className="text-gray-400 text-base leading-relaxed mb-8 max-w-md">
                            A worldwide academy of ballot-selected academicians advancing knowledge across the Euro-Mediterranean region and beyond.
                        </p>
                        <button
                            onClick={scrollToAbout}
                            className="border border-[#c9a96e] text-[#c9a96e] text-[11px] uppercase tracking-wider px-7 py-3 hover:bg-[#c9a96e20] transition-colors"
                        >
                            Explore Our Work
                        </button>
                    </div>

                    {/* Right side - Stats */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="border border-[#c9a96e30] bg-white/5 p-7">
                            <p className="font-serif text-4xl font-bold text-[#c9a96e]">22+</p>
                            <p className="text-gray-400 text-xs mt-2 leading-relaxed">Founding Scientists & Artists</p>
                        </div>
                        <div className="border border-[#c9a96e30] bg-white/5 p-7">
                            <p className="font-serif text-4xl font-bold text-[#c9a96e]">10+</p>
                            <p className="text-gray-400 text-xs mt-2 leading-relaxed">Years of International Activity</p>
                        </div>
                        <div className="border border-[#c9a96e30] bg-white/5 p-7">
                            <p className="font-serif text-4xl font-bold text-[#c9a96e]">2</p>
                            <p className="text-gray-400 text-xs mt-2 leading-relaxed">Offices — Greece & Switzerland</p>
                        </div>
                        <div className="border border-[#c9a96e30] bg-white/5 p-7">
                            <p className="font-serif text-4xl font-bold text-[#c9a96e]">∞</p>
                            <p className="text-gray-400 text-xs mt-2 leading-relaxed">Global Research Network</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Hero