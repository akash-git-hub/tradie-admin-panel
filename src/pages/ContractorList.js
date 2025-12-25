import { Badge } from "react-bootstrap";
import ReusableTable from "../component/ReuseableTable";

const ContractorList = () => {
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
                    className={`border px-3 py-2 rounded-pill ${value === "Complete"
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
            contractor: "Christine Brooks",
            address: "089 Kutch Green Apt. 448",
            contact: "(830) 556-6651",
            type: "Electric",
            message: "Message"
        },
        {
            id: "00002",
            contractor: "Rosie Pearson",
            address: "979 Immanuel Ferry Suite 526",
            contact: "(830) 556-6651",
            type: "Electric",
            message: "Message"
        },
        {
            id: "00003",
            contractor: "Darrell Caldwell",
            address: "089 Kutch Green Apt. 448",
            contact: "(830) 556-6651",
            type: "Electric",
            message: "Message"
        },
        {
            id: "00004",
            contractor: "Gilbert Johnston",
            address: "089 Kutch Green Apt. 448",
            contact: "(830) 556-6651",
            type: "Electric",
            message: "Message"
        },
        {
            id: "00005",
            contractor: "Alan Cain",
            address: "089 Kutch Green Apt. 448",
            contact: "(830) 556-6651",
            type: "Electric",
            message: "Message"
        },
        {
            id: "00006",
            contractor: "Alfred Murray",
            address: "089 Kutch Green Apt. 448",
            contact: "(830) 556-6651",
            type: "Electric",
            message: "Message"
        },
        {
            id: "00007",
            contractor: "Christine Brooks",
            address: "979 Immanuel Ferry Suite 526",
            contact: "(830) 556-6651",
            type: "Electric",
            message: "Message"
        },
    ];

    return (
        <div className="p-4">
            <h4 className="fw-bold mb-4">contractor List</h4>
            <ReusableTable columns={columns} data={data} />
        </div>
    );
};

export default ContractorList;
