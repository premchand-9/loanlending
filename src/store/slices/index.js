import {
  getprofiledata,
  getmyrequest,
  getallrequest,
  getmodifiedrequest,
} from "../api";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const profile = createAsyncThunk("profile", async () => {
  const res = await getprofiledata();
  console.log(sessionStorage.getItem("username"))
  return res;
});
export const myrequests = createAsyncThunk("myrequests", async () => {
  const res = await getmyrequest();
  return res;
});
export const allrequests = createAsyncThunk("allrequests", async () => {
  const res = await getallrequest();
  return res;
});
export const modifiedrequests = createAsyncThunk(
  "modifiedrequests",
  async () => {
    const res = await getmodifiedrequest();
    return res;
  }
);
var initialState = {
  profile: {},
  status:false
};
const Loanslice = createSlice({
  name: "Loanslice",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(profile.fulfilled, (state, action) => {
      if(typeof action.payload!=="undefined"){
        state.profile = action.payload;
       
      }
      console.log("profile",action.payload);
      state.status=true;
    });
    builder.addCase(allrequests.fulfilled, (state, action) => {
      console.log(action.payload);
    });
    builder.addCase(myrequests.fulfilled, (state, action) => {
      console.log(action.payload);
    });
    builder.addCase(modifiedrequests.fulfilled, (state, action) => {
      console.log(action.payload);
    });
  },
});

export default Loanslice.reducer;
