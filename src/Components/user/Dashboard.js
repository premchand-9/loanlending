import React, {Component } from 'react';
import { Nav, Navbar ,Container} from "react-bootstrap";


export default class Dashboard extends Component {
  render() {
    return (
      <div><>
      <Navbar bg="primary" variant="dark" style={{height:"70px"}}>
        <Container>
        <Navbar.Brand href=""><b>Profile</b></Navbar.Brand>
        <Nav className="">
          <Nav.Link href=""><b>Allrequests</b></Nav.Link>
          <Nav.Link href=""><b>Myrequests</b></Nav.Link>
          
          <Nav.Link href="/"><b>Logout</b></Nav.Link>
          
        </Nav>
        </Container>
      </Navbar>
     
    </></div>
    )
  }
}
