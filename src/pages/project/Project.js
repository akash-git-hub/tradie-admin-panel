import { useEffect, useState } from "react";
import { Badge, Table } from "react-bootstrap";
import Sidebar from "../../component/Sidebar";
import Header from "../../component/Header";
import { getProjectsAPI } from "../../services/NetworkCall";
import { Loader } from "../../component/Loader";
import TablePagination from "../../component/TablePagination";
import { errorAlert } from "../../component/Alert";
import { STATUS_BADGE_MAP } from "../../helper/common_helper";
import moment from "moment-timezone";

const Projects = () => {
  const [loading, setLoading] = useState(false);
  const [projectsData, setProjectsData] = useState([]);
  const [pagination, setPagination] = useState({ totalPages: 1, page: 1, limit: 10 })

  const fetchProjectsData = async (page = 1, limit = 10) => {
    setLoading(true);
    const res = await getProjectsAPI({ page, limit });
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

  useEffect(() => { fetchProjectsData(pagination.page, pagination.limit) }, [pagination.page])

  const pageHandler = (page) => {
    setPagination(prevPagination => ({
      ...prevPagination,
      page: page
    }));
    fetchProjectsData(page, pagination.limit);
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

  return (
    <>
      <Loader show={loading} />
      <div className="d-flex min-vh-100">
        <Sidebar />
        <div className="flex-grow-1 text-start">
          <Header />
          <div className="p-4">
            <h4 className="fw-bold mb-4">Projects</h4>
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
                    <tr key={index}>
                      <td className="small">
                        {(pagination.page - 1) * pagination.limit + index + 1}
                      </td>
                      <td className="small"> {data?.customer} </td>
                      <td className="small"> {data?.title} </td>
                      <td className="small">{data?.contractor}</td>
                      <td className="small">{data?.createdAt
                        ? moment(data.createdAt).local().format("MMM D, YYYY")
                        : ""}</td>
                      <td className="small">{data?.status && getBadge(data?.status)}</td>
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
          </div>
        </div>
      </div>
    </>

  );
};

export default Projects;
