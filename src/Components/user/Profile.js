import React, { useState } from "react";
import "antd/dist/antd.min.css";
import { useNavigate } from "react-router-dom";
import ImgCrop from "antd-img-crop";
import { useDispatch, useSelector } from "react-redux";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ppic from "../Images/dashboardlogo.jpg";
import "./css/profile.css";
export default function Profile() {
  const [fileList, setFileList] = useState([]);
  const [s, set] = useState(true);
  const [name, setname] = useState("");
  const [bankno, setbankno] = useState("");
  const [ifsc, setifsc] = useState("");
  const [ctc, setctc] = useState("");
  const navigate = useNavigate();
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
    console.log(newFileList);
  };
  const props = {
    beforeUpload: (file) => {
      return false;
    },
  };
  return (
    <div className="profile">
      <Form>
        <img
          src={ppic}
          alt="profile pic"
          style={{ width: "100px", height: "100px", borderRadius: "50%" }}
          onClick={() => {
            console.log("Hi");
          }}
        ></img>
        <Form.Group size="lg" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            autoFocus
            type="text"
            value={name}
            onChange={(e) => {
              setname(e.target.value);
            }}
          />
        </Form.Group>
      </Form>
    </div>
  );
}
