import { useState } from "react";
import Header from "../component/Header";
import Sidebar from "../component/Sidebar";

const ProjectLayout = ({ children, activeLink }) => {
  const [active, setActive] = useState(activeLink || "Project");

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

export default ProjectLayout;
