import { useState } from "react";
import { Button, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../component/Sidebar";
import Header from "../../component/Header";
import ReusableTable from "../../component/ReuseableTable";

const TemplateList = () => {
  const [active, setActive] = useState("Services");
    const navigate = useNavigate();

  const columns = [
    { label: "SNO", key: "id" },
    { label: "TEMPLATE NAME", key: "name" },
    { label: "ACTION", key: "action" },
  ];

  const data = [
    {
      id: "00001",
      name: "Template 01",
      action: (
        <div className="d-flex gap-2 justify-content-center">
          <Button variant="outline-warning" size="sm">
            Edit
          </Button>
          <Button variant="outline-danger" size="sm">
            Delete
          </Button>
        </div>
      ),
    },
    {
      id: "00002",
      name: "Template 02",
      action: (
        <div className="d-flex gap-2 justify-content-center">
          <Button variant="outline-warning" size="sm">
            Edit
          </Button>
          <Button variant="outline-danger" size="sm">
            Delete
          </Button>
        </div>
      ),
    },
     {
      id: "00003",
      name: "Template 03",
      action: (
        <div className="d-flex gap-2 justify-content-center">
          <Button variant="outline-warning" size="sm">
            Edit
          </Button>
          <Button variant="outline-danger" size="sm">
            Delete
          </Button>
        </div>
      ),
    },
     {
      id: "00004",
      name: "Template 04",
      action: (
        <div className="d-flex gap-2 justify-content-center">
          <Button variant="outline-warning" size="sm">
            Edit
          </Button>
          <Button variant="outline-danger" size="sm">
            Delete
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div className="d-flex min-vh-100">
      <Sidebar active={active} onLinkClick={setActive} />

      <div className="flex-grow-1">
        <Header />

        <div className="p-4">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h4 className="fw-bold mb-0">Template List</h4>

            <Button variant="outline-warning" className="rounded-pill px-4" onClick={() => navigate("/create_template")}>
              Create Template
            </Button>
          </div>

          <ReusableTable columns={columns} data={data} />
        </div>
      </div>
    </div>
  );
};

export default TemplateList;
