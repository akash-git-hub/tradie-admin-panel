import { useState } from "react";
import Header from "../component/Header";
import Sidebar from "../component/Sidebar";

const ContractorListLayout = ({ children, activeLink }) => {
  const [active, setActive] = useState(activeLink || "Contractor");

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

export default ContractorListLayout;
