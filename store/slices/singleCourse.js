import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { SINGLE_COURSES } from "../apiConfig";

const initialState = {
  data: null,
  status: "idle",
  error: null,
};

export const fetchSingleCourse = createAsyncThunk(
  "singleCourse/fetchSingleCourse",
  async (courseId) => {
    try {
      if (!courseId) {
        throw new Error("Invalid courseId");
      }

      const response = await axios.get(
        `${SINGLE_COURSES.GET_SINGLE_COURSES(courseId)}`
      );
      return { data: response.data, error: null }; 
    } catch (error) {
      console.error("Fetch Single Course Error:", error);
      return { data: null, error: error.response?.data || "An error occurred" };
    }
  }
);

const singleCourseSlice = createSlice({
  name: "singleCourse",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSingleCourse.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchSingleCourse.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload.data;
        state.error = action.payload.error;
      })
      .addCase(fetchSingleCourse.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload.error; 
      });
  },
});

export const { reducer: singleCourseReducer } = singleCourseSlice;
export default singleCourseReducer;
