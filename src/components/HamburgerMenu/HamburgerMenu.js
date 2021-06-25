import React from "react";

const HamburgerMenu = ({ openMenu }) => {
  return (
    <div
      className={`fixed w-full bg-white ${
        openMenu ? `h-full block` : `h-0 hidden`
      } z-30 transition delay-150 duration-300 ease-in-out`}
    >
      <div
        className={`relative w-full  ${
          openMenu ? `h-full opacity-100` : `h-0 opacity-0`
        } z-30 flex justify-center items-start transition delay-150 duration-300 ease-in-out`}
      >
        <ul className="p-0 mt-10 text-center">
          <li className="text-3xl cursor-pointer mb-6 font-bold text-indigo-600">
            Home
          </li>
          <li className="text-3xl cursor-pointer mb-6 font-bold">Services</li>
          <li className="text-3xl cursor-pointer mb-6 font-bold">About Us</li>
          <li className="text-3xl cursor-pointer mb-6 font-bold">Contact Us</li>
          <li className="text-3xl cursor-pointer mb-6 font-bold">Help</li>
          <button className="mt-16 bg-indigo-600 text-white font-medium pr-10 pl-10 pt-3 pb-3 rounded outline-none">
            LogIn
          </button>
          <div className="absolute bottom-20">
            <p>Copyright © <b>Dev.S</b></p>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default HamburgerMenu;
