import { useState } from "react";
import Header from "../component/Header";
import Sidebar from "../component/Sidebar";

const CustomerListLayout = ({ children, activeLink }) => {
  const [active, setActive] = useState(activeLink || "Customer");

  return (
    <div className="d-flex">
      <Sidebar active={active} onLinkClick={setActive} />
      <div className="flex-grow-1 text-start">
        <Header />
        {children}
      </div>
    </div>
  );
};

export default CustomerListLayout;
