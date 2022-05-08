import axios from "axios";
const baseUrl =
  "https://elskcti2a7.execute-api.us-east-1.amazonaws.com/dev/loanlending";
const data = {
  data: "Data About Loans",
};
const headers = {
  "Content-Type": "text/plain",
  "Access-Control-Allow-Origin": "*",
};
export const getprofiledata = async () => {
  console.log(data);
};
export const getmyrequest = async () => {
  console.log(data);
};
export const getallrequest = async () => {
  console.log(data);
};
export const getmodifiedrequest = async () => {
  console.log(data);
};
export const insertrecord = async (req) => {
  let data = await axios.post(baseUrl + "/insertrecord", req, headers);
  return data;
};
export const updateprofile = async (req) => {
  let data = await axios.post(baseUrl + "/updateprofile", req, headers);
  return data;
};
