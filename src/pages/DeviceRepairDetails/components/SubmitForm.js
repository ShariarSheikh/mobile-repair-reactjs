import { useEffect, useState } from "react";
import { allStoresLocations } from "../../../products";

const SubmitForm = () => {
  const [storeLocation, setStoreLocation] = useState("");

  useEffect(() => {}, []);
 
  //handleLocation
  const handleLocation =(e)=>{
    setStoreLocation(e.target.value)
  }
  return (
    <form className="md:w-3/5 w-full relative h-auto mt-5 md:mt-0 bg-white">
      {/* store location selector */}
      <div className="w-full h-10 flex flex-row items-center justify-start md:pl-3">
        <label
          htmlFor="cars"
          className="text-base text-gray-700 font-semibold font-roboto"
        >
          Choose your near location :
        </label>
        <select
          value={storeLocation}
          onChange={(e) => handleLocation(e)}
          className="md:ml-4 md:px-4 h-full bg-gray-100 outline-none"
        >
          {allStoresLocations.map((x) => (
            <option key={x.id} value={x.location.toLocaleLowerCase()}>{x.location}</option>
          ))}
        </select>
      </div>
     <ComingSoon/>
    </form>
  );
};

export default SubmitForm;


const ComingSoon=()=>{
return(
  <div className="mt-5 w-full h-60 flex flex-col items-center justify-center bg-gray-100">
     <h2>Working on this projects</h2>
     <p>ComingSoon</p>
  </div>
)
}