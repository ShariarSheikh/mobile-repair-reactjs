import RepairDeviceSection from "../../../../utils/apiRepairDevice/index.js";
import RepairStoreSection from "../../../../utils/apiServicesStore/index.js";

const Api = () => {
  return (
    <main className="text-gray-200 px-5">
      <h2 className="text-2xl">Repair devices api</h2>
      <RepairDeviceSection />
      <h2 className="text-2xl mt-10">Repair stores api</h2>
      <RepairStoreSection />
    </main>
  );
};

export default Api;
