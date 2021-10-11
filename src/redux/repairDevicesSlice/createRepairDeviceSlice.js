import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const createRepairDevice = createAsyncThunk(
  "repairDevices/createRepairDevice",
  async (device) => {
    const response = await axios.post(
      "http://localhost:9000/api/mobile-repair-devices/create",
      device
    );

    response?.data.success && alert("Successfully created");
    return response.data;
  }
);

export const createRepairDeviceSlice = createSlice({
  name: "create repair devices",
  initialState: {
    status: null,
  },

  reducers: {},
  extraReducers: {
    [createRepairDevice.pending]: (state, action) => {
      state.status = "pending";
    },
    [createRepairDevice.fulfilled]: (state, action) => {
      state.status = "success";
    },
    [createRepairDevice.rejected]: (state, action) => {
      state.status = "rejected";
    },
  },
});

export default createRepairDeviceSlice.reducer;
