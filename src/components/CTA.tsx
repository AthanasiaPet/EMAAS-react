import { Link } from 'react-router-dom'

function CTA() {
    return (
        <section className="bg-[#ebd2c3] px-6 py-24 text-center">
            <div className="max-w-2xl mx-auto">
                <p className="text-[11px] uppercase tracking-[0.14em] text-[#1a1a1a] mb-4">
                    Join the Academy
                </p>
                <div className="w-12 h-0.5 bg-[#cc3300] mx-auto mb-6"></div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1a1a1a] leading-snug mb-6">
                    Become Part of a Global Network of Excellence
                </h2>
                <p className="text-[#1a1a1a] text-base leading-relaxed mb-10">
                    EMAAS membership is open to distinguished scientists, scholars, and artists committed to advancing knowledge and fostering international collaboration.
                </p>
                <div className="flex gap-4 justify-center flex-wrap">
                    <Link
                        to="/membership"
                        className="bg-[#cc3300] text-white text-[11px] uppercase tracking-wider px-7 py-3 hover:bg-[#a82800] transition-colors"
                    >
                        Apply Now
                    </Link>
                    <Link
                        to="/contact"
                        className="bg-[#cc3300] text-white text-[11px] uppercase tracking-wider px-7 py-3 hover:bg-[#a82800] transition-colors"
                    >
                        Contact Us
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default CTA