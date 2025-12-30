import { Modal, Button } from "react-bootstrap";

const ReviewModal = ({ show, onClose, reviews }) => {

  const renderStars = (rating) =>
    [...Array(5)].map((_, i) => (
      <span key={i} className={i < rating ? "text-warning" : "text-secondary"}>
        ★
      </span>
    ));

  return (
    <Modal show={show} onHide={onClose} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Contractor Reviews</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {reviews.map((review, i) => (
          <div key={i} className="border-bottom pb-3 mb-3">
            <div className="d-flex justify-content-between">
              <h6 className="fw-bold">{review.name}</h6>
              <div>{renderStars(review.rating)}</div>
            </div>
            <p className="text-muted mb-0">{review.comment}</p>
          </div>
        ))}
      </Modal.Body>

      <Modal.Footer>
        <Button variant="warning" onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ReviewModal;
