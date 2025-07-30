'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/pagination';

import {socialWorkImages} from "@/constants/assets";
import Link from "next/link";

const slides = [
    {
        title: 'International Yoga Day',
        description:
            'Celebrated International Yoga Day by conducting open yoga sessions for all age groups, promoting physical health and mental clarity in the community.',
        image: socialWorkImages[2],
    },
    {
        title: 'Tree Plantation Program',
        description:
            'Led a tree plantation drive involving local schools and volunteers to raise environmental awareness and promote green living.',
        image: socialWorkImages[4],
    },
    {
        title: 'Health Awareness Program',
        description:
            'Organized a health camp offering yoga-based therapy, nutrition advice, and free checkups to promote holistic wellness in underprivileged areas.',
        image: socialWorkImages[1],
    },
    {
        title: 'Meditation Camp',
        description:
            'Hosted a guided meditation camp to help participants reduce stress, improve focus, and connect with their inner peace through daily practices.',
        image: socialWorkImages[3],
    },
    {
        title: 'Animal Welfare Program',
        description:
            'Initiated awareness and rescue drives for street animals, encouraging compassion and community care through yoga-inspired service.',
        image: socialWorkImages[0],
    },
];

const SocialWorkSlider = () => {
    return (
        <section className="py-12 px-4 md:px-16" id={ 'social-work'}>
            <h2 className="text-3xl md:text-4xl font-bold text-[#800000] font-serif mb-10">
                Social Work
                <span className="text-[#800000]">  🌿</span>
            </h2>
            <Swiper
                modules={[Pagination, Autoplay]}
                pagination={{
                    el: '.custom-pagination',
                    clickable: true,
                }}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                loop={true}
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                            {/* Image with rounded top-left corner */}
                            <div className="relative w-full h-[350px] sm:h-[400px] md:h-[450px]">
                                <div className="absolute w-full h-full rounded-tr-[120px] rounded-bl-[120px] overflow-hidden">
                                    <Image
                                        src={slide.image}
                                        alt={slide.title}
                                        layout="fill"
                                        objectFit="cover"
                                    />
                                </div>
                            </div>

                            {/* Text Content */}
                            <div className="text-[#800000] space-y-4 px-2">
                                <h3 className="text-2xl font-bold flex items-center gap-2">
                                    {slide.title}
                                </h3>
                                <div className="h-[2px] w-24 bg-[#800000]"></div>
                                <p className="text-gray-800 text-base">{slide.description}</p>
                                <div className="flex items-center gap-2">
                                    <Link href={'https://www.instagram.com/tejasgotarkar_yogacharya'} className="btn bg-[#800000] text-amber-100 rounded-md border-none">
                                        Learn More
                                    </Link>
                                </div>
                            </div>

                        </div>

                    </SwiperSlide>
                ))}
            </Swiper>

        </section>
    );
};

export default SocialWorkSlider;
