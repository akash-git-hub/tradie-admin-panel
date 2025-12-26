import { Dropdown } from "react-bootstrap";

const StatusFilterDropdown = ({
    value = "All",
    options = [],
    onChange
}) => {
    return (
        <Dropdown>
            <Dropdown.Toggle variant="outline-secondary" size="sm">
                {value === "All" ? "Filter by Status" : value}
            </Dropdown.Toggle>

            <Dropdown.Menu>
                {options.map((option) => (
                    <Dropdown.Item
                        key={option}
                        onClick={() => onChange(option)}
                        active={option === value}
                    >
                        {option}
                    </Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default StatusFilterDropdown;
