import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { allDevice } from "../../products";
import styles from "../../styles/pagesStyles/ServicesDynamic.module.css";

const Services = () => {
  const [deviceData, setDeviceData] = useState([]);
  const { device } = useParams();
  const history = useHistory();

  useEffect(() => {
    const data = allDevice.filter((pd) => pd.category === device);
    setDeviceData(data);
  }, [device]);

  return (
    <div id={styles.ServicesDynamic}>
      <div id={styles.ServicesDynamic_container}>
        {/* header container */}
        <div id={styles.ServicesDynamic_header}>
          <div className="flex flex-col items-center justify-start">
            <h1 className="text-4xl text-start font-normal text-white">
              {device} Repair
            </h1>
            <div className="flex items-center mt-20 bg-white rounded pr-3 pl-3 pt-3 pb-5">
              <input
                type="text"
                placeholder="Find your Device"
                className="border-b bg-transparent pl-3 pt-3 pb-3 mr-5 outline-none text-black"
              />
              <button className="mt-3 pr-5 pl-5 pt-2 pb-2 bg-indigo-600 text-white  rounded ">
                Find
              </button>
            </div>
          </div>
        </div>

        {/* device container */}
        <div className={styles.device_container}>
          <div className="flex flex-row flex-wrap justify-center mt-10">
            {deviceData?.map((data) => (
              <div
                onClick={() => history.push(`/devicereapir/${data.id}`)}
                id={styles.Product_card}
                className="flex flex-col cursor-pointer"
                key={data.id}
              >
                <img
                  id={styles.Product_card_img}
                  src={data.photo}
                  alt="product"
                />
                <p className="mt-3 text-gray-600">{data.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
