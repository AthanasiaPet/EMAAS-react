import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const presidiumMembers = [
    { name: 'Paata J. Kervalishvili', role: 'President' },
    { name: 'Sousana Michailidis', role: 'Vice-President' },
    { name: 'Shuichi Iwata', role: 'Vice-President' },
    { name: 'Radovan Stanislav Pejovnik', role: 'Vice-President' },
    { name: 'Panagiotis Yannakopoulos', role: 'International Relations Head' },
    { name: 'Jeremy Ramsden', role: 'Order of Natural Sciences Chair' },
    { name: 'Michael Zgurovsky', role: 'Order of Engineering Chair' },
    { name: 'Mary Zelemenou', role: 'Order of Humanities and Social Sciences Chair, Order of Arts Chair' },
    { name: 'Marwan Mousa', role: 'Arab Countries Chapter Head' },
    { name: 'Florian Kongoli', role: 'North and South American and Caribbean Basin Countries Chapter Head' },
    { name: 'Ildar Utymichev', role: 'Euro-Asian Chapter Head' },
    { name: 'Christos Zerefos', role: 'Partnership with Academy of Athens' },
    { name: 'Athanasios D. Sarantopoulos', role: 'EMAAS Presidium Secretary' },
    { name: 'Konstantinos Spentsas', role: 'Honorary Chief Academic Secretary' },
]

function Presidium() {
    return (
        <div>

            {/* Page Hero */}
            <section className="bg-[#8b4513] py-20 px-6 text-center">
                <p className="text-[11px] uppercase tracking-[0.14em] text-[#f6ac3d] mb-4">Academy</p>
                <div className="w-10 h-0.5 bg-[#f6ac3d] mx-auto mb-5"></div>
                <h1 className="font-serif text-4xl font-bold text-white mb-5">Presidium</h1>
                <p className="text-white text-base leading-relaxed max-w-xl mx-auto">
                    The executive leadership of the Euro Mediterranean Academy of Arts and Sciences, guiding the academy's mission and international presence.
                </p>
            </section>

            {/* Members Grid */}
            <section className="bg-[#f8f6f1] py-20 px-6">
                <div className="max-w-5xl mx-auto">
                    <p className="text-[11px] uppercase tracking-[0.14em] text-[#a0522d] text-center mb-3">Members</p>
                    <div className="w-10 h-0.5 bg-[#f6ac3d] mx-auto mb-10"></div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {presidiumMembers.map((member, index) => (
                            <div key={index} className="bg-white border border-gray-200 border-t-4 border-t-[#f6ac3d] p-6 hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 bg-[#8b4513] flex items-center justify-center mb-4">
                                    <FontAwesomeIcon icon={faUser} className="text-[#f6ac3d] text-lg" />
                                </div>
                                <h3 className="font-serif text-lg font-semibold text-[#8b4513] mb-2">{member.name}</h3>
                                <p className="text-[11px] uppercase tracking-wider text-[#a0522d]">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Presidium