import { useState } from "react";
import Sidebar from "../../component/Sidebar";
import Header from "../../component/Header";
import ReusableTable from "../../component/ReuseableTable";

const TransactionHistory = () => {
  const [active, setActive] = useState("Customer");

  const columns = [
    { label: "TRANSACTION ID", key: "id" },
    { label: "CUSTOMER NAME", key: "customer" },
    { label: "CONTRACTOR NAME", key: "contractor" },
    { label: "CONTACT NO", key: "contact" },
    { label: "WORK", key: "work" },
    { label: "AMOUNT", key: "amount" },
  ];

  const data = [
    {
      id: "00001",
      customer: "Christine Brooks",
      address: "089 Kutch Green Apt. 448",
      contact: "(830) 556-6651",
      work: "Electric",
      amount: "$1200",
    },
    {
      id: "00002",
      customer: "Christine Brooks",
      address: "089 Kutch Green Apt. 448",
      contact: "(830) 556-6651",
      work: "Electric",
      amount: "$1200",
    },
    {
      id: "00003",
      customer: "Christine Brooks",
      address: "089 Kutch Green Apt. 448",
      contact: "(830) 556-6651",
      work: "Electric",
      amount: "$1200",
    },
    {
      id: "00004",
      customer: "Christine Brooks",
      address: "089 Kutch Green Apt. 448",
      contact: "(830) 556-6651",
      work: "Electric",
      amount: "$1200",
    },
    {
      id: "00005",
      customer: "Christine Brooks",
      address: "089 Kutch Green Apt. 448",
      contact: "(830) 556-6651",
      work: "Electric",
      amount: "$1200",
    },
    {
      id: "00006",
      customer: "Christine Brooks",
      address: "089 Kutch Green Apt. 448",
      contact: "(830) 556-6651",
      work: "Electric",
      amount: "$1200",
    },
    {
      id: "00007",
      customer: "Christine Brooks",
      address: "089 Kutch Green Apt. 448",
      contact: "(830) 556-6651",
      work: "Electric",
      amount: "$1200",
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
          <h4 className="fw-bold mb-4">Transaction History</h4>
          <ReusableTable columns={columns} data={data} />
        </div>
      </div>
    </div>
  );
};

export default TransactionHistory;
