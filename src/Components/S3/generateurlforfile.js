import S3FileUpload from "react-s3";
const config = {
  bucketName: process.env.REACT_APP_S3_Bucket_Name,
  //   dirName: "photos" /* optional */,
  region: "us-east-1",
  accessKeyId: process.env.REACT_APP_S3_Access_Key,
  secretAccessKey: process.env.REACT_APP_S3_Secret_Key,
};
export default function generateurlforfile(data) {
  return new Promise(function (resolve, reject) {
    S3FileUpload.uploadFile(data, config)
      .then((data) => {
        console.log(data);
        resolve({ status: "success", data: data });
      })
      .catch((err) => {
        console.error(err);
        resolve({ status: "error", err: err });
      });
  });
}
