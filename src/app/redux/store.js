import { configureStore } from "@reduxjs/toolkit";
import someReducer from "./features/someSlice"; // Example reducer

const store = configureStore({
  reducer: {
    someFeature: someReducer,
  },
});

export default store;