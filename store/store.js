import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import authReducer from "./slices/auth.js";
import messageReducer from "./slices/message.js";
import loadingReducer from "./slices/loadingSlice.js";
import categoryReducer from "./slices/category.js";
import courseReducer from "./slices/course.js";
import singleCourseReducer from "./slices/singleCourse";

import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import { createWrapper } from "next-redux-wrapper";

const persistConfig = {
  key: "auth",
  storage,
};
const persistedAuthReducer = persistReducer(persistConfig, authReducer);

const reducers = combineReducers({
  auth: persistedAuthReducer,
  message: messageReducer,
  loading: loadingReducer,
  category: categoryReducer,
  course: courseReducer,
  singleCourse: singleCourseReducer,
});

const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export default store;
export const wrapper = createWrapper(store);
