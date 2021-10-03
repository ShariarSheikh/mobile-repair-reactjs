import React from "react";
import { StoreCart } from "../../../utils/Carts/Index";

const LocationsFeed = ({ data }) => {
  return (
    <div className="max-w-7xl m-auto">
      <div className="mt-16 w-full flex flex-wrap justify-center">
        {data?.map((loc) => (
          <StoreCart key={loc.id} location={loc} />
        ))}
      </div>
    </div>
  );
};

export default LocationsFeed;
