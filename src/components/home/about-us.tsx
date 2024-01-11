import Image from "next/image";
import React from "react";

const aboutUsData = [
  {
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.",
    image: "/school1.jpeg",
  },
  {
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.",
    image: "/school2.jpeg",
  },
];

export const AboutUs: React.FC = () => {
  return (
    <div
      id="about-us"
      className="flex flex-col justify-center items-center bg-blue-50 pb-4 px-24"
    >
      <div className="text-3xl m-10 font-bold">About Us</div>
      <div className="flex flex-col gap-20">
        {aboutUsData.map((item, index) => (
          <div
            key={index}
            className={`md:flex block m-3 md:m-0 gap-20 md:ml-20 md:mr-20 justify-around ${
              index % 2 !== 0 ? "flex-row" : "flex-row-reverse"
            }`}
          >
            <div className="flex-1 rounded-xl overflow-hidden drop-shadow-2xl">
              <img
                src={item.image}
                alt="About Us"
                className="object-cover w-full h-[120]"
              />
            </div>
            <div className="flex-1 mt-3 md:mt-0">
              <div className="bg-orange-500 h-2 w-20 mb-2" />
              <p className="text-lg font-light text-gray-500">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
