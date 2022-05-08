import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.css";
import "./css/Signin.css";
import { Signup } from "../cognito/handler";
import { useNavigate } from "react-router-dom";
export default function SignUp() {
  const navigate = useNavigate();
  const validPassword = new RegExp("^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$");
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [err, seterr] = useState(0);
  const [text, settext] = useState("");
  const [log, setlog] = useState(false);
  const redirecttologin = async () => {
    setlog(false);
    navigate("/");
  };
  const handlesignup = async () => {
    if (!validPassword.test(password)) {
      seterr(1);
    } else if (password !== confirmPassword) {
      seterr(2);
    } else if (phoneNumber.length !== 10) {
      seterr(3);
    } else {
      settext("");
      seterr(4);
      const data = await Signup(username, phoneNumber, password);
      console.log(data);
      if (data === "Invalid phone number") {
        console.log("Invalid Phonenumber");
        settext("Invalid phone number");
      } else if (data === 1) {
        console.log("We have sent a Verification link to your email");
        setlog(true);
        setusername("");
        setpassword("");
        setconfirmPassword("");
        setphoneNumber("");
        settext("We have sent a Verification link to your email");
      } else if (data === "Username Already Exists") {
        console.log("Username already exists");
        settext("Email Already Exists");
      } else if (data === "Something went wrong") {
        console.log("Something went wrong");
        settext("Something went wrong");
      }
    }
  };
  return (
    <div className="Login">
      <Form>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={username}
            onChange={(e) => {
              setusername(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group size="lg" controlId="phonenumber">
          <Form.Label>Phonenumber</Form.Label>
          <Form.Control
            type="tel"
            value={phoneNumber}
            onChange={(e) => {
              setphoneNumber(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => {
              setpassword(e.target.value);
            }}
          />
        </Form.Group>

        <br></br>

        <Form.Group size="lg" controlId="password">
          <Form.Label>ConfirmPassword</Form.Label>
          <Form.Control
            type="password"
            value={confirmPassword}
            onChange={(e) => {
              setconfirmPassword(e.target.value);
            }}
          />
          {err === 1 && (
            <p style={{ color: "red" }}>
              Password Must contain at least one character,one Upper Case,one
              Lower Case and One Special Character
            </p>
          )}
          {err === 2 && (
            <p style={{ color: "red" }}>
              Password and Confirm Password are not same
            </p>
          )}
          {err === 3 && (
            <p style={{ color: "red" }}>
              Phone Number constraint not satisfied
            </p>
          )}
          {err === 4 && <p style={{ color: "red" }}>{text}</p>}
        </Form.Group>

        <br></br>
        <Button
          block
          size="lg"
          style={{ width: "320px" }}
          type="button"
          onClick={handlesignup}
        >
          Signup
        </Button>
        <br />
        <br />
        {log && (
          <Button
            block
            size="lg"
            style={{ width: "320px" }}
            type="button"
            onClick={redirecttologin}
          >
            Go to Login
          </Button>
        )}
      </Form>
    </div>
  );
}
