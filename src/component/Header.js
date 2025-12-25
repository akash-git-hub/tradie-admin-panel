import { Navbar, Container } from "react-bootstrap";
import NotificationIcon from "../Icon/NotificationIcon";

const Header = () => {
  return (
    <Navbar bg="white" className="border-bottom px-4 py-3">
      <Container fluid className="d-flex justify-content-between">
        <NotificationIcon />
        <div className="d-flex align-items-center gap-3">
          <img
            src="https://i.pravatar.cc/40"
            alt="user"
            className="rounded-circle border border-warning p-1"
          />
          <div className="text-start">
            <div className="fw-semibold">Jackson D.</div>
            <small className="text-warning">Admin</small>
          </div>
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;
