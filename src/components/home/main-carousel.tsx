"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { IconContext } from "react-icons";
import { FaRegCircleLeft, FaRegCircleRight } from "react-icons/fa6";
import { FaBookReader } from "react-icons/fa";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "../ui/button";

export const MainCarousel = () => {
  const scrollToElement = (element: string) => {
    document.getElementById(element)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      <div
        id="home"
        className="flex items-center justify-between h-16 bg-orange-500 pl-8 pr-8"
      >
        <IconContext.Provider value={{ color: "white", size: "32px" }}>
          <FaBookReader />
        </IconContext.Provider>
        <div>
          <Button
            className="ml-4"
            onClick={() => scrollToElement("contact-us")}
          >
            CONTACT US
          </Button>
          <Button className="ml-4 bg-blue-600">Donate Us</Button>
        </div>
      </div>
      <div className="flex flex-row absolute w-full aspect-[2.5] z-10">
        <div className="flex justify-center items-center p-10">
          <IconContext.Provider value={{ color: "white", size: "32px" }}>
            <FaRegCircleLeft />
          </IconContext.Provider>
        </div>
        <div className="flex flex-1  items-center">
          <div>
            <div className="p-8 bg-white bg-opacity-80 rounded-xl bg-blur-lg">
              <div>
                <span className="text-orange-500 text-7xl font-bold pr-8">
                  School
                </span>
                <span className="text-7xl text-black">After</span>
              </div>
              <div className="text-orange-500 font-bold  text-7xl  pr-8">
                School
              </div>
            </div>
            <Button className="mt-8">READ ABOUT US</Button>
          </div>
        </div>
        <div className="flex justify-center items-center p-10">
          <IconContext.Provider value={{ color: "white", size: "32px" }}>
            <FaRegCircleRight />
          </IconContext.Provider>
        </div>
      </div>
      <Carousel
        className="w-full"
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div
                className={`p-1 w-full aspect-[2.5] flex justify-center items-center  bg-center bg-cover`}
                style={{
                  backgroundImage: `url('/school${index + 1}.jpeg')`,
                }}
              ></div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </>
  );
};
