'use client';
import React, {useState, useEffect, use} from 'react';
import  {galleryImages} from "@/constants/assets";
import Image from "next/image";


const Gallery = () => {
    const [modalImage, setModalImage] = useState(null);

    // ESC key handler
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') setModalImage(null);
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    const handleImageClick = (src) => {
        setModalImage(src);
    };

    const handleBackdropClick = (e) => {
        if (e.target.classList.contains('backdrop')) {
            setModalImage(null);
        }
    };

    return (
        <div className="bg-[#FFE3AA] py-10 text-center" id={'gallery'}>
            <h2 className="text-2xl font-bold text-[#800000] mb-6">Gallery</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4 md:px-16">
                {galleryImages.map((src, index) => (
                    <Image
                        key={index}
                        src={src}
                        alt={`gallery-${index}`}
                        className="w-full h-48 object-cover rounded-md cursor-pointer hover:scale-105 transition-transform"
                        onClick={() => handleImageClick(src)}
                    />
                ))}
            </div>

            <button onClick={() =>{
                return window.location.href = "/gallery";
            }} className="mt-6 px-6 py-2 bg-[#800000] text-white rounded-md hover:bg-[#a10000]">
                View More
            </button>

            {/* Modal */}
            {modalImage && (
                <div
                    className="backdrop fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
                    onClick={handleBackdropClick}
                    role="dialog"
                    aria-modal="true"
                >
                    <div className="relative max-w-[90vw] max-h-[90vh] p-2">
                        <button
                            className="absolute -top-4 -right-4 bg-white text-black rounded-full w-8 h-8 flex items-center justify-center shadow hover:bg-gray-200 transition"
                            onClick={() => setModalImage(null)}
                            aria-label="Close"
                        >
                            &times;
                        </button>

                        <div className="relative w-full h-full flex items-center justify-center">
                            <Image
                                src={modalImage}
                                alt="modal-img"
                                width={1200} // Set a large size to preserve quality
                                height={800}
                                className="max-h-[90vh] w-auto h-auto rounded-md shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            )}


        </div>
    );
};

export default Gallery;
