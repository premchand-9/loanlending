import axios from "axios";
const baseUrl =
  "https://elskcti2a7.execute-api.us-east-1.amazonaws.com/dev/loanlending";
const headers = { "Content-Type": "application/json" };
export const getprofiledata = async () => {
  let data = await axios.post(
    baseUrl + "/fetchprofile",
    { pk: "profile", sk: "user#" + sessionStorage.getItem("username") },
    headers
  );
  return data.data.data;
};
export const getmyrequest = async () => {
  // console.log(data);
  // let data = await axios.post(
  //   baseUrl + "/",
  //   { pk: "profile", sk: sessionStorage.getItem("username") },
  //   headers
  // );
  // return data;
};
export const getallrequest = async () => {
  console.log(data);
  let data = await axios.post(
    baseUrl + "/fetchloanrequests",
    { pk: "loan", sk: "user#" + sessionStorage.getItem("username") },
    headers
  );
  console.log("getallrequest", data);
  return data;
};
export const getmodifiedrequest = async () => {
  console.log(data);
  let data = await axios.post(
    baseUrl + "/modifiedloanrequests",
    { pk: "user#" + sessionStorage.getItem("username") },
    headers
  );
  console.log("getmodifiedrequets", data);
  return data;
};
export const insertrecord = async (req) => {
  let data = await axios.post(baseUrl + "/insertrecord", req, headers);
  return data;
};
export const updateprofile = async (req) => {
  let data = await axios.post(baseUrl + "/updateprofile", req, headers);
  return data;
};
