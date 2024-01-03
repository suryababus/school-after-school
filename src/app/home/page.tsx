import { AboutUs } from "@/components/home/about-us";
import { ContactUs } from "@/components/home/contact-us";
import { MainCarousel } from "@/components/home/main-carousel";
import { NavBar } from "@/components/home/nav-bar";

export default function Home() {
  return (
    <>
      <NavBar />
      <MainCarousel />
      <AboutUs />
      <ContactUs />
    </>
  );
}
