import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const name = "lists";
const initialState = {
  users: [],
  products: [],
  orders: [],
  deliveries: [],
  error: null,
  isLoading: false,
};

export const getData = createAsyncThunk(
  `${name}/getData`,
  async (path, thunkAPI) => {
    const { fulfillWithValue, rejectWithValue } = thunkAPI;
    try {
      const response = await fetch(`https://dummyjson.com/${path}`, {
        method: "GET",
      });
      const data = await response.json();
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const slice = createSlice({
  name,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getData.pending, (state, _) => {
      state.isLoading = true;
    });
    builder.addCase(getData.fulfilled, (state, action) => {
      state.isLoading = false;
      state[action.meta.arg] = action.payload[action.meta.arg];
      console.log(action);
    });
    builder.addCase(getData.rejected, (state, { payload }) => {
      state.error = payload;
    });
  },
});
export const actions = slice.actions;
export default slice.reducer;
