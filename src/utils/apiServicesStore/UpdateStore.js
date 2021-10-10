import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { servicesStoreFetch } from "../../redux/servicesStoreSlice/servicesStoreSlice";
import {
  closeUpdateServiceStore,
  updateServicesStore,
} from "../../redux/servicesStoreSlice/updateServicesStoreSlice";
import StoreForm from "./StoreForm";

const UpdateStore = () => {
  const repairDevicesUpdate = useSelector(
    (state) => state.servicesStoreUpdate
  );

  const [repairDevice, setRepairDevice] = useState({
    device: "",
    description: "",
    category: "",
    photo: "",
  });

  const dispatch = useDispatch();
  useEffect(() => {
    const { updateDevice } = repairDevicesUpdate;
    setRepairDevice({
      id: updateDevice?.id,
      device: updateDevice?.device,
      description: updateDevice?.description,
      category: updateDevice?.category,
      photo: updateDevice?.photo,
    });
  }, [repairDevicesUpdate, dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateServicesStore(repairDevice));
    setRepairDevice({
      device: "",
      description: "",
      category: "",
      photo: "",
    });
  };

  //if device is updated successfully ? then call closeUpdateModel func after 4s
  useEffect(() => {
    if (repairDevicesUpdate.status === "success") {
      dispatch(servicesStoreFetch());
      setTimeout(() => {
        dispatch(closeUpdateServiceStore());
      }, 1000);
    }
  }, [repairDevicesUpdate, dispatch]);

  return (
    <div className="w-full h-auto bg-black bg-opacity-60 fixed right-0 top-0">
      <div className="relative w-full h-screen flex justify-center items-center">
        <div className="absolute right-10 top-20 p-5">
          <AiOutlineClose
            className="text-white cursor-pointer h-6 w-6"
            onClick={() => dispatch(closeUpdateServiceStore())}
          />
        </div>
        <StoreForm
          repairDevice={repairDevice}
          setRepairDevice={setRepairDevice}
          isDone={repairDevicesUpdate}
          successMessage={"Device updated successfully"}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

export default UpdateStore;
