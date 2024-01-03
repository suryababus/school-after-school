import { AboutUs } from "@/components/home/about-us";
import { ContactUs } from "@/components/home/contact-us";
import { MainCarousel } from "@/components/home/main-carousel";
import { NavBar } from "@/components/home/nav-bar";
import { Testimonials } from "@/components/home/testimonial";

export default function Home() {
  return (
    <>
      <NavBar />
      <MainCarousel />
      <Testimonials />
      <AboutUs />
      <ContactUs />
    </>
  );
}
