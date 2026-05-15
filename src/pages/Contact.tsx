import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocationDot, faUser } from '@fortawesome/free-solid-svg-icons'
import emailjs from '@emailjs/browser'

const contacts = [
    {
        name: 'Prof. Dr. Paata Kervalishvili',
        role: 'President',
        email: 'kervalpt@yahoo.com',
    },
    {
        name: 'Dr. Susie Michailidis',
        role: 'Vice-President',
        email: 'michailidiss@webster.edu',
    },
    {
        name: 'Dr. Athanasios Sarantopoulos',
        role: 'EMAAS Presidium Secretary',
        email: 'asarantopoulos18@webster.edu',
    },
]

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    })
    const [submitted, setSubmitted] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            {
                name: formData.name,
                from_email: formData.email,
                subject: formData.subject,
                message: formData.message,
            },
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        ).then(() => {
            setSubmitted(true)
        }).catch((error) => {
            console.error('EmailJS error:', error)
            alert('Something went wrong. Please try again.')
        })
    }

    return (
        <div>

            {/* Page Hero */}
            <section className="bg-[#8b4513] py-20 px-6 text-center">
                <p className="text-[11px] uppercase tracking-[0.14em] text-[#f6ac3d] mb-4">Get in Touch</p>
                <div className="w-10 h-0.5 bg-[#f6ac3d] mx-auto mb-5"></div>
                <h1 className="font-serif text-4xl font-bold text-white mb-5">Contact Us</h1>
                <p className="text-white text-base leading-relaxed max-w-xl mx-auto">
                    Any mail to the Academy shall be addressed to the following Presidium members.
                </p>
            </section>

            {/* Contact Cards + Form */}
            <section className="bg-[#f8f6f1] py-20 px-6">
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">

                    {/* Left — Contact Info */}
                    <div>
                        <p className="text-[11px] uppercase tracking-[0.14em] text-[#a0522d] mb-3">Presidium Contacts</p>
                        <div className="w-10 h-0.5 bg-[#f6ac3d] mb-8"></div>

                        <div className="flex flex-col gap-5">
                            {contacts.map((contact, index) => (
                                <div key={index} className="bg-white border border-gray-200 border-l-4 border-l-[#f6ac3d] p-6 hover:shadow-md transition-shadow">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-9 h-9 bg-[#8b4513] flex items-center justify-center shrink-0">
                                            <FontAwesomeIcon icon={faUser} className="text-[#f6ac3d] text-sm" />
                                        </div>
                                        <div>
                                            <p className="font-serif text-base font-semibold text-[#8b4513]">{contact.name}</p>
                                            <p className="text-[10px] uppercase tracking-wider text-[#a0522d]">{contact.role}</p>
                                        </div>
                                    </div>

                                    <a
                                    href={`mailto:${contact.email}`}
                                    className="inline-flex items-center gap-2 text-gray-500 text-sm hover:text-[#a0522d] transition-colors"
                                    >
                                    <FontAwesomeIcon icon={faEnvelope} className="text-[#f6ac3d] text-xs" />
                                    {contact.email}
                                </a>
                                </div>
                                ))}
                        </div>

                        {/* Offices */}
                        <div className="mt-8">
                            <p className="text-[11px] uppercase tracking-[0.14em] text-[#a0522d] mb-3">Offices</p>
                            <div className="w-10 h-0.5 bg-[#f6ac3d] mb-6"></div>
                            <div className="flex flex-col gap-4">
                                <div className="flex items-start gap-3">
                                    <FontAwesomeIcon icon={faLocationDot} className="text-[#f6ac3d] mt-1 shrink-0" />
                                    <div>
                                        <p className="font-serif text-sm font-semibold text-[#8b4513]">Headquarters</p>
                                        <p className="text-gray-500 text-sm">Sparta, Greece</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <FontAwesomeIcon icon={faLocationDot} className="text-[#f6ac3d] mt-1 shrink-0" />
                                    <div>
                                        <p className="font-serif text-sm font-semibold text-[#8b4513]">Branch Office</p>
                                        <p className="text-gray-500 text-sm">Lausanne, Switzerland</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right — Contact Form */}
                    <div>
                        <p className="text-[11px] uppercase tracking-[0.14em] text-[#a0522d] mb-3">Send a Message</p>
                        <div className="w-10 h-0.5 bg-[#f6ac3d] mb-8"></div>

                        {submitted ? (
                            <div className="bg-white border border-gray-200 border-l-4 border-l-[#f6ac3d] p-8 text-center">
                                <p className="font-serif text-xl font-semibold text-[#8b4513] mb-3">Message Sent!</p>
                                <p className="text-gray-500 text-sm">Thank you for reaching out. We will get back to you shortly.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                                <div>
                                    <label className="block text-[11px] uppercase tracking-wider text-gray-500 mb-2">Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-[#f6ac3d] transition-colors"
                                        placeholder="Your full name"
                                    />
                                </div>
                                <div>
                                    <label className="block text-[11px] uppercase tracking-wider text-gray-500 mb-2">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-[#f6ac3d] transition-colors"
                                        placeholder="your@email.com"
                                    />
                                </div>
                                <div>
                                    <label className="block text-[11px] uppercase tracking-wider text-gray-500 mb-2">Subject</label>
                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-[#f6ac3d] transition-colors"
                                        placeholder="What is this about?"
                                    />
                                </div>
                                <div>
                                    <label className="block text-[11px] uppercase tracking-wider text-gray-500 mb-2">Message</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        className="w-full border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-[#f6ac3d] transition-colors resize-none"
                                        placeholder="Your message..."
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="bg-[#8b4513] text-[#f6ac3d] text-[11px] uppercase tracking-wider px-8 py-4 hover:bg-[#73390f] transition-colors"
                                >
                                    Send Message
                                </button>
                            </form>
                        )}
                    </div>

                </div>
            </section>

        </div>
    )
}

export default Contact