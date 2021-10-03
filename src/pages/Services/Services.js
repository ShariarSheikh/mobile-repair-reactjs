import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { allDevice } from "../../products";
import DeviceCart from "./components/DeviceCart";
import HeroTop from "./components/HeroTop";
import NotFound from "./components/NotFound";

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
        {/* HeroTop container */}
        <HeroTop
          device={device}
          findDevice={findDevice}
          search={search}
          setSearch={setSearch}
        />
        {deviceData.length ? (
          <DeviceCart deviceData={deviceData} />
        ) : (
          <NotFound device={device} />
        )}
      </div>
    </div>
  );
};

export default Services;
