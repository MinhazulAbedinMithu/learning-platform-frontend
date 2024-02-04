import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AuthService from "../services/authService";
import { setMessage } from "./message";

//REGISTER :::
export const register = createAsyncThunk(
  "auth/register",
  async ({ name, email, password }, thunkAPI) => {
    try {
      const response = await AuthService.register(name, email, password);
      thunkAPI.dispatch(setMessage(response.data.message));
    } catch (error) {
      // console.log(error);
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue();
    }
  }
);

//LOGIN :::
export const login = createAsyncThunk(
  "auth/login",
  async ({ username, password }, thunkAPI) => {
    try {
      const data = await AuthService.login(username, password);
      if (data.success === true) {
        return { user: data };
      } else {
        thunkAPI.dispatch(setMessage(data.message));
        return { user: null };
      }
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue();
    }
  }
);

//LOGOUT :::
export const logout = createAsyncThunk("auth/logout", async () => {
  await AuthService.logout();
});

const initialState = {
  isLoggedIn: false,
  user: null,
  token: null,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setClearAuth: (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
      state.token = null;
    },

    setLogin: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
    extraReducers: {
      [register.fulfilled]: (state, action) => {
        state.isLoggedIn = false;
      },
      [register.rejected]: (state, action) => {
        state.isLoggedIn = false;
      },
      [login.fulfilled]: (state, action) => {
        state.isLoggedIn = true;
        state.user = action.payload.user;
      },
      [login.rejected]: (state, action) => {
        state.isLoggedIn = false;
        state.user = null;
      },
      [logout.fulfilled]: (state, action) => {
        state.isLoggedIn = false;
        state.user = null;
      },
    },
});

const { reducer, actions } = authSlice;
export const { setClearAuth, setLogin, setUser } = actions;
export default reducer;
