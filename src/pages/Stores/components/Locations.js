import React from "react";

import styles from "../../../styles/components/Locations.module.css";

import dhaka from "../../../images/locations/dhakaLocation.jpg";
import kishoreganj from "../../../images/locations/kishoreganj.jpg";
import kumilla from "../../../images/locations/kumilla.jpg";
import sylhet from "../../../images/locations/sylhet.jpg";

const locations = [
  {
    id: 1,
    location: "Dhaka",
    photo: dhaka,
    description: `
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
     Deserunt harum exercitationem voluptas corrupti culpa 
     earum ullam sit sunt iure esse?
    `,
  },
  {
    id: 2,
    location: "Kishoreganj",
    photo: kishoreganj,
    description: `
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
     Deserunt harum exercitationem voluptas corrupti culpa 
     earum ullam sit sunt iure esse?
    `,
  },
  {
    id: 3,
    location: "Kumilla",
    photo: kumilla,
    description: `
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
     Deserunt harum exercitationem voluptas corrupti culpa 
     earum ullam sit sunt iure esse?
    `,
  },
  {
    id: 4,
    location: "Dhaka",
    photo: dhaka,
    description: `
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
     Deserunt harum exercitationem voluptas corrupti culpa 
     earum ullam sit sunt iure esse?
    `,
  },
  {
    id: 5,
    location: "Sylhet",
    photo: sylhet,
    description: `
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
     Deserunt harum exercitationem voluptas corrupti culpa 
     earum ullam sit sunt iure esse?
    `,
  },
  {
    id: 6,
    location: "Sadekpur",
    photo: dhaka,
    description: `
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
     Deserunt harum exercitationem voluptas corrupti culpa 
     earum ullam sit sunt iure esse?
    `,
  },
  {
    id: 7,
    location: "Dhaka",
    photo: kumilla,
    description: `
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
     Deserunt harum exercitationem voluptas corrupti culpa 
     earum ullam sit sunt iure esse?
    `,
  },
];

export const Store = ({ location }) => {
  return (
    <>
      <div
        key={location.id}
        id={styles.location_card}
        className="w-1/4 mr-4 mb-4 cursor-pointer rounded"
      >
        <img id={styles.locationImg} src={location.photo} alt="locations" />
        <div className="absolute bottom-0 bg-gradient-to-t from-black via-gray-900 to-transparent left-0 w-full h-full flex flex-col items-start justify-end pr-4 pl-4" />
        <div className="absolute bottom-4 pl-3">
          <h1 className="text-white text-3xl mb-4">{location.location}</h1>
          <p className="text-gray-200 text-sm mb-16 font-normal">
            {location.description}
          </p>
        </div>
      </div>
    </>
  );
};

const Locations = () => {
  return (
    <div id={styles.Locations}>
      <div className="w-full flex flex-wrap justify-center">
        {locations.map((loc) => (
          <Store key={loc.id} location={loc} />
        ))}
      </div>
    </div>
  );
};

export default Locations;
