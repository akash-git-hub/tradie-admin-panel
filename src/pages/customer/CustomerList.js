import { useEffect, useState } from "react";
import Sidebar from "../../component/Sidebar";
import Header from "../../component/Header";
import ReusableTable from "../../component/ReuseableTable";
import { getCustomerDetailAPI, getCustomersAPI } from "../../services/NetworkCall";
import { errorAlert } from "../../component/Alert";
import { Table } from "react-bootstrap";
import TablePagination from "../../component/TablePagination";
import { Loader } from "../../component/Loader";
import { useNavigate } from "react-router-dom";

const CustomerList = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [customersData, setCustomersData] = useState([]);
  const [pagination, setPagination] = useState({ totalPages: 1, page: 1, limit: 10 })

  const fetchCustomersData = async (page = 1, limit = 10) => {
    setLoading(true);
    const res = await getCustomersAPI({ page, limit });
    if (res.success) {
      setCustomersData(res.data);
      setPagination(prevPagination => ({
        ...prevPagination,
        totalPages: res?.pagination?.total_pages
      }));
    } else {
      errorAlert({ message: res.message });
    }
    setLoading(false);
  }

  useEffect(() => { fetchCustomersData(pagination.page, pagination.limit) }, [pagination.page])

  const pageHandler = (page) => {
    setPagination(prevPagination => ({
      ...prevPagination,
      page: page
    }));
    fetchCustomersData(page, pagination.limit);
  }

  const handleRawClick = (userId) => {
    navigate("/customer-profile", { state: { userId } });
  }

  return (
    <>
      <Loader show={loading} />
      <div className="d-flex min-vh-100">
        <Sidebar />
        <div className="flex-grow-1 text-start">
          <Header />
          <div className="p-4">
            <h4 className="fw-bold mb-4">Customer List</h4>
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
                    <th className="small fw-semibold">NAME</th>
                    <th className="small fw-semibold">EMAIL</th>
                    <th className="small fw-semibold">ADDRESS</th>
                    <th className="small fw-semibold">CONTACT NO</th>
                  </tr>
                </thead>
                <tbody>
                  {customersData && customersData.map((data, index) => (
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
                      <td className="small">{data?.address}</td>
                      <td className="small">{data?.mobile_number}</td>
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

export default CustomerList;
