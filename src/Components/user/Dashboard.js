import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
export default function Dashboard() {
  const navigate = useNavigate();
  const logout = () => {
    navigate("/");
  };
  const allrequests = () => {
    navigate("/allrequests");
  };
  const profile = () => {
    navigate("/profile");
  };
  const myrequests = () => {
    navigate("/myrequests");
  };
  return (
    <div>
      <>
        <Navbar bg="primary" variant="dark" style={{ height: "70px" }}>
          <Container>
            <Navbar.Brand onClick={profile}>
              <b>Profile</b>
            </Navbar.Brand>
            <Nav className="">
              <Nav.Link onClick={allrequests}>
                <b>Allrequests</b>
              </Nav.Link>
              <Nav.Link onClick={myrequests}>
                <b>Myrequests</b>
              </Nav.Link>
              <Nav.Link onClick={logout}>
                <b>Logout</b>
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
    </div>
  );
}
