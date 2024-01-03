"use client";

import React from "react";
import { IconContext } from "react-icons";
import {
  FaRegCircleLeft,
  FaRegCircleRight,
  FaQuoteLeft,
} from "react-icons/fa6";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonialsData = [
  {
    name: "Jenifer",
    designation: "Student, Anna University.",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
    image: "https://github.com/shadcn.png",
  },
  {
    name: "Madhan",
    designation: "Student, Anna University.",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
    image: "https://github.com/shadcn.png",
  },
  {
    name: "Vijay",
    designation: "Director, Hindhusan University.",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
    image: "https://github.com/shadcn.png",
  },
  {
    name: "Jenifer",
    designation: "Student, Anna University.",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
    image: "https://github.com/shadcn.png",
  },
  {
    name: "Madhan",
    designation: "Student, Anna University.",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
    image: "https://github.com/shadcn.png",
  },
  {
    name: "Vijay",
    designation: "Director, Hindhusan University.",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
    image: "https://github.com/shadcn.png",
  },
];

interface TestimonialCardsProps {
  setCarouselApi: (api: CarouselApi) => void;
}

function TestimonialCards(props: TestimonialCardsProps) {
  const { setCarouselApi } = props;

  return (
    <div className="col-span-2">
      <Carousel
        setApi={setCarouselApi}
        opts={{
          align: "start",
        }}
      >
        <CarouselContent>
          {testimonialsData.map((item, index) => (
            <CarouselItem key={index} className="basis-1/2 pb-12">
              <Card className="border-0 shadow-xl m-2 overflow-visible">
                <CardHeader>
                  <IconContext.Provider
                    value={{
                      color: "#525CEB",
                      size: "64px",
                    }}
                  >
                    <FaQuoteLeft />
                  </IconContext.Provider>
                </CardHeader>
                <CardContent>
                  <div className="text-sm font-thin">{item.description}</div>
                </CardContent>
                <CardFooter>
                  <div className="flex row gap-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={item.image} />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-bold">{item.name}</div>
                      <div className="text-xs font-thin">
                        {item.designation}
                      </div>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}

export const Testimonials = () => {
  const [api, setApi] = React.useState<CarouselApi>();

  const setCarouselApi = (api: CarouselApi) => {
    setApi(api);
  };

  const onNext = () => {
    api?.scrollNext();
  };

  const onPrev = () => {
    api?.scrollPrev();
  };

  return (
    <div className="grid grid-cols-3  p-12 pb-0">
      <div className="flex flex-col">
        <div>
          <div className="text-3xl font-bold">Testimonials from</div>
          <div className="text-3xl font-bold mb-4">our members</div>
        </div>
        <div className="text-sm">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem.
        </div>
        <div className="flex gap-4 mt-12">
          <div onClick={onPrev}>
            <IconContext.Provider value={{ color: "#525CEB", size: "32px" }}>
              <FaRegCircleLeft />
            </IconContext.Provider>
          </div>
          <div onClick={onNext}>
            <IconContext.Provider value={{ color: "#525CEB", size: "32px" }}>
              <FaRegCircleRight />
            </IconContext.Provider>
          </div>
        </div>
      </div>
      <TestimonialCards setCarouselApi={setCarouselApi} />
    </div>
  );
};
