import React from "react";
import headerBg from "../../../images/headerBg.png"
import styles from "../../../styles/components/HeroTop.module.css";

const HeroTop = () => {
  return (
    <div className={styles.home_hero}>
      <div
        className="flex flex-col lg:flex-row-reverse justify-around"
        id={styles.homeHeader}
      >
        <div className="overflow-hidden lg:w-2/5 relative w-full flex justify-center items-center">
          <div id={styles.img_container}>
            <img
              id={styles.headerImg}
              className="w-full"
              src={headerBg}
              alt="headerBg"
            />
          </div>
        </div>
        <div className="lg:w-3/5 relative w-full flex justify-center items-center flex-col">
          <div>
            <h1 className="font-bold text-gray-50 text-6xl">
              We are the largest mobile
              <br /> repairing team in
              <br /> Bangladesh
            </h1>
            <p className="text-gray-200 text-xl mt-9 font-normal">
              It is a long established fact that a reader <br /> will be
              distracted by the readable content of.
            </p>
            <button className="border border-indigo-600 text-white font-medium mt-6 pr-6 pl-6 pt-3 pb-3 rounded outline-none">
              Ours Services
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroTop;
