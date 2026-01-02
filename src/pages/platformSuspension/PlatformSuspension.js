import { useState } from "react";
import Sidebar from "../../component/Sidebar";
import Header from "../../component/Header";
import ReusableTable from "../../component/ReuseableTable";

const PlatformSuspension = () => {
  const [active, setActive] = useState("Services");

  const columns = [
    { label: "SNO", key: "id" },
    { label: "PROJECT NAME", key: "project" },
    { label: "NAME", key: "name" },
    { label: "SUSPEND", key: "suspend" },
  ];

  const data = [
    {
      id: "00001",
      project: "Project 01",
      name: "Name 01",
      suspend: "Suspend"
    },
   {
      id: "00002",
      project: "Project 02",
      name: "Name 02",
      suspend: "Suspend"
    },
    {
      id: "00003",
      project: "Project 03",
      name: "Name 03",
      suspend: "Suspend"
    },
    {
      id: "00004",
      project: "Project 04",
      name: "Name 04",
      suspend: "Suspend"
    },
  ];

  return (
    <div className="d-flex min-vh-100">
      <Sidebar active={active} onLinkClick={setActive} />

      <div className="flex-grow-1">
        <Header/>

        <div className="p-4">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h4 className="fw-bold mb-0">Platform Suspension</h4>
          </div>

          <ReusableTable columns={columns} data={data} />
        </div>
      </div>
    </div>
  );
};

export default PlatformSuspension;
