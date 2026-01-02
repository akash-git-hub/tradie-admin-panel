import { useEffect, useState } from "react";
import { Badge, Button, Table } from "react-bootstrap";

import Header from "../../component/Header";
import Sidebar from "../../component/Sidebar";
import { getContractorsAPI } from "../../services/NetworkCall";
import { errorAlert } from "../../component/Alert";
import TablePagination from "../../component/TablePagination";
import { Loader } from "../../component/Loader";
import MessageIcon from "../../Icon/MessageIcon";
import { useNavigate } from "react-router-dom";

const ContractorList = () => {
  const [loading, setLoading] = useState(false);
  const [contractorsData, setContractorsData] = useState([]);
  const [pagination, setPagination] = useState({ totalPages: 1, page: 1, limit: 10 });
  const navigate = useNavigate();

  const fetchContractorsData = async (page = 1, limit = 10) => {
    setLoading(true);
    const res = await getContractorsAPI({ page, limit });
    if (res.success) {
      setContractorsData(res.data);
      setPagination(prevPagination => ({
        ...prevPagination,
        totalPages: res?.pagination?.total_pages
      }));
    } else {
      errorAlert({ message: res.message });
    }
    setLoading(false);
  }

  useEffect(() => { fetchContractorsData(pagination.page, pagination.limit) }, [pagination.page])

  const pageHandler = (page) => {
    setPagination(prevPagination => ({
      ...prevPagination,
      page: page
    }));
    fetchContractorsData(page, pagination.limit);
  }


  const handleMessageButtonClick = (userId) => {
    navigate("/messages", { state: { userId } })
  }

  const handleRawClick = (userId) => {
    navigate("/contractor-profile", { state: { userId } });
  }

  return (
    <>
      <Loader show={loading} />
      <div className="d-flex">
        <Sidebar />
        <div className="flex-grow-1 text-start">
          <Header />
          <div className="p-4">
            <h4 className="fw-bold mb-4">Contractor List</h4>
            <div className="table-responsive border rounded-4 " style={{
              maxHeight: "600px",
              overflowY: "auto",
              border: "1px solid #d9b04c",
              borderRadius: "0.5rem"
            }}>
              <Table className="mb-0 align-middle">
                <thead style={{ position: "sticky", top: 0, background: "#d9b04c", zIndex: 1 }}>
                  <tr style={{ background: "#d9b04c" }}>
                    <th className="small fw-semibold">S NO</th>
                    <th className="small fw-semibold">NAME</th>
                    <th className="small fw-semibold">EMAIL</th>
                    <th className="small fw-semibold">ADDRESS</th>
                    <th className="small fw-semibold">CONTACT NO</th>
                    <th className="small fw-semibold">MESSAGE</th>
                  </tr>
                </thead>
                <tbody>
                  {contractorsData && contractorsData.map((data, index) => (
                    <tr
                      key={index}
                      onClick={() => handleRawClick(data?.id)}
                      style={{ cursor: "pointer" }}
                    >
                      <td className="small">
                        {(pagination.page - 1) * pagination.limit + index + 1}
                      </td>
                      <td className="small"> {data?.name} </td>
                      <td className="small"> {data?.email} </td>
                      <td className="small ">{data?.address}</td>
                      <td className="small">{data?.mobile_number}</td>
                      <td className="small">
                        <Button
                          variant="outline-secondary"
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleMessageButtonClick(data?.id);
                          }}
                        >
                          <MessageIcon /> MESSAGE
                        </Button>
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
          </div>
        </div>
      </div>
    </>

  );
};

export default ContractorList;
