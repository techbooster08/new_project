import React from 'react'
import {icons} from "@/constants/assets";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
    return (
        <div className="hero min-h-[300px] w-full  sm:px-6 md:px-12 lg:pt-20" id={'home'}>
            <div className="hero-content flex flex-col-reverse lg:flex-row-reverse items-center gap-10 lg:gap-20">

                <div className="w-full max-w-xs sm:max-w-sm md:max-w-md relative max-sm:order-1">
                    <img
                        src="/tejas-profile.png"
                        className="w-full rounded-lg absolute bottom-[-15%] sm:bottom-[-10%] right-[-5%]"
                        alt="Tejas Profile"
                    />
                    <img src="/chakra.svg" className="w-full relative  z-[-5]" alt="Chakra" />
                </div>

                <div className="text-center lg:text-left mt-10 lg:mt-20 mb-8 lg:mb-10 w-full">
                    <h2 className="text-[#800000] text-lg sm:text-xl lg:text-2xl font-medium font-sans py-1">
                        <span>YOGA INSTRUCTOR</span> <br />
                        <span>SOCIAL WORKER | GUIDE</span>
                    </h2>
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold font-serif text-[#800000] py-2">
                        TEJAS V. GOTARKAR
                    </h1>
                    <p className={'text-[#800000] text-[lg] font-sans font-semibold'}>
                        <span className={'text-3xl'}>12+</span> Years of Experience in Yoga,<br/>
                        BE, DYNS, MA (Yogsgashastra),<br/>
                        Patanjali Yogpeeth Certified<br/>

                    </p>
                    <button className="btn bg-[#800000] text-amber-100 rounded-md border-none mt-3">
                        Contact
                    </button>
                    <div className="flex justify-center lg:justify-start gap-3 mt-5">

                        <Link href={'https://www.instagram.com/yogacharya_tejas/'} >
                            <Image className="w-6 cursor-pointer" src={icons.instagram} alt="Instagram" />
                        </Link>

                        <Link href={'https://www.youtube.com/channel/UCi8ADSm9XMdo_KK6RQkSXeA'}>
                            <Image className="w-6 cursor-pointer" src={icons.youtube} alt="YouTube" />
                        </Link>

                        <Link href={'https://www.facebook.com/tejas.gotarkar.7/'} >
                            <Image className="w-6 cursor-pointer" src={icons.facebook} alt="Facebook" />
                        </Link>


                    </div>
                </div>

            </div>
        </div>

            )
            }
            export default Hero
