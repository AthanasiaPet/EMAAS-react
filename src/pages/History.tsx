import DelorsPresident from '../assets/gallery/DelorsPresident.png'

function History() {
    return (
        <div>

            {/* Page Hero */}
            <section className="bg-[#ebd2c3] py-20 px-6 text-center">
                <p className="text-[11px] uppercase tracking-[0.14em] text-[#1a1a1a] mb-4">The Academy</p>
                <div className="w-10 h-0.5 bg-[#cc3300] mx-auto mb-5"></div>
                <h1 className="font-serif text-4xl font-bold text-[#1a1a1a] mb-5">Our History</h1>
                <p className="text-[#5a4a42] text-base leading-relaxed max-w-xl mx-auto">
                    EMAAS-WEBSTER — In Endorsement of Excellence in Science, Technology and Education for a better World.
                </p>
            </section>


            {/* Main Content */}
            <section className="bg-[#ebd2c3] py-20 px-6">
                <div className="max-w-3xl mx-auto flex flex-col gap-8">

                    {/* Photo */}
                    <div>
                        <img
                            src={DelorsPresident}
                            alt="Jacques Delors with founders of EMAAS"
                            className="w-full h-92 object-cover"
                        />
                        <p className="text-center text-xs text-[#5a4a42] mt-3 italic">
                            Jacques Delors with founders of EMAAS: Professors Stanislav Pejovnik and Paata Kervalishvili
                        </p>
                    </div>


                    {/* Quote block */}
                    <div className="bg-white/40 border border-[#d4a898] border-l-4 border-l-[#cc3300] p-8">
                        <p className="font-serif text-lg text-[#1a1a1a] leading-relaxed italic">
                            "Since the dawn of human civilizations, history has witnessed the emergence of some truly great minds who have left behind a deep-rooted mark."
                        </p>
                    </div>

                    {/* Paragraph 1 */}
                    <div className="bg-white/40 border border-[#d4a898] border-l-4 border-l-[#cc3300] p-8">
                        <p className="text-[#5a4a42] text-base leading-relaxed">
                            Outstanding figures across the fields of science, mathematics, philosophy, art and literature have enriched human intellectual history in myriad ways. While some of these great minds have simplified our lives by developing useful technology, some others have contributed to medical science, enabling us to live healthier lives. Focusing only on the Western intellectual tradition brought about by people such as Plato, Aristotle, Descartes, Spinoza, Nietzsche and Einstein, and understanding this intellectual tradition, is to only get half of the story.
                        </p>
                    </div>

                    {/* Paragraph 2 */}
                    <div className="bg-white/40 border border-[#d4a898] border-l-4 border-l-[#cc3300] p-8">
                        <p className="text-[#5a4a42] text-base leading-relaxed">
                            The idea of creation of the international intellectual mind and science body in the Mediterranean area, the motherland of world civilizations, belongs to a group of eminent scientists from France, Italy, England led by famous physicist Enrico Fermi amid the last century. In the late nineties of the XX century this idea became popular again within the group of well-known scientists and artists from France, Greece, England, Italy, with the support of the great European Jacques Delors. Ultimately after many discussions, the decision was made.
                        </p>
                    </div>

                    {/* Founding */}
                    <div className="bg-white/40 border border-[#d4a898] border-l-4 border-l-[#cc3300] p-8">
                        <h3 className="font-serif text-xl font-semibold text-[#1a1a1a] mb-4">Founding of EMAAS</h3>
                        <p className="text-[#5a4a42] text-base leading-relaxed">
                            The Euro Mediterranean Academy of Arts and Sciences (EMAAS) was established in Greece under the leadership of the famous scientist, Paata J. Kervalishvili. EMAAS is an International Academy founded by twenty-two internationally renowned scientists and artists in 2010 in the historical city of Sparta, where its headquarters are, with a branch office in Lausanne, Switzerland. EMAAS members are leading scientists and artists, dedicated to innovative research, and to the exchange and dissemination of knowledge through interdisciplinary and transnational collaborations.
                        </p>
                    </div>

                    {/* Webster Partnership */}
                    <div className="bg-white/40 border border-[#d4a898] border-l-4 border-l-[#cc3300] p-8">
                        <h3 className="font-serif text-xl font-semibold text-[#1a1a1a] mb-4">EMAAS & Webster University Partnership</h3>
                        <p className="text-[#5a4a42] text-base leading-relaxed">
                            The role of EMAAS members such as Webster University President Julian Z. Schuster, Webster Athens Rector V.J. Botopoulos, Vice-Rector and Professor S. Michailidis, and Professor A.D. Sarantopoulos is immense in the cosmopolitan approach to education, scholarship and scientific achievements. In our partnership with Webster University and its headquarters at Webster Athens, EMAAS can offer scholars and scientists the opportunity to participate in conferences, forums and close-to-practice research projects organized and led by members of EMAAS — creating added value for global society while developing innovative solutions, including pioneering works in the different domains of modern science and technology.
                        </p>
                    </div>

                </div>
            </section>

        </div>
    )
}

export default History