import { AboutUs } from "@/components/home/about-us";
import { ContactUs } from "@/components/home/contact-us";
import { MainCarousel } from "@/components/home/main-carousel";
import { NavBar } from "@/components/home/nav-bar";
import { OurWork } from "@/components/home/our-work";
import { Testimonials } from "@/components/home/testimonial";

export default function Home() {
  return (
    <>
      <NavBar />
      <MainCarousel />
      <OurWork />
      <Testimonials />
      <AboutUs />
      <ContactUs />
    </>
  );
}
