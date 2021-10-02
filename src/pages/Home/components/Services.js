import React from "react";
import camera from "../../../images/camera.png";
import desktop from "../../../images/desktop.png";
import mac from "../../../images/laptop.png";
// totalServicesList img
import phone from "../../../images/mobile.png";
import pcLaptop from "../../../images/pcLaptop.png";
import tablet from "../../../images/tablet.png";

const totalServicesList = [
  {
    id: 1,
    title: "All Brands & Models",
    photo: phone,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 2,
    title: "Skilled Technicians",
    photo: mac,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 3,
    title: "Data Security",
    photo: pcLaptop,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 4,
    title: "Genuine Parts",
    photo: desktop,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 5,
    title: "1 Day Service",
    photo: tablet,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
  },
  {
    id: 6,
    title: "90 Days Warranty",
    photo: camera,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
  },
];

const Services = () => {
  return (
    <div className="w-full 2xl:max-w-7xl xl:max-w-7xl px-6 2xl:px-0 lg:w-full m-auto mt-10 flex flex-col items-start">
      <h1 className="text-2xl text-start font-bold mb-5 text-blue-500">
        Services
      </h1>
      <div className="w-full flex flex-row justify-start flex-wrap">
        {totalServicesList.map((sr) => (
          <div key={sr.id} className="p-5 shadow-md max-w-md sm:w-1/3  w-full mb-5 hover:shadow-sm">
            <div>
              <p className="text-start text-gray-800  text-xl mb-2 font-medium ">
                {sr.title}
              </p>
              <p className="text-start text-gray-800 font-normal">
                {sr.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
