import React from "react";
import GuaranteedSafety from "../../../images/whyus/GuaranteedSafety.png";
import instant from "../../../images/whyus/instant.png";
import premium from "../../../images/whyus/premium.jpg";
import protection from "../../../images/whyus/protection.png";
import skilledTec from "../../../images/whyus/skilledtechnicians.jpg";
import warranty from "../../../images/whyus/warranty.png";

const whyUsCart = [
  {
    id: 1,
    title: "Premium Repair",
    photo: premium,
    description: "lorem ipsum dolor lorem ipsum",
  },
  {
    id: 2,
    title: "Skilled Technicians",
    photo: skilledTec,
    description: "lorem ipsum dolor lorem ipsum",
  },
  {
    id: 3,
    title: "Instant Mobile Repair",
    photo: instant,
    description: "lorem ipsum dolor lorem ipsum",
  },
  {
    id: 4,
    title: "Guaranteed Safety",
    photo: GuaranteedSafety,
    description: "lorem ipsum dolor lorem ipsum",
  },
  {
    id: 5,
    title: "Physical Protection Warranty",
    photo: protection,
    description: "lorem ipsum dolor lorem ipsum",
  },
  {
    id: 6,
    title: "6 Months Warranty",
    photo: warranty,
    description: "lorem ipsum dolor lorem ipsum",
  },
];

const WhyUs = () => {
  return (
    <section className="w-full mt-16">
      <div className="w-full 2xl:max-w-7xl xl:max-w-7xl px-6 2xl:px-0 lg:w-full m-auto">
        {/* header container */}
        <div className="flex w-full justify-between items-center">
          <h1 className="text-2xl text-start font-bold mb-5 text-blue-500 flex ">
            Why Us
          </h1>
          <p className="text-sm text-gray-700 hover:text-blue-300 pr-5 cursor-pointer ml-5 hover:underline">
            And How We Works
          </p>
        </div>

        {/* cart container */}
        <div className="w-full h-full flex justify-between flex-row flex-wrap">
          {whyUsCart.map((card) => (
            <div
              key={card.id}
              className="max-w-md sm:w-1/3 w-full flex flex-col justify-center items-center h-32 bg-white pt-1 pl-3 shadow-md mb-5"
            >
              <div className="w-2/6 flex items-center justify-center">
                <img
                  className="w-12 h-12 rounded-full bg-white object-contain"
                  src={card.photo}
                  alt="logo"
                />
              </div>

              <h1 className="text-gray-700 font-medium text-lg line-clamp-1">
                {card.title}
              </h1>
              <p className="text-gray-500 line-clamp-2">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
