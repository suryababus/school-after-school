import { MainCarousel } from "@/components/home/main-carousel";
import { NavBar } from "@/components/home/nav-bar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <NavBar />
      <MainCarousel />
    </>
  );
}
