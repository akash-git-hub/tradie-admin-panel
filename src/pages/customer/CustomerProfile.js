import React, { useEffect, useState } from "react";
import { Card, Row, Col, Image, Button } from "react-bootstrap";
import Header from "../../component/Header";
import Sidebar from "../../component/Sidebar";
import KitchenIcon from "../../Icon/KitchenIcon";
import BedRoomIcon from "../../Icon/BedroomIcon";
import FlooringIcon from "../../Icon/FlooringIcon";
import ElectricityIcon from "../../Icon/ElectricityIcon";
import ReviewSummary from "../../component/ReviewSummary";
import ReviewModal from "../../component/ReviewModal";
import SuspendUserModal from "../../component/SuspendUserModal";
import { useLocation, useNavigate } from "react-router-dom";
import { getCustomerDetailAPI } from "../../services/NetworkCall";
import { errorAlert } from "../../component/Alert";
import { Loader } from "../../component/Loader";

const CustomerProfile = () => {
    const [show, setShow] = useState(false);
    const [showSuspend, setShowSuspend] = useState(false);
    const location = useLocation();
    const [loading, setLoading] = useState(false);
    const id = location.state.userId;
    const [customerData, setCustomerData] = useState({});
    const navigate = useNavigate();

    const fetchCustomersData = async () => {
        setLoading(true);
        const res = await getCustomerDetailAPI({ id });
        if (res.success) {
            setCustomerData(res.data);
        } else {
            errorAlert({ message: res.message });
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchCustomersData();
    }, [location]);

    const icons = {
        Kitchen: <KitchenIcon size={24} />,
        Bedroom: <BedRoomIcon size={24} />,
        Flooring: <FlooringIcon size={24} />,
        Electricity: <ElectricityIcon size={24} />,
    };


    const handleProjectClick = () => {
        navigate("/project-detail");
    };

    const galleryImages = [
        {
            img: "https://plus.unsplash.com/premium_photo-1663126298656-33616be83c32?q=80&w=2070&auto=format&fit=crop",
            name: "Living Room Renovation",
        },
        {
            img: "https://plus.unsplash.com/premium_photo-1663126298656-33616be83c32?q=80&w=2070&auto=format&fit=crop",
            name: "Modular Kitchen",
        },
        {
            img: "https://plus.unsplash.com/premium_photo-1663126298656-33616be83c32?q=80&w=2070&auto=format&fit=crop",
            name: "Bedroom Interior",
        },
        {
            img: "https://plus.unsplash.com/premium_photo-1663126298656-33616be83c32?q=80&w=2070&auto=format&fit=crop",
            name: "Living Room Renovation",
        },
        {
            img: "https://plus.unsplash.com/premium_photo-1663126298656-33616be83c32?q=80&w=2070&auto=format&fit=crop",
            name: "Modular Kitchen",
        },
        {
            img: "https://plus.unsplash.com/premium_photo-1663126298656-33616be83c32?q=80&w=2070&auto=format&fit=crop",
            name: "Bedroom Interior",
        },
    ];

    const reviews = [
        { name: "John Smith", rating: 5, comment: "Excellent service" },
        { name: "Emma Watson", rating: 4, comment: "Very professional" },
    ];

    const handleBackButtonClick = () => {
        window.history.back();
    };

    return (
        <>
            <Loader show={loading} />
            <div className="d-flex min-vh-100">
                <div className="sidebar-wrapper">
                    <Sidebar />
                </div>
                <div className="flex-grow-1 overflow-hidden">
                    <Header />
                    <div className="p-4">
                        <div className="d-flex align-items-center justify-content-between mb-4">
                            <div className="d-flex align-items-center">
                                <span
                                    className="me-2 fs-4 cursor-pointer"
                                    style={{ cursor: "pointer" }}
                                    onClick={handleBackButtonClick}
                                >
                                    ←
                                </span>
                                <h4 className="fw-bold mb-0">Customer Profile</h4>
                            </div>
                            <Button
                                variant="outline-danger"
                                className="rounded-pill px-4"
                                onClick={() => setShowSuspend(true)}
                            >
                                Suspension
                            </Button>
                            <SuspendUserModal
                                show={showSuspend}
                                handleClose={() => setShowSuspend(false)}
                                handleConfirm={() => {
                                    setShowSuspend(false);
                                    console.log("User Suspended");
                                }}
                            />
                        </div>

                        <Card className="border rounded-4 p-4">
                            <Row>
                                <Col lg={6}>
                                    <div className="d-flex gap-3 mb-3">
                                        <Image
                                            src={customerData?.profile_url}
                                            width={150}
                                            height={150}
                                            className="rounded-5"
                                            alt="IMG"
                                        />
                                        <div className="text-start d-flex flex-column gap-1">
                                            <h4 className="fw-bold mb-1">{customerData?.name}</h4>
                                            <strong className="mb-1 text-muted">
                                                {customerData?.email}
                                            </strong>
                                            <h6 className="mb-1 text-muted">
                                                {customerData?.address?.address}
                                            </h6>
                                            <p className="mb-1 text-muted">
                                                {customerData?.mobile_country_code}-
                                                {customerData?.mobile_number}
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
                                                            <span className="text-warning">
                                                                {icons[item]}
                                                            </span>
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
                                    {/* <ReviewSummary
                                        totalReviews={25}
                                        rating={4.95}
                                        onClick={() => setShow(true)}
                                    />

                                    <ReviewModal
                                        show={show}
                                        onClose={() => setShow(false)}
                                        reviews={reviews}
                                    /> */}
                                    <Row className="g-2 px-5">
                                        {galleryImages.map((item, index) => (
                                            <Col xs={4} key={index}>
                                                <div
                                                    className="cursor-pointer text-center"
                                                    onClick={() => handleProjectClick(item.projectId)}
                                                >
                                                    <div
                                                        className="rounded-3 overflow-hidden mb-1"
                                                        style={{ height: "100px" }}
                                                    >
                                                        <img
                                                            src={item.img}
                                                            alt={item.name}
                                                            className="w-100 h-100 object-fit-cover"
                                                        />
                                                    </div>

                                                    <div
                                                        className="small fw-medium text-truncate"
                                                        title={item.name}
                                                    >
                                                        {item.name}
                                                    </div>
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
        </>
    );
};

export default CustomerProfile;
