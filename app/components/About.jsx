// import React from 'react'
//
// const About = () => {
//     return (
//         <div className={'p-7'}>
//             <h2 className={'text-2xl sm:text-3xl lg:text-4xl font-semibold font-serif text-[#800000] py-2'}>
//                 About
//             </h2>
//             <p className={"text-[#4E342E] text-[16px]"}>
//                 I am a passionate yoga instructor, devoted social worker, and spiritual guide with over 15 years of experience in helping individuals discover harmony in mind, body, and soul.
//             </p>
//             <p className={'text-[#4E342E] text-[16px] mt-5'}>
//                 My journey has been rooted in the belief that true well-being comes from within, and I strive to inspire others to embrace a more conscious and balanced lifestyle.
//             </p>
//         </div>
//     )
// }
// export default About



import React from 'react'
import Image from 'next/image'

const About = () => {
    return (
        <section id="about" className="min-h-  flex flex-col lg:flex-row items-center justify-center px-6 lg:px-20 py-10  text-white">

            {/* Left - Image */}
            <div className="w-full lg:w-1/2 flex justify-center mb-10 lg:mb-0">
                <img
                    src="/yoga-about-sec.avif"
                    alt="Developer working illustration"
                    width={300}
                    height={300}
                    className="rounded-full"
                />
            </div>

            {/* Right - Text */}
            <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
                <div>
                    <h2 className="text-3xl font-bold text-[#800000] font-serif">About Me</h2>
                </div>

                <p className="text-[#4E342E]">
                    I am a passionate yoga instructor, devoted social worker, and spiritual guide with over 15 years of experience in helping individuals discover harmony in mind, body, and soul. My journey has been rooted in the belief that true well-being comes from within, and I strive to inspire others to embrace a more conscious and balanced lifestyle.
                </p>

                {/*/!* Resume Button *!/*/}
                {/*<div>*/}
                {/*    <a*/}
                {/*        href=""*/}
                {/*        download*/}
                {/*        className="inline-block px-6 py-3 bg-sky-600 hover:bg-sky-300 hover:text-sky-900 text-white rounded-lg font-medium transition duration-300"*/}
                {/*    >*/}
                {/*        View Research Publications 📄*/}
                {/*    </a>*/}
                {/*</div>*/}
            </div>
        </section>
    )
}

export default About
