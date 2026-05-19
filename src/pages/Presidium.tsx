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
            <section className="bg-[#ebd2c3] py-15 px-6 text-center">
                <p className="text-[11px] uppercase tracking-[0.14em] text-[#1a1a1a] mb-4">Academy</p>
                <div className="w-10 h-0.5 bg-[#cc3300] mx-auto mb-5"></div>
                <h1 className="font-serif text-4xl font-bold text-[#1a1a1a] mb-5">Presidium</h1>
                <p className="text-[#1a1a1a] text-base leading-relaxed max-w-xl mx-auto">
                    The executive leadership of the Euro Mediterranean Academy of Arts and Sciences, guiding the academy's mission and international presence.
                </p>
            </section>

            {/* Members Grid */}
            <section className="bg-[#ebd2c3] py-15 px-6">
                <div className="max-w-5xl mx-auto">
                    <p className="text-[11px] uppercase tracking-[0.14em] text-[#cc3300] text-center mb-3">Members</p>
                    <div className="w-10 h-0.5 bg-[#cc3300] mx-auto mb-10"></div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {presidiumMembers.map((member, index) => (
                            <div key={index} className="bg-white/40 border border-[#d4a898] border-t-4 border-t-[#cc3300] p-6 hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 bg-[#cc3300] flex items-center justify-center mb-4">
                                    <FontAwesomeIcon icon={faUser} className="text-white text-lg" />
                                </div>
                                <h3 className="font-serif text-lg font-semibold text-[#1a1a1a] mb-2">{member.name}</h3>
                                <p className="text-[11px] uppercase tracking-wider text-[#cc3300]">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Presidium