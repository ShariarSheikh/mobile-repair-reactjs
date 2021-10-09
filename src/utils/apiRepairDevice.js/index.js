import axios from "axios";
import { useEffect, useState } from "react";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import { repairDevicesFetch } from "../../redux/repairDevicesSlice/repairDevicesSlice";

//create repair device data
export const DeviceRepairUpload = () => {
  const [repairDevice, setRepairDevice] = useState({
    device: "",
    description: "",
    category: "Apple",
    photo: "adfasdf",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading((prevState) => true);
    axios
      .post(
        "https://stormy-woodland-67379.herokuapp.com/api/mobile-repair-devices/create",
        repairDevice
      )
      .then((data) => {
        data.data.success && setSuccess(true);
        setLoading(false);
        data.data.success && dispatch(repairDevicesFetch());
        setRepairDevice({
          device: "",
          description: "",
          category: "",
          photo: "",
        });
      })
      .catch((err) => {
        setError(err);
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
    setTimeout(() => {
      setSuccess(false);
      setError("");
    }, 3000);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="text-gray-500 border border-gray-500 rounded-md p-3 w-80"
    >
      <h2 className="text-xl font-bold">Upload Repairing new device</h2>

      {success && <p className="text-green-500">Device Data Uploaded</p>}
      {error && <p className="text-red-500">"something is wrong </p>}

      <div className="mt-4 mb-4 flex flex-col">
        <label htmlFor="Select Category">Select Category</label>
        <select
          required
          className="bg-gray-500 text-gray-200 py-2 outline-none"
          value={repairDevice.category}
          onChange={(e) =>
            setRepairDevice({ ...repairDevice, category: e.target.value })
          }
        >
          <option value="Apple">Apple</option>
          <option value="Redmi">Redmi</option>
          <option value="Samsung">Samsung</option>
          <option value="Nokia">Nokia</option>
          <option value="Huawei">Huawei</option>
          <option value="Asus">Asus</option>
        </select>
      </div>

      <div className="mb-4 flex flex-col">
        <label htmlFor="Device Name">Device Name</label>
        <input
          required
          value={repairDevice.device}
          onChange={(e) =>
            setRepairDevice({ ...repairDevice, device: e.target.value })
          }
          className="bg-gray-500 text-gray-200 py-2 outline-none pl-2"
          type="text"
        />
      </div>

      <div className="mb-4 flex flex-col">
        <label htmlFor="Device Description">Device Description</label>
        <textarea
          required
          cols="20"
          rows="5"
          value={repairDevice.description}
          onChange={(e) =>
            setRepairDevice({
              ...repairDevice,
              description: e.target.value,
            })
          }
          className="bg-gray-500 text-gray-200 py-2 outline-none pl-2"
          type="text"
        />
      </div>

      <div className="mt-4 mb-4 flex flex-col">
        <label htmlFor="Device Image">Device Image</label>
        <FileBase
          type="file"
          multiple={false}
          onDone={({ base64 }) =>
            setRepairDevice({ ...repairDevice, photo: base64 })
          }
        />
      </div>

      {loading ? (
        <div className="bg-blue-500 text-gray-200 py-2 rounded-lg outline-none pl-2 w-full">
          Waiting for uploading...
        </div>
      ) : (
        <button
          type="submit"
          className="bg-blue-500 text-gray-200 py-2 rounded-lg outline-none pl-2 w-full"
        >
          Upload
        </button>
      )}
    </form>
  );
};

//repair device list
export const RepairDeviceList = () => {
  const repairDevicesData = useSelector((state) => state.repairDevicesData);

  const [apple, setApple] = useState([]);
  const [samsung, setSamsung] = useState([]);
  const [nokia, setNokia] = useState([]);
  const [redmi, setRedmi] = useState([]);
  const [huawei, setHuawei] = useState([]);
  const [asus, setAsus] = useState([]);

  useEffect(() => {
    if (repairDevicesData.status === "success") {
      const filterCategory = (setData, ctg) => {
        //store data by devices category
        const devicesCategory =
          repairDevicesData.repairDevicesData?.repairDevice.filter(
            (x) => x.category === `${ctg}`
          );
        setData((prevState) => devicesCategory);
      };

      filterCategory(setApple, "Apple");
      filterCategory(setSamsung, "Samsung");
      filterCategory(setRedmi, "Redmi");
      filterCategory(setNokia, "Nokia");
      filterCategory(setHuawei, "Huawei");
      filterCategory(setAsus, "Asus");
    }
  }, [repairDevicesData.status]);

  return (
    <div
      style={{ maxHeight: "515px" }}
      className="relative text-gray-500 border border-gray-500 rounded-md p-3 max-w-4xl overflow-y-scroll overscroll-x-none"
    >
      <h2 className="text-semibold text-gray-100 font-roboto text-2xl">
        Repair Device Data
      </h2>
      {repairDevicesData.status === "pending" ? (
        <div>Loading...</div>
      ) : (
        <>
          <DevicesList deviceCategory="Apple Devices" devicesData={apple} />
          <DevicesList deviceCategory="Samsung Devices" devicesData={samsung} />
          <DevicesList deviceCategory="Redmi Devices" devicesData={redmi} />
          <DevicesList deviceCategory="Nokia Devices" devicesData={nokia} />
          <DevicesList deviceCategory="Huawei Devices" devicesData={huawei} />
          <DevicesList deviceCategory="Asus Devices" devicesData={asus} />
        </>
      )}
    </div>
  );
};

// category section component
const DevicesList = ({ deviceCategory, devicesData }) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  //delete devices data by calling api
  const deleteHandler = (id, device) => {
    alert(device + "will be delete");
    setLoading(true);
    axios
      .delete(
        `https://stormy-woodland-67379.herokuapp.com/api/mobile-repair-devices/delete/${id}`
      )
      .then((data) => {
        data.data.success && alert("Deleted successfully");
        data.data.success && dispatch(repairDevicesFetch());
      })
      .catch((err) => console.log(err.message))
      .finally(() => setLoading(false));
  };
  //update devices data by calling api
  const updateHandler = (id) => {};

  return (
    <>
      <h1 className="mt-5">{deviceCategory}</h1>
      {devicesData.length > 0 ? (
        <div className="flex flex-wrap flex-row justify-start ">
          {devicesData?.map(({ _id, device, description, photo, category }) => (
            <div
              key={_id}
              className="w-48 h-52 text-gray-300 overflow-hidden bg-gray-700 pt-2 mt-2 ml-2"
            >
              <img
                className="h-32 w-full object-contain"
                src={photo}
                alt={description}
              />
              <div className="mt-2">
                <p className="font-bold text-center">{device}</p>
              </div>
              {loading ? (
                <div>Waiting for delete...</div>
              ) : (
                <div className="w-full flex justify-between bg-gray-800 py-3 px-2">
                  <button onClick={() => updateHandler(_id)} disabled={loading}>
                    Update
                  </button>
                  <button
                    onClick={() => deleteHandler(_id, device)}
                    disabled={loading}
                  >
                    Delete
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="text-2xl">0 Devices</div>
      )}
    </>
  );
};
