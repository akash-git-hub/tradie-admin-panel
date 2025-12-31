import { useRef, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Sidebar from "../../../component/Sidebar";
import Header from "../../../component/Header";
import AddImageIcon from "../../../Icon/AddImageIcon";
import { useNavigate } from "react-router-dom";
import BackArrowIcon from "../../../Icon/BackArrowIcon";

const CreateService = () => {
  const [active, setActive] = useState("Others");
  const [serviceName, setServiceName] = useState("");
  const [status, setStatus] = useState("Active");
  const [licenseRequired, setLicenseRequired] = useState(false);

  const [defaultImage, setDefaultImage] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const defaultInputRef = useRef(null);
  const selectedInputRef = useRef(null);
    const navigate = useNavigate();

  const handleImageUpload = (e, type) => {
    const file = e.target.files[0];
    if (!file) return;

    const preview = URL.createObjectURL(file);

    if (type === "default") {
      setDefaultImage(preview);
    } else {
      setSelectedImage(preview);
    }
  };

  const handleSubmit = () => {
    const payload = {
      serviceName,
      status,
      licenseRequired,
      defaultImage,
      selectedImage,
    };

    console.log("SERVICE DATA 👉", payload);
  };

  return (
    <div className="d-flex min-vh-100">
      <Sidebar active={active} onLinkClick={setActive} />

      <div className="flex-grow-1">
        <Header />

        <Container fluid className="p-4 text-start">
          <h4 className="fw-bold mb-4"><span onClick={() => navigate("/service_list")}><BackArrowIcon/></span> Upload Services</h4>

          <Row className="mb-4 text-start">
            <Col md={2}>
              <p className="fw-semibold">Default Image</p>
              <div
                className="upload-box"
                onClick={() => defaultInputRef.current.click()}
              >
                {defaultImage ? (
                  <img src={defaultImage} alt="default" />
                ) : (
                  <span><AddImageIcon/></span>
                )}
              </div>
              <input
                type="file"
                hidden
                ref={defaultInputRef}
                accept="image/*"
                onChange={(e) => handleImageUpload(e, "default")}
              />
            </Col>

            <Col md={2}>
              <p className="fw-semibold">Selected Image</p>
              <div
                className="upload-box"
                onClick={() => selectedInputRef.current.click()}
              >
                {selectedImage ? (
                  <img src={selectedImage} alt="selected" />
                ) : (
                  <span><AddImageIcon/></span>
                )}
              </div>
              <input
                type="file"
                hidden
                ref={selectedInputRef}
                accept="image/*"
                onChange={(e) => handleImageUpload(e, "selected")}
              />
            </Col>
          </Row>

          <Row className="mb-4">
            <Col md={4}>
              <Form.Label>Service Name</Form.Label>
              <Form.Control
                placeholder="Kitchen Offer"
                value={serviceName}
                onChange={(e) => setServiceName(e.target.value)}
              />
            </Col>

            <Col md={4}>
              <Form.Label>Status</Form.Label>
              <Form.Select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option>Active</option>
                <option>Inactive</option>
              </Form.Select>
            </Col>
          </Row>

          <Form.Check
            type="checkbox"
            label="Required license"
            checked={licenseRequired}
            onChange={(e) => setLicenseRequired(e.target.checked)}
            className="mb-4"
          />

          <Button className="submit-btn px-5 py-3 w-25 rounded-5" onClick={handleSubmit}>
            Submit
          </Button>
        </Container>
      </div>
    </div>
  );
};

export default CreateService;
