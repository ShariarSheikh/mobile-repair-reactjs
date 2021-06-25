import React from "react";
import styles from "../../../styles/components/Ourgadgets.module.css";
import GadgetsSlider from "./GadgetsSlider";

//img import for gadgets
import img1 from "../../../images/gadgets/img1.jpg";
import img2 from "../../../images/gadgets/img2.jpg";
import img3 from "../../../images/gadgets/img3.jpg";
import img4 from "../../../images/gadgets/img4.jpg";
import img5 from "../../../images/gadgets/img5.jpg";
import img6 from "../../../images/gadgets/img6.jpg";
import img7 from "../../../images/gadgets/img7.jpg";
import img8 from "../../../images/gadgets/img8.jpg";
import img9 from "../../../images/gadgets/img9.jpg";

const gadgets = [
  {
    id: 1,
    title:
      "GAVIN Battery Back Door Housing Panel Glass with Adhesive Sticker for",
    photo: img1,
    price: 8.99,
  },
  {
    id: 2,
    title:
      "Fashion for iPhone Series Flip Wallet Case Leather Cover Cards Holder for",
    photo: img2,
    price: 5.99,
  },
  {
    id: 3,
    title: "iPhone 5s Home Button with Flex Cable Ribbon Replacement",
    photo: img3,
    price: 4.99,
  },
  {
    id: 4,
    title: "Mobile Cell Phone Screen Opening RepairTools Kit Screw driver Set",
    photo: img4,
    price: 6.99,
  },
  {
    id: 5,
    title: "SIM Card Tray Holder Eject Pin Tool forIphone apple",
    photo: img5,
    price: 1.99,
  },
  {
    id: 6,
    title: "lcd display iphone 7 plus",
    photo: img6,
    price: 3.99,
  },
  {
    id: 7,
    title: "SIM CardTray+ Mico SDCard HolderSlot Replacement for Samsung",
    photo: img7,
    price: 4.99,
  },
  {
    id: 8,
    title: "DIY FIX 8in1 MobilePhone RepairToolsKit Spudger Pry OpeningTool",
    photo: img8,
    price: 2.99,
  },
  {
    id: 9,
    title: "ReplacementLCD DisplayTouch ScreenDigitizer AssemblyFor iPhone",
    photo: img9,
    price: 6.99,
  },
];

const Ourgadgets = () => {
  return (
    <div className={styles.Ourgadgets}>
      {" "}
      <h1 className="text-3xl text-start font-bold mb-5 text-blue-300 flex items-center">
        Gadgets{" "}
        <p className="text-sm text-gray-700 hover:text-blue-300 cursor-pointer ml-5 self-end hover:underline">
          {" "}
          See all{" "}
        </p>
      </h1>
      <div id={styles.Ourgadgets_container} className="relative">
        <GadgetsSlider gadgets={gadgets} />
      </div>
    </div>
  );
};

export default Ourgadgets;
