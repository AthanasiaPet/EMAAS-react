import { Link } from 'react-router-dom'

function NotFound() {
    return (
        <section className="bg-[#f8f6f1] min-h-screen flex items-center justify-center px-6">
            <div className="text-center">
                <p className="font-serif text-[120px] font-bold text-[#1b2a3b] leading-none">404</p>
                <div className="w-12 h-0.5 bg-[#c9a96e] mx-auto my-6"></div>
                <h1 className="font-serif text-3xl font-semibold text-[#1b2a3b] mb-4">Page Not Found</h1>
                <p className="text-gray-500 text-base leading-relaxed max-w-md mx-auto mb-8">
                    The page you are looking for does not exist or has been moved.
                </p>
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 bg-[#1b2a3b] text-[#c9a96e] text-[11px] uppercase tracking-wider px-8 py-4 hover:bg-[#2c4a6e] transition-colors"
                >
                    Back to Homepage
                </Link>
            </div>
        </section>
    )
}

export default NotFound