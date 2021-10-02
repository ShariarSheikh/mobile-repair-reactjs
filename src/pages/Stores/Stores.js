import React from "react";
import { useLocation } from "react-router";
import LocationsFeed from "./components/LocationsFeed";
import StoresHero from "./components/StoresHero";

const Stores = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const store = searchParams.get("store");

  

  return (
    <div className="relative w-full bg-gradient-to-t from-black via-blue-900 to-transparent pb-11">
      <StoresHero />
      <LocationsFeed/>
    </div>
  );
};

export default Stores;
