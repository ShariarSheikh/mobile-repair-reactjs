import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createRepairDevice } from "../../redux/repairDevicesSlice/createRepairDeviceSlice";
import { repairDevicesFetch } from "../../redux/repairDevicesSlice/repairDevicesSlice";
import RepairDeviceApiForm from "./RepairDeviceForm";

//create repair device data
const CreateNew = () => {
  const isCreate = useSelector((state) => state.repairDevicesCreate);

  const [repairDevice, setRepairDevice] = useState({
    device: "",
    description: "",
    category: "Apple",
    photo: "",
  });

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      repairDevice.device &&
      repairDevice.description &&
      repairDevice.category &&
      repairDevice.photo
    ) {
      dispatch(createRepairDevice(repairDevice));
      setRepairDevice({
        device: "",
        description: "",
        category: "Apple",
        photo: "",
      });
    } else {
      alert("Please select Category");
    }
  };

  useEffect(() => {
    isCreate?.status === "success" && dispatch(repairDevicesFetch());
  }, [isCreate, dispatch]);

  return (
    <RepairDeviceApiForm
      repairDevice={repairDevice}
      setRepairDevice={setRepairDevice}
      isDone={isCreate}
      successMessage={"Device created successfully"}
      handleSubmit={handleSubmit}
    />
  );
};

export default CreateNew;
