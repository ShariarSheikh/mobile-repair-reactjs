import { configureStore } from "@reduxjs/toolkit";
import createRepairDeviceSlice from "./repairDevicesSlice/createRepairDeviceSlice";
import repairDevicesDeleteSlice from "./repairDevicesSlice/repairDevicesDeleteSlice";
import repairDevicesSlice, {
  repairDevicesFetch,
} from "./repairDevicesSlice/repairDevicesSlice";
import updateRepairDeviceSlice from "./repairDevicesSlice/updateRepairDeviceSlice";
import userSlice from "./userSlice/userSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    repairDevicesData: repairDevicesSlice,
    repairDevicesCreate: createRepairDeviceSlice,
    repairDevicesUpdate: updateRepairDeviceSlice,
    repairDevicesDelete: repairDevicesDeleteSlice,
  },
});

store.dispatch(repairDevicesFetch());
