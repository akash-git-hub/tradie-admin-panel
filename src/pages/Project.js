import { useState } from "react";
import { Badge } from "react-bootstrap";
import Sidebar from "../component/Sidebar";
import Header from "../component/Header";
import ReusableTable from "../component/ReuseableTable";

const Projects = () => {
  const [active, setActive] = useState("Project");

  const columns = [
    { label: "S NO", key: "id" },
    { label: "CUSTOMER NAME", key: "customer" },
    { label: "PROJECT NAME", key: "project" },
    { label: "CONTRACTOR NAME", key: "contractor" },
    { label: "TYPE", key: "type" },
    { label: "START DATE", key: "date" },
    {
      label: "STATUS",
      key: "status",
      render: (value) => (
        <Badge
          bg="light"
          className={`border px-3 py-2 rounded-pill ${
            value === "Complete"
              ? "text-success border-success"
              : "text-warning border-warning"
          }`}
        >
          {value}
        </Badge>
      ),
    },
  ];

  const data = [
    {
      id: "00001",
      customer: "Christine Brooks",
      project: "089 Kutch Green Apt. 448",
      contractor: "Eddie Lake",
      type: "Electric",
      date: "Nov 3, 2025",
      status: "Pending",
    },
    {
      id: "00002",
      customer: "Rosie Pearson",
      project: "979 Immanuel Ferry Suite 526",
      contractor: "Iva Ryan",
      type: "Plumbing",
      date: "Oct 30, 2025",
      status: "Complete",
    },
  ];

  return (
    <div className="d-flex min-vh-100">
      {/* ================= SIDEBAR ================= */}
      <Sidebar active={active} onLinkClick={setActive} />

      {/* ================= RIGHT CONTENT ================= */}
      <div className="flex-grow-1 text-start">
        <Header />

        <div className="p-4">
          <h4 className="fw-bold mb-4">Projects</h4>
          <ReusableTable columns={columns} data={data} />
        </div>
      </div>
    </div>
  );
};

export default Projects;
