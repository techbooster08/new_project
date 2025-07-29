'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { galleryImages } from '@/constants/assets';

const GalleryModal = dynamic(() => import('@/app/components/GalleryModal'), { ssr: false });

const Gallery = () => {
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


            {/* Title */}
            <h1 className="text-3xl font-bold text-[#800000] text-center mb-8 font-serif">Gallery</h1>

            {/* Image Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {galleryImages.map((src, i) => (
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
            <div className={'flex justify-center mt-4'}>

            <Link href={'/gallery'} className="btn bg-[#800000] text-amber-100 rounded-md border-none">view More</Link>
            </div>

            {/* Modal */}
            {modalImage && (
                <GalleryModal src={modalImage} onClose={() => setModalImage(null)} />
            )}
        </div>
    );
};

export default Gallery;
