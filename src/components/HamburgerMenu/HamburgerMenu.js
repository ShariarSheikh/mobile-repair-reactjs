import React, { useEffect, useState } from "react";
import { AiOutlineBell, AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { totalServicesList } from "../../products";
import { DropdownCart, DropdownProfileMenu } from "../../utils/Dropdown/Index";

const HamburgerMenu = ({ openMenu }) => {
  const [openService, setOpenService] = useState(false);

  const { user } = useSelector((state) => state.user);
  const history = useHistory();

  useEffect(() => {
    if (openMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [openMenu]);

  const handleLink = (text) => {
    if (text === "services") {
      setOpenService((prevState) => !prevState);
    } else {
      history.push(`/${text}`);
    }
  };

  return (
    <div
      className={`relative w-full nav_bg ${
        openMenu ? `min-h-screen h-auto block` : `h-0 hidden`
      } z-50 transition delay-150 duration-300 ease-in-out`}
    >
      <div
        className={`relative w-full overflow-y-scroll ${
          openMenu ? `h-screen` : `h-0 `
        } z-50 transition delay-150 duration-300 ease-in-out`}
      >
        <ul className="w-full h-auto p-0 mt-16 text-center">
          <div className="w-full flex flex-row items-center justify-center mb-8">
            {user && (
              <>
                <div className="cursor-pointer flex flex-row items-center text-white font-medium rounded ">
                  <AiOutlineBell className="text-white mr-6 w-6 h-6 cursor-pointer text-lg" />
                </div>
                {/* shopping cart icon */}
                <div>
                  <DropdownCart AiOutlineShoppingCart={AiOutlineShoppingCart} />
                </div>
                <div className="ml-6 cursor-pointer flex flex-row items-center">
                  <DropdownProfileMenu
                    img={
                      "https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                    }
                  />
                </div>
              </>
            )}
          </div>

          <li
            className="text-3xl cursor-pointer mb-6 text-gray-300 uppercase font-semibold font-roboto"
            onClick={() => handleLink("stores")}
          >
            Stores
          </li>
          <li
            className="text-3xl cursor-pointer mb-6 text-gray-300 uppercase font-semibold font-roboto"
            onClick={() => handleLink("services")}
          >
            Services
          </li>
          <ServiceList openService={openService} />
          <li
            className="text-3xl cursor-pointer mb-6 text-gray-300 uppercase font-semibold font-roboto"
            onClick={() => handleLink("aboutus")}
          >
            About Us
          </li>
          <li
            className="text-3xl cursor-pointer mb-6 text-gray-300 uppercase font-semibold font-roboto"
            onClick={() => handleLink("contactus")}
          >
            Contact Us
          </li>
          <li
            className="text-3xl cursor-pointer mb-6 text-gray-300 uppercase font-semibold font-roboto"
            onClick={() => handleLink("support")}
          >
            Support
          </li>

          {!user && (
            <>
              <div
                onClick={() => history.push("/login")}
                className="cursor-pointer  text-3xl text-gray-300 rounded uppercase font-semibold font-roboto mb-6"
              >
                LogIn
              </div>
              <div
                onClick={() => history.push("/signup")}
                className=" cursor-pointer text-3xl text-gray-300 uppercase font-semibold font-roboto"
              >
                Register
              </div>
            </>
          )}

          <li className="relative top-10">
            <p className="text-white pb-5 text-base">
              Copyright © <b>Dev.S</b>
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HamburgerMenu;

const ServiceList = ({ openService }) => {
  const history = useHistory();

  return (
    <ul
      className={`w-full bg-gray-700 transition transform duration-200 overflow-hidden ${
        openService ? "h-auto" : "h-0"
      }`}
    >
      {totalServicesList.map(({ id, device, category }) => (
        <li
          onClick={() =>
            history.push(
              `${category === "tools" ? `/gadgets` : `/services/${category}`}`
            )
          }
          className="text-gray-300 text-xl font-roboto mb-2 py-3 cursor-pointer uppercase"
          key={id}
        >
          {device}
        </li>
      ))}
    </ul>
  );
};
