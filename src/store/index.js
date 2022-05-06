import { configureStore } from "@reduxjs/toolkit";
import loanreducer from "./slices";

const store = configureStore({
  reducer: {
    loan: loanreducer,
  },
});
export default store;
