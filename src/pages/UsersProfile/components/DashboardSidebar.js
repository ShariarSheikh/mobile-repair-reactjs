import React, { useEffect, useState } from "react";
import { AiOutlineHome, AiOutlineSetting } from "react-icons/ai";
import { useHistory } from "react-router-dom";

const DashboardSidebar = () => {
  const [active, setActive] = useState(true);
  const history = useHistory();

  return (
    <div className="flex border-b border-gray-100">
      <ul className="p-0 w-full relative flex flex-row items-center mt-6">
        <li
          onClick={() => history.push("/profile")}
          className={`w-full list-none text-gray-600 hover:bg-gray-200 pt-4 pb-4
           flex justify-center  cursor-pointer hover:text-blue-900 ${
             active ? "bg-gray-200" : ""
           }`}
        >
          <AiOutlineHome className="text-2xl" />
        </li>
        <li
          onClick={() => history.push("/profile/setting")}
          className={`w-full list-none text-gray-600 hover:bg-gray-200 pt-4 pb-4
           flex justify-center  cursor-pointer hover:text-blue-900 ${
             !active ? "bg-gray-200" : ""
           }`}
        >
          <AiOutlineSetting className="text-2xl" />
        </li>
      </ul>
    </div>
  );
};

export default DashboardSidebar;
