import { Container, Row, Col, Card, Badge, Nav, Tab } from "react-bootstrap";
import { useState } from "react";
import Header from "../component/Header";
import Sidebar from "../component/Sidebar";


const ProjectDetail = () => {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="d-flex min-vh-100">
      {/* ===== SIDEBAR ===== */}
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
              <div className="d-flex justify-content-between mb-3">
                <div>
                  <h2 className="fw-bold">My Project Name</h2>
                  <p className="text-muted">
                    123 Main Street Somewhere, LA...
                  </p>
                </div>
                <div className="text-end">
                  ⭐ 4.95
                  <div className="text-muted small">Dec 11, 2025</div>
                </div>
              </div>

              <Row className="g-1 mb-2">
                {["Kitchen", "Bedroom", "Flooring", "Electricity"].map(
                  (item) => (
                    <Col sm={6} key={item}>
                      <Card className="border-0 rounded-4 p-3 text-center">
                        <strong>{item}</strong>
                      </Card>
                    </Col>
                  )
                )}
              </Row>

              <Row className="g-3">
                <Col sm={6}>
                  <Card className="border-0 rounded-4 p-3 text-center">
                    <strong>Judith Rodriguez</strong>
                    <div className="text-muted small">
                      janick_parisian@yahoo.com
                    </div>
                    <span className="text-warning fw-semibold">Customer</span>
                  </Card>
                </Col>

                <Col sm={6}>
                  <Card className="border-0 rounded-4 p-3 text-center">
                    <strong>John Dukes</strong>
                    <div className="text-muted small">
                      janick_parisian@yahoo.com
                    </div>
                    <span className="text-primary fw-semibold">Contractor</span>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>

          {/* ===== TABS ===== */}
          <Tab.Container activeKey={activeTab} onSelect={setActiveTab}>
            <Nav
              variant="pills"
              className="mt-5 p-2 rounded-pill justify-content-center gap-2"
              style={{ background: "#F6E9C8" }}
            >
              <Nav.Link eventKey="description">Descriptions</Nav.Link>
              <Nav.Link eventKey="milestone">Milestone</Nav.Link>
              <Nav.Link eventKey="payment">Payment</Nav.Link>
              <Nav.Link eventKey="documents">Documents</Nav.Link>
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
          </Tab.Container>
        </Container>
      </div>
    </div>
  );
};

export default ProjectDetail;
