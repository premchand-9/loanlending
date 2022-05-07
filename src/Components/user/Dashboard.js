import React, { useState, useEffect, useRef } from "react";
import logo from "../Images/dashboardlogo.jpg"
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { Nav, Navbar } from "react-bootstrap";
import Profile from "./Profile";
import Myrequests from "./Myrequests";
import Allrequests from "./Allrequests";
export default function Dashboard(props) {
  const navigate = useNavigate();
  const [a, a1] = useState(false);
  const [b, b1] = useState(false);
  const [c, c1] = useState(false);
  const [d, d1] = useState(false);
  useEffect(() => {
    console.log(props.value);
    console.log(a,b,c,d);
    if (props.value === "myrequests") {
      a1(true);
      b1(false);
      c1(false);
      d1(false);
    } else if (props.value === "allrequests") {
      a1(false);
      b1(true);
      c1(false);
      d1(false);
    } else if (props.value === "profile") {
      a1(false);
      b1(false);
      c1(true);
      d1(false);
    } else if (props.value === "dashboard") {
      a1(false);
      b1(false);
      c1(false);
      d1(true);
    }
  }, [props.value]);
  return (<div>
    <div>
    <header>
            <Navbar
              bg="primary"
              variant="dark"
              sticky="top"
              expand="sm"
              collapseOnSelect
              style={{ width: "100%", position: "fixed" }}
            >
              <Navbar.Brand>
                <img
                  style={{ borderRadius: "5%" }}
                  src={logo}
                  alt="logo"
                  width="60px"
                  height="30px"
                />{" "}
              </Navbar.Brand>
              <Navbar.Toggle className="coloring" />
              <Navbar.Collapse>
                <Nav>
                  <Nav.Link
                    onClick={() => {
                      a1(false);
                      b1(false);
                      c1(false);
                      d1(true);
                      navigate("/User/Dashboard");
                    }}
                  >
                    Dashboard
                  </Nav.Link>
                  <Nav.Link
                    onClick={() => {
                      a1(false);
                      b1(false);
                      c1(true);
                      d1(false);
                      navigate("/User/Profile");
                    }}
                  >
                    Profile
                  </Nav.Link>
                  <Nav.Link
                    onClick={() => {
                      a1(true);
                      b1(false);
                      c1(false);
                      d1(false);
                      navigate("/User/MyRequests");
                    }}
                  >
                    MyRequests
                  </Nav.Link>
                  <Nav.Link
                    onClick={() => {
                      a1(false);
                      b1(true);
                      c1(false);
                      d1(false);
                      navigate("/User/AllRequests");
                    }}
                  >
                    AllRequests
                  </Nav.Link>
                  <Nav.Link
                    onClick={() => {
                      navigate("/");
                    }}
                  >
                    Logout
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </header></div>
          <div style={{marginTop:'70px'}}>
            {d ?(
              <div>
                Hello Mava
                </div>
            ): <></>}
            {a ? < Myrequests/> : <></>}
            {b ? <Allrequests /> : <></>}
            {c ? <Profile /> : <></>}
          </div>
  </div>);
}
