import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  courses: [],
};
const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {
    setAllCourses: (state, action) => {
      state.courses = action.payload;
    },
  },
});

const { reducer, actions } = courseSlice;
export const { setAllCourses } = actions;
export default reducer;
