import { Modal, Button, Form } from "react-bootstrap";

const SuspendUserModal = ({ show, handleClose, handleConfirm }) => {
  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      backdrop="static"
      className="suspend-modal border-0"
    >
      <Modal.Body className="p-4 text-center">
        <h5 className="fw-semibold mb-3 text-danger">
          You want to confirm to suspend <br /> this user?
        </h5>

        <Form.Group className="text-start mb-4">
          <Form.Label className="text-muted">Write a reason</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            placeholder=""
            className="rounded-4 border-0 bg-light"
          />
        </Form.Group>

        <div className="d-flex justify-content-between gap-3">
          <Button
            className="flex-fill rounded-pill py-2 fw-semibold btn-primary text-white"
            onClick={handleConfirm}
          >
            Yes
          </Button>

          <Button
            variant="light"
            className="flex-fill rounded-pill py-2 fw-semibold"
            onClick={handleClose}
          >
            No
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default SuspendUserModal;
