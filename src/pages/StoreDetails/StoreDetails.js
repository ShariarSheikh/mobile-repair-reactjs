import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { allStoresLocations } from "../../products";
import AboutStore from "./components/AboutStore";
import StoreMap from "./components/StoreMap";

const StoreDetails = () => {
  const [storeOpen, setStoreOpen] = useState(false);
  const [locationData, setLocationData] = useState();
  const { location } = useParams();

  useEffect(() => {
    if (location) {
      const data = allStoresLocations.filter(
        (x) => x.location.toLowerCase() === location.toLowerCase()
      );
      setLocationData(data[0]);
    } else {
      setLocationData();
    }
  }, [location]);

  const center = [
    locationData && locationData.lat,
    locationData && locationData.long,
  ];

  setInterval(() => {
    const now = new Date().getHours();
    if (now >= 9 && now <= 21) {
      setStoreOpen((prevState) => (prevState = true));
    } else {
      setStoreOpen((prevState) => (prevState = false));
    }
  }, 1000);

  return (
    <main className="u-p-h">
      {locationData && (
        <section className="w-full">
          {/* header container */}
          <header className="relative w-full h-96">
            <img
              className="absolute w-full h-full object-cover"
              src={locationData.photo}
              alt={location}
            />
            <div
              className="absolute left-0 bottom-0 flex justify-between items-center
             right-0 ml-auto mr-auto w-auto bg-opacity-60 bg-black px-2 md:px-8 py-5"
            >
              <h1 className="text-white md:text-3xl font-semibold">
                {location}
              </h1>
              <button
                className={`${
                  storeOpen ? "bg-green-700" : "bg-red-600"
                } text-white py-2 px-2 md:px-7 font-roboto rounded-lg animate-bounce cursor-default`}
              >
                {storeOpen ? "Open Now" : "Closed"}
              </button>
              <button className="bg-blue-700 text-white py-2 px-2 md:px-7 font-roboto active:scale-125">
                Call Store Assistant
              </button>
            </div>
          </header>

          {/* info container */}
          <div className="max-w-7xl m-auto w-full mt-8 px-2">
            <h1 className="text-4xl font-semibold font-roboto text-gray-700">
              Store in: {location}
            </h1>
            <p className="text-base text-gray-500 mt-4">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
            </p>
            <p className="text-base text-gray-500">
              Active 09:00 AM to 09:00 PM
            </p>

            {/* .. */}
            <div className="w-full flex flex-col md:flex-row justify-between mt-5 pb-8">
              <AboutStore location={location} />
              <StoreMap center={center} />
            </div>
          </div>
        </section>
      )}
    </main>
  );
};

export default StoreDetails;
