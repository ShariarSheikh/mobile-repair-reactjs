import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createServiceStore } from "../../redux/servicesStoreSlice/createServiceStoreSlice";
import { servicesStoreFetch } from "../../redux/servicesStoreSlice/servicesStoreSlice";
import StoreForm from "./StoreForm";

//create repair device data
const CreateNew = () => {
  const isCreate = useSelector((state) => state.servicesStoreCreate);

  const [locationStore, setLocationStore] = useState({
    locationName: "",
    description: "",
    lat: 0,
    long: 0,
    photo: "",
  });

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newStore = {
      locationName: locationStore.locationName.toLocaleUpperCase(),
      description: locationStore.locationName,
      location: {
        lat: Number(locationStore.lat),
        long: Number(locationStore.long),
      },
      photo: locationStore.photo,
    };

    if (
      newStore.locationName &&
      newStore.locationName &&
      newStore.location.lat &&
      newStore.location.long &&
      newStore.photo
    ) {
      dispatch(createServiceStore(newStore));
    } else {
      alert("Please fullfil all input");
    }
  };

  useEffect(() => {
    if (isCreate?.status === "success") {
      dispatch(servicesStoreFetch());
      setLocationStore({
        locationName: "",
        description: "",
        lat: 0,
        long: 0,
        photo: "",
      });
    }
  }, [isCreate, dispatch]);

  return (
    <StoreForm
      locationStore={locationStore}
      setLocationStore={setLocationStore}
      isDone={isCreate}
      successMessage={"Device created successfully"}
      handleSubmit={handleSubmit}
    />
  );
};

export default CreateNew;
