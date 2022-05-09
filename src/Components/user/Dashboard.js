import React, { useState, useEffect } from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Allrequests from "./Allrequests";
import Profile from "./Profile";
import Myrequests from "./Myrequests";
import Applyforloan from "./Applyforloan";
import {
  profile,
  myrequests,
  allrequests,
  modifiedrequests,
} from "../../store/slices";
import { useDispatch } from "react-redux";
export default function Dashboard(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("Method Dispatched");
    dispatch(profile());
    dispatch(myrequests());
    dispatch(allrequests());
    dispatch(modifiedrequests());
  }, [dispatch]);
  const [a, a1] = useState(true);
  const [b, b1] = useState(false);
  const [c, c1] = useState(false);
  const [d, d1] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (props.value === "allrequests") {
      a1(false);
      b1(true);
      c1(false);
      d1(false);
      navigate("/allrequests");
    } else if (props.value === "myrequests") {
      a1(false);
      b1(false);
      c1(true);
      d1(false);
      navigate("/myrequests");
    } else if (props.value === "profile") {
      a1(true);
      b1(false);
      c1(false);
      d1(false);
      navigate("/profile");
    } else if (props.value === "applyforloan") {
      a1(false);
      b1(false);
      c1(false);
      d1(true);
      navigate("/applyforloan");
    }
  }, [navigate, props.value]);
  return (
    <div>
      <>
        <Navbar bg="primary" variant="dark" style={{ height: "70px" }}>
          <Container>
            <Navbar.Brand
              onClick={() => {
                navigate("/profile");
                a1(true);
                b1(false);
                c1(false);
              }}
            >
              <b>Profile</b>
            </Navbar.Brand>
            <Nav className="">
              <Nav.Link
                onClick={() => {
                  a1(false);
                  b1(false);
                  c1(false);
                  d1(true);
                  navigate("/applyforloan");
                }}
              >
                <b>ApplyforLoan</b>
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  navigate("/allrequests");
                  a1(false);
                  b1(true);
                  c1(false);
                  d1(true);
                }}
              >
                <b>Allrequests</b>
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  navigate("/myrequests");
                  a1(false);
                  b1(false);
                  c1(true);
                }}
              >
                <b>Myrequests</b>
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  navigate("/");
                }}
              >
                <b>Logout</b>
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
      {a && <Profile />}
      {c && <Myrequests />}
      {b && <Allrequests />}
      {d && <Applyforloan />}
    </div>
  );
}
