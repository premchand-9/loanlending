import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./CSSfiles/Signin.css";

export default function Signin() {

  return (
    <div className="Login">
      <Form >

        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"/>
        </Form.Group>


        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
         
          />
        </Form.Group><br></br>


        <Button block size="lg"  style={{width:"320px"}} type="submit">
          Login
        </Button>
       <br></br><br></br>
       <span><a href="" style={{float:"left",marginLeft:"5%",fontSize:"20px"}}>Forgotpassword</a><a href="/Signup" style={{float:"right",marginRight:"12%",fontSize:"20px"}}>Signup</a></span> 
      </Form>


    </div>
  );
}