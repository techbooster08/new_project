import React from 'react'

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
                    I am a passionate yoga instructor, devoted social worker, and spiritual guide with over 12 years of experience in helping individuals discover harmony in mind, body, and soul. My journey has been rooted in the belief that true well-being comes from within, and I strive to inspire others to embrace a more conscious and balanced lifestyle.
                </p>


            </div>
        </section>
    )
}

export default About
