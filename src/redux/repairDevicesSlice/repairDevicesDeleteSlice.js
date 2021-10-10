import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const deleteRepairDevice = createAsyncThunk(
  "repairDevices/deleteRepairDevice",
  async (id) => {
    alert("device will delete now");
    const response = await axios.delete(
      `https://stormy-woodland-67379.herokuapp.com/api/mobile-repair-devices/delete/${id}`
    );

    response.data.success && alert("Deleted successfully");
    return response.data;
  }
);

export const repairDevicesDeleteSlice = createSlice({
  name: "repair devices delete",
  initialState: {
    status: null,
  },
  reducers: {},
  extraReducers: {
    [deleteRepairDevice.pending]: (state, action) => {
      state.status = "pending";
    },
    [deleteRepairDevice.fulfilled]: (state, action) => {
      state.status = "success";
    },
    [deleteRepairDevice.rejected]: (state, action) => {
      state.status = "rejected";
    },
  },
});

export default repairDevicesDeleteSlice.reducer;
