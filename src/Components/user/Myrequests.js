import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import History from "./History";
export default function Myrequests() {
  const [a, a1] = useState(false);
  const [loanamount, setloanamount] = useState("");
  const [time, settime] = useState("");
  const [interestrate, setintersetrate] = useState("");
  return (
    <>
      <div style={{ marginTop: "40px", float: "right", marginRight: "40%" }}>
        <Button
          variant="secondary"
          onClick={() => {
            a1(true);
          }}
        >
          Apply For Loan
        </Button>{" "}
        {a && (
          <Form>
            <Form.Group size="lg" controlId="loanamount">
              <Form.Label>Loan Amount</Form.Label>
              <Form.Control
                autoFocus
                type="text"
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
                autoFocus
                type="text"
                value={interestrate}
                required
                onChange={(e) => {
                  setintersetrate(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group size="lg" controlId="time">
              <Form.Label>Tenuture Period</Form.Label>
              <Form.Control
                autoFocus
                type="text"
                value={time}
                required
                onChange={(e) => {
                  settime(e.target.value);
                }}
              />
            </Form.Group>
            <br />
            <Button
              variant="primary"
              type="submit"
              style={{ marginLeft: "50px" }}
            >
              Submit
            </Button>
          </Form>
        )}
      </div>
    </>
  );
}

// {pk:"loan",sk:"userid",loanamount:"",interestrate:"",months:"",createdAt:"",status:"pending"}
