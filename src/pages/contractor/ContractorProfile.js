import React from "react";
import { Card, Row, Col, Badge, Image } from "react-bootstrap";
import Header from "../../component/Header";
import Sidebar from "../../component/Sidebar";
import KitchenIcon from "../../Icon/KitchenIcon";
import BedRoomIcon from "../../Icon/BedroomIcon";
import FlooringIcon from "../../Icon/FlooringIcon";
import ElectricityIcon from "../../Icon/ElectricityIcon";

const services = [
    { label: "Bedroom Remodel", icon: "🛏️" },
    { label: "Kitchen Remodel", icon: "🍳" },
    { label: "Plumbing", icon: "🚿" },
    { label: "Electricity", icon: "⚡" }
];

const galleryImages = [
    "/assets/images/1.jpg",
    "/assets/images/2.jpg",
    "/assets/images/3.jpg",
    "/assets/images/4.jpg",
    "/assets/images/5.jpg",
    "/assets/images/6.jpg",
    "/assets/images/7.jpg",
    "/assets/images/8.jpg",
    "/assets/images/9.jpg"
];

const icons = {
    Kitchen: <KitchenIcon size={24} />,
    Bedroom: <BedRoomIcon size={24} />,
    Flooring: <FlooringIcon size={24} />,
    Electricity: <ElectricityIcon size={24} />,
};

const ContractorProfile = () => {
    return (
        <div className="d-flex min-vh-100">
            <div className="sidebar-wrapper">
            <Sidebar />
            </div>
            {/* ===== MAIN AREA ===== */}
            <div className="flex-grow-1 overflow-hidden">
                <Header />
                <div className="p-4">
                    {/* Page Title */}
                    <div className="d-flex align-items-center mb-4">
                        <span className="me-2 fs-4">←</span>
                        <h4 className="fw-bold mb-0">Contractor Profile</h4>
                    </div>

                    <Card className="border rounded-4 p-4">
                        <Row>
                            {/* LEFT SECTION */}
                            <Col lg={6}>
                                <div className="d-flex gap-3 mb-3">
                                    <Image
                                        src="https://i.pravatar.cc/40"
                                        width={150}
                                        height={150}
                                    />

                                    <div>
                                        <h4 className="fw-bold mb-1">Duane Dean</h4>
                                        <p className="mb-1 text-muted">rusty.botsford@wilfrid.io</p>
                                        <p className="mb-1 text-muted">
                                            1341 Poplar Street, Chicago, IL 60606
                                        </p>
                                        <p className="mb-1 text-muted">+91-8989786510</p>
                                        <span className="text-success fw-semibold">
                                            Contractor Licence
                                        </span>
                                    </div>
                                </div>
                                <h6 className="fw-bold mb-2 text-start">Services</h6>
                                {/* Services */}
                                <Row className="g-1 mb-2">
                                    {["Kitchen", "Bedroom", "Flooring", "Electricity"].map((item) => (
                                        <Col sm={6} key={item}>
                                            <Card className="border-1 rounded-4 p-3 text-center">
                                                <div className="d-flex align-items-center gap-2">
                                                    <span className="text-warning">
                                                        {icons[item]}
                                                    </span>
                                                    <span>{item}</span>
                                                </div>
                                            </Card>
                                        </Col>
                                    ))}
                                </Row>

                                {/* Who we are */}
                                <div>
                                    <h6 className="fw-bold mb-2 text-start">Who we are</h6>
                                    <p className="text-muted mb-0">
                                        Description text about something on this page that can be long
                                        or short. It can be pretty long and explaining information
                                        about the contractor profile.
                                    </p>
                                </div>
                            </Col>

                            {/* RIGHT SECTION (GALLERY) */}
                            <Col lg={6}>
                                <Row className="g-2">
                                    {galleryImages.map((img, index) => (
                                        <Col xs={4} key={index}>
                                            <div
                                                className="rounded-3 overflow-hidden"
                                                style={{ height: "100px" }}
                                            >
                                                <img
                                                    src={img}
                                                    alt="gallery"
                                                    className="w-100 h-100 object-fit-cover"
                                                />
                                            </div>
                                        </Col>
                                    ))}
                                </Row>
                            </Col>
                        </Row>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default ContractorProfile;
