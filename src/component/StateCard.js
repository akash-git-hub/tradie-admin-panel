import { Card } from "react-bootstrap";

const StateCard = ({ title, value, subText, valueColor = "#000", icon }) => {
  return (
    <Card className="shadow-sm rounded-4 h-100" style={{
        border: '1px solid #E2AC2E'
    }}>
      <Card.Body className="d-flex justify-content-between align-items-center">
        <div className="text-start">
          <h6 className="mb-1 text-muted fw-bold">{title}</h6>
          <h4 className="fw-bold" style={{ color: valueColor }}>
            {value}
          </h4>
          <small className="text-muted">{subText}</small>
        </div>
        <div className="bg-warning-subtle rounded-circle p-3">
          {icon}
        </div>
      </Card.Body>
    </Card>
  );
};

export default StateCard;
