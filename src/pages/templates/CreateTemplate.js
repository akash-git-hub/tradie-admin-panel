import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../component/Sidebar";
import Header from "../../component/Header";
import BackArrowIcon from "../../Icon/BackArrowIcon";

const CreateTemplate = () => {
    const [active, setActive] = useState("Others");
    const [templateName, setTemplateName] = useState("");


    const navigate = useNavigate();

    const handleSubmit = () => {
        const payload = {
            templateName,
        };

        console.log("SERVICE DATA 👉", payload);
    };

    return (
        <div className="d-flex min-vh-100">
            <Sidebar active={active} onLinkClick={setActive} />

            <div className="flex-grow-1">
                <Header />

                <Container fluid className="p-4 text-start">
                    <h4 className="fw-bold mb-4"><span onClick={() => navigate("/template_list")}><BackArrowIcon /></span> Create Template</h4>
                    <Row className="mb-4">
                        <Col md={4}>
                            <Form.Label>Template Name</Form.Label>
                            <Form.Control
                                placeholder="Kitchen Offer"
                                value={templateName}
                                onChange={(e) => setTemplateName(e.target.value)}
                            />
                        </Col>
                    </Row>
                    <Button className="submit-btn px-5 py-3 w-25 rounded-5" onClick={handleSubmit}>
                        Submit
                    </Button>
                </Container>
            </div>
        </div>
    );
};

export default CreateTemplate;
