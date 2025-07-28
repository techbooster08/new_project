"use client";
import React from "react";
import Link from "next/link";

const Footer = () => {
    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <footer className="bg-[#800000] text-white w-full pb-2">
            {/* Top Section */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center px-9 py-6 gap-6 text-center sm:text-left">
                {/* Left Section */}
                <div className="flex flex-col items-center sm:items-start">
                    <Link href={'#home'}>
                        <p className="text-xl font-semibold">TEJAS V. GOTARKAR</p>
                    </Link>

                    <div className="flex items-center gap-2 text-[#D4AF37] text-sm sm:text-base">
                        <Link href={'https://threeartisans.com/'}>
                            <i className="fa-solid fa-briefcase" />
                            <span>Three Artisans Multiservices</span>
                        </Link>

                    </div>
                </div>

                {/* Right Section */}
                <div className="flex flex-col items-center sm:flex-row sm:items-center gap-6 sm:gap-10 w-full sm:w-auto">
                    {/* Social Icons */}
                    <ul className="flex gap-5 text-white text-2xl">
                        <li className="hover:text-[#D4AF37] transition cursor-pointer">
                            <Link href={'https://threeartisans.com/'} >
                                <i className="fa-solid fa-globe"></i>
                            </Link>
                        </li>
                        <li className="hover:text-[#D4AF37] transition cursor-pointer">
                            <Link href={'https://www.instagram.com/threeartisans01/'} >
                                <i className="fab fa-instagram" />
                            </Link>
                        </li>
                        <li className="hover:text-[#D4AF37] transition cursor-pointer">
                            <Link href={'mailto:hr@threeartisans.com'} >
                                <i className="fa-solid fa-envelope" />
                            </Link>

                        </li>
                    </ul>

                    {/* Back to Top Button */}
                    <button
                        onClick={handleScrollToTop}
                        className="px-4 py-2 bg-[#D4AF37] text-white rounded-full text-sm font-semibold transition"
                    >
                        ↑
                    </button>
                </div>
            </div>

            {/* Bottom Copyright */}
            <div className="text-center py-3 border-t border-white/10 text-sm text-gray-300">
                © {new Date().getFullYear()} - All rights reserved
            </div>
        </footer>
    );
};

export default Footer;