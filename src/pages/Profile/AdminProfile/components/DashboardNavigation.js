import { useState } from "react";
import {
  AiOutlineClose,
  AiOutlineHome,
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineSetting,
  AiOutlineUpload,
} from "react-icons/ai";
import { BiMessageSquareDots } from "react-icons/bi";
import { BsListTask } from "react-icons/bs";
import { IoIosAnalytics } from "react-icons/io";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const DashboardNavigation = () => {
  const { user } = useSelector((state) => state.user);
  const [openNav, setOpenNav] = useState(false);

  return (
    <nav className="bg-gray-900 relative w-full max-w-7xl 2xl:px-5 px-5 py-6 lg:w-full m-auto">
      <div className="w-full mx-auto flex flex-wrap items-center mt-0 pt-3 pb-3 md:pb-0">
        {/* header top start */}
        <HeaderTop openNav={openNav} setOpenNav={setOpenNav} user={user} />
        {/* header top bottom */}
        <HeaderBottom />
      </div>
    </nav>
  );
};

export default DashboardNavigation;

const HeaderTop = ({ openNav, setOpenNav, user }) => {
  const { data } = user;

  return (
    <div className="w-full flex justify-between items-center">
      <div className="pl-2 md:pl-0 flex items-center">
        <div
          className="block lg:hidden text-red-500"
          onClick={() => setOpenNav((prevState) => !prevState)}
        >
          {openNav ? (
            <AiOutlineClose className="text-white w-6 h-6" />
          ) : (
            <AiOutlineMenu className="text-white w-6 h-6" />
          )}
        </div>
        <p className="text-gray-100 text-base xl:text-xl no-underline hover:no-underline font-bold">
          Welcome <span className="text-green-500">{data.name}</span>
        </p>
      </div>
      <div className="relative flex flex-row justify-end items-center">
        <div className="flex items-center border border-gray-600 rounded-md pr-2">
          <input
            type="search"
            placeholder="Search"
            className="w-full bg-gray-900 text-sm text-gray-400 transition border-none 
              focus:outline-none focus:border-gray-600 rounded py-1 px-2 pl-2 appearance-none leading-normal"
          />
          <AiOutlineSearch className="text-gray-300" />
        </div>
      </div>
    </div>
  );
};

const navigationLinks = [
  {
    id: 1,
    text: "Home",
    color: "blue-400",
    textColor: "blue-400",
    borderColor: "blue-400",
    hoverTextColor: "gray-100",
    Icon: <AiOutlineHome className="text-blue-400" />,
    link: "",
  },
  {
    id: 2,
    text: "Tasks",
    color: "gray-500",
    textColor: "blue-400",
    borderColor: "pink-400",
    hoverTextColor: "gray-100",
    Icon: <BsListTask className="text-blue-400" />,
    link: "/task",
  },
  {
    id: 3,
    text: "Messages",
    color: "gray-500",
    textColor: "blue-400",
    borderColor: "purple-400",
    hoverTextColor: "gray-100",
    Icon: <BiMessageSquareDots className="text-blue-400" />,
    link: "/messages",
  },
  {
    id: 4,
    text: "Analytics",
    color: "gray-500",
    textColor: "blue-400",
    borderColor: "green-400",
    hoverTextColor: "gray-100",
    Icon: <IoIosAnalytics className="text-blue-400" />,
    link: "/analytics",
  },
  {
    id: 5,
    text: "Upload Data",
    color: "gray-500",
    textColor: "blue-400",
    borderColor: "red-400",
    hoverTextColor: "gray-100",
    Icon: <AiOutlineUpload className="text-blue-400" />,
    link: "/upload-data",
  },
  {
    id: 6,
    text: "Setting",
    color: "gray-500",
    textColor: "blue-400",
    borderColor: "gray-400",
    hoverTextColor: "gray-100",
    Icon: <AiOutlineSetting className="text-blue-400" />,
    link: "/setting",
  },
];

const HeaderBottom = () => {
  return (
    <div
      className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 bg-gray-900 z-20"
      id="nav-content"
    >
      <div className="list-reset lg:flex flex-1 items-center px-4 md:px-0">
        {navigationLinks.map(
          ({
            id,
            text,
            color,
            textColor,
            borderColor,
            hoverTextColor,
            Icon,
            link,
          }) => (
            <NavLink
              activeClassName={`border-${borderColor}`}
              key={id}
              className={`flex flex-row items-center mr-6 my-2 md:my-0 cursor-pointer border-b-2 border-transparent`}
              to={`/admin${link}`}
            >
              {Icon}
              <p
                className={`block py-1 md:py-3 pl-1 align-middle text-${color} no-underline hover:text-${hoverTextColor}`}
              >
                <span className="pb-1 md:pb-0 text-sm">{text}</span>
              </p>
            </NavLink>
          )
        )}
      </div>
    </div>
  );
};
