import logo from '../assets/logo.png'
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
        title: 'A Global Network of Excellence',
        text: 'EMAAS membership is open to distinguished scientists, scholars, and artists committed to advancing knowledge and fostering international collaboration.',
    },
]

function Hero() {
    const scrollToAbout = () => {
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <section className="bg-[#ebd2c3] px-6 py-20">
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
                            Est. 2014 · Athens, Greece
                        </p>
                        <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#1a1a1a] leading-tight mb-6">
                            Science, Arts & <br />
                            <span className="text-[#1a1a1a]">Global Excellence</span>
                        </h1>
                        <p className="text-[#1a1a1a] text-base leading-relaxed mb-8 max-w-md">
                            EMAAS is a worldwide academy of ballot-selected academicians advancing knowledge across the Euro-Mediterranean region and beyond.
                        </p>
                        <button
                            onClick={scrollToAbout}
                            className="bg-[#cc3300] text-white text-[11px] uppercase tracking-wider px-7 py-3 hover:bg-[#a82800] transition-colors"                        >
                            Explore Our Work
                        </button>
                    </div>


                    {/* Right side - Cards */}
                    <div className="flex flex-col gap-5">
                        {cards.map((card, index) => (
                            <div key={index} className="bg-white/20 border border-[#d4a898] border-l-4 border-l-[#cc3300] p-3 hover:shadow-md transition-shadow">
                                <h3 className="font-serif text-lg font-semibold text-[#1a1a1a] mb-1">{card.title}</h3>
                                <p className="text-[#1a1a1a] text-sm leading-relaxed">{card.text}</p>
                            </div>
                        ))}
                    </div>


                </div>
            </div>
        </section>
    )
}

export default Hero