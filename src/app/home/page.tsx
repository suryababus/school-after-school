import { AboutUs } from "@/components/home/about-us";
import ActivityAnnouncementWidget from "@/components/home/activity-announcement";
import { ContactUs } from "@/components/home/contact-us";
import { Gallary } from "@/components/home/gallary";
import DataWidget from "@/components/home/data-widget";
import Graph from "@/components/home/graph";
import { MainCarousel } from "@/components/home/main-carousel";
import { NavBar } from "@/components/home/nav-bar";
import { OurWork } from "@/components/home/our-work";
import { Testimonials } from "@/components/home/testimonial";

export default function Home() {
  return (
    <div className="w-screen overflow-hidden text-blue-700">
      <NavBar />

      <MainCarousel />

      {/* <ActivityAnnouncementWidget /> */}
      {/* <DataWidget /> */}

      <OurWork />
      <Testimonials />
      <AboutUs />
      <Gallary />
      <ContactUs />
    </div>
  );
}
