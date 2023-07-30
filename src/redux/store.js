import { configureStore } from "@reduxjs/toolkit";
import counterSlice  from "./feature";

export const store = configureStore({
    reducer: {counter:counterSlice},
  })