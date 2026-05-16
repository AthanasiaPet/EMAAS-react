import presidents1 from '../assets/gallery/presidents1.png'
import presidents2 from '../assets/gallery/presidents2.png'
import presidents3 from '../assets/gallery/presidents3.png'
import presidents4 from '../assets/gallery/presidents4.png'
import smartIslands from '../assets/gallery/smartIslands.png'
import {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight, faXmark } from '@fortawesome/free-solid-svg-icons'

const photos = [
    {
        src: presidents1,
        caption: "President's Activities — May 2024",
        category: "President's Activities",
    },
    {
        src: presidents2,
        caption: "President's Activities — April 2024",
        category: "President's Activities",
    },
    {
        src: presidents3,
        caption: "President's Activities — January 2024",
        category: "President's Activities",
    },
    {
        src: presidents4,
        caption: "President's Activities — November 2024",
        category: "President's Activities",
    },
    {
        src: smartIslands,
        caption: '1st World Conference on Smart Islands — September 2024',
        category: 'Smart Islands Conference',
    }
]

function photoGallery() {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

    const openPhoto = (index: number) => setSelectedIndex(index)
    const closePhoto = () => setSelectedIndex(null)

    const prevPhoto = () => {
        if (selectedIndex === null) return
        setSelectedIndex(selectedIndex === 0 ? photos.length - 1 : selectedIndex - 1)
    }

    const nextPhoto = () => {
        if (selectedIndex === null) return
        setSelectedIndex(selectedIndex === photos.length - 1 ? 0 : selectedIndex + 1)
    }

    return (
        <div>

            {/* Page Hero */}
            <section className="bg-[#ebd2c3] py-20 px-6 text-center">
                <p className="text-[11px] uppercase tracking-[0.14em] text-[#1a1a1a] mb-4">Activities</p>
                <div className="w-10 h-0.5 bg-[#cc3300] mx-auto mb-5"></div>
                <h1 className="font-serif text-4xl font-bold text-[#1a1a1a] mb-5">Photo Gallery</h1>
                <p className="text-[#5a4a42] text-base leading-relaxed max-w-xl mx-auto">
                    A visual record of EMAAS events, conferences, and activities across the Euro-Mediterranean region.
                </p>
            </section>

            {/* Gallery Grid */}
            <section className="bg-[#ebd2c3] py-20 px-6">
                <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {photos.map((photo, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden cursor-pointer bg-white/40 border border-[#d4a898] hover:shadow-lg transition-shadow"
                            onClick={() => openPhoto(index)}
                        >
                            <div className="overflow-hidden h-56">
                                <img
                                    src={photo.src}
                                    alt={photo.caption}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="p-4">
                                <p className="text-[10px] uppercase tracking-wider text-[#cc3300] mb-1">{photo.category}</p>
                                <p className="text-sm text-[#1a1a1a] font-serif">{photo.caption}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Lightbox */}
            {selectedIndex !== null && (
                <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center px-4">

                    {/* Close button */}
                    <button
                        onClick={closePhoto}
                        className="absolute top-6 right-6 text-white hover:text-[#ebd2c3] transition-colors"
                    >
                        <FontAwesomeIcon icon={faXmark} className="text-2xl" />
                    </button>

                    {/* Prev button */}
                    <button
                        onClick={prevPhoto}
                        className="absolute left-6 text-white hover:text-[#ebd2c3] transition-colors"
                    >
                        <FontAwesomeIcon icon={faChevronLeft} className="text-2xl" />
                    </button>

                    {/* Image */}
                    <div className="max-w-3xl w-full text-center">
                        <img
                            src={photos[selectedIndex].src}
                            alt={photos[selectedIndex].caption}
                            className="max-h-[75vh] w-full object-contain mx-auto"
                        />
                        <p className="text-gray-400 text-sm mt-4">{photos[selectedIndex].caption}</p>
                        <p className="text-gray-600 text-xs mt-1">{selectedIndex + 1} / {photos.length}</p>
                    </div>

                    {/* Next button */}
                    <button
                        onClick={nextPhoto}
                        className="absolute right-6 text-white hover:text-[#ebd2c3] transition-colors"
                    >
                        <FontAwesomeIcon icon={faChevronRight} className="text-2xl" />
                    </button>

                </div>
            )}

        </div>
    )




}
export default photoGallery