import { getLoanrequireddata } from "../api";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const Loandata = createAsyncThunk("Loandata", async () => {
  console.log("Loan Data");
  const res = await getLoanrequireddata();
  return res;
});
var initialState = {
  Loan: {},
};
const Loanslice = createSlice({
  name: "Loanslice",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(Loandata.fulfilled, (state, action) => {
      state.Loan = action.payload;
    });
  },
});

export default Loanslice.reducer;
