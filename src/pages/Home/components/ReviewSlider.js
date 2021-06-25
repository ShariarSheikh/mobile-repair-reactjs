import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "../../../styles/components/ReviewSlider.module.css";

import person from "../../../images/person.webp";

import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { Pagination } from "swiper/core";
import { AiFillStar, AiOutlineLike, AiOutlineDislike } from "react-icons/ai";

SwiperCore.use([Pagination]);

const usersReview = [
  {
    id: 1,
    name: "Nahid",
    photo: person,
    title: "Faster Services and Good Responses",
    posted: "June 19 2021",
    description: `It is a long established fact that a reader
     will be distracted by the readable content of a page
     when looking at its layout. The point of using Lorem Ipsum
      is that it has a more-or-less normal distribution of letters,
       as opposed.`,
  },
  {
    id: 2,
    name: "Shariar",
    photo: person,
    title: "Faster Services and Good Responses",
    posted: "June 19 2021",
    description: `It is a long established fact that a reader
     will be distracted by the readable content of a page
     `,
  },
  {
    id: 3,
    name: "Amir",
    photo: person,
    title: "Faster Services and Good Responses",
    posted: "June 19 2021",
    description: `It is a long established fact that a reader
     will be distracted by the readable content of a page
     when looking at its layout. The point of using Lorem Ipsum
     `,
  },
  {
    id: 4,
    name: "Esuf",
    photo: person,
    title: "Faster Services and Good Responses",
    posted: "June 19 2021",
    description: `It is a long established fact that a reader
     will be distracted by the readable content of a page
     when looking at its layout. The point of using Lorem Ipsum
      is that it has a more-or-less normal distribution of letters.`,
  },
  {
    id: 5,
    name: "NoBody",
    photo: person,
    title: "Faster Services and Good Responses",
    posted: "June 19 2021",
    description: `It is a long established fact that a reader
     will be distracted by the readable content of a page
     when looking at its layout. The point of using Lorem Ipsum 
        look like readable English. Many desktop publishing packages`,
  },
];

const MAX_RATING = 5;
const MIN_RATING = 1;

export const ReviewSlider = () => {
  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );
  const [like, setLike] = useState(15);
  const [dislike, setDislike] = useState(3);


  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        className={styles.mySwiper}
      >
        {usersReview.map((ur) => (
          <SwiperSlide className={styles.reviewSlider} key={ur.id}>
            <div className={styles.card}>
              <div className="flex flex-row mb-4">
                <img
                  className={styles.reviewsCardImg}
                  src={ur.photo}
                  alt="reviews"
                />
                <div className="flex flex-col">
                  <h1 className="text-gray-500 font-bold mb-2">{ur.name}</h1>
                  <div className="flex">
                    {Array(rating)
                      .fill()
                      .map((_, i) => (
                        <AiFillStar key={i} className="text-yellow-400" />
                      ))}
                  </div>
                </div>
              </div>
              <div>
                <h1 className="text-gray-500 font-medium mb-2">{ur.title}</h1>
                <p className="text-gray-500 font-sm">{ur.description}</p>
                <small className="text-gray-500 font-sm">{ur.posted}</small>
              </div>
              <div className=" w-full flex flex-row absolute bottom-10 ">
                <div className="flex items-center">
                  {" "}
                  <AiOutlineLike
                    className="text-gray-400 text-2xl z-50 hover:text-gray-700"
                    onClick={() => setLike(like + 1)}
                  />{" "}
                  <p className="text-gray-400"> {like} </p>{" "}
                </div>
                <div className="flex items-center">
                  {" "}
                  <AiOutlineDislike
                    className="text-gray-400 ml-5 text-2xl z-50 hover:text-gray-700"
                    onClick={() => setDislike(dislike + 1)}
                  />{" "}
                  <p className="text-gray-400"> {dislike} </p>{" "}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
