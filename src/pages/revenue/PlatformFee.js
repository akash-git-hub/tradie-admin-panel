import { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import Sidebar from "../../component/Sidebar";
import Header from "../../component/Header";

const PLATFORM_OPTIONS = [
  { label: "$50 to $99 - Platform fee 5%", value: 5 },
  { label: "$100 to $299 - Platform fee 8%", value: 8 },
  { label: "$300 to $499 - Platform fee 10%", value: 10 },
  { label: "$500 to $999 - Platform fee 15%", value: 15 },
  { label: "Up to $1000 - Platform fee 25%", value: 25 }
];

const PlatformFee = () => {
  const [selectedFee, setSelectedFee] = useState(PLATFORM_OPTIONS[0]);

  const handleSubmit = () => {
    console.log("Selected Platform Fee:", selectedFee);
  };

  return (
    <div className="d-flex">
      <Sidebar />

      <div className="flex-grow-1">
        <Header />

        <Container fluid className="px-4 py-4">
          <h4 className="fw-bold mb-4 text-start">Platform Fee</h4>

          <Row className="g-4">
            {/* Project Cost */}
            <Col md={4}>
              <Form.Group className="text-start">
                <Form.Label className="fw-semibold">
                  Project Cost
                </Form.Label>

                <Form.Select
                  className="rounded-4 py-3"
                  value={selectedFee.value}
                  onChange={(e) =>
                    setSelectedFee(
                      PLATFORM_OPTIONS.find(
                        (item) => item.value === Number(e.target.value)
                      )
                    )
                  }
                >
                  {PLATFORM_OPTIONS.map((item, index) => (
                    <option key={index} value={item.value}>
                      {item.label}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Col>

            {/* Percentage */}
            <Col md={4}>
              <Form.Group className="text-start">
                <Form.Label className="fw-semibold">
                  Percentage
                </Form.Label>
                <Form.Control
                  readOnly
                  value={`${selectedFee.value}%`}
                  className="rounded-4 py-3"
                />
              </Form.Group>
            </Col>
          </Row>

          {/* Submit */}
          <div className="mt-3 text-start">
            <Button
              onClick={handleSubmit}
              className="px-5 py-3 rounded-pill fw-semibold"
              style={{
                backgroundColor: "#E0B451",
                border: "none",
                 minWidth: "350px"
              }}
            >
              Submit
            </Button>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default PlatformFee;
