

import React, { useState } from "react";
import { Card, Row, Col, Image, Button } from "react-bootstrap";
import BackArrowIcon from "../../Icon/BackArrowIcon";
import Sidebar from "../../component/Sidebar";
import Header from "../../component/Header";
import { Navigate } from "react-router-dom";
import ElectricityIcon from "../../Icon/ElectricityIcon";
import FlooringIcon from "../../Icon/FlooringIcon";
import BedRoomIcon from "../../Icon/BedroomIcon";
import KitchenIcon from "../../Icon/KitchenIcon";

const LicenseVerificationDetail = () => {
    const [active, setActive] = useState("Services");

    const icons = {
        Kitchen: <KitchenIcon size={24} />,
        Bedroom: <BedRoomIcon size={24} />,
        Flooring: <FlooringIcon size={24} />,
        Electricity: <ElectricityIcon size={24} />,
    };

    const documents = [
        "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952",
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f",
        "https://images.unsplash.com/photo-1519681393784-d120267933ba",
        "https://images.unsplash.com/photo-1544717305-2782549b5136",
    ];

    return (
        <div className="d-flex min-vh-100">
            <div className="sidebar-wrapper">
                <Sidebar active={active} onLinkClick={setActive} />
            </div>
            <div className="flex-grow-1">
                <Header />

                <div className="p-4">
                    <div className="d-flex align-items-center mb-4">
                        <BackArrowIcon size={22} className="me-3 cursor-pointer" />
                        <h4 className="fw-semibold mb-0">License Verification</h4>
                    </div>

                    <Card className="border rounded-4 p-4">
                        <Row>
                            <Col lg={6}>
                                <div className="d-flex gap-3 mb-3">
                                    <Image
                                        src="https://i.pravatar.cc/40"
                                        width={150}
                                        height={150}
                                        className="rounded-5"
                                        alt="IMG"
                                    />
                                    <div className="text-start d-flex flex-column gap-1">
                                        <h4 className="fw-bold mb-1">Contractor Name</h4>
                                        <strong className="mb-1 text-muted">
                                            contractor@gmail.com
                                        </strong>
                                        <h6 className="mb-1 text-muted">
                                            h no 13 Leom street
                                        </h6>
                                        <p className="mb-1 text-muted">
                                            +9183924893943
                                        </p>
                                    </div>
                                </div>
                                <h6 className="fw-bold mb-2 text-start">Services</h6>
                                <Row className="g-1 mb-2">
                                    {["Kitchen", "Bedroom", "Flooring", "Electricity"].map(
                                        (item) => (
                                            <Col sm={6} key={item}>
                                                <Card className="border-1 rounded-4 p-3 text-center">
                                                    <div className="d-flex align-items-center gap-2">
                                                        <span className="text-warning">{icons[item]}</span>
                                                        <span>{item}</span>
                                                    </div>
                                                </Card>
                                            </Col>
                                        )
                                    )}
                                </Row>
                                <div>
                                    <h6 className="fw-bold mb-2 text-start">Description</h6>
                                    <p className="text-muted text-start mb-0">
                                        Description text about something on this page that can be
                                        long or short. It can be pretty long and explaining
                                        information about the contractor profile.
                                    </p>
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className="document-grid">
                                    {documents.map((img, i) => (
                                        <img key={i} src={img} alt="doc"  width={'100px'} height={'100px'}/>
                                    ))}
                                </div>

                                <div className="d-flex gap-3 mt-4 justify-content-center">
                                    <Button variant="success">Verified</Button>
                                    <Button variant="outline-warning">Not Verified</Button>
                                    <Button variant="outline-danger">Rejected</Button>
                                </div>
                            </Col>
                        </Row>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default LicenseVerificationDetail;
