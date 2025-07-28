'use client'
import React from 'react'
import {Link} from "react-scroll";

const Navbar = () => {
    return (
        <div className="navbar shadow-sm bg-[#FFE3AA] max-lg:bg-[#00000000] max-lg:shadow-none text-[#4E342E] font-semibold fixed z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex="0" role="button" className="lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M4 6h16M4 12h8m-8 6h16"/>
                        </svg>
                    </div>
                    <ul
                        tabIndex="0"
                        className="menu menu-sm dropdown-content bg-white rounded-box z-1 mt-3 w-52 p-2 shadow text-3xl">
                        <li><Link to="home" smooth={true} offset={-80} duration={500} className="cursor-pointer hover:underline">Home</Link></li>
                        <li><Link to="about" smooth={true} offset={-80} duration={500} className="cursor-pointer hover:underline">About</Link></li>
                        <li><Link to="yoga" smooth={true} offset={-80} duration={500} className="cursor-pointer hover:underline">Yoga</Link></li>
                        <li><Link to="social-work" smooth={true} offset={-80} duration={500} className="cursor-pointer hover:underline">Social Work</Link></li>
                        <li><Link to="gallery" smooth={true} offset={-80} duration={500} className="cursor-pointer hover:underline">Gallery</Link></li>
                        <li><Link to="contact" smooth={true} offset={-80} duration={500} className="cursor-pointer hover:underline">Contact</Link></li>
                    </ul>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-xl gap-5">
                    <li><Link to="home" smooth={true} offset={-80} duration={500} className="cursor-pointer hover:underline">Home</Link></li>
                    <li><Link to="about" smooth={true} offset={-80} duration={500} className="cursor-pointer hover:underline">About</Link></li>
                    <li><Link to="yoga" smooth={true} offset={-80} duration={500} className="cursor-pointer hover:underline">Yoga</Link></li>
                    <li><Link to="social-work" smooth={true} offset={-80} duration={500} className="cursor-pointer hover:underline">Social Work</Link></li>
                    <li><Link to="gallery" smooth={true} offset={-80} duration={500} className="cursor-pointer hover:underline">Gallery</Link></li>
                    <li><Link to="contact" smooth={true} offset={-80} duration={500} className="cursor-pointer hover:underline">Contact</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
            </div>
        </div>
    )
}
export default Navbar
