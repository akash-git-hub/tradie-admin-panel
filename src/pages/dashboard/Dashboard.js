import { Container, Row, Col, Table, Badge } from "react-bootstrap";
import Sidebar from "../../component/Sidebar";
import Header from "../../component/Header";
import StateCard from "../../component/StateCard";
import RevenueChart from "../../component/RevenueChart";
import CustomerIcon from "../../Icon/CustomerIcon";
import PaymentIcon from "../../Icon/PaymentIcon";
import ProjectIcon from "../../Icon/ProjectIcon";
import ContractIcon from "../../Icon/ContractIcon";
import TablePagination from "../../component/TablePagination";
import moment from "moment-timezone";
import { getProjectsAPI } from "../../services/NetworkCall";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { errorAlert } from "../../component/Alert";
import { STATUS_BADGE_MAP } from "../../helper/common_helper";


const Dashboard = () => {
    const [loading, setLoading] = useState(false);
    const [projectsData, setProjectsData] = useState([]);
    const [statusFilter, setStatusFilter] = useState("All");

    const [pagination, setPagination] = useState({ totalPages: 1, page: 1, limit: 10 })
    const navigate = useNavigate();

    const fetchProjectsData = async (page = 1, limit = 10, status = statusFilter) => {
        const payload = {
            page, limit, status: statusFilter === "All" ? "" : statusFilter
        }
        setLoading(true);
        const res = await getProjectsAPI(payload);
        if (res.success) {
            setProjectsData(res.data);
            setPagination(prevPagination => ({
                ...prevPagination,
                totalPages: res?.pagination?.total_pages
            }));
        } else {
            errorAlert({ message: res.message });
        }
        setLoading(false);
    }

    useEffect(() => { fetchProjectsData(pagination.page, pagination.limit, statusFilter) }, [pagination.page, statusFilter])

    const pageHandler = (page) => {
        setPagination(prevPagination => ({
            ...prevPagination,
            page: page
        }));
        fetchProjectsData(page, pagination.limit, statusFilter);
    }


    const getBadge = (status) => {
        const badge = STATUS_BADGE_MAP[status];

        if (!badge) return null;

        return (
            <Badge
                bg="light"
                className={`border px-3 py-2 rounded-pill ${badge.className}`}
            >
                {badge.text}
            </Badge>
        );
    };


    const handleRowClick = (id) => {
        navigate("/project-detail", { state: { data: { id } } });
    }

    return (
        <div className="d-flex">
            <Sidebar />

            <div className="flex-grow-1">
                <Header />

                <Container fluid className="mt-4">
                    {/* Stat Cards */}
                    <Row className="g-4 mb-4">
                        <Col xl={3} md={6}>
                            <StateCard
                                title="Total Customer"
                                value="555,777"
                                valueColor="#3B82F6"
                                subText="Today Add 10 Customer"
                                icon={<CustomerIcon />}
                            />
                        </Col>
                        <Col xl={3} md={6}>
                            <StateCard
                                title="Total Contractors"
                                value="430,493"
                                valueColor="#EF4444"
                                subText="Today Add 32 Contractor"
                                icon={<ContractIcon />}
                            />
                        </Col>
                        <Col xl={3} md={6}>
                            <StateCard
                                title="Total Projects"
                                value="348,931"
                                valueColor="#6366F1"
                                subText="Today 40 Complete projects"
                                icon={<ProjectIcon />}
                            />
                        </Col>
                        <Col xl={3} md={6}>
                            <StateCard
                                title="Total Earnings"
                                value="$12,777"
                                valueColor="#22C55E"
                                subText="Today earning $1012"
                                icon={<PaymentIcon />}
                            />
                        </Col>
                    </Row>

                    {/* Revenue Chart */}
                    <Row className="mb-4">
                        <Col>
                            <RevenueChart />
                        </Col>
                    </Row>

                    {/* Project Details */}
                    <Row>
                        <Col>
                            <h4 className="fw-bold mb-3 text-start">Projects List</h4>
                            <div className="table-responsive border rounded-4" style={{
                                maxHeight: "600px",
                                overflowY: "auto",
                                border: "1px solid #d9b04c",
                                borderRadius: "0.5rem"
                            }}>
                                <Table className="mb-0 align-middle">
                                    <thead style={{ position: "sticky", top: 0, background: "#d9b04c", zIndex: 1 }}>
                                        <tr style={{ background: "#d9b04c" }}>
                                            <th className="small fw-semibold">S NO</th>
                                            <th className="small fw-semibold">CUSTOMER NAME</th>
                                            <th className="small fw-semibold">PROJECT NAME</th>
                                            <th className="small fw-semibold">CONTRACTOR NAME</th>
                                            <th className="small fw-semibold">START DATE</th>
                                            <th className="small fw-semibold">STATUS</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {projectsData && projectsData.map((data, index) => (
                                            <tr key={index}
                                                onClick={() => handleRowClick(data?.id)}
                                                style={{ cursor: "pointer" }}
                                                className="table-row-hover"
                                            >
                                                <td className="small">
                                                    {(pagination.page - 1) * pagination.limit + index + 1}
                                                </td>
                                                <td className="small">{data?.customer}</td>
                                                <td className="small">{data?.title}</td>
                                                <td className="small">{data?.contractor}</td>
                                                <td className="small">
                                                    {data?.createdAt
                                                        ? moment(data.createdAt).local().format("MMM D, YYYY")
                                                        : ""}
                                                </td>
                                                <td className="small">
                                                    {data?.status && getBadge(data?.status)}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>

                                </Table>
                            </div>
                            {/* Pagination */}
                            {pagination && pagination?.totalPages > 1 && <TablePagination
                                totalPages={pagination?.totalPages}
                                currentPage={pagination?.page}
                                onPageChange={pageHandler}
                            />}
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Dashboard;
