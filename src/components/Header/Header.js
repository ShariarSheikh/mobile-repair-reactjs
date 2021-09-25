import React, { useState } from "react";
import {
  AiOutlineBell,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { RiArrowDropDownFill } from "react-icons/ri";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import logo from "../../images/lime-274.png";
import styles from "../../styles/components/nav.module.css";
import {
  DropdownProfileMenu,
  DropdownServices,
} from "../../utils/Dropdown/Index";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const history = useHistory();

  return (
    <nav className="z-40 w-full h-20" id="#">
      <div className="max-w-7xl m-auto relative h-full flex justify-between flex-row items-center">
        {/* header left start component(logo) */}
        <div
          className="relative flex flex-row items-center h-full cursor-pointer"
          onClick={() => history.push("/")}
        >
          <img className={styles.nav_logo} src={logo} alt="logo" />
          <h1 className={styles.text_logo}>MobileRepair</h1>
        </div>

        {/* menu HamburgerMenu icon on mobile device */}
        <div className="md:hidden">menu</div>

        {/* navigation links */}
        <HeaderCenter />
        {/* /header right / */}
        <HeaderRight />
      </div>
      <HamburgerMenu openMenu={openMenu} />
    </nav>
  );
};

export default Header;

//header center links component
const HeaderCenter = () => {
  const [dropdown, setDropdown] = useState(false);
  return (
    <div className="hidden md:block h-full">
      <ul className="p-0 flex flex-row h-full items-center">
        <Link to="/stores">
          <li className="font-normal mr-5 text-lg text-white cursor-pointer">
            Stores
          </li>
        </Link>
        <div
          className="h-full"
          onMouseEnter={() => setDropdown((prevState) => !prevState)}
          onMouseLeave={() => setDropdown((prevState) => !prevState)}
        >
          <li className="h-full pl-2 font-normal mr-5 text-lg text-white cursor-pointer flex flex-row items-center">
            Services
            <div>
              <RiArrowDropDownFill className="text-white mt-1 text-xl" />
            </div>
          </li>
          {dropdown && <DropdownServices setDropdown={setDropdown} />}
        </div>
        <li></li>
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
  );
};

//header right component
const HeaderRight = () => {
  const { user } = useSelector((state) => state.user);
  const history = useHistory();

  return (
    <div className="relative flex flex-row items-center">
      {/* search box */}
      <div className=" relative flex flex-row items-center border border-indigo-600 rounded mr-4">
        <AiOutlineSearch className="absolute -left-0 ml-2 text-gray-200  text-xl cursor-pointer" />
        <input
          className="pl-5 ml-4 bg-transparent pt-2 pb-2 focus:outline-none text-white text-sm"
          type="text"
          placeholder="Search Your Store"
        />
      </div>
      {/* shopping cart icon */}
      <div>
        <AiOutlineShoppingCart className="text-white mr-4 text-2xl cursor-pointer" />
      </div>

      {user ? (
        <>
          <div className="cursor-pointer flex flex-row items-center text-white font-medium rounded">
            <AiOutlineBell className="text-white mr-1 w-6 h-6 cursor-pointer text-lg" />
          </div>
          <div className="ml-4 cursor-pointer flex flex-row items-center">
            <DropdownProfileMenu
              img={
                "https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
              }
            />
          </div>
        </>
      ) : (
        <>
          <div
            onClick={() => history.push("/login")}
            className="cursor-pointer flex flex-row items-center text-white font-medium rounded"
          >
            LogIn
          </div>
          <div
            onClick={() => history.push("/signup")}
            className="ml-4 cursor-pointer flex flex-row items-center text-white font-medium rounded outline-none"
          >
            Register
          </div>
        </>
      )}
    </div>
  );
};
