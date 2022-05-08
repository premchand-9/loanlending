import React, { useState } from "react";
import { ForgetPassword, checkuser } from "../cognito/handler";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./css/forgotpassword.css";
import { useNavigate } from "react-router-dom";
export default function ForgotPassword() {
  const navigate = useNavigate();
  const validPassword = new RegExp("^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$");
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [otp, setotp] = useState("");
  const [a, a1] = useState(true);
  const [showotp, setshowotp] = useState(false);
  const handlecheckuser = async () => {
    let data = await checkuser(username);
    if (data === 1) {
      a1(false);
      setshowotp(true);
    } else if (data === 2) {
      console.log("User Not Found");
    }
  };
  const handleotp = async () => {
    if (!validPassword.test(password)) {
      console.log("Password constraint not valid");
    } else {
      let data = await ForgetPassword(otp, password);
      if (data === 1) {
        navigate("/");
      }
    }
  };
  return (
    <div className="forgot">
      <Form>
        {a ? (
          <>
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
            <br />
            <Button
              block
              size="lg"
              style={{ width: "320px" }}
              type="button"
              onClick={handlecheckuser}
            >
              Submit
            </Button>
          </>
        ) : (
          <>
            <Form.Group size="lg" controlId="number">
              <Form.Label>OTP</Form.Label>
              <Form.Control
                autoFocus
                type="text"
                value={otp}
                onChange={(e) => {
                  setotp(e.target.value);
                }}
              />
            </Form.Group>
            <br />
            <Form.Group size="lg" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                autoFocus
                type="password"
                value={password}
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
              />
            </Form.Group>
            <br />
            <Button
              block
              size="lg"
              style={{ width: "320px" }}
              type="button"
              onClick={handleotp}
            >
              Submit
            </Button>
          </>
        )}
      </Form>
    </div>
  );
}
