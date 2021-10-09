import { configureStore } from "@reduxjs/toolkit";
import repairDevicesSlice, {
  repairDevicesFetch,
} from "./repairDevicesSlice/repairDevicesSlice";
import userSlice from "./userSlice/userSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    repairDevicesData: repairDevicesSlice,
  },
});

store.dispatch(repairDevicesFetch());
