
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
    return (
        <div>
            {/* Page Hero */}
            <section className="bg-[#ebd2c3] py-15 pb-6 px-6 text-center">
                <p className="text-[11px] uppercase tracking-[0.14em] text-[#1a1a1a] mb-4">
                    Get in Touch
                </p>

                <div className="w-10 h-0.5 bg-[#cc3300] mx-auto mb-5"></div>

                <h1 className="font-serif text-4xl font-bold text-[#1a1a1a] mb-5">
                    Contact Us
                </h1>

                <p className="text-[#5a4a42] text-base leading-relaxed max-w-xl mx-auto">
                    For all inquiries, please contact one of the following Presidium members.
                </p>
            </section>

            {/* Presidium Contacts */}
            <section className="bg-[#ebd2c3] pt-4 pb-12 px-6">
                <div className="max-w-5xl mx-auto">
                    {/* Section Heading */}
                    <div className="text-center mb-10">
                        <p className="text-[11px] uppercase tracking-[0.14em] text-[#cc3300] mb-3">
                            Presidium Contacts
                        </p>

                        <div className="w-10 h-0.5 bg-[#cc3300] mx-auto"></div>
                    </div>


                    {/* Contact Cards */}
                    <div className="flex flex-col gap-5 max-w-2xl mx-auto">
                        {contacts.map((contact, index) => (
                            <div
                                key={index}
                                className="bg-white/40 border border-[#d4a898] border-l-4 border-l-[#cc3300] p-6 hover:shadow-md transition-shadow"
                            >
                                {/* Name and Role */}
                                <div className="mb-4">
                                    <p className="font-serif text-base font-semibold text-[#1a1a1a]">
                                        {contact.name}
                                    </p>

                                    <p className="text-[10px] uppercase tracking-wider text-[#cc3300] mt-1">
                                        {contact.role}
                                    </p>
                                </div>

                                {/* Email */}
                                <a
                                    href={`mailto:${contact.email}`}
                                    className="text-[#5a4a42] text-sm hover:text-[#cc3300] transition-colors break-all"
                                >
                                    {contact.email}
                                </a>
                            </div>
                        ))}
                    </div>

                </div>
            </section>
        </div>
    )
}

export default Contact