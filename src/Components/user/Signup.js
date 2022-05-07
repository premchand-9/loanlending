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


        <Form.Group size="lg" controlId="email">
          <Form.Label>Phonenumber</Form.Label>
          <Form.Control
          
            type="number"/>
        </Form.Group>

    


        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password" />
        </Form.Group>
        
        <br></br>

        <Form.Group size="lg" controlId="password">
          <Form.Label>ConfirmPassword</Form.Label>
          <Form.Control
            type="password" />
        </Form.Group>

        <br></br>
        <a href="/">   <Button block size="lg"  style={{width:"320px"}} type="button">
         Signup
        </Button></a>
       
       <br></br><br></br>
      
      </Form>


    </div>
  );
}