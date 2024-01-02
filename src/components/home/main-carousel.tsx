"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { IconContext } from "react-icons";
import { FaRegCircleLeft, FaRegCircleRight } from "react-icons/fa6";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { Button } from "../ui/button";

// add images as the carousel items background
// images are from public/
// use next/image to optimize images

export const MainCarousel = () => {
  return (
    <>
      <div className="flex items-center h-16 bg-orange-500 pl-2">
        <Image src="/logo.png" alt="logo" height={100} width={50} />
      </div>
      <div className="flex flex-row absolute w-full aspect-[2.5] z-10">
        <div className="flex justify-center items-center p-10">
          <IconContext.Provider value={{ color: "white", size: "32px" }}>
            <FaRegCircleLeft />
          </IconContext.Provider>
        </div>
        <div className="flex flex-1  items-center">
          <div>
            <div>
              <div>
                <span className="text-orange-500 text-5xl pr-8">School</span>
                <span className="text-5xl text-black">After</span>
              </div>
              <div className="text-orange-500 text-5xl pr-8">School</div>
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
                  filter: "brightness(80%)",
                }}
              ></div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </>
  );
};
