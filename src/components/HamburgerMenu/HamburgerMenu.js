import React, { useEffect } from "react";
import { AiOutlineBell, AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { DropdownCart, DropdownProfileMenu } from "../../utils/Dropdown/Index";

const HamburgerMenu = ({ openMenu }) => {
  const { user } = useSelector((state) => state.user);
  const history = useHistory();

  useEffect(() => {
    if (openMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [openMenu]);

  return (
    <div
      className={`fixed w-full nav_bg ${
        openMenu ? `h-full block` : `h-0 hidden`
      } z-50 transition delay-150 duration-300 ease-in-out`}
    >
      <div
        className={`relative w-full  ${
          openMenu ? `h-full opacity-100` : `h-0 opacity-0`
        } z-50 flex justify-center items-start transition delay-150 duration-300 ease-in-out`}
      >
        <ul className="p-0 mt-16 text-center ">
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
            className="text-3xl cursor-pointer mb-6  text-white"
            onClick={() => history.push("/stores")}
          >
            Stores
          </li>
          <li
            className="text-3xl cursor-pointer mb-6  text-white"
            onClick={() => history.push("/services")}
          >
            Services
          </li>
          <li
            className="text-3xl cursor-pointer mb-6  text-white"
            onClick={() => history.push("/aboutus")}
          >
            About Us
          </li>
          <li
            className="text-3xl cursor-pointer mb-6  text-white"
            onClick={() => history.push("/contactus")}
          >
            Contact Us
          </li>
          <li
            className="text-3xl cursor-pointer mb-6  text-white"
            onClick={() => history.push("/support")}
          >
            Support
          </li>

          {!user && (
            <>
              <div
                onClick={() => history.push("/login")}
                className="cursor-pointer  text-3xl text-white rounded mb-6"
              >
                LogIn
              </div>
              <div
                onClick={() => history.push("/signup")}
                className=" cursor-pointer text-3xl mb-6 text-white "
              >
                Register
              </div>
            </>
          )}

          <div className="absolute bottom-20">
            <p className="text-white pb-5 text-base">
              Copyright © <b>Dev.S</b>
            </p>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default HamburgerMenu;
