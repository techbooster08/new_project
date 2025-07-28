'use client'
import React from "react";
import Slider from "react-slick";

// Your testimonial data...

const testimonials = [
    {
        name: "Aarti Sharma",
        profession: "Community Member",
        feedback:
            "The yoga session was a life-changing experience for me. I never realized how much tension I held in my body until I started practicing regularly after the camp. Thank you for bringing this to our community!",
    },
    {
        name: "Anil Deshmukh",
        profession: "College Student",
        feedback:
            "As a student, I often feel overwhelmed, but the yoga techniques I learned during the camp have helped me stay grounded and improve my concentration. Grateful for the opportunity!",
    },
    {
        name: "Sneha Kulkarni",
        profession: "School Teacher",
        feedback:
            "Participating in the camp helped me reconnect with my inner self. Yoga has become a part of my daily routine now.",
    },
];


const NextArrow = (props) => {
    const { onClick } = props;
    return (
        <div
            className="absolute right-[-10] top-1/2 -translate-y-1/2 cursor-pointer text-red-600 text-3xl z-10"
            onClick={onClick}
        >
            ❯
        </div>
    );
};

const PrevArrow = (props) => {
    const { onClick } = props;
    return (
        <div
            className="absolute left-[-10] top-1/2 -translate-y-1/2 cursor-pointer text-red-600 text-3xl z-10"
            onClick={onClick}
        >
            ❮
        </div>
    );
};


const TestimonialSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [{ breakpoint: 768, settings: { slidesToShow: 1 } }],
    };

    return (
        <section className="py-12  px-4 md:px-16 relative">
            <h2 className="text-3xl font-semibold text-center text-red-800 mb-10">
                Community Impact & Reflections
            </h2>
            <Slider {...settings}>
                {testimonials.map((item, i) => (
                    <div key={i} className="px-4">
                        <div className="bg-white rounded-lg shadow-md p-6 h-[220px] sm:h-[200px]">
                            <div className="flex items-center mb-4">
                                <span className="text-yellow-400 text-2xl mr-2">“</span>
                                <div className="flex items-center">
                                    <div className="w-10 h-10 bg-blue-100 rounded-full flex justify-center items-center text-blue-700 font-bold text-sm">
                                        👤
                                    </div>
                                    <div className="ml-3 flex flex-col">
                                        <h3 className="text-lg font-semibold text-red-800">{item.name}</h3>
                                        <span className="text-sm text-gray-500">{item.profession}</span>
                                    </div>
                                </div>
                            </div>
                            <p className="text-gray-700 text-sm">{item.feedback}</p>
                        </div>
                    </div>
                ))}

            </Slider>
        </section>
    );
};

export default TestimonialSlider;
