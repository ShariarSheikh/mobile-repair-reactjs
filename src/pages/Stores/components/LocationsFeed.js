import React from "react";
import dhaka from "../../../images/locations/dhakaLocation.jpg";
import kishoreganj from "../../../images/locations/kishoreganj.jpg";
import kumilla from "../../../images/locations/kumilla.jpg";
import sylhet from "../../../images/locations/sylhet.jpg";
import { StoreCart } from "../../../utils/Carts/Index";

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


const LocationsFeed = () => {
  return (
    <div className="max-w-7xl m-auto">
      <div className="mt-16 w-full flex flex-wrap justify-center md:justify-start">
        {locations.map((loc) => (
          <StoreCart key={loc.id} location={loc} />
        ))}
      </div>
    </div>
  );
};

export default LocationsFeed;
