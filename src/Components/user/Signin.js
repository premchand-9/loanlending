import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.css";
import "./css/Signin.css";
import { login } from "../cognito/handler";
import { useNavigate } from "react-router-dom";
export default function Signin() {
  const navigate = useNavigate();
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [err, seterr] = useState(false);
  const [text, settext] = useState("");
  const signup = () => {
    navigate("/signup");
  };
  const forgotPassword = () => {
    navigate("/forgotPassword");
  };
  const handlelogin = async () => {
    let res = await login(username, password);
    console.log(res);
    if (res === 1) {
      navigate("/Dashboard");
    } else if (res === 2) {
      settext(
        "Incorrect credentials.Please check you have verified your email address"
      );
    } else {
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

        <br />
        <p style={{ color: "red" }}>{text}</p>

        <Button
          block
          size="lg"
          style={{ width: "320px" }}
          type="button"
          onClick={handlelogin}
        >
          Login
        </Button>
        <br></br>
        <br></br>
        <span>
          <p
            onClick={forgotPassword}
            style={{
              float: "left",
              marginLeft: "5%",
              fontSize: "20px",
              cursor: "pointer",
            }}
          >
            Forgotpassword
          </p>
          &nbsp;
          <p
            onClick={signup}
            style={{
              float: "right",
              marginRight: "12%",
              fontSize: "20px",
              cursor: "pointer",
            }}
          >
            Signup
          </p>
        </span>
      </Form>
    </div>
  );
}
