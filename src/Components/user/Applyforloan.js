import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./css/applyforloan.css";
import { insertrecord } from "../../store/api";
export default function Applyforloan() {
  const [a, a1] = useState(false);
  const [loanamount, setloanamount] = useState("");
  const [time, settime] = useState("");
  const [interestrate, setintersetrate] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const date = new Date();
    const d = {
      pk: "loan",
      sk: "userid#9392024242",
      loanamount: loanamount,
      interestrate: interestrate,
      months: time,
      createdAt: date.toISOString(),
      status: "pending",
      totalamounttobepaid:
        parseInt(loanamount) + (loanamount * time * interestrate) / 100,
      email: sessionStorage.getItem("email"),
    };
    let data = await insertrecord(d);
    if (data.data.status === "success") {
      setloanamount("");
      settime("");
      setintersetrate();
    } else {
    }
  };
  return (
    <div className="applyforloan">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="loanamount">
          <Form.Label>Loan Amount</Form.Label>
          <Form.Control
            autoFocus
            type="number"
            min="0"
            value={loanamount}
            required
            onChange={(e) => {
              setloanamount(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="interestrate">
          <Form.Label>Interest Rate</Form.Label>
          <Form.Control
            type="number"
            step="any"
            value={interestrate}
            required
            onChange={(e) => {
              setintersetrate(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="time">
          <Form.Label>Tenuture Period(In Months)</Form.Label>
          <Form.Control
            type="number"
            min="1"
            value={time}
            required
            onChange={(e) => {
              settime(e.target.value);
            }}
          />
        </Form.Group>
        <br />
        <Button variant="primary" type="submit" style={{ marginLeft: "120px" }}>
          Submit
        </Button>
      </Form>
    </div>
  );
}
// {pk:"loan",sk:"userid",loanamount:"",interestrate:"",months:"",createdAt:"",status:"pending"}
