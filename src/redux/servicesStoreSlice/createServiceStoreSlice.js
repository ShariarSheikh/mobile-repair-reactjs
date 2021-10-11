import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const createServiceStore = createAsyncThunk(
  "serviceStore/createServiceStore",
  async (data) => {
    const response = await axios.post(
      "https://stormy-woodland-67379.herokuapp.com/api/service-stores/create",
      data
    );

    response?.data.success && alert("Successfully created");
    return response.data;
  }
);

export const createServiceStoreSlice = createSlice({
  name: "create services store",
  initialState: {
    status: null,
  },

  reducers: {},
  extraReducers: {
    [createServiceStore.pending]: (state, action) => {
      state.status = "pending";
    },
    [createServiceStore.fulfilled]: (state, action) => {
      state.status = "success";
    },
    [createServiceStore.rejected]: (state, action) => {
      state.status = "rejected";
    },
  },
});

export default createServiceStoreSlice.reducer;
