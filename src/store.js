import { configureStore } from "@reduxjs/toolkit";
import stateReducer from "./stateSlice";
//⤵️this sets up the redux store. Slices get passed into this store.
export const store = configureStore({
  reducer: {
    //⤵️ "stateValues" is what you will use to access the reducer in the react component.
    stateValues: stateReducer,
  },
});
