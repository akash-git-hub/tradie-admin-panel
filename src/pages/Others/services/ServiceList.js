import { useState } from "react";
import { Button, Image } from "react-bootstrap";
import Sidebar from "../../../component/Sidebar";
import Header from "../../../component/Header";
import ReusableTable from "../../../component/ReuseableTable";
import { useNavigate } from "react-router-dom";

const ServiceList = () => {
  const [active, setActive] = useState("Services");
    const navigate = useNavigate();

  const columns = [
    { label: "SNO", key: "id" },
    { label: "IMAGE", key: "image" },
    { label: "SERVICE NAME", key: "name" },
    { label: "LICENSE", key: "license" },
    { label: "STATUS", key: "status" },
    { label: "ACTION", key: "action" },
  ];

  const data = [
    {
      id: "00001",
      image: (
        <Image
          src="https://via.placeholder.com/60"
          width={50}
          height={50}
          rounded
        />
      ),
      name: "Service 01",
      license: "Yes",
      status: <span className="text-success fw-medium">Active</span>,
      action: (
        <div className="d-flex gap-2">
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
      image: (
        <Image
          src="https://via.placeholder.com/60"
          width={50}
          height={50}
          rounded
        />
      ),
      name: "Service 02",
      license: "No",
      status: <span className="text-muted fw-medium">Inactive</span>,
      action: (
        <div className="d-flex gap-2">
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
      image: (
        <Image
          src="https://via.placeholder.com/60"
          width={50}
          height={50}
          rounded
        />
      ),
      name: "Service 03",
      license: "Yes",
      status: <span className="text-success fw-medium">Active</span>,
      action: (
        <div className="d-flex gap-2">
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
            <h4 className="fw-bold mb-0">Service List</h4>

            <Button variant="outline-warning" className="rounded-pill px-4" onClick={() => navigate("/create_service")}>
              Create Services
            </Button>
          </div>

          <ReusableTable columns={columns} data={data} />
        </div>
      </div>
    </div>
  );
};

export default ServiceList;
