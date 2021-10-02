import React from "react";
import { ReviewSlider } from "./ReviewSlider";

const UsersReview = () => {
  return (
    <div className="w-full 2xl:max-w-7xl xl:max-w-7xl xl:mt-7 lg:w-full m-auto bg-green-100 pt-4 pl-3 mb-10 pb-7">
      <h1 className="text-2xl text-start font-bold mb-5 text-blue-500">
        Reviews
      </h1>
      <div className="relative w-full h-full">
        <ReviewSlider />
      </div>
    </div>
  );
};

export default UsersReview;
