import React, { useState } from "react";
import { useHistory } from "react-router";
import findLocation from "../../../images/findLocation.svg";
import styles from "../../../styles/components/StoresHero.module.css";

const StoresHero = () => {
  const [search, setSearch] = useState("");
  const history = useHistory();

  const searchHandler=() => {
      search && history.push(`/stores?store=${search}`);
  }
  return (
    <div id={styles.StoresHero} className="flex flex-row justify-between">
      <div className="p-10 mt-10">
        <h1 className="text-5xl font-bold text-gray-300 mb-4">
          Find your stores <br /> In your location{" "}
        </h1>
        <p className="text-gray-300 font-medium">
          Lorem ipsum dolor sit amet, consectetur Lorem ipsum <br /> dolor sit
          amet, consectetur
        </p>
        <div className="flex items-center mt-6">
          <input
            type="text"
            placeholder="Search your location"
            className="mr-5 pl-2 border-b mt-3 pb-2 pt-2 outline-none text-gray-500"
            value={search}
            onChange={(e)=> setSearch(e.target.value)}
          />
          <button className="mt-3 pr-5 pl-5 pt-2 pb-2 bg-indigo-600 text-white rounded " onClick={searchHandler}>
            Find
          </button>
        </div>
      </div>
      {/* location container start */}
      <div className=" relative flex h-full items-center justify-center ml-20">
        <div className="w-full h-full">
          <img id={styles.search_img} src={findLocation} alt="find locations" />
        </div>
      </div>
      {/* location container end */}
    </div>
  );
};

export default StoresHero;
