    "use client";
    import React,{useState} from "react";
    import Link from "next/link";
    import ReCAPTCHA from "react-google-recaptcha";

    const Contact = () => {
        const [captchaValue, setCaptchaValue] = useState(null);

        const handleCaptchaChange = (value) => {
            setCaptchaValue(value);
            console.log('Captcha value:', value);
        };

        const handleSubmit = (e) => {
            e.preventDefault();
            if (!captchaValue) {
                alert('Please complete the reCAPTCHA!');
                return;
            }
            // Process your form here
            alert('Form submitted successfully!');
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
                                    placeholder="Enter your name"
                                    className="w-full border-[#800000] border-2 text-gray-800 focus:text-[#800000] px-4 py-2 rounded outline-none "
                                />
                            </div>
                            <div>
                                <label className="block text-md mb-1 text-[#4E342E]">Email</label>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full border-[#800000] border-2 focus:text-[#800000] text-gray-800 px-4 py-2 rounded outline-none "
                                />
                            </div>
                            <div>
                                <label className="block text-md mb-1 text-[#4E342E]">Message</label>
                                <textarea
                                    rows="5"
                                    placeholder="Your message"
                                    className="w-full border-[#800000] border-2 focus:text-[#800000] text-gray-800 px-4 py-2 rounded resize-none outline-none "
                                ></textarea>
                            </div>
                            <ReCAPTCHA
                                sitekey="6LeVhZArAAAAAILN3F8vn8a4OsZKS3ScelcKg9RK"
                                onChange={handleCaptchaChange}
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