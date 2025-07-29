    "use client";
    import React, {useEffect, useRef, useState} from "react";
    import HCaptcha from '@hcaptcha/react-hcaptcha';
    import Link from "next/link";


    const Contact = () => {
        const [isClient, setIsClient] = useState(false);
        const hcaptaRef = useRef("");
        const [token, setToken] = useState("");

        const handleSubmit = async (e) => {
            e.preventDefault();
            if (!token) {
                alert("Please verify that you are not a robot");
                return;
            }
            const formData = new FormData(e.target);

            formData.append("access_key", "0101a584-929a-41e1-978a-2a2f24f049ff");
            // formData.append('h-captcha-response', token);

            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                alert("Form Submitted Successfully");
                e.target.reset();
            } else {
                console.log("Error", data);
                alert("Error Submitting Form");
            }
        };


        return (
            <section className="  py-12 bg-[#FFE3AA] px-6 md:px-20" id="contact">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10">
                    {/* Left - Contact Info */}
                    <div className="flex-1 space-y-6">
                        <h2 className="text-3xl font-bold text-[#800000] font-serif">Contact me</h2>
                        <p className="text-[#4E342E] font-semibold pl-1">Get in touch</p>

                        <div className="space-y-4 mt-6 px-2 text-[#4E342E]">
                            <div className="flex items-center gap-4">
                                <i className="fa-brands fa-youtube text-xl text-[#800000]"></i>
                                <div>
                                    <Link href={'https://www.youtube.com/channel/UCi8ADSm9XMdo_KK6RQkSXeA'}>
                                        <h4 className="font-semibold">Youtube</h4>
                                        <p className="text-sm text-gray-800">Tejas Gotarkar, Parivartan Group</p>
                                    </Link>

                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <i className="fab fa-instagram text-xl text-[#800000]"></i>
                                <div>
                                    <Link href={'https://www.instagram.com/tejasgotarkar_yogacharya'}>
                                        <h4 className="font-semibold">Instagram</h4>
                                        <p className="text-sm text-gray-800">@tejasgotarkar_yogacharya</p>
                                    </Link>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <i className="fab fa-facebook text-xl text-[#800000]"></i>
                                <div>
                                    <Link href={'https://www.facebook.com/tejas.gotarkar.7/'}>
                                        <h4 className="font-semibold">Facebook</h4>
                                        <p className="text-sm text-gray-800">tejas.gotarkar.7</p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right - Contact Form */}
                    <div className="flex-1">
                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <div>
                                <label className="block text-md mb-1 text-[#4E342E]">Name</label>
                                <input
                                    type="text"
                                    name={'name'}
                                    placeholder="Enter your name"
                                    className="w-full border-[#800000] border-2 text-gray-800 focus:text-[#800000] px-4 py-2 rounded outline-none "
                                />
                            </div>
                            <div>
                                <label className="block text-md mb-1 text-[#4E342E]">Email</label>
                                <input
                                    type="email"
                                    name={'email'}
                                    placeholder="Enter your email"
                                    className="w-full border-[#800000] border-2 focus:text-[#800000] text-gray-800 px-4 py-2 rounded outline-none "
                                />
                            </div>
                            <div>
                                <label className="block text-md mb-1 text-[#4E342E]">Message</label>
                                <textarea
                                    rows="5"
                                    name={'message'}
                                    placeholder="Your message"
                                    className="w-full border-[#800000] border-2 focus:text-[#800000] text-gray-800 px-4 py-2 rounded resize-none outline-none "
                                ></textarea>
                            </div>

                            <HCaptcha
                                sitekey={"1edef36c-d866-4718-a9e8-950c336a293e"}
                                onVerify={setToken}
                                ref={hcaptaRef}
                            />

                            <button
                                type={'submit'}
                                className="bg-[#800000] hover:bg-[#a00000] text-white px-6 py-2 rounded font-semibold transition"
                            >
                                Send Message
                            </button>

                        </form>
                    </div>
                </div>
            </section>
        );
    };

    export default Contact;