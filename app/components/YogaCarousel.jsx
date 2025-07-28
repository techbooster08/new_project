'use client'; // If using Next.js App Router

import React, { useRef } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import {yogaCarouselImages} from "@/constants/assets";



const YogaCarousel = () => {
    const swiperRef = useRef(null);

    const handlePrev = () => swiperRef.current.swiper.slidePrev();
    const handleNext = () => swiperRef.current.swiper.slideNext();

    return (
        <section className="bg-[#FFE3AA]  py-12 px-4 md:px-16" id={ 'yoga'}>
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

                {/* Left Content */}
                <div className="space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#800000] font-serif">Yoga with Tejas</h2>
                    <h3 className="text-xl font-semibold text-gray-700">
                        Holistic Wellness<br />through Traditional Yoga
                    </h3>
                    <div className="w-20 h-1 bg-[#800000] my-2"></div>
                    <p className="text-gray-700 text-base md:text-lg">
                        Discover the transformative power of yoga with our guided programs rooted in ancient Indian traditions.
                    </p>
                </div>

                {/* Right Content */}
                <div className="flex flex-col items-center">
                    <div className="rounded-xl overflow-hidden shadow-lg w-full">
                        <Swiper
                            modules={[Pagination, Autoplay]}
                            pagination={{ clickable: true, el: '.custom-pagination' }}
                            autoplay={{
                                delay: 3000,        // 3 seconds
                                disableOnInteraction: false, // continues autoplay after user swipes
                            }}
                            loop={true}
                            ref={swiperRef}
                            className="w-full"
                        >
                            {yogaCarouselImages.map((img, index) => (
                                <SwiperSlide key={index}>
                                    <Image
                                        src={img}
                                        alt={`Yoga ${index + 1}`}
                                        className="object-fill h-[400px] w-[700px] max-sm:h-[320px]"
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    {/* Custom Navigation Controls */}
                    <div className="flex items-center gap-4 mt-5 text-[#800000] text-xl font-bold">
                        <button onClick={handlePrev} className="hover:text-red-800">&#8592;</button>
                        <div className="custom-pagination flex gap-2 items-center"></div>
                        <button onClick={handleNext} className="hover:text-red-800">&#8594;</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default YogaCarousel;
