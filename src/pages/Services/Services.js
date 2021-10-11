import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import DeviceCart from "./components/DeviceCart";
import HeroTop from "./components/HeroTop";
import NotFound from "./components/NotFound";

const Services = () => {
  const repairDevices = useSelector((state) => state.repairDevicesData);
  const { repairDevicesData } = repairDevices;

  const [search, setSearch] = useState("");
  const [deviceData, setDeviceData] = useState([]);

  const { device } = useParams();
  const history = useHistory();

  useEffect(() => {
    const data = repairDevicesData?.repairDevice.filter(
      (pd) => pd.category.toLowerCase() === device.toLowerCase()
    );
    setDeviceData(data);
  }, [device, repairDevicesData]);

  const findDevice = (e) => {
    history.push(`/device?&name=${search}`);
  };

  return (
    <div className="w-full h-auto overflow-hidden">
      {repairDevices.status === "pending" ? (
        <div className="u-p-h flex justify-center items-center">
          <h2 className="text-black text-2xl font-bold">Loading...</h2>
        </div>
      ) : (
        <>
          <div className="w-full flex flex-col mb-20">
            {/* HeroTop container */}
            <HeroTop
              device={device && device}
              findDevice={findDevice}
              search={search}
              setSearch={setSearch}
            />
            {deviceData?.length ? (
              <DeviceCart deviceData={deviceData} />
            ) : (
              <NotFound device={device} />
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Services;
