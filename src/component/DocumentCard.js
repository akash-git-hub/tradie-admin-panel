import { Card } from "react-bootstrap";

const DocumentCard = ({ title, onClick }) => {
  return (
    <Card
      className="border-0 rounded-4 p-3 h-100 document-card"
      onClick={onClick}
      style={{
        cursor: "pointer",
        background: "#FFFFFF",
      }}
    >
      {/* Icon Wrapper */}
      <div
        className="d-flex align-items-center justify-content-center rounded-4 mb-3"
        style={{
          background: "#F7F1E6",
          height: 120,
        }}
      >
        {/* PDF Icon */}
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2Z"
            stroke="#E0B24D"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14 2V8H20"
            stroke="#E0B24D"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 15H16"
            stroke="#E0B24D"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Title */}
      <div className="fw-semibold fs-6">{title}</div>
    </Card>
  );
};

export default DocumentCard;
