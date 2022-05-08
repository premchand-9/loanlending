import React,{useState} from 'react'
import { Modal } from 'react-bootstrap';
import "antd/dist/antd.min.css";
import { useNavigate } from 'react-router-dom'
import ImgCrop from "antd-img-crop";
import { useDispatch, useSelector } from "react-redux";
import {Form,Upload} from 'antd';
import Button from "react-bootstrap/Button";
import ppic from "../Images/dashboardlogo.jpg";
import './css/profile.css'
export default function Profile() {
  const [fileList, setFileList] = useState([]);
  const [s, set] = useState(true);
  const [name,setname]=useState('');
  const [bankno,setbankno]=useState('');
  const [ifsc,setifsc]=useState('');
  const [ctc,setctc]=useState('');
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
    }
  }
  return (
    <div>      
          <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item label="Profile Pic">
            <ImgCrop rotate grid>
              <Upload listType="picture-card" onChange={onChange} {...props}>
                {fileList.length < 1 && "+ Upload"}
              </Upload>
            </ImgCrop>
          </Form.Item>
        </Form>
    </div>
        )
}
