import React from "react";
import styles from "../../../styles/components/Services.module.css";

// totalServicesList img
import phone from "../../../images/mobile.png";
import mac from "../../../images/laptop.png";
import desktop from "../../../images/desktop.png";
import tablet from "../../../images/tablet.png";
import camera from "../../../images/camera.png";
import pcLaptop from "../../../images/pcLaptop.png";

const totalServicesList = [
  {
    id: 1,
    title: "All Brands & Models",
    photo: phone,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 2,
    title: "Skilled Technicians",
    photo: mac,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 3,
    title: "Data Security",
    photo: pcLaptop,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 4,
    title: "Genuine Parts",
    photo: desktop,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 5,
    title: "1 Day Service",
    photo: tablet,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
  },
  {
    id: 6,
    title: "90 Days Warranty",
    photo: camera,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
  },
];

// export const Item = ({ serviceItem }) => {
//   const { photo, title, description } = serviceItem;
//   return (
//     <>
//       <div className={styles.item}>
//         <img
//           id={styles.itemsImg}
//           className="w-full h-full"
//           src={photo}
//           alt="services"
//         />
//         <div className="absolute bottom-0 bg-gradient-to-t from-black via-gray-900 to-transparent left-0 w-full h-full flex flex-col items-start justify-end pr-4 pl-4">
//           <h2 className="text-white text-3xl mb-4">{title}</h2>
//           <p className="text-gray-200 text-sm mb-16 font-normal">
//             {description}
//           </p>
//         </div>
//       </div>
//     </>
//   );
// };

const Services = () => {
  return (
    <div className={styles.services_components}>
      <h1 className="text-3xl text-start font-bold mb-5 text-blue-300">
        Services
      </h1>
      <div className="flex flex-row flex-wrap">
        {totalServicesList.map((sr) => (
          <div key={sr.id} className={styles.serviceCard}>
            <div>
              <p className="text-start text-gray-800  text-xl mb-2 text-gray-800 font-medium">
                {sr.title}
              </p>
              <p className="text-start text-gray-800 text-sm font-normal">
                {sr.description}
              </p>
            </div>
          </div>
        ))}
        
      </div>
    </div>
  );
};

export default Services;
