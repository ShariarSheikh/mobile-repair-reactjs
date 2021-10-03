import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { allDevice } from "../../products";
import styles from "../../styles/pagesStyles/ServicesDynamic.module.css";

const Services = () => {
  const [search, setSearch] = useState("");
  const [deviceData, setDeviceData] = useState([]);

  const { device } = useParams();
  const history = useHistory();

  useEffect(() => {
    const data = allDevice.filter((pd) => pd.category === device);
    setDeviceData(data);
  }, [device]);

  const findDevice = (e) => {
    history.push(`/device?&name=${search}`);
  };

  return (
    <div className="w-full h-auto overflow-hidden">
      <div className="w-full flex flex-col mb-20">
        <div id="services_page_bg_img">
          <div className="flex flex-col items-center justify-start">
            <h1 className="text-4xl text-start font-normal text-white p-3 bg-opacity-60 bg-black">
              {device} device we repair
            </h1>
            <div className="flex items-center mt-20 bg-white rounded pr-3 pl-3 pt-3 pb-5">
              <input
                type="text"
                placeholder="Search your Device Model"
                className="border-b bg-transparent pl-3 pt-3 pb-3 mr-5 outline-none text-black"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button
                className="mt-3 pr-5 pl-5 pt-2 pb-2 bg-indigo-600 text-white  rounded "
                onClick={findDevice}
              >
                Find
              </button>
            </div>
          </div>
        </div>
        {/* header container */}

        {deviceData.length ? (
          <div className="w-full">
            <div className="w-3xl m-auto flex flex-row flex-wrap justify-center md:justify-start mt-10">
              {deviceData?.map((data) => (
                <div
                  onClick={() =>
                    history.push(`/device?&name=${data.category}&id=${data.id}`)
                  }
                  // id={styles.Product_card}
                  className="cursor-pointer w-52 h-64 mr-4 mb-4 shadow-md p-3"
                  key={data.id}
                >
                  <img
                    id={styles.Product_card_img}
                    src={data.photo}
                    alt="product"
                  />
                  <p className="mt-3 text-gray-600 line-clamp-1">{data.name}</p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="w-full flex flex-col justify-center items-center h-96">
            <img
              className="h-72 object-contain w-80"
              src="https://cdn.dribbble.com/users/1218631/screenshots/3818393/media/2907281eae03fac6e9f5b99ad597bf13.gif"
              alt="not found location"
            />
            <h1 className="text-3xl">
              OHHH... sorry we don't repair{" "}
              <span className="text-blue-500">{device}</span>
            </h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Services;
