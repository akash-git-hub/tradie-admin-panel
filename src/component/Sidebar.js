import { useContext, useState } from "react";
import { Nav, Collapse } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";

import CustomerIcon from "../Icon/CustomerIcon";
import DashboardIcon from "../Icon/DashboardIcon";
import ContractIcon from "../Icon/ContractIcon";
import ProjectIcon from "../Icon/ProjectIcon";
import ChatIcon from "../Icon/ChatIcon";
import LicenseIcon from "../Icon/LicenseIcon";
import SettingIcon from "../Icon/SettingIcon";
import LogoutIcon from "../Icon/LogoutIcon";
import BoxIcon from "../Icon/BoxIcon";
import RevenueIcon from "../Icon/RevenueIcon";
import { AuthContext } from "../states/AuthContext";
import PlatformSuspensionIcon from "../Icon/PlatformSuspensionIcon";

const Sidebar = () => {
  const [openRevenue, setOpenRevenue] = useState(false);
  const [openOther, setOpenOther] = useState(false);
  const { setLoggedIn, profileData, setProfileData } = useContext(AuthContext);
  const navigate = useNavigate();
  const pathname = useLocation().pathname;

  const handleLinkClick = (route) => {
    if (route) navigate(route); // Redirect to route
  };

  const logOutHandler = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("profileData");
    localStorage.removeItem("loggedIn");
    setLoggedIn(false);
    setProfileData({});
    navigate("/");
  };

  return (
    <div
      className="d-flex flex-column px-3 py-4"
      style={{
        width: 300,
        background: "#FBF5E6",
        borderRight: "1px solid #e6d6a8",
        overflowY: "auto",
      }}
    >
      {/* Logo */}
      <div className="d-flex align-items-center mb-4">
        <img
          src="/assets/Images/Tradie_Logo.png"
          alt="Tradie"
          width={64}
          className="me-3"
        />
        <h4 className="mb-0 fw-bold">TRADIE</h4>
      </div>

      <Nav className="flex-column gap-2">
        <Nav.Link
          onClick={() => handleLinkClick("/dashboard")}
          className={`d-flex align-items-center gap-3 px-4 py-3 sidebar-link ${pathname === "/dashboard"
            ? "bg-warning text-white fw-semibold"
            : "text-dark"
            }`}
        >
          <DashboardIcon
            color={pathname === "/dashboard" ? "#fff" : "#292D32"}
          />
          Dashboard
        </Nav.Link>

        <Nav.Link
          onClick={() => handleLinkClick("/customers")}
          className={`d-flex align-items-center gap-3 px-4 py-3 sidebar-link ${pathname === "/customers" ||
            pathname === "/customer-profile"
            ? "bg-warning text-white fw-semibold"
            : "text-dark"
            }`}
        >
          <CustomerIcon
            color={pathname === "/customers" || pathname === "/customer-profile" ? "#fff" : "#292D32"}
          />
          Customer
        </Nav.Link>

        <Nav.Link
          onClick={() => handleLinkClick("/contractors")}
          className={`d-flex align-items-center gap-3 px-4 py-3 sidebar-link ${pathname === "/contractors"
            || pathname === "/contractor-profile"
            ? "bg-warning text-white fw-semibold"
            : "text-dark"
            }`}
        >
          <ContractIcon
            color={pathname === "/contractors" || pathname === "/contractor-profile" ? "#fff" : "#292D32"}
          />
          Contractor
        </Nav.Link>

        <Nav.Link
          onClick={() => handleLinkClick("/projects")}
          className={`d-flex align-items-center gap-3 px-4 py-3 sidebar-link ${pathname === "/projects" || pathname === "/project-detail"
            ? "bg-warning text-white fw-semibold"
            : "text-dark"
            }`}
        >
          <ProjectIcon
            color={
              pathname === "/projects" || pathname === "/project-detail"
                ? "#fff"
                : "#292D32"
            }
          />
          Project
        </Nav.Link>

        <Nav.Link
          onClick={() => handleLinkClick("/messages")}
          className={`d-flex align-items-center gap-3 px-4 py-3 sidebar-link ${pathname === "/messages"
            ? "bg-warning text-white fw-semibold"
            : "text-dark"
            }`}
        >
          <ChatIcon color={pathname === "/messages" ? "#fff" : "#292D32"} />
          Messages
        </Nav.Link>

        <Nav.Link
          onClick={() => handleLinkClick("/license_verification")}
          className={`d-flex align-items-center gap-3 px-4 py-3 sidebar-link ${pathname === "/license_verification"
            ? "bg-warning text-white fw-semibold"
            : "text-dark"
            }`}
        >
          <LicenseIcon
            color={pathname === "/license_verification" ? "#fff" : "#292D32"}
          />
          License Verification
        </Nav.Link>

        {/* Revenue */}
        <Nav.Link
          onClick={() => setOpenRevenue(!openRevenue)}
          className={`d-flex align-items-center justify-content-between gap-3 px-4 py-3 sidebar-link ${pathname === "Revenue"
            ? "bg-warning text-white fw-semibold"
            : "text-dark"
            }`}
        >
          <span className="d-flex align-items-center gap-3">
            <RevenueIcon color={pathname === "Revenue" ? "#fff" : "#292D32"} />
            Revenue
          </span>
        </Nav.Link>

        <Collapse in={openRevenue}>
          <div className="ps-5 mt-2">
            <Nav.Link
              onClick={() => handleLinkClick("/earning")}
              className={`text-dark small py-1 ${pathname === "/earning" ? "text-warning fw-semibold" : ""
                }`}
            >
              Earnings
            </Nav.Link>
            <Nav.Link
              onClick={() => handleLinkClick("/transaction_history")}
              className={`text-dark small py-1 ${pathname === "/transaction_history"
                ? "text-warning fw-semibold"
                : ""
                }`}
            >
              Transaction History
            </Nav.Link>
            <Nav.Link
              onClick={() =>
                handleLinkClick("/platform_fee")
              }
              className={`text-dark small py-1 ${pathname === "/platform_fee" ? "text-warning fw-semibold" : ""
                }`}
            >
              Platform Fee
            </Nav.Link>
          </div>
        </Collapse>

        <Nav.Link
          onClick={() => setOpenOther(!openOther)}
          className={`d-flex align-items-center justify-content-between gap-3 px-4 py-3 sidebar-link ${pathname === "other"
            ? "bg-warning text-white fw-semibold"
            : "text-dark"
            }`}
        >
          <span className="d-flex align-items-center gap-3">
            <BoxIcon color={pathname === "other" ? "#fff" : "#292D32"} />
            Others
          </span>
        </Nav.Link>

        <Collapse in={openOther}>
          <div className="ps-5 mt-2">
            <Nav.Link
              onClick={() => handleLinkClick("/service_list")}
              className={`text-dark small py-1 ${pathname === "/service_list" ? "text-warning fw-semibold" : ""
                }`}
            >
              Services
            </Nav.Link>
            <Nav.Link
              onClick={() => handleLinkClick("/template_list")}
              className={`text-dark small py-1 ${pathname === "/template_list"
                ? "text-warning fw-semibold"
                : ""
                }`}
            >
              Templates
            </Nav.Link>
            <Nav.Link
              onClick={() =>
                handleLinkClick("/dispute")
              }
              className={`text-dark small py-1 ${pathname === "/dispute" ? "text-warning fw-semibold" : ""
                }`}
            >
              Dispute
            </Nav.Link>
          </div>
        </Collapse>

        {/* Divider */}
        <hr className="my-3" />
        <span className="text-warning fw-semibold px-3 mb-2 text-start">About Us</span>

        <Nav.Link
          onClick={() => handleLinkClick("/offer")}
          className={`d-flex align-items-center gap-3 px-4 py-3 sidebar-link ${pathname === "/offer"
            ? "bg-warning text-white fw-semibold"
            : "text-dark"
            }`}
        >
          <BoxIcon color={pathname === "/offer" ? "#fff" : "#292D32"} />
          Offers
        </Nav.Link>

        <Nav.Link
          onClick={() => handleLinkClick("Settings", "/settings")}
          className={`d-flex align-items-center gap-3 px-4 py-3 sidebar-link ${pathname === "Settings"
            ? "bg-warning text-white fw-semibold"
            : "text-dark"
            }`}
        >
          <SettingIcon color={pathname === "Settings" ? "#fff" : "#292D32"} />
          Settings
        </Nav.Link>

        <Nav.Link
          onClick={() => handleLinkClick("/platform_suspension")}
          className={`d-flex align-items-center gap-3 px-4 py-3 sidebar-link ${pathname === "/platform_suspension"
            ? "bg-warning text-white fw-semibold"
            : "text-dark"
            }`}
        >
          <PlatformSuspensionIcon color={pathname === "/platform_suspension" ? "#fff" : "#292D32"} />
          Platform Suspension
        </Nav.Link>

        <Nav.Link
          onClick={logOutHandler}
          className={
            "d-flex align-items-center gap-3 px-4 py-3 sidebar-link text-dark"
          }
        >
          <LogoutIcon color={"#292D32"} />
          LogOut
        </Nav.Link>
      </Nav>
    </div>
  );
};

export default Sidebar;
