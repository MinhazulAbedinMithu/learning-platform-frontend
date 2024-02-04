import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { categoryServices } from "../services/categoryService";

//REGISTER :::
// export const getAllCategories = createAsyncThunk(
//   "category/all",
//   async (thunkAPI) => {
//     try {
//       const response = await categoryServices.getAllCategories();
//       thunkAPI.dispatch(setMessage(response.data.message));
//       return response.data.data;
//     } catch (error) {
//       // console.log(error);
//       const message =
//         (error.response &&
//           error.response.data &&
//           error.response.data.message) ||
//         error.message ||
//         error.toString();
//       thunkAPI.dispatch(setMessage(message));
//       return thunkAPI.rejectWithValue();
//     }
//   }
// );

const initialState = {
  categories: [],
};
const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setAllCategories: (state, action) => {
      state.categories = action.payload;
    },
  },
});

const { reducer, actions } = categorySlice;
export const { setAllCategories } = actions;
export default reducer;
