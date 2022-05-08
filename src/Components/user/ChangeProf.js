import React ,{ useState } from 'react';
import ImgCrop from "antd-img-crop";
import "antd/dist/antd.min.css";
import { Form,Upload,Modal} from "antd";
import generateurlforfile from "../S3/generateurlforfile";
import { updateprofile } from "../../store/api";
window.Buffer = window.Buffer || require("buffer").Buffer;
export default function ChangeProf(propsp) {
    const [s, set] = useState(true);
    const [fileList, setFileList] = useState([]);
    const handleClose = () => {set(false)};
    const fu = async () => {
        set(false);
    }
    const [isModalVisible, setIsModalVisible] = useState(true);
    const handleCancel = () => {
        propsp.func("false");
        setIsModalVisible(false);
      };
    const onChange = ({ fileList: newFileList }) => {
        setFileList(newFileList);
      };

    const onSubmit = async (event)=>{
        event.preventDefault();
        const dir = "9000489472";
        const url = await generateurlforfile(fileList[0]["originFileObj"], dir);
        console.log(url.data.location)
        const req={
            "userid":"user#9000489472",
            "profurl":url.data.location
        }
        let res = await updateprofile(req)
        console.log(res)
    }
      const props = {
        beforeUpload: (file) => {
          return false;
        }
    }
  return (
    <Modal 
    title="Change Pic"
    visible={isModalVisible}
    onCancel={handleCancel}
    style={{ textAlign: "center" }}
    footer={[]}>
    <Form.Item label="Profile Pic">
    <ImgCrop rotate grid>
        <Upload listType="picture-card" onChange={onChange} {...props}>
        {fileList.length < 1 && "+ Upload"}
        </Upload>
    </ImgCrop>
    </Form.Item>
    <button type="submit" className="btn btn-primary" onClick={onSubmit}>
            Submit
          </button><br />
    </Modal>
  )
}
