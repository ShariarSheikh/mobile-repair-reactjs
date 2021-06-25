import React from "react";
import styles from "../../../styles/components/ServicesList.module.css";
import { Link } from "react-router-dom";


const totalServicesList = [
  {
    id: 1,
    device: "Apple",
    description: "lorem ipsum dolor lorem ipsum",
  },
  {
    id: 2,
    device: "Samsung",
    description: "lorem ipsum dolor lorem ipsum",
  },
  {
    id: 3,
    device: "Redmi",
    description: "lorem ipsum dolor lorem ipsum",
  },
  {
    id: 4,
    device: "Nokia",
    description: "lorem ipsum dolor lorem ipsum",
  },
  {
    id: 5,
    device: "Huawei",
    description: "lorem ipsum dolor lorem ipsum",
  },
  {
    id: 6,
    device: "Asus",
    description: "lorem ipsum dolor lorem ipsum",
  },
  {
    id: 7,
    device: "More",
    description: "lorem ipsum dolor lorem ipsum",
  },
];

export const ServicesList = () => {
  return (
    <>
      <div className="absolute mt-9 left-0 rounded" id={styles.list_container}>
        <div
          className="w-full flex flex-row justify-start flex-warp items-center rounded"
          id={styles.list_inner_container}
        >
          {totalServicesList.map((service) => (
            <Link to={`/services/` + service.device} key={service.id}>
              <div
                id={styles.stylesCard}
                className="flex flex-col items-center justify-center cursor-pointer"
              >
                <div>
                  <h2 className="text-white text-3xl mb-4">{service.device}</h2>
                  <div id={styles.title}></div>
                  <p className="truncate mt-2 text-white">
                    {service.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};
