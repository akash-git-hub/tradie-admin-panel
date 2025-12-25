import ReusableTable from "../component/ReuseableTable";

const CustomerList = () => {
    const columns = [
        { label: "S NO", key: "id" },
        { label: "CUSTOMER NAME", key: "customer" },
        { label: "ADDRESS", key: "address" },
        { label: "CONTACT NO", key: "contact" },
        { label: "WORK", key: "work" },
    ];

    const data = [
        {
            id: "00001",
            customer: "Christine Brooks",
            address: "089 Kutch Green Apt. 448",
            contact: "(830) 556-6651",
            work: "Electric",
        },
        {
            id: "00002",
            customer: "Christine Brooks",
            address: "089 Kutch Green Apt. 448",
            contact: "(830) 556-6651",
            work: "Electric",
        },
        {
            id: "00003",
            customer: "Christine Brooks",
            address: "089 Kutch Green Apt. 448",
            contact: "(830) 556-6651",
            work: "Electric",
        },
        {
            id: "00004",
            customer: "Christine Brooks",
            address: "089 Kutch Green Apt. 448",
            contact: "(830) 556-6651",
            work: "Electric",
        },
        {
            id: "00005",
            customer: "Christine Brooks",
            address: "089 Kutch Green Apt. 448",
            contact: "(830) 556-6651",
            work: "Electric",
        },
        {
            id: "00006",
            customer: "Christine Brooks",
            address: "089 Kutch Green Apt. 448",
            contact: "(830) 556-6651",
            work: "Electric",
        },
        {
            id: "00007",
            customer: "Christine Brooks",
            address: "089 Kutch Green Apt. 448",
            contact: "(830) 556-6651",
            work: "Electric",
        },
    ];

    return (
        <div className="p-4">
            <h4 className="fw-bold mb-4">Customer List</h4>
            <ReusableTable columns={columns} data={data} />
        </div>
    );
};

export default CustomerList;
