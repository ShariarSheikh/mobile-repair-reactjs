import React from "react";
import { AiFillHome, AiFillSetting } from "react-icons/ai";
import { GiAutoRepair } from "react-icons/gi";
import { MdRateReview } from "react-icons/md";
import { useHistory } from "react-router-dom";
import styles from "../../../styles/components/DashboardSidebar.module.css";

const DashboardSidebar = () => {
  const history = useHistory();
  return (
    <div className="flex flex-col" id={styles.DashboardSidebar}>
      <ul className="p-0 w-full relative flex flex-col items-center mt-6">
        <li
          onClick={() => history.push("/profile")}
          className="w-full list-none text-gray-600 hover:bg-gray-200 pt-4 pb-4 flex justify-center  cursor-pointer hover:text-blue-900"
        >
          {" "}
          <AiFillHome className="text-2xl" />{" "}
        </li>
        <li
          onClick={() => history.push("/profile/repair")}
          className="w-full list-none text-gray-600 hover:bg-gray-200 pt-4 pb-4 flex justify-center  cursor-pointer hover:text-blue-900"
        >
          {" "}
          <GiAutoRepair className="text-2xl" />{" "}
        </li>
        <li
          onClick={() => history.push("/profile/makereview")}
          className="w-full list-none text-gray-600 hover:bg-gray-200 pt-4 pb-4 flex justify-center  cursor-pointer hover:text-blue-900"
        >
          {" "}
          <MdRateReview className="text-2xl" />{" "}
        </li>
        <li
          onClick={() => history.push("/profile/setting")}
          className="w-full list-none text-gray-600 hover:bg-gray-200 pt-4 pb-4 flex justify-center  cursor-pointer hover:text-blue-900"
        >
          {" "}
          <AiFillSetting className="text-2xl" />{" "}
        </li>
      </ul>
    </div>
  );
};

export default DashboardSidebar;
