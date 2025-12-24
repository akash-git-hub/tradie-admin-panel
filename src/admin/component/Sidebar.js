import { useState } from "react";
import { Nav, Collapse } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import CustomerIcon from "../../Icon/CustomerIcon";
import DashboardIcon from "../../Icon/DashboardIcon";
import ContractIcon from "../../Icon/ContractIcon";
import ProjectIcon from "../../Icon/ProjectIcon";
import ChatIcon from "../../Icon/ChatIcon";
import LicenseIcon from "../../Icon/LicenseIcon";
import SettingIcon from "../../Icon/SettingIcon";
import LogoutIcon from "../../Icon/LogoutIcon";
import BoxIcon from "../../Icon/BoxIcon";
import RevenueIcon from "../../Icon/RevenueIcon";

const Sidebar = ({ active, onLinkClick }) => {
  const [openRevenue, setOpenRevenue] = useState(false);
  const navigate = useNavigate();

  const handleLinkClick = (link, route) => {
    if (onLinkClick) onLinkClick(link);
    if (route) navigate(route); // Redirect to route
  };

  return (
    <div
      className="d-flex flex-column vh-100 px-3 py-4"
      style={{
        width: 280,
        background: "#FBF5E6",
        borderRight: "1px solid #e6d6a8",
        overflowY: "auto",
      }}
    >
      {/* Logo */}
      <div className="d-flex align-items-center mb-4">
        <img src="/assets/Images/Tradie_Logo.png" alt="Tradie" width={64} className="me-3" />
        <h4 className="mb-0 fw-bold">TRADIE</h4>
      </div>

      <Nav className="flex-column gap-2">
        <Nav.Link
          onClick={() => handleLinkClick("Dashboard", "/dashboard")}
          className={`d-flex align-items-center gap-3 px-4 py-3 sidebar-link ${active === "Dashboard" ? "bg-warning text-white fw-semibold" : "text-dark"
            }`}
        >
          <DashboardIcon color={active === "Dashboard" ? "#fff" : "#292D32"} />
          Dashboard
        </Nav.Link>

        <Nav.Link
          onClick={() => handleLinkClick("Customer", "/customer")}
          className={`d-flex align-items-center gap-3 px-4 py-3 sidebar-link ${active === "Customer" ? "bg-warning text-white fw-semibold" : "text-dark"
            }`}
        >
          <CustomerIcon color={active === "Customer" ? "#fff" : "#292D32"} />
          Customer
        </Nav.Link>

        <Nav.Link
          onClick={() => handleLinkClick("Contractor", "/contractor")}
          className={`d-flex align-items-center gap-3 px-4 py-3 sidebar-link ${active === "Contractor" ? "bg-warning text-white fw-semibold" : "text-dark"
            }`}
        >
          <ContractIcon color={active === "Contractor" ? "#fff" : "#292D32"} />
          Contractor
        </Nav.Link>

        <Nav.Link
          onClick={() => handleLinkClick("Project", "/projects")}
          className={`d-flex align-items-center gap-3 px-4 py-3 sidebar-link ${active === "Project" ? "bg-warning text-white fw-semibold" : "text-dark"
            }`}
        >
          <ProjectIcon color={active === "Project" ? "#fff" : "#292D32"} />
          Project
        </Nav.Link>

        <Nav.Link
          onClick={() => handleLinkClick("Messages", "/messages")}
          className={`d-flex align-items-center gap-3 px-4 py-3 sidebar-link ${active === "Messages" ? "bg-warning text-white fw-semibold" : "text-dark"
            }`}
        >
          <ChatIcon color={active === "Messages" ? "#fff" : "#292D32"} />
          Messages
        </Nav.Link>

        <Nav.Link
          onClick={() => handleLinkClick("License", "/license")}
          className={`d-flex align-items-center gap-3 px-4 py-3 sidebar-link ${active === "License" ? "bg-warning text-white fw-semibold" : "text-dark"
            }`}
        >
          <LicenseIcon color={active === "License" ? "#fff" : "#292D32"} />
          License Verification
        </Nav.Link>

        {/* Revenue */}
        <Nav.Link
          onClick={() => setOpenRevenue(!openRevenue)}
          className={`d-flex align-items-center justify-content-between gap-3 px-4 py-3 sidebar-link ${active === "Revenue" ? "bg-warning text-white fw-semibold" : "text-dark"
            }`}
        >
          <span className="d-flex align-items-center gap-3">
            <RevenueIcon color={active === "Revenue" ? "#fff" : "#292D32"} />
            Revenue
          </span>
        </Nav.Link>

        <Collapse in={openRevenue}>
          <div className="ps-5 mt-2">
            <Nav.Link
              onClick={() => handleLinkClick("Earnings", "/revenue/earnings")}
              className={`text-dark small py-1 ${active === "Earnings" ? "text-warning fw-semibold" : ""}`}
            >
              Earnings
            </Nav.Link>
            <Nav.Link
              onClick={() => handleLinkClick("Transaction History", "/revenue/transactions")}
              className={`text-dark small py-1 ${active === "Transaction History" ? "text-warning fw-semibold" : ""}`}
            >
              Transaction History
            </Nav.Link>
            <Nav.Link
              onClick={() => handleLinkClick("Platform Fee", "/revenue/platform-fee")}
              className={`text-dark small py-1 ${active === "Platform Fee" ? "text-warning fw-semibold" : ""}`}
            >
              Platform Fee
            </Nav.Link>
          </div>
        </Collapse>

        {/* Divider */}
        <hr className="my-3" />
        <span className="text-warning fw-semibold px-3 mb-2">About Us</span>

        <Nav.Link
          onClick={() => handleLinkClick("Offers", "/offers")}
          className={`d-flex align-items-center gap-3 px-4 py-3 sidebar-link ${active === "Offers" ? "bg-warning text-white fw-semibold" : "text-dark"
            }`}
        >
          <BoxIcon color={active === "Offers" ? "#fff" : "#292D32"} />
          Offers
        </Nav.Link>

        <Nav.Link
          onClick={() => handleLinkClick("Settings", "/settings")}
          className={`d-flex align-items-center gap-3 px-4 py-3 sidebar-link ${active === "Settings" ? "bg-warning text-white fw-semibold" : "text-dark"
            }`}
        >
          <SettingIcon color={active === "Settings" ? "#fff" : "#292D32"} />
          Settings
        </Nav.Link>

        <Nav.Link
          onClick={() => handleLinkClick("Logout", "/logout")}
          className={`d-flex align-items-center gap-3 px-4 py-3 sidebar-link ${active === "Logout" ? "bg-warning text-white fw-semibold" : "text-dark"
            }`}
        >
          <LogoutIcon color={active === "Logout" ? "#fff" : "#292D32"} />
          LogOut
        </Nav.Link>
      </Nav>
    </div>
  );
};

export default Sidebar;
