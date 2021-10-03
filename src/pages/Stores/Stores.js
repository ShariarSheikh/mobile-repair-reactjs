import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";
import { allStoresLocations } from "../../products";
import LocationsFeed from "./components/LocationsFeed";
import StoresHero from "./components/StoresHero";

const Stores = () => {
  const [data, setData] = useState([]);

  const history = useHistory();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const store = searchParams.get("store");

  useEffect(() => {
    if (store) {
      const findStore = allStoresLocations.filter(
        (location) =>
          location.location.toLocaleLowerCase() === store.toLowerCase()
      );
      setData(findStore);
      console.log("run");
    } else {
      setData(allStoresLocations);
    }
  }, [store]);

  return (
    <div
      className={`relative w-full ${
        data.length ? "bg-gradient-to-t from-black via-blue-900" : "bg-white"
      } to-transparent pb-11`}
    >
      {data.length ? (
        <>
          <StoresHero />
          <LocationsFeed data={data} />
        </>
      ) : (
        <div className="relative w-full u-p-h flex flex-col justify-center items-center">
          <img
            className="h-72 object-contain w-80"
            src="https://cdn.dribbble.com/users/1218631/screenshots/3818393/media/2907281eae03fac6e9f5b99ad597bf13.gif"
            alt="not found location"
          />
          <h2 className="text-black text-5xl">
            No Store Found at this location
            <span className="text-blue-600"> {store}</span>
          </h2>
          <p
            className="text-gra-600 cursor-pointer mt-6 font-roboto font-semibold"
            onClick={() => history.goBack()}
          >
            Go back
          </p>
        </div>
      )}
    </div>
  );
};

export default Stores;
