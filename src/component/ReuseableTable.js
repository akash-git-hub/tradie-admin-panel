import { Table, Pagination } from "react-bootstrap";
import { useState } from "react";
import TablePagination from "./TablePagination";

const ReusableTable = ({ columns, data, pagination, pageHandler, rowsPerPage = 6 }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const currentData = data.slice(startIndex, startIndex + rowsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="table-responsive border rounded-4 overflow-hidden">
      <Table className="mb-0 align-middle">
        <thead>
          <tr style={{ background: "#d9b04c" }}>
            {columns.map((col, index) => (
              <th key={index} className="small fw-semibold">
                {col.label}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {currentData.map((row, index) => (
            <tr key={index}>
              {columns.map((col, idx) => (
                <td key={idx} className="small">
                  {col.render ? col.render(row[col.key], row) : row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
      {/* Pagination */}
      {totalPages > 1 && (
        <div className="d-flex justify-content-end mt-2">
          <Pagination>
            <Pagination.Prev
              onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
              disabled={currentPage === 1}
            />
            {Array.from({ length: totalPages }, (_, i) => (
              <Pagination.Item
                key={i + 1}
                active={currentPage === i + 1}
                onClick={() => handlePageChange(i + 1)}
              >
                {i + 1}
              </Pagination.Item>
            ))}
            <Pagination.Next
              onClick={() =>
                handlePageChange(Math.min(currentPage + 1, totalPages))
              }
              disabled={currentPage === totalPages}
            />
          </Pagination>
        </div>
      )}
    </div>
  );
};

export default ReusableTable;
