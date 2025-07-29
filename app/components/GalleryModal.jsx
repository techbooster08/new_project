'use client';
import React from 'react';
import Image from 'next/image';

const GalleryModal = ({ src, onClose }) => {
    if (!src) return null; // Defensive check

    return (
        <div
            className="backdrop fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            onClick={(e) => {
                if (e.target.classList.contains('backdrop')) onClose();
            }}
            role="dialog"
            aria-modal="true"
        >
            <div className="relative max-w-[90vw] max-h-[90vh] p-2">
                <button
                    className="absolute -top-4 -right-4 bg-white text-black rounded-full w-8 h-8 flex items-center justify-center shadow hover:bg-gray-200 transition"
                    onClick={onClose}
                    aria-label="Close"
                >
                    &times;
                </button>

                <Image
                    src={src}
                    alt="modal-img"
                    width={1200}
                    height={800}
                    className="max-h-[90vh] w-auto h-auto rounded-md shadow-lg"
                    priority
                />
            </div>
        </div>
    );
};

export default GalleryModal;
