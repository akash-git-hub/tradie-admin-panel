import { useState } from "react";
import Sidebar from "../../component/Sidebar";
import Header from "../../component/Header";
import ReusableTable from "../../component/ReuseableTable";

const Earning = () => {
  const [active, setActive] = useState("Customer");

  const columns = [
    { label: "S NO", key: "id" },
    { label: "CUSTOMER NAME", key: "customer" },
    { label: "CONTRACTOR NAME", key: "contractor" },
    { label: "PROJECT NAME", key: "project" },
    { label: "AMOUNT", key: "amount" },
    { label: "PLATFORM FEE", key: "fee" },
  ];

  const data = [
    {
      id: "00001",
      customer: "Christine Brooks",
      contractor: "Christine Brooks",
      project: "089 Kutch Green Apt. 448",
      amount: "$1200",
      fee: "$100"
    },
     {
      id: "00002",
      customer: "Christine Brooks",
      contractor: "Christine Brooks",
      project: "089 Kutch Green Apt. 448",
      amount: "$1200",
      fee: "$100"
    },
     {
      id: "00003",
      customer: "Christine Brooks",
      contractor: "Christine Brooks",
      project: "089 Kutch Green Apt. 448",
      amount: "$1200",
      fee: "$100"
    },
     {
      id: "00004",
      customer: "Christine Brooks",
      contractor: "Christine Brooks",
      project: "089 Kutch Green Apt. 448",
      amount: "$1200",
      fee: "$100"
    },
     {
      id: "00005",
      customer: "Christine Brooks",
      contractor: "Christine Brooks",
      project: "089 Kutch Green Apt. 448",
      amount: "$1200",
      fee: "$100"
    },
     {
      id: "00006",
      customer: "Christine Brooks",
      contractor: "Christine Brooks",
      project: "089 Kutch Green Apt. 448",
      amount: "$1200",
      fee: "$100"
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
          <h4 className="fw-bold mb-4">Earnings</h4>
          <ReusableTable columns={columns} data={data} />
        </div>
      </div>
    </div>
  );
};

export default Earning;
