import React, { useState, useEffect } from "react";
import ChangeProf from "./ChangeProf";
import { useDispatch, useSelector } from "react-redux";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ppic from "../Images/dashboardlogo.jpg";
import "./css/profile.css";
import generateurlforfile from "../S3/generateurlforfile";
import { insertrecord } from "../../store/api";
import { profile } from "../../store/slices";
window.Buffer = window.Buffer || require("buffer").Buffer;
export default function Profile() {
  const[x,x1]=useState(false);
  const status=useSelector((state) => state.loan.status);
  const dispatch = useDispatch();
  const [s, set] = useState(false);
  const [y,sety]=useState(false);
  useEffect(() => {
    console.log("Hi");
    if (s) dispatch(profile());
    set(false);
  }, [dispatch, s]);
  const [name, setname] = useState("");
  const [bankno, setbankno] = useState("");
  const [ifsc, setifsc] = useState("");
  const [ctc, setctc] = useState("");
  const [adhaar, setadhaar] = useState();
  const [pan, setpan] = useState();
  const [salaryslips, setsalaryslips] = useState();
  const [updateprofile, setupdateprofile] = useState(false);
  const profile_data = useSelector((state) => state.loan.profile);
  useEffect(() => {
    console.log(Object.keys(profile_data).length,status)
    if (Object.keys(profile_data).length > 0 &&  status)
    {
      x1(false);
      sety(true);
    }else if(Object.keys(profile_data).length === 0 &&  status){
      x1(true);
      sety(false);
    }
    // }else{
    //   x1(false);
    //   sety(false);
    // }
    console.log(profile_data,status);
  }, [dispatch, profile_data,status]);
  const pull_data = (data) => {
    setupdateprofile(false);
    set(true);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    let maxamount = Math.floor(Math.random() * (700 - 300) + 300);
    const dir = sessionStorage.getItem("username");
    let maxloan = parseInt((ctc * maxamount) / 1000);
    const adhaarurl = await generateurlforfile(adhaar, dir);
    const panurl = await generateurlforfile(pan, dir);
    const slipurl = await generateurlforfile(salaryslips, dir);
    const req = {
      pk: "profile",
      sk: "user#" + sessionStorage.getItem("username"),
      name: name,
      bankno: bankno,
      ifsc: ifsc,
      ctc: ctc,
      adhaar: adhaarurl.data.location,
      pan: panurl.data.location,
      salaryslips: slipurl.data.location,
      maxloan: maxloan,
      profile: "",
      gmail: sessionStorage.getItem("email"),
    };
    let res = await insertrecord(req);
    console.log(res);
  };
  return (
    <div className="profile">
      {status && (<>{x && (<><Form onSubmit={handleSubmit}>
        <div className="head-text">
          <div className="head-image">
            <img
              src={ppic}
              alt="profile pic"
              style={{
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                marginLeft: "120px",
                cursor: "pointer",
              }}
              onClick={() => {
                setupdateprofile(true);
              }}
            ></img>
          </div>
          <div
            className="text-on-image"
            onClick={() => {
              setupdateprofile(true);
            }}
          >
            <h6> Update Profile </h6>
          </div>
        </div>
        <Form.Group size="lg" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            autoFocus
            type="text"
            value={name}
            required
            onChange={(e) => {
              setname(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="bank name">
          <Form.Label>Bank Number</Form.Label>
          <Form.Control
            type="text"
            value={bankno}
            required
            onChange={(e) => {
              setbankno(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="ifsc">
          <Form.Label>IFSC</Form.Label>
          <Form.Control
            type="text"
            value={ifsc}
            required
            onChange={(e) => {
              setifsc(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="ctc">
          <Form.Label>CTC</Form.Label>
          <Form.Control
            type="text"
            value={ctc}
            required
            onChange={(e) => {
              setctc(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="aadhar">
          <Form.Label>Upload Adhaar</Form.Label>
          <Form.Control
            type="file"
            // value={name}
            onChange={(e) => {
              setadhaar(e.target.files[0]);
            }}
            required
          />
        </Form.Group>
        <Form.Group size="lg" controlId="pan">
          <Form.Label>Upload PAN</Form.Label>
          <Form.Control
            type="file"
            // value={name}
            onChange={(e) => {
              setpan(e.target.files[0]);
            }}
            required
          />
        </Form.Group>
        <Form.Group size="lg" controlId="sslips">
          <Form.Label>Upload salaryslips</Form.Label>
          <Form.Control
            type="file"
            // value={name}
            onChange={(e) => {
              setsalaryslips(e.target.files[0]);
            }}
            required
          />
        </Form.Group>
        <br />
        <Button variant="primary" type="submit" style={{ marginLeft: "120px" }}>
          Submit
        </Button>
      </Form>
      </>)}
      {y && <>console.log(no)</>}
      {updateprofile && <ChangeProf func={pull_data} />} </>)}
    </div>
  );
}
