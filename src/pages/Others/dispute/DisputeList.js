import { useState } from "react";
import { Button, Image } from "react-bootstrap";
import Sidebar from "../../../component/Sidebar";
import Header from "../../../component/Header";
import ReusableTable from "../../../component/ReuseableTable";
import { useNavigate } from "react-router-dom";

const DisputeList = () => {
  const [active, setActive] = useState("Services");
    const navigate = useNavigate();

  const columns = [
    { label: "SNO", key: "id" },
    { label: "PROJECT NAME", key: "project" },
    { label: "NAME", key: "name" },
    { label: "DISPUTE TITLE", key: "title" },
  ];

  const data = [
    {
      id: "00001",
      project: "Project Name 01",
      name: "Service 01",
      title: "Bugle Boy"
    },
   {
      id: "00002",
      project: "Project Name 02",
      name: "Service 01",
      title: "Bugle Boy"
    },
    {
      id: "00003",
      project: "Project Name 03",
      name: "Service 01",
      title: "Bugle Boy"
    },
    {
      id: "00005",
      project: "Project Name 04",
      name: "Service 01",
      title: "Bugle Boy"
    },
  ];

  return (
    <div className="d-flex min-vh-100">
      <Sidebar active={active} onLinkClick={setActive} />

      <div className="flex-grow-1">
        <Header />

        <div className="p-4">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h4 className="fw-bold mb-0">Dispute List</h4>
          </div>

          <ReusableTable columns={columns} data={data} />
        </div>
      </div>
    </div>
  );
};

export default DisputeList;
