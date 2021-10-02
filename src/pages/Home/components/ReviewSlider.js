import React from "react";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { Pagination } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import { usersReview } from "../../../products";
import { ReviewSliderCart } from "../../../utils/Carts/Index";

SwiperCore.use([Pagination]);

export const ReviewSlider = () => {
  return (
    <>
<Swiper
slidesPerView={1}
spaceBetween={10}
pagination={{
  clickable: true,
}}
breakpoints={{
  "@0.00": {
    "slidesPerView": 1,
    "spaceBetween": 10
  },
  "@0.75": {
    "slidesPerView": 2,
    "spaceBetween": 10
  },
  "@1.00": {
    "slidesPerView": 3,
    "spaceBetween": 10
  },
  "@1.50": {
    "slidesPerView": 3,
    "spaceBetween": 5
  }
}}
className="mySwiper"
>
        {usersReview.map((userReviews) => (
          //user review import from utils/
          <SwiperSlide className="relative w-1/4 h-96 2xl:h-80" key={userReviews.id}>
          <ReviewSliderCart userReviews={userReviews} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};


