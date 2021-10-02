import React, { useState } from "react";
import {
  AiOutlineBell,
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { RiArrowDropDownFill } from "react-icons/ri";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import logo from "../../images/lime-274.png";
import {
  DropdownCart,
  DropdownProfileMenu,
  DropdownServices,
} from "../../utils/Dropdown/Index";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const history = useHistory();

  return (
    <nav className="z-40 w-full h-20 nav_bg sticky top-0" id="#">
      <div className="w-full 3xl:w-2xl 2xl:w-2xl 2xl:px-5 px-5  lg:w-full m-auto relative h-full flex justify-between flex-row items-center">
        {/* header left start component(logo) */}
        <HeaderLeft
          openMenu={openMenu}
          setOpenMenu={setOpenMenu}
          history={history}
        />
        {/* navigation links show only 1280px */}
        <HeaderCenter />
        {/* /header right show only 1280px/ */}
        <HeaderRight />
      </div>
      <HamburgerMenu openMenu={openMenu} />
    </nav>
  );
};

export default Header;

//header left logo and menu component
const HeaderLeft = ({ openMenu, setOpenMenu, history }) => {
  return (
    <div className="flex items-center">
      {/* menu HamburgerMenu icon on mobile device */}
      <div
        className="xl:hidden text-red-500"
        onClick={() => setOpenMenu((prevState) => !prevState)}
      >
        {openMenu ? (
          <AiOutlineClose className="text-white w-6 h-6" />
        ) : (
          <AiOutlineMenu className="text-white w-6 h-6" />
        )}
      </div>
      <div
        className="relative flex flex-row items-center h-full cursor-pointer"
        onClick={() => history.push("/")}
      >
        <img
          className="w-16 xl:w-24  h-12 object-contain"
          src={logo}
          alt="logo"
        />
        <h1 className="absolute left-14 xl:left-16 text-xl font-bold text-white">
          MobileRepair
        </h1>
      </div>
    </div>
  );
};

//header center links component
const HeaderCenter = () => {
  const [dropdown, setDropdown] = useState(false);
  return (
    <div className="hidden xl:block h-full">
      <ul className="p-0 flex flex-row h-full items-center">
        <Link to="/stores">
          <li className="font-normal mr-5 text-base text-white cursor-pointer">
            Stores
          </li>
        </Link>
        <div
          className="h-full"
          onMouseEnter={() => setDropdown((prevState) => !prevState)}
          onMouseLeave={() => setDropdown((prevState) => !prevState)}
        >
          <li className="h-full pl-2 font-normal mr-5 text-base text-white cursor-pointer flex flex-row items-center">
            Services
            <div>
              <RiArrowDropDownFill className="text-white mt-1 text-xl" />
            </div>
          </li>
          {dropdown && <DropdownServices setDropdown={setDropdown} />}
        </div>
        <Link to="/aboutus">
          <li className="font-normal mr-5 text-base text-white cursor-pointer">
            About Us
          </li>
        </Link>
        <Link to="/contactus">
          <li className="font-normal mr-5 text-base text-white cursor-pointer">
            Contact Us
          </li>
        </Link>
        <Link to="/Support">
          <li className="font-normal mr-5 text-base text-white cursor-pointer">
            Support
          </li>
        </Link>
      </ul>
    </div>
  );
};

//header right component
const HeaderRight = () => {
  const [search, setSearch] = useState("");
  const { user } = useSelector((state) => state.user);
  const history = useHistory();

  const storeSearch = (e) => {
    if (e.keyCode === 13) {
      history.push(`/stores?store=${search}`);
    }
  };
  return (
    <div className="hidden sm:block">
      <div className="relative flex flex-row items-center">
        {/* search box */}
        <div className="hidden md:block">
          <div className="relative w-80 flex flex-row items-center border border-indigo-600 rounded mr-4">
            <AiOutlineSearch className="absolute left-0 ml-2 text-gray-200 text-xl cursor-pointer" />
            <input
              className="pl-5 ml-4 w-full bg-transparent pt-2 pb-2 focus:outline-none text-white text-sm"
              type="text"
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => storeSearch(e)}
              placeholder="Search Your Store"
            />
          </div>
        </div>

        {/* shopping cart icon */}
        <div>
          <DropdownCart AiOutlineShoppingCart={AiOutlineShoppingCart} />
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
    </div>
  );
};
