import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { totalServicesList } from "../../products";
import { removeUser } from "../../redux/userSlice/userSlice";

export const DropdownServices = ({ setDropdown }) => {
  return (
    <>
      <div className="z-50 absolute max-w-7xl top-11 mt-9 left-0 rounded bg-blue-800 w-full ">
        <div className="w-full flex flex-row justify-start flex-wrap items-center rounded">
          {totalServicesList.map((service) => (
            <Link
              to={
                service.category === "tools"
                  ? `/gadgets`
                  : `/services/` + service.category
              }
              key={service.id}
            >
              <div
                className="flex flex-col items-center justify-center w-64 h-full p-6 relative hover:bg-blue-700"
                onClick={() => setDropdown((prevState) => !prevState)}
              >
                <div className="cursor-pointer">
                  <h2 className="text-white text-3xl mb-4 border-b border-gray-50 pb-3">
                    {service.device}
                  </h2>
                  <p className="truncate mt-2 text-white">
                    {service.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export const DropdownProfileMenu = ({ img }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const menuRef = useRef(null);
  useEffect(() => {
    isOpenMenu && menuRef.current.focus();
  }, [isOpenMenu]);

  const clickHandler = (text) => {
    text === "Profile" && history.push("/profile");
    text === "Setting" && history.push("/profile/setting");
    text === "Logout" && dispatch(removeUser());
    text === "Logout" && history.push("/");

    setIsOpenMenu(false);
  };
  return (
    <div
      className="text-white relative z-50 "
      onClick={() => setIsOpenMenu(!isOpenMenu)}
      ref={menuRef}
      onBlur={() => setIsOpenMenu(false)}
      tabIndex={0}
    >
      <img
        className="inline object-cover w-10 h-10 mr-2 rounded-full"
        src={img}
        alt="Profile"
      />
      <ul
        className="w-52 rounded-sm text-black absolute right-0 top-14 shadow-lg bg-white pt-2 px-3"
        hidden={!isOpenMenu}
        onClick={(e) => e.stopPropagation()}
      >
        <li className="mb-3" onClick={() => clickHandler("Profile")}>
          Profile
        </li>
        <li className="mb-3" onClick={() => clickHandler("Setting")}>
          Setting
        </li>
        <li className="mb-3" onClick={() => clickHandler("Logout")}>
          Logout
        </li>
      </ul>
    </div>
  );
};

export const DropdownCart = ({ AiOutlineShoppingCart }) => {
  const history = useHistory();

  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const menuRef = useRef(null);
  useEffect(() => {
    isOpenMenu && menuRef.current.focus();
  }, [isOpenMenu]);

  const clickHandler = (text) => {
    history.push("/gadgets/tools");
    setIsOpenMenu(false);
  };
  return (
    <div
      className="text-white relative z-50"
      onClick={() => setIsOpenMenu(!isOpenMenu)}
      ref={menuRef}
      onBlur={() => setIsOpenMenu(false)}
      tabIndex={0}
    >
      <AiOutlineShoppingCart className="text-white mr-4 text-2xl cursor-pointer" />
      <div
        className="w-72 h-52  rounded-sm text-black absolute right-0 top-14 shadow-xl bg-white pt-2 px-3"
        hidden={!isOpenMenu}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full h-full flex items-center justify-center flex-col">
          <p>Looks like your cart is empty</p>
          <h4
            className="text-indigo-500 mt-8 cursor-pointer"
            onClick={clickHandler}
          >
            Browse our store
          </h4>
        </div>
      </div>
    </div>
  );
};
