import React from "react";
import styles from "../../../styles/components/WhyUs.module.css";

import premium from "../../../images/whyus/premium.jpg";
import skilledTec from "../../../images/whyus/skilledtechnicians.jpg";
import instant from "../../../images/whyus/instant.png";
import GuaranteedSafety from "../../../images/whyus/GuaranteedSafety.png";
import protection from "../../../images/whyus/protection.png";
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
    <div className={styles.whyUs}>
      <h1 className="text-3xl text-start font-bold mb-5 text-blue-300 flex items-center">
        Why Us{" "}
        <p className="text-sm text-gray-700 hover:text-blue-300  cursor-pointer ml-5 self-end hover:underline">
          And How We Works
        </p>{" "}
      </h1>
      <div className={styles.whyUs_container}>
        {whyUsCart.map((card) => (
          <div
            key={card.id}
            id={styles.whyusCard}
            className="flex flex-row items-center justify-start"
          >
            <div className="w-2/6 flex items-center justify-center">
              <img className={styles.whyusImg} src={card.photo} alt="logo" />
            </div>
            <div className="w-3/5">
              <h1 className="text-gray-700 font-medium text-lg">
                {card.title}
              </h1>
              <p className="text-gray-500 text-sm">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyUs;
