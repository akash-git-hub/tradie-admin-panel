import { Card } from "react-bootstrap";

const statusConfig = {
  started: {
    color: "#35C6FF",
    dot: "#4CD964",
    line: "#4CD964",
    label: "Started",
  },
  notStarted: {
    color: "#FF4D4F",
    dot: "#F36C5A",
    line: "#D1D1D1",
    label: "Not Started",
  },
};

const MilestoneCard = ({
  title,
  status = "started",
  startDate,
  endDate,
  amount,
  description,
}) => {
  const config = statusConfig[status];

  return (
    <Card className="border-0 bg-transparent h-100">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h6 className="fw-semibold mb-0">{title}</h6>
        <span style={{ color: config.color }} className="fw-medium">
          {config.label}
        </span>
      </div>

      {/* Timeline */}
      <div className="d-flex align-items-start gap-3 mb-4">
        <div className="d-flex flex-column align-items-center">
          <span
            className="rounded-circle"
            style={{
              width: 14,
              height: 14,
              background: config.dot,
            }}
          />
          <div
            style={{
              width: 2,
              height: 50,
              background: config.line,
              margin: "6px 0",
            }}
          />
          <span
            className="rounded-circle"
            style={{
              width: 14,
              height: 14,
              background: config.dot,
            }}
          />
        </div>

        <div className="text-muted small">
          <div>{startDate}</div>
          <div style={{ marginTop: 36 }}>{endDate}</div>
        </div>
      </div>

      {/* Amount */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <span className="fw-semibold">Amount</span>
        <span className="text-danger fw-semibold">${amount}</span>
      </div>

      <hr />

      {/* Description */}
      <div className="text-start">
        <h5 className="text-muted mb-2">{title} Description</h5>
        <p className="mb-0 small text-muted">{description}</p>
      </div>
    </Card>
  );
};

export default MilestoneCard;
