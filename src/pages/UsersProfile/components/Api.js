import {
  DeviceRepairUpload,
  RepairDeviceList,
} from "../../../utils/apiRepairDevice.js/index.js";

const Api = () => {
  return (
    <main className="text-gray-200 px-5">
      <RepairDeviceData />
    </main>
  );
};

export default Api;

const RepairDeviceData = () => {
  return (
    <section className="w-full max-w-7xl flex flex-row flex-wrap py-6 space-x-5">
      <DeviceRepairUpload />
      <RepairDeviceList />
    </section>
  );
};
