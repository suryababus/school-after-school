import React from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const Gallary = () => {
  return (
    <div id="gallary" className="flex flex-col items-center justify-center">
      <div className="text-3xl mt-10 font-bold">Gallery</div>
      <div className="p-10">
        <Carousel
          opts={{
            align: "start",
          }}
        >
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="basis-1/4">
                <img
                  src={`/school${index + 1}.jpeg`}
                  alt="About Us"
                  className="object-cover w-96 h-48"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext className="mr-8" />
          <CarouselPrevious className="ml-8" />
        </Carousel>
      </div>
    </div>
  );
};
