import queryString from "querystring";
import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { allDevice } from "../../products";
import NotFound from "./components/NotFound";
import SubmitForm from "./components/SubmitForm";

const DeviceRepairDetails = () => {
  const [data, setData] = useState({});
  const [error, setError] = useState("");

  const history = useHistory();
  const location = useLocation();
  const parsed = queryString.parse(location.search);

  const name = parsed.name;
  const id = parsed.id;

  useEffect(() => {
    if (id) {
      const deviceData = allDevice.filter((x) => x.id === Number(id));
      if (deviceData.length) {
        const device = allDevice.find((x) => x.category === name);
        device && setData(deviceData);
        !device && setError("Device not found");
      } else {
        setData();
        setError("Device not found");
      }
    } else {
      setData();
      setError("Device not found");
    }
  }, [name, id]);

  return (
    <main className="w-full bg-white h-auto pb-6">
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
                      {data[0]?.name}
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
    </main>
  );
};

export default DeviceRepairDetails;
