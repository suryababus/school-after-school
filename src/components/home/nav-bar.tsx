"use client";
import React from "react";

// add images as the carousel items background
// images are from public/
// use next/image to optimize images

const NavBarItems = [
  {
    name: "Home",
    link: "home",
  },
  {
    name: "Our Work",
    link: "our-work",
  },
  {
    name: "Testimonials",
    link: "testimonials",
  },
  {
    name: "About Us",
    link: "about-us",
  },
  {
    name: "Gallery",
    link: "gallary",
  },
];

export const NavBar = () => {
  const [route, setRoute] = React.useState("/");

  const handleRoute = (route: string) => {
    setRoute(route);
    scrollToElement(route);
  };

  const scrollToElement = (element: string) => {
    document.getElementById(element)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed h-0 flex w-full justify-center items-center z-20">
      <div className="bg-white flex flex-row mt-32 z-10 rounded-xl overflow-hidden shadow-xl">
        {NavBarItems.map((item, index) => {
          return (
            <div
              key={item.link}
              className={`p-2 border-orange-500 ${
                route === item.link ? "border-b-4" : ""
              }`}
            >
              <div
                key={index}
                onClick={() => handleRoute(item.link)}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer "
              >
                {item.name}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
