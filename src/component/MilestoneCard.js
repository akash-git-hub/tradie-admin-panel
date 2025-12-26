import moment from "moment-timezone";
import { Card } from "react-bootstrap";
import { projectMileStoneStatusConfig } from "../helper/common_helper";

const MilestoneCard = ({
  name,
  status,
  startDate,
  endDate,
  amount,
  description,
}) => {
  const config = projectMileStoneStatusConfig[status];

  return (
    <Card className="border-0 bg-transparent h-100">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h6 className="fw-semibold mb-0">{name}</h6>
        <span style={{ color: config?.color }} className="fw-medium">
          {config?.label}
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
              background: config?.dot,
            }}
          />
          <div
            style={{
              width: 2,
              height: 50,
              background: config?.line,
              margin: "6px 0",
            }}
          />
          <span
            className="rounded-circle"
            style={{
              width: 14,
              height: 14,
              background: config?.dot,
            }}
          />
        </div>

        <div className="text-muted small">
          <div> {startDate
            ? moment(startDate).local().format("MMM D, YYYY")
            : ""}</div>
          <div style={{ marginTop: 36 }}>{endDate
            ? moment(endDate).local().format("MMM D, YYYY")
            : ""}</div>
        </div>
      </div>

      {/* Amount */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <span className="fw-semibold">Amount</span>
        <span className={`fw-semibold`} style={{ color: config?.amount }} >${amount}</span>
      </div>

      <hr />

      {/* Description */}
      <div className="text-start">
        <h5 className="text-muted mb-2">{name} Description</h5>
        <p className="mb-0 small text-muted">{description}</p>
      </div>
    </Card>
  );
};

export default MilestoneCard;
