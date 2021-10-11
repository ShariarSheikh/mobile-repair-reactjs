import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";

const UserHome = () => {
  const { user } = useSelector((state) => state.user);
  return (
    <main className="u-p-h flex justify-center items-center flex-col">
      <div className="w-40 h-40 overflow-hidden relative">
        <img
          className="w-full h-full object-cover rounded-full"
          src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          alt="user profile"
        />
      </div>
      <h1 className="text-gray-400 text-4xl font-semibold mt-10">
        Welcome {user.data.name}
      </h1>
      <StoreForm />
    </main>
  );
};

export default UserHome;

const StoreForm = () => {
  const [locationStore, setLocationStore] = useState({
    locationName: "",
    description: "",
    lat: 0,
    long: 0,
    photo: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();

    data.append("photo", locationStore.photo);
    data.append("locationName", locationStore.locationName.toLocaleUpperCase());
    data.append("description", locationStore.description);
    data.append("lat", Number(locationStore.lat));
    data.append("long", Number(locationStore.long));

    axios
      .post("http://localhost:9000/api/service-stores/create", data)
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
      encType="multipart/form-data"
      className="text-gray-500 bg-gray-900 border border-gray-500 rounded-md p-3 w-80 mt-20"
    >
      <h2 className="text-xl font-bold">Upload Repairing new device</h2>

      <div className="mt-4 mb-4 flex flex-col">
        <label htmlFor="Location Name">Location Name</label>
        <input
          required
          className="bg-gray-500 text-gray-200 py-2 outline-none pl-2"
          value={locationStore?.locationName}
          onChange={(e) =>
            setLocationStore({ ...locationStore, locationName: e.target.value })
          }
          type="text"
        />
      </div>

      <div className="mb-4 flex flex-col">
        <label htmlFor="Location Latitude">Location Latitude</label>
        <input
          required
          value={locationStore?.lat}
          onChange={(e) =>
            setLocationStore({ ...locationStore, lat: e.target.value })
          }
          step="any"
          min="0"
          className="bg-gray-500 text-gray-200 py-2 outline-none pl-2 hide-arrow-number"
          type="number"
        />
      </div>

      <div className="mb-4 flex flex-col">
        <label htmlFor="Location longitude">Location longitude</label>
        <input
          required
          value={locationStore?.long}
          onChange={(e) =>
            setLocationStore({ ...locationStore, long: e.target.value })
          }
          step="any"
          min="0"
          className="bg-gray-500 text-gray-200 py-2 outline-none pl-2 hide-arrow-number"
          type="number"
        />
      </div>

      <div className="mb-4 flex flex-col">
        <label htmlFor="Store Description">Store Description</label>
        <textarea
          required
          cols="20"
          rows="5"
          value={locationStore?.description}
          onChange={(e) =>
            setLocationStore({
              ...locationStore,
              description: e.target.value,
            })
          }
          className="bg-gray-500 text-gray-200 py-2 outline-none pl-2"
          type="text"
        />
      </div>

      <div className="mt-4 mb-4 flex flex-col">
        <label htmlFor="Device Image">Device Image</label>
        <input
          type="file"
          accept="image/gif, image/jpeg, image/png"
          onChange={(e) =>
            setLocationStore({ ...locationStore, photo: e.target.files[0] })
          }
        />
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-gray-200 py-2 rounded-lg outline-none pl-2 w-full"
      >
        Upload
      </button>
    </form>
  );
};
