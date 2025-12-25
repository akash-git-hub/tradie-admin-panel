import { useState } from "react";
import { Badge } from "react-bootstrap";

import Header from "../component/Header";
import Sidebar from "../component/Sidebar";
import ReusableTable from "../component/ReuseableTable";

const ContractorList = () => {
  const [active, setActive] = useState("Contractor");

  const columns = [
    { label: "S NO", key: "id" },
    { label: "CONTRACTOR NAME", key: "contractor" },
    { label: "ADDRESS", key: "address" },
    { label: "CONTACT NO", key: "contact" },
    { label: "TYPE", key: "type" },
    {
      label: "MESSAGE",
      key: "message",
      render: (value) => (
        <Badge
          bg="light"
          className="border px-3 py-2 rounded-pill text-warning border-warning"
        >
          {value}
        </Badge>
      ),
    },
  ];

  const data = [
    {
      id: "00001",
      contractor: "Christine Brooks",
      address: "089 Kutch Green Apt. 448",
      contact: "(830) 556-6651",
      type: "Electric",
      message: "Message",
    },
    {
      id: "00002",
      contractor: "Rosie Pearson",
      address: "979 Immanuel Ferry Suite 526",
      contact: "(830) 556-6651",
      type: "Electric",
      message: "Message",
    },
    {
      id: "00003",
      contractor: "Darrell Caldwell",
      address: "089 Kutch Green Apt. 448",
      contact: "(830) 556-6651",
      type: "Electric",
      message: "Message",
    },
  ];

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <Sidebar active={active} onLinkClick={setActive} />

      {/* Main Content */}
      <div className="flex-grow-1 text-start">
        <Header />

        <div className="p-4">
          <h4 className="fw-bold mb-4">Contractor List</h4>
          <ReusableTable columns={columns} data={data} />
        </div>
      </div>
    </div>
  );
};

export default ContractorList;
