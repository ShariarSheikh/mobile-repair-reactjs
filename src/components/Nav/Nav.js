import React, { useState } from "react";
import styles from "../../styles/components/nav.module.css";
import logo from "../../images/lime-274.png";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import { Link, useHistory } from "react-router-dom";
import { AiOutlineShoppingCart, AiOutlineSearch } from "react-icons/ai";
import { RiArrowDropDownFill } from "react-icons/ri";
import { IoPersonCircleOutline } from "react-icons/io5";
import { ServicesList } from "./servicesList/ServicesList";

const Nav = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const history = useHistory();

  const pushToSignup = () => {
    history.push("/signup");
  };
  const pushToLogin = () => {
    history.push("/login");
  };

  return (
    <nav className="fixed z-50 w-full h-20">
      <div
        id={styles.nav_container}
        className=" relative h-full flex justify-between flex-row items-center  "
      >
        <Link to="/">
          {/* logo div */}
          <div className="relative flex flex-row items-center h-full">
            <img className={styles.nav_logo} src={logo} alt="logo" />
            <h1 className={styles.text_logo}>MobileRepair</h1>
          </div>
        </Link>
        {/* menu HamburgerMenu icon */}
        <div className="md:hidden">
          <div
            id={styles.nav_icon3}
            className={openMenu ? styles.open : ""}
            onClick={() => setOpenMenu(!openMenu)}
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        {/* navigation links */}
        <div className="hidden md:block h-full">
          <ul className="p-0 flex flex-row h-full items-center">
            <Link to="/stores">
              <li className="font-normal mr-5 text-lg text-white cursor-pointer">
                Stores
              </li>
            </Link>
            <div id={styles.services_link} className="">
              <li className="h-full hover:bg-blue-800 pl-2 font-normal mr-5 text-lg text-white cursor-pointer flex flex-row items-center">
                Services{" "}
                <div>
                  {" "}
                  <RiArrowDropDownFill className="text-white mt-1 text-xl" />{" "}
                </div>
              </li>
              <div id={styles.serviceList_div}>
                <ServicesList />
              </div>
            </div>
            <Link to="/aboutus">
              <li className="font-normal mr-5 text-lg text-white cursor-pointer">
                About Us
              </li>
            </Link>
            <Link to="/contactus">
              <li className="font-normal mr-5 text-lg text-white cursor-pointer">
                Contact Us
              </li>
            </Link>
            <Link to="/Support">
              <li className="font-normal mr-5 text-lg text-white cursor-pointer">
                Support
              </li>
            </Link>
          </ul>
        </div>
        {/* // */}
        <div className="relative flex flex-row items-center">
          <div
            id={styles.search_div}
            className=" relative flex flex-row items-center border border-indigo-600 rounded mr-4"
          >
            <AiOutlineSearch className="absolute -left-0 ml-2 text-gray-200  text-xl cursor-pointer" />
            <input
              className="pl-3 ml-4 bg-transparent pt-2 pb-2 focus:outline-none text-white text-sm"
              type="text"
              placeholder="Search Your Store"
            />
          </div>
          <div>
            <AiOutlineShoppingCart className="text-white mr-4 text-2xl cursor-pointer" />
          </div>
          <div
            onClick={pushToLogin}
            className="cursor-pointer flex flex-row items-center text-white font-medium rounded"
          >
            <IoPersonCircleOutline className="text-white mr-1 text-lg" />
            LogIn
          </div>
          <div
            onClick={pushToSignup}
            className="ml-4 cursor-pointer flex flex-row items-center text-white font-medium rounded outline-none"
          >
            Register
          </div>
        </div>
      </div>
      <HamburgerMenu openMenu={openMenu} />
    </nav>
  );
};

export default Nav;
