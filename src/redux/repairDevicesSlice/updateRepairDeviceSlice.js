import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const updateRepairDevice = createAsyncThunk(
  "repairDevices/updateRepairDevice",
  async (device) => {
    const response = await axios.patch(
      `https://stormy-woodland-67379.herokuapp.com/api/mobile-repair-devices/${device.id}`,
      device
    );

    response.data.success && alert("Updated successfully");
    return response.data;
  }
);

export const updateRepairDeviceSlice = createSlice({
  name: "update repair device",
  initialState: {
    status: null,
    updateDevice: null,
    openModel: false,
  },

  reducers: {
    openUpdateModel: (state, action) => {
      state.updateDevice = action.payload;
      state.openModel = true;
      state.status = null;
    },
    closeUpdateModel: (state, action) => {
      state.openModel = false;
      state.status = null;
    },
  },
  extraReducers: {
    [updateRepairDevice.pending]: (state, action) => {
      state.status = "pending";
    },
    [updateRepairDevice.fulfilled]: (state, action) => {
      state.status = "success";
    },
    [updateRepairDevice.rejected]: (state, action) => {
      state.status = "rejected";
    },
  },
});

export const { openUpdateModel, closeUpdateModel } =
  updateRepairDeviceSlice.actions;

export default updateRepairDeviceSlice.reducer;
