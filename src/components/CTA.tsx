import { Link } from 'react-router-dom'

function CTA() {
    return (
        <section className="bg-[#8b4513] px-6 py-24 text-center">
            <div className="max-w-2xl mx-auto">
                <p className="text-[11px] uppercase tracking-[0.14em] text-[#f6ac3d] mb-4">
                    Join the Academy
                </p>
                <div className="w-12 h-0.5 bg-[#f6ac3d] mx-auto mb-6"></div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-white leading-snug mb-6">
                    Become Part of a Global Network of Excellence
                </h2>
                <p className="text-white text-base leading-relaxed mb-10">
                    EMAAS membership is open to distinguished scientists, scholars, and artists committed to advancing knowledge and fostering international collaboration.
                </p>
                <div className="flex gap-4 justify-center flex-wrap">
                    <Link
                        to="/membership"
                        className="bg-[#f6ac3d] text-[#8b4513] text-[11px] uppercase tracking-wider px-8 py-3 font-semibold hover:bg-[#b8935a] transition-colors"
                    >
                        Apply Now
                    </Link>
                    <Link
                        to="/contact"
                        className="border border-[#f6ac3d] text-[#f6ac3d] text-[11px] uppercase tracking-wider px-8 py-3 hover:bg-[#f6ac3d20] transition-colors"
                    >
                        Contact Us
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default CTA