import { Button } from "react-bootstrap";

const statusStyle = {
  pending: { color: "#FF4D4F", label: "Pending" },
  notStarted: { color: "#FF9F43", label: "Not Started" },
  paid: { color: "#28C76F", label: "Paid" },
};

const PaymentCard = ({
  date,
  title,
  transactionId,
  amount,
  status = "pending",
  showPayButton = false,
  onPay,
}) => {
  const statusConfig = statusStyle[status];

  return (
    <div className="d-flex flex-column h-100">
      {/* Date + Status */}
      <div className="d-flex justify-content-between align-items-center mb-2">
        <span className="fw-semibold">{date}</span>
        <span
          className="fw-medium"
          style={{ color: statusConfig.color }}
        >
          {statusConfig.label}
        </span>
      </div>

      {/* Title */}
      <div className="fw-semibold mb-1 text-start">{title}</div>

      {/* Transaction + Amount */}
      <div className="d-flex justify-content-between align-items-center text-muted mb-3">
        <span>Transaction ID {transactionId}</span>
        <span
          className="fw-semibold"
          style={{ color: statusConfig.color }}
        >
          ${amount}
        </span>
      </div>

      {/* Pay Button */}
      {showPayButton && status === "pending" && (
        <Button
          className="rounded-pill px-4 mt-auto w-25"
          style={{ background: "#6BCF6E", border: "none" }}
          onClick={onPay}
        >
          Pay
        </Button>
      )}
    </div>
  );
};

export default PaymentCard;
