'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import {galleryAllImages} from '@/constants/assets';

const GalleryModal = dynamic(() => import('@/app/components/GalleryModal'), { ssr: false });

const GalleryPage = () => {
    const [modalImage, setModalImage] = useState(null);

    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') setModalImage(null);
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, []);

    return (
        <div className="min-h-screen bg-[#FFE3AA] py-10 px-4 md:px-16">
            {/* Back Button */}
            <div className="mb-6">
                <Link href="/">
                    <button className="bg-[#800000] text-white px-5 py-2 rounded-md hover:bg-[#a10000] transition">
                        ← Back to Home
                    </button>
                </Link>
            </div>

            {/* Title */}
            <h1 className="text-3xl font-bold text-[#800000] text-center mb-8 font-serif">Gallery</h1>

            {/* Image Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {galleryAllImages.map((src, i) => (
                    <Image
                        key={i}
                        src={src}
                        alt={`gallery-${i}`}
                        width={500}
                        height={500}
                        className="w-full h-48 object-cover rounded-md cursor-pointer hover:scale-105 transition-transform"
                        onClick={() => setModalImage(src)}
                        loading="lazy"
                    />
                ))}
            </div>

            {/* Modal */}
            {modalImage && (
                <GalleryModal src={modalImage} onClose={() => setModalImage(null)} />
            )}
        </div>
    );
};

export default GalleryPage;
