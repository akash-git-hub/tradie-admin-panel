import { Container, Row, Col, Card, Badge, Nav, Tab } from "react-bootstrap";
import { useState } from "react";
import Header from "../../component/Header";
import Sidebar from "../../component/Sidebar";
import LicenseIcon from "../../Icon/LicenseIcon";
import FlooringIcon from "../../Icon/FlooringIcon";
import KitchenIcon from "../../Icon/KitchenIcon";
import BedRoomIcon from "../../Icon/BedroomIcon";
import ElectricityIcon from "../../Icon/ElectricityIcon";
import UserCard from "../../component/UserCard";
import MilestoneIcon from "../../Icon/MilestoneIcon";
import PaymentIcon from "../../Icon/PaymentIcon";
import DescriptionIcon from "../../Icon/DescriptionIcon";
import MilestoneCard from "../../component/MilestoneCard";
import PaymentCard from "../../component/PaymentCard";
import DocumentCard from "../../component/DocumentCard";


const ProjectDetail = () => {
  const [activeTab, setActiveTab] = useState("description");

  const icons = {
    Kitchen: <KitchenIcon size={24} />,
    Bedroom: <BedRoomIcon size={24} />,
    Flooring: <FlooringIcon size={24} />,
    Electricity: <ElectricityIcon size={24} />,
  };

  const milestones = [
    {
      title: "Milestone 01",
      status: "started",
      startDate: "01 DEC 2024",
      endDate: "31 DEC 2024",
      amount: 200,
      description:
        "Description text about something on this page that can be long or short.",
    },
    {
      title: "Milestone 02",
      status: "notStarted",
      startDate: "01 JAN 2025",
      endDate: "05 FEB 2025",
      amount: 500,
      description:
        "Description text about something on this page that can be long or short.",
    },
    {
      title: "Milestone 03",
      status: "notStarted",
      startDate: "10 FEB 2025",
      endDate: "05 MAR 2025",
      amount: 500,
      description:
        "Description text about something on this page that can be long or short.",
    },
  ];

  const payments = [
    {
      date: "01 JAN 2025",
      title: "Milestone 01 - #4389830",
      transactionId: "#HS92948193",
      amount: 200,
      status: "pending",
      showPayButton: true,
    },
    {
      date: "01 FEB 2025",
      title: "Milestone 02 - #4389830",
      transactionId: "#HS92948193",
      amount: 200,
      status: "notStarted",
    },
    {
      date: "01 MAR 2025",
      title: "Milestone 03 - #4389830",
      transactionId: "#HS92948193",
      amount: 200,
      status: "notStarted",
    },
  ];

  const documents = [
  { title: "Document 01" },
  { title: "Document 02" },
  { title: "Document 03" },
];

  return (
    <div className="d-flex min-vh-100">
      <Sidebar />
      {/* ===== MAIN AREA ===== */}
      <div className="flex-grow-1">
        <Header />

        <Container className="p-4" style={{ background: "#FBF5E6" }}>
          <h4 className="fw-bold mb-4 text-start">Project Detail</h4>

          {/* ===== TOP SECTION ===== */}
          <Row className="g-4 align-items-start">
            <Col lg={5}>
              <Card className="border-0 rounded-4 overflow-hidden position-relative">
                <Card.Img src="https://images.unsplash.com/photo-1505691938895-1758d7feb511" />
                <Badge
                  bg="dark"
                  className="position-absolute bottom-0 start-0 m-3 rounded-pill"
                >
                  1/4
                </Badge>
              </Card>
            </Col>

            <Col lg={7}>
              <div className="d-flex justify-content-between mb-1">
                <div>
                  <h3 className="fw-bold text-start">My Project Name</h3>
                  <p className="text-muted ">
                    123 Main Street Somewhere, LA...
                  </p>
                </div>
                <div className="text-end">
                  ⭐ 4.95
                  <div className="text-muted small">Dec 11, 2025</div>
                </div>
              </div>

              <Row className="g-1 mb-2">
                {["Kitchen", "Bedroom", "Flooring", "Electricity"].map((item) => (
                  <Col sm={6} key={item}>
                    <Card className="border-0 rounded-4 p-3 text-center">
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

              <Row className="g-3">
                <Col sm={6}>
                  <UserCard
                    name="Judith Rodriguez"
                    email="janick_parisian@yahoo.com"
                    role="Customer"
                    color="warning"
                    avatar="https://i.pravatar.cc/60?img=32"
                  />
                </Col>

                <Col sm={6}>
                  <UserCard
                    name="John Dukes"
                    email="janick_parisian@yahoo.com"
                    role="Contractor"
                    color="primary"
                    avatar="https://i.pravatar.cc/60?img=12"
                  />
                </Col>
              </Row>

            </Col>
          </Row>

          {/* ===== TABS ===== */}
          <Tab.Container activeKey={activeTab} onSelect={setActiveTab}>
            <Nav
              variant="pills"
              className="mt-5 p-2 rounded-pill gap-2"
              style={{ background: "#F6E9C8" }}
            >
              <Nav.Link eventKey="description" className="d-flex align-items-center gap-2">
                {activeTab === "description" && <DescriptionIcon active />}
                {activeTab !== "description" && <DescriptionIcon />}
                Descriptions
              </Nav.Link>

              <Nav.Link eventKey="milestone" className="d-flex align-items-center gap-2">
                <MilestoneIcon active={activeTab === "milestone"} />
                Milestone
              </Nav.Link>

              <Nav.Link eventKey="payment" className="d-flex align-items-center gap-2">
                <PaymentIcon active={activeTab === "payment"} />
                Payment
              </Nav.Link>

              <Nav.Link eventKey="documents" className="d-flex align-items-center gap-2">
                <LicenseIcon active={activeTab === "documents"} />
                Documents
              </Nav.Link>
            </Nav>


            <Tab.Content className="mt-4">
              <Tab.Pane eventKey="description">
                <Card className="border-0 rounded-4 p-4 text-center">
                  <p className="text-muted mb-0">
                    Maecenas dignissim justo eget nulla rutrum molestie.
                  </p>
                </Card>
              </Tab.Pane>
            </Tab.Content>
            <Tab.Content className="mt-4">
              <Tab.Pane eventKey="milestone">
                <Card className="border-0 rounded-4 p-4 text-center">
                  <Row className="g-4">
                    {milestones.map((item, index) => (
                      <Col key={index} xs={12} md={6} lg={4}>
                        <MilestoneCard {...item} />
                      </Col>
                    ))}
                  </Row>
                </Card>
              </Tab.Pane>
            </Tab.Content>
            <Tab.Content className="mt-4">
              <Tab.Pane eventKey="payment">
                <Card className="border-0 rounded-4 p-4 text-center">
                  <div className="bg-white rounded-4 p-4">
                    <Row className="g-4">
                      {payments.map((item, index) => (
                        <Col key={index} xs={12} md={6} lg={4}>
                          <PaymentCard
                            {...item}
                            onPay={() => alert(`Pay clicked for ${item.title}`)}
                          />
                        </Col>
                      ))}
                    </Row>
                  </div>
                </Card>
              </Tab.Pane>
            </Tab.Content>
            <Tab.Content className="mt-4">
              <Tab.Pane eventKey="documents">
                <Card className="border-0 rounded-4 p-4 text-center">
                  <div className="bg-white rounded-4 p-4">
                    <Row className="g-4">
                      {documents.map((doc, index) => (
                        <Col key={index} xs={12} sm={6} md={4}>
                          <DocumentCard
                            title={doc.title}
                            onClick={() => alert(doc.title)}
                          />
                        </Col>
                      ))}
                    </Row>
                  </div>
                </Card>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </Container>
      </div>
    </div>
  );
};

export default ProjectDetail;
