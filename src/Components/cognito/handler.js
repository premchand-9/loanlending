import {
  CognitoUserPool,
  AuthenticationDetails,
  CognitoUser,
} from "amazon-cognito-identity-js";
import axios from "axios";
const AWS = require("aws-sdk");
AWS.config.update({
  region: "ap-south-1",
});
const poolId = process.env.REACT_APP_UserPoolId;
const ClientId = process.env.REACT_APP_ClientId;
const poolData = {
  UserPoolId: poolId,
  ClientId: ClientId,
};
var AmazonCognitoIdentity = require("amazon-cognito-identity-js");
const userPool = new CognitoUserPool(poolData);
const getuser = (username) => {
  return new CognitoUser({ Username: username, Pool: userPool });
};
var loggedInUser = "";
export const Signup = async (email, phoneNumber, password) => {
  return new Promise((resolve, reject) => {
    var attributeList = [];
    var attributeEmail = new AmazonCognitoIdentity.CognitoUserAttribute({
      Name: "email",
      Value: email,
    });
    var attributePhoneNumber = new AmazonCognitoIdentity.CognitoUserAttribute({
      Name: "phone_number",
      Value: "+91" + phoneNumber,
    });
    attributeList.push(attributeEmail);
    attributeList.push(attributePhoneNumber);
    userPool.signUp(phoneNumber, password, attributeList, null, (err, data) => {
      if (err) {
        console.log(err);
        if (err.toString().startsWith("UsernameExistsException")) {
          reject("Username Already Exists");
        } else if (err.toString().startsWith("Invalid phone number format")) {
          reject("Invalid phone number");
        }
      }
      if (data) {
        console.log(data);
        console.log(1);
        resolve(1);
      }
    });
  });
};
export const login = async (username, password) => {
  return new Promise((resolve, reject) => {
    const user = getuser(username);
    console.log(user);
    const authDetails = new AuthenticationDetails({
      Username: username,
      Password: password,
    });
    user.authenticateUser(authDetails, {
      onSuccess: (data) => {
        user.getUserAttributes(function (err, result) {
          if (result) {
            sessionStorage.setItem("username", result[3]["Value"].slice(3));
            resolve(1);
          } else {
            console.error(err);
            resolve(4);
          }
        });
      },
      onFailure: (err) => {
        console.error(err);
        resolve(2);
      },
      newPasswordRequired: (data) => {
        resolve(3);
      },
    });
  });
};
export const checkuser = async (email) => {
  return new Promise((resolve, reject) => {
    loggedInUser = getuser(email);
    console.log(loggedInUser);
    axios
      .post(
        "https://elskcti2a7.execute-api.us-east-1.amazonaws.com/dev/loanlending/checkuser",
        { email: email },
        { headers: { "Content-Type": "text/plain" } }
      )
      .then((data) => {
        if (JSON.parse(data.data.body).Status === "Success") {
          console.log("Hi");
          loggedInUser.forgotPassword({
            onSuccess: (data) => {
              console.log(data);
            },
            onFailure: (err) => {
              console.log(err);
            },
            inputVerificationCode: (data) => {
              console.log("code sent successfully");
              resolve(1);
            },
          });
        }
        if (data.data.Status === "Not Found") {
          resolve(2);
        }
      })
      .catch((err) => {
        console.log(err);
        resolve(3);
      });
  });
};

export const ForgetPassword = async (OTP, password) => {
  return new Promise((resolve, reject) => {
    const user = loggedInUser;
    user.confirmPassword(OTP, password, {
      onSuccess: (data) => {
        console.log("Success Changed Successfully");
        resolve(1);
      },
      onFailure: (err) => {
        console.error("Something Went Wrong! Please try again");
        resolve(2);
      },
    });
  });
};
export const Logout = async () => {
  loggedInUser.signOut();
};
