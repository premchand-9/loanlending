import {
  CognitoUserPool,
  AuthenticationDetails,
  CognitoUser,
} from "amazon-cognito-identity-js";
import axios from "axios";
var AWS = require("aws-sdk");
AWS.config.update({
  region: "ap-south-1",
});
const poolId = process.env.REACT_APP_UserPoolId;
const ClientId = process.env.REACT_APP_ClientId;
const poolData = {
  UserPoolId: poolId,
  ClientId: ClientId,
};
const userPool = new CognitoUserPool(poolData);
const getuser = (username) => {
  return new CognitoUser({ Username: username, Pool: userPool });
};
var loggedInUser = "";
export const Signup = async (email, phoneNumber, password) => {
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
  console.log(attributeEmail, attributePhoneNumber);
  console.log(attributeList);
  userPool.signUp(phoneNumber, password, attributeList, null, (err, data) => {
    if (err) {
      if (err.toString().startsWith("InvalidParameterException")) {
        console.log("Password Constraint not Satisfied");
      } else if (err.toString().startsWith("UsernameExistsException")) {
        console.log("Username Already Exists");
      }
    } else {
    }
    console.log(err);
    if (data) console.log(data);
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
        if (err.toString().substring(7) === "Network error") {
          resolve(5);
        }
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
    axios
      .post(
        // adminbaseurl() + "/admincheck",
        { user: email },
        { headers: { "Content-Type": "text/plain" } }
      )
      .then((data) => {
        console.log(data);
        if (data.data.Status === "Success") {
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
