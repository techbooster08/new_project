import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import YogaCarousel from "@/app/components/YogaCarousel";
import SocialWorkSlider from "@/app/components/SocialWorkSlider";
import Gallery from "@/app/components/Gallery";
import Contact from "@/app/components/Contact";
import Footer from "@/app/components/Footer";
import TestimonialSlider from "@/app/components/TestimonialSlider";

export default function Home() {
  return (
    <>
        <header className={'bg-[#FFE3AA]'}>
            <Navbar />
        </header>
        <main className={'bg-[#FDF7E4]'}>
            <section className="bg-[#FFE3AA] mb-5">
                <Hero />
            </section>
            <About/>
            <YogaCarousel />
            <SocialWorkSlider />
            <Gallery />
            <TestimonialSlider />
            <Contact />
        </main>
        <Footer />

    </>
  );
}
