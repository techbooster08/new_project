'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {galleryAllImages} from '@/constants/assets';
import Image from "next/image";

const GalleryPage = () => {
    const [modalImage, setModalImage] = useState(null);

    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') setModalImage(null);
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, []);

    const handleBackdropClick = (e) => {
        if (e.target.classList.contains('backdrop')) {
            setModalImage(null);
        }
    };

    return (
        <div className="min-h-screen bg-[#fdf1d5] py-10 px-4 md:px-16">
            {/* Back Button */}
            <div className="mb-6">
                <Link href="/">
                    <button className="bg-[#800000] text-white px-5 py-2 rounded-md hover:bg-[#a10000] transition">
                        ← Back to Home
                    </button>
                </Link>
            </div>

            {/* Title */}
            <h1 className="text-3xl font-bold text-[#800000] text-center mb-8">Gallery</h1>

            {/* Image Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {galleryAllImages.map((src, i) => (
                    <Image
                        key={i}
                        src={src}
                        alt={`gallery-${i}`}
                        className="w-full h-48 object-cover rounded-md cursor-pointer hover:scale-105 transition-transform"
                        onClick={() => setModalImage(src)}
                    />
                ))}
            </div>

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

export default GalleryPage;
