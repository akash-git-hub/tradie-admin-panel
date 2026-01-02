import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Form, Button, Image } from "react-bootstrap";
import Sidebar from "../../component/Sidebar";
import Header from "../../component/Header";
import BackArrowIcon from "../../Icon/BackArrowIcon";
import AddImageIcon from "../../Icon/AddImageIcon";
import ReusableTable from "../../component/ReuseableTable";


const Offer = () => {
    const [active, setActive] = useState("Others");
    const [serviceName, setServiceName] = useState("");
    const [status, setStatus] = useState("Active");
    const [licenseRequired, setLicenseRequired] = useState(false);

    const [defaultImage, setDefaultImage] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);

    const defaultInputRef = useRef(null);
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

    const columns = [
        { label: "SNO", key: "id" },
        { label: "IMAGE", key: "image" },
        { label: "SERVICE NAME", key: "name" },
        { label: "ACTION", key: "action" },
    ]

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

    const data = [
        {
            id: "00001",
            image: (
                <Image
                    src="https://via.placeholder.com/60"
                    width={50}
                    height={50}
                    rounded
                />
            ),
            name: "Service 01",
            action: (
                <div className="d-flex gap-2">

                    <Button variant="outline-danger" size="sm">
                        Delete
                    </Button>
                </div>
            ),
        },
        {
            id: "00002",
            image: (
                <Image
                    src="https://via.placeholder.com/60"
                    width={50}
                    height={50}
                    rounded
                />
            ),
            name: "Service 02",
            action: (
                <div className="d-flex gap-2">

                    <Button variant="outline-danger" size="sm">
                        Delete
                    </Button>
                </div>
            ),
        },
        {
            id: "00003",
            image: (
                <Image
                    src="https://via.placeholder.com/60"
                    width={50}
                    height={50}
                    rounded
                />
            ),
            name: "Service 03",
            action: (
                <div className="d-flex gap-2">
                    <Button variant="outline-danger" size="sm">
                        Delete
                    </Button>
                </div>
            ),
        },
    ];

    return (
        <div className="d-flex min-vh-100">
            <Sidebar active={active} onLinkClick={setActive} />

            <div className="flex-grow-1">
                <Header />

                <Container fluid className="p-4 text-start">
                    <h4 className="fw-bold mb-4"><span onClick={() => navigate("/service_list")}><BackArrowIcon /></span> Upload Offers</h4>

                    <Row className="mb-4 text-start">
                        <Col md={2}>
                            <div
                                className="upload-box"
                                onClick={() => defaultInputRef.current.click()}
                            >
                                {defaultImage ? (
                                    <img src={defaultImage} alt="default" />
                                ) : (
                                    <span><AddImageIcon /></span>
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
                    </Row>

                    <Row className="mb-4">
                        <Col md={4}>
                            <Form.Label>Offers Title</Form.Label>
                            <Form.Control
                                placeholder="Kitchen Offer"
                                value={serviceName}
                                onChange={(e) => setServiceName(e.target.value)}
                            />
                        </Col>
                    </Row>
                    <Button className="submit-btn px-5 py-3 w-25 rounded-5" onClick={handleSubmit}>
                        Submit
                    </Button>
                    <div className="mt-5">
                        <ReusableTable columns={columns} data={data} />
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Offer;
