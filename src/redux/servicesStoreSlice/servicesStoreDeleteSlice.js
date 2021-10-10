import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const serviceStoreDelete = createAsyncThunk(
  "serviceStore/servicesStoreDelete",
  async (id) => {
    const response = await axios.delete(
      `http://localhost:9000/api/service-stores/delete/${id}`
    );
    response.data.success && alert("Deleted successfully");
    return response.data;
  }
);

export const servicesStoreDeleteSlice = createSlice({
  name: "service store delete",
  initialState: {
    status: null,
  },
  reducers: {},
  extraReducers: {
    [serviceStoreDelete.pending]: (state, action) => {
      state.status = "pending";
    },
    [serviceStoreDelete.fulfilled]: (state, action) => {
      state.status = "success";
    },
    [serviceStoreDelete.rejected]: (state, action) => {
      state.status = "rejected";
    },
  },
});

export default servicesStoreDeleteSlice.reducer;
