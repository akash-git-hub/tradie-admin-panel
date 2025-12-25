import { useState } from "react";
import Header from "../component/Header";
import Sidebar from "../component/Sidebar";
import ProjectDetail from "../pages/ProjectDetail";

const ProjectDetailLayout = ({ children, activeLink }) => {
  const [active, setActive] = useState(activeLink || "Projects");

  return (
    <div className="d-flex">
      <Sidebar active={active} onLinkClick={setActive} />
      <div className="flex-grow-1 text-start">
        <Header />
        <ProjectDetail/>
      </div>
    </div>
  );
};

export default ProjectDetailLayout;
