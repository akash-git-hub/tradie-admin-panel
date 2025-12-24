import { Container, Row, Col, Card, Badge, Nav, Tab } from "react-bootstrap";
import { useState } from "react";

const ProjectDetail = () => {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <Container className="p-4" style={{ background: "#FBF5E6" }}>
      <h4 className="fw-bold mb-3">Project Detail</h4>

      {/* Top Section */}
      <Row className="g-4">
        {/* Image */}
        <Col lg={5}>
          <Card className="border-0 rounded-4 overflow-hidden">
            <Card.Img
              src="https://images.unsplash.com/photo-1505691938895-1758d7feb511"
              alt="Project"
            />
            <Badge
              bg="dark"
              className="position-absolute bottom-0 start-0 m-3 rounded-pill"
            >
              1/4
            </Badge>
          </Card>
        </Col>

        {/* Details */}
        <Col lg={7}>
          <div className="d-flex justify-content-between align-items-start">
            <div>
              <h2 className="fw-bold">My Project Name</h2>
              <p className="text-muted mb-1">
                123 Main Street Somewhere, LA...
              </p>
            </div>
            <div className="text-end">
              ⭐ 4.95
              <div className="text-muted small">Dec 11, 2025</div>
            </div>
          </div>

          {/* Services */}
          <Row className="g-3">
            {["Kitchen", "Bedroom", "Flooring", "Electricity"].map((item) => (
              <Col sm={6} key={item}>
                <Card className="border-0 rounded-4 p-3 bg-light">
                  <strong>{item}</strong>
                </Card>
              </Col>
            ))}
          </Row>

          {/* User Cards */}
          <Row className="g-3 mt-1">
            <Col sm={6}>
              <Card className="border-0 rounded-4 p-3">
                <strong>Judith Rodriguez</strong>
                <div className="text-muted small">janick_parisian@yahoo.com</div>
                <span className="text-warning fw-semibold">Customer</span>
              </Card>
            </Col>

            <Col sm={6}>
              <Card className="border-0 rounded-4 p-3">
                <strong>John Dukes</strong>
                <div className="text-muted small">janick_parisian@yahoo.com</div>
                <span className="text-primary fw-semibold">Contractor</span>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>

      {/* Tabs Section */}
      <Tab.Container activeKey={activeTab} onSelect={setActiveTab}>
        <Nav
          variant="pills"
          className="mt-5 p-2 rounded-pill"
          style={{ background: "#F6E9C8" }}
        >
          <Nav.Item>
            <Nav.Link eventKey="description">Descriptions</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="milestone">Milestone</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="payment">Payment</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="documents">Documents</Nav.Link>
          </Nav.Item>
        </Nav>

        <Tab.Content className="mt-4">
          <Tab.Pane eventKey="description">
            <Card className="border-0 rounded-4 p-4">
              <p className="mb-0 text-muted">
                Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
                lobortis sem dui, vel rutrum risus tincidunt ullamcorper.
                Vivamus sed libero ornare, tristique quam in, gravida enim.
                Nullam ut molestie arcu, at hendrerit elit.
              </p>
            </Card>
          </Tab.Pane>

          <Tab.Pane eventKey="milestone">
            <Card className="border-0 rounded-4 p-4">
              Milestone content here
            </Card>
          </Tab.Pane>

          <Tab.Pane eventKey="payment">
            <Card className="border-0 rounded-4 p-4">
              Payment content here
            </Card>
          </Tab.Pane>

          <Tab.Pane eventKey="documents">
            <Card className="border-0 rounded-4 p-4">
              Documents content here
            </Card>
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </Container>
  );
};

export default ProjectDetail;
