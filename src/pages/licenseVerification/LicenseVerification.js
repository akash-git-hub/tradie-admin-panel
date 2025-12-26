import { useState } from "react";
import Sidebar from "../../component/Sidebar";
import Header from "../../component/Header";
import ReusableTable from "../../component/ReuseableTable";

const LicenseVerification = () => {
  const [active, setActive] = useState("Customer");

   const columns = [
    { label: "S NO", key: "id" },
    { label: "CONTRACTOR NAME", key: "contractor" },
    { label: "ADDRESS", key: "address" },
    { label: "CONTACT NO", key: "contact" },
    { label: "WORK", key: "work" },
    { label: "STATUS", key: "status" },
  ];

  const data = [
    {
      id: "00001",
      contractor: "Christine Brooks",
      address: "089 Kutch Green Apt. 448",
      contact: "(830) 556-6651",
      work: "Electric",
      status: "Verified",
    },
    {
      id: "00002",
      contractor: "Christine Brooks",
      address: "089 Kutch Green Apt. 448",
      contact: "(830) 556-6651",
      work: "Electric",
      status: "Verified",
    },
    {
      id: "00003",
      contractor: "Christine Brooks",
      address: "089 Kutch Green Apt. 448",
      contact: "(830) 556-6651",
      work: "Electric",
      status: "Not Verified",
    },
    {
      id: "00004",
      contractor: "Christine Brooks",
      address: "089 Kutch Green Apt. 448",
      contact: "(830) 556-6651",
      work: "Electric",
      status: "Reject",
    },
    {
      id: "00005",
      contractor: "Christine Brooks",
      address: "089 Kutch Green Apt. 448",
      contact: "(830) 556-6651",
      work: "Electric",
      status: "Reject",
    },
    {
      id: "00006",
      contractor: "Christine Brooks",
      address: "089 Kutch Green Apt. 448",
      contact: "(830) 556-6651",
      work: "Electric",
      status: "Not Verified",
    },
    {
      id: "00007",
      contractor: "Christine Brooks",
      address: "089 Kutch Green Apt. 448",
      contact: "(830) 556-6651",
      work: "Electric",
      status: "Reject",
    },
  ];


  return (
    <div className="d-flex min-vh-100">
      {/* ========== SIDEBAR ========== */}
      <Sidebar active={active} onLinkClick={setActive} />

      {/* ========== RIGHT CONTENT ========== */}
      <div className="flex-grow-1 text-start">
        <Header />

        <div className="p-4">
          <h4 className="fw-bold mb-4">License Verification</h4>
          <ReusableTable columns={columns} data={data} />
        </div>
      </div>
    </div>
  );
};

export default LicenseVerification;
