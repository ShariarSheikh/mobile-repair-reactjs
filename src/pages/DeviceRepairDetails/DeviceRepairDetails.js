import queryString from "querystring";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import NotFound from "./components/NotFound";
import SubmitForm from "./components/SubmitForm";

const DeviceRepairDetails = () => {
  const repairDevices = useSelector((state) => state.repairDevicesData);
  const { repairDevicesData } = repairDevices;

  const [data, setData] = useState({});
  const [error, setError] = useState("");

  const history = useHistory();
  const location = useLocation();
  const parsed = queryString.parse(location.search);

  const name = parsed.name;
  const id = parsed.id;

  useEffect(() => {
    if (id) {
      const deviceData = repairDevicesData?.repairDevice.filter(
        (x) => x._id === id
      );
      setData(deviceData);
    } else {
      setError("Device not found");
    }
  }, [name, id, repairDevicesData]);

  return (
    <main className="w-full bg-white h-auto pb-6">
      {repairDevices.status === "pending" ? (
        <div className="u-p-h flex justify-center items-center">
          <h2 className="text-black text-2xl font-bold">Loading...</h2>
        </div>
      ) : (
        <section className="max-w-screen-xl w-full m-auto flex flex-col u-p-h px-3 md:px-0">
          {data?.length > 0 ? (
            <>
              {/* header */}
              <header className="w-full text-start py-3 mt-5">
                <h2 className="md:text-3xl text-xl font-bold">
                  Repair your
                  <span className="text-blue-600"> {data[0]?.name} </span>
                  device with our skilled person
                </h2>
              </header>
              {/* container */}
              <div className="w-full h-auto relative flex flex-col md:flex-row md:justify-between mt-8">
                {data && (
                  <div className="md:w-1/3 w-52 md:h-96 h-60 pb-5 relative bg-gray-100">
                    <img
                      className="w-full h-5/6 object-contain"
                      src={data[0]?.photo}
                      alt={data[0]?.category}
                    />
                    <h2 className="text-gray-500 text-center md:text-2xl text-base mt-4">
                      {data[0]?.device}
                    </h2>
                  </div>
                )}
                <SubmitForm />
              </div>
            </>
          ) : (
            <NotFound error={error} history={history} />
          )}
        </section>
      )}
    </main>
  );
};

export default DeviceRepairDetails;
